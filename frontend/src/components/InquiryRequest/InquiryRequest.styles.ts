import { color, fontFamily } from '@/styles/variable';
import styled from 'styled-components';
import bookingBg from '@/assets/images/booking-bg.png';

export const InquiryRequestWrapper = styled.div`
  /* common style */
  .title {
    font-size: 16px;
    line-height: 20px;
    margin: 0 0 4px;
  }
  .list-wrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 0 0 8px;
    list-style-type: none;
    @media screen and (max-width: 1199px) {
      padding: 0;
    }
    li {
      margin-right: 8px;
      padding-right: 14px;
      position: relative;
      font-size: 14px;
      line-height: 18px;
      color: #5b5b5b;
      font-family: ${fontFamily.ptRegular};
      @media screen and (max-width: 1199px) {
        padding-right: 10px;
      }
      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #797979;
      }
      &:last-child {
        padding-right: 0;
        &::after {
          display: none;
        }
      }
    }
  }

  .slick-slider {
    @media screen and (max-width: 767px) {
      max-width: 350px;
    }
    .slick-list {
      .slick-slide {
        @media screen and (max-width: 1199px) {
          height: 230px !important;
        }
      }
    }
  }

  .breadcrumb-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 20px;
    .ant-breadcrumb {
      margin-right: 10px;
      ol {
        li {
          display: flex;
          align-items: center;
          font-family: ${fontFamily.ptRegular};
          font-size: 14px;
          &.ant-breadcrumb-separator {
            display: flex;
            align-items: center;
            .anticon {
              svg {
                transform: rotate(-90deg);
              }
            }
          }
          &:last-child {
            .ant-breadcrumb-separator {
              display: none;
            }
          }
          span {
            &.ant-breadcrumb-link {
              color: ${color.primaryColor};
              font-family: ${fontFamily.ptBold};
              text-transform: capitalize;
            }
          }
          a {
            &.ant-breadcrumb-link {
              color: ${color.greyColor};
              cursor: pointer !important;
              text-transform: capitalize;
            }
            svg {
              cursor: pointer !important;
              path {
                cursor: pointer !important;
              }
            }
          }
        }
      }
    }
    .archive {
      display: flex;
      align-items: center;
      margin-left: auto;
      color: ${color.secondaryColor};
      font-size: 14px;
      font-family: ${fontFamily.ptRegular};
      cursor: pointer !important;
      svg {
        margin-right: 5px;
        width: 15px;
        height: 15px;
        cursor: pointer !important;
        path {
          cursor: pointer !important;
        }
      }
    }
  }

  .pay-plan {
    background: rgba(0, 0, 0, 0.03);
    border: 1px solid rgba(3, 72, 139, 0.2);
    border-radius: 4px;
    padding: 8px 12px 8px 12px;
    color: ${color.secondaryColor};
    font-size: 13px;
    font-family: ${fontFamily.ptBold};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    cursor: pointer !important;
    svg {
      cursor: pointer !important;
      transform: rotate(-90deg);
      margin-left: 5px;
      width: 8px;
      path {
        cursor: pointer !important;
        stroke: ${color.secondaryColor};
      }
    }
  }
`;

export const RequestWrapper = styled.div`
  padding: 25px 0 0;
  display: flex;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 20px 0 0;
  }
  > .left {
    flex: 1;
    @media screen and (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
  > .right {
    max-width: 330px;
    width: 100%;
    margin-left: 20px;
    @media screen and (max-width: 1199px) {
      max-width: 300px;
      margin-left: 15px;
    }
    @media screen and (max-width: 991px) {
      max-width: 280px;
    }
    @media screen and (max-width: 767px) {
      margin-left: 0;
      max-width: 100%;
    }
  }
  &.request-step-1 {
    padding: 25px 0 55px;
    /* @media screen and (max-width: 767px) {
      padding: 20px 0 65px;
    } */
  }
`;

export const StepperWrapper = styled.div`
  .ant-steps {
    padding: 20px 40px;
    background: ${color.whiteColor};
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin-bottom: 20px;
    @media screen and (max-width: 1199px) {
      padding: 15px 20px;
    }
    @media screen and (max-width: 991px) {
      padding: 15px 15px;
      margin-bottom: 15px;
    }
    @media screen and (max-width: 767px) {
      position: sticky;
      top: 55px;
      background: ${color.whiteColor};
      z-index: 100;
    }
    @media screen and (max-width: 575px) {
      flex-direction: row;
      padding: 12px 10px;
    }
    .ant-steps-item {
      overflow: hidden;
      @media screen and (max-width: 1199px) {
        padding-inline-start: 10px !important;
      }
      @media screen and (max-width: 575px) {
        padding-inline-start: 5px !important;
        width: 25%;
      }
      &:last-child {
        .ant-steps-item-icon {
          &::after {
            display: none !important;
          }
        }
      }
      .ant-steps-item-container {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        .ant-steps-item-tail {
          @media screen and (max-width: 575px) {
            &::after {
              display: none;
            }
          }
        }
        .ant-steps-item-icon {
          position: relative;
          padding-right: 8px;
          .ant-steps-icon {
            font-size: unset;
            line-height: 1;
            width: 26px;
            height: 26px;
            background: rgba(5, 5, 5, 0.06);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            @media screen and (max-width: 575px) {
              width: 24px;
              height: 24px;
            }
            svg {
              font-size: 15px;
              color: ${color.whiteColor};
              width: 15px;
              height: 15px;
              @media screen and (max-width: 1199px) {
                width: 13px;
                height: 13px;
              }
              path {
                stroke: ${color.whiteColor};
              }
            }
          }
          &::after {
            content: '';
            position: absolute;
            top: 14px;
            inset-inline-start: 100%;
            display: block;
            width: 9999px;
            height: 1px;
            background: rgba(5, 5, 5, 0.06);
          }
        }
        .ant-steps-item-content {
          padding-top: 12px;
          @media screen and (max-width: 1199px) {
            padding-top: 8px;
          }
          @media screen and (max-width: 575px) {
            min-height: 30px;
          }
          .ant-steps-item-title {
            font-size: 14px;
            line-height: 20px;
            color: rgba(0, 0, 0, 0.2);
            font-family: ${fontFamily.ptBold};
            padding-inline-end: 0;
            @media screen and (max-width: 991px) {
              line-height: 18px;
            }
            @media screen and (max-width: 575px) {
              font-size: 12px;
              line-height: 15px;
            }
            &::after {
              display: none;
            }
          }
        }
      }
      &.ant-steps-item-process {
        .ant-steps-item-icon {
          .ant-steps-icon {
            background: ${color.primaryColor};
          }
          &::after {
            background: linear-gradient(90deg, #ff904c -0.63%, #e6e6e6 2%);
          }
        }
        .ant-steps-item-content {
          .ant-steps-item-title {
            color: ${color.blackColor};
          }
        }
      }
      &.ant-steps-item-wait {
        .ant-steps-item-content {
          .ant-steps-item-title {
            span {
              color: rgba(0, 0, 0, 0.2);
            }
          }
        }
      }
      &.ant-steps-item-finish {
        .ant-steps-item-icon {
          .ant-steps-icon {
            background: ${color.primaryColor};
          }
          &::after {
            background: ${color.primaryColor};
          }
        }
        .ant-steps-item-content {
          .ant-steps-item-title {
            color: ${color.blackColor};
          }
        }
      }
    }
  }
  .steps-content {
    background: #ffffff;
  }
`;

