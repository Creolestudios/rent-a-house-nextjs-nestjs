import styled from 'styled-components';
import { fontFamily, color } from '@/styles/variable';
import logo from '@/assets/images/logo.svg';

export const PricingWrapper = styled.div`
  .heading-section {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 80px 0;
    @media screen and (max-width: 991px) {
      padding: 60px 0;
    }
    @media screen and (max-width: 767px) {
      padding: 40px 0;
      flex-direction: column;
    }
    .left {
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 767px) {
        margin-right: 0;
      }
      h1 {
        font-size: 40px;
        line-height: 51px;
        font-family: ${fontFamily.ptBold};
        color: ${color.blackColor};
        margin-bottom: 5px;
        @media screen and (max-width: 991px) {
          font-size: 30px;
          line-height: 40px;
        }
        @media screen and (max-width: 767px) {
          font-size: 24px;
          line-height: 30px;
          text-align: center;
        }
      }
      p {
        font-size: 16px;
        line-height: 25px;
        font-family: ${fontFamily.ptRegular};
        color: ${color.greyColor};
        margin-bottom: 0;
        @media screen and (max-width: 767px) {
          font-size: 15px;
          line-height: 22px;
          text-align: center;
        }
      }
    }
    .right {
      margin-left: auto;
      @media screen and (max-width: 767px) {
        margin: 30px auto 0;
      }
    }
  }
`;

export const PricingRenterWrapper = styled.div``;

export const PricingLendlordWrapper = styled.div``;

