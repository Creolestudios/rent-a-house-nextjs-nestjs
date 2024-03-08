import styled from 'styled-components';
import { color, fontFamily } from '@/styles/variable';

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  .card-item {
    width: calc(25% - 15px);
    margin-right: 20px;
    margin-bottom: 30px;
    @media screen and (max-width: 991px) {
      width: calc(25% - 7.5px);
      margin-right: 10px;
    }
    @media screen and (max-width: 767px) {
      width: calc(50% - 5.5px);
      margin-right: 10px;
      margin-bottom: 15px;
      &:nth-child(even) {
        margin-right: 0;
      }
    }
    @media screen and (max-width: 600px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 15px;
      &:nth-child(3n) {
        margin-right: 0;
      }
      &:nth-child(even) {
        margin-right: 0;
      }
    }
    &:nth-child(4n) {
      margin-right: 0;
    }
  }
  /* &.favorate { */
  .list-wrapper {
    padding-bottom: 8px !important;
    color: #5b5b5b;
    font-family: ${fontFamily.ptRegular};
  }
  /* } */
`;

export const CommonCardWrapper = styled.div`
  width: 100%;
  &.map-cardview {
    width: 250px;
    .slick-slider {
      .slick-list {
        .slick-track {
          .slick-slide {
            height: 120px;
          }
        }
      }
    }
  }
`;

export const CardImgWrapper = styled.div`
  position: relative;
  @media screen and (max-width: 991px) {
    .slick-list {
      height: 230px;
    }
  }
  @media screen and (max-width: 767px) {
    .slick-list {
      height: 220px;
    }
  }
  > .icon {
    width: 24px;
    height: 24px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export const CardContent = styled.div`
  padding: 10px 0;
  h3 {
    color: ${color.blackColor};
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @media screen and (max-width: 600px) {
      -webkit-line-clamp: unset;
    }
  }
  .list-wrapper {
    display: flex;
    list-style-type: none;
    padding: 0 0 8px;
    margin: 0 0 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    li {
      margin-right: 8px;
      padding-right: 14px;
      position: relative;
      font-size: 14px;
      line-height: 18px;
      color: #5b5b5b;
      font-family: ${fontFamily.ptRegular};
      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: ${color.greyColor};
      }
      &:last-child {
        margin-right: 0;
        &::after {
          display: none;
        }
      }
    }
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      margin-right: 15px;
      .rate {
        font-size: 16px;
        font-family: ${fontFamily.ptBold};
        color: ${color.blackColor};
        margin-bottom: 4px;
        span {
          font-size: 14px;
          font-family: ${fontFamily.ptRegular};
          color: #5b5b5b;
        }
      }
      .date {
        font-size: 14px;
        line-height: 18px;
        font-family: ${fontFamily.ptRegular};
        color: #5b5b5b;
      }
    }
    .right {
      .icon {
        width: 41px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 16px;
        background: ${color.primaryColor};
        cursor: pointer !important;
        @media screen and (max-width: 767px) {
          width: 35px;
          height: 25px;
        }
        svg {
          width: 17px;
          height: 10px;
          cursor: pointer !important;
          path {
            cursor: pointer !important;
          }
        }
      }
    }
  }
`;

export const CardSliderWrapper = styled.div`
  .slick-slider {
    width: 100%;
    .slick-arrow {
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(4px);
      cursor: pointer !important;
      &::before {
        display: none;
      }
      .icon {
        color: #000;
        z-index: 10;
        font-size: 10px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer !important;
        svg,
        path {
          cursor: pointer !important;
        }
      }
      &.slick-prev {
        left: 8px;
        &::before {
          color: #000;
        }
      }
      &.slick-next {
        right: 8px;
        &::before {
          color: #000;
        }
      }
    }

    .slick-dots {
      position: absolute;
      bottom: 0;
      display: flex !important;
      justify-content: center;
      padding: 10px 0;
      /* left: 50%;
      transform: translateX(-50%); */

      li {
        margin: 0 3px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        height: auto;
        &:last-child {
          margin: 0;
        }
        &.slick-active {
          button {
            &::before {
              color: rgba(255, 255, 255, 1);
            }
          }
        }
        button {
          width: auto;
          height: auto;
          &::before {
            width: auto;
            height: auto;
            color: rgba(255, 255, 255, 0.5);
          }
        }
      }
    }
    .slick-list {
      border-radius: 8px;
      overflow: hidden;
      .slick-track {
        .slick-slide {
          /* width: 265px !important; */
          height: 265px;
          @media screen and (max-width: 767px) {
            height: 220px;
          }
          > div {
            height: 100%;
            .item {
              height: 100%;
              display: flex !important;
              align-items: center;
              justify-content: center;
              .bg-img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
  }
`;
