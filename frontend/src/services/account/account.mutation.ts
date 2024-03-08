import { gql } from '@apollo/client';
import {
  serviceAuthInstanceMutation,
  serviceInstanceMutation,
} from '../apollo-client';
import { getUserDetails } from './account.refetch';

function updateuserProfileOnly(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation (
        $image: Upload
        $UpdateUserProfileOnly: UpdateUserProfileOnly!
      ) {
        updateUserProfileOnly(
          image: $image
          UpdateUserProfileOnly: $UpdateUserProfileOnly
        )
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function changepasswordMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($ChangeUserPassword: ChangePasswordArgs!) {
        changeUserPassword(ChangeUserPassword: $ChangeUserPassword)
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function supportingDocumentDeleteMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation (
        $id: Int!
        $identity_proof: String
        $proof_of_occupation_income: String
      ) {
        supportingDocument(
          supportingDocument: {
            id: $id
            identity_proof: $identity_proof
            proof_of_occupation_income: $proof_of_occupation_income
          }
        )
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function supportingDocumentUploadMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation (
        $id: Int!
        $identity_proof: Upload
        $proof_of_occupation_income: Upload
      ) {
        supportingDocument(
          supportingDocument: { id: $id }
          identity_proof: $identity_proof
          proof_of_occupation_income: $proof_of_occupation_income
        )
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function contactInfoMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($UserContactInformation: UserContactInformation!) {
        userContactInformation(UserContactInformation: $UserContactInformation)
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function createLanguageMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($createLanguageInput: UserContactInformation!) {
        createLanguage(createLanguageInput: $createLanguageInput)
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function notificationSettingMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($NotificationSetting: UserNotificationSettings!) {
        notificationSetting(NotificationSetting: $NotificationSetting)
      }
    `,
    variables: {
      ...payload,
    },
    refetchQueries: [
      {
        query: getUserDetails,
        variables: { id: payload.NotificationSetting.id },
      },
    ],
  });
}

function removeProfileMutation(payload:any){
  return serviceAuthInstanceMutation({
    type:'mutation',
    mutate:gql`
    mutation($user_id:Int!){
      deleteUserUser(user_id:$user_id)
    }
    `
    ,
    variables:{
      ...payload
    }
  })
}

export {
  updateuserProfileOnly,
  supportingDocumentUploadMutation,
  changepasswordMutation,
  contactInfoMutation,
  createLanguageMutation,
  notificationSettingMutation,
  supportingDocumentDeleteMutation,
  removeProfileMutation
};
