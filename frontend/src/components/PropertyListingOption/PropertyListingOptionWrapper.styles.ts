import styled from 'styled-components';
import { color, fontFamily } from '@/styles/variable';
import { HeaderProps } from './ProgressLine';

export const PropertyListingOptionWrapper = styled.div`
  height: calc(100vh - 100px);
  overflow-y: auto;
  padding-bottom: 0 !important;
  @media screen and (max-width: 767px) {
    height: calc(100vh - 60px);
    padding-bottom: 60px !important;
  }
  &.duplicate-wrap {
    height: 100vh;
    padding-bottom: 20px !important;
  }
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(0 0 0 / 20%);
  }

  .title {
    font-size: 20px;
    line-height: 25px;
    font-family: ${fontFamily.ptBold};
    color: ${color.blackColor};
    padding-bottom: 15px;
    text-transform: capitalize;
    position: sticky;
    top: 56px;
    background: #fff;
    z-index: 100;
    @media screen and (max-width: 767px) {
      font-size: 18px;
      line-height: 22px;
    }
  }
  .block {
  }

  .ant-input {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-right-width: 3px !important;
    border-right-color: ${color.primaryColor} !important;
    border-radius: 8px;
    color: ${color.blackColor};
    font-size: 12px;
    font-family: ${fontFamily.ptBold};
    &:focus {
      box-shadow: none;
    }
    /* &:hover {
      border: 1px solid rgba(0, 0, 0, 0.3);
    } */
    &::placeholder {
      color: ${color.greyColor};
      font-family: ${fontFamily.ptRegular};
    }
  }

  .ant-upload-wrapper {
    .ant-upload-list {
      .ant-tooltip {
        display: none;
      }
    }
  }
`;

export const ListingOptionWrapper = styled.div`
  padding: 0 0 20px;
`;

export const StepIndicatorWrapper = styled.div`
  color: ${color.secondaryColor};
  font-family: ${fontFamily.ptBold};
  font-size: 16px;
  line-height: 21px;
  /* margin-bottom: 15px; */
  position: sticky;
  z-index: 100;
  top: 0;
  padding: 20px 0 15px;
  background: ${color.whiteColor};
`;

export const ListOptionWrapper = styled.div`
  h1 {
    font-size: 40px;
    line-height: 52px;
    font-family: ${fontFamily.ptBold};
    color: ${color.blackColor};
    margin-bottom: 4px;
    @media screen and (max-width: 1199px) {
      font-size: 32px;
      line-height: 42px;
    }
    @media screen and (max-width: 991px) {
      font-size: 28px;
      line-height: 38px;
    }
    @media screen and (max-width: 767px) {
      font-size: 22px;
      line-height: 28px;
    }
  }
  h6 {
    color: ${color.greyColor};
    font-size: 20px;
    line-height: 25px;
    font-family: ${fontFamily.ptBold};
    @media screen and (max-width: 1199px) {
      font-size: 18px;
      line-height: 22px;
    }
    @media screen and (max-width: 767px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const OptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
  .ant-radio-group {
    width: 100%;
    display: flex;
    /* align-items: center; */
    @media screen and (max-width: 575px) {
      flex-wrap: wrap;
    }
    label {
      display: flex;
      align-items: center;
      padding: 18px 20px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      /* flex: 1; */
      width: 100%;
      margin-right: 20px;
      cursor: pointer !important;
      @media screen and (max-width: 1199px) {
        padding: 15px;
        margin-right: 15px;
      }
      @media screen and (max-width: 767px) {
        padding: 12px;
      }
      @media screen and (max-width: 575px) {
        width: 100%;
        margin-right: 0;
        margin-bottom: 20px;
      }
      &:last-child {
        margin-right: 0;
        @media screen and (max-width: 575px) {
          margin-bottom: 0;
        }
      }
      &.ant-radio-wrapper-checked {
        border-color: #ff904c;
        box-shadow: 0px 0px 0px 4px rgba(255, 144, 76, 0.25);
      }
      .ant-radio {
        display: none;
        + span {
          cursor: pointer !important;
          padding: 0;
          display: flex;
          align-items: center;
        }
      }

      .img-wrapper {
        width: 50px;
        height: 50px;
        margin-right: 30px;
        cursor: pointer !important;
        display: flex;
        align-items: center;
        @media screen and (max-width: 1199px) {
          width: 40px;
          height: 40px;
          margin-right: 20px;
        }
        @media screen and (max-width: 767px) {
          width: 35px;
          height: 35px;
          margin-right: 15px;
        }
        img {
          cursor: pointer !important;
          @media screen and (max-width: 1199px) {
            width: 40px;
            height: 40px;
          }
          @media screen and (max-width: 767px) {
            width: 35px;
            height: 35px;
          }
        }
      }
      .content {
        flex: 1;
        cursor: pointer !important;
        h3 {
          font-size: 20px;
          line-height: 26px;
          margin-bottom: 4px;
          color: ${color.blackColor};
          font-family: ${fontFamily.ptBold};
          cursor: pointer !important;
          @media screen and (max-width: 1199px) {
            font-size: 18px;
            line-height: 24px;
          }
        }
        p {
          color: ${color.greyColor};
          font-size: 16px;
          line-height: 26px;
          font-family: ${fontFamily.ptRegular};
          margin: 0;
          cursor: pointer !important;
          @media screen and (max-width: 1199px) {
            font-size: 15px;
            line-height: 20px;
          }
        }
        .ant-input {
          &:hover {
            border: 1px solid rgba(0, 0, 0, 0.3);
          }
        }
      }
    }
  }
`;

