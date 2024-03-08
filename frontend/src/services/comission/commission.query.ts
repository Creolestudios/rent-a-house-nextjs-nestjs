import { gql } from "@apollo/client";
import { serviceAuthInstanceMutation, serviceInstanceMutation } from "../apollo-client";
import { getCommission } from "./commission.refetch";

function getComissionQuery() {
  return serviceAuthInstanceMutation({
    type: "query",
    mutate: getCommission
  });
}

export { getComissionQuery };