export const PriceRenterListWrapper = styled.div`
  padding: 65px 60px;
  @media screen and (max-width: 991px) {
    padding: 40px 20px;
  }
  @media screen and (max-width: 767px) {
    padding: 40px 10px;
  }
  @media screen and (max-width: 600px) {
    padding: 40px 0;
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      display: flex;
      position: relative;
      padding-bottom: 64px;
      @media screen and (max-width: 1199px) {
        padding-bottom: 50px;
      }
      @media screen and (max-width: 767px) {
        padding-bottom: 30px;
      }
      &::before {
        content: '';
        position: absolute;
        left: 18px;
        width: 1px;
        height: 100%;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        z-index: -1;
        @media screen and (max-width: 991px) {
          left: 16px;
        }
        @media screen and (max-width: 767px) {
          left: 15px;
        }
      }
      &:last-child {
        padding-bottom: 0;
        &::before {
          display: none;
        }
      }
      .number {
        margin-right: 48px;
        width: 36px;
        height: 36px;
        border-radius: 8px;
        background: ${color.primaryColor};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${color.whiteColor};
        font-family: ${fontFamily.ptBold};
        font-size: 22px;
        @media screen and (max-width: 991px) {
          width: 32px;
          height: 32px;
          margin-right: 30px;
          font-size: 20px;
        }
        @media screen and (max-width: 767px) {
          width: 28px;
          height: 28px;
          margin-right: 10px;
          font-size: 16px;
        }
      }
      .content-area {
        display: flex;
        align-items: center;
        width: 100%;
        flex: 1;
        @media screen and (max-width: 600px) {
          flex-direction: column;
          align-items: flex-start;
        }
        .left {
          padding-right: 36px;
          flex: 1;
          position: relative;
          @media screen and (max-width: 991px) {
            padding-right: 30px;
          }
          @media screen and (max-width: 767px) {
            padding-right: 15px;
          }
          @media screen and (max-width: 600px) {
            padding-right: 0;
          }
          &::after {
            content: '';
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 1px;
            height: 100px;
            border-right: 1px dashed rgba(121, 121, 121, 0.5);
            @media screen and (max-width: 600px) {
              display: none;
            }
          }
          h2 {
            font-size: 20px;
            line-height: 31px;
            font-family: ${fontFamily.ptBold};
            color: ${color.blackColor};
            margin-bottom: 12px;
            margin-top: 0;
            @media screen and (max-width: 767px) {
              font-size: 18px;
              line-height: 22px;
              margin-top: 3px;
              margin-bottom: 6px;
            }
          }
          p {
            font-size: 16px;
            line-height: 24px;
            color: ${color.greyColor};
            font-family: ${fontFamily.ptRegular};
            margin-bottom: 0;
            @media screen and (max-width: 767px) {
              font-size: 15px;
              line-height: 22px;
            }
          }
          .link {
            font-size: 16px;
            line-height: 18px;
            font-family: ${fontFamily.ptRegular};
            color: ${color.secondaryColor};
            margin-top: 12px;
            cursor: pointer !important;
            width: fit-content;
            @media screen and (max-width: 767px) {
              font-size: 15px;
              line-height: 15px;
            }
          }
        }
        .right {
          max-width: 376px;
          flex: 1;
          padding-left: 36px;
          @media screen and (max-width: 991px) {
            padding-left: 30px;
          }
          @media screen and (max-width: 767px) {
            padding-left: 15px;
            max-width: 240px;
          }
          @media screen and (max-width: 600px) {
            padding-left: 0;
            max-width: 100%;
            margin-top: 15px;
          }
          .fees {
            margin-bottom: 12px;
            @media screen and (max-width: 767px) {
              margin-bottom: 10px;
            }
            div {
              font-size: 18px;
              line-height: 24px;
              font-family: ${fontFamily.ptBold};
              color: ${color.primaryColor};
              @media screen and (max-width: 767px) {
                font-size: 16px;
                line-height: 22px;
              }
            }
          }
          p {
            font-size: 16px;
            line-height: 20px;
            color: ${color.greyColor};
            font-family: ${fontFamily.ptRegular};
            margin-bottom: 12px;
            @media screen and (max-width: 767px) {
              font-size: 15px;
              margin-bottom: 10px;
            }
          }
          .ant-btn {
            height: auto;
            background: none;
            border: none;
            box-shadow: none;
            color: ${color.secondaryColor};
            font-family: ${fontFamily.ptBold};
            font-size: 14px;
            line-height: 18px;
            text-transform: uppercase;
            padding: 0;
            display: flex;
            align-items: center;
            cursor: pointer !important;
            position: relative;
            text-align: left;
            padding-bottom: 3px;
            @media screen and (max-width: 767px) {
              font-size: 12px;
              line-height: 15px;
            }
            &::before {
              content: '';
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: 1px;
              background: ${color.secondaryColor};
            }
            span {
              cursor: pointer !important;
              white-space: normal;
            }
            svg {
              color: ${color.secondaryColor};
              cursor: pointer !important;
              path {
                cursor: pointer !important;
                stroke: ${color.secondaryColor};
              }
            }
          }
        }
      }
    }
  }
`;

export const FaqSectionWrapper = styled.div`
  padding: 65px 0 0;
  border-top: 1px solid #eee;
  @media screen and (max-width: 1199px) {
    padding: 50px 0 0;
  }
  @media screen and (max-width: 767px) {
    padding: 40px 0 0;
    h3 {
      margin: 0 auto 0;
    }
  }
`;

