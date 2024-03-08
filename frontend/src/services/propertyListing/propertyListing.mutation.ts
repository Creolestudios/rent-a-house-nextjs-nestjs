import { gql } from '@apollo/client';
import { serviceAuthInstanceMutation } from '../apollo-client';
import {
  favouritePropertyListing,
  featurePropertyAuthListing,
  perUserPropertyList,
  searchPropertyAuth,
} from './propertyListing.refetch';

function addFavouriteProperty(payload) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($liked: Int!, $propertyId: Int!) {
        favoriteProperty(
          favorite: { is_favorite: $liked, property_id: $propertyId }
        )
      }
    `,
    variables: {
      ...payload.favoritePayload,
    },
    refetchQueries: [
      {
        query: featurePropertyAuthListing,
      },
      {
        query: favouritePropertyListing,
        variables: payload.pageNumber,
      },
      {
        query: searchPropertyAuth,
        variables: payload.searchPayload,
      },
    ],
  });
}

function deleteUserPropertyMutation(payload) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($propertyId: Int!) {
        deletePropertyUser(property_id: $propertyId)
      }
    `,
    variables: {
      ...payload,
    },
    refetchQueries: [
      { query: perUserPropertyList, variables: payload.refetchPayload },
    ],
  });
}

export { addFavouriteProperty, deleteUserPropertyMutation };
