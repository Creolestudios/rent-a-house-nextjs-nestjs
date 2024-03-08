import { gql } from '@apollo/client';

export const propertyListAdmin = gql`
  query MyQuery($pageNo: Int!, $propertyName: String!, $propertyType: String!) {
    searchPropertyByParam(
      page_number: $pageNo
      page_size: 10
      property_name: $propertyName
      property_type: $propertyType
    ) {
      total_properties
      properties {
        id
        name
        type
        tenant_counts
        available_from
        host_details {
          first_name
          last_name
          image
        }
      }
    }
  }
`;
 