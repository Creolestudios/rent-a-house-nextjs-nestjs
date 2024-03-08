import { gql } from '@apollo/client';

export const getAllCMS = gql`
  query MyQuery {
    FindAllCMSResponse {
      page {
        id
        identifier
        page_name
        meta_title
        meta_description
        language_id
        content
        created_at
        updated_at
        deleted_at
      }
    }
  }
`;
