import styled from 'styled-components';
import { fontFamily, color } from '@/styles/variable';

export const ManageListingWrapper = styled.div`
  table {
    tr {
      th {
      }
      td {
        .icon {
          .edit-icon {
            padding: 0 10px;
            text-decoration: underline;
            color: ${color.primaryColor};
            font-family: ${fontFamily.ptBold};
            cursor: pointer !important;
          }
          .delete-icon {
            padding: 0 10px;
            text-decoration: underline;
            color: rgba(255, 57, 57, 1);
            font-family: ${fontFamily.ptBold};
            cursor: pointer !important;
          }
        }
      }
    }
  }

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
  }
`;

export const TenantDetailWrapper = styled.div`
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
        margin-left: 20px;
        @media screen and (max-width: 767px) {
          min-width: 100px;
          margin-right: 15px;
        }
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
`;

export const ViewDetailWrapper = styled.div`
  .ant-form {
    .ant-form-item {
      margin-bottom: 15px;
      display: flex;
      .ant-form-item-row {
        align-items: flex-start;
        width: 100%;
        .ant-form-item-label {
          min-width: 150px;
          width: auto;
          padding-top: 8px;
          label {
            margin: 0;
            color: ${color.greenColor};
          }
        }
        .ant-form-item-control {
          width: auto;
          min-width: 300px;
          max-width: 400px;
        }
      }
      .ant-avatar {
        margin-right: 8px;
        + span {
          font-family: ${fontFamily.ptBold};
          color: ${color.greyColor};
        }
      }
      .ant-upload-wrapper {
        display: flex;
        flex-direction: column;
        .ant-upload-list {
          display: flex;
          align-items: center;
          margin-right: 8px;
          .ant-upload-list-item {
            margin-top: 0;
            .ant-upload-icon {
              display: none;
            }
            .ant-upload-list-item-name {
              color: ${color.greyColor};
              padding: 0;
            }
            .ant-upload-list-item-actions {
              display: none;
            }
          }
        }
        .ant-btn {
          border-color: ${color.primaryColor};
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2px 10px;
          border-radius: 8px;
          cursor: pointer !important;
          span {
            margin-left: 0;
            font-size: 12px;
            text-transform: capitalize;
            font-family: ${fontFamily.boldFont};
            color: ${color.primaryColor};
            cursor: pointer !important;
          }
        }
      }
      #logo {
        display: flex;
        align-items: center;
      }
    }
  }
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
    label {
      min-width: 200px;
      font-size: 14px;
      line-height: 18px;
      font-family: ${fontFamily.ptBold};
      color: ${color.greyColor};
      text-transform: capitalize;
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
      .ant-avatar {
        margin-right: 8px;
        + span {
          font-family: ${fontFamily.ptBold};
          color: ${color.greyColor};
        }
      }
    }
    .ant-upload-wrapper {
      display: flex;
      flex-direction: row-reverse;
      .ant-upload-list {
        display: flex;
        align-items: center;
        margin-right: 8px;
        .ant-upload-list-item {
          margin-top: 0;
          .ant-upload-icon {
            display: none;
          }
          .ant-upload-list-item-name {
            color: ${color.greyColor};
            padding: 0;
          }
          .ant-upload-list-item-actions {
            display: none;
          }
        }
      }
      .ant-btn {
        border-color: ${color.primaryColor};
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px 10px;
        border-radius: 8px;
        cursor: pointer !important;
        span {
          margin-left: 0;
          font-size: 12px;
          text-transform: capitalize;
          font-family: ${fontFamily.boldFont};
          color: ${color.primaryColor};
          cursor: pointer !important;
        }
      }
    }
    > span {
      display: flex;
      align-items: center;
    }
  }
  .btn-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin-top: 20px;
    button {
      min-width: 100px;
      margin-right: 15px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const PropertyPageWrapper = styled.div`
  .box {
    padding: 20px;
    margin-bottom: 20px;
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
        margin-left: 20px;
        @media screen and (max-width: 767px) {
          min-width: 100px;
          margin-right: 15px;
        }
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
`;

export const PropertyDetailWrapper = styled.div`
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  .block {
    padding: 12px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      padding-bottom: 0;
      border-bottom: none;
    }
    label {
      min-width: 200px;
      font-size: 14px;
      line-height: 18px;
      color: ${color.greyColor};
      font-family: ${fontFamily.ptBold};
    }
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
      li {
        padding: 0;
        margin: 0;
        .ant-avatar {
          margin-right: 8px;
          + .label {
            color: ${color.greyColor};
          }
        }
        .label {
          font-size: 14px;
          line-height: 20px;
          color: ${color.blackColor};
          font-family: ${fontFamily.ptBold};
        }
        .text {
          font-size: 14px;
          line-height: 20px;
          color: ${color.primaryColor};
          font-family: ${fontFamily.ptBold};
          &.underline {
            text-decoration: underline;
            cursor: pointer !important;
          }
        }
      }
    }
  }
`;
