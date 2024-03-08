import { gql } from "@apollo/client";

export const adminList = gql`
  query MyQuery($pageNo: Int!, $adminSearch: String!) {
    searchAdmins(page_number: $pageNo, page_size: 10, admin_name: $adminSearch) {
      total_admins
      admins {
        id
        email
        role
        status
        user_name
      }
    }
  }
`;

export const getSingleAdmin = gql`
  query MyQuery($id: Int!) {
    admin(id: $id) {
      id
      email
      role
      status
      user_name
    }
  }
`;