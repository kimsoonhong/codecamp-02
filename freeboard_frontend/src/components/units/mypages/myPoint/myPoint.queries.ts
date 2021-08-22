import { gql } from "@apollo/client";

export const FETCH_TRANSACTIONS_ALL = gql`
  query fetchPointTransactions {
    fetchPointTransactions {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      createdAt
      useditem {
        name
      }
    }
  }
`;

export const FETCH_TRANSACTIONS_BUYING = gql`
  query fetchPointTransactionsOfBuying {
    fetchPointTransactionsOfBuying {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      createdAt
      useditem {
        name
      }
    }
  }
`;

export const FETCH_TRANSACTIONS_LOADING = gql`
  query fetchPointTransactionsOfLoading {
    fetchPointTransactionsOfLoading {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      createdAt
      updatedAt
      useditem {
        name
      }
    }
  }
`;

export const FETCH_TRANSACTIONS_SELLING = gql`
  query fetchPointTransactionsOfSelling {
    fetchPointTransactionsOfSelling {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      createdAt
      useditem {
        name
      }
    }
  }
`;
