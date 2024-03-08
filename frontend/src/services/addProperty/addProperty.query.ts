import { gql } from '@apollo/client';
import { serviceAuthInstanceMutation } from '../apollo-client';

function getCountryQuery() {
  return serviceAuthInstanceMutation({
    type: 'query',
    mutate: gql`
      query {
        countryList {
          id
          name
        }
      }
    `,
  });
}

function getStateQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'query',
    mutate: gql`
      query ($countryId: Int!) {
        stateList(country_id: $countryId) {
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

function getCityQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'query',
    mutate: gql`
      query ($stateId: Int!) {
        cityList(state_id: $stateId) {
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

function getAmenitiesQuery() {
  return serviceAuthInstanceMutation({
    type: 'query',
    mutate: gql`
      query MyQuery {
        amenitiesListing {
          amenities {
            id
            name
            availability
          }
          facilities {
            id
            name
            availability
          }
        }
      }
    `,
  });
}

export { getCountryQuery, getStateQuery, getCityQuery, getAmenitiesQuery };
