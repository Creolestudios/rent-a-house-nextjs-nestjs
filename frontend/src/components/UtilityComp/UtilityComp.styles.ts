import styled from 'styled-components';
import bgImg from '@/assets/images/bg-price.png';
import { fontFamily, color } from '@/styles/variable';

export const StripeWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #f7f7f7;
  border: 1px solid #eeeeee;
  width: 100%;
  padding: 22px 30px;
  border-radius: 8px;
  background-image: url(${bgImg.src});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  @media screen and (max-width: 767px) {
    padding: 15px;
    background-image: none;
    flex-direction: column;
  }
  @media screen and (max-width: 600px) {
    padding: 12px;
  }
  .left {
    display: flex;
    align-items: center;
    margin-right: 15px;
    @media screen and (max-width: 767px) {
      margin-right: 0;
    }
    .symbol {
      padding-right: 24px;
      margin-right: 24px;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      height: 100%;
      display: flex;
      align-items: center;
      @media screen and (max-width: 767px) {
        padding-right: 15px;
        margin-right: 15px;
      }
      @media screen and (max-width: 600px) {
        padding-right: 10px;
        margin-right: 15px;
      }
      img {
        @media screen and (max-width: 767px) {
          width: 20px;
          height: 20px;
        }
        @media screen and (max-width: 600px) {
          width: 15px;
          height: 15px;
        }
      }
    }
    .title {
      color: ${color.secondaryColor};
      font-size: 24px;
      line-height: 31px;
      font-family: ${fontFamily.ptBold};
      @media screen and (max-width: 991px) {
        font-size: 22px;
        line-height: 24px;
      }
      @media screen and (max-width: 767px) {
        font-size: 20px;
        line-height: 24px;
      }
      @media screen and (max-width: 600px) {
        font-size: 18px;
        line-height: 20px;
      }
    }
  }
  .right {
    margin-left: auto;
    @media screen and (max-width: 767px) {
      margin: 20px auto 0;
    }
    .ant-btn {
      background: ${color.secondaryColor};
      color: ${color.whiteColor};
      border: none;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${fontFamily.ptBold};
      padding: 10px 36px;
      text-transform: uppercase;
      cursor: pointer !important;
      @media screen and (max-width: 767px) {
        height: 36px;
        padding: 10px 20px;
        font-size: 12px;
      }
      span {
        cursor: pointer !important;
      }
      svg {
        cursor: pointer !important;
        path {
          cursor: pointer !important;
        }
      }
    }
  }
  &.no-bg-img {
    background-image: none;
  }
