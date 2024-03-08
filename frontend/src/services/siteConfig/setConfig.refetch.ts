import { gql } from "@apollo/client";

export const getSiteConfig = gql`
  query {
    findConfigOnly {
      data {
        id
        logo
        email
        name
        address
        contact
      }
    }
  }
`;
