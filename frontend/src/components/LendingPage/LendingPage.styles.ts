import styled from 'styled-components';
import { color, fontFamily } from '@/styles/variable';
import startImg from '@/assets/images/star.png';
import heroBorderdImg from '@/assets/images/hero-home-border.png';
import heroLine from '@/assets/images/hero-line.png';
import bgImg from '@/assets/images/line.png';
// import { IstylesProps } from './WorkList';

export const LendingWrapper = styled.div`
  .see-more-btn {
    color: ${color.primaryColor};
    font-family: ${fontFamily.ptBold};
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    position: relative;
    width: fit-content;
    margin: 0 auto;
    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: ${color.primaryColor};
    }
    svg {
      /* margin-top: 2px; */
      margin-left: 8px;
      cursor: pointer !important;
      path {
        stroke: ${color.primaryColor};
        cursor: pointer !important;
      }
    }
    a {
      cursor: pointer !important;
      color: ${color.primaryColor};
      display: flex;
      align-items: center;
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const HeroSectionWrapper = styled.div`
  background: linear-gradient(183.22deg, #03488b -1.98%, #72baff 180.76%);
  position: relative;
  margin-bottom: 90px;
  @media screen and (max-width: 1600px) {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background: rgb(0 0 0 / 20%);
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 70px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 60px;
  }
  &::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: -86px;
    background-image: url(${heroBorderdImg.src});
    width: 662px;
    height: 223px;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    @media screen and (max-width: 991px) {
      width: 412px;
      right: 0;
      bottom: -128px;
      height: 281px;
    }
    @media screen and (max-width: 767px) {
      width: 420px;
      right: -188px;
      bottom: -84px;
      height: 186px;
      background-size: 73%;
    }
    /* @media screen and (max-width: 600px) {
      width: 77.5%;
    } */
  }
  .container {
    padding: 100px 15px 100px;
    display: flex;
    background-image: url(${heroLine.src});
    background-size: 100%;
    background-position: center;
    @media screen and (max-width: 991px) {
      padding: 80px 15px 80px;
    }
    @media screen and (max-width: 767px) {
      flex-direction: column;
      padding: 40px 15px 40px;
    }
    .left {
      flex: 1;
      z-index: 99;
      @media screen and (max-width: 991px) {
        padding-right: 10px;
      }
      @media screen and (max-width: 767px) {
        padding-right: 0;
      }
    }
    .right {
      /* flex: 1; */
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      @media screen and (max-width: 991px) {
        max-width: 300px;
        padding-left: 0;
      }
      @media screen and (max-width: 767px) {
        max-width: 100%;
        padding-left: 0;
      }
      h6 {
        max-width: 300px;
        width: 100%;
        padding-right: 20px;
        position: relative;
        z-index: 1;
        @media screen and (max-width: 767px) {
          max-width: 90%;
          margin-top: 20px;
        }
        &::before {
          content: '';
          position: absolute;
          left: -20px;
          top: 5px;
          width: 16px;
          height: 16px;
          background-image: url(${startImg.src});
          background-size: 100%;
          background-position: center;
        }
      }
      .img-right {
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        img {
          width: 90%;
          height: auto;
          margin-left: auto;
          @media screen and (max-width: 991px) {
            width: 420px;
            height: auto;
          }
          @media screen and (max-width: 767px) {
            width: 310px;
            height: auto;
            margin-left: auto;
            display: flex;
            margin-right: -130px;
          }
        }
      }
    }
  }
  h1 {
    color: ${color.whiteColor};
    font-size: 40px;
    line-height: 51px;
    font-family: ${fontFamily.ptBold};
    margin-bottom: 5px;
    text-align: center;
    @media screen and (max-width: 991px) {
      font-size: 30px !important;
      line-height: 38px;
    }
    @media screen and (max-width: 767px) {
      font-size: 26px !important;
      line-height: 34px;
    }
  }
  h6 {
    color: rgba(255 255 255 / 80%);
    font-size: 16px;
    line-height: 25px;
    font-family: ${fontFamily.ptBold};
    height: fit-content;
    text-align: center;
    @media screen and (max-width: 991px) {
      font-size: 15px;
      line-height: 20px;
    }
  }
  .search-bar {
    max-width: 700px;
    margin: 64px auto 82px;
    @media screen and (max-width: 991px) {
      margin: 40px auto 40px;
      max-width: 650px;
    }
    @media screen and (max-width: 767px) {
      margin: 40px auto 40px;
    }
  }
  .count-area {
    display: flex;
    justify-content: center;
    max-width: 600px;
    margin: 0 auto;
    div {
      display: flex;
      flex-direction: column;
      margin-right: 40px;
      width: 50%;
      @media screen and (max-width: 767px) {
        margin-right: 30px;
      }
      &:last-child {
        margin-bottom: 0;
        margin-right: 0;
      }
      span {
        width: 100%;
        color: rgba(255 255 255 / 70%);
        font-size: 40px;
        line-height: 51px;
        font-family: ${fontFamily.ptBold};
        text-align: center;
        @media screen and (max-width: 1600px) {
          color: rgba(255 255 255 / 100%);
        }
        @media screen and (max-width: 991px) {
          font-size: 32px;
          line-height: 40px;
        }
        @media screen and (max-width: 767px) {
          text-align: center;
          font-size: 30px;
          line-height: 40px;
          color: rgba(255 255 255 / 100%);
        }
        &.text {
          font-size: 14px;
          line-height: 19px;
        }
      }
    }
  }
  &.auth {
    margin-bottom: 100px;
    @media screen and (max-width: 767px) {
      margin-bottom: 150px;
    }
    .container {
      padding: 50px 15px 50px;
    }
    .left {
      /* flex: unset;
      max-width: 850px; */
      position: relative;
      z-index: 999;
      h1 {
        font-size: 32px;
      }
      h6 {
        font-size: 14px;
        line-height: 22px;
      }
      .search-bar {
        margin-top: 20px;
        margin-bottom: -80px;
        @media screen and (max-width: 767px) {
          margin-top: 30px;
          margin-bottom: -150px;
        }
        @media screen and (max-width: 600px) {
          /* margin-bottom: -115px !important; */
        }
        .ant-form {
          .ant-form-item {
            max-width: 200px;
            @media screen and (max-width: 991px) {
              max-width: 180px;
            }
            @media screen and (max-width: 767px) {
              max-width: unset;
            }
          }
        }
      }
      .count-area {
        display: none;
      }
    }
    .right {
      h6 {
        display: none;
      }
      .img-right {
        transform: translateX(200px);
        @media screen and (max-width: 767px) {
          transform: none;
        }
        img {
          @media screen and (max-width: 767px) {
            width: 296px;
          }
        }
      }
    }
    &::before {
      right: -200px;
    }
  }
