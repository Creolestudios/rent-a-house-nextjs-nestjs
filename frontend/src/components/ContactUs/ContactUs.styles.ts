import styled from 'styled-components';
import { fontFamily, color } from '@/styles/variable';

export const ContactUsWrapper = styled.div`
  padding: 65px 0;
  @media screen and (max-width: 1199px) {
    padding: 50px 0;
  }
  @media screen and (max-width: 767px) {
    padding: 40px 0;
  }
  .header-wrapper {
    display: flex;
    padding: 65px 0 0;
    @media screen and (max-width: 1199px) {
      padding: 50px 0 0;
    }
    @media screen and (max-width: 767px) {
      padding: 40px 0 0;
      flex-direction: column;
    }
    .title {
      font-size: 40px;
      line-height: 51px;
      font-family: ${fontFamily.ptBold};
      color: ${color.blackColor};
      margin-right: 130px;
      white-space: nowrap;
      @media screen and (max-width: 1199px) {
        font-size: 35px;
        line-height: 45px;
        margin-right: 60px;
      }
      @media screen and (max-width: 991px) {
        font-size: 28px;
        line-height: 38px;
      }
      @media screen and (max-width: 767px) {
        font-size: 20px;
        line-height: 28px;
        margin-right: 0;
        text-align: center;
        margin-bottom: 15px;
      }
      @media screen and (max-width: 600px) {
        max-width: 100%;
        text-align: center;
      }
    }
    p {
      font-size: 16px;
      line-height: 24px;
      color: ${color.greyColor};
      font-family: ${fontFamily.ptRegular};
      text-align: justify;
      margin-bottom: 0;
      @media screen and (max-width: 767px) {
        font-size: 15px;
        line-height: 22px;
        text-align: center;
      }
    }
  }
`;

