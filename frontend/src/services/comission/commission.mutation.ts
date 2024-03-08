import { gql } from "@apollo/client";
import { serviceAuthInstanceMutation } from "../apollo-client";
import { getCommission } from "./commission.refetch";

function updateCommissionMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: "mutation",
    mutate: gql`
      mutation ($value: Float!, $commissionFrom: Int!) {
        updateCommisionOnly(
          updateCommissionOnly: {
            commission_from: $commissionFrom
            value: $value
          }
        ) {
          message
          data {
            value
          }
        }
      }
    `,
    variables: {
      ...payload,
    },
    refetchQueries: [
      {
        query: getCommission,
      },
    ],
  });
}

export { updateCommissionMutation };