export const MessageSentStepWrapper = styled.div`
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  @media screen and (max-width: 991px) {
    padding: 15px;
  }
  .title {
    font-size: 20px;
    line-height: 25px;
    margin: 0;
    @media screen and (max-width: 767px) {
      margin: 0 0 5px;
    }
  }
  .sub-title {
    font-size: 14px;
    line-height: 19px;
    text-align: left;
  }
`;

export const MassageFormWrapper = styled.div`
  margin-top: 25px;
  @media screen and (max-width: 1199px) {
    margin-top: 20px;
  }
  .ant-form {
    .ant-form-item {
      margin-bottom: 24px;
      position: relative;
      display: flex;
      align-items: end;
      width: 100%;
      @media screen and (max-width: 991px) {
        margin-bottom: 20px;
      }
      /* &:last-child{
        margin-bottom: 0;
      } */
      .ant-form-item {
        margin-bottom: 0;
      }
      .ant-form-item-row {
        width: 100%;
        .ant-form-item-label {
          @media screen and (max-width: 767px) {
            padding-bottom: 0;
          }
          label {
            font-family: ${fontFamily.ptBold};
            margin-bottom: 12px;
            height: auto;
            display: flex;
            align-items: center;
            .user-label {
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              @media screen and (max-width: 575px) {
                align-items: flex-start;
              }
              label {
                margin-bottom: 0;
              }
              div {
                display: flex;
                align-items: center;
                font-size: 14px;
                line-height: 19px;
                font-family: ${fontFamily.ptBold};
                @media screen and (max-width: 575px) {
                  flex-direction: column;
                  align-items: flex-start;
                  margin-left: 10px;
                }
                .ant-avatar {
                  margin: 0 8px;
                  @media screen and (max-width: 575px) {
                    margin: 0 0 8px;
                  }
                }
                .name {
                  color: ${color.primaryColor};
                  margin-right: 3px;
                }
                .area {
                  color: ${color.secondaryColor};
                }
              }
            }
          }
        }
        .ant-form-item-control {
          .ant-form-item-control-input-content {
            input {
              width: 100%;
            }
            textarea {
              max-width: 100% !important;
              width: 100%;
              line-height: 14px;
              padding-bottom: 22px;
              &::placeholder {
                color: ${color.blackColor};
              }
            }
            .ant-radio-group {
              .ant-radio-wrapper {
                .ant-radio {
                  + span {
                    font-family: ${fontFamily.ptBold};
                  }
                }
              }
            }
            .ant-picker {
              &.ant-picker-focused {
                box-shadow: none;
              }
            }

            .ant-select {
              .ant-select-selector {
                /* box-shadow: inset -3px 0px 0px #ff904c; */
                border: 1px solid rgba(0, 0, 0, 0.3);
                border-right-width: 3px !important;
                border-right-color: ${color.primaryColor} !important;
                height: 36px;
                display: flex;
                align-items: center;
                input {
                  height: 100%;
                  font-size: 12px;
                }
                .ant-select-selection-item {
                  font-size: 12px;
                  color: ${color.blackColor};
                  font-family: ${fontFamily.ptBold};
                }
                .ant-select-selection-placeholder {
                  color: ${color.greyColor};
                  font-family: ${fontFamily.ptRegular};
                  font-size: 12px;
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
            }
            .ant-input {
              max-width: 240px;
            }
          }
        }
      }
      .clear-text {
        position: absolute;
        bottom: 7px;
        right: 12px;
        color: ${color.primaryColor};
        font-size: 12px;
        line-height: 15px;
        font-family: ${fontFamily.ptRegular};
        font-style: italic;
        cursor: pointer !important;
        text-decoration: underline;
      }
      &.small {
        max-width: 162px;
        margin-right: 12px;
        @media screen and (max-width: 575px) {
          max-width: 120px;
          margin-right: 10px;
        }
        .ant-select {
          max-width: 100%;
        }
      }
      &.medium {
        max-width: 240px;
        @media screen and (max-width: 575px) {
          flex: 1;
          max-width: auto;
        }
      }
    }
  }
`;