`;

export const SearchFormWrapper = styled.div`
  background: #fff;
  border-radius: 40px;
  padding: 8px 8px 8px 24px;
  width: 100%;
  height: 64px;
  box-shadow: 0px 4px 12px rgba(80, 98, 130, 0.15);
  @media screen and (max-width: 991px) {
    height: 60px;
  }
  @media screen and (max-width: 767px) {
    margin: 0 auto;
    height: auto;
  }
  @media screen and (max-width: 767px) {
    border-radius: 8px;
    max-width: 350px;
    margin: 0 auto;
    padding: 15px;
    background: none;
    padding: 0;
    box-shadow: none;
    border-radius: none;
  }
  .ant-form {
    display: flex;
    align-items: center;
    height: 100%;
    @media screen and (max-width: 767px) {
      flex-wrap: wrap;
    }
    &:hover {
      button {
        svg {
          transform: rotate(365deg) scale(1.2);
        }
      }
    }
    .date-wrap {
      display: flex;
      align-items: center;
      flex: 1;
      padding-left: 20px;
      border-left: 1px solid rgba(0, 0, 0, 0.2);
      @media screen and (max-width: 767px) {
        border-left: none;
        padding-left: 0;
        box-shadow: 0px 4px 12px rgb(80 98 130 / 15%);
        border-radius: 40px;
        /* overflow: hidden; */
      }
      .ant-form-item {
        border-radius: 0 !important;
        position: relative;
        box-shadow: none !important;
        @media screen and (max-width: 767px) {
          margin-bottom: 0 !important;
          flex: 1 !important;
          &:first-child {
            border-radius: 40px 0 0 40px !important;
            padding: 9px 15px 9px 20px !important;
          }
          &:nth-child(2) {
            padding: 10px 8px 10px 15px !important;
            &::before {
              content: '';
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              left: 0;
              width: 1px;
              background: #ccc;
              height: 40px;
            }
          }
          &:last-child {
            flex: unset !important;
            border-left: 0;
            border-radius: 0 40px 40px 0 !important;
            height: auto;
            &::before {
              display: none;
            }
          }
        }
      }
    }
    .ant-form-item {
      margin-bottom: 0;
      padding: 0 24px;
      max-width: 200px;
      flex: 1;
      height: 40px;
      border-left: 1px solid rgba(0, 0, 0, 0.2);
      &:last-child {
        height: auto;
      }
      @media screen and (max-width: 1199px) {
        padding: 0 20px;
      }
      @media screen and (max-width: 991px) {
        padding: 0 8px;
      }
      @media screen and (max-width: 767px) {
        &:first-child {
          width: 100%;
          flex: 100%;
          max-width: 100%;
          padding: 0;
          background: #fff;
          border-radius: 40px;
          padding: 9px 15px 9px 20px !important;
          box-shadow: 0px 4px 12px rgba(80, 98, 130, 0.15);
          overflow: hidden;
          margin-bottom: 10px;
          height: 60px;

          .ant-form-item-label {
            padding: 0;
          }
        }
        &:nth-child(2) {
          background: #fff;
          padding: 10px 8px 10px 20px !important;
          height: 60px;
          border: none;

          .ant-form-item-label {
            padding: 0;
          }
        }
        &:nth-child(3) {
          background: #fff;
          padding: 10px 8px 10px 8px !important;
          height: 60px;
          border: none;
          position: relative;
          &::before {
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            width: 1px;
            background: #ccc;
            height: 40px;
          }
          .ant-form-item-label {
            padding: 0;
          }
        }
        &:last-child {
          background: #fff;
          padding: 10px 10px 10px 5px !important;
          height: 60px !important;
          border: none;
          flex: unset;
          display: flex;
          align-items: center;
          .ant-form-item-label {
            padding: 0;
          }
          button {
          }
        }
      }
      &:first-child {
        padding-left: 0;
        border-left: 0;
      }
      &:last-child {
        padding: 0;
        border-left: 0;
        min-width: auto;
        max-width: auto;
        margin-left: auto;
        flex: unset;
      }
      .ant-form-item-row {
        .ant-form-item-label {
          label {
            color: #181818;
            font-size: 12px;
            line-height: 20px;
            font-family: ${fontFamily.ptBold};
            margin-bottom: 0;
            white-space: normal;
            height: auto;
          }
        }
        .ant-form-item-control {
          .ant-form-item-control-input {
            min-height: 20px;

            input {
              border: none !important;
              font-size: 12px;
              font-family: ${fontFamily.ptBold};
              color: ${color.blackColor};
              border-radius: 0;
              min-height: 20px;
              padding: 0;
              &::placeholder {
                font-family: ${fontFamily.ptRegular};
                color: #5b5b5b;
              }
            }
            .ant-input-affix-wrapper {
              min-height: 20px;
              border: none;
              border-radius: 0;
              padding: 0 0;
            }
          }
          .ant-picker {
            border: none;
            padding: 0;
            min-height: 20px;
            &.ant-picker-focused {
              box-shadow: none;
            }
            input {
              padding: 0 !important;
              font-size: 12px;
              font-family: ${fontFamily.ptBold};
              color: ${color.blackColor};
              &::placeholder {
                font-family: ${fontFamily.ptRegular};
                color: #5b5b5b;
              }
            }
          }
        }
      }
      button {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: ${color.primaryColor};
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: none;
        cursor: pointer !important;
        @media screen and (max-width: 991px) {
          width: 38px;
          height: 38px;
        }
        svg {
          width: 12px;
          height: 12px;
          transition: 0.4s all;
          cursor: pointer !important;
          path {
            stroke-width: 2;
            stroke: ${color.whiteColor};
            stroke-opacity: 1;
            cursor: pointer !important;
          }
        }
      }
    }
  }

  .google-searcharea-wrapper {
    .autocomplete-dropdown-container {
      padding: 5px 0;
      .suggestion-item {
        padding: 5px 10px;
        background: #fff;
        cursor: pointer !important;
        &.suggestion-item--active {
          padding: 5px 10px;
          background: #fafafa;
        }
      }
    }
  }
