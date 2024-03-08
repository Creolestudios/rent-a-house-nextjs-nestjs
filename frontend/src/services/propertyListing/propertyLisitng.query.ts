import { gql } from '@apollo/client';
import {
  serviceAuthInstanceMutation,
  serviceInstanceMutation,
} from '../apollo-client';
import {
  favouritePropertyListing,
  featurePropertyAuthListing,
  searchPropertyAuth,
} from './propertyListing.refetch';
import { perUserPropertyList } from '@/services/propertyListing/propertyListing.refetch';

function featurePropertyListingQuery() {
  return serviceInstanceMutation(
    'query',
    gql`
      query MyQuery {
        featurePropertyList {
          available_from
          type
          name
          id
          rent
          is_favorite
          images {
            name
          }
          space_overview {
            size
            bedrooms
          }
        }
      }
    `
  );
}

function featurePropertyAuthListingQuery() {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: featurePropertyAuthListing,
  });
}

function favouritePropertyListingQuery(payload: { pageNo: number }) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: favouritePropertyListing,
    variables: {
      ...payload,
    },
  });
}

function searchPropertyQuery(payload: any) {
  return serviceInstanceMutation(
    'query',
    gql`
      query MyQuery(
        $inDate: String
        $outDate: String
        $pageNo: Int!
        $area: [String!]
        $sort: Int!
        $max: Float
        $min: Float
        $size: [Int!]
        $suitable: [String!]
        $type: [String!]
        $bill: Boolean
        $facility: [String!]
        $furnished: Int
      ) {
        publicSearchAndFilterProperty(
          searchAndFilterParam: {
            locations: $area
            start_date: $inDate
            end_date: $outDate
            page_number: $pageNo
            page_size: 9
            sort_by: $sort
            max_price: $max
            min_price: $min
            size: $size
            suitable: $suitable
            type: $type
            bills_includes: $bill
            facilities: $facility
            is_furnished: $furnished
          }
        ) {
          field_wise_count {
            amenities {
              name
              total
            }
            facilities {
              name
              total
            }
            furniture {
              name
              total
            }
            size {
              name
              total
            }
            suitable_for {
              name
              total
            }
            type {
              name
              total
            }
          }
          total_properties
          properties {
            id
            latitude
            longitude
            additional_required_cost {
              amount

              id
              name
            }
            amenity {
              availability

              id
              property_id
            }
            available_from
            city_details {
              id
              name

              state_id
            }
            country_details {
              code

              status
              name
              id
            }
            country_id
            created_at
            currency

            first_month_rent
            house_no
            is_mobile_verified
            max_rental_period
            images {
              id
              name
            }
            space_overview {
              bedrooms
              size
            }
            min_rental_period
            name
            one_time_service_fee
            postal_code
            rent
            state_id
            status
            tenant_counts
            thumbnail
            is_favorite
            type

            user_id
          }
        }
      }
    `,
    {
      ...payload,
    }
  );
}

function searchPropertyAuthQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'query',
    mutate: searchPropertyAuth,
    variables: {
      ...payload,
    },
  });
}

function singlePropertyQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'query',
    mutate: gql`
      query MyQuery($id: Int!) {
        findOneProperty(property_id: $id) {
          name
          rent
          images {
            name
          }
          amenity {
            availability
            amenities_id {
              name
              status
              type
            }
            created_at
            deleted_at
            id
            property_id
            updated_at
          }
          facility {
            availability
            amenities_id {
              created_at
              deleted_at
              id
              name
              status
              type
              updated_at
            }
            created_at
            deleted_at
            id
            property_id
            updated_at
          }
          additional_required_cost {
            amount
            created_at
            deleted_at
            id
            name
            updated_at
            property_id
          }
          available_from
          city_details {
            created_at
            deleted_at
            id
            name
            state_id
            updated_at
          }
          city_id
          country_details {
            created_at
            deleted_at
            id
            name
            status
            updated_at
          }
          country_id
          created_at
          deleted_at
          currency
          host_details {
            address
            TotalProperties
            country_id
            created_at
            deleted_at
            dialer_code
            dob
            email
            first_name
            gender
            id
            identity_proof
            image
            is_email_verified
            is_landlord
            last_name
            is_mobile_verified
            login_at
            mobile
            notification_is_enable
            notification_language
            occupation
            password
            proof_of_occupation_income
            reset_password_token
            reset_password_token_exp
            social_token
            social_type
            token
            updated_at
            user_type
            verification_token
            verification_token_exp
          }
          house_no
          id
          is_mobile_verified
          max_rental_period
          min_rental_period
          rental_condition {
            additional_required_cost {
              amount
              created_at
              deleted_at
              id
              name
              property_id
              updated_at
            }
            cancellation_policy_id
            contract_type
            created_at
            updated_at
            deleted_at
            id
            property_id
          }
          rules_and_preference {
            created_at
            deleted_at
            document
            gender
            pets
            id
            property_id
            tenant
            updated_at
          }
          space_overview {
            bedrooms
            created_at
            deleted_at
            details
            updated_at
            size
            property_id
            peoples
            is_furnished
            id
          }
          state_details {
            country_id
            created_at
            deleted_at
            id
            name
            updated_at
          }
          state_id
          status
          tenant_counts
          total_favorites
          type
          updated_at
          user_id
        }
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function getFirstMonthRent(payload: { id: number }) {
  return serviceInstanceMutation(
    'query',
    gql`
      query ($id: Int!) {
        firstMonthRent(property_id: $id) {
          first_month_rent
        }
      }
    `,
    {
      ...payload,
    }
  );
}

function perUserPropertyListQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'query',
    mutate: perUserPropertyList,
    fetchPolicy:'network-only',
    variables: {
      ...payload,
    },
  });
}

export {
  featurePropertyListingQuery,
  featurePropertyAuthListingQuery,
  favouritePropertyListingQuery,
  searchPropertyQuery,
  searchPropertyAuthQuery,
  singlePropertyQuery,
  getFirstMonthRent,
  perUserPropertyListQuery,
};
