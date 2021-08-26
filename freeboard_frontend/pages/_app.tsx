import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { AppProps } from "next/dist/next-server/lib/router/router";
// import "../styles/globals.css";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
import { onError } from "@apollo/client/link/error";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createContext, useEffect, useState } from "react";

interface IContext {
  accessToken?: string;
  setAccessToken?: any;
  userInfo?: string;
  setUserInfo?: any;
  userToken?: string;
}

export const GlobalContext = createContext<IContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("localLoginUser") || "";
    // @ts-ignore
    setAccessToken(userToken);
    const userInfo = localStorage.getItem("localUserData") || "";
    // @ts-ignore
    setUserInfo(userInfo);
  }, []);

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend02.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    uri: "http://backend02.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });
  return (
    // @ts-ignore
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        {/* <Layout> */}
        <Global styles={globalStyles} />
        <Component {...pageProps} />
        {/* </Layout> */}
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
