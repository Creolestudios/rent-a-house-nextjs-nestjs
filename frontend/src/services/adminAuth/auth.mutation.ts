import { gql } from "@apollo/client";
import { serviceAuthInstanceMutation } from "../apollo-client";
import { adminList } from "../adminListing/adminListing.refetch";

function createAdminMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation (
        $email: String!
        $user_name: String!
        $password: String!
        $role: Int!
      ) {
        createAdmin(
          createAdminInput: {
            email: $email
            user_name: $user_name
            password: $password
            role: $role
          }
        )
      }
    `,
    variables: {
      ...payload,
    },
    refetchQueries: [
      {
        query: adminList,
        variables: payload.adminListPayload
      },
    ],
  });
}

function deleteAdminMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($userId: Int!) {
        deleteAdmin(adminUsersId: $userId)
      }
    `,
    variables: {
      userId: payload.userId,
    },
    refetchQueries: [
      {
        query: adminList,
        variables: payload.adminListPayload
      },
    ]
  });
}

export { createAdminMutation, deleteAdminMutation };