export const FaqWrapper = styled.div`
  padding: 60px 0 0;
  @media screen and (max-width: 1199px) {
    padding: 50px 0 0;
  }
  @media screen and (max-width: 767px) {
    padding: 40px 0 0;
  }
  .ant-collapse {
    background: none;
    border: none;
    .ant-collapse-item {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      margin-bottom: 12px;
      overflow: hidden;
      position: relative;

      &:last-child {
        margin-bottom: 0;
      }
      .ant-collapse-header {
        position: unset;
        background: #f9f9f9;
        border-radius: 8px;
        padding: 22px 60px 22px 20px;
        @media screen and (max-width: 991px) {
          padding: 15px 40px 15px 15px;
        }
        @media screen and (max-width: 767px) {
          padding: 12px 40px 12px 12px;
        }
        .ant-collapse-expand-icon {
          position: absolute;
          right: 20px;
          padding: 0;
          top: 50%;
          transform: translateY(-50%);
          @media screen and (max-width: 991px) {
            right: 10px;
          }
          .anticon {
            width: 24px;
            height: 24px;
            background: ${color.primaryColor};
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            @media screen and (max-width: 991px) {
              width: 20px;
              height: 20px;
            }
            svg {
              transform: rotate(-90deg);
              path {
                stroke: ${color.whiteColor};
              }
            }
          }
        }
        .ant-collapse-header-text {
          font-size: 16px;
          line-height: 20px;
          color: ${color.blackColor};
          font-family: ${fontFamily.ptBold};
          @media screen and (max-width: 767px) {
            font-size: 15px;
            line-height: 19px;
          }
        }
      }
      .ant-collapse-content {
        border: none;
        .ant-collapse-content-box {
          padding: 0 60px 20px 20px;
          @media screen and (max-width: 991px) {
            padding: 0 40px 15px 15px;
          }
          @media screen and (max-width: 767px) {
            padding: 0 40px 12px 12px;
          }
          background: #f9f9f9;
          p {
            margin: 0;
            color: ${color.greyColor};
            font-size: 16px;
            line-height: 24px;
            font-family: ${fontFamily.ptRegular};
            @media screen and (max-width: 767px) {
              font-size: 14px;
              line-height: 19px;
            }
          }
        }
        &.ant-collapse-content-active {
        }
      }
      &.ant-collapse-item-active {
        .ant-collapse-header {
          padding: 20px 60px 5px 20px;
          @media screen and (max-width: 991px) {
            padding: 15px 40px 15px 15px;
          }
          @media screen and (max-width: 767px) {
            padding: 12px 40px 12px 12px;
          }
          .ant-collapse-expand-icon {
            .anticon {
              svg {
                transform: rotate(-180deg);
              }
            }
          }
        }
        .ant-collapse-content {
          .ant-collapse-content-box {
            padding: 0 60px 20px 20px;
            @media screen and (max-width: 991px) {
              padding: 0 40px 15px 15px;
            }
            @media screen and (max-width: 767px) {
              padding: 0 40px 12px 12px;
            }
          }
        }
      }
    }
  }
`;

export const PricingLendlordListWrapper = styled.div`
  padding: 65px 0 0;
  border-top: 1px solid #eee;
  @media screen and (max-width: 1199px) {
    padding: 50px 0 0;
  }
  @media screen and (max-width: 767px) {
    padding: 40px 0 0;
  }
  .title-wrapper {
    margin-bottom: 0;
    @media screen and (max-width: 767px) {
      margin-bottom: 0;
    }
  }
`;

export const BenifitLendlordWrapper = styled.div`
  padding: 65px 0 65px;
  border-top: 1px solid #eee;
  @media screen and (max-width: 1199px) {
    padding: 50px 0;
  }
  @media screen and (max-width: 767px) {
    padding: 40px 0 40px;
  }
  .title-wrapper {
    /* margin-bottom: 65px; */
  }
`;

