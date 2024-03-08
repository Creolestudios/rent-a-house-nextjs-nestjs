import { gql } from "@apollo/client";
import { serviceAuthInstanceMutation, serviceInstanceMutation } from "../apollo-client";
import { adminList } from "./adminListing.refetch";

function adminListingQuery(payload) {
  return serviceAuthInstanceMutation({
    type: 'query',
    mutate: adminList,
    variables: {
      ...payload,
    }
  });
};

function singleAdminQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: "query",
    mutate: gql`
      query MyQuery($id: Int!) {
        admin(id: $id) {
          id
          email
          role
          status
          user_name
        }
      }
    `,
    variables: {
      ...payload,
    }
  });
}

export { adminListingQuery, singleAdminQuery };
