import styled from 'styled-components';
import { fontFamily, color } from '@/styles/variable';

export const FaqBlockWrapper = styled.div`
  .header-wrapper {
    padding: 65px 0;
    display: flex;
    @media screen and (max-width: 1199px) {
      padding: 50px 0;
    }
    @media screen and (max-width: 767px) {
      padding: 40px 0;
      flex-direction: column;
    }
    .title {
      font-size: 40px;
      line-height: 51px;
      font-family: ${fontFamily.ptBold};
      color: ${color.blackColor};
      margin-right: 130px;
      max-width: 415px;
      width: 100%;
      @media screen and (max-width: 1199px) {
        font-size: 35px;
        line-height: 45px;
        margin-right: 60px;
      }
      @media screen and (max-width: 991px) {
        font-size: 28px;
        line-height: 38px;
      }
      @media screen and (max-width: 767px) {
        font-size: 20px;
        line-height: 28px;
        margin-right: 0;
        text-align: center;
        margin-bottom: 15px;
        max-width: 100%;
      }
      @media screen and (max-width: 600px) {
        max-width: 100%;
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
`;

export const FaqSectionBlockWrapper = styled.div`
  padding: 65px 0 0;
  border-top: 1px solid #eee;
  @media screen and (max-width: 1199px) {
    padding: 50px 0 0;
  }
  @media screen and (max-width: 767px) {
    padding: 40px 0 0;
  }
  h3 {
    @media screen and (max-width: 767px) {
      margin: 0 auto;
    }
  }
  .faq-wrapper {
    display: flex;
    padding: 60px 0 65px;
    @media screen and (max-width: 1199px) {
      padding: 50px 0;
    }
    @media screen and (max-width: 767px) {
      padding: 40px 0;
      flex-direction: column;
    }
    .left {
      max-width: 208px;
      width: 100%;
      margin-right: 64px;
      @media screen and (max-width: 1199px) {
        margin-right: 30px;
      }
      @media screen and (max-width: 991px) {
        margin-right: 20px;
      }
      @media screen and (max-width: 767px) {
        max-width: 320px;
        margin: 0 auto 15px;
      }
    }
    .right {
      flex: 1;
      .faq-block {
        padding: 0;
      }
    }
    .search {
      &::before {
        display: none;
      }
      .search-wrapper {
        display: flex;
        align-items: center;
        padding: 6px 6px 6px 20px;
        height: 36px;
        min-width: 200px;
        background: none;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 32px;
        @media screen and (max-width: 767px) {
          padding: 6px 6px 6px 12px;
        }
        input {
          border: none !important;
          flex: 1;
          margin-right: 10px;
          padding: 0;
          font-size: 14px;
          font-family: ${fontFamily.ptBold};
          background: none;
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
              transform: rotate(360deg) scale(1.1);
            }
          }
        }
      }
    }
    .badge-wrapper {
      display: flex;
      padding: 25px 0;
      .badge {
        padding: 6px 12px 6px 12px;
        border-radius: 4px;
        border: 1px solid #dbe4f2;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
        font-family: ${fontFamily.ptRegular};
        margin-right: 10px;
        color: ${color.secondaryColor};
        cursor: pointer !important;
        &.active {
          box-shadow: 0px 2px 4px rgba(38, 94, 187, 0.15);
          background: ${color.secondaryColor};
          color: ${color.whiteColor};
          border: 1px solid ${color.secondaryColor};
        }
      }
    }
  }
`;