export const BenifitBlockWrapper = styled.div`

  max-width: 900px;
  margin: 0 auto;
  padding: 65px 0 0;
  @media screen and (max-width: 1199px) {
    padding: 50px 0 0;
  }
  @media screen and (max-width: 767px) {
    padding: 40px 0 0;
  }
  .benifit-table {
    box-shadow: 0px 4px 12px rgba(123, 94, 76, 0.15);
    border-radius: 8px;
    overflow: hidden;
    .header {
      display: flex;
      @media screen and (max-width: 767px) {
        display: none;
      }
      div {
        height: 44px;
        flex: 1;
        padding: 10px 32px 10px 32px;
        background: ${color.secondaryColor};
        font-size: 16px;
        line-height: 20px;
        font-family: ${fontFamily.ptBold};
        color: ${color.whiteColor};
        display: flex;
        align-items: center;
        &:nth-child(2),
        &:nth-child(3) {
          justify-content: center;
        }
      }
    }
    .body-content {
      background: ${color.whiteColor};
      @media screen and (max-width: 767px) {
        padding: 15px;
      }
      .row {
        display: flex;
        @media screen and (max-width: 767px) {
          flex-direction: column;
          > div {
            position: relative;
            &:first-child {
              padding-left: 140px;
              &::before {
                content: 'Benefit';
                position: absolute;
                left: 0;
                top: 0;
                padding: 10px 10px 10px 0;
                font-size: 16px;
                line-height: 20px;
                color: ${color.secondaryColor};
                font-family: ${fontFamily.ptBold};
              }
            }
            &:nth-child(2) {
              padding-left: 140px;
              min-height: 50px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;
              &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 5px;
                padding: 10px 10px 10px 0;
                font-size: 16px;
                line-height: 20px;
                color: ${color.secondaryColor};
                font-family: ${fontFamily.ptBold};
                background-image: url(${logo.src});
                background-position: left;
                background-size: 100px;
                width: 130px;
                height: 30px;
                background-repeat: no-repeat;
              }
            }
            &:last-child {
              padding-left: 140px;
              min-height: 50px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;
              &::before {
                content: 'Other Agencies';
                position: absolute;
                left: 0;
                top: 5px;
                padding: 10px 10px 10px 0;
                font-size: 16px;
                line-height: 20px;
                color: ${color.secondaryColor};
                font-family: ${fontFamily.ptBold};
              }
            }
          }
        }
        > div {
          flex: 1;
          padding: 23px 32px 23px 32px;
          border-right: 1px solid rgba(0, 0, 0, 0.1);
          @media screen and (max-width: 991px) {
            padding: 20px;
          }
          @media screen and (max-width: 767px) {
            padding: 10px 15px;
            border: none;
          }
          &:last-child {
            border: none;
          }
          .title {
            font-size: 20px;
            line-height: 23px;
            color: ${color.secondaryColor};
            font-family: ${fontFamily.ptBold};
            margin-bottom: 4px;
            @media screen and (max-width: 991px) {
              font-size: 18px;
              line-height: 20px;
            }
          }
          p {
            font-size: 16px;
            line-height: 19px;
            font-family: ${fontFamily.ptRegular};
            color: rgba(17, 17, 17, 0.5);
            margin-bottom: 0;
            @media screen and (max-width: 991px) {
              font-size: 15px;
            }
          }
          .green-text {
            color: #6ed98c;
            font-size: 32px;
            line-height: 41px;
            font-family: ${fontFamily.ptBold};
            text-align: center;
            @media screen and (max-width: 991px) {
              font-size: 28px;
              line-height: 38px;
            }
            @media screen and (max-width: 767px) {
              font-size: 22px;
              line-height: 32px;
              text-align: left;
            }
            + p {
              text-align: center;
              @media screen and (max-width: 767px) {
                text-align: left;
              }
            }
          }
          .red-text {
            color: #fc7272;
            font-size: 32px;
            line-height: 41px;
            font-family: ${fontFamily.ptBold};
            text-align: center;
            @media screen and (max-width: 991px) {
              font-size: 28px;
              line-height: 38px;
            }
            @media screen and (max-width: 767px) {
              font-size: 22px;
              line-height: 32px;
              text-align: left;
            }
            + p {
              text-align: center;
              @media screen and (max-width: 767px) {
                text-align: left;
              }
            }
          }
          .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            svg {
              path {
                stroke-width: 1.5px;
              }
            }
            @media screen and (max-width: 767px) {
              justify-content: flex-start;
            }
          }
          &:nth-child(2),
          &:nth-child(3) {
            text-align: center;
            @media screen and (max-width: 767px) {
              text-align: left;
            }
          }
        }
      }
    }
  }
  .ant-btn {
    margin-top: 75px;
    @media screen and (max-width: 767px) {
      margin-top: 40px;
    }
  }

  .table-images{
    img{
      width: 100%;
      height: auto;
    }
  }

`;
