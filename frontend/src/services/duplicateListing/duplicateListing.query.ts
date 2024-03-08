import { gql } from "@apollo/client";
import { serviceAuthInstanceMutation } from "../apollo-client";

function duplicateListQuery() {
  return serviceAuthInstanceMutation({
    type: "query",
    mutate: gql`
      query MyQuery {
        duplicatePropertyList {
          id
          name
          thumbnail
          available_from
          city_id
          created_at
          country_id
          currency
          deleted_at
          house_no
          is_mobile_verified
          max_rental_period
          min_rental_period
          rent
          state_id
          status
          type
          updated_at
          user_id
          city_details {
            id
            name
            created_at
            deleted_at
          }
          host_details {
            id
            first_name
            last_name
            mobile
            dialer_code
          }
        }
      }
    `,
  });
}

function mobileNumberQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: "query",
    mutate: gql`
      query ($property_id: Int!) {
        propertyVerification(property_id: $property_id) {
          mobile_number
          property_id
        }
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function requestOtpQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: "query",
    mutate: gql`
      query ($property_id: Int!) {
        sendOTP(property_id: $property_id) {
          mobile_number
          property_id
        }
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function getStep2DataQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: "query",
    mutate: gql`
      query ($property_id: Int!) {
        StepWisePropertyData(property_step: 2, property_id: $property_id) {
          ... on PropertyEntity {
            id
            name
            available_from
            city_details{
              name
            }
            state_details{
              name
            }
            city_id
            country_id
            created_at
            currency
            deleted_at
            house_no
            is_mobile_verified
            max_rental_period
            min_rental_period
            state_id
            rent
            status
            type
            updated_at
            user_id
            postal_code
          }
        }
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function getStep3DataQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: "query",
    fetchPolicy:'network-only',
    mutate: gql`
      query ($property_id: Int!) {
        StepWisePropertyData(property_step: 3, property_id: $property_id) {
          ... on SpaceOverviewEntity {
            id
            bedrooms
            created_at
            deleted_at
            details
            is_furnished
            peoples
            property_id
            size
            updated_at
          }
        }
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function getStep4DataQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'query',
    fetchPolicy:'network-only',
    mutate: gql`
      query ($property_id: Int!) {
        StepWisePropertyData(property_step: 4, property_id: $property_id) {
          ... on PropertyAmenityEntity {
            id
            amenities_id {
              id
              name
            }
            availability
            created_at
            deleted_at
            property_id
            updated_at
          }
        }
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function getStep5DataQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: "query",
    fetchPolicy:'network-only',
    mutate: gql`
      query ($property_id: Int!) {
        StepWisePropertyData(property_step: 5, property_id: $property_id) {
          ... on RentalConditionEntity {
            id
            cancellation_policy_id
            contract_type
            created_at
            deleted_at
            property_id
            updated_at
            additional_required_cost {
              amount
              created_at
              deleted_at
              id
              name
              updated_at
              property_id
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

function getStep6DataQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: "query",
    fetchPolicy:'network-only',
    mutate: gql`
      query ($property_id: Int!) {
        StepWisePropertyData(property_step: 6, property_id: $property_id) {
          ... on RuleOrPreferenceEntity {
            id
            pets
            property_id
            tenant
            gender
            document
            created_at
            deleted_at
            updated_at
          }
        }
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function getStep7DataQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: "query",
    fetchPolicy:'network-only',
    mutate: gql`
      query ($property_id: Int!) {
        StepWisePropertyData(property_step: 7, property_id: $property_id) {
          ... on MediaEntity {
            id
            name
            property_id
            type
            created_at
            updated_at
            deleted_at
          }
        }
      }
    `,
    variables: {
      ...payload,
    },
  });
}

export {
  duplicateListQuery,
  mobileNumberQuery,
  requestOtpQuery,
  getStep2DataQuery,
  getStep3DataQuery,
  getStep4DataQuery,
  getStep5DataQuery,
  getStep6DataQuery,
  getStep7DataQuery,
};
