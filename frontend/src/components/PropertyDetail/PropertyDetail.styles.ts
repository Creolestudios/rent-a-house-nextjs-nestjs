import styled from 'styled-components';
import { color, fontFamily } from '@/styles/variable';

export const PropertyDetailWrapper = styled.div``;

export const HeaderBreadcrumbs = styled.div`
  padding: 16px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
  .ant-breadcrumb {
    margin-right: 15px;
    @media screen and (max-width: 600px) {
      margin-right: 0;
    }
    ol {
      li {
        display: flex;
        align-items: center;
        &.ant-breadcrumb-separator {
          display: flex;
          align-items: center;
          .anticon {
            svg {
              transform: rotate(-90deg);
            }
          }
        }
        a {
          cursor: pointer !important;
          /* font-family: ${fontFamily.ptBold}; */
          &.ant-breadcrumb-link {
            cursor: pointer !important;
            font-family: ${fontFamily.ptRegular};
            color: ${color.greyColor};
            svg {
              cursor: pointer !important;
              path {
                cursor: pointer !important;
              }
            }
          }
        }
        .ant-breadcrumb-link {
          color: ${color.primaryColor};
          font-family: ${fontFamily.ptBold};
          font-size: 14px;
          line-height: 19px;
          text-transform: capitalize;
          display: flex;
          align-items: center;
        }
        .ant-breadcrumb-separator {
          display: flex;
          align-items: center;
          svg {
            transform: rotate(-90deg);
          }
        }
        &:last-child {
          .ant-breadcrumb-separator {
            display: none;
          }
        }
      }
    }
  }
  .right {
    margin-left: auto;
    @media screen and (max-width: 600px) {
      margin: 10px 0 10px auto;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      display: flex;
      align-items: center;
      li {
        padding: 0 8px;
        margin-right: 10px;
        color: #777777;
        font-size: 12px;
        line-height: 15px;
        font-family: ${fontFamily.ptBold};
        display: flex;
        align-items: center;
        cursor: pointer !important;
        span {
          cursor: pointer !important;
        }
        svg {
          margin-right: 10px;
          cursor: pointer !important;
          path {
            cursor: pointer !important;
            stroke: #777777;
          }
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;

export const PropertyDetailViewWrapper = styled.div``;

export const ImageViewWrapper = styled.div`
  margin-bottom: 15px;
  .parent {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    border-radius: 8px;
    overflow: hidden;
    div {
      /* padding: 21%; */
      padding: 24%;
      /* min-height: 148px; */
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      @media screen and (max-width: 767px) {
        padding: 18%;
      }
      @media screen and (max-width: 575px) {
        padding: 20%;
      }
      .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px;
        background: rgba(0 0 0 / 50%);
        /* background: rgba(255, 255, 255, 0.01); */
        backdrop-filter: blur(1px);
        span {
          color: ${color.whiteColor};
          font-family: ${fontFamily.ptBold};
          &:first-child {
            font-size: 36px;
            line-height: 46px;
          }
          &:last-child {
            text-decoration: underline;
          }
        }
      }
      .map-view {
        position: absolute;
        top: 10px;
        right: 15px;
        background: #ffffff;
        border-radius: 8px;
        padding: 8px;
        min-height: auto;
        color: #265ebb;
        font-family: ${fontFamily.ptBold};
        cursor: pointer !important;
        svg {
          margin: 0 8px 0 6px;
          path {
            color: #265ebb;
          }
        }
      }
    }
  }

  .div1 {
    grid-area: 1 / 1 / 5 / 4;
    @media screen and (max-width: 767px) {
      grid-area: 1 / 1 / 3 / 5;
    }
  }
  .div2 {
    grid-area: 1 / 4 / 3 / 6;
    @media screen and (max-width: 767px) {
      grid-area: 1 / 5 / 3 / 8;
    }
  }
  .div3 {
    grid-area: 3 / 4 / 5 / 6;
    @media screen and (max-width: 767px) {
      grid-area: 3 / 1 / 3 / 5;
    }
  }
  .div4 {
    grid-area: 1 / 6 / 3 / 8;
    @media screen and (max-width: 767px) {
      grid-area: 3 / 5 / 4 / 8;
    }
  }
  .div5 {
    grid-area: 3 / 7 / 5 / 8;
    @media screen and (max-width: 767px) {
      grid-area: 5 / 1 / 4 / 5;
    }
  }
  .div6 {
    grid-area: 3 / 6 / 5 / 7;
    @media screen and (max-width: 767px) {
      grid-area: 5 / 5 / 4 / 8;
    }
  }

  .title-content {
    margin-top: 15px;
    .title {
      font-size: 22px;
      line-height: 28px;
      color: ${color.blackColor};
      font-family: ${fontFamily.ptBold};
      margin-bottom: 4px;
      @media screen and (max-width: 991px) {
        font-size: 20px;
        line-height: 26px;
      }
      @media screen and (max-width: 767px) {
        font-size: 18px;
        line-height: 22px;
      }
    }
    p {
      font-size: 14px;
      line-height: 18px;
      color: ${color.greyColor};
      font-family: ${fontFamily.ptRegular};
      margin-bottom: 4px;
      @media screen and (max-width: 767px) {
        margin-bottom: 8px;
      }
    }
    .rate-detail {
      display: flex;
      align-items: center;
      .rate {
        font-size: 20px;
        line-height: 32px;
        font-family: ${fontFamily.ptRegular};
        color: ${color.primaryColor};
        margin-right: 4px;
        @media screen and (max-width: 991px) {
          font-size: 18px;
          line-height: 30px;
        }
        @media screen and (max-width: 767px) {
          font-size: 16px;
          line-height: 28px;
          margin-right: 8px;
        }
      }
      .badge {
        background: #f2f4f9;
        border: 1px solid rgba(38, 94, 187, 0.1);
        border-radius: 40px;
        color: #8396b6;
        padding: 6px 12px 6px 8px;
        font-size: 12px;
        font-family: ${fontFamily.ptBold};
        @media screen and (max-width: 767px) {
          padding: 6px 8px;
        }
        svg {
          margin-right: 4px;
        }
      }
    }
  }
