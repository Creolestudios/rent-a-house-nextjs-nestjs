import { gql } from '@apollo/client';
import { serviceAuthInstanceMutation } from '../apollo-client';

export function staticPageContentQuery(payload) {
  return serviceAuthInstanceMutation({
    type: 'query',
    mutate: gql`
    query ($pageName: String!) {
      FindOneCms(identifier: $pageName) {
        id
        identifier
        page_name
        meta_title
        meta_description
        language_id
        content
      }
    }
    `,
    variables: {
      ...payload,
    },
  });
}
