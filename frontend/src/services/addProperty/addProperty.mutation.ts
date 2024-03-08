import { gql } from '@apollo/client';
import { serviceAuthInstanceMutation } from '../apollo-client';

function addPropertySetp2Mutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation (
        $availability: DateTime!
        $countryId: Int!
        $stateId: Int!
        $cityId: Int!
        $houseNo: String!
        $postal: String!
        $rentMonth: Float!
        $min: Float!
        $max: Float!
        $type: String!
        $propertyName: String!
      ) {
        createPropertyStep2(
          createPropertyInput: {
            available_from: $availability
            city_id: $cityId
            country_id: $countryId
            currency: "CAD"
            house_no: $houseNo
            max_rental_period: $max
            min_rental_period: $min
            name: $propertyName
            rent: $rentMonth
            state_id: $stateId
            type: $type
            postal_code: $postal
          }
        ) {
          property_id
        }
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function addPropertySetp3Mutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation (
        $bedroom: Int!
        $details: String!
        $furnished: Int!
        $people: Int!
        $propertyId: Int!
        $size: Int!
      ) {
        createPropertyStep3(
          createPropertyInput: {
            bedrooms: $bedroom
            details: $details
            is_furnished: $furnished
            peoples: $people
            property_id: $propertyId
            size: $size
          }
        ) {
          property_id
          message
        }
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function addPropertySetp4Mutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($data: [CreatePropertyStep4InputType!]!, $propertyId: Int!) {
        createPropertyStep4(
          createPropertyInput: {
            property_id: $propertyId
            step4inputList: $data
          }
        ) {
          message
          property_id
        }
      }
    `,
    variables: {
      data: payload.data,
      propertyId: payload.propertyId,
    },
  });
}

function addPropertySetp5Mutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation MyMutation(
        $cancellationPolicy: Int!
        $contractType: Int!
        $propertyId: Int!
        $additionalCost: [AdditionalRequiredCostInput]
      ) {
        createPropertyStep5(
          createPropertyInput: {
            cancellation_policy_id: $cancellationPolicy
            contract_type: $contractType
            property_id: $propertyId
            additional_required_cost: $additionalCost
          }
        ) {
          message
          property_id
        }
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function addPropertySetp6Mutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation MyMutation(
        $document: Int!
        $gender: Int!
        $pets: Int!
        $propertyId: Int!
        $tenant: Int!
      ) {
        createPropertyStep6(
          createPropertyInput: {
            document: $document
            gender: $gender
            pets: $pets
            property_id: $propertyId
            tenant: $tenant
          }
        ) {
          message
          property_id
        }
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function addPropertySetp7Mutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation (
        $image: [Upload!]
        $videos: Upload
        $youtube: String!
        $propertyId: Int!
      ) {
        createPropertyStep7(
          property_id: $propertyId
          images: $image
          videos: $videos
          youtube_url: $youtube
        ) {
          property_id
        }
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function addMobileSendOtpMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($dailer: String!, $mobile: String!) {
        insertPhoneNo(dialerCode: $dailer, mobileNumber: $mobile) {
          mobile_number
        }
      }
    `,
    variables: {
      ...payload,
    },
  });
}

export {
  addPropertySetp2Mutation,
  addPropertySetp3Mutation,
  addPropertySetp4Mutation,
  addPropertySetp5Mutation,
  addPropertySetp6Mutation,
  addPropertySetp7Mutation,
  addMobileSendOtpMutation,
};
