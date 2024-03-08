import { Upload } from 'antd';
import { gql } from '@apollo/client';
import { serviceAuthInstanceMutation } from '../apollo-client';

function sendDetailsMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation (
        $proofOfIdentity: Upload
        $occupationDoc: Upload
        $propertyId: Int!
        $landLordID: Int!
        $gender: Int
        $checkIn: String
        $checkOut: String
        $dob: String
        $occupation: String
        $dialerCode: Int
        $mobile: Float
        $message: String!
      ) {
        messageWithInfoInput(
          proofOfIdentity: $proofOfIdentity
          occupation: $occupationDoc
          UpdateUserForBooking: {
            gender: $gender
            dob: $dob
            occupation: $occupation
            dialer_code: $dialerCode
            mobile: $mobile
          }
          messageWithInfo: {
            status: 0
            property_id: $propertyId
            landlord_id: $landLordID
            start_date: $checkIn
            end_date: $checkOut
            message: $message
          }
        ) {
          data {
            id
            tenant_id
            property_id
            landlord_id
          }
          message
        }
      }
    `,
    variables: { ...payload },
  });
}

function sendMessageMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation (
        $fromId: Int!
        $toId: Int!
        $bookingId: Int!
        $message: String!
        $file: Upload
      ) {
        sendMessage(
          fromId: $fromId
          toId: $toId
          bookingId: $bookingId
          message: $message
          status: 0
          messageFile: $file
        ) {
          message
          bookingId
          from
          to
          created_at
          tenant_name
          landlord_name
          tenant_image
          landlord_image
        }
      }
    `,
    variables: { ...payload },
  });
}

export function paymentMutation(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      mutation (
        $bookingId: Int!
        $cardusername: String!
        $cardnumber: String!
        $month: String!
        $year: String!
        $cvv: String!
        $amount: String!
        $address: String!
        $postal: String!
        $city: String!
        $state: String!
        $country: String!
        $first_name: String!
        $last_name: String!
        $property_id: Int!
        $landlord_id: Int!
        $checkIn: String!
        $checkOut: String!
      ) {
        requestBooking(
          transactionFinalize: {
            id: $bookingId
            name: $cardusername
            number: $cardnumber
            exp_month: $month
            exp_year: $year
            cvc: $cvv
            amount: $amount
            address: $address
            postal: $postal
            city: $city
            state: $state
            country: $country
            first_name: $firstname
            last_name: $lastname
            property_id: $propertyId
            landlord_id: $lanlordId
            start_date: $checkIn
            end_date: $checkOut
            city_of_residence: $city
          }
        )
      }
    `,
    variables: { ...payload },
  });
}

export { sendDetailsMutation, sendMessageMutation };
