import { fontFamily, color } from '@/styles/variable';
import styled from 'styled-components';

export const ViewUserWrapper = styled.div`
  .box {
    padding: 20px;
  }
`;

export const EditUserWrapper = styled.div``;

export const UserDetailWrapper = styled.div`
  .block {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }
    label {
      font-family: ${fontFamily.ptBold};
      font-size: 14px;
      line-height: 20px;
      color: ${color.greyColor};
      min-width: 200px;
    }
    span {
      color: ${color.blackColor};
      font-family: ${fontFamily.ptBold};
      flex: 1;
      font-size: 14px;
      line-height: 20px;
    }
    a {
      font-family: ${fontFamily.ptBold};
      font-size: 14px;
      line-height: 20px;
      color: ${color.blackColor};
      &.focus-link {
        color: ${color.primaryColor};
        padding-right: 5px;
      }
    }
    .doc-wrapper {
      display: flex;
      align-items: center;
      a {
        font-family: ${fontFamily.mediumFont};
        color: ${color.primaryColor};
        font-size: 12px;
        line-height: 20px;
        background: #faf9f9;
        border: 1px solid rgba(255, 144, 76, 0.2);
        border-radius: 8px;
        padding: 4px 16px;
        margin-right: 8px;
        display: flex;
        align-items: center;
        &:last-child {
          margin-right: 0;
        }
        .anticon {
          border: none;
          padding: 0;
          margin-right: 8px;
          line-height: 1;
          svg {
            width: 14px;
            height: 14px;
          }
        }
      }
    }
  }
`;

export const EditUserDetailWrapper = styled.div``;

export const EditUserDetailFormWrapper = styled.div`
  max-width: 620px;
  .ant-form {
    .ant-form-item {
      margin-bottom: 12px;
      &:last-child {
        margin-bottom: 0;
      }
      .ant-form-item-row {
        .ant-form-item-label {
          width: auto;
          min-width: 200px;
          display: flex;
          /* align-items: center; */
          label {
            margin-top: 9px;
            margin-bottom: 9px;
          }
        }
        .ant-form-item-control {
          min-width: auto;
          width: auto;
          .ant-input {
            font-family: ${fontFamily.ptRegular};
          }
          .ant-picker {
            .ant-picker-input {
              input {
                font-family: ${fontFamily.ptRegular};
              }
            }
          }
        }
      }
      &.docs {
        ul {
          list-style-type: none;
          li {
            background: #faf9f9;
            border: 1px solid rgba(255, 144, 76, 0.2);
            border-radius: 8px;
            padding: 8px 12px;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            span {
              color: ${color.primaryColor};
              display: flex;
              align-items: center;
              &.text {
                margin-right: 15px;
                font-size: 14px;
                font-family: ${fontFamily.ptBold};
                .anticon {
                  margin-right: 12px;
                  svg {
                    width: 16px;
                    height: 16px;
                  }
                }
              }
              &.delete {
                margin-left: auto;
              }
            }
          }
        }
      }
      &.property-list {
        ul {
          list-style-type: none;
          display: flex;
          flex-wrap: wrap;
          li {
            position: relative;
            padding: 0 10px 0 5px;
            color: ${color.primaryColor};
            font-size: 14px;
            line-height: 20px;
            font-family: ${fontFamily.ptBold};
            cursor: pointer !important;
            text-decoration: underline;
            &::before {
              content: ',';
              position: absolute;
              right: 0;
              top: 0;
            }
            &:last-child {
              padding-right: 8px;
              &::before {
                display: none;
              }
              &::after {
                content: '.';
                position: absolute;
                right: 0;
                top: 0;
              }
            }
          }
        }
      }
      &.property-rent {
        .rented-prop {
          color: ${color.primaryColor};
          font-size: 14px;
          line-height: 20px;
          font-family: ${fontFamily.ptBold};
        }
      }
    }
  }
`;