`;

export const FeaturePlaceSectionWrapper = styled.div`
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 55px;
  @media screen and (max-width: 767px) {
    padding-bottom: 40px;
  }
  .sub-title {
    @media screen and (max-width: 767px) {
      margin: 0 auto;
    }
  }
`;

export const WorksSectionWrapper = styled.div`
  padding: 65px 0;
  border-bottom: 1px solid #eeeeee;
  @media screen and (max-width: 767px) {
    padding: 40px 0;
  }
  .section-title {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
    .left {
      display: flex;
      flex-direction: column;
      margin-right: 15px;
      @media screen and (max-width: 767px) {
        margin-right: 0;
        h2,
        h3 {
          text-align: center;
          margin: 0 auto 15px;
        }
      }
    }
    .right {
      margin-left: auto;
      @media screen and (max-width: 767px) {
        margin: 15px auto 0;
      }
    }
  }
`;

export const WorkListWrapper = styled.div`
  padding: 65px 0 65px !important;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    padding: 40px 0 20px !important;
    flex-wrap: wrap;
  }
  .list-item {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 52px 40px 20px;
    width: 306px;
    position: relative;
    @media screen and (max-width: 1199px) {
      /* width: 280px; */
      padding: 40px 30px 20px;
    }
    @media screen and (max-width: 991px) {
      width: calc(33.33% - 10px);
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
    @media screen and (max-width: 767px) {
      width: 100%;
      padding: 30px;
      margin-bottom: 20px;
      margin-right: 0;
    }
    &::after {
      content: '';
      position: absolute;
      left: 97%;
      top: 50%;
      transform: translateY(-50%);
      width: 114px;
      height: 30px;
      background-image: url(${bgImg.src});
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
      @media screen and (max-width: 1199px) {
        display: none;
      }
    }
    &:last-child {
      margin-bottom: 0;
      &::after {
        display: none;
      }
    }
    .number {
      position: absolute;
      left: 20px;
      top: 15px;
      svg {
        width: auto;
        height: 30px;
        @media screen and (max-width: 991px) {
          height: 24px;
        }
      }
    }
    .list-img {
      margin: 0 auto 44px;
      display: flex;
      justify-content: center;
      @media screen and (max-width: 991px) {
        margin: 0 auto 30px;
      }
      @media screen and (max-width: 767px) {
        margin: 0 auto 20px;
      }
      svg {
        width: 182px;
        @media screen and (max-width: 991px) {
          width: 150px;
          height: 120px;
        }
        @media screen and (max-width: 767px) {
          width: 140px;
          height: 100px;
        }
      }
    }
    .title {
      font-size: 20px;
      line-height: 26px;
      color: ${color.blackColor};
      font-family: ${fontFamily.ptBold};
      text-align: center;
      margin-bottom: 12px;
      @media screen and (max-width: 767px) {
        font-size: 18px;
        line-height: 24px;
      }
    }
    p {
      font-family: ${fontFamily.ptRegular};
      font-size: 16px;
      line-height: 24px;
      color: ${color.greyColor};
      text-align: center;
      margin-bottom: 0;
      @media screen and (max-width: 767px) {
        font-size: 15px;
        line-height: 20px;
      }
    }
  }
`;

export const ExperienceSectionWrapper = styled.div`
  padding: 65px 0 0;
  @media screen and (max-width: 767px) {
    padding: 40px 0 0;
  }
  .section-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
    .title {
      max-width: 350px;
      font-size: 40px;
      line-height: 51px;
      margin-right: 20px;
      @media screen and (max-width: 1199px) {
        font-size: 30px;
        line-height: 40px;
      }
      @media screen and (max-width: 767px) {
        font-size: 20px;
        line-height: 30px;
        margin-right: 0;
        margin-bottom: 15px;
        width: 100%;
        text-align: center;
        max-width: 100%;
      }
    }
    .sub-title {
      max-width: 560px;
      @media screen and (max-width: 991px) {
        font-size: 15px;
        line-height: 20px;
      }
      @media screen and (max-width: 767px) {
        max-width: 100%;
        text-align: center;
        margin-right: 0;
        width: 100%;
        margin-bottom: 0;
      }
    }
  }
  .find-place {
    cursor: pointer;
  }
`;

export const ExperienceListWrapper = styled.div`
  padding: 65px 0;
  display: flex;
  @media screen and (max-width: 767px) {
    padding: 40px 0 30px;
    flex-wrap: wrap;
  }
  .list {
    width: 360px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 20px;
    margin-right: 20px;
    @media screen and (max-width: 991px) {
      padding: 15px;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
      padding: 10px;
      margin-right: 0;
      margin-bottom: 20px;
    }
    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
    .list-img {
      width: 100%;
      margin-bottom: 24px;
      object-fit: cover;
      @media screen and (max-width: 1199px) {
        height: 350px;
        margin-bottom: 15px;
      }
      @media screen and (max-width: 991px) {
        height: 250px;
        margin-bottom: 15px;
      }
      @media screen and (max-width: 767px) {
        object-position: center;
      }
    }
    .title {
      font-size: 16px;
      line-height: 20px;
      color: ${color.blackColor};
      font-family: ${fontFamily.ptBold};
    }
    .sub-title {
      color: ${color.secondaryColor};
      font-size: 14px;
      line-height: 22px;
      font-family: ${fontFamily.ptRegular};
    }
  }
`;