`;

export const PropertyDetailContentWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  @media screen and (max-width: 991px) {
    flex-direction: column-reverse;
  }
  > .left {
    margin-right: 20px;
    flex: 1;
    @media screen and (max-width: 991px) {
      margin-right: 15px;
    }
    @media screen and (max-width: 991px) {
      margin: 0;
    }
  }
  > .right {
    max-width: 420px;
    width: 100%;
    position: sticky;
    top: 80px;
    align-self: flex-start;
    margin-bottom: 30px;
    @media screen and (max-width: 1199px) {
      max-width: 350px;
    }
    @media screen and (max-width: 991px) {
      max-width: 300px;
    }
    @media screen and (max-width: 991px) {
      position: unset;
      max-width: 100%;
      margin-bottom: 20px;
    }
  }

  .spacification-wrapper {
    margin-bottom: 20px;
    ul {
      border: 1px solid #e7e7e7;
      border-radius: 8px;
      padding: 10px;
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 20px;
      li {
        width: 219px;
        padding: 8px 16px 8px 16px;
        margin: 0;
        min-height: 50px;
        display: flex;
        align-items: center;
        font-size: 16px;
        line-height: 20px;
        color: ${color.blackColor};
        font-family: ${fontFamily.ptBold};
        @media screen and (max-width: 767px) {
          min-height: 35px;
          padding: 12px;
          width: 50%;
          font-size: 14px;
          /* flex: 1; */
        }
        @media screen and (max-width: 480px) {
          width: 100%;
        }
        svg {
          margin-right: 10px;
        }
      }
    }
    .spec-info {
      background: #f7f7f7;
      border: 1px solid rgba(38, 94, 187, 0.1);
      border-radius: 8px;
      padding: 10px 12px 10px 12px;
      display: flex;
      align-items: center;
      color: #8396b6;
      font-size: 14px;
      line-height: 22px;
      font-family: ${fontFamily.ptBold};
      margin-bottom: 20px;
      @media screen and (max-width: 767px) {
        line-height: 19px;
      }
      svg {
        margin-right: 14px;
        font-size: 20px;
        @media screen and (max-width: 767px) {
          font-size: 16px;
          margin-right: 10px;
        }
      }
    }
    p {
      font-size: 14px;
      line-height: 22px;
      font-family: ${fontFamily.ptRegular};
      margin-bottom: 20px;
      color: ${color.blackColor};
      @media screen and (max-width: 767px) {
        margin-bottom: 15px;
      }
    }
    .spec-list {
      font-size: 14px;
      line-height: 22px;
      font-family: ${fontFamily.ptRegular};
      color: ${color.blackColor};

      ul {
        border: none;
        border-radius: none;
        padding: 0;
        display: unset;
        li {
          width: 100%;
          font-size: 14px;
          line-height: 22px;
          font-family: ${fontFamily.ptRegular};
          margin: 0;
          padding: 0;
          min-height: auto;
        }
      }
    }
  }
  .read {
    max-height: 238px;
    overflow: hidden;
  }
  .read-more {
    color: ${color.primaryColor};
    font-family: ${fontFamily.ptBold};
    text-decoration: underline;
    cursor: pointer !important;
  }
`;