export const StepperRightContentWrap = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  h2 {
    @media screen and (max-width: 767px) {
      margin: 0;
    }
  }
  @media screen and (max-width: 1199px) {
    padding: 15px;
  }
  .rate {
    margin-top: 15px;
    margin-bottom: 10px;
    div {
      font-size: 14px;
      line-height: 19px;
      color: #5b5b5b;
      font-family: ${fontFamily.ptRegular};
      margin-bottom: 4px;
      @media screen and (max-width: 767px) {
        margin-bottom: 2px;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
    .price {
      color: ${color.primaryColor};
      font-size: 16px;
      font-family: ${fontFamily.ptBold};
    }
  }
  .book-block {
    padding: 10px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    .title {
      font-size: 16px;
      color: ${color.blackColor};
      line-height: 20px;
      font-family: ${fontFamily.ptBold};
      margin-bottom: 10px;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
      label {
        color: #5b5b5b;
        font-family: ${fontFamily.ptRegular};
        margin-right: 10px;
      }
      span {
        font-family: ${fontFamily.ptBold};
        color: ${color.blackColor};
      }
    }
  }
  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    line-height: 20px;
    font-family: ${fontFamily.ptBold};
    padding: 10px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    label {
      margin-right: 10px;
      color: ${color.blackColor};
      font-family: ${fontFamily.ptBold};
    }
    span {
      color: ${color.secondaryColor};
      font-size: 16px;
      line-height: 20px;
    }
  }
  .payment-text {
    color: ${color.primaryColor};
    text-decoration: underline;
    margin-bottom: 10px;
    font-family: ${fontFamily.ptRegular};
    text-align: right;
    cursor: pointer !important;
    width: fit-content;
    margin-left: auto;
  }
  .period {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 8px 12px 8px 12px;
    margin-top: 25px;
    @media screen and (max-width: 767px) {
      margin-top: 20px;
    }
    .title-wrapper {
      margin-bottom: 2px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title {
        color: ${color.greyColor};
        font-size: 14px;
        line-height: 25px;
        font-family: ${fontFamily.ptBold};
        margin-right: 10px;
      }
      .icon {
        svg {
          cursor: pointer !important;
          path {
            cursor: pointer !important;
          }
        }
      }
    }
    .date {
      font-size: 16px;
      line-height: 25px;
      color: ${color.blackColor};
      font-family: ${fontFamily.ptBold};
      .saperator {
        margin: 0 3px;
      }
    }
  }
`;

export const FooterBtnInfoWrapper = styled.div`
  width: 100%;
  position: fixed;
  z-index: 100;
  bottom: 0;
  background: #faf7f6;
  border-top: 1px solid #ff904c;
  min-height: 100px;
  display: flex;
  align-items: center;
  padding: 20px 0;
  @media screen and (max-width: 767px) {
    height: 70px;
    min-height: auto;
    padding: 10px 0;
  }
  .container {
    height: 100%;
  }
  .content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      margin-right: 20px;
      @media screen and (max-width: 575px) {
        margin-right: 10px;
      }
      .rate {
        div {
          font-size: 14px;
          line-height: 19px;
          font-family: ${fontFamily.ptRegular};
          color: #5b5b5b;
          margin-bottom: 4px;
          @media screen and (max-width: 575px) {
            margin-bottom: 0;
          }
          strong {
            font-size: 20px;
            line-height: 25px;
            font-family: ${fontFamily.ptBold};
            color: ${color.primaryColor};
            @media screen and (max-width: 767px) {
              font-size: 18px;
              line-height: 22px;
            }
            @media screen and (max-width: 575px) {
              font-size: 16px;
              line-height: 20px;
            }
          }
        }
        span {
          font-size: 14px;
          line-height: 19px;
          font-family: ${fontFamily.ptRegular};
          color: #5b5b5b;
          @media screen and (max-width: 575px) {
            font-size: 12px;
            line-height: 15px;
          }
        }
      }
    }
    .right {
      .btn-wrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        button {
          min-width: 150px;
          margin-right: 20px;
          text-transform: uppercase;
          @media screen and (max-width: 991px) {
            min-width: 100px;
            margin-right: 15px;
            min-height: 32px;
          }
          @media screen and (max-width: 767px) {
            min-width: 80px;
            margin-right: 12px;
          }
          @media screen and (max-width: 600px) {
            min-width: 32px;
            padding: 10px;
            margin-right: 10px;
          }
          &.next {
            svg {
              width: 10px;
              height: 10px;
              transform: rotate(-90deg);
              path {
                stroke-width: 2px;
                stroke: ${color.whiteColor};
              }
            }
          }
          &.back {
            svg {
              width: 10px;
              height: 10px;
              transform: rotate(90deg);
              path {
                stroke-width: 2px;
                stroke: ${color.primaryColor};
              }
            }
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
`;

export const DocumentSubmissionWrapper = styled.div`
  .title {
    font-size: 20px;
    line-height: 25px;
    @media screen and (max-width: 767px) {
      margin: 0 0 10px;
    }
  }
  .sub-title {
    font-size: 14px;
    line-height: 19px;
    text-align: left;
  }
  .format {
    color: ${color.secondaryColor};
    font-size: 14px;
    line-height: 19px;
    font-family: ${fontFamily.ptBold};
  }
  .info-title {
    color: #e2b96a;
    font-size: 14px;
    line-height: 19px;
    font-family: ${fontFamily.ptBold};
    border: 1px solid #e2b96a;
    border-radius: 8px;
    padding: 18px 20px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    @media screen and (max-width: 991px) {
      padding: 15px;
    }
    .img-wrap {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #f8f3e9;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      @media screen and (max-width: 991px) {
        margin-right: 15px;
      }
    }
    p {
      margin-bottom: 0;
      flex: 1;
    }
  }
  .upload-wrapper {
    margin-top: 35px;
    @media screen and (max-width: 991px) {
      margin-top: 20px;
    }
    .text {
      color: ${color.blackColor};
      h3 {
        font-size: 16px;
        line-height: 20px;
        font-family: ${fontFamily.ptBold};
        margin-bottom: 0;
      }
      p {
        font-family: ${fontFamily.ptRegular};
        font-size: 14px;
        line-height: 19px;
        margin: 0;
      }
    }
    .identify-proof {
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
      width: 100%;
      @media screen and (max-width: 991px) {
        padding: 15px;
      }
      .left {
        display: flex;
        margin-right: 0;
        flex: 1;
        .icon {
          margin-right: 20px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(3, 72, 139, 0.05);
        }
      }
      .right {
      }
    }
    .ant-upload-wrapper {
      .ant-upload {
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${color.primaryColor};
          color: ${color.whiteColor};
          outline: none;
          border: none;
          cursor: pointer !important;
          border-radius: 8px;
          min-height: 36px;
          padding: 0 16px;
          span {
            font-size: 14px;
            margin: 0;
            cursor: pointer !important;
            font-family: ${fontFamily.ptBold};
          }
          svg {
            margin-right: 5px;
            cursor: pointer !important;
            path {
              cursor: pointer !important;
            }
          }
        }
      }
    }
    .upload-more {
      margin-top: 20px;
      @media screen and (max-width: 991px) {
        margin-top: 10px;
      }
      .ant-upload-wrapper {
        display: flex;
        flex-direction: column-reverse;
        .ant-upload-list {
          margin-bottom: 20px;
          .ant-upload-list-item {
            background: rgba(3, 72, 139, 0.05);
            border-radius: 4px;
            padding: 10px 12px 10px 12px;
            min-height: 52px;
            @media screen and (max-width: 991px) {
              min-height: 45px;
              padding: 10px;
            }
            @media screen and (max-width: 767px) {
              min-height: 40px;
            }
            .ant-upload-icon {
              margin-right: 12px;
              .anticon {
                width: 32px;
                height: 32px;
                background: rgba(3, 72, 139, 0.05);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
            .ant-upload-list-item-name {
              color: ${color.blackColor};
              font-family: ${fontFamily.ptRegular};
              font-size: 14px;
              line-height: 19px;
              padding: 0;
            }
          }
        }
      }
    }
    .occupation-proof {
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      padding: 20px;
      @media screen and (max-width: 991px) {
        padding: 15px;
      }
    }
  }
`;

export const MessageSentWrapper = styled.div`
  min-height: 400px;
  .title {
    font-size: 20px;
    line-height: 25px;
    @media screen and (max-width: 767px) {
      margin: 0 0 10px;
    }
  }
  .sub-title {
    font-size: 14px;
    line-height: 19px;
    text-align: left;
  }
  .btn-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 40px;
    button {
      margin-right: 20px;
      height: 44px;
      font-size: 14px;
      padding: 0 24px;
      @media screen and (max-width: 767px) {
        height: 40px;
        margin-right: 12px;
        margin-bottom: 5px;
        padding: 0 10px;
      }
      @media screen and (max-width: 480px) {
        width: 100%;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const SentBookingStepWrapper = styled.div``;

export const RequestBookingWrapper = styled.div`
  padding: 22px 40px;
  background-image: url(${bookingBg.src});
  background-repeat: no-repeat;
  background-size: 45%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 20px;
  min-height: 200px;
  @media screen and (max-width: 1199px) {
    background-position-x: -80px;
    background-size: 55%;
    padding: 20px 30px;
    min-height: auto;
  }
  @media screen and (max-width: 991px) {
    background-image: none;
    padding: 20px;
  }
  @media screen and (max-width: 767px) {
    padding: 15px;
  }
  .content {
    max-width: 400px;
    margin-left: auto;
    @media screen and (max-width: 991px) {
      max-width: 100%;
    }
    h3 {
      font-size: 20px;
      line-height: 22px;
      font-family: ${fontFamily.ptBold};
      color: ${color.blackColor};
      margin-bottom: 8px;
      @media screen and (max-width: 767px) {
        font-size: 18px;
        line-height: 20px;
      }
    }
    p {
      font-size: 14px;
      line-height: 22px;
      color: ${color.greyColor};
      font-family: ${fontFamily.ptBold};
      margin-bottom: 0;
    }
    .btn-wrapper {
      display: flex;
      flex-wrap: wrap;
      margin-top: 24px;
      button {
        flex: 1;
        margin-right: 20px;
        @media screen and (max-width: 767px) {
          padding: 0 10px;
          margin-right: 12px;
          margin-bottom: 5px;
          padding: 0 10px;
        }
        @media screen and (max-width: 480px) {
          width: 100%;
          flex: 100%;
          margin-right: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  &.change-date-request {
    .content {
      .btn-wrapper {
        justify-content: center;
        button {
          flex: unset;
        }
      }
      .ant-picker {
        max-width: 250px;
        height: 42px;
        margin: 0 auto;
        margin-top: 24px;
        display: flex;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-right-width: 3px !important;
        border-right-color: ${color.primaryColor} !important;
        background: #ffffff;
        @media screen and (max-width: 480px) {
          max-width: 100%;
        }
        .ant-picker-input {
          input {
            color: ${color.blackColor};
            font-family: ${fontFamily.ptBold};
            font-size: 12px;
            &::placeholder {
              color: ${color.greyColor};
              font-family: ${fontFamily.ptRegular};
            }
          }
        }
        .ant-picker-suffix {
          .anticon {
            svg {
              path {
                stroke: ${color.primaryColor};
              }
            }
          }
        }
        .ant-picker-active-bar {
          display: none;
        }
        &.ant-picker-focused {
          box-shadow: none;
        }
      }
    }
  }
`;

export const ChatBoxWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  @media screen and (max-width: 767px) {
    padding: 15px;
  }
  .ant-form {
    margin-bottom: 24px;
    @media screen and (max-width: 767px) {
      margin-bottom: 20px;
    }
    .ant-form-item {
      @media screen and (max-width: 767px) {
        margin-bottom: 20px;
      }
      .ant-form-item-row {
        .ant-form-item-label {
          display: flex;
          @media screen and (max-width: 767px) {
            padding-bottom: 0;
          }
          label {
            height: auto;
            margin-bottom: 12px;
            div {
              display: flex;
              align-items: center;
              font-size: 14px;
              line-height: 18px;
              font-family: ${fontFamily.ptBold};
              color: ${color.secondaryColor};
              @media screen and (max-width: 767px) {
                align-items: flex-start;
              }
              strong {
                margin-right: 8px;
              }
              .ant-avatar {
                margin-right: 8px;
                @media screen and (max-width: 767px) {
                  margin: 0 0 8px;
                }
              }
              h4 {
                margin: 0;
                text-transform: capitalize;
                color: ${color.primaryColor};
                font-size: 14px;
                line-height: 18px;
                @media screen and (max-width: 767px) {
                  margin: 0 0 4px;
                }
              }
              p {
                margin: 0;
                color: ${color.secondaryColor};
                span {
                  text-decoration: underline;
                }
              }
              .seperator {
                margin: 0 5px 0 0;
                @media screen and (max-width: 767px) {
                  display: none;
                }
              }
              > div {
                @media screen and (max-width: 767px) {
                  flex-direction: column;
                  align-items: flex-start;
                }
              }
            }
          }
        }
        .ant-form-item-control {
          textarea {
            font-size: 14px;
            line-height: 18px;
            color: ${color.blackColor};
            padding: 12px 16px;
            box-shadow: none;
            border: 1px solid rgba(0, 0, 0, 0.3);
            &::placeholder {
              color: ${color.greyColor};
              font-style: italic;
            }
          }
        }
      }
      .upload-wrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        justify-content: flex-end;
        .ant-upload-wrapper {
          flex: 1;
          text-align: right;
        }
        .ant-upload {
          &.ant-upload-select {
            margin-right: 15px;
            .ant-upload {
              button {
                border: none;
                box-shadow: none;
                font-size: 14px;
                font-family: ${fontFamily.ptBold};
                color: ${color.secondaryColor};
                padding: 0 12px;
                .anticon {
                  svg {
                    width: 14px;
                    height: 14px;
                    cursor: pointer !important;
                    path {
                      cursor: pointer !important;
                    }
                  }
                  + span {
                    color: ${color.secondaryColor};
                    text-decoration: underline;
                    cursor: pointer !important;
                  }
                }
              }
            }
          }
        }
        .ant-upload-list {
          margin-right: 0;
          margin-bottom: 10px;
          background: rgb(0 0 0 / 5%);
          /* padding: 5px; */
          border-radius: 4px;
          .ant-upload-list-item-container {
            .ant-upload-list-item {
              height: auto;
              padding: 5px 10px;
              margin-top: 0;
              .ant-upload-list-item-name {
                text-align: left;
              }
            }
          }
        }
        button {
          min-width: 106px;
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export const ChatMessagesWrapper = styled.div`
  padding: 25px 0 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  height: 300px;
  overflow-y: auto;

  .msg {
    margin-bottom: 24px;
    @media screen and (max-width: 767px) {
      margin-bottom: 20px;
    }
    &:last-child {
      margin-bottom: 0;
    }
    .header-title {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .ant-avatar {
        margin-right: 8px;
        display: flex;
        align-items: center;
      }
      h4 {
        margin: 0 8px 0 0;
        color: ${color.blackColor};
        text-transform: capitalize;
        font-size: 18px;
        line-height: 24px;
        font-family: ${fontFamily.ptBold};
      }
      .date {
        font-size: 12px;
        line-height: 13px;
        font-family: ${fontFamily.ptRegular};
        color: ${color.greyColor};
      }
    }
    .content {
      p {
        font-size: 14px;
        line-height: 19px;
        font-family: ${fontFamily.ptRegular};
        color: ${color.blackColor};
        margin-bottom: 15px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;

export const SendBookingFaqWrapper = styled.div`
  padding-top: 35px;
  .faq-block {
    padding-top: 10px;
    .ant-collapse {
      .ant-collapse-item {
        .ant-collapse-header {
          background: #fff;
        }
        .ant-collapse-content {
          .ant-collapse-content-box {
            background: #fff;
          }
        }
      }
    }
  }
`;

export const SendBookingRightContentWrapper = styled.div``;

export const SendBookingUserInfoWrapper = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 40px;
  @media screen and (max-width: 1199px) {
    padding: 20px;
  }
  @media screen and (max-width: 767px) {
    padding: 15px;
  }
  > div {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
    padding-bottom: 20px;
    @media screen and (max-width: 767px) {
      margin-bottom: 10px;
      padding-bottom: 15px;
    }
    &:last-child {
      border: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .block {
      font-size: 14px;
      font-family: ${fontFamily.ptBold};
      margin-bottom: 15px;
      @media screen and (max-width: 767px) {
        margin-bottom: 10px;
      }
      &:last-child {
        margin-bottom: 0;
      }
      label {
        color: ${color.greyColor};
      }
      .seperator {
        margin: 0 4px;
        color: ${color.greyColor};
      }
      span {
        color: ${color.primaryColor};
      }
    }
  }
  .member-detail {
    display: flex;
    .avatar {
      position: relative;
      width: 78px;
      height: 78px;
      margin-right: 15px;
      .ant-avatar {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      @media screen and (max-width: 767px) {
        width: 65px;
        height: 65px;
        .ant-avatar {
          width: 65px !important;
          height: 65px !important;
        }
      }
      @media screen and (max-width: 575px) {
        width: 60px;
        height: 60px;
        .ant-avatar {
          width: 60px !important;
          height: 60px !important;
        }
      }
      .badge {
        position: absolute;
        right: 10px;
        bottom: -10px;
      }
      .ant-avatar-string {
        line-height: 1 !important;
      }
    }
    .title {
      margin-bottom: 8px;
      width: 100%;
      font-size: 20px;
      line-height: 25px;
      text-transform: capitalize;
      text-align: left;
      @media screen and (max-width: 767px) {
        font-size: 18px;
        line-height: 22px;
      }
    }
    .lang {
      display: flex;
      align-items: center;
      span {
        color: ${color.greyColor};
        font-family: ${fontFamily.ptBold};
        margin-right: 3px;
      }
      ul {
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        list-style-type: none;
        li {
          color: ${color.primaryColor};
          font-size: 14px;
          line-height: 22px;
          font-family: ${fontFamily.ptBold};
          margin-right: 3px;
          position: relative;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    .last-seen {
      color: ${color.greyColor};
      font-family: ${fontFamily.ptRegular};
      font-size: 12px;
      line-height: 20px;
      margin-top: 3px;
    }
  }
  p {
    font-size: 14px;
    line-height: 22px;
    font-family: ${fontFamily.ptRegular};
    color: ${color.greyColor};
    text-align: justify;
    margin-bottom: 0;
    @media screen and (max-width: 767px) {
      line-height: 19px;
    }
  }
  .list {
    li {
      display: flex;
      align-items: center;
      font-size: 14px;
      line-height: 19px;
      font-family: ${fontFamily.ptBold};
      color: ${color.blackColor};
      padding: 4px 0;
      svg {
        margin-right: 12px;
      }
    }
  }
  .btn-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 20px;
    button {
      border: none;
      padding: 0;
      text-decoration: underline;
      text-align: left;
      width: fit-content;
      min-height: 20px;
      margin-right: 20px;
      @media screen and (max-width: 767px) {
        min-width: 100px;
        margin-right: 12px;
        margin-bottom: 5px;
        padding: 0 10px;
      }
      /* @media screen and (max-width: 480px) {
        width: 100%;
      } */
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const SendBookingInquiryRequestWrapper = styled.div`
  margin-top: 20px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  @media screen and (max-width: 767px) {
    padding: 15px;
  }
  .contract-info {
    list-style-type: none;
    margin-top: 15px;
    margin-bottom: 0;
    li {
      font-size: 14px;
      line-height: 19px;
      position: relative;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      &:last-child {
        margin-bottom: 0;
      }
      label {
        display: flex;
        color: #5b5b5b;
        font-family: ${fontFamily.ptRegular};
        min-width: 120px;
        margin-right: 10px;
      }
      .seperator {
        color: #5b5b5b;
        margin-left: 2px;
      }
      span {
        font-family: ${fontFamily.ptBold};
        color: ${color.blackColor};
      }
    }
  }
`;

export const SendBookingPaymentDetailWrapper = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  @media screen and (max-width: 767px) {
    padding: 15px;
  }
  .title {
    font-size: 16px;
    line-height: 20px;
    color: ${color.blackColor};
    margin-bottom: 15px;
    font-family: ${fontFamily.ptBold};
  }
  .block {
    font-size: 14px;
    line-height: 19px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    label {
      font-family: ${fontFamily.ptRegular};
      color: #5b5b5b;
      margin-right: 10px;
    }
    span {
      font-family: ${fontFamily.ptBold};
      color: ${color.blackColor};
      margin-left: auto;
    }
    &.total {
      font-size: 16px;
      line-height: 20px;
      label {
        color: ${color.blackColor};
        text-transform: capitalize;
        font-family: ${fontFamily.ptBold};
      }
      span {
        font-family: ${fontFamily.ptBold};
        color: ${color.secondaryColor};
      }
    }
    &.cancellation {
      justify-content: unset;
      margin-bottom: 0;
      label {
        font-family: ${fontFamily.ptRegular};
        font-size: 14px;
        line-height: 19px;
        color: #5b5b5b;
        margin-right: 8px;
        .seperator {
          color: #5b5b5b;
          text-decoration: none;
          margin-left: 3px;
          font-family: ${fontFamily.ptRegular};
        }
      }
      span {
        font-family: ${fontFamily.ptBold};
        font-size: 14px;
        line-height: 19px;
        color: ${color.primaryColor};
        text-transform: capitalize;
        text-decoration: underline;
        margin-left: unset;
        cursor: pointer !important;
      }
    }
  }
  hr {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin: 15px 0;
  }
`;

export const FuturePaymentWrapper = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  @media screen and (max-width: 767px) {
    padding: 15px;
  }
  .title {
    font-size: 16px;
    line-height: 20px;
    color: ${color.blackColor};
    margin-bottom: 15px;
    font-family: ${fontFamily.ptBold};
  }
  .block {
    font-size: 14px;
    line-height: 19px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    label {
      font-family: ${fontFamily.ptRegular};
      color: #5b5b5b;
      margin-right: 10px;
    }
    span {
      font-family: ${fontFamily.ptBold};
      color: ${color.blackColor};
      margin-left: auto;
    }
  }
  hr {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin: 15px 0;
  }
`;

export const SendBookingSecurityWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  @media screen and (max-width: 767px) {
    padding: 15px;
  }
  img {
    margin: 0 auto 15px;
    display: block;
    @media screen and (max-width: 767px) {
      width: 50px;
      height: 50px;
      margin: 0 auto 12px;
    }
  }
  h6 {
    font-size: 16px;
    line-height: 20px;
    font-family: ${fontFamily.ptBold};
    color: ${color.blackColor};
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  p {
    font-size: 14px;
    line-height: 20px;
    font-family: ${fontFamily.ptRegular};
    color: ${color.greyColor};
    margin-bottom: 0;
  }
`;

export const RequestBookingDetailWrapper = styled.div`
  .title {
    font-size: 20px;
    line-height: 26px;
    text-transform: capitalize;
    margin-bottom: 15px;
  }
`;

export const RequestBookingAmountInfoWrapper = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    padding: 15px;
  }
  .row {
    .title {
      font-size: 16px;
      line-height: 20px;
      font-family: ${fontFamily.ptBold};
      color: ${color.blackColor};
      margin-bottom: 15px;
      text-transform: capitalize;
    }
    .block {
      font-size: 14px;
      line-height: 19px;
      display: flex;
      align-items: end;
      justify-content: space-between;
      margin-bottom: 8px;
      label {
        font-family: ${fontFamily.ptRegular};
        color: #5b5b5b;
      }
      .seperator {
        border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
        flex: 1;
        margin: 0 5px;
      }
      span {
        font-family: ${fontFamily.ptBold};
        color: ${color.blackColor};
      }
      &.total {
        font-size: 16px;
        line-height: 20px;
        label {
          color: ${color.blackColor};
          font-family: ${fontFamily.ptBold};
        }
        span {
          color: ${color.secondaryColor};
        }
      }
    }
    hr {
      margin: 15px 0;
      border: none;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
    p {
      color: ${color.greyColor};
      font-size: 14px;
      line-height: 19px;
      font-family: ${fontFamily.ptRegular};
      font-style: italic;
      margin-top: 15px;
      margin-bottom: 0;
    }
  }
`;

export const RequestBookingBillingPaymentWrapper = styled.div`
  .ant-form {
    .request-billing-form {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -5px;
    }
    .card-detail-form {
      display: flex;
      flex-wrap: wrap;
    }
    .ant-form-item {
      width: 100%;
      margin: 0 5px 15px;
      &.w-50 {
        width: calc(50% - 10px);
      }
      &.card-number {
        flex: 2.6;
        @media screen and (max-width: 1100px) {
          flex: calc(50% - 12px);
          margin-bottom: 8px;
        }
        @media screen and (max-width: 480px) {
          flex: 100%;
          margin-right: 0;
        }
      }
      &.card-name {
        flex: 2.6;
        @media screen and (max-width: 1100px) {
          flex: calc(50% - 12px);
          margin-bottom: 8px;
        }
        @media screen and (max-width: 480px) {
          flex: 100%;
          margin-right: 0;
        }
      }
      &.valid-date {
        flex: 2.01;
        @media screen and (max-width: 1100px) {
          flex: 1;
        }
        @media screen and (max-width: 480px) {
          flex: 100%;
          margin-bottom: 8px;
          margin-right: 0;
        }
      }
      &.cvv {
        flex: 1.05;
        @media screen and (max-width: 1100px) {
          flex: 1;
        }
        @media screen and (max-width: 480px) {
          flex: 100%;
          margin-right: 0;
        }
      }
    }
  }
  ul {
    li {
      display: flex;
      position: relative;
      padding-bottom: 20px;
      &::before {
        content: '';
        position: absolute;
        left: 12px;
        width: 1px;
        height: 100%;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        z-index: 0;
      }
      .number {
        margin-right: 20px;
        width: 24px;
        height: 24px;
        border-radius: 8px;
        background: #ff904c;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-family: ${fontFamily.ptBold};
        font-size: 14px;
        z-index: 1;
        @media screen and (max-width: 575px) {
          margin-right: 15px;
        }
      }
      .content-area {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        flex: 1;
        .title {
          font-size: 14px;
          line-height: 19px;
          font-family: ${fontFamily.ptBold};
          color: ${color.blackColor};
          text-transform: capitalize;
          width: 100%;
          margin-top: 4px;
        }
        .content-block {
          width: 100%;
        }
      }
      &:last-child {
        padding-bottom: 0;
        &::before {
          display: none;
        }
      }
    }
  }
`;

export const RequestBookingBillingFormWrapper = styled.div`
  .ant-form {
    max-width: 490px;
    display: flex;
    flex-wrap: wrap;
    .ant-form-item {
      width: 100%;
      margin-bottom: 12px;
      &.w-50 {
        width: calc(50% - 6px);
        margin-right: 12px;
        &.mr-remove {
          margin-right: 0;
        }
      }
      .ant-form-item-row {
        .ant-form-item-control {
          .ant-input {
            font-family: ${fontFamily.ptBold};
            &::placeholder {
              font-family: ${fontFamily.ptRegular};
            }
          }
          .ant-select {
            .ant-select-selector {
              border: 1px solid rgba(0, 0, 0, 0.3);
              border-right-width: 3px !important;
              border-right-color: ${color.primaryColor} !important;
              border-radius: 8px;
              min-height: 36px;
              .ant-select-selection-placeholder {
                font-size: 12px;
                color: ${color.greyColor};
                font-family: ${fontFamily.ptRegular};
                display: flex;
                align-items: center;
              }
              .ant-select-selection-item {
                font-family: ${fontFamily.ptBold};
                font-size: 12px;
                display: flex;
                align-items: center;
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
                  transition: 0.2s all ease-in-out;
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
              .ant-select-arrow {
                .anticon {
                  display: flex;
                  align-items: center;
                  svg {
                    transform: rotate(180deg);
                    path {
                      stroke: ${color.primaryColor};
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const RequestBookingPaymentMethodWrapper = styled.div`
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    margin-bottom: 0;
  }
  .box {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 20px;
    @media screen and (max-width: 767px) {
      padding: 15px;
    }
    .block {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      padding-bottom: 15px;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &:last-child {
        border: none;
        padding-bottom: 0;
        margin-bottom: 0;
      }
      .header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        > div {
          .title {
            font-size: 16px;
            line-height: 21px;
            color: ${color.blackColor};
            font-family: ${fontFamily.ptBold};
            margin-bottom: 4px;
            margin-top: 0;
          }
          .sub-title {
            color: #5b5b5b;
            font-family: ${fontFamily.ptRegular};
            font-size: 14px;
            line-height: 19px;
          }
          .img-wrapper {
            display: flex;
            img {
              margin-right: 10px;
              &:last-child {
                margin-right: 0;
              }
            }
          }
          &:first-child {
            margin-right: 15px;
          }
        }
      }
      label {
        color: ${color.blackColor};
        font-size: 16px;
        line-height: 21px;
        font-family: ${fontFamily.ptBold};
        text-transform: capitalize;
        margin-right: 15px;
      }
      span {
        color: ${color.secondaryColor};
        font-size: 16px;
        line-height: 21px;
        font-family: ${fontFamily.ptBold};
      }
      button {
        min-width: 121px;
        @media screen and (max-width: 767px) {
          min-width: 100px;
        }
      }
    }
  }
  .seperator {
    position: relative;
    width: 100%;
    span {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      padding: 5px 10px;
      font-size: 14px;
      line-height: 19px;
      font-family: ${fontFamily.ptRegular};
      color: ${color.blackColor};
      font-style: italic;
    }
    hr {
      margin: 20px 0;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
  .btn-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 60px;
    @media screen and (max-width: 1199px) {
      margin-top: 40px;
    }
    @media screen and (max-width: 767px) {
      margin-top: 30px;
    }
    button {
      min-height: 44px;
      margin-right: 20px;
      @media screen and (max-width: 767px) {
        min-width: 100px;
        margin-right: 15px;
        min-height: 40px;
        margin-right: 12px;
        margin-bottom: 5px;
        padding: 0 10px;
      }
      @media screen and (max-width: 480px) {
        width: 100%;
        flex: 100%;
        margin-right: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const CardDetailFormWrapper = styled.div`
  .ant-form {
    display: flex;
    flex-wrap: wrap;
    .ant-form-item {
      margin-right: 12px;
      margin-bottom: 0;
      @media screen and (max-width: 767px) {
        margin-right: 10px;
      }
      &.card-number {
        flex: 2.6;
        @media screen and (max-width: 1100px) {
          flex: calc(50% - 12px);
          margin-bottom: 8px;
        }
        @media screen and (max-width: 480px) {
          flex: 100%;
          margin-right: 0;
        }
      }
      &.card-name {
        flex: 2.6;
        @media screen and (max-width: 1100px) {
          flex: calc(50% - 12px);
          margin-bottom: 8px;
        }
        @media screen and (max-width: 480px) {
          flex: 100%;
          margin-right: 0;
        }
      }
      &.valid-date {
        flex: 2.01;
        @media screen and (max-width: 1100px) {
          flex: 1;
        }
        @media screen and (max-width: 480px) {
          flex: 100%;
          margin-bottom: 8px;
          margin-right: 0;
        }
      }
      &.cvv {
        flex: 1.05;
        @media screen and (max-width: 1100px) {
          flex: 1;
        }
        @media screen and (max-width: 480px) {
          flex: 100%;
          margin-right: 0;
        }
      }
      .ant-form-item-row {
        .ant-form-item-control {
          .ant-picker {
            .ant-picker-input {
              display: flex;
              .ant-picker-suffix {
                .anticon {
                  display: flex;
                  align-items: center;
                  svg {
                    path {
                      color: ${color.primaryColor};
                    }
                  }
                }
              }
            }
            &.ant-picker-focused {
              box-shadow: none;
            }
          }
        }
      }
    }
  }
`;

export const DeclineOfferWrapper = styled.div`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  .title {
    font-family: ${fontFamily.ptBold};
    color: ${color.blackColor};
    font-size: 20px;
    line-height: 22px;
    margin-bottom: 5px;
  }
  p {
    font-family: ${fontFamily.ptBold};
    color: ${color.greyColor};
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 0;
  }
  .btn-wrapper {
    margin-top: 24px;
    button {
      margin-right: 20px;
      @media screen and (max-width: 767px) {
        margin-right: 12px;
        padding: 0 10px;
        margin-bottom: 5px;
      }
      @media screen and (max-width: 480px) {
        width: 100%;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const BookingInvitationWrapper = styled.div`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    padding: 15px;
  }
  .title {
    font-family: ${fontFamily.ptBold};
    color: ${color.blackColor};
    font-size: 20px;
    line-height: 22px;
    margin-bottom: 5px;
    @media screen and (max-width: 767px) {
      font-size: 18px;
      line-height: 20px;
    }
  }
  p {
    font-family: ${fontFamily.ptBold};
    color: ${color.greyColor};
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 0;
  }
  .btn-wrapper {
    margin-top: 24px;
    button {
      margin-right: 20px;
      @media screen and (max-width: 767px) {
        margin-right: 12px;
        margin-bottom: 5px;
        padding: 0 10px;
      }
      @media screen and (max-width: 480px) {
        width: 100%;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const BookingSpecialOfferWrapper = styled.div`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    padding: 15px;
  }
  .title {
    font-size: 20px;
    line-height: 22px;
    font-family: ${fontFamily.ptBold};
    color: ${color.blackColor};
    margin-bottom: 24px;
    @media screen and (max-width: 767px) {
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 15px;
    }
  }
  p {
    color: ${color.greyColor};
    font-family: ${fontFamily.ptBold};
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }
  .offer-detail {
    margin-bottom: 24px;
    max-width: 330px;
    width: 100%;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 20px;
    @media screen and (max-width: 767px) {
      padding: 15px;
    }
    .offer-title {
      font-size: 16px;
      line-height: 21px;
      font-family: ${fontFamily.ptBold};
      color: ${color.blackColor};
      margin-bottom: 15px;
    }
    .block {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      label {
        color: #5b5b5b;
        font-family: ${fontFamily.ptRegular};
        margin-right: 10px;
      }
      span {
        font-family: ${fontFamily.ptBold};
        color: ${color.blackColor};
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
    hr {
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      margin-bottom: 8px;
    }
  }
  .btn-wrapper {
    button {
      margin-right: 20px;
      @media screen and (max-width: 767px) {
        margin-right: 12px;
        padding: 0 10px;
        margin-bottom: 5px;
      }
      @media screen and (max-width: 480px) {
        width: 100%;
        margin-right: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const LandlordSpecialOfferWrapper = styled.div`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    padding: 15px;
  }
  .title {
    font-size: 20px;
    line-height: 22px;
    font-family: ${fontFamily.ptBold};
    color: ${color.blackColor};
    margin-bottom: 24px;
    @media screen and (max-width: 767px) {
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 20px;
    }
  }
  .btn-wrapper {
    button {
      margin-right: 20px;
      @media screen and (max-width: 767px) {
        margin-right: 12px;
        padding: 0 10px;
        margin-bottom: 5px;
      }
      @media screen and (max-width: 480px) {
        width: 100%;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .date-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    @media screen and (max-width: 767px) {
      margin-bottom: 20px;
    }
    .ant-input-number {
      max-width: 100px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-right-width: 3px !important;
      border-right-color: ${color.primaryColor} !important;
      border-radius: 8px;
      height: 42px;
      display: flex;
      align-items: center;
      @media screen and (max-width: 767px) {
        height: 40px;
      }
      .ant-input-number-input-wrap {
        input {
          color: ${color.greyColor};
        }
      }
      .ant-input-number-handler-wrap {
        margin-right: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        opacity: 1;
        .ant-input-number-handler {
          height: 10px;
          flex: unset;
        }
        .ant-input-number-handler-up {
          border: none;
          .ant-input-number-handler-up-inner {
            .anticon {
              svg {
                transform: rotate(180deg);
                color: ${color.primaryColor};
                path {
                  stroke: ${color.primaryColor};
                  color: ${color.primaryColor};
                }
              }
            }
          }
        }

        .ant-input-number-handler-down {
          border: none;
          .anticon {
            svg {
              path {
                stroke: ${color.primaryColor};
              }
            }
          }
        }
      }
      &.ant-input-number-focused {
        box-shadow: none;
      }
      &:hover {
      }
    }
  }

  .ant-picker {
    max-width: 250px;
    height: 42px;
    margin: 0 20px 0 0;
    padding: 0;
    /* margin-top: 24px; */
    display: flex;
    align-items: end;
    border-radius: 0;
    border: none;
    background: #ffffff;
    @media screen and (max-width: 767px) {
      height: 40px;
      margin: 0 15px 0 0;
    }
    .ant-picker-input {
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      padding: 5px 12px;
      input {
        color: ${color.blackColor};
        font-family: ${fontFamily.ptRegular};
        font-size: 12px;
        &::placeholder {
          color: ${color.greyColor};
          font-family: ${fontFamily.ptRegular};
        }
      }
    }
    .ant-picker-suffix {
      .anticon {
        svg {
          path {
            stroke: ${color.primaryColor};
          }
        }
      }
    }
    .ant-picker-active-bar {
      display: none;
    }
    &.ant-picker-focused {
      box-shadow: none;
    }
  }
`;
