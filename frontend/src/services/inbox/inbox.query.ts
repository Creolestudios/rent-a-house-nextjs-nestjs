import { gql } from '@apollo/client';
import { serviceAuthInstanceMutation } from '../apollo-client';
import { getMessageRefetch } from './inbox.refetch';

export function inboxQuery(payload: any) {
  console.log("p",payload)
  return serviceAuthInstanceMutation({
    type: 'query',
    fetchPolicy: 'network-only',
    // mutate: getMessageRefetch,
    mutate:gql`
    query ($statusId: Int!,$name :String!) {
      inbox(status: $statusId,name:$name) {
        data {
          id
          booking_id
          to_id
          from_id
          status
          created_at
          updated_at
          landlordData {
            id
            first_name
            last_name
            image
          }
          dates {
            start_date
            end_date
          }
          property {
            name
            id
          }
          city {
            city_id
            city_name
          }
          userMessages {
            userMessages {
              id
              message_id
              to_id
              from_id
              text
              file
              status
              created_at
            }
          }
          tenantData {
            id
            first_name
            last_name
            image
          }
        }
      }
    }
    `,
    variables: {
      ...payload,
    },
   
  });
}
