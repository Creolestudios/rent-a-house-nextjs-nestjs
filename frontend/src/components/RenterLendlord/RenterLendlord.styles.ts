import styled from 'styled-components';
import { fontFamily, color } from '@/styles/variable';

export const RenterLendlordWrapper = styled.div`
  .heading-section {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 80px 0;
    .left {
      margin-right: 20px;
      display: flex;
      align-items: center;
      h1 {
        font-size: 40px;
        line-height: 51px;
        font-family: ${fontFamily.ptBold};
        color: ${color.blackColor};
        margin-right: 75px;
        max-width: 188px;
        margin-bottom: 0;
      }
      p {
        font-size: 16px;
        line-height: 25px;
        font-family: ${fontFamily.ptRegular};
        color: ${color.greyColor};
        max-width: 500px;
        margin-bottom: 0;
      }
    }
    .right {
      margin-left: auto;
    }
  }
`;

export const RentLendlordListWrapper = styled.div`
  /* padding-top: 65px; */
  /* padding-bottom: 65px; */
  .list {
    padding: 40px;
    display: flex;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin-bottom: 15px;
    .img-wrapper {
      width: 175px;
      margin-right: 50px;
      display: flex;
    }
    .content {
      .title {
        font-size: 20px;
        line-height: 26px;
        color: ${color.blackColor};
        font-family: ${fontFamily.ptBold};
        margin-bottom: 12px;
      }
      p {
        font-size: 16px;
        line-height: 24px;
        color: ${color.greyColor};
        font-family: ${fontFamily.ptRegular};
        margin-bottom: 15px;
      }
    }
    &:nth-child(odd) {
    }
    &:nth-child(even) {
      flex-direction: row-reverse;
      .img-wrapper {
        margin-right: 0;
        margin-left: 50px;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  .work-list-wrapper {
    padding: 0 0 65px;
  }
`;

export const GetStartedWrapper = styled.div`
  padding: 65px 0 65px 80px;
  margin-top: 80px;
  /* margin-bottom: 65px; */
  background: linear-gradient(183.22deg, #03488b -1.98%, #72baff 180.76%),
    #f7f7f7;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  display: flex;
  align-items: center;
  position: relative;
  @media screen and (max-width: 1199px) {
    margin-top: 60px;
  }
  @media screen and (max-width: 991px) {
    padding: 50px 0 50px 60px;
  }
  @media screen and (max-width: 767px) {
    padding: 40px 0 30px 40px;
    margin-top: 40px;
  }
  @media screen and (max-width: 600px) {
    padding: 30px 0 0 15px;
    flex-direction: column;
  }
  .left {
    margin-right: 20px;
    max-width: 420px;
    @media screen and (max-width: 991px) {
      max-width: 350px;
    }
    @media screen and (max-width: 767px) {
      max-width: 260px;
    }
    @media screen and (max-width: 600px) {
      margin-right: 0;
      margin-bottom: 20px;
      max-width: 100%;
      padding-right: 15px;
    }
  }
  .right {
    margin-left: auto;
    .right-img {
      position: absolute;
      right: 0;
      bottom: 0;
      object-fit: cover;
      border-radius: 0 0 8px 0;
      @media screen and (max-width: 1199px) {
        width: 500px;
        height: auto;
      }
      @media screen and (max-width: 991px) {
        width: 400px;
        height: auto;
      }
      @media screen and (max-width: 767px) {
        width: 300px;
        height: auto;
      }
      @media screen and (max-width: 600px) {
        position: relative;
      }
      @media screen and (max-width: 480px) {
        width: 250px;
      }
    }
  }
  h2 {
    font-size: 32px;
    line-height: 40px;
    color: ${color.whiteColor};
    font-family: ${fontFamily.ptBold};
    margin-bottom: 2px;
    @media screen and (max-width: 991px) {
      font-size: 28px;
      line-height: 38px;
    }
    @media screen and (max-width: 767px) {
      font-size: 24px;
      line-height: 34px;
    }
    @media screen and (max-width: 600px) {
      max-width: 100%;
      text-align: center;
    }
  }
  p {
    font-size: 14px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.8);
    font-family: ${fontFamily.ptRegular};
    margin-bottom: 10px;
    display: inline-block;
    @media screen and (max-width: 991px) {
    }
    @media screen and (max-width: 767px) {
      line-height: 22px;
    }
    @media screen and (max-width: 600px) {
      text-align: center;
    }
  }
  .ant-btn {
    background: #ffffff;
    border-radius: 24px;
    height: 34px;
    padding: 8px 24px 8px 24px;
    display: inline-flex;
    align-items: center;
    border: none;
    outline: none;
    margin-top: 15px;
    cursor: pointer !important;
    @media screen and (max-width: 600px) {
      margin: 20px auto 0;
      display: flex;
    }
    span {
      font-family: ${fontFamily.ptBold};
      font-size: 14px;
      color: ${color.secondaryColor};
      margin: 0;
      cursor: pointer !important;
    }
    svg {
      margin-left: 10px;
      cursor: pointer !important;
      path {
        cursor: pointer !important;
        stroke: ${color.secondaryColor};
      }
    }
  }
`;
