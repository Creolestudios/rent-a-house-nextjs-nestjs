import { gql } from '@apollo/client';

export const getAllLanguage = gql`
  query MyQuery {
    language_list {
      id
      name
      language_code
    }
  }
`;
