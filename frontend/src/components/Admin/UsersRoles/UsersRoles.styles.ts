import { fontFamily, color } from '@/styles/variable';
import styled from 'styled-components';

export const ManageUserRolesWrapper = styled.div`
  height: calc(100% - 50px);
  .manage-user-box {
    height: 100%;
  }
  .search-box {
    margin-bottom: 12px;
    .ant-input-affix-wrapper {
      border: 1px solid rgba(0 0 0 / 20%);
      border-radius: 4px;
      height: 32px;
      padding: 7px 10px;
      font-size: 12px;
      flex: 1;
      .ant-input-prefix {
        margin-right: 6px;
        .anticon {
          svg {
            font-size: 10px;
          }
        }
      }
      .ant-input {
        font-family: ${fontFamily.ptBold};
        color: ${color.blackColor};
        border: none !important;
        &::placeholder {
          color: #80878f;
        }
      }
      &.ant-input-affix-wrapper-focused {
        box-shadow: none;
      }
    }
  }
`;
