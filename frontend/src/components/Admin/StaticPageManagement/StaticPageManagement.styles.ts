import styled from 'styled-components';
import { color, fontFamily } from '@/styles/variable';

export const StaticPageDetailWrapper = styled.div``;
export const AddPagesWrapper = styled.div`
  box-shadow: 0px 0px 0px 1px rgb(0 0 0 / 5%);
  border-radius: 5px;
  background: #ffffff;
  padding: 20px;
  .ant-form {
    display: flex;
    flex-wrap: wrap;
    .header-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 5px 0 12px;
      margin-bottom: 12px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      .ant-form-item {
        flex: 1;
        margin-bottom: 0;
        .ant-input {
          border: none !important;
          border-radius: none;
          font-size: 24px;
          font-family: ${fontFamily.ptBold};
          padding: 0;
          &[disabled] {
            background: none;
          }
        }
      }
      .btn-wrapper {
        display: flex;
        align-items: center;
        button {
          margin-right: 10px;
          min-width: 100px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    .ant-form-item {
      width: 100%;
      margin-right: 20px;
      &:nth-child(2) {
        width: 100% !important;
        .ant-form-item-row {
          width: calc(50% - 10px);
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
      &.w-50 {
        width: calc(50% - 20px);
      }
      &.remove-mr {
        margin-right: 0;
      }
      .ant-form-item-label {
        label {
          font-family: ${fontFamily.ptBold};
        }
      }
      .ant-form-item-control-input {
        .ant-input {
          line-height: 1;
          &[disabled] {
            background: none;
            border: none !important;
            padding: 0;
          }
        }
        .ant-radio-group {
          display: flex;
          align-items: center;
          overflow-x: auto;
          &::-webkit-scrollbar {
            display: none;
          }
          .ant-radio-wrapper {
            background: #f3f3f3;
            margin-right: 2px;
            min-height: 27px;
            padding: 4px 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            .ant-radio {
              display: none;
              + span {
                text-transform: uppercase;
                padding: 0;
                font-family: ${fontFamily.ptRegular};
                color: rgba(121, 121, 121, 1);
              }
            }
            &.ant-radio-wrapper-checked {
              .ant-radio {
                + span {
                  color: ${color.primaryColor};
                  font-family: ${fontFamily.ptBold};
                }
              }
            }
            &:first-child {
              border-radius: 4px 0px 0px 4px;
            }
            &:last-child {
              border-radius: 0px 4px 4px 0px;
            }
          }
        }
      }
      .btn-wrapper {
        display: flex;
        align-items: center;
        margin-top: 15px;
        button {
          margin-right: 20px;
          min-width: 108px;
        }
      }
    }
  }
  .editor {
    border: 1px solid #b3b3b3;
    border-radius: 8px;
    min-height: 300px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .ck-editor {
      flex: 1;
      display: flex;
      flex-direction: column;
      .ck-editor__main {
        flex: 1;
        display: flex;
        flex-direction: column;
        .ck-content {
          flex: 1;
          padding: 10px 20px;
          border: none;
          height: 100%;
          box-shadow: none;
        }
      }
    }
    .ck-toolbar {
      border-top: 0;
      border-left: 0;
      border-right: 0;
    }
  }
`;
