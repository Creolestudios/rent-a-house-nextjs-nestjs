import styled from 'styled-components';
export const AdminUserWrapper = styled.div`
  max-width: 512px;
  /* padding: 15px; */
  .box {
    padding: 20px;
  }
`;

export const AdminUserFormWrapper = styled.div`
  margin-top: 35px;
  .ant-form {
    .ant-form-item {
      &:last-child {
        margin-bottom: 0;
      }
      .btn-wrapper {
        display: flex;
        margin-top: 12px;
        button {
          flex: 1;
          &:not(:last-child) {
            margin-right: 20px;
          }
        }
      }
    }
  }
`;
