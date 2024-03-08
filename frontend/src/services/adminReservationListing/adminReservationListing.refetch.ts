import { gql } from "@apollo/client";
export const reservationListAdmin=gql`
query MyQuery($pageNo:Int!,$name: String!, $propertyType: String!,$status:Int!){
  allReservation(
    name: $name
    page: $pageNo
    pagesize: 10
    propertyType:$propertyType
    status: $status
  ) {
    totalReservations
    reservations {
      id
      start_date
      end_date
      tenant {
        id
        first_name
        last_name
        image
      }
      landlord {
        id
        first_name
        last_name
        image
      }
      status
      propertys_id { 
        name
        type
      }
    }
  }
}
`