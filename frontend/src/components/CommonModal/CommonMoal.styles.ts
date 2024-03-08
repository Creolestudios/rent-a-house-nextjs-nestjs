import styled from 'styled-components';
import { fontFamily, color } from '@/styles/variable';

export const FormWrapper = styled.div`
  .ant-form {
    .ant-form-item {
      margin-bottom: 10px;
      .ant-form-item-label {
        label {
        }
      }
      .ant-form-item-control {
        .ant-form-item-control-input {
          input {
            font-size: 14px;
            font-family: ${fontFamily.ptBold};
            &::placeholder {
              color: ${color.blackColor};
              font-family: ${fontFamily.ptRegular};
            }
          }
          button {
            width: 100%;
            height: 38px;
            background: ${color.primaryColor};
            color: ${color.whiteColor};
            font-size: 14px;
            font-family: ${fontFamily.ptBold};
            border-radius: 8px;
            position: relative;
            box-shadow: none;
            cursor: pointer !important;
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
`;
