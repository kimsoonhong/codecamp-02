import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.css";
import "antd/dist/antd.css";
import { createUploadLink } from "apollo-upload-client";

// import firebase from "firebase/app";
import "firebase/firestore";
import { createContext, useState } from "react";

import { getAccessToken } from "../src/commons/libraries/getAccessToken";
import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";
Sentry.init({
  dsn: "https://0f7fdee62033447fa15febd510c38f79@o965502.ingest.sentry.io/5916348",
});
// if (typeof window !== "undefined") {
//   firebase.initializeApp({
//     apiKey: "AIzaSyB2AZodzgw35GmS8qlyy3Z22jFI3Du2GH8",
//     authDomain: "codecomp-01.firebaseapp.com",
//     databaseURL: "https://codecamp-01.firebaseio.com",
//     projectId: "codecamp-01",
//     storageBucket: "codecamp-01.appspot.com",
//   });
// }
interface IContext {
  accessToken: string;
  setAccessToken: string;
  userInfo: string;
  setUserInfo: string;
}

export const GlobalContext = createContext<IContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();
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
          //2. 발급받은 엑세스 토큰으로 방금 실패했던 쿼리 재실행하기
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
    connectToDevTools: true,
  });

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        {/* <Head>
          <script
            type="text/javascript"
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ac7229dd27b8430a65dbcbadfca5c2fa"
          ></script>
        </Head> */}
        <Component {...pageProps} />
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
