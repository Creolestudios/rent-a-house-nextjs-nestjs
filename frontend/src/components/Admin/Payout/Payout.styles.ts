import styled from 'styled-components';
import { fontFamily, color } from '@/styles/variable';

export const ManagePayoutWrapper = styled.div`
  .manage-user-box {
    padding: 20px;
    .search-box {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      .ant-input-affix-wrapper {
        padding: 3px 12px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 4px;
        flex: 1;
        .ant-input {
          font-size: 12px;
          font-family: ${fontFamily.ptBold};
          color: ${color.blackColor};
          border: none !important;
          &::placeholder {
            color: #80878f;
            font-family: ${fontFamily.ptRegular};
          }
        }
        &.ant-input-affix-wrapper-focused {
          box-shadow: none;
        }
      }
      .ant-select {
        margin-left: 12px;
        .ant-select-selector {
          border: 1px solid rgba(0, 0, 0, 0.3);
          padding: 0 12px;
          border-radius: 4px;
          .ant-select-selection-placeholder {
            font-size: 12px;
            font-family: ${fontFamily.ptBold};
            color: #80878f;
          }
          .ant-select-selection-item {
            font-size: 12px;
            font-family: ${fontFamily.ptBold};
            color: ${color.blackColor};
          }
        }
        .ant-select-arrow {
          .anticon {
            display: flex;
            align-items: center;
          }
        }
        &.ant-select-focused {
          .ant-select-selector {
            border-color: rgba(0, 0, 0, 0.3);
          }
        }
        &.ant-select-open {
          .ant-select-selector {
            border-color: rgba(0, 0, 0, 0.3);
          }
          .ant-select-arrow {
            .anticon {
              transform: rotate(180deg);
            }
          }
        }
        &:hover {
          .ant-select-selector {
            border-color: rgba(0, 0, 0, 0.3);
          }
        }
      }
    }
    .box-bg {
      background: #f9f9f9;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: none;
      padding: 10px;
      border-radius: 8px;
      margin-bottom: 12px;
      .btn-wrapper {
        button {
          margin-right: 10px;
          background: #ffffff;
          border: 1px solid #e9e9e9;
          border-radius: 8px;
          color: #80878f;
          font-size: 14px;
          font-family: ${fontFamily.ptBold};
          &:last-child {
            margin-right: 0;
          }
          &.fill {
            background: ${color.secondaryColor};
            border: ${color.secondaryColor};
            color: ${color.whiteColor};
          }
        }
      }
    }
  }
`;
