import styled from 'styled-components';
import { fontFamily, color } from '@/styles/variable';
import { HeaderProps } from '../Header/Header';
// import { HeaderProps } from './PropertyEdit';

export const PropertyEditWrapper = styled.div`
  padding: 0 0 24px;
  padding-bottom: 24px !important;
  .ant-tabs-nav {
    position: sticky;
    top: 153px;
    align-self: baseline;
    z-index: 100 !important;
    @media screen and (max-width: 991px) {
      top: 145px;
    }
    @media screen and (max-width: 767px) {
      top: 115px;
    }
  }
  &.edit-property {
    .ant-tabs {
      .ant-tabs-nav {
        @media screen and (max-width: 767px) {
          top: 156px;
        }
      }
      .ant-tabs-content-holder {
        .facility-amenities {
          .ant-form {
            div {
              > .title {
                background: ${color.whiteColor};
                @media screen and (max-width: 767px) {
                  top: 215px;
                  /* position: sticky; */
                  /* z-index: 1; */
                  padding-bottom: 10px;
                }
              }
            }
            .form-item-wrapper {
              .ant-form-item {
                @media screen and (max-width: 1024px) {
                  width: 100%;
                }
              }
            }
          }
          .left {
            @media screen and (max-width: 1199px) {
              margin-right: 20px !important;
              padding: 20px;
            }
            @media screen and (max-width: 991px) {
              margin-right: 10px !important;
            }
            @media screen and (max-width: 767px) {
              padding: 15px;
            }
            > .title {
              @media screen and (max-width: 1199px) {
                margin-bottom: 15px;
              }
            }
          }
          .right {
            @media screen and (max-width: 1199px) {
              padding: 20px;
            }
            @media screen and (max-width: 767px) {
              padding: 15px;
            }
            > .title {
              @media screen and (max-width: 1199px) {
                margin-bottom: 15px;
              }
            }
          }
        }
      }
    }
  }
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    /* top: 74px; */
    top: ${(props: HeaderProps) => props.headerHeight}px;
    background: ${color.whiteColor};
    padding-bottom: 24px;
    padding-top: 24px;
    z-index: 100;
    @media screen and (max-width: 767px) {
      padding-top: 20px;
      padding-bottom: 10px;
      flex-direction: column;
    }
    .title {
      margin-right: 20px;
      font-size: 24px;
      line-height: 31px;
      font-family: ${fontFamily.ptBold};
      color: ${color.blackColor};
      flex: 1;
      @media screen and (max-width: 991px) {
        font-size: 20px;
        line-height: 22px;
      }
      @media screen and (max-width: 767px) {
        margin-right: 0;
        text-align: center;
        margin-bottom: 15px;
      }
    }
    .btn-wrapper {
      @media screen and (max-width: 767px) {
        display: flex;
        justify-content: center;
      }
      button {
        margin-right: 20px;
        text-transform: capitalize;
        border-radius: 40px;
        border-color: ${color.secondaryColor};
        color: ${color.secondaryColor};
        min-height: 30px;
        padding: 0 20px;
        font-size: 14px;
        @media screen and (max-width: 767px) {
          min-width: 100px;
          margin-right: 15px;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .ant-tabs {
    .ant-tabs-nav {
      max-width: 245px;
      width: 100%;
      z-index: 1;
      background: ${color.whiteColor};
      margin: 0;
      @media screen and (max-width: 991px) {
        max-width: 230px;
      }
      @media screen and (max-width: 767px) {
        max-width: 100%;
        padding: 10px 0;
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
            height: 40px;
          }
          .ant-tabs-tab-btn {
            width: 100%;
            .tab-label-wrapper {
              display: flex;
              justify-content: space-between;
              div {
                display: flex;
                @media screen and (max-width: 767px) {
                  width: 100%;
                }
              }
              .title {
                color: ${color.greyColor};
                font-size: 16px;
                font-family: ${fontFamily.ptBold};
                margin-right: 10px;
                @media screen and (max-width: 991px) {
                  font-size: 15px;
                }
                @media screen and (max-width: 767px) {
                  width: 100%;
                  margin-right: 0;
                  text-align: center;
                }
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
      border: none;
      margin-left: 24px;
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
          .bordered {
            /* margin-left: 24px;
            @media screen and (max-width: 767px) {
              margin-left: 0;
            } */
            /* @media screen and (max-width: 767px) {
              margin-top: 15px;
            } */
            &.no-border {
              > div {
                padding: 0;
                border: none;
                .ant-form {
                  padding: 0;
                }
              }
            }
            .ant-input {
              border: 1px solid rgba(0, 0, 0, 0.3);
              font-family: ${fontFamily.ptBold};
              border-right-width: 3px !important;
              border-right-color: ${color.primaryColor} !important;
              &::placeholder {
                font-family: ${fontFamily.ptRegular};
                color: ${color.greyColor};
              }
              &:focus {
                box-shadow: none;
              }
            }
            .media-wrapper {
              .block {
                max-width: 610px;
                &:last-child {
                  margin-bottom: 0;
                }
              }
            }
            > div {
              flex: 1;
              border: 1px solid rgba(0, 0, 0, 0.1);
              border-radius: 8px;
              margin-left: 0;
              padding: 20px;
              margin-bottom: 22px;
              /* width: 100%; */
              max-width: 100%;
              @media screen and (max-width: 767px) {
                padding: 15px;
              }
            }
            > button {
              margin-left: auto;
              display: flex;
              align-items: center;
              justify-content: center;
              min-width: 150px;
            }
            .edit-apartment {
              padding: 20px;
              @media screen and (max-width: 767px) {
                padding: 15px;
              }
              > .title {
                font-size: 20px;
                font-family: ${fontFamily.ptBold};
              }
              .block {
                .option-wrapper {
                  .ant-radio-group {
                    padding: 0;
                    flex-direction: column;
                    .ant-radio-wrapper {
                      margin-bottom: 24px;
                      margin-right: 0;
                      @media screen and (max-width: 767px) {
                        margin-bottom: 20px;
                      }
                      &:last-child {
                        margin-bottom: 0;
                      }
                      .content {
                        h3 {
                          font-size: 16px;
                          line-height: 18px;
                          margin-bottom: 6px;
                        }
                        p {
                          font-size: 14px;
                          line-height: 19px;
                        }
                      }
                    }
                  }
                }

                .ant-checkbox-group {
                  flex-direction: column;
                  @media screen and (max-width: 767px) {
                    padding: 0;
                  }
                  .ant-checkbox-wrapper {
                    margin-bottom: 24px;
                    margin-right: 0;
                    @media screen and (max-width: 767px) {
                      margin-bottom: 20px;
                    }
                    &:last-child {
                      margin-bottom: 0;
                    }
                    .content {
                      h3 {
                        font-size: 16px;
                        line-height: 18px;
                        margin-bottom: 6px;
                      }
                      p {
                        font-size: 14px;
                        line-height: 19px;
                      }
                    }
                    .ant-checkbox {
                      + span {
                        .title {
                          font-family: ${fontFamily.ptBold};
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          .ant-form {
            border: none;
            padding: 25px;
            @media screen and (max-width: 1199px) {
              padding: 20px;
            }
            @media screen and (max-width: 991px) {
              padding: 0;
            }
            @media screen and (max-width: 767px) {
              padding: 0;
            }
            .left {
              @media screen and (max-width: 991px) {
                margin-right: 20px;
              }
              @media screen and (max-width: 767px) {
                margin-right: 0;
              }
            }
          }
        }
      }
    }
  }
`;