export const InfoListWrapper = styled.div`
  margin-bottom: 35px;
  @media screen and (max-width: 991px) {
    margin-bottom: 20px;
  }
  h2 {
    @media screen and (max-width: 991px) {
      font-size: 20px;
      line-height: 26px;
    }
    @media screen and (max-width: 767px) {
      margin: 0;
    }
  }
  .header-wrap {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    @media screen and (max-width: 767px) {
      margin-bottom: 10px;
    }
    div {
      color: ${color.primaryColor};
      font-size: 14px;
      line-height: 24px;
      font-family: ${fontFamily.ptBold};
      margin-left: 10px;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 33.33%;
      min-height: 44px;
      padding: 10px;
      color: ${color.blackColor};
      font-size: 14px;
      display: flex;
      align-items: center;
      text-transform: capitalize;
      font-family: ${fontFamily.ptBold};
      @media screen and (max-width: 600px) {
        width: 50%;
        min-height: 40px;
      }
      @media screen and (max-width: 480px) {
        width: 100%;
        min-height: 35px;
      }
      img {
        filter: contrast(0) sepia(100%) hue-rotate(354deg) brightness(1.4)
          saturate(20.28);
        margin-right: 10px;
        width: 17px;
        height: 17px;
      }
    }
    &.single-line {
      li {
        width: 100%;
      }
    }
  }
`;

export const PrefferedTenantWrap = styled.div`
  h2 {
    @media screen and (max-width: 991px) {
      font-size: 20px;
      line-height: 26px;
    }
    @media screen and (max-width: 767px) {
      margin: 0;
    }
  }
  .tenant-detail {
    border: 1px solid #e7e7e7;
    border-radius: 8px;
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 40px;
    @media screen and (max-width: 991px) {
      padding: 15px;
      margin-bottom: 20px;
    }
    .block {
      display: flex;
      min-height: 36px;
      @media screen and (max-width: 767px) {
        min-height: 32px;
      }
      label {
        min-width: 150px;
        color: ${color.greyColor};
        font-size: 14px;
        line-height: 20px;
        font-family: ${fontFamily.ptBold};
        margin-right: 8px;
        padding-left: 20px;
        display: flex;
        align-items: center;
        @media screen and (max-width: 991px) {
          padding-left: 0;
        }
      }
      span {
        flex: 1;
        color: ${color.blackColor};
        font-size: 14px;
        line-height: 20px;
        font-family: ${fontFamily.ptBold};
        display: flex;
        align-items: center;
      }
    }
  }
`;

