import { gql } from '@apollo/client';
import { serviceInstanceMutation } from '../apollo-client';

function adminLoginMutation(payload: any) {
  return serviceInstanceMutation(
    'mutation',
    gql`
      mutation ($email: String!, $password: String!) {
        login(userInput: { email: $email, password: $password, user_type: 1 }) {
          ... on AdminEntity {
            id
            email
            user_name
            token
            role
          }
        }
      }
    `,
    {
      ...payload,
    }
  );
}

function forgotAdminPasswordMutation(payload: any) {
  return serviceInstanceMutation(
    'mutation',
    gql`
      mutation ($email: String!) {
        forgetPassword(email: $email)
      }
    `,
    {
      ...payload,
    }
  );
}

function resetAdminPasswordMutation(payload: any) {
  return serviceInstanceMutation(
    'mutation',
    gql`
      mutation (
        $password: String!
        $confirmPassword: String!
        $token: String!
      ) {
        resetPassword(
          inputArgs: {
            confirmPassword: $confirmPassword
            password: $password
            reset_password_token: $token
          }
        )
      }
    `,
    {
      ...payload,
    }
  );
}

export {
  adminLoginMutation,
  forgotAdminPasswordMutation,
  resetAdminPasswordMutation,
};
