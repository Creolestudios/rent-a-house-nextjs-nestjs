import { gql } from "@apollo/client";
import {
  serviceAuthInstanceMutation,
  serviceInstanceMutation,
} from "../apollo-client";

function getDashboardQuery(payload) {
  return serviceAuthInstanceMutation({
    type: "query",
    mutate: gql`
      query ($year: Int!) {
        adminDashboard(Year: $year) {
          avalibleYears
          totalUserYear
          monthWiseUser {
            month
            monthCount
          }
          otherData {
            name
            value
          }
        }
      }
    `,
    variables: {
      ...payload,
    },
  });
}

export { getDashboardQuery };
