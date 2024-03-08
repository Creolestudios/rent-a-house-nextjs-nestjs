import styled from 'styled-components';
import { fontFamily, color } from '@/styles/variable';
import { HeaderProps } from './Header';

export const HeaderWrapper = styled.div`
  background: #fff;
  height: 74px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  /* position: relative; */
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9999;
  @media screen and (max-width: 767px) {
    height: 60px;
  }
  .container {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .logo {
    height: 40px;
    width: 180px;
    margin-right: 15px;
    cursor: pointer !important;
    @media screen and (max-width: 991px) {
      width: 160px;
    }
    @media screen and (max-width: 767px) {
      width: 130px;
    }
  }
  + div {
    /* padding-top: 74px; */
    padding-top: ${(props: HeaderProps) => props.headerHeight}px;
    padding-bottom: 65px;
    @media screen and (max-width: 767px) {
      padding-bottom: 40px;
      /* padding-top: 60px; */
    }
  }
`;

export const HeaderRight = styled.div`
  margin-left: auto;
  > ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    li {
      font-family: ${fontFamily.ptBold};
      color: ${color.secondaryColor};
      font-size: 14px;
      line-height: 18px;
      margin-right: 24px;
      position: relative;
      cursor: pointer !important;
      white-space: nowrap;
      @media screen and (max-width: 991px) {
        margin-right: 15px;
      }
      &::before {
        content: '';
        position: absolute;
        height: 1px;
        width: 100%;
        background: ${color.secondaryColor};
        left: 0;
        bottom: -5px;
      }
      &:last-child {
        margin-right: 0;
      }

      &.dropdown {
        &::before {
          display: none;
        }
        .ant-dropdown-trigger {
          border: 1px solid ${color.secondaryColor};
          border-radius: 8px;
          padding: 7px 16px 7px 16px;
          display: flex;
          align-items: center;
          cursor: pointer !important;
          span {
            cursor: pointer !important;
          }
          svg {
            margin-left: 12px;
            width: 17px;
            height: 17px;
            color: ${color.secondaryColor};
            cursor: pointer !important;
            path {
              cursor: pointer !important;
              stroke: ${color.secondaryColor};
            }
          }
          &.down-arrow {
            svg {
              width: 10px;
              height: 10px;
            }
          }
          &:hover {
            color: ${color.secondaryColor} !important;
          }
        }
      }
      &.search {
        &::before {
          display: none;
        }
        .mobile-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: ${color.primaryColor};
          display: flex;
          /* align-items: center;
          justify-content: center; */
          .anticon {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
              /* color: ${color.whiteColor};
              cursor: pointer !important;
              strokeWidth: 1.5; */
              path {
                cursor: pointer !important;
                stroke-width: 1.5px;
                stroke: ${color.whiteColor};
                stroke-opacity: 1;
              }
            }
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
          @media screen and (max-width: 991px) {
            min-width: 190px;
            max-width: 190px;
          }
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
                cursor: pointer !important;
                transform: rotate(360deg) scale(1.1);
              }
            }
          }
        }
        .mobile-search-pop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          min-height: 60px;
          max-height: 100vh;
          overflow-y: auto;
          background: ${color.whiteColor};
          z-index: 1;
          padding: 15px;
          box-shadow: 0 0 20px rgba(0 0 0 / 10%);
          .search-wrapper {
            /* margin-bottom: 15px; */
          }
        }
      }
      &.icon {
        display: flex;
        &::before {
          display: none;
        }
        svg {
          cursor: pointer !important;
          width: 18px;
          height: 18px;
          color: ${color.secondaryColor};
          path {
            cursor: pointer !important;
            stroke: ${color.secondaryColor};
          }
        }
      }
      &.humberger-menu {
        cursor: pointer !important;
        display: none;
        margin: 0;
        @media screen and (max-width: 767px) {
          display: block;
        }
        padding: 5px 0;
        &::before {
          display: none;
        }
        .humberger-icon {
          width: 20px;
          height: 2px;
          border-radius: 20px;
          background: ${color.secondaryColor};
          display: block;
          text-decoration: none;
          position: relative;
          cursor: pointer !important;
          &::before {
            content: '';
            width: 20px;
            height: 2px;
            position: absolute;
            top: -5px;
            background: ${color.secondaryColor};
            cursor: pointer !important;
          }
          &::after {
            content: '';
            width: 20px;
            height: 2px;
            position: absolute;
            top: 5px;
            background: ${color.secondaryColor};
            cursor: pointer !important;
          }
        }
      }
    }
  }
`;

export const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 74px;
  width: 100%;
  right: -100%;
  z-index: 100;
  background: ${color.whiteColor};
  padding: 20px 20px !important;
  transition: 0.3s all ease-in-out;
  min-height: 400px;
  max-height: calc(100vh - 74px);
  overflow-y: auto;
  @media screen and (max-width: 767px) {
    top: 60px;
    max-height: calc(100vh - 60px);
    padding-bottom: 60px;
  }
  &.open {
    right: 0;
    padding: 20px 20px 30px !important;
  }
  > .ant-menu {
    width: 100% !important;
    border: none !important;
    display: block;
    padding-top: 10px;
    .ant-menu-submenu {
      width: 100%;
      &::before {
        display: none !important;
      }
      .ant-menu-submenu-title {
        padding-left: 0 !important;
        margin: 0 0 0 !important;
        width: 100%;
        padding-right: 25px;
        &:hover {
          background: none !important;
        }
      }
      .ant-menu-title-content {
        color: ${color.secondaryColor};
        font-family: ${fontFamily.ptBold};
        font-size: 14px;
        text-transform: capitalize;
      }
      .ant-menu {
        padding-left: 20px;
        /* display: unset; */
        background: none !important;
        .ant-menu-submenu-selected {
          background: none !important;
        }
      }
      .ant-menu-submenu-arrow {
        width: 0;
      }
    }
    .ant-menu-item-divider {
      width: 100%;
      margin-block: 10px;
      border-color: #d9d9d9;
      &::before {
        display: none !important;
      }
    }
    .ant-menu-item {
      height: 35px;
      line-height: 35px;
      padding: 0 !important;
      margin: 0 0 6px !important;
      width: 100%;
      border-radius: 4px;
      &:last-child() {
        margin: 0 !important;
      }
      &:hover {
        background: none !important;
      }
      &::before {
        display: none !important;
      }
      .ant-menu-title-content {
        color: ${color.secondaryColor};
        font-family: ${fontFamily.ptBold};
        font-size: 14px;
        text-transform: capitalize;
      }
      &.ant-menu-item-selected {
        background: rgb(0 0 0 / 5%) !important;
        padding: 0 10px !important;
      }
    }
  }
  button {
    width: 100%;
    border-color: ${color.secondaryColor};
    color: ${color.secondaryColor};
    font-size: 14px;
    height: 38px;
    /* margin-bottom: 20px;
    border-bottom: 1px solid #D9D9D9; */
  }
`;
