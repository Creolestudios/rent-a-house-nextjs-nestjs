import styled from 'styled-components';
import { color, fontFamily } from '@/styles/variable';
import { HeaderProps } from './Account';

export const AccountWrapper = styled.div`
  h2 {
    @media screen and (max-width: 767px) {
      width: 100vw;
      margin-left: -15px;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  .title {
    font-size: 24px;
    line-height: 31px;
    color: ${color.blackColor};
    font-family: ${fontFamily.ptBold};
    padding-top: 24px;
    padding-bottom: 24px;
    margin-bottom: 0;
    position: sticky;
    top: ${(props: HeaderProps) => props.headerHeight}px;
    z-index: 100;
    background: ${color.whiteColor};
    @media screen and (max-width: 767px) {
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
  .ant-tabs {
    align-items: self-start;
    .ant-tabs-nav {
      max-width: 245px;
      width: 100%;
      z-index: 1;
      background: ${color.whiteColor};
      position: sticky;
      top: 153px;
      margin: 0;
      /* align-self: baseline; */
      @media screen and (max-width: 991px) {
        top: 145px;
        max-width: 230px;
      }
      @media screen and (max-width: 767px) {
        max-width: 100%;
        top: 131px;
        padding: 0 0 10px;
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
              @media screen and (max-width: 767px) {
                justify-content: center;
              }
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

export const DataWrapper = styled.div`
  h3 {
    font-size: 16px;
    line-height: 20px;
    color: ${color.blackColor};
    font-family: ${fontFamily.ptBold};
    margin-bottom: 35px;
    @media screen and (max-width: 991px) {
      margin-bottom: 25px;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
  .ant-form {
    display: flex;
    flex-wrap: wrap;
    .ant-form-item {
      width: 100%;
      margin-bottom: 18px;
      @media screen and (max-width: 767px) {
        margin-bottom: 15px;
      }
      &:last-child {
        margin-bottom: 0;
      }
      &.w-50 {
        width: calc(50% - 10px);
        margin-right: 20px;
        @media screen and (max-width: 767px) {
          width: calc(50% - 8px);
          margin-right: 15px;
        }
        @media screen and (max-width: 600px) {
          width: 100%;
          margin-right: 0;
        }
        &.mr-remove {
          margin-right: 0;
        }
      }
      &.w-33 {
        width: calc(33.33% - 13.5px);
        margin-right: 20px;
        @media screen and (max-width: 767px) {
          width: 100%;
          margin-right: 0;
        }
        &.mr-remove {
          margin-right: 0;
        }
      }
      .ant-form-item-label {
        label {
          font-family: ${fontFamily.ptBold} !important;
          height: auto !important;
          white-space: normal;
          .label-wrapper {
            h4 {
              font-size: 14px;
              line-height: 19px;
              font-family: ${fontFamily.ptBold};
              color: ${color.blackColor};
              margin-bottom: 8px;
            }
            p {
              color: ${color.greyColor};
              font-size: 14px;
              line-height: 22px;
              font-family: ${fontFamily.manropeMedium};
              margin: 0;
              @media screen and (max-width: 767px) {
                line-height: 19px;
              }
            }
          }
        }
      }
      .ant-form-item-control-input-content {
        display: flex;
        flex-wrap: wrap;
        .ant-form-item {
          margin-bottom: 8px;
        }
        .avatar {
          display: flex;
          flex-direction: column;
          align-items: center;
          .text {
            font-size: 12px;
            line-height: 16px;
            text-transform: capitalize;
            color: ${color.blackColor};
            margin-top: 10px;
          }
          .ant-upload {
            width: 100px;
            height: 100px;
            border: none;
            background: #f5f5f5;
            border-radius: 8px;
            @media screen and (max-width: 991px) {
              width: 90px;
              height: 90px;
            }
            div {
              font-size: 12px;
            }
          }
        }
        .ant-avatar {
          border-radius: 8px;
          background: #f5f5f5;
          @media screen and (max-width: 767px) {
            width: 80px !important;
            height: 80px !important;
          }
        }
        .ant-select {
          .ant-select-selector {
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-right-width: 3px !important;
            border-right-color: ${color.primaryColor} !important;
            border-radius: 8px;
            height: 36px;
            .ant-select-selection-placeholder {
              font-size: 12px;
              color: ${color.greyColor};
              font-family: ${fontFamily.ptRegular};
              display: flex;
              align-items: center;
            }
            .ant-select-selection-item {
              font-size: 12px;
              color: ${color.blackColor};
              font-family: ${fontFamily.ptBold};
              display: flex;
              align-items: center;
            }
            Input {
              height: 100%;
              display: flex;
              align-items: center;
            }
          }
          .ant-select-arrow {
            .anticon {
              display: flex;
              align-items: center;
              svg {
                path {
                  stroke: ${color.primaryColor};
                }
              }
            }
          }
          &.ant-select-focused {
            .ant-select-selector {
              box-shadow: none;
            }
          }
          &.ant-select-open {
            .ant-select-selector {
              box-shadow: none;
            }
          }
        }
        .ant-picker {
          &.ant-picker-focused {
            box-shadow: none;
          }
        }
      }
      &.btn-wrapper {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        button {
          min-width: 150px;
          margin-right: 20px;
          text-transform: capitalize;
          @media screen and (max-width: 767px) {
            min-width: 100px;
            margin-right: 15px;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .ant-checkbox-wrapper {
        margin-top: 12px;
        .ant-checkbox {
          input {
            cursor: pointer !important;
          }
          .ant-checkbox-inner {
            border-color: ${color.secondaryColor};
            border-radius: 4px;
            cursor: pointer !important;
          }
          &.ant-checkbox-checked {
            .ant-checkbox-inner {
              background: ${color.secondaryColor};
              border-color: ${color.secondaryColor};
            }
          }
          + span {
            color: ${color.greyColor};
            font-size: 14px;
            line-height: 20px;
            font-family: ${fontFamily.ptBold};
            cursor: pointer !important;
          }
        }
        &:hover {
          .ant-checkbox {
            &::after {
              border-color: ${color.secondaryColor};
            }
          }
        }
      }
    }
    .mobile-number {
      display: flex;
      width: 100%;
      .ant-select {
        width: 142px;
        margin-right: 8px;
        @media screen and (max-width: 767px) {
          width: 120px;
        }
      }
      > .ant-input {
        flex: 1;
      }
    }
    &.small-width {
      max-width: 620px;
    }
  }
  .video-upload-wrapper {
    width: 100%;
    .ant-upload-wrapper {
      .ant-upload-drag {
        border-color: ${color.primaryColor};
        border-radius: 4px;
        height: auto;
        cursor: pointer !important;
        .ant-upload-btn {
          min-height: 80px;
          cursor: pointer !important;
          @media screen and (max-width: 991px) {
            min-height: 60px;
          }
          @media screen and (max-width: 767px) {
            min-height: 50px;
          }
          .ant-upload-drag-container {
            cursor: pointer !important;
            p {
              font-family: ${fontFamily.manropeMedium};
              font-size: 12px;
              line-height: 19px;
              color: ${color.primaryColor};
              margin: 0;
              cursor: pointer !important;
            }
          }
        }
      }
      .ant-upload-list {
        .ant-upload-list-item-container {
          width: 100% !important;
          height: auto !important;
          .ant-upload-list-item {
            height: auto;
            padding: 5px;
            background: rgb(0 0 0 / 5%);
            border-radius: 4px;
            .ant-upload-list-item-name {
              font-family: ${fontFamily.manropeMedium};
              font-size: 12px;
              color: ${color.blackColor};
            }
          }
        }
      }
    }

    .ant-upload-wrapper {
      .ant-upload-list {
        .ant-tooltip {
          display: none;
        }
      }
    }
  }
`;
