import styled from 'styled-components';
import { fontFamily, color } from '@/styles/variable';

export const PropertyListingWrapper = styled.div`
  .header-wrapper {
    display: flex;
    align-items: center;
    padding: 15px 0;
    margin-bottom: 35px;
    @media screen and (max-width: 767px) {
      flex-direction: column;
      margin-bottom: 15px;
      padding: 20px 0;
    }
    .title {
      font-size: 14px;
      line-height: 16px;
      color: ${color.blackColor};
      font-family: ${fontFamily.demiBold};
      margin-right: 15px;
      display: flex;
      @media screen and (max-width: 767px) {
        margin-right: 0;
        margin-bottom: 15px;
      }
      strong {
        color: ${color.primaryColor};
        font-size: 20px;
        margin-right: 5px;
      }
    }

    .right-btn-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
      @media screen and (max-width: 767px) {
        margin: 0 auto;
      }
      @media screen and (max-width: 480px) {
        .tab-list {
          ul {
            li {
              padding: 4px 10px;
            }
          }
        }
      }
      .sort-dropdown {
        margin-right: 20px;
        @media screen and (max-width: 480px) {
          margin-right: 10px;
        }
      }
    }
  }
  .list-wrapper {
    display: flex;
    padding: 0;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
    .filter {
      width: 265px;
      margin-right: 20px;
      &.mobile-filter {
        width: 100%;
        margin-right: 0;
        margin-bottom: 20px;
        display: flex;
        justify-content: flex-end;
        button {
          font-size: 14px;
          min-width: 100px;
        }
        .filter-wrap {
          position: fixed;
          right: -100%;
          top: 0;
          z-index: 9999;
          width: 320px;
          height: 100%;
          background: #fff;
          overflow-y: auto;
          border-radius: 0;
          border: none;
          box-shadow: 0 0 20px 0px rgb(0 0 0 / 10%);
          transition: 0.3s all ease-in-out;
          padding-top: 0;
          svg {
            cursor: pointer !important;
            path {
              cursor: pointer !important;
            }
          }
          > .title {
            padding-top: 20px;
            padding-bottom: 20px;
            margin-bottom: 0;
            position: sticky;
            top: 0;
            z-index: 1;
            background: ${color.whiteColor};
          }
        }
        &.filter-open {
          .filter-wrap {
            right: 0;
          }
        }
      }
    }
    .listing {
      flex: 1;
      width: calc(100% - 285px);
      @media screen and (max-width: 767px) {
        width: 100%;
      }
      .no-property-error {
        display: flex;
        justify-content: center;
        font-size: 20px;
        padding-top: 50px;
      }
      .card-wrapper {
        display: flex;
        flex-wrap: wrap;
        .card-item {
          width: calc(33.33% - 13.5px);
          margin-bottom: 30px;
          margin-right: 20px;
          @media screen and (max-width: 991px) {
            width: calc(33.33% - 10px);
            margin-right: 15px;
          }
          @media screen and (max-width: 850px) {
            width: calc(50% - 7.5px);
            margin-right: 15px;
            &:nth-child(3n) {
              margin-right: 15px !important;
            }
            &:nth-child(even) {
              margin-right: 0 !important;
            }
          }
          @media screen and (max-width: 480px) {
            width: 100%;
            margin-right: 0;
            margin-bottom: 20px;
          }
          h3 {
            text-align: left;
          }
          .list-wrapper {
            padding-bottom: 10px;
            color: ${color.greyColor};
          }
          &:nth-child(3n) {
            margin-right: 0;
          }
          .slick-slider {
          }
        }
      }
      .pagination {
        margin-top: 30px;
      }
    }
  }
  .no-property-error {
    display: flex;
    margin: auto;
    justify-content: center;
    font-size: 20px;
    padding-top: 50px;
  }
`;

export const SortListWrapper = styled.div`
  .ant-select {
    .ant-select-selector {
      box-shadow: 0px 4px 12px rgba(123, 94, 76, 0.15);
      border-radius: 40px;
      border: 1px solid rgba(0, 0, 0, 0.15) !important;
      .ant-select-selection-item {
        font-family: ${fontFamily.ptBold};
        font-size: 13px;
      }
    }
    .ant-select-arrow {
      .anticon {
        display: flex;
        align-items: center;
        svg {
          transition: 0.2s all ease-in-out;
          path {
            stroke: ${color.primaryColor};
            stroke-width: 1.8;
          }
        }
      }
    }
    &.ant-select-open {
      .ant-select-selector {
        border-color: rgba(0, 0, 0, 0.15) !important;
      }
      .ant-select-arrow {
        svg {
          transform: rotate(180deg);
        }
      }
    }
  }
  .ant-dropdown-trigger {
    border: 1px solid ${color.blackColor};
    border-radius: 20px;
    padding: 6px 16px 6px 16px;
    min-width: 97px;
    font-size: 14px;
    font-family: ${fontFamily.demiBold};
    color: ${color.blackColor};
    display: flex;
    align-items: center;
    cursor: pointer !important;
    .anticon {
      margin-left: 8px;
      margin-top: 2px;
      svg {
        cursor: pointer !important;
        width: 8px;
        height: 8px;
        path {
          cursor: pointer !important;
          stroke: ${color.blackColor};
        }
      }
    }
  }
`;

export const MapViewWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;
