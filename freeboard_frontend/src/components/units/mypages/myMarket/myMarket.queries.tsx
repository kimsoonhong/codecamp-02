import { gql } from "@apollo/client";

export const FETCH_ISOLD = gql`
  query fetchUseditemsISold($aaa: Int) {
    fetchUseditemsISold(page: $aaa) {
      _id
      name
      remarks
      contents
      tags
      price
      buyer {
        _id
      }
      createdAt
    }
  }
`;

export const FETCH_IPICKED = gql`
  query fetchUseditemsIPicked {
    fetchUseditemsIPicked {
      _id
      name
      remarks
      contents
      tags
      price
      buyer {
        _id
      }
      createdAt
    }
  }
`;
