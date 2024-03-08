import { gql } from '@apollo/client';
import { serviceAuthInstanceMutation } from '../apollo-client';

function checkRequiredDetails(payload) {
  return serviceAuthInstanceMutation({
    type: 'query',
    mutate: gql`
      query ($userId: Int!) {
        dataVerification(id: $userId) {
          user_details
          null_fields {
            gender
            dob
            occupation
            dialer_code
            mobile
            proof_of_occupation_income
            identity_proof
          }
        }
      }
    `,

    variables: {
      ...payload,
    },
  });
}

function getPropertyInfo(payload) {
  return serviceAuthInstanceMutation({
    type: 'mutation',
    mutate: gql`
      query ($propertyId: Int!) {
        apartmentDetails(property_id: { property_id: $propertyId }) {
          id
          name
          rent
          type
          space {
            id
            bedrooms
            size
          }
          images {
            id
            name
          }
          landlord {
            id
            first_name
            last_name
            is_landlord
          }
          one_time_service_fee
        }
      }
    `,
    variables: {
      ...payload,
    },
  });
}

function continueChatingQuery(payload: any) {
  return serviceAuthInstanceMutation({
    type: 'query',
    fetchPolicy:'network-only',
    mutate: gql`
      query ($bookingId: Int!, $fromId: Int!, $toId: Int!) {
        getPerticularChat(
          messageListingInput: {
            booking_id: $bookingId
            from_id: $fromId
            to_id: $toId
          }
        ) {
          data {
            id
            message_id
            from_id
            to_id
            text
            file
            created_at
            status
          }
          booking_data {
            id
            tenant_id
            property_id
            landlord_id
            status
            start_date
            end_date
            amount
            is_special_amount
            reason_for_rejection
          }
          property_data {
            id
            min_rental_period
            max_rental_period
            type
            name
            currency
            latitude
            longitude
            postal_code
            house_no
            rent
            is_mobile_verified
            status
            country_id
            state_id
            city_id
            available_from
            created_at
            updated_at
            deleted_at
            user_id
            media {
              id
              name
              type
              property_id
              created_at
              updated_at
              deleted_at
            }
            is_favorite
            images {
              id
              name
              type
              property_id
              created_at
              updated_at
              deleted_at
            }
            thumbnail
            total_favorites
            first_month_rent
            space {
              id
              bedrooms
              peoples
              size
              property_id
              details
              is_furnished
              created_at
              updated_at
              deleted_at
            }
            one_time_service_fee
            landlord {
              id
              image
              first_name
              last_name
              address
              country_id
              gender
              dob
              occupation
              identity_proof
              proof_of_occupation_income
              email
              dialer_code
              mobile
              password
              is_mobile_verified
              is_email_verified
              verification_token
              verification_token_exp
              reset_password_token
              reset_password_token_exp
              social_type
              social_token
              token
              notification_is_enable
              notification_language
              login_at
              is_landlord
              created_at
              updated_at
              deleted_at
              user_type
              TotalProperties
              listedProperties {
                name
                id
              }
            }
            host_details {
              id
              image
              first_name
              last_name
              address
              country_id
              gender
              dob
              occupation
              identity_proof
              proof_of_occupation_income
              email
              dialer_code
              mobile
              password
              is_mobile_verified
              is_email_verified
              verification_token
              verification_token_exp
              reset_password_token
              reset_password_token_exp
              social_type
              social_token
              token
              notification_is_enable
              notification_language
              login_at
              is_landlord
              created_at
              updated_at
              deleted_at
              user_type
              TotalProperties
              listedProperties {
                name
                id
              }
            }
            city_details {
              id
              name
              state_id
              created_at
              updated_at
              deleted_at
            }
            state_details {
              id
              name
              country_id
              created_at
              updated_at
              deleted_at
            }
            country_details {
              id
              name
              code
              status
              created_at
              updated_at
              deleted_at
            }
            space_overview {
              id
              bedrooms
              peoples
              size
              property_id
              details
              is_furnished
              created_at
              updated_at
              deleted_at
            }
            amenity {
              id
              amenities_id {
                id
                name
                status
                type
                created_at
                updated_at
                deleted_at
              }
              property_id
              availability
              created_at
              updated_at
              deleted_at
            }
            facility {
              id
              amenities_id {
                id
                name
                status
                type
                created_at
                updated_at
                deleted_at
              }
              property_id
              availability
              created_at
              updated_at
              deleted_at
            }
            rental_condition {
              id
              contract_type
              property_id
              cancellation_policy_id
              created_at
              updated_at
              deleted_at
              additional_required_cost {
                id
                property_id
                name
                amount
                created_at
                updated_at
                deleted_at
              }
            }
            additional_required_cost {
              id
              property_id
              name
              amount
              created_at
              updated_at
              deleted_at
            }
            rules_and_preference {
              id
              document
              gender
              tenant
              pets
              property_id
              created_at
              updated_at
              deleted_at
            }
            tenant_counts
          }
          landlord_data {
            id
            image
            first_name
            last_name
            address
            country_id
            gender
            dob
            occupation
            identity_proof
            proof_of_occupation_income
            email
            dialer_code
            mobile
            password
            is_mobile_verified
            is_email_verified
            verification_token
            verification_token_exp
            reset_password_token
            reset_password_token_exp
            social_type
            social_token
            token
            notification_is_enable
            notification_language
            login_at
            is_landlord
            created_at
            updated_at
            deleted_at
            user_type
            TotalProperties
            listedProperties {
              name
              id
            }
          }
          tenant_data {
            id
            image
            first_name
            last_name
            address
            country_id
            gender
            dob
            occupation
            identity_proof
            proof_of_occupation_income
            email
            dialer_code
            mobile
            password
            is_mobile_verified
            is_email_verified
            verification_token
            verification_token_exp
            reset_password_token
            reset_password_token_exp
            social_type
            social_token
            token
            notification_is_enable
            notification_language
            login_at
            is_landlord
            created_at
            updated_at
            deleted_at
            user_type
            TotalProperties
            listedProperties {
              name
              id
            }
          }
          message
        }
      }
    `,
    variables: {
      ...payload,
    },
  });
}

export { checkRequiredDetails, getPropertyInfo, continueChatingQuery };
