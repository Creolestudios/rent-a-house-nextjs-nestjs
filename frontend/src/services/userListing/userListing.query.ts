import { gql } from "@apollo/client";
import {
  serviceAuthInstanceMutation,
  serviceInstanceMutation,
} from "../apollo-client";
import { userList } from "./userListing.refetch";

function userListQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: "query",
    mutate: userList,
    variables: {
      ...payload,
    },
  });
}

function singleUserQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: "query",
    mutate: gql`
      query ($id: Int!) {
        FindOneUser(id: $id) {
          id
          image
          first_name
          last_name
          address
          gender
          dob
          occupation
          identity_proof
          proof_of_occupation_income
          email
          dialer_code
          mobile
          TotalProperties
          listedProperties {
            name
            id
          }
        }
      }
    `,
    variables: {
      ...payload,
    },
  });
}

export { userListQuery, singleUserQuery };
