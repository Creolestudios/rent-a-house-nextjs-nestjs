import { gql } from "@apollo/client";

export const getUserDetails = gql`
  query MyQuery($id: Int!) {
    FindOneUserById(id: $id) {
      id
      image
      first_name
      last_name
      address
      country_id
      gender
      dob
      occupation
      identity_proof
      proof_of_occupation_income
      reset_password_token
      reset_password_token_exp
      email
      dialer_code
      mobile
      password
      notification_is_enable
      notification_language
    }
  }
`;