export const ActionButtonWrapper = styled.div`
  height: 100px;
  background: #faf7f6;
  border: 1px solid #eeeeee;
  padding: 20px 0;
  position: fixed;
  width: 100vw;
  margin-left: -50vw;
  margin-right: -50vw;
  left: 50%;
  right: 50%;
  bottom: 0;
  z-index: 100;
  @media screen and (max-width: 767px) {
    height: 60px;
    padding: 10px 0;
  }
  .container {
    height: 100%;
  }
  .btn-wrapper {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    button {
      min-width: 150px;
      margin-right: 20px;
      text-transform: uppercase;
      @media screen and (max-width: 767px) {
        min-width: 100px;
        margin-right: 15px;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const CreateListWrapper = styled.div`
  /* > .title {
    font-size: 20px;
    line-height: 25px;
    font-family: ${fontFamily.ptBold};
    color: ${color.blackColor};
    padding-bottom: 15px;
    text-transform: capitalize;
    position: sticky;
    top: 56px;
    background: #fff;
  } */
  .ant-form {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 1199px) {
      padding: 30px;
    }
    @media screen and (max-width: 991px) {
      padding: 20px;
    }
    @media screen and (max-width: 767px) {
      padding: 15px;
    }
    .left {
      flex: 1;
      margin-right: 64px;
      @media screen and (max-width: 1199px) {
        margin-right: 40px;
      }
      @media screen and (max-width: 991px) {
        margin-right: 20px;
      }
      @media screen and (max-width: 767px) {
        margin-right: 0;
        width: 100%;
        margin-bottom: 15px;
      }
    }
    .right {
      flex: 1;
      @media screen and (max-width: 767px) {
        width: 100%;
        flex: unset;
      }
    }
    .ant-form-item {
      display: flex;
      width: 100%;
      margin-bottom: 12px;
      /* &:last-child{
        margin-bottom: 0;
      } */
      .ant-form-item-row {
        width: 100%;
        /* margin-bottom: 12px; */
        .ant-form-item-label {
          label {
            font-family: ${fontFamily.ptBold};
            font-size: 14px;
            margin-bottom: 12px;
            text-transform: capitalize;
            @media screen and (max-width: 767px) {
              margin-bottom: 5px;
            }
          }
        }
        .ant-form-item-control-input {
          .ant-input {
            font-size: 14px;
            font-family: ${fontFamily.ptBold};
            &::placeholder {
              color: ${color.greyColor};
              font-size: 12px;
              font-family: ${fontFamily.ptRegular};
            }
          }
          .ant-select {
            .ant-select-selector {
              border: 1px solid rgba(0, 0, 0, 0.3);
              border-radius: 8px;
              border-right-width: 3px !important;
              border-right-color: ${color.primaryColor} !important;
              height: 36px;
              input {
                height: 100%;
                &::placeholder {
                  color: ${color.greyColor};
                }
              }
              .ant-select-selection-item {
                font-size: 14px;
                font-family: ${fontFamily.ptBold};
                display: flex;
                align-items: center;
              }
              .ant-select-selection-placeholder {
                color: ${color.greyColor};
                font-size: 12px;
                font-family: ${fontFamily.ptRegular};
                display: flex;
                align-items: center;
              }
            }
            .ant-select-arrow {
              .anticon {
                display: flex;
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
          }
          .ant-picker {
            padding: 5px 10px;
            .ant-picker-input {
              input {
                &::placeholder {
                  color: ${color.greyColor};
                }
              }
              .ant-picker-suffix {
                .anticon {
                  svg {
                    width: unset;
                    height: unset;
                  }
                }
              }
            }
            &.ant-picker-focused {
              box-shadow: none;
            }
          }
          .ant-radio-group {
            .ant-radio-wrapper {
              .ant-radio {
                + span {
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &.facility-amenities {
    .ant-form {
      padding: 0;
      border: none;
      .form-item-wrapper {
        display: flex;
        flex-wrap: wrap;
        .ant-form-item {
          width: 50%;
          @media screen and (max-width: 767px) {
            width: 100%;
          }
          .ant-form-item-label {
            label {
              font-size: 14px;
              line-height: 19px;
              color: ${color.greyColor};
            }
          }
        }
      }
      .title {
        padding-bottom: 24px;
        margin-bottom: 24px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        font-size: 20px;
        line-height: 25px;
        font-family: ${fontFamily.ptBold};
        color: ${color.blackColor};
        padding-bottom: 15px;
        text-transform: capitalize;
        position: sticky;
        z-index: 1;
        top: 95px;
        @media screen and (max-width: 767px) {
          font-size: 18px;
          line-height: 22px;
          margin-bottom: 15px;
          padding-bottom: 15px;
          top: 92px;
        }
        @media screen and (max-width: 575px) {
          position: sticky;
          z-index: 1;
        }
      }
      .left {
        height: 100%;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        flex: 1;
        margin-right: 20px;
        padding: 40px;
        @media screen and (max-width: 1199px) {
          padding: 30px;
        }
        @media screen and (max-width: 991px) {
          padding: 20px;
        }
        @media screen and (max-width: 767px) {
          padding: 15px;
          margin-right: 0;
          margin-bottom: 20px;
          width: 100%;
          flex: unset;
        }
      }
      .right {
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        flex: 1;
        padding: 40px;
        height: 100%;
        @media screen and (max-width: 1199px) {
          padding: 30px;
        }
        @media screen and (max-width: 991px) {
          padding: 20px;
        }
        @media screen and (max-width: 767px) {
          padding: 15px;
          width: 100%;
        }
      }
    }
  }
`;

export const ProgressLineWrapper = styled.div`
  position: fixed;
  z-index: 1001;
  top: 74px;
  top: ${(props: HeaderProps) => props.headerHeight}px;
  left: 0;
  height: 2px;
  background: ${color.primaryColor};
  transition: 0.8s all ease-in-out;
`;

export const RentalConditionWrapper = styled.div`
  .title {
    margin-bottom: 24px;
    padding-bottom: 0;
    @media screen and (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
  .block {
    /* margin-top: 24px; */
    padding-bottom: 24px;
    display: block;
    background: #fff;
    @media screen and (max-width: 767px) {
      /* padding-bottom: 20px; */
    }
    /* &:last-child {
      padding-bottom: 0;
    } */
    .sub-title {
      font-size: 16px;
      line-height: 21px;
      font-family: ${fontFamily.ptBold};
      color: ${color.blackColor};
      margin-bottom: 24px;
      text-transform: capitalize;
      @media screen and (max-width: 767px) {
        margin-bottom: 15px;
        font-size: 15px;
        line-height: 22px;
      }
    }
  }
  .ant-radio-group {
    padding: 0 5px;
    /* @media screen and (max-width: 767px) {
      padding: 0;
    } */
    .ant-radio-wrapper {
      .ant-radio {
        display: flex;
        margin-right: 20px;
        @media screen and (max-width: 991px) {
          margin-right: 15px;
        }
        @media screen and (max-width: 767px) {
          margin-right: 10px;
        }
        .ant-radio-inner {
          width: 18px;
          height: 18px;
          border-color: ${color.primaryColor};
        }
        &.ant-radio-checked {
          .ant-radio-inner {
            background: ${color.whiteColor};
            border-color: ${color.primaryColor};
            &::after {
              transform: scale(0.6);
              background: ${color.primaryColor};
            }
          }
        }
      }
    }
    &.common-radio {
      .ant-radio-wrapper {
        .ant-radio {
          margin-right: 0;
          + span {
            font-family: ${fontFamily.ptBold};
            text-transform: capitalize;
          }
        }
      }
    }
  }
  .option-wrapper {
    margin-top: 0;
    display: inline-block;
  }

  .ant-checkbox-group {
    width: 100%;
    padding: 0 5px;
    /* @media screen and (max-width: 767px) {
      padding: 0;
    } */
    @media screen and (max-width: 575px) {
      flex-wrap: wrap;
    }
    .ant-checkbox-wrapper {
      cursor: pointer !important;
      position: relative;
      /* flex: 1; */
      width: 100%;
      margin-right: 20px;
      margin-left: 0;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      padding: 20px 20px 20px 50px;
      @media screen and (max-width: 991px) {
        padding: 20px 20px 20px 40px;
      }
      @media screen and (max-width: 767px) {
        padding: 12px 12px 12px 30px;
        margin-right: 15px;
      }
      @media screen and (max-width: 575px) {
        width: 100%;
        margin-right: 0;
        margin-bottom: 20px;
      }
      &:last-child {
        margin-right: 0;
        @media screen and (max-width: 575px) {
          margin-bottom: 0;
        }
      }
      .ant-checkbox {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        padding: 0;
        @media screen and (max-width: 991px) {
          left: 15px;
        }
        @media screen and (max-width: 767px) {
          left: 12px;
          /* padding: 0; */
        }
        .ant-checkbox-inner {
          cursor: pointer !important;
          position: absolute;
          top: 50%;
          /* left: 20px; */
          transform: translateY(-50%);
        }
        + span {
          .title {
            padding: 0;
            margin-bottom: 6px;
            font-size: 16px;
            line-height: 16px;
            position: unset;
            cursor: pointer !important;
          }
          p {
            font-size: 14px;
            line-height: 19px;
            color: ${color.greyColor};
            margin-bottom: 0;
            font-family: ${fontFamily.ptRegular};
            cursor: pointer !important;
          }
        }
        &.ant-checkbox-checked {
          .ant-checkbox-inner {
            background: ${color.primaryColor};
            border-color: ${color.primaryColor};
          }
          &::after {
            border-color: ${color.primaryColor};
          }
        }
        &:hover {
          .ant-checkbox-inner {
            border-color: ${color.primaryColor};
          }
        }
      }
      &:hover {
        .ant-checkbox-inner {
          border-color: ${color.primaryColor};
        }
      }
      &.ant-checkbox-wrapper-checked {
        border-color: ${color.primaryColor};
        box-shadow: 0px 0px 0px 4px rgba(255, 144, 76, 0.25);
      }
    }
  }
`;

export const AdditionalCostWrapper = styled.div`
  .input-block {
    display: flex;
    align-items: center;
    .block {
      margin-right: 16px;
      margin-bottom: 12px;
      padding-bottom: 0;
      @media screen and (max-width: 575px) {
        margin-right: 10px;
      }
      .ant-input {
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 8px;
        border-right-width: 3px !important;
        border-right-color: ${color.primaryColor} !important;
        height: 32px;
        font-size: 12px;
        color: ${color.blackColor};
        font-family: ${fontFamily.ptRegular};
        &::placeholder {
          color: ${color.greyColor};
        }
        &:focus {
          box-shadow: none;
        }
      }
      &:last-child {
        margin-right: 0;
      }
      &:first-child {
        .ant-input {
          width: 260px;
          @media screen and (max-width: 575px) {
            width: 100%;
          }
        }
      }
      &:nth-child(2) {
        .ant-input {
          width: 140px;
          @media screen and (max-width: 575px) {
            width: 100px;
          }
        }
      }
      svg {
        cursor: pointer !important;
        path {
          cursor: pointer !important;
        }
      }
    }
  }
  .cost-btn {
    border: 1px solid ${color.secondaryColor};
    border-radius: 20px;
    text-transform: capitalize;
    padding: 0 20px 0 20px;
    height: 30px;
    color: ${color.secondaryColor};
    font-family: ${fontFamily.ptBold};
    min-width: 112px;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    margin-top: 10px;
    cursor: pointer !important;
    svg {
      cursor: pointer !important;
      margin-right: 10px;
      path {
        cursor: pointer !important;
        stroke: ${color.secondaryColor};
      }
    }
  }
`;

export const MediaStepWrapper = styled.div`
  max-width: 610px;
  .title {
    margin-bottom: 24px;
    padding-bottom: 0;
    @media screen and (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
  .block {
    margin-bottom: 30px;
    @media screen and (max-width: 767px) {
      margin-bottom: 20px;
    }
    .sub-title {
      margin-bottom: 15px;
      font-size: 16px;
      line-height: 21px;
      font-family: ${fontFamily.ptBold};
      color: ${color.blackColor};
      text-transform: capitalize;
      @media screen and (max-width: 767px) {
        font-size: 15px;
        line-height: 22px;
      }
    }
  }
  .ant-input {
    @media screen and (max-width: 767px) {
      height: 32px;
    }
  }
  .video-upload-wrapper {
    .ant-upload-wrapper {
      .ant-upload-drag {
        border-color: ${color.primaryColor};
        border-radius: 4px;
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
  .ant-upload-wrapper {
    .ant-upload-list {
      .ant-upload-list-item-container {
        width: 80px !important;
        height: 80px !important;
        margin-right: 10px;
        border-radius: 4px;
        overflow: hidden;
        @media screen and (max-width: 480px) {
          width: 75px !important;
          height: 75px !important;
        }
        .ant-upload-list-item {
          padding: 0;
          width: 100%;
          height: 100%;
          border: none;
          a {
            width: 100%;
            height: 100%;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          &::before {
            width: 100%;
            height: 100%;
          }
        }
      }
      .ant-upload-select {
        width: 80px !important;
        height: 80px !important;
        border-color: ${color.primaryColor};
        border-radius: 4px;
        cursor: pointer !important;
        margin-right: 0;
        .ant-upload {
          cursor: pointer !important;
          .anticon {
            svg {
              color: ${color.primaryColor};
              cursor: pointer !important;
              path {
                cursor: pointer !important;
              }
            }
            + div {
              font-family: ${fontFamily.manropeMedium};
              font-size: 12px;
              line-height: 19px;
              color: ${color.primaryColor};
              margin: 0 !important;
              cursor: pointer !important;
            }
          }
        }
        &:hover {
          border-color: ${color.primaryColor} !important;
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
`;

export const PublishStepWrapper = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 20px;
    line-height: 25px;
    color: ${color.blackColor};
    font-family: ${fontFamily.ptBold};
    margin-bottom: 4px;
    position: unset;
    padding: 0 0 5px;
    @media screen and (max-width: 767px) {
      font-size: 18px;
      line-height: 22px;
    }
  }
  .sub-title {
    font-size: 14px;
    line-height: 19px;
    color: ${color.greyColor};
    font-family: ${fontFamily.ptBold};
    margin-bottom: 20px;
  }
  .number {
    font-size: 14px;
    line-height: 19px;
    color: ${color.greyColor};
    font-family: ${fontFamily.ptBold};
    margin-bottom: 24px;
  }
  .ant-input {
    max-width: 160px;
    height: 32px;
  }
  button {
    margin-top: 35px;
    height: 44px;
    max-width: 230px;
    font-size: 14px;
    @media screen and (max-width: 767px) {
      height: 40px;
      margin-top: 30px;
      max-width: 200px;
    }
    @media screen and (max-width: 575px) {
      flex: 1;
      max-width: 100%;
    }
  }
  &.verify-number {
    padding: 0;
    .ant-input {
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-right-width: 3px !important;
      border-right-color: ${color.primaryColor} !important;
      border-radius: 8px;
      color: ${color.blackColor};
      font-size: 12px;
      font-family: ${fontFamily.ptBold};
      &:focus {
        box-shadow: none;
      }
      &::placeholder {
        color: ${color.greyColor};
        font-family: ${fontFamily.ptRegular};
      }
    }
  }
  .mobile-number {
    display: flex;
    width: 100%;
    .ant-form-item {
      &:first-child {
        width: 100px;
        margin-right: 15px;
      }
      &:last-child {
        flex: 1;
      }
    }
    .ant-select {
      width: 100%;
      margin-right: 8px;
      @media screen and (max-width: 767px) {
        width: 120px;
      }
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
    }
    > .ant-input {
      flex: 1;
    }
  }
  .fill-none {
    background: white;
    color: black;
    border: none;
    text-align: left;
    width: fit-content;
    padding: 0;
    height: auto;
    margin: 20px 0 0;
  }
`;

export const SelectPropertyWrapper = styled.div`
  .header-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    padding-bottom: 24px;
    top: 56px;
    background: ${color.whiteColor};
    z-index: 100;
    @media screen and (max-width: 767px) {
      /* flex-direction: column; */
      padding-bottom: 20px;
    }
    .title {
      margin-bottom: 0;
      margin-right: 20px;
      padding: 0;
      @media screen and (max-width: 767px) {
        /* margin-bottom: 0; */
      }
    }
    .search {
      &::before {
        display: none;
      }
      .search-wrapper {
        display: flex;
        align-items: center;
        padding: 6px 6px 6px 20px;
        height: 36px;
        min-width: 315px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 32px;
        @media screen and (max-width: 767px) {
          min-width: 185px;
          max-width: 200px;
          padding: 6px 6px 6px 12px;
        }
        input {
          border: none !important;
          flex: 1;
          margin-right: 10px;
          padding: 0;
          font-size: 14px;
          font-family: ${fontFamily.ptBold};
          &::placeholder {
            color: #5b5b5b;
            font-family: ${fontFamily.ptRegular};
          }
          &:focus {
            box-shadow: none;
          }
        }
        .icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: ${color.primaryColor};
          margin-left: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            cursor: pointer !important;
            transition: 0.4s all;
            path {
              cursor: pointer !important;
              stroke-width: 1.5px;
              stroke: #fff;
              stroke-opacity: 1;
            }
          }
        }
        &:hover {
          .icon {
            svg {
              transform: rotate(360deg) scale(1.1);
            }
          }
        }
      }
    }
  }
`;

export const ListingPropertyWrapper = styled.div`
  padding: 20px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  @media screen and (max-width: 767px) {
    padding: 15px 12px;
  }
  .block-wrapper {
    list-style-type: none;
    .block {
      padding: 21px 10px;
      display: flex;
      border: 1px solid transparent;
      @media screen and (max-width: 991px) {
        padding: 15px 10px;
      }
      @media screen and (max-width: 767px) {
        padding: 10px;
      }
      img {
        border-radius: 8px;
        margin-right: 24px;
        @media screen and (max-width: 991px) {
          width: 70px;
          height: 70px;
          margin-right: 20px;
        }
        @media screen and (max-width: 767px) {
          width: 60px;
          height: 60px;
          margin-right: 15px;
        }
      }
      .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title {
          font-size: 24px;
          line-height: 31px;
          color: ${color.blackColor};
          font-family: ${fontFamily.ptRegular};
          margin-bottom: 8px;
          padding: 0;
          position: unset;
          top: unset;
          z-index: unset;
          @media screen and (max-width: 991px) {
            font-size: 22px;
            line-height: 28px;
          }
          @media screen and (max-width: 767px) {
            font-size: 20px;
            line-height: 24px;
          }
          @media screen and (max-width: 575px) {
            font-size: 18px;
            line-height: 22px;
          }
        }
        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          li {
            padding: 0;
            margin: 0;
            font-size: 14px;
            line-height: 19px;
            font-family: ${fontFamily.ptRegular};
            color: ${color.blackColor};
            padding: 0 5px;
            position: relative;
            &::before {
              content: '';
              position: absolute;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
              width: 1px;
              height: 15px;
              background: ${color.blackColor};
            }
            &:last-child {
              &::before {
                display: none;
              }
            }
          }
        }
      }
      &.active {
        border: 1px solid #ff904c;
        box-shadow: 0px 4px 11px rgb(255 144 76 / 20%);
      }
    }
  }
`;

export const DuplicateApartmentWrapper = styled.div`
  /* padding: 0 40px 40px; */
  .title {
    font-size: 20px;
    line-height: 25px;
    font-family: ${fontFamily.ptBold};
    margin-bottom: 30px;
    color: ${color.blackColor};
    text-align: center;
    @media screen and (max-width: 767px) {
      font-size: 18px;
      line-height: 22px;
      br {
        display: none;
      }
    }
  }
  .btn-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    button {
      margin-right: 20px;
      min-width: 150px;
      @media screen and (max-width: 767px) {
        min-width: 100px;
        margin-right: 12px;
      }
      @media screen and (max-width: 575px) {
        flex: 1;
        min-width: auto;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
