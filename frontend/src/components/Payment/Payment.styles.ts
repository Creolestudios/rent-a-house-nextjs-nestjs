import styled from 'styled-components';
import { color, fontFamily } from '@/styles/variable';
import { HeaderProps } from './Payment';

export const PaymentWrapper = styled.div`
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 24px;
    padding-bottom: 24px;
    position: sticky;
    top: ${(props: HeaderProps) => props.headerHeight}px;
    background: ${color.whiteColor};
    z-index: 1001;
    @media screen and (max-width: 767px) {
      padding: 20px 0;
      min-height: 70px;
    }
    .title {
      font-size: 24px;
      line-height: 31px;
      color: ${color.blackColor};
      font-family: ${fontFamily.ptBold};
      margin-bottom: 0;
      margin-right: 20px;
      @media screen and (max-width: 991px) {
        font-size: 20px;
        line-height: 22px;
      }
    }
    .right-content {
      button {
        border-radius: 20px;
        border-color: ${color.secondaryColor};
        color: ${color.secondaryColor};
        text-transform: capitalize;
        min-height: 30px;
        font-size: 14px;
        svg {
          margin-right: 10px;
          path {
            stroke: ${color.secondaryColor};
          }
        }
      }
    }
  }

  .ant-tabs {
    align-items: self-start;
    .ant-tabs-nav {
      max-width: 245px;
      width: 100%;
      z-index: 100;
      background: ${color.whiteColor};
      position: sticky;
      top: 145px;
      margin: 0;
      @media screen and (max-width: 991px) {
        max-width: 230px;
      }
      @media screen and (max-width: 767px) {
        max-width: 100%;
        padding: 10px 0;
        top: 122px;
      }
      &::before {
        display: none;
      }
      .ant-tabs-nav-operations {
        display: none;
      }
      .ant-tabs-nav-wrap {
        flex: unset;
        @media screen and (max-width: 767px) {
          /* width: 100%; */
          overflow: unset;
        }
        &::before,
        &::after {
          display: none;
        }
      }
      .ant-tabs-nav-list {
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 10px 0 10px 0;
        overflow-x: auto;
        &::-webkit-scrollbar {
          display: none;
        }
        @media screen and (max-width: 767px) {
          width: 100%;
          border: none;
          padding: 0;
          border-radius: 0;
        }
        .ant-tabs-tab {
          padding: 10px 20px 10px 20px;
          min-height: 41px;
          margin-top: 0;
          @media screen and (max-width: 991px) {
            min-height: 36px;
            padding: 5px 15px 5px 15px;
          }
          @media screen and (max-width: 767px) {
            margin-left: 0;
            padding: 5px 10px 5px 10px;
            min-width: 120px;
            max-width: 100%;
          }
          .ant-tabs-tab-btn {
            width: 100%;
            .tab-label-wrapper {
              display: flex;
              justify-content: space-between;
              div {
                display: flex;
              }
              .title {
                color: ${color.greyColor};
                font-size: 16px;
                font-family: ${fontFamily.ptBold};
                margin-right: 10px;
                padding: 0;
                @media screen and (max-width: 991px) {
                  font-size: 15px;
                }
              }
              .badge {
                min-width: 26px;
                min-height: 26px;
                border-radius: 50%;
                background: rgba(0, 0, 0, 0.05);
                font-family: ${fontFamily.ptBold};
                font-size: 12px;
                line-height: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${color.greyColor};
              }
            }
          }
          &.ant-tabs-tab-active {
            background: #faf7f6;
            .tab-label-wrapper {
              .title {
                color: ${color.blackColor};
                background: none;
              }
              .badge {
                background: ${color.primaryColor};
                color: ${color.whiteColor};
              }
            }
          }
        }
        .ant-tabs-ink-bar {
          left: 0;
          background: ${color.primaryColor};
        }
      }
    }
    .ant-tabs-content-holder {
      flex: 1;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      margin-left: 24px;
      padding: 15px;
      @media screen and (max-width: 991px) {
        margin-left: 15px;
      }
      @media screen and (max-width: 767px) {
        margin-left: 0;
        width: 100%;
      }
      .ant-tabs-content {
        .ant-tabs-tabpane {
          padding: 0;
        }
      }
    }
  }
`;

