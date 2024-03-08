import styled from 'styled-components';
import { color, fontFamily } from '@/styles/variable';

export const SidebarWrapper = styled.div`
  max-width: 250px;
  width: 100%;
  padding: 20px;
  height: 100vh;
  background: ${color.secondaryColor};
  overflow-y: auto;
  @media screen and (max-width: 991px) {
    position: fixed;
    z-index: 2;
  }
  .ant-menu {
    background: none;
    border: none !important;
    &.ant-menu-light {
      .ant-menu-item {
        margin: 0;
        height: auto;
        width: 100%;
        font-size: 14px;
        line-height: 20px;
        font-family: ${fontFamily.mediumFont};
        color: rgba(255 255 255 / 70%);
        border-radius: 0 5px 5px 0;
        cursor: pointer !important;
        padding: 0 !important;
        &:hover {
          color: ${color.whiteColor};
          background: rgba(0 0 0 /10%);
          /* border-left: 2px solid ${color.whiteColor}; */
        }
        &.ant-menu-item-selected {
          background: rgba(0 0 0 /10%);
          color: ${color.whiteColor};
          font-family: ${fontFamily.demiBold};
          border-radius: 0 5px 5px 0;
          span {
            border-left: 2px solid ${color.whiteColor};
          }
        }
        span {
          min-height: 40px;
          /* height: 100%; */
          display: flex;
          align-items: center;
          padding: 5px 10px !important;
          cursor: pointer !important;
          text-overflow: unset;
          white-space: normal;
        }
      }
    }
  }
`;
