import { gql } from "@apollo/client";

export const getCommission = gql`
  query {
    commisionData {
      message
      data {
        value
        commission_from
      }
    }
  }
`;
