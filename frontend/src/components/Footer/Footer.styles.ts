import styled from 'styled-components';
import { fontFamily, color } from '@/styles/variable';

export const FooterWrapper = styled.div`
  background: #faf7f6;
  padding: 0;
  border: 1px solid #eeeeee;
`;

export const FooterTopListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 65px 0 90px;
  @media screen and (max-width: 991px) {
    padding: 50px 0;
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 767px) {
    padding: 40px 0;
  }
`;
export const FooterBottomListWrapper = styled.div`
  padding: 27px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    padding: 20px 0;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
  .copyright {
    color: ${color.greyColor};
    font-size: 14px;
    line-height: 19px;
    font-family: ${fontFamily.ptRegular};
    margin-right: 20px;
    @media screen and (max-width: 600px) {
      text-align: center;
      margin-right: 0;
    }
  }
  .social-wrapper {
    display: flex;
    align-items: center;
    @media screen and (max-width: 600px) {
      margin-bottom: 12px;
    }
    .title {
      font-size: 14px;
      line-height: 19px;
      font-family: ${fontFamily.ptBold};
      color: ${color.blackColor};
      margin-right: 27px;
    }
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      li {
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
        }
        a {
          cursor: pointer !important;
          svg {
            width: 18px;
            height: 18px;
            cursor: pointer !important;
            path {
              cursor: pointer !important;
            }
          }
        }
      }
    }
  }
`;

export const SearchBar = styled.div`
  margin-left: auto;
  @media screen and (max-width: 991px) {
    width: 100%;
    max-width: 300px;
    margin: 0 auto 40px;
  }
  @media screen and (max-width: 767px) {
    margin: 0 auto 30px;
  }
  .title {
    font-size: 20px;
    line-height: 26px;
    font-family: ${fontFamily.ptBold};
    color: ${color.blackColor};
    margin-bottom: 12px;
    position: relative;
    padding-left: 30px;
    @media screen and (max-width: 991px) {
      text-align: center;
      width: fit-content;
      margin: 0 auto 15px;
    }
    &::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 12px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: ${color.blackColor};
    }
  }
  .search-bar {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 12px rgba(123, 94, 76, 0.15);
    border-radius: 34px;
    padding: 8px 8px 8px 24px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 767px) {
      padding: 5px 8px 5px 24px;
    }
    &:hover {
      button {
        svg {
          transform: rotate(365deg) scale(1.2);
        }
      }
    }
    label {
      color: #181818;
      font-size: 12px;
      line-height: 20px;
      font-family: ${fontFamily.ptBold};
    }
    .ant-input {
      border: none !important;
      font-size: 12px;
      line-height: 20px;
      padding: 0 10px 0 0;
      font-family: ${fontFamily.ptBold};
      border-radius: 0;
      &::placeholder {
        color: #5b5b5b;
        font-family: ${fontFamily.ptRegular};
      }
      &:focus {
        box-shadow: none;
      }
    }
    button {
      width: 40px;
      height: 40px;
      background: ${color.primaryColor};
      border-radius: 50%;
      border: none;
      outline: none;
      color: ${color.whiteColor};
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer !important;
      margin-left: 15px;
      @media screen and (max-width: 767px) {
        width: 35px;
        height: 35px;
      }
      /* transition: .2s all; */
      svg {
        color: ${color.whiteColor};
        width: 12px;
        height: 12px;
        cursor: pointer !important;
        transition: 0.5s all;
        path {
          stroke: ${color.whiteColor};
          stroke-opacity: 1;
          stroke-width: 2;
          cursor: pointer !important;
        }
      }
    }
  }
`;

export const MenuListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 991px) {
    width: 100%;
    justify-content: center;
    /* margin-bottom: 40px; */
  }
  @media screen and (max-width: 480px) {
    /* margin-bottom: 20px; */
  }
`;

export const ListWrapper = styled.div`
  padding-right: 68px;
  @media screen and (max-width: 600px) {
    padding-right: 20px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    padding-right: 0;
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .title {
    font-size: 20px;
    line-height: 26px;
    font-family: ${fontFamily.ptBold};
    color: ${color.blackColor};
    margin-bottom: 12px;
    @media screen and (max-width: 767px) {
      /* text-align: center; */
      margin-bottom: 5px;
      font-size: 18px;
      line-height: 22px;
    }
    @media screen and (max-width: 480px) {
      text-align: center;
    }
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      /* margin-bottom: 5px; */
      @media screen and (max-width: 480px) {
        text-align: center;
      }
      &:last-child {
        margin-bottom: 0;
      }
      div {
        color: ${color.greyColor};
        font-size: 16px;
        line-height: 32px;
        font-family: ${fontFamily.ptRegular};
        text-transform: capitalize;
        cursor: pointer !important;
        transition: 0.2s all;
        @media screen and (max-width: 767px) {
          font-size: 15px;
          line-height: 25px;
        }
        &:hover {
          color: ${color.primaryColor};
          text-shadow: 0 0 0 ${color.primaryColor};
        }
      }
    }
  }
`;
