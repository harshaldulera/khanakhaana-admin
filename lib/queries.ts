import { gql } from '@apollo/client';

export const GET_STATISTICS = gql`
  query GetStatistics {
    donar_aggregate {
      aggregate {
        count
      }
    }
    ngo_aggregate {
      aggregate {
        count
      }
    }
    volunteer_aggregate {
      aggregate {
        count
      }
    }
    donar_transaction_aggregate(where: {status: {_eq: "DELIVERED"}}) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_TOP_DONORS = gql`
  query GetTopDonors {
    donar(limit: 3, order_by: {donar_transactions_aggregate: {count: desc}}) {
      id
      name
      donar_transactions_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

export const GET_TOP_NGOS = gql`
  query GetTopNgos {
    ngo(limit: 3, order_by: {donar_transactions_aggregate: {count: desc}}) {
      id
      name
      donar_transactions_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

export const GET_TOP_VOLUNTEERS = gql`
  query GetTopVolunteers {
    volunteer(limit: 3, order_by: {donar_transactions_aggregate: {count: desc}}) {
      id
      name
      donar_transactions_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;