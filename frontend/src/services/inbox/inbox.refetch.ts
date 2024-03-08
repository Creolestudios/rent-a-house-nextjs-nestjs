import { gql } from '@apollo/client';
export const getMessageRefetch=gql`
query ($statusId: Int!) {
  inbox(status:5) {
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
`