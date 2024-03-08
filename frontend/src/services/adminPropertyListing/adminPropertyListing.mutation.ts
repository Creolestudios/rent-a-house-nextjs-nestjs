import { gql } from '@apollo/client';
import { serviceAuthInstanceMutation } from '../apollo-client';
import { propertyListAdmin } from './adminPropertyListing.refetch';

function adminDeletePropertyMutation(payload: any) {
  console.log(payload, '===========');

  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation ($propertyId: Int!) {
        deleteProperty(property_id: $propertyId)
      }
    `,
    variables: {
      propertyId: payload.propertyId,
    },
    refetchQueries: [
      {
        query: propertyListAdmin,
        variables: payload.listingPayload,
      },
    ],
  });
}

export { adminDeletePropertyMutation };
