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
      "https://backend02.codebootcamp.co.kr/graphql",
      {
        credentials: "include",
      }
    );

    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;

    console.log(result, "result");
    console.log(newAccessToken, "newAccessToken");
    setAccessToken(newAccessToken);
    return newAccessToken;
  } catch (error) {
    alert(error.message);
  }
};
