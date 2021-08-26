import { gql } from "@apollo/client";

export const FETCH_TRANSACTIONS_ALL = gql`
  query fetchPointTransactions($search: String) {
    fetchPointTransactions(search: $search) {
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
  query fetchPointTransactionsOfBuying($search: String) {
    fetchPointTransactionsOfBuying(search: $search) {
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
  query fetchPointTransactionsOfLoading($search: String) {
    fetchPointTransactionsOfLoading(search: $search) {
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
  query fetchPointTransactionsOfSelling($search: String) {
    fetchPointTransactionsOfSelling(search: $search) {
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
