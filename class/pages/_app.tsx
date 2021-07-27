import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.css";
import "antd/dist/antd.css";

import firebase from "firebase/app";
import "firebase/firestore";

if (typeof window !== "undefined") {
  firebase.initializeApp({
    apiKey: "AIzaSyB2AZodzgw35GmS8qlyy3Z22jFI3Du2GH8",
    authDomain: "codecomp-01.firebaseapp.com",
    databaseURL: "https://codecamp-01.firebaseio.com",
    projectId: "codecamp-01",
    storageBucket: "codecamp-01.appspot.com",
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend02.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
