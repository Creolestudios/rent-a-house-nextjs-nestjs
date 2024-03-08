import styled from 'styled-components';
import { fontFamily, color } from '@/styles/variable';
import arrowImg from '@/assets/images/icons/down-arrow.svg';

export const DashboardWrapper = styled.div`
  .chart-title-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    .title {
      font-family: ${fontFamily.manropeBold};
      font-size: 16px;
      line-height: 25px;
      color: ${color.blackColor};
      margin-right: 20px;
    }
    .year-badge {
      .ant-select-selector {
        padding: 0 12px;
        height: 32px;
        background: ${color.whiteColor};
        border: 1px solid ${color.secondaryColor};
        border-radius: 30px;
        cursor: pointer !important;
        .ant-select-selection-item {
          padding: 0;
          color: ${color.secondaryColor};
          font-family: ${fontFamily.ptBold};
          font-size: 12px;
          display: flex;
          align-items: center;
          cursor: pointer !important;
        }
      }
      .ant-select-arrow {
        inset-inline-end: 8px;
        .anticon {
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            width: 9px;
            cursor: pointer !important;
            path {
              cursor: pointer !important;
              stroke: ${color.secondaryColor};
            }
          }
        }
      }
      &.ant-select-focused,
      &:hover {
        .ant-select-selector {
          border-color: ${color.secondaryColor} !important;
          box-shadow: none !important;
        }
      }
    }
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1199px) {
    margin-bottom: 10px;
  }
`;

export const InfoCardWrapper = styled.div`
  /* width: calc(33.33% - 20px); */
  flex: calc(33.33% - 14px);
  margin-right: 20px;
  padding: 24px;
  margin-bottom: 20px;
  background: #ffffff;
  border-bottom: 2px solid #03488b;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  &:nth-child(4), &:nth-child(5), &:nth-child(6){
    border-color: ${color.primaryColor} !important;
  }
  &:nth-child(3n) {
    margin-right: 0;
    @media screen and (max-width: 1199px) {
      margin-right: 15px;
    }
  }
  @media screen and (max-width: 1440px) {
    padding: 20px;
  }
  @media screen and (max-width: 1199px) {
    flex: calc(50% - 14px);
    padding: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
    &:nth-child(even) {
      margin-right: 0;
    }
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    .title {
      color: rgba(0 0 0 / 30%);
      font-size: 14px;
      line-height: 22px;
      font-family: ${fontFamily.manropeSemiBold};
      margin-right: 10px;
    }
    .numbers {
      font-size: 24px;
      line-height: 38px;
      font-family: ${fontFamily.manropeBold};
      color: ${color.blackColor};
      margin-right: 10px;
      @media screen and (max-width: 1199px) {
        font-size: 20px;
        line-height: 30px;
      }
    }
    .high-rate {
      border: 1px solid #0ae353;
      padding: 2px 8px;
      border-radius: 15px;
      color: ${color.darkGreenColor};
      display: flex;
      align-items: center;
      justify-content: center;
      height: fit-content;
      font-size: 12px;
      line-height: 20px;
      font-family: ${fontFamily.manropeSemiBold};
      .anticon {
        margin-right: 5px;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
