import { gql } from '@apollo/client';

export const featurePropertyAuthListing = gql`
  query MyQuery {
    userFeaturePropertyList {
      available_from
      type
      name
      id
      rent
      is_favorite
      images {
        name
      }
      space_overview {
        size
        bedrooms
      }
    }
  }
`;

export const favouritePropertyListing = gql`
  query MyQuery($pageNo: Int!) {
    favoritePropertyList(page_number: $pageNo, page_size: 16) {
      total_properties
      properties {
        available_from
        type
        name
        id
        rent
        images {
          name
        }

        space_overview {
          size
          bedrooms
        }
      }
    }
  }
`;

export const searchPropertyAuth = gql`
  query (
    $inDate: String
    $outDate: String
    $pageNo: Int!
    $area: [String!]
    $sort: Int!
    $max: Float
    $min: Float
    $size: [Int!]
    $suitable: [String!]
    $type: [String!]
    $bill: Boolean
    $facility: [String!]
    $furnished: Int
  ) {
    userSearchAndFilterProperty(
      searchAndFilterParam: {
        locations: $area
        start_date: $inDate
        end_date: $outDate
        page_number: $pageNo
        page_size: 9
        sort_by: $sort
        max_price: $max
        min_price: $min
        size: $size
        suitable: $suitable
        type: $type
        bills_includes: $bill
        facilities: $facility
        is_furnished: $furnished
      }
    ) {
      field_wise_count {
        amenities {
          name
          total
        }
        facilities {
          name
          total
        }
        furniture {
          name
          total
        }
        size {
          name
          total
        }
        suitable_for {
          name
          total
        }
        type {
          name
          total
        }
      }
      total_properties
      properties {
        id
        latitude
        longitude
        additional_required_cost {
          amount
          id
          name
        }
        amenity {
          availability
          id
          property_id
        }
        available_from
        city_details {
          id
          name
          state_id
        }
        country_details {
          code
          status
          name
          id
        }
        country_id
        created_at
        currency

        first_month_rent
        house_no
        is_mobile_verified
        max_rental_period
        images {
          id
          name
        }
        space_overview {
          bedrooms
          size
        }
        min_rental_period
        name
        one_time_service_fee
        postal_code
        rent
        state_id
        status
        tenant_counts
        thumbnail
        is_favorite
        type
        user_id
      }
    }
  }
`;

export const perUserPropertyList = gql`
  query ($searchProperty: String!, $pageNo: Int!, $propertyStatus: String!) {
    findUserPropetry(
      name: $searchProperty
      page: $pageNo
      pagesize: 10
      PropertyStatus: $propertyStatus
    ) {
      total_properties,public,unpublic,draft,all
      properties {
        id
        type
        name
        rent
        status
        available_from
        created_at
        media {
          id
          name
        }
        images {
          id
          name
        }
        thumbnail
        first_month_rent
        one_time_service_fee
        host_details {
          id
          first_name
          last_name
          TotalProperties
          listedProperties {
            name
            id
          }
        }
        city_details {
          id
          name
        }
        state_details {
          id
          name
        }
        country_details {
          id
          name
        }
        tenant_counts
      }
    }
  }
`;
