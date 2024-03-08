import styled from 'styled-components';
import { fontFamily, color } from '@/styles/variable';
import { HeaderProps } from '../Booking/Booking';

export const ListedPropertyWrapper = styled.div`
  padding-bottom: 24px;
  .header-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 24px;
    padding-top: 24px;
    position: sticky;
    top: ${(props: HeaderProps) => props.headerHeight}px;
    background: ${color.whiteColor};
    z-index: 100;
    @media screen and (max-width: 991px) {
      flex-direction: column;
    }
    /* @media screen and (max-width: 767px) {
      padding-bottom: 20px;
      padding-top: 20px;
    } */
    /* @media screen and (max-width: 600px) {
      padding-bottom: 10px;
      padding-top: 15px;
    } */
    .title {
      flex: 1;
      font-size: 24px;
      line-height: 31px;
      font-family: ${fontFamily.ptBold};
      color: ${color.blackColor};
      margin-right: 20px;
      @media screen and (max-width: 991px) {
        margin-right: 0;
        margin-bottom: 20px;
        font-size: 22px;
        line-height: 26px;
      }
      @media screen and (max-width: 767px) {
        font-size: 20px;
        line-height: 25px;
      }
    }
    .right-content {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      /* @media screen and (max-width: 600px) {
        margin-top: -12px;
      } */
      a {
        white-space: nowrap;
        margin-right: 20px;
        text-decoration: underline;
        font-size: 14px;
        text-transform: capitalize;
        font-family: ${fontFamily.ptBold};
        color: ${color.secondaryColor};
        cursor: pointer !important;
        @media screen and (max-width: 991px) {
          margin-right: 15px;
        }
      }
      button {
        white-space: nowrap;
        border-radius: 40px;
        border-color: ${color.secondaryColor};
        color: ${color.secondaryColor};
        margin-right: 20px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 991px) {
          margin-right: 15px;
        }
        @media screen and (max-width: 600px) {
          margin-left: auto;
          margin-right: 0;
          font-size: 12px;
          min-height: 32px;
          padding: 0 15px;
        }
        svg {
          margin-right: 10px;
          @media screen and (max-width: 600px) {
            width: 10px;
            height: 10px;
          }
          path {
            stroke: ${color.secondaryColor};
          }
        }
      }
      .search {
        flex: 1;
        @media screen and (max-width: 600px) {
          flex: 100%;
          margin-top: 7px;
        }
        &::before {
          display: none;
        }
        .search-wrapper {
          display: flex;
          align-items: center;
          padding: 6px 6px 6px 20px;
          height: 36px;
          min-width: 200px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 32px;
          @media screen and (max-width: 767px) {
            padding: 6px 6px 6px 12px;
            min-width: 100%;
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
  }

  &.list-property {
    .header-wrapper {
      @media screen and (max-width: 600px) {
        padding-bottom: 10px;
        padding-top: 15px;
        .title {
          margin-bottom: 12px;
        }
        .right-content {
          button {
            min-height: 30px;
          }
        }
      }
    }
  }

  &.booking-wrap {
    .header-wrapper {
      flex-direction: row;
      position: sticky;
      top: ${(props: HeaderProps) => props.headerHeight}px;
      background: ${color.whiteColor};
      z-index: 1001;
      @media screen and (max-width: 767px) {
        width: 100vw;
        margin-left: -15px;
        padding-left: 15px;
        padding-right: 15px;
      }
      .title {
        margin-bottom: 0;
      }
      .search {
        @media screen and (max-width: 767px) {
          min-width: 220px;
          max-width: 200px;
          margin: 0;
        }
      }
    }
    .ant-dropdown-trigger {
      margin-top: 5px !important;
      @media screen and (max-width: 767px) {
        margin-top: 0 !important;
      }
    }
    .ant-tabs {
      align-items: self-start;
      .ant-tabs-nav {
        position: sticky;
        top: 158px;
        z-index: 100;
        margin: 0;
        @media screen and (max-width: 767px) {
          top: 133px;
        }
      }
    }
  }

  /* tab */
  .ant-tabs {
    align-items: self-start;
    .ant-tabs-nav {
      max-width: 245px;
      width: 100%;
      z-index: 1;
      position: sticky;
      top: 158px;
      background: ${color.whiteColor};
      margin: 0;
      @media screen and (max-width: 991px) {
        top: 205px;
        max-width: 230px;
      }
      @media screen and (max-width: 767px) {
        max-width: 100%;
        padding: 10px 0;
        top: 185px;
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
          /* width: 100%; */
          background: #fff;
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
              justify-content: space-between;
              div {
                display: flex;
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
                  margin-right: 20px;
                }
              }
              .unread {
                padding: 3px 10px 3px 10px;
                border-radius: 20px;
                border: 1px solid ${color.secondaryColor};
                font-size: 12px;
                line-height: 12px;
                font-family: ${fontFamily.ptBold};
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${color.secondaryColor};
                text-transform: capitalize;
              }
              .badge {
                min-width: 26px;
                min-height: 26px;
                line-height: 1;
                border-radius: 50%;
                background: rgba(0, 0, 0, 0.05);
                font-family: ${fontFamily.ptBold};
                font-size: 12px;
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
          .title-wrapper {
            padding-left: 10px;
            @media screen and (max-width: 991px) {
              padding-left: 0;
            }
            .title {
              font-size: 16px;
              line-height: 20px;
              font-family: ${fontFamily.ptBold};
              color: ${color.blackColor};
            }
            .sub-title {
              font-family: ${fontFamily.ptRegular};
              font-size: 12px;
              line-height: 16px;
              color: ${color.greyColor};
            }
          }
        }
      }
    }
  }
`;

