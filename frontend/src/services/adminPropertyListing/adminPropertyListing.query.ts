import { gql } from '@apollo/client';
import { serviceAuthInstanceMutation } from '../apollo-client';
import { propertyListAdmin } from './adminPropertyListing.refetch';

function adminPropertyListingQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'query',
    mutate: propertyListAdmin,
    variables: {
      ...payload,
    },
  });
}

function adminSinglePropertyQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'query',
    mutate: gql`
      query MyQuery($id: Int!) {
        PropertyEntity: StepWisePropertyData(
          property_id: $id
          property_step: 2
        ) {
          ... on PropertyEntity {
            id
            created_at
            name
            available_from
            type
            country_details {
              name
            }
            city_details {
              name
            }
            state_details {
              name
            }
            postal_code
            house_no
            rent
            min_rental_period
            max_rental_period
            tenant_counts
            images {
              name
              id
            }
            amenity {
              amenities_id {
                name
              }
            }
            facility {
              amenities_id {
                name
              }
            }
            rental_condition {
              contract_type
              cancellation_policy_id
              additional_required_cost {
                name
                amount
              }
            }
            rules_and_preference {
              document
            }
            space_overview {
              bedrooms
              details
              size
              peoples
              is_furnished
            }
            host_details {
              is_email_verified
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

export { adminPropertyListingQuery, adminSinglePropertyQuery };
