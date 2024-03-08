import { gql } from "@apollo/client";
import { serviceAuthInstanceMutation } from "../apollo-client";
import { getUserDetails } from "./account.refetch";

function getUserDetailsQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: "query",
    mutate: getUserDetails,
    variables: {
      ...payload,
    },
  });
}

function getCountryListQuery() {
  return serviceAuthInstanceMutation({
    type: "query",
    mutate: gql`
      query MyQuery {
        countryList {
          id
          name
        }
      }
    `,
  });
}

function getStateListQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: "query",
    mutate: gql`
      query MyQuery($country_id: Int!) {
        stateList(country_id: $country_id) {
          id
          name
        }
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function getCityListQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: "query",
    mutate: gql`
      query MyQuery($state_id: Int!) {
        cityList(state_id: $state_id) {
          id
          name
        }
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function getLanguageListQuery() {
  return serviceAuthInstanceMutation({
    type: "query",
    mutate: gql`
      query MyQuery {
        language_list {
          id
          name
          language_code
        }
      }
    `,
  });
}

export {
  getUserDetailsQuery,
  getCountryListQuery,
  getStateListQuery,
  getCityListQuery,
  getLanguageListQuery,
};
