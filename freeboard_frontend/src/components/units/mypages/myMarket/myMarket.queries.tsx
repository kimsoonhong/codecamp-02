import { gql } from "@apollo/client";

export const FETCH_ISOLD = gql`
  query fetchUseditemsISold {
    fetchUseditemsISold {
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
