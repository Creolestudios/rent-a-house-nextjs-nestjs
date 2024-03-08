import { fontFamily, color } from '@/styles/variable';
import styled from 'styled-components';

export const FormWrapper = styled.div`
  /* padding: 20px; */
  width: 100%;
  .ant-form {
    .ant-form-item {
      margin-bottom: 15px;
      display: flex;
      .ant-form-item-row {
        width: 100%;

        .ant-form-item-label {
          width: 100%;
          flex: 100%;
          text-align: left;
          label {
            color: ${color.blackColor};
            font-size: 14px;
            line-height: 22px;
            font-family: ${fontFamily.ptBold};
            margin-bottom: 5px;
            height: auto;
            &::after {
              display: none;
            }
          }
        }
        .ant-form-item-control {
          width: 100%;
          flex: 100%;
          .ant-input {
            width: 100%;
            height: 38px;
            border-radius: 2px;
            border: 1px solid rgba(0, 0, 0, 0.3);
            padding: 0 15px;
            font-size: 14px;
            line-height: 22px;
            font-family: ${fontFamily.ptBold};
            color: ${color.blackColor};
            &::placeholder {
              color: ${color.greenColor};
              font-family: ${fontFamily.ptRegular};
            }
          }
          .ant-input-affix-wrapper {
            width: 100%;
            padding: 0;
            border-radius: 2px;
            border: 1px solid rgba(0, 0, 0, 0.3);
            padding-right: 0;
            .ant-input {
              border: none !important;
              padding: 0 15px;
              &::placeholder {
                color: ${color.greenColor};
              }
            }
            &.ant-input-affix-wrapper-focused {
              box-shadow: none;
            }
          }
        }
      }
      .ant-checkbox-wrapper {
        .ant-checkbox {
          .ant-checkbox-inner {
            border-color: ${color.secondaryColor};
          }
          &.ant-checkbox-checked {
            .ant-checkbox-inner {
              background-color: ${color.secondaryColor};
            }
            &::after {
              border: none;
            }
          }
        }
      }
      &.remember-forgot {
        .ant-form-item-control-input-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .ant-checkbox-wrapper {
            .ant-checkbox {
              + span {
                color: ${color.blackColor};
                font-size: 12px;
                line-height: 17px;
                font-family: ${fontFamily.ptBold};
                padding-left: 5px;
              }
            }
          }
          .forgotPassword {
            margin-left: 10px;
            color: ${color.primaryColor};
            font-size: 12px;
            line-height: 17px;
            font-family: ${fontFamily.ptBold};
            cursor: pointer !important;
            position: relative;
            /* text-decoration: underline; */
            &::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 1px;
              background: ${color.primaryColor};
            }
          }
        }
      }
      button[type='submit'] {
        background: ${color.primaryColor};
        color: ${color.whiteColor};
        height: 42px;
        padding: 0 15px;
        border-radius: 5px;
        width: 100%;
        font-size: 14px;
        line-height: 18px;
        font-family: ${fontFamily.ptBold};
        margin-top: 15px;
        cursor: pointer !important;
        text-transform: capitalize;
        span {
          cursor: pointer !important;
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
    }
  }
`;

export const ResetPasswordWrapper = styled.div`
  display: flex;
  height: 100vh;
  .form-wrapper {
    background-image: url(/_next/static/media/home-border.c16dd4b7.png);
    background-repeat: no-repeat;
    background-position: top right;
    background-size: 90%;
    max-width: 427px;
    flex: 1;
    display: flex;
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */
    padding: 120px 50px 50px;
    .ant-form {
      .ant-form-item {
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .logo {
      margin-bottom: 65px;
    }
    .title {
      /* font-size: 18px; */
    }
  }
`;