export const ContactFormWrapper = styled.div`
  padding: 65px 0 0;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1199px) {
    padding: 50px 0 0;
  }
  @media screen and (max-width: 767px) {
    padding: 40px 0 0;
    flex-direction: column;
  }
  .left {
    flex: 1;
    margin-right: 64px;
    @media screen and (max-width: 1199px) {
      margin-right: 50px;
    }
    @media screen and (max-width: 991px) {
      margin-right: 30px;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 40px;
    }
  }
  .right {
    flex: 1;
    @media screen and (max-width: 767px) {
      width: 100%;
    }
    .comp-detail {
      padding: 40px;
      background: #faf7f6;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      height: 100%;
      @media screen and (max-width: 1199px) {
        padding: 30px;
      }
      @media screen and (max-width: 991px) {
        padding: 20px;
      }
      .block {
        padding-bottom: 15px;
        margin-bottom: 15px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        &:last-child {
          padding-bottom: 0;
          margin-bottom: 0;
          border: none;
        }
        .title {
          font-size: 20px;
          line-height: 26px;
          color: ${color.blackColor};
          font-family: ${fontFamily.ptBold};
          margin-bottom: 12px;
          @media screen and (max-width: 991px) {
            font-size: 18px;
            line-height: 22px;
          }
        }
        .content {
          div {
            margin-bottom: 12px;
            color: ${color.greyColor};
            font-size: 14px;
            line-height: 25px;
            label {
              font-family: ${fontFamily.ptBold};
              display: block;
            }
            span {
              display: block;
              font-family: ${fontFamily.ptRegular};
            }
            &:last-child {
              margin-bottom: 0;
            }
            address {
              margin: 0;
            }
          }
        }
      }
    }
  }
  .ant-form {
    .ant-form-item {
      margin-bottom: 20px;
      @media screen and (max-width: 767px) {
        margin-bottom: 15px;
      }
      &:last-child {
        margin-bottom: 0;
      }
      .ant-form-item-label {
        label {
        }
      }
      .ant-form-item-control {
        .ant-form-item-control-input {
          input {
            height: 46px;
            font-size: 14px;
            font-family: ${fontFamily.ptBold};
            @media screen and (max-width: 1199px) {
              height: 42px;
            }
            &::placeholder {
              color: ${color.blackColor};
              font-family: ${fontFamily.ptRegular};
            }
          }
          textarea {
            font-size: 14px;
            font-family: ${fontFamily.ptBold};
            &::placeholder {
              color: ${color.blackColor};
              font-family: ${fontFamily.ptRegular};
            }
          }
          button {
            margin-top: 4px;
            width: 100%;
            height: 54px;
            background: ${color.primaryColor};
            color: ${color.whiteColor};
            font-size: 14px;
            font-family: ${fontFamily.ptBold};
            border-radius: 8px;
            position: relative;
            box-shadow: none;
            cursor: pointer !important;
            border: 1px solid ${color.primaryColor};
            display: flex;
            align-items: center;
            justify-content: center;
            @media screen and (max-width: 1199px) {
              height: 48px;
            }
            @media screen and (max-width: 767px) {
              height: 40px;
              max-width: 320px;
              margin: 10px auto 0;
            }
            span {
              color: ${color.whiteColor};
              cursor: pointer !important;
            }
            svg {
              cursor: pointer !important;
              path {
                cursor: pointer !important;
              }
            }
            &.login {
              margin-top: 22px;
            }
            img {
              position: absolute;
              left: 2px;
              top: 50%;
              transform: translateY(-50%);
              border-radius: 2px 0 0 2px;
              cursor: pointer !important;
            }
            &.google {
              border-radius: 4px;
              background: #4285f4;
            }
          }
          .or-content {
            text-align: center;
            margin: 16px 0;
            font-size: 14px;
            line-height: 16px;
            color: ${color.greyColor};
            font-family: ${fontFamily.ptBold};
            @media screen and (max-width: 767px) {
              margin: 10px 0;
            }
          }
        }
      }
      .ant-form-item-explain-error {
        font-size: 12px;
        line-height: 15px;
        color: #ff4f4f;
        font-family: ${fontFamily.ptRegular};
        margin-bottom: 6px;
        margin-top: 2px;
      }
      .require-info {
        color: #ff4f4f;
        font-size: 12px;
        line-height: 14px;
        font-family: ${fontFamily.ptRegular};
        margin-top: 10px;
      }
      &.forgot-text {
        margin-top: 22px;
        display: inline-block;
        width: 100%;
        margin-bottom: 0;
        @media screen and (max-width: 767px) {
          margin-top: 20px;
        }
        .forgot-psw {
          font-size: 16px;
          line-height: 25px;
          text-align: center;
          color: ${color.secondaryColor};
          font-family: ${fontFamily.ptBold};
          text-decoration: underline;
          width: fit-content;
          cursor: pointer !important;
          margin: 0 auto;
        }
        .sign-up {
          font-size: 16px;
          line-height: 25px;
          text-align: center;
          color: ${color.secondaryColor};
          font-family: ${fontFamily.ptBold};
          text-decoration: underline;
          width: fit-content;
          cursor: pointer !important;
          margin: 0 auto;
        }
      }
    }
  }
  .footer-info {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 65px;
    @media screen and (max-width: 1199px) {
      margin-top: 50px;
    }
    @media screen and (max-width: 767px) {
      flex-direction: column;
      margin-top: 40px;
    }
    .block {
      display: flex;
      align-items: center;
      border-radius: 8px;
      padding: 14px 24px 14px 24px;
      border: 2px solid ${color.primaryColor};
      margin-right: 64px;
      box-shadow: 0px 4px 12px rgba(80, 98, 130, 0.15);
      flex: 1;
      @media screen and (max-width: 1199px) {
        padding: 10px 20px 10px 20px;
        margin-right: 50px;
      }
      @media screen and (max-width: 991px) {
        margin-right: 30px;
        padding: 10px 15px 10px 15px;
      }
      @media screen and (max-width: 767px) {
        width: 100%;
        margin-right: 0;
        margin-bottom: 20px;
        padding: 10px;
      }
      &:last-child {
        margin-right: 0;
        @media screen and (max-width: 767px) {
          margin-bottom: 0;
        }
      }
      .icon {
        margin-right: 26px;
        @media screen and (max-width: 991px) {
          margin-right: 15px;
        }
        img {
          @media screen and (max-width: 767px) {
            width: 20px;
            height: 20px;
          }
        }
      }
      .content {
        label {
          display: block;
          font-size: 14px;
          line-height: 24px;
          font-family: ${fontFamily.ptBold};
          color: ${color.greyColor};
          @media screen and (max-width: 991px) {
            font-size: 13px;
            line-height: 22px;
          }
        }
        span {
          display: block;
          font-size: 20px;
          line-height: 25px;
          color: ${color.blackColor};
          font-family: ${fontFamily.ptBold};
          word-break: break-all;
          @media screen and (max-width: 1199px) {
            font-size: 18px;
            line-height: 22px;
          }
          @media screen and (max-width: 767px) {
            font-size: 16px;
          }
        }
      }
    }
  }
`;