export const DocumentsWrapper = styled.div`
  margin-bottom: 30px;
  @media screen and (max-width: 991px) {
    margin-bottom: 20px;
  }
  h2 {
    @media screen and (max-width: 991px) {
      font-size: 20px;
      line-height: 26px;
    }
    @media screen and (max-width: 767px) {
      margin: 0;
    }
  }
  .sub-title {
    font-size: 14px;
    line-height: 19px;
    text-align: left;
  }
  .doc-proof {
    display: flex;
    align-items: center;
    padding: 12px 40px 12px 20px;
    background: #f7f7f7;
    border: 1px solid rgba(38, 94, 187, 0.1);
    border-radius: 8px;
    width: fit-content;
    margin-top: 20px;
    @media screen and (max-width: 991px) {
      padding: 12px;
    }
    .icon {
      margin-right: 20px;
      @media screen and (max-width: 991px) {
        margin-right: 15px;
      }
      svg {
        @media screen and (max-width: 600px) {
          width: 20px;
          height: 20px;
        }
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      span {
        font-family: ${fontFamily.ptBold};
        &:first-child {
          font-size: 16px;
          line-height: 20px;
          color: ${color.blackColor};
          margin-bottom: 2px;
        }
        &:last-child {
          font-size: 14px;
          line-height: 20px;
          color: #8396b6;
        }
      }
    }
  }
`;

export const RentSummeryWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px 40px 20px 40px;
  margin-bottom: 30px;
  @media screen and (max-width: 991px) {
    padding: 15px;
    margin-bottom: 20px;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    li {
      margin: 0;
      padding: 11px 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      position: relative;
      @media screen and (max-width: 991px) {
        padding: 10px 0;
      }
      &:last-child {
        border: none;
      }
      div {
        font-family: ${fontFamily.ptBold};
        font-size: 14px;
        line-height: 19px;
        &.label {
          margin-right: 20px;
          color: ${color.blackColor};
        }
        &.text {
          span {
            color: ${color.blackColor};
            display: flex;
            align-items: center;
            svg {
              margin-right: 8px;
            }
            &.rate {
              color: ${color.secondaryColor};
              span {
                color: ${color.blackColor};
                margin-left: 2px;
              }
            }
          }
          .add-btn {
            background: ${color.primaryColor};
            border-radius: 8px;
            padding: 6px 12px 6px 12px;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${color.whiteColor};
            cursor: pointer;
          }
        }
      }
      ul {
        background: #f7f7f7;
        padding: 20px;
        width: 100%;
        margin-top: 12px;
        @media screen and (max-width: 991px) {
          padding: 15px;
        }
        li {
          border: none;
          @media screen and (max-width: 991px) {
            padding: 5px 0;
          }
        }
      }
    }
  }
`;

export const CancelationPolicyWrapper = styled.div`
  margin-bottom: 30px;
  @media screen and (max-width: 991px) {
    margin-bottom: 20px;
  }
  h2 {
    @media screen and (max-width: 991px) {
      font-size: 20px;
      line-height: 26px;
    }
    @media screen and (max-width: 767px) {
      margin: 0;
    }
  }
  .policy-content {
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin-top: 20px;
    @media screen and (max-width: 991px) {
      padding: 15px;
    }
    .title {
      font-size: 16px;
      line-height: 20px;
      font-family: ${fontFamily.ptBold};
      color: ${color.blackColor};
      margin-bottom: 20px;
    }
    ul {
      padding: 0;
      margin: 0;

      li {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        &:last-child {
          margin-bottom: 0;
        }
        div {
          font-family: ${fontFamily.ptBold};
          font-size: 14px;
          line-height: 18px;
          &.label {
            color: ${color.greyColor};
          }
          &.seprator {
            color: ${color.greyColor};
            margin: 0 3px;
          }
          &.text {
            &.refund {
              color: ${color.secondaryColor};
            }
            &.no-refund {
              color: #fc7272;
            }
          }
        }
      }
    }
  }
`;

export const PropertyFaqWrapper = styled.div`
  margin-bottom: 30px;
  @media screen and (max-width: 991px) {
    margin-bottom: 20px;
  }
  h2 {
    @media screen and (max-width: 991px) {
      font-size: 20px;
      line-height: 26px;
    }
    @media screen and (max-width: 767px) {
      margin: 0;
    }
  }
  .faq-block {
    padding-top: 20px;
  }
