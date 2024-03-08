import styled from 'styled-components';
import { fontFamily, color } from '@/styles/variable';

export const AboutUsWrapper = styled.div`
  padding: 65px 0;
  @media screen and (max-width: 1199px) {
    padding: 50px 0;
  }
  @media screen and (max-width: 767px) {
    padding: 40px 0;
  }
  .header-wrapper {
    display: flex;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
    .title {
      font-size: 40px;
      line-height: 51px;
      font-family: ${fontFamily.ptBold};
      color: ${color.blackColor};
      margin-right: 130px;
      white-space: nowrap;
      @media screen and (max-width: 1199px) {
        font-size: 35px;
        line-height: 45px;
        margin-right: 60px;
      }
      @media screen and (max-width: 991px) {
        font-size: 28px;
        line-height: 40px;
      }
      @media screen and (max-width: 767px) {
        font-size: 20px;
        line-height: 28px;
        margin-right: 0;
        margin-bottom: 15px;
        text-align: center;
      }
    }
    p {
      font-size: 16px;
      line-height: 24px;
      color: ${color.greyColor};
      font-family: ${fontFamily.ptRegular};
      text-align: justify;
      margin-bottom: 0;
      @media screen and (max-width: 767px) {
        font-size: 15px;
        line-height: 22px;
        text-align: center;
      }
    }
  }
  .img-wrapper {
    display: flex;
    gap: 10px;
    margin-top: 15px;
    .img-grid {
      height: auto;
      flex: 1;
      gap: 10px;
      display: flex;
      flex-direction: column;
      justify-content: end;
      div {
        background: #cdcdcd;
        height: 90px;
        border-radius: 8px;
        overflow: hidden;
        img {
          object-fit: cover;
          height: 100%;
          width: 100%;
          border-radius: 5px;
        }
      }
      &.index0 {
        div {
          height: 400px;
        }
      }
      &.index1 {
        div {
          &:first-child {
            height: 250px;
          }
        }
      }
      &.index2 {
        div {
          &:last-child {
            height: 200px;
          }
        }
      }
      &.index3 {
        div {
          &:last-child {
            height: 250px;
          }
        }
      }
      &.index4 {
        div {
          &:last-child {
            height: 200px;
          }
        }
      }
    }
    &.mobile-img-wrapper {
      column-count: 3;
      display: block;
      margin-top: 25px;
      @media screen and (max-width: 480px) {
        column-count: 2;
      }
      img {
        width: 100%;
        height: auto;
        margin: 5px;
        border-radius: 5px;
      }
    }
  }
`;

export const IntroductionSectionWrapper = styled.div`
  display: flex;
  padding: 65px 0;
  border-top: 1px solid #eee;
  @media screen and (max-width: 767px) {
    padding: 40px 0;
  }
  .container {
    display: flex;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
  .left {
    flex: 1;
    margin-right: 40px;
    @media screen and (max-width: 767px) {
      margin-right: 0;
      margin-bottom: 20px;
    }
    .title {
      font-size: 40px;
      line-height: 51px;
      font-family: ${fontFamily.ptBold};
      margin-bottom: 12px;
      color: ${color.blackColor};
      @media screen and (max-width: 991px) {
        font-size: 30px;
        line-height: 40px;
      }
      @media screen and (max-width: 767px) {
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 15px;
        text-align: center;
      }
    }
    p {
      font-family: ${fontFamily.ptRegular};
      font-size: 14px;
      line-height: 22px;
      text-align: justify;
      margin-bottom: 20px;
      color: ${color.greyColor};
      @media screen and (max-width: 767px) {
        text-align: center;
      }
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
    }
  }
  .right {
    flex: 1;
    .img-wrapper {
      @media screen and (max-width: 767px) {
        display: flex;
        justify-content: center;
      }
      img {
        border-radius: 8px;
        object-fit: cover;
        @media screen and (max-width: 991px) {
          max-width: 540px;
          width: 100%;
          height: auto;
        }
      }
    }
  }
`;

export const WorkIntroWrapper = styled.div`
  padding: 65px 0;
  border: 1px solid #eee;
  border-left: 0;
  border-right: 0;
  @media screen and (max-width: 767px) {
    padding: 40px 0;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    color: ${color.greyColor};
    font-family: ${fontFamily.ptRegular};
    text-align: justify;
    margin: 0;
    @media screen and (max-width: 767px) {
      font-size: 15px;
      line-height: 22px;
    }
  }
  .header-wrapper {
    display: flex;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
    .title {
      font-size: 40px;
      line-height: 51px;
      font-family: ${fontFamily.ptBold};
      color: ${color.blackColor};
      margin-right: 130px;
      white-space: nowrap;
      @media screen and (max-width: 1199px) {
        font-size: 35px;
        line-height: 45px;
        margin-right: 60px;
      }
      @media screen and (max-width: 991px) {
        font-size: 28px;
        line-height: 40px;
      }
      @media screen and (max-width: 767px) {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 15px;
        text-align: center;
        margin-right: 0;
      }
    }
    p {
      @media screen and (max-width: 767px) {
        text-align: center;
      }
    }
  }
  .img-wrapper {
    padding: 65px 0;
    @media screen and (max-width: 767px) {
      padding: 30px 0;
    }
    img {
      border-radius: 8px;
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
  }
  .content-area {
    p {
      margin-bottom: 20px;
      font-size: 18px;
      line-height: 27px;
      @media screen and (max-width: 767px) {
        font-size: 15px;
        line-height: 22px;
      }
    }
    ul {
      margin: 0;
      padding: 0 0 0 25px;

      li {
        font-size: 18px;
        line-height: 27px;
        color: ${color.greyColor};
        font-family: ${fontFamily.ptRegular};
        position: relative;
        @media screen and (max-width: 767px) {
          font-size: 16px;
          line-height: 22px;
        }
      }
    }
  }
`;
