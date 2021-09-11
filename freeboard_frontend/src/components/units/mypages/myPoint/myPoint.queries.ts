import { gql } from "@apollo/client";

export const FETCH_TRANSACTIONS_ALL = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      createdAt
    }
  }
`;

export const FETCH_TRANSACTIONS_BUYING = gql`
  query fetchPointTransactionsOfBuying($search: String, $page: Int) {
    fetchPointTransactionsOfBuying(search: $search, page: $page) {
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
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      createdAt
      updatedAt
    }
  }
`;

export const FETCH_TRANSACTIONS_SELLING = gql`
  query fetchPointTransactionsOfSelling($search: String, $page: Int) {
    fetchPointTransactionsOfSelling(search: $search, page: $page) {
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

export const FETCH_BUYING_COUNT = gql`
  query fetchPointTransactionsCountOfBuying {
    fetchPointTransactionsCountOfBuying
  }
`;

export const FETCH_LOADING_COUNT = gql`
  query fetchPointTransactionsCountOfLoading {
    fetchPointTransactionsCountOfLoading
  }
`;

export const FETCH_SELLING_COUNT = gql`
  query fetchPointTransactionsCountOfSelling {
    fetchPointTransactionsCountOfSelling
  }
`;