`;

export const FilterWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  .title {
    font-size: 16px;
    line-height: 20px;
    color: ${color.blackColor};
    font-family: ${fontFamily.ptBold};
    margin-bottom: 20px;
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
      margin-bottom: 15px;
    }
  }
  .block {
    padding: 20px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    @media screen and (max-width: 767px) {
      padding: 12px 0;
    }
    .icon-wrap {
      display: flex;
      justify-content: space-between;
    }
    .title {
      font-size: 16px;
      line-height: 20px;
      color: ${color.blackColor};
      font-family: ${fontFamily.ptBold};
      text-transform: capitalize;
      /* float: left; */
      margin-bottom: 16px;
    }
    .icon {
      /* float: right; */
      svg {
        transform: rotate(0);
        path {
          stroke: ${color.primaryColor};
        }
      }
    }
    .block-content {
      clear: both;
      /* padding-top: 15px 0 0; */
      display: flex;
      flex-wrap: wrap;
      .block-item {
        width: 100%;
        margin-bottom: 12px;
        .priceIndicator {
          font-size: 13px;
          margin-bottom: 20px;
          font-family: ${fontFamily.ptBold};
          color: ${color.blackColor};
          display: block;
        }
        .ant-slider {
          margin-bottom: 10px;
          margin-top: 0;
          @media screen and (max-width: 767px) {
            margin: 0px 10px 10px;
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
        &.w-50 {
          width: calc(50% - 6px);
          margin-right: 12px;
          &.remove-mr {
            margin-right: 0;
          }
        }
        .ant-input-affix-wrapper {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.3);
          border-right-width: 3px !important;
          border-right-color: ${color.primaryColor} !important;
          border-radius: 8px;
          height: 36px;
          padding: 4px 12px;
          .ant-input-prefix {
            margin-right: 10px;
            svg {
              width: 14px;
              height: 14px;
              path {
                stroke-width: 1.5;
                stroke: ${color.primaryColor};
                stroke-opacity: 1;
              }
            }
          }
          .ant-input {
            padding: 0;
            box-shadow: none;
            border: none !important;
            border-radius: 0;
            height: 100%;
            font-size: 12px;
            font-family: ${fontFamily.ptBold};
            color: ${color.blackColor};
            &::placeholder {
              color: ${color.greyColor};
              font-family: ${fontFamily.ptRegular};
            }
          }
          &.ant-input-affix-wrapper-focused {
            box-shadow: none;
          }
        }
        .ant-input {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.3);
          border-right-width: 3px !important;
          border-right-color: ${color.primaryColor} !important;
          border-radius: 8px;
          height: 36px;
          padding: 4px 12px;
          font-size: 12px;
          font-family: ${fontFamily.ptBold};
          color: ${color.blackColor};
          &::placeholder {
            color: ${color.greyColor};
            font-family: ${fontFamily.ptRegular};
          }
        }
        .ant-select {
          .ant-select-selector {
            height: 36px;
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-right-width: 3px !important;
            border-right-color: ${color.primaryColor} !important;
            border-radius: 8px;
            padding: 0 12px;
            .ant-select-selection-item {
              font-size: 12px;
              font-family: ${fontFamily.ptBold};
              color: ${color.blackColor};
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
        }
        .ant-checkbox-wrapper {
          .ant-checkbox {
            .ant-checkbox-input {
              cursor: pointer !important;
            }
            .ant-checkbox-inner {
              border-color: ${color.secondaryColor};
              cursor: pointer !important;
            }
            &.ant-checkbox-checked {
              .ant-checkbox-inner {
                background: ${color.secondaryColor};
                &::after {
                  width: 5px;
                  height: 9px;
                }
              }
            }
            + span {
              font-size: 14px;
              line-height: 20px;
              color: ${color.blackColor};
              font-family: ${fontFamily.ptBold};
              padding-left: 4px;
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
        .ant-slider {
          .ant-slider-rail {
            background: rgba(0, 0, 0, 0.1);
          }
          .ant-slider-track {
            background: ${color.primaryColor};
          }
          .ant-slider-handle {
            inset-block-start: -2px;
            width: 16px;
            height: 16px;
            /* box-shadow: 0px 3px 4px rgba(38, 94, 187, 0.25); */
            &::before {
              width: 16px;
              height: 16px;
            }
            &::after {
              width: 16px;
              height: 16px;
              box-shadow: 0px 3px 4px rgb(38 94 187 / 25%);
              border: 1px solid ${color.primaryColor};
            }
            &:hover {
              &::after {
                inset-inline-start: 0;
                inset-block-start: 0;
              }
            }
          }
        }
        .date-wrapper {
          display: flex;
          align-items: center;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.3);
          border-right-width: 3px !important;
          border-right-color: ${color.primaryColor} !important;
          border-radius: 8px;
          padding: 10px 15px;
          position: relative;
          min-height: 54px;
          .placeholder-text {
            position: absolute;
            left: 46px;
            top: 10px;
            font-size: 12px;
            color: ${color.greyColor};
            line-height: 12px;
            font-family: ${fontFamily.ptRegular};
          }
          .icon {
            margin-right: 14px;
            display: flex;
            svg {
              transform: rotate(0);
              path {
                stroke-width: 1.5;
              }
            }
          }
          .ant-picker {
            padding: 0;
            width: 97%;
            border: none;
            .ant-picker-input {
              input {
                font-size: 14px;
                font-family: ${fontFamily.ptBold};
                color: ${color.blackColor};
                position: absolute;
                top: -3px;
                &:focus {
                  border: none;
                }
                &::placeholder {
                  color: ${color.blackColor};
                  font-family: ${fontFamily.ptRegular};
                }
              }
            }
            &.ant-picker-focused {
              box-shadow: none;
            }
          }
        }
        .checkbox-wrapper {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          &:nth-last-child(1) {
            margin-bottom: 0;
          }
          .ant-checkbox-wrapper {
            .ant-checkbox {
              + span {
                color: ${color.greyColor};
              }
            }
          }
          .badge {
            min-width: 26px;
            min-height: 16px;
            padding: 2px 8px 2px 8px;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            font-size: 12px;
            line-height: 1;
            font-family: ${fontFamily.ptBold};
            color: ${color.greyColor};
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 10px;
          }
        }
        .size-text {
          text-decoration: underline;
          color: ${color.primaryColor};
          font-size: 14px;
          line-height: 20px;
          font-family: ${fontFamily.ptBold};
          margin-bottom: 8px;
          cursor: pointer !important;
          width: fit-content;
        }
      }
    }
    &.filter-content {
      .title {
        margin-bottom: 0;
      }
      .block-content {
        height: 0;
        overflow: hidden;
      }
      &.active {
        .icon {
          svg {
            transform: rotate(180deg);
          }
        }
        .title {
          margin-bottom: 20px;
        }
        .block-content {
          height: auto;
          /* overflow: hidden; */
        }
      }
    }
  }
  .google-searcharea-wrapper {
    .autocomplete-dropdown-container {
      padding: 5px 0;
      .suggestion-item {
        padding: 5px 10px;
        background: #fff;
        cursor: pointer !important;
        &.suggestion-item--active {
          padding: 5px 10px;
          background: #fafafa;
        }
      }
    }
  }
`;

export const CustomPaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  .ant-pagination {
    display: flex;
    flex-wrap: wrap;
    /* position: fixed; */
    bottom: 40px;
    right: 40px;
    margin-bottom: 0;

    li {
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 36px;
      min-height: 36px;
      cursor: pointer !important;
      @media screen and (max-width: 767px) {
        min-width: 30px;
        min-height: 30px;
      }
      .anticon {
        svg {
          color: #fff;
          cursor: pointer !important;
        }
      }
      &.ant-pagination-prev {
        background: #03488b;
        position: relative;
        margin-right: 20px;

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          right: -10px;
          transform: translateY(-50%);
          height: 6px;
          width: 1px;
          background: rgba(121, 121, 121, 0.5);
        }
        &.ant-pagination-disabled {
          display: none;
        }
      }
      &.ant-pagination-next {
        background: #03488b;
        position: relative;
        margin-left: 20px;
        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -10px;
          transform: translateY(-50%);
          height: 6px;
          width: 1px;
          background: rgba(121, 121, 121, 0.5);
        }
        &.ant-pagination-disabled {
          display: none;
        }
      }
      a {
        color: ${color.blackColor};
        font-family: ${fontFamily.ptBold};
        font-size: 14px;
        line-height: 18px;
        cursor: pointer !important;
      }
      &.active {
        border: 1px solid #03488b;
        a {
          color: #03488b;
          text-decoration: underline;
        }
      }
      button {
        cursor: pointer !important;
        background-color: transparent;
        outline: none;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          cursor: pointer !important;
          path {
            cursor: pointer !important;
          }
        }
      }
    }
  }
`;