export const ListPropertyWrapper = styled.div`
  .list {
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    position: relative;
    @media screen and (max-width: 991px) {
      padding: 5px 0;
    }
    @media screen and (max-width: 575px) {
    }
    .left {
      padding: 10px 0;
      display: flex;
      flex: 1;
      @media screen and (max-width: 575px) {
        /* flex-direction: column; */
      }
      img {
        margin-right: 24px;
        border-radius: 8px;
        @media screen and (max-width: 991px) {
          margin-right: 20px;
          width: 80px;
          height: 80px;
        }
        @media screen and (max-width: 767px) {
          margin-right: 15px;
          width: 70px;
          height: 70px;
        }
        @media screen and (max-width: 575px) {
          margin-right: 0;
          position: absolute;
          left: 0;
          width: 60px;
          height: 60px;
        }
      }
      .content {
        @media screen and (max-width: 575px) {
          width: 100%;
        }
        .block {
          margin-bottom: 8px;
          display: flex;
          /* align-items: center; */
          &:first-child {
            @media screen and (max-width: 575px) {
              flex-direction: column;
              padding-left: 80px;
              margin-bottom: 15px;
            }
          }
          &:last-child {
            margin-bottom: 0;
          }
          h3 {
            font-size: 24px;
            line-height: 31px;
            font-family: ${fontFamily.ptRegular};
            color: ${color.blackColor};
            margin: 0;
            flex: 1;

            @media screen and (max-width: 1199px) {
              font-size: 22px;
              line-height: 28px;
            }
            @media screen and (max-width: 991px) {
              font-size: 20px;
              line-height: 24px;
            }
            @media screen and (max-width: 767px) {
              font-size: 18px;
              line-height: 20px;
            }
            @media screen and (max-width: 575px) {
              margin-bottom: 5px;
            }
            .seperator {
              @media screen and (max-width: 575px) {
                display: none;
              }
            }
            span {
              margin-left: 5px;
              word-break: break-word;
              @media screen and (max-width: 575px) {
                margin-left: 0;
                display: block;
              }
              &:first-child {
                margin-left: 0;
              }
            }
          }
          .round-sep {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: ${color.greyColor};
            margin: 12px 8px 8px;
            @media screen and (max-width: 575px) {
              display: none;
            }
          }
          .badge {
            font-size: 12px;
            color: ${color.secondaryColor};
            border: 1px solid ${color.secondaryColor};
            border-radius: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: ${fontFamily.ptBold};
            height: 20px;
            line-height: 1;
            text-transform: capitalize;
            padding: 0 10px;
            margin-top: 5px;
            @media screen and (max-width: 575px) {
              width: fit-content;
            }
          }
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            min-width: 350px;
            flex-wrap: wrap;
            @media screen and (max-width: 991px) {
              width: fit-content;
              min-width: unset;
            }
            @media screen and (max-width: 575px) {
              flex-direction: column;
              align-items: flex-start;
            }
            li {
              padding: 0 5px;
              position: relative;
              color: ${color.blackColor};
              font-size: 14px;
              line-height: 19px;
              font-family: ${fontFamily.ptRegular};
              @media screen and (max-width: 575px) {
                padding: 0;
              }
              &:first-child {
                padding-left: 0;
              }
              &::after {
                content: '';
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 1px;
                height: 12px;
                background: ${color.blackColor};
                @media screen and (max-width: 575px) {
                  display: none;
                }
              }
              &:last-child {
                &::after {
                  display: none;
                }
              }
              span {
                margin-left: 5px;
              }
            }
            &.viewed-list {
              background: rgba(0, 0, 0, 0.03);
              border-radius: 4px;
              padding: 4px 12px;
              @media screen and (max-width: 575px) {
                flex-direction: row;
              }
              li {
                @media screen and (max-width: 575px) {
                  padding: 0 5px;
                }
                &::after {
                  content: '';
                  position: absolute;
                  right: 0;
                  top: 50%;
                  transform: translateY(-50%);
                  width: 1px;
                  height: 12px;
                  background: ${color.blackColor};
                  @media screen and (max-width: 575px) {
                    display: block;
                  }
                }
                &:last-child {
                  &::after {
                    display: none;
                  }
                }
              }
            }
          }
        }
      }
    }
    .right {
      padding: 10px 0;
      margin-left: 10px;
      .ant-dropdown-trigger {
        margin-top: 5px;
        display: block;
        @media screen and (max-width: 575px) {
          margin-top: 0;
        }
        .anticon {
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
`;
