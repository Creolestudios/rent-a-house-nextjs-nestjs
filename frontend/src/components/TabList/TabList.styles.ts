import styled from 'styled-components';
import { fontFamily, color } from '@/styles/variable';

export const TabListWrapper = styled.div`
  ul {
    margin: 0;
    padding: 4px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 34px;
    overflow: hidden;
    display: flex;
    align-items: center;
    box-shadow: 0px 4px 12px rgba(123, 94, 76, 0.15);
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 36px;
      font-size: 16px;
      text-transform: capitalize;
      font-family: ${fontFamily.ptBold};
      background: ${color.whiteColor};
      color: #5b5b5b;
      border-radius: 34px;
      cursor: pointer !important;
      @media screen and (max-width: 991px) {
        padding: 10px 25px;
      }
      @media screen and (max-width: 767px) {
        padding: 8px 20px;
        font-size: 14px;
      }

      &.fill {
        background: ${color.primaryColor};
        color: ${color.whiteColor};
      }
    }
  }
  &.tablist-small {
    ul {
      li {
        padding: 4px 20px;
        font-size: 14px;
      }
    }
  }
`;
