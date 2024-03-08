import { gql } from '@apollo/client';
import { serviceAuthInstanceMutation } from '../apollo-client';

function tenantListingQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'query',
    mutate: gql`
      query (
        $pageNo: Int!
        $searchTenant: String!
        $status: String!
        $propertyId: Int!
      ) {
        tenantHistory(
          page_number: $pageNo
          page_size: 10
          tenant_name: $searchTenant
          status: $status
          tenantPropertyId: { id: $propertyId }
        ) {
          booking {
            id
            status
            start_date
            end_date
            created_at
            tenant {
              id
              first_name
              last_name
              image
            }
            property {
              id
              name
            }
          }
          total_booking
        }
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function tenantDetailsQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'query',
    mutate: gql`
      query ($id: Int!) {
        tenantView(tenantInput: { id: $id }) {
          data {
            id
            status
            amount
            start_date
            end_date
            month_difference
            service_cost
            tenant {
              first_name
              last_name

              image
            }
            property {
              id
              rent
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

export { tenantListingQuery, tenantDetailsQuery };
