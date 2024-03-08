import { gql } from "@apollo/client";
import { serviceAuthInstanceMutation, serviceInstanceMutation } from "../apollo-client";
import { adminList, getSingleAdmin } from "./adminListing.refetch";

function updateAdminMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: "mutation",
    mutate: gql`
      mutation MyMutation($id: Int!, $email: String!, $role: Int!, $status: Int!) {
        updateAdmin(updateAdminInput: { id: $id, email: $email, role: $role, status: $status })
      }
    `,
    variables: {
      id: payload.id,
      email: payload.email,
      role: payload.role,
      status: payload.status,
    },
    refetchQueries: [
      {
        query: adminList,
        variables: payload.adminListPayload,
      }
    ]
  });
}

export { updateAdminMutation };