export const PaymentDataWrapper = styled.div`
  .title-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    @media screen and (max-width: 767px) {
      align-items: center;
      margin-bottom: 20px;
    }
    div {
      margin-right: 20px;
      @media screen and (max-width: 767px) {
        margin-right: 15px;
      }
      &:first-child {
        flex: 1;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    .title {
      font-size: 16px;
      line-height: 20px;
      color: ${color.blackColor};
      font-family: ${fontFamily.ptBold};
    }
    p {
      font-size: 12px;
      line-height: 15px;
      font-family: ${fontFamily.ptRegular};
      color: ${color.greyColor};
      margin-bottom: 0;
    }
    .ant-select {
      min-width: 210px;
      @media screen and (max-width: 767px) {
        min-width: 120px;
        max-width: 160px;
      }
      .ant-select-selector {
        border-radius: 8px;
        border-color: ${color.secondaryColor};
        height: 34px;
        .ant-select-selection-placeholder {
          color: ${color.secondaryColor};
          text-transform: capitalize;
          font-family: ${fontFamily.ptBold};
          font-size: 14px;
          display: flex;
          align-items: center;
        }
        .ant-select-selection-item {
          font-family: ${fontFamily.ptBold};
          font-size: 14px;
          display: flex;
          align-items: center;
          color: ${color.secondaryColor};
          text-transform: capitalize;
        }
        input {
          height: 100%;
        }
      }
      .ant-select-arrow {
        .anticon {
          display: flex;
          align-items: center;
          svg {
            width: 9px;
            height: 9px;
            path {
              stroke: ${color.secondaryColor};
            }
          }
        }
      }
      &:hover {
        .ant-select-selector {
          border-color: ${color.secondaryColor} !important;
        }
      }
      &.ant-select-focused {
        .ant-select-selector {
          box-shadow: none !important;
          border-color: ${color.secondaryColor} !important;
        }
      }
      &.ant-select-open {
        .ant-select-selector {
          box-shadow: none !important;
          border-color: ${color.secondaryColor} !important;
        }
      }
    }
  }

  /* table */
  .payment-card {
    .ant-table-container {
      border-radius: 8px;
      border-color: rgba(0, 0, 0, 0.1) !important;
    }
    table {
      border-radius: 8px;
      overflow: hidden;
      tr {
        th {
          border-color: rgba(0, 0, 0, 0.1) !important;
          font-size: 14px;
          font-family: ${fontFamily.ptBold};
          text-transform: capitalize;
          padding: 10px 32px;
          background: #fff;
          color: ${color.blackColor};
          @media screen and (max-width: 991px) {
            padding: 12px;
          }
          &.remove,
          &.method {
            text-align: center;
          }
        }
        td {
          border-color: rgba(0, 0, 0, 0.1) !important;
          padding: 20px 32px;
          background: #fafafa;
          font-size: 14px;
          line-height: 19px;
          color: ${color.blackColor};
          font-family: ${fontFamily.ptBold};
          @media screen and (max-width: 991px) {
            padding: 12px;
          }
          .ant-empty {
            margin-block: 0;
            .ant-empty-image {
              svg {
                width: 55px;
                height: auto;
              }
            }
          }
          .ant-empty-description {
            font-family: ${fontFamily.ptBold};
          }
          &.remove,
          &.method {
            text-align: center;
          }
          .ant-radio-wrapper {
            .ant-radio {
              .ant-radio-inner {
                border-color: ${color.primaryColor};
              }
              &.ant-radio-checked {
                .ant-radio-inner {
                  border-color: ${color.primaryColor};
                  background: ${color.whiteColor};
                  &::after {
                    border-radius: 50%;
                    transform: scale(0.5);
                    background: ${color.primaryColor};
                  }
                }
              }
            }
          }
          svg {
            width: 18px;
            height: 18px;
            cursor: pointer !important;
            path {
              stroke-width: 1.5px;
              cursor: pointer !important;
            }
          }
        }
        &.ant-table-row-selected {
          td {
            background: #fafafa;
          }
          &:hover {
            td {
              background: #fafafa;
            }
          }
        }
      }
      .ant-table-tbody {
        tr {
          td {
            border: none;
          }
          &:last-child {
            td {
              border-bottom: 1px solid rgba(0, 0, 0, 0.1);
              &:first-child {
                border-radius: 0 0 0 8px;
              }
              &:last-child {
                border-radius: 0 0 8px 0;
              }
            }
          }
        }
      }
    }
  }

  .transaction-detail-table {
    table {
      tr {
        &.ant-table-measure-row {
          td {
            padding: 0 !important;
          }
        }
        th {
          @media screen and (max-width: 767px) {
            padding: 10px !important;
          }
        }
        td {
          padding: 15px 15px;
          @media screen and (max-width: 767px) {
            padding: 10px !important;
          }
          div {
            margin-bottom: 6px;
            font-family: ${fontFamily.ptBold};
            &.name {
              font-size: 14px;
            }
            &.secondary {
              color: ${color.secondaryColor};
            }
            &.green {
              color: #59eb71;
            }
            &.red {
              color: #ff8787;
            }
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }

  .transaction-search {
    margin-bottom: 12px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    padding: 7px 10px;
    height: 32px;
    &:hover {
      border-color: rgba(0, 0, 0, 0.3);
      box-shadow: none;
    }
    .ant-input-prefix {
      margin-right: 6px;
    }
    .ant-input {
      border: none !important;
      font-size: 12px;
      font-family: ${fontFamily.ptBold};
      color: ${color.blackColor};

      &::placeholder {
        color: ${color.greyColor};
        font-family: ${fontFamily.ptBold};
      }
    }
  }
`;
