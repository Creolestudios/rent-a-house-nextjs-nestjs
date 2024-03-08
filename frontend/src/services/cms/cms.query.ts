import { gql } from '@apollo/client';
import { serviceAuthInstanceMutation } from '../apollo-client';
import { getAllCMS } from './cms.refetch';

function getAllCMSQuery() {
  return serviceAuthInstanceMutation({
    type: 'query',
    mutate: getAllCMS,
  });
}

function getOneCMSQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'query',
    mutate: gql`
      query MyQuery($identifier: String!) {
        FindOneCms(identifier: $identifier) {
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
    `,
    variables: {
      ...payload,
    },
  });
}

export { getAllCMSQuery, getOneCMSQuery };
