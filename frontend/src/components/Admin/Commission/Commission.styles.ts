import styled from 'styled-components';
import { fontFamily, color } from '@/styles/variable';

export const ManageCommissionWrapper = styled.div`
  .box {
    padding: 20px;
  }
  .title-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    .btn-wrapper {
      padding-left: 20px;
      margin-left: auto;
      button {
        min-width: 108px;
      }
    }
  }
`;

export const CommissionDetailWrapper = styled.div`
  .block {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 12px 0;
    display: flex;
    align-items: center;
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      padding-bottom: 0;
      border-bottom: none;
    }
    .commission-from {
      padding: 6px;
      border-radius: 5px;
      cursor: pointer;
    }
    label {
      min-width: 200px;
      font-size: 14px;
      line-height: 20px;
      font-family: ${fontFamily.ptBold};
      color: ${color.greyColor};
    }
    .commissionInput {
      width: 150px;
    }
    .commission-block {
      /* position: absolute; */
    }
    .errorMessage {
      /* position: relative; */
      color: red;
      margin-top: 2px;
      font-family: ${fontFamily.regularFont};
    }

    span {
      font-size: 14px;
      line-height: 20px;
      font-family: ${fontFamily.ptBold};
      color: ${color.blackColor};
      &.color-under {
        color: ${color.primaryColor};
        text-decoration: underline;
      }
    }
  }
`;
