import { GraphQLClient } from "graphql-request";
import { gql } from "@apollo/client";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

// @ts-ignore
export const getAccessToken = async (setAccessToken) => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend02.codebootcamp.co.kr/graphql04",
      {
        credentials: "include",
      }
    );

    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;

    setAccessToken(newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.log(error.message);
  }
};
