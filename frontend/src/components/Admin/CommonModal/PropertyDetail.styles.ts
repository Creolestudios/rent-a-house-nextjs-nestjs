import styled from 'styled-components';
import { color, fontFamily } from '@/styles/variable';

export const PropertyDetailWrapper = styled.div`
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  .block {
    padding: 12px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      padding-bottom: 0;
      border-bottom: none;
    }
    label {
      min-width: 200px;
      font-size: 14px;
      line-height: 18px;
      color: ${color.greyColor};
      font-family: ${fontFamily.mediumFont};
    }
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
      li {
        padding: 0;
        margin: 0;
        .ant-avatar {
          margin-right: 8px;
          + .label{
            color: ${color.greyColor};
          }
        }
        .label {
          font-size: 14px;
          line-height: 20px;
          color: ${color.blackColor};
          font-family: ${fontFamily.mediumFont};
        }
        .text {
          font-size: 14px;
          line-height: 20px;
          color: ${color.primaryColor};
          font-family: ${fontFamily.mediumFont};
          &.underline {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