`;

export const PropertyMemberWrapper = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 40px;
  margin-bottom: 30px;
  @media screen and (max-width: 1199px) {
    padding: 20px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
  .left {
    padding-right: 20px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    margin-right: 0;
    min-width: 190px;
    @media screen and (max-width: 991px) {
      min-width: 220px;
    }
    @media screen and (max-width: 600px) {
      padding-right: 0;
      border: none;
      min-width: 100%;
    }
    .member-detail {
      .avatar {
        position: relative;
        width: 108px;
        height: 108px;
        margin-bottom: 12px;
        @media screen and (max-width: 991px) {
          width: 100px;
          height: 100px;
        }
        @media screen and (max-width: 600px) {
          width: 80px;
          height: 80px;
        }
        .ant-avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          @media screen and (max-width: 991px) {
            width: 100px !important;
            height: 100px !important;
          }
          @media screen and (max-width: 600px) {
            width: 80px !important;
            height: 80px !important;
          }
        }
        .badge {
          position: absolute;
          right: 10px;
          bottom: 0;
        }
      }
      .title {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding-bottom: 4px;
        margin-bottom: 8px;
        width: 100%;
        font-size: 20px;
        line-height: 25px;
        text-align: left;
        @media screen and (max-width: 991px) {
          font-size: 18px;
          line-height: 22px;
        }
      }
      .lang {
        display: flex;
        align-items: center;
        span {
          color: ${color.blackColor};
          font-family: ${fontFamily.ptBold};
          margin-right: 3px;
        }
        ul {
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
          list-style-type: none;
          li {
            color: ${color.primaryColor};
            font-size: 14px;
            line-height: 22x;
            font-family: ${fontFamily.ptBold};
            margin-right: 3px;
            position: relative;
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
      .last-seen {
        color: ${color.greyColor};
        font-family: ${fontFamily.ptBold};
        font-size: 14px;
        line-height: 18px;
        margin-top: 3px;
      }
      .ant-btn {
        width: 100%;
        background: ${color.primaryColor};
        padding: 12px 20px 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        font-family: ${fontFamily.ptBold};
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: capitalize;
        color: ${color.whiteColor};
        border: none;
        margin-top: 12px;
        min-height: 38px;
        cursor: pointer !important;
        span {
          cursor: pointer !important;
        }
      }
      .list {
        padding: 0;
        margin: 15px 0 0;
        list-style-type: none;
        @media screen and (max-width: 600px) {
          margin: 15px 0 15px;
        }
        li {
          font-size: 14px;
          line-height: 19px;
          color: ${color.blackColor};
          font-family: ${fontFamily.ptBold};
          padding: 3px 0;
          display: flex;
          align-items: center;
          svg {
            margin-right: 12px;
          }
        }
      }
    }
  }
  .right {
    padding-left: 20px;
    flex: 1;
    @media screen and (max-width: 600px) {
      padding-left: 0;
    }
    .response-block {
      background: #f7f7f7;
      border-radius: 4px;
      padding: 40px;
      margin-bottom: 20px;
      @media screen and (max-width: 1199px) {
        padding: 20px;
      }
      @media screen and (max-width: 600px) {
        padding: 15px;
      }
      div {
        font-size: 16px;
        line-height: 25px;
        color: ${color.secondaryColor};
        font-family: ${fontFamily.ptBold};
        label {
          margin-right: 2px;
        }
      }
    }
    .success-list {
      background: #f7f7f7;
      border-radius: 4px;
      padding: 40px 25px;
      margin-bottom: 20px;
      @media screen and (max-width: 1199px) {
        padding: 20px;
      }
      @media screen and (max-width: 600px) {
        padding: 15px;
      }
      ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        @media screen and (max-width: 991px) {
          flex-direction: column;
        }
        li {
          width: calc(33.33% - 13.4px);
          margin-right: 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          &:last-child {
            margin-bottom: 0;
          }
          @media screen and (max-width: 991px) {
            width: 100%;
            margin-right: 0;
            margin-bottom: 15px;
            flex-direction: row;
          }
          &:last-child {
            margin-right: 0;
          }
          span {
            display: block;
            font-size: 14px;
            line-height: 20px;
            color: ${color.blackColor};
            font-family: ${fontFamily.ptBold};
          }
          svg {
            margin-bottom: 14px;
            width: 22px;
            height: 22px;
            @media screen and (max-width: 991px) {
              margin-right: 15px;
              margin-bottom: 0;
            }
            @media screen and (max-width: 600px) {
              margin-right: 12px;
              width: 18px;
              height: 18px;
            }
            path {
              stroke-width: 2;
              stroke: ${color.secondaryColor};
            }
          }
          &:first-child {
            svg {
              path {
                stroke-width: 1.5;
              }
            }
          }
        }
      }
    }
    .report-user {
      display: flex;
      align-items: center;
      .ant-btn {
        min-height: 36px;
        background: none;
        border: none;
        border-radius: none;
        box-shadow: none;
        padding: 8px 10px 8px 10px;
        display: flex;
        align-items: center;
        cursor: pointer !important;
        span {
          cursor: pointer !important;
          color: ${color.secondaryColor};
          text-decoration: underline;
          font-family: ${fontFamily.ptBold};
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
  }
`;

