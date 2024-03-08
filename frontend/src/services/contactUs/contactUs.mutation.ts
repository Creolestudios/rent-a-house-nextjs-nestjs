import { gql } from '@apollo/client';
import { serviceInstanceMutation } from '../apollo-client';

function contactUsMutation(payload: any) {
  return serviceInstanceMutation(
    'mutation',
    gql`
      mutation (
        $email: String!
        $name: String!
        $phone: String!
        $message: String!
      ) {
        createContactUs(
          createContactUsInput: {
            email: $email
            name: $name
            mobile: $phone
            message: $message
          }
        )
      }
    `,
    {
      ...payload,
    }
  );
}

export { contactUsMutation };
