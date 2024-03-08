import { fontFamily, color } from '@/styles/variable';
import styled from 'styled-components';

export const EditAdminUserWrapper = styled.div`
  .box {
    padding: 20px;
  }
  .ant-form{
    .ant-form-item{
        &:last-child{
            margin-bottom: 0;
        }
    }
  }
`;

export const EditUserFormWrapper = styled.div`
  max-width: 512px;
`;
