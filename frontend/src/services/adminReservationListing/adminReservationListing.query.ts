import { gql } from "@apollo/client";
import { serviceAuthInstanceMutation } from "../apollo-client";
import { reservationListAdmin } from "./adminReservationListing.refetch";

function adminReservationListingQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: "query",
    mutate: reservationListAdmin,
    variables: {
      ...payload,
    },
  });
}

function adminSingleReservationQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: "query",
    mutate: gql`
      query ($id: Int!) {
        reservation(id: $id) {
          ServiceFee
          TotalAmountPaid
          reservations {
            id
            status
            start_date
            end_date
            amount
            month_difference
            propertys_id {
              id
              name
              rent
            }
            tenant {
              id
              image
              first_name
              last_name
            }
            landlord {
              id
              image
              first_name
              last_name
            }
          }
          messages {
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
      }
    `,
    variables: { ...payload },
  });
}
export { adminReservationListingQuery, adminSingleReservationQuery };
