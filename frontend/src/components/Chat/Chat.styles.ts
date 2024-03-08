import styled from 'styled-components';
import { fontFamily, color } from '@/styles/variable';
import { HeaderProps } from './Chat';

export const ChatWrapper = styled.div`
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 64px 0 60px;
    position: sticky;
    background: ${color.whiteColor};
    z-index: 100;
    top: ${(props: HeaderProps) => props.headerHeight}px;
    @media screen and (max-width: 1199px) {
      padding: 30px 0;
    }
    @media screen and (max-width: 767px) {
      padding: 20px 0 20px;
      width: 100vw;
      margin-left: -15px;
      padding-left: 15px;
      padding-right: 15px;
      /* flex-direction: column; */
    }
    .title {
      font-size: 40px;
      line-height: 51px;
      @media screen and (max-width: 1199px) {
        font-size: 35px;
        line-height: 45px;
      }
      @media screen and (max-width: 991px) {
        font-size: 28px;
        line-height: 38px;
      }
      @media screen and (max-width: 767px) {
        font-size: 20px;
        line-height: 28px;
        margin: 0 15px 0 0;
        text-align: center;
        max-width: 100%;
      }
      @media screen and (max-width: 600px) {
        max-width: 100%;
        text-align: center;
      }
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
      @media screen and (max-width: 600px) {
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
`;

export const ChatBoxWrapper = styled.div`
  /* margin-bottom: 50px; */
  .ant-tabs {
    align-items: self-start;
    .ant-tabs-nav {
      max-width: 245px;
      width: 100%;
      z-index: 1;
      position: sticky;
      top: 270px;
      background: ${color.whiteColor};
      margin: 0;
      @media screen and (max-width: 1199px) {
        top: 196px;
        max-width: 230px;
      }
      @media screen and (max-width: 991px) {
        top: 187px;
      }
      @media screen and (max-width: 767px) {
        max-width: 100%;
        padding: 0 0 10px;
        top: 136px;
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
                border-radius: 50%;
                background: rgba(0, 0, 0, 0.05);
                font-family: ${fontFamily.ptBold};
                font-size: 12px;
                line-height: 1;
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
        }
      }
    }
  }
`;

export const ChatContentwrapper = styled.div`
  .title-wrapper {
    .title {
      font-size: 16px;
      line-height: 20px;
      margin: 0;
    }
    .sub-title {
      font-size: 12px;
      line-height: 15px;
    }
  }
  .chat-list-wrapper {
    margin-top: 24px;
    @media screen and (max-width: 991px) {
      margin-top: 20px;
    }
    @media screen and (max-width: 767px) {
      margin-top: 0;
    }
  }
`;

export const ChatListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 24px 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 991px) {
    padding: 15px 0 15px 0;
  }
  @media screen and (max-width: 767px) {
    padding: 10px 0 10px 0;
  }
  .left {
    margin-right: 10px;
    @media screen and (max-width: 767px) {
      margin-right: 0;
      position: absolute;
      left: 0;
    }
  }
  .right {
    flex: 1;
    .header-wrap {
      display: flex;
      flex-wrap: wrap;
      @media screen and (max-width: 767px) {
        padding-left: 45px;
      }
      div {
        @media screen and (max-width: 767px) {
          width: 100%;
          margin-right: 0 !important;
        }
        ul {
          margin: 0 0 8px;
          padding: 0;
          list-style-type: none;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          &.dot {
            li {
              position: relative;
              padding-right: 10px;
              margin-right: 8px;
              color: ${color.blackColor};
              font-family: ${fontFamily.ptRegular};
              &::after {
                content: '';
                position: absolute;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background: ${color.greyColor};
                top: 50%;
                right: 0;
                transform: translateY(-50%);
              }
              &:last-child {
                padding-right: 10px;
                &::after {
                  display: none;
                }
              }
              &.user {
                font-size: 16px;
                line-height: 16px;
                color: ${color.blackColor};
                font-family: ${fontFamily.ptBold};
                text-transform: capitalize;
              }
              &.status {
                span {
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
                &.danger {
                  span {
                    border-color: #fc7272;
                    color: #fc7272;
                  }
                }
              }
            }
          }
          &.line {
            li {
              padding-right: 10px;
              margin-right: 8px;
              color: ${color.blackColor};
              font-family: ${fontFamily.ptRegular};
              position: relative;
              &::after {
                content: '';
                position: absolute;
                width: 1px;
                height: 15px;
                border-radius: 50%;
                background: ${color.greyColor};
                top: 50%;
                right: 0;
                transform: translateY(-50%);
              }
              &:last-child {
                padding-right: 10px;
                &::after {
                  display: none;
                }
              }
            }
          }
          &.icons {
            @media screen and (max-width: 767px) {
              /* margin-top: 5px; */
            }
            li {
              margin-right: 35px;
              font-size: 14px;
              line-height: 14px;
              font-family: ${fontFamily.ptRegular};
              text-transform: capitalize;
              display: flex;
              align-items: center;
              cursor: pointer !important;
              @media screen and (max-width: 767px) {
                margin-right: 25px;
              }
              &:last-child {
                margin-right: 0;
              }
              .ant-rate {
                margin-bottom: 0;
                .ant-rate-star {
                  div {
                    margin-right: 0;
                  }
                  svg {
                    font-size: 18px;
                    stroke: #000;
                    stroke-width: 50;
                    fill: transparent;
                  }
                  &.ant-rate-star-full {
                    svg {
                      stroke: none;
                      fill: #fcd05e;
                    }
                  }
                }
              }
              svg {
                margin-right: 10px;
                width: 20px;
                height: 20px;
                cursor: pointer !important;
                path {
                  cursor: pointer !important;
                }
              }
              &.active {
                font-style: italic;
                color: #8d8d8d;
              }
            }
          }
        }
        &:first-child {
          margin-right: 10px;
        }
        &:last-child {
          margin-left: auto;
          @media screen and (max-width: 767px) {
            margin: 0;
          }
        }
      }
    }
  }
  .message {
    display: flex;
    align-items: flex-end;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 4px;
    padding: 4px 12px;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer;
    @media screen and (max-width: 991px) {
      margin-top: 10px;
      padding: 8px 10px;
      flex-direction: column;
    }
    div {
      display: flex;
      /* align-items: center; */
      font-size: 14px;
      line-height: 19px;
      color: ${color.blackColor};
      margin-right: 15px;
      @media screen and (max-width: 991px) {
        margin-right: 0;
      }
      label {
        font-family: ${fontFamily.ptBold};
        margin-right: 8px;
        text-transform: capitalize;
        white-space: nowrap;
      }
      span {
        font-family: ${fontFamily.ptRegular};
      }
      &.date-time {
        margin-left: auto;
        margin-right: 0;
        color: ${color.greyColor};
        font-family: ${fontFamily.ptRegular};
        @media screen and (max-width: 991px) {
          margin-top: 10px;
        }
      }
    }
  }
`;
