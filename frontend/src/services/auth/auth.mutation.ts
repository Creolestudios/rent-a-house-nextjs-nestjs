import { gql } from '@apollo/client';
import {
  serviceAuthInstanceMutation,
  serviceInstanceMutation,
} from '../apollo-client';

function userCreateMutation(payload: any) {
  return serviceInstanceMutation(
    'mutation',
    gql`
      mutation (
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
      ) {
        createUser(
          createUserInput: {
            first_name: $firstName
            last_name: $lastName
            email: $email
            password: $password
          }
        ) {
          id
          message
          token
        }
      }
    `,
    {
      ...payload,
    }
  );
}

function userLoginMutation(payload: any) {
  return serviceInstanceMutation(
    'mutation',
    gql`
      mutation MyMutation($email: String!, $password: String!) {
        login(userInput: { email: $email, password: $password, user_type: 0 }) {
          ... on UserEntity {
            email
            token
            id
            is_landlord
          }
        }
      }
    `,
    {
      ...payload,
    }
  );
}

function googleLoginMutation(payload: any) {
  return serviceInstanceMutation(
    'mutation',
    gql`
      mutation ($input: LogInArgs!) {
        LogInGoogle(input: $input) {
          first_name
          last_name
          email
          image
          social_type
          token
        }
      }
    `,
    {
      ...payload,
    }
  );
}

function forgotPasswordMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($email: String!) {
        forgetPasswordUser(email: $email)
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function resetPasswordMutation(payload: any) {
  return serviceInstanceMutation(
    'mutation',
    gql`
      mutation ($password: String!, $token: String!) {
        resetPasswordUser(
          inputArgs: {
            password: $password
            confirmPassword: $password
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
  userCreateMutation,
  userLoginMutation,
  googleLoginMutation,
  forgotPasswordMutation,
  resetPasswordMutation,
};
