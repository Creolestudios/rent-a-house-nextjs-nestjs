import { gql } from '@apollo/client';
import { serviceAuthInstanceMutation } from '../apollo-client';

function verifyOtpMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($verifyOTPInput: VerifyOTPInput!) {
        verifyOTP(verifyOTPInput: $verifyOTPInput)
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function createDuplicatePropertyMutation(payload:any){
  
 return serviceAuthInstanceMutation({
  type:'mutation',
  mutate:gql`
  mutation($property_id:Int!){
    duplicateProperty(property_id:$property_id){
      message,
      property_id
    }
  }
  `,
  variables:{
    ...payload
  }
 })
}

function editStep2Mutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($updatePropertyStep2Input: UpdatePropertyStep2Input!) {
        editPropertyStep2(updatePropertyStep2Input: $updatePropertyStep2Input) {
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

function editStep3Mutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($updatePropertyStep3Input: UpdatePropertyStep3Input!) {
        editPropertyStep3(updatePropertyStep3Input: $updatePropertyStep3Input) {
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

function editStep4Mutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($updatePropertyStep4Input: UpdatePropertyStep4Input!) {
        editPropertyStep4(updatePropertyStep4Input: $updatePropertyStep4Input) {
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

function editStep5Mutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($updatePropertyStep5Input: UpdatePropertyStep5Input!) {
        editPropertyStep5(updatePropertyStep5Input: $updatePropertyStep5Input) {
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

function editStep6Mutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($updatePropertyStep6Input: UpdatePropertyStep6Input!) {
        editPropertyStep6(updatePropertyStep6Input: $updatePropertyStep6Input) {
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

function editStep7Mutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($id: [Int!]!) {
        removePropertyStep7(id: $id)
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function deletePropertyMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($propertyId: Int!) {
        deleteProperty(property_id: $propertyId)
      }
    `,
    variables: {
      ...payload,
    },
  });
}

export {
  verifyOtpMutation,
  createDuplicatePropertyMutation,
  editStep2Mutation,
  editStep3Mutation,
  editStep4Mutation,
  editStep5Mutation,
  editStep6Mutation,
  editStep7Mutation,
  deletePropertyMutation,
};
