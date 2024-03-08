import { gql } from "@apollo/client";
import { serviceAuthInstanceMutation } from "../apollo-client";
import { getSiteConfig } from "./setConfig.refetch";

function siteConfigMutation(payload) {
  return serviceAuthInstanceMutation({
    type: "mutation",
    mutate: gql`
      mutation (
        $logo: Upload
        $name: String!
        $contact: Int!
        $address: String!
      ) {
        createSiteconfig(
          upload_logo: $logo
          createSiteconfigInput: {
            name: $name
            address: $address
            contact: $contact
            status: 1
          }
        ) {
          message
        }
      }
    `,
    variables: {
      ...payload,
    },
    refetchQueries: [
      {
        query: getSiteConfig,
      },
    ],
  });
}

export { siteConfigMutation };
