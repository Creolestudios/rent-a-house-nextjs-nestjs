import { gql } from '@apollo/client';

export const inquiryChat = gql`
  subscription ($fromId: Int!, $toId: Int!, $bookingId: Int!) {
    newMessage(fromId: $fromId, toId: $toId, bookingId: $bookingId) {
      text
      file
      to_id
      from_id
      created_at
    }
  }
`;

// function subscriptionQuery() {
//   return serviceAuthInstanceMutation({
//     type: "subscribe",
//     mutate: gql`
//       subscription {
//         petAdded {
//           name
//         }
//       }
//     `,
//   });
// }
