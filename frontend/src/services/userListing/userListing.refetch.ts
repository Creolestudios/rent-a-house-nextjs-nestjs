import { gql } from "@apollo/client";

export const userList = gql`
query ($pageNo: Int!, $userSearch: String!) {
  MangeUser(page: $pageNo, pagesize: 10, name: $userSearch) {
    total_users
    users {
      id
      image
      first_name
      last_name
      email
      dialer_code
      mobile
      created_at
      TotalProperties
    }
  }
}
`;

