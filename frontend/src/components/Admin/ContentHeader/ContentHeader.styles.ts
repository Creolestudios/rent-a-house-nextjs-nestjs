import styled from 'styled-components';
import { fontFamily, color } from '@/styles/variable';

export const ContentHeaderWrapper = styled.div`
  padding: 10px 20px;
  margin-right: -20px;
  margin-left: -20px;
  margin-top: -20px;
  min-height: 38px;
  background: #ffffff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  transition: 0.3s all;
  .ant-breadcrumb {
    margin-right: 20px;
    ol {
      li {
        .ant-breadcrumb-link {
          font-size: 14px;
          font-family: ${fontFamily.demiBold};
          color: ${color.blackColor};
          text-transform: capitalize;
          &.ant-breadcrumb-separator {
            display: flex;
            align-items: center;
            .anticon {
              svg {
                transform: rotate(-90deg);
              }
            }
          }
        }
        a {
          cursor: pointer !important;
          color: rgba(121, 121, 121, 1) !important;
        }
        &.ant-breadcrumb-separator {
          display: flex;
          align-items: center;
          .anticon {
            margin-top: 0;
            display: table-caption;
            svg {
              width: 10px;
              height: 10px;
              color: rgba(0, 0, 0, 0.2);
            }
          }
        }
      }
    }
  }
  .btn-wrapper {
    margin-left: auto;
    .ant-btn {
      display: flex;
      align-items: center;
      border-color: #ff904c;
      border-radius: 21px;
      font-family: ${fontFamily.mediumFont};
      min-height: 30px;
      height: auto !important;
      padding: 3px 18px;
      cursor: pointer !important;
      .anticon {
        svg {
          /* font-size: 10px; */
          width: 12px;
          height: 12px;
        }
      }
      span {
        font-size: 14px;
        color: #ff904c;
        font-family: ${fontFamily.mediumFont};
        cursor: pointer !important;
      }
    }
  }
  .humberger-menu {
    margin-right: 15px;
    display: none;
    @media screen and (max-width: 991px) {
      display: flex;
    }
    svg,
    path {
      cursor: pointer !important;
    }
  }
`;
