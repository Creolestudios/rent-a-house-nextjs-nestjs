import { gql } from "@apollo/client";
import { serviceAuthInstanceMutation } from "../apollo-client";
import { getSiteConfig } from "./setConfig.refetch";

function siteConfigQuery() {
  return serviceAuthInstanceMutation({
    type: "query",
    mutate: getSiteConfig,
  });
}

export { siteConfigQuery };
