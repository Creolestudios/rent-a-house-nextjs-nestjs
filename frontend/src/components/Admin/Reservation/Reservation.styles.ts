import styled from 'styled-components';
import { fontFamily, color } from '@/styles/variable';

export const MessageReservationHistoryWrapper = styled.div`
  .title {
    margin-bottom: 20px;
  }
  .box {
    padding: 20px;
  }
`;

export const ReservationDetailWrapper = styled.div`
  .box {
    padding: 20px;
    margin-bottom: 20px;
  }
  .title-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    .btn-wrapper {
      padding-left: 20px;
      margin-left: auto;
      button {
        min-width: 108px;
        margin-left: 20px;
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
`;

export const MessageHistoryListWrapper = styled.div``;

export const HistoryList = styled.div`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  .header-content {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .ant-avatar {
      margin-right: 8px;
    }
    .user {
      font-size: 18px;
      line-height: 22px;
      font-family: ${fontFamily.mediumFont};
      color: ${color.blackColor};
      margin-right: 8px;
      text-transform: capitalize;
    }
    .badge {
      background: #f3f3f3;
      border-radius: 8px;
      padding: 2px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${color.secondaryColor};
      font-size: 12px;
      font-family: ${fontFamily.mediumFont};
      text-transform: capitalize;
      margin-right: 8px;
    }
    .time {
      color: ${color.greyColor};
      font-size: 12px;
      font-family: ${fontFamily.regularFont};
      line-height: 16px;
    }
  }
  .content-text {
    p {
      font-size: 14px;
      line-height: 18px;
      font-family: ${fontFamily.regularFont};
      color: ${color.blackColor};
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .status {
    position: relative;
    text-align: center;
    margin-top: 20px;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.1);
      height: 1px;
      width: 100%;
      z-index: 1;
    }
    h3 {
      color: ${color.primaryColor};
      font-family: ${fontFamily.mediumFont};
      font-size: 12px;
      line-height: 25px;
      width: fit-content;
      margin: 0 auto;
      background: #fff;
      padding: 0 20px;
      z-index: 1;
      position: relative;
      text-transform: capitalize;
    }
  }
`;
