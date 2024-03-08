import styled from 'styled-components';
import { color, fontFamily } from '@/styles/variable';
import downArrowImg from '@/assets/images/icons/down-arrow.png';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 48px;
  padding: 0 20px;
  background: ${color.whiteColor};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  z-index: 1;
  position: relative;
  .logo {
    max-width: 130px;
  }
  ul {
    display: flex;
    align-items: center;
    margin: 0 0 0 auto;
    list-style-type: none;
    li {
      &:not(:last-child) {
        margin-right: 12px;
      }
      &.notification-icon {
        margin-right: 25px;
      }
      .user-img {
        border-radius: 50%;
      }
      .ant-dropdown-trigger {
        font-family: ${fontFamily.mediumFont};
        cursor: pointer !important;
        color: ${color.blackColor};
        .anticon-down {
          margin-left: 12px;
          background: url(${downArrowImg.src}) no-repeat;
          width: 10px;
          height: 10px;
          background-position: center;
          background-size: 10px;
          transition: 0.2s all;
          cursor: pointer !important;
          svg {
            display: none;
          }
        }
        &.ant-dropdown-open {
          .anticon-down {
            transform: rotate(180deg);
          }
        }
      }
    }
  }
`;
