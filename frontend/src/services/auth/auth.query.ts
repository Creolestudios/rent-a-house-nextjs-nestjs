import { gql } from "@apollo/client";
import { serviceInstanceMutation } from "../apollo-client";

function googleLoginQuery() {
  return serviceInstanceMutation(
    "query",
    gql`
      query {
        authUrl
      }
    `
  );
}

export { googleLoginQuery };