export const CheckAvailabilityWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
  @media screen and (max-width: 991px) {
    margin-bottom: 20px;
    padding: 15px;
  }
  .header {
    display: flex;
    align-items: center;
    .ant-avatar {
      margin-right: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 991px) {
        width: 50px !important;
        height: 50px !important;
      }
    }
    .detail {
      .title {
        font-size: 24px;
        line-height: 31px;
        font-family: ${fontFamily.ptBold};
        color: ${color.blackColor};
        margin-bottom: 4px;
        @media screen and (max-width: 991px) {
          font-size: 22px;
          line-height: 28px;
        }
        @media screen and (max-width: 991px) {
          font-size: 20px;
          line-height: 26px;
        }
        @media screen and (max-width: 767px) {
          font-size: 18px;
          line-height: 24px;
        }
      }
      .sub-title {
        font-size: 16px;
        line-height: 20px;
        color: ${color.primaryColor};
        font-family: ${fontFamily.ptBold};
        text-align: left;
        @media screen and (max-width: 767px) {
          font-size: 15px;
          line-height: 18px;
        }
      }
    }
  }
  .content {
    padding: 24px 0;
    margin: 24px 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-left: none;
    border-right: none;
    @media screen and (max-width: 991px) {
      padding: 15px 0;
      margin: 15px 0;
    }
    .filter-content {
      .block-content {
        clear: both;
        display: flex;
        flex-wrap: wrap;
        .block-item {
          width: calc(50% - 7.5px);
          margin-right: 15px;
          @media screen and (max-width: 991px) {
            width: calc(50% - 7.5px);
            margin-right: 15px;
          }
          @media screen and (max-width: 480px) {
            margin-right: 0;
            width: 100%;
            margin-bottom: 10px;
          }
          &:last-child {
            margin-right: 0;
          }
          .ant-input-affix-wrapper {
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-right: 0;
            border-right-width: 3px !important;
            border-right-color: ${color.primaryColor} !important;
            /* box-shadow: inset -3px 0px 0px #ff904c; */
            border-radius: 8px;
            height: 36px;
            padding: 4px 12px;
            .ant-input-prefix {
              margin-right: 10px;
              svg {
                width: 14px;
                height: 14px;
                path {
                  stroke: ${color.primaryColor};
                  stroke-opacity: 1;
                }
              }
            }
            .ant-input {
              padding: 0;
              box-shadow: none;
              border: none !important;
              border-radius: 0;
              height: 100%;
              font-size: 12px;
              font-family: ${fontFamily.ptBold};
              color: ${color.blackColor};
              &::placeholder {
                color: ${color.greyColor};
                font-family: ${fontFamily.ptRegular};
              }
            }
          }
          .ant-input {
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-right: 0;
            border-right-width: 3px !important;
            border-right-color: ${color.primaryColor} !important;
            /* box-shadow: inset -3px 0px 0px #ff904c; */
            border-radius: 8px;
            height: 36px;
            padding: 4px 12px;
            font-size: 12px;
            font-family: ${fontFamily.ptBold};
            color: ${color.blackColor};
            &::placeholder {
              color: ${color.greyColor};
              font-family: ${fontFamily.ptRegular};
            }
          }
          .date-wrapper {
            display: flex;
            align-items: center;
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-right-width: 3px !important;
            border-right-color: ${color.primaryColor} !important;
            /* box-shadow: inset -3px 0px 0px #ff904c; */
            border-radius: 8px;
            padding: 10px 15px;
            position: relative;
            min-height: 54px;
            @media screen and (max-width: 991px) {
              padding: 12px;
              min-height: 50px;
            }
            .placeholder-text {
              position: absolute;
              left: 46px;
              top: 10px;
              font-size: 12px;
              color: ${color.greyColor};
              line-height: 12px;
              font-family: ${fontFamily.ptRegular};
              @media screen and (max-width: 991px) {
                left: 38px;
                top: 8px;
              }
            }
            .icon {
              margin-right: 14px;
              display: flex;
              align-items: center;
              @media screen and (max-width: 991px) {
                margin-right: 10px;
              }
            }
            .ant-picker {
              padding: 0;
              width: 97%;
              border: none;
              .ant-picker-input {
                input {
                  font-size: 14px;
                  font-family: ${fontFamily.ptBold};
                  color: ${color.blackColor};
                  position: absolute;
                  top: -3px;
                  &:focus {
                    border: none;
                  }
                  &::placeholder {
                    color: ${color.blackColor};
                    font-family: ${fontFamily.ptRegular};
                  }
                }
              }
              &.ant-picker-focused {
                box-shadow: none;
              }
            }
          }
        }
      }
    }
    .ant-btn {
      background: ${color.primaryColor};
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 38px;
      padding: 12px 20px 12px 20px;
      width: 100%;
      margin-top: 24px;
      border: none;
      box-shadow: none;
      cursor: pointer !important;
      @media screen and (max-width: 991px) {
        margin-top: 20px;
        padding: 12px 15px;
      }
      span {
        cursor: pointer !important;
        color: ${color.whiteColor};
        font-size: 14px;
        font-family: ${fontFamily.ptBold};
        text-transform: capitalize;
      }
    }
  }
  .min-time-error {
    color: #ad0000;
    text-align: center;
    padding-top: 10px;
    font-family: ${fontFamily.ptRegular};
    @media screen and (max-width: 991px) {
      font-size: 12px;
    }
  }
  .per-month {
    display: flex;
    margin-bottom: 24px;
    @media screen and (max-width: 991px) {
      margin-bottom: 15px;
    }
    label {
      color: ${color.greenColor};
      font-family: ${fontFamily.ptBold};
    }
    .seperator {
      margin-left: 5px;
      color: ${color.greenColor};
    }
    span {
      margin-left: auto;
      color: ${color.blackColor};
      font-family: ${fontFamily.ptBold};
    }
    .per-month-rent {
    }
  }
  .footer {
    .block {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      svg {
        margin-right: 10px;
      }
      .link {
        font-size: 14px;
        line-height: 16px;
        color: ${color.primaryColor};
        font-family: ${fontFamily.ptBold};
        text-decoration: underline;
        cursor: pointer !important;
      }
    }
  }
`;

export const SafeGuardWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 991px) {
    padding: 12px;
  }
  img {
    margin-right: 30px;
    @media screen and (max-width: 991px) {
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }
    @media screen and (max-width: 767px) {
      width: 40px;
      height: 40px;
    }
  }
  .content {
    .title {
      margin-bottom: 2px;
      font-size: 16px;
      line-height: 20px;
      font-family: ${fontFamily.ptBold};
      color: ${color.blackColor};
    }
    p {
      color: ${color.greyColor};
      font-family: ${fontFamily.ptRegular};
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 0;
    }
  }
`;

export const SimilarPropertyWrapper = styled.div`
  .card-wrapper {
    margin-bottom: 50px;
  }
`;
