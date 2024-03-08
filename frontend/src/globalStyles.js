// globalStyles.js
import styled, { createGlobalStyle } from 'styled-components';
import { fontFamily, color } from './styles/variable';
// import { IstylesProps } from './components/DashboardChart/DashboardChart';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${fontFamily.ptRegular};
    /* overflow: hidden; */
    overflow: ${(props) => (props.location === 'admin' ? 'hidden' : 'auto')};
    overflow-x: hidden;
    background:  #fff;
    color: ${color.blackColor};
    /* background:  #f9f9f9; */
    #__next{
      height: 100%;
    }
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(0 0 0 / 20%); 
  }

  .ant-form {
    .ant-form-item {
      .ant-form-item-row {
        .ant-form-item-control{
          .ant-input{
            &.rmBorder{
              border:none !important;
            }
          }
        }
      }
    }
  }

  input[type="number"]::-webkit-inner-spin-button, 
  input[type="number"]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

  

  /* btn */
  .custom-btn {
    background: ${color.primaryColor};
    border: 1px solid ${color.primaryColor} !important;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 10px 36px 10px 36px;
    color: ${color.whiteColor};
    height: 40px;
    margin: 0 auto;
    cursor: pointer !important;
    span {
      cursor: pointer !important;
      color: ${color.whiteColor};
      font-size: 16px;
      font-family: ${fontFamily.ptBold};
    }
    svg {
      cursor: pointer !important;
      path {
        cursor: pointer !important;
      }
    }
  }

  .ant-select{
    .ant-select-selector{
      border: 1px solid rgba(0, 0, 0, 0.3) !important;
    }
    &.ant-select-focused, &.ant-select-open{
      .ant-select-selector{
        border-color: rgba(0, 0, 0, 0.3) !important;
        box-shadow: none !important;
      }
    }
  }

  .ant-input{
    border: 1px solid rgba(0, 0, 0, 0.3) !important;
    &:hover, &:focus{
      border-color: rgba(0, 0, 0, 0.3) !important;
      box-shadow: none !important;
    }
  }

  /* form css */
  .ant-form{
    .ant-form-item{
      .ant-form-item-row{
        flex-wrap: wrap;
        .ant-form-item-label{
          width: 100%;
          text-align: left;
          line-height: 0;
          label{
              font-size: 14px;
              line-height: 18px;
              height: 18px;
              color: ${color.blackColor};
              font-family: ${fontFamily.ptBold};
              margin-bottom: 8px;
              text-transform: capitalize;
              &::after{
                display: none;
              }
          }
        }
        .ant-form-item-control{
          min-width: 100%;
          width: 100%;
          .ant-input{
            border: 1px solid rgba(0, 0, 0, 0.3) !important;
            border-right-width: 3px !important;
            border-right-color: ${color.primaryColor} !important;
            border-radius: 8px;
            min-height: 36px;
            padding: 5px 12px;
            font-size: 12px;
            font-family: ${fontFamily.ptBold};
            color: ${color.blackColor};
            &::placeholder{
              color: ${color.greyColor};
              font-family: ${fontFamily.ptRegular};
            }
            &:focus{
              box-shadow: none;
            }

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }

            /* Firefox */
            &[type=number] {
              -moz-appearance: textfield;
            }
          }
          .ant-input-password{
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-right-width: 3px !important;
            border-right-color: ${color.primaryColor} !important;
            border-radius: 8px;
            padding: 0;
            min-height: 36px;
            overflow: hidden;
            input[type="text"]{
              border: none !important;
              padding: 0 12px;
              min-height: 100%;
              font-family: ${fontFamily.ptBold};
              border-radius: 0 !important;
            }
            input[type="password"]{
              border: none !important;
              /* border-radius: 0; */
              padding: 0 12px;
              min-height: 100%;
              font-family: ${fontFamily.ptBold};
              border-radius: 0 !important;
            }
            .ant-input-suffix{
              /* display: none; */
              margin: 0 5px;
              svg{
                cursor: pointer !important;
                path{
                  cursor: pointer !important;
                }
              }
            }
            &:focus{
              box-shadow: none;
            }
            &.ant-input-affix-wrapper-focused{
              box-shadow: none;
            }
          }
          .ant-radio-group{
            .ant-radio-wrapper{
              color: ${color.blackColor};
              font-family: ${fontFamily.ptBold};
              font-size: 12px;
              line-height: 20px;
              margin-right: 16px;
              cursor: pointer !important;
              .ant-radio{
                cursor: pointer !important;
                input{
                cursor: pointer !important;
                }
               
                .ant-radio-inner{
                  width: 18px;
                  height: 18px;
                  cursor: pointer !important;
                  border-color: ${color.primaryColor};
                }
                &.ant-radio-checked{
                  .ant-radio-inner{
                    background-color: #fff;
                    &::after{
                      cursor: pointer !important;
                      transform: scale(0.57);
                      background-color: ${color.primaryColor};
                    }
                  }
                }
              }
              span{
                cursor: pointer !important;
              }
            }
          }
          .ant-picker{
            width: 100%;
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-right-width: 3px !important;
            border-right-color: ${color.primaryColor} !important;
            border-radius: 8px;
            min-height: 36px;
            padding: 5px 12px;
            .ant-picker-input{
              .ant-picker-suffix{
                .anticon{
                  svg{
                    width: 16px;
                    height: 16px;
                    path{
                      stroke: ${color.primaryColor};
                    }
                  }
                }
              }
              input{
                padding: 0;
                font-size: 12px;
                font-family: ${fontFamily.ptBold};
                color: ${color.blackColor};
                &::placeholder{
                  color: #5B5B5B;
                  font-family: ${fontFamily.ptRegular};
                }
              }
            }
          }
        }
      }
    }

  }

  /* slider tooltip */
  .ant-slider-tooltip{
    .ant-tooltip-arrow{
      display: none;
    }
    .ant-tooltip-content{
      .ant-tooltip-inner{
        color: ${color.primaryColor};
        font-family: ${fontFamily.ptBold};
        background: none;
        box-shadow: none;
        margin-top: -5px;
      }
    }
  }

  /* select dropdown css */
.ant-select-dropdown{
  z-index: 10000;
  .rc-virtual-list{
    .rc-virtual-list-holder-inner{
      .ant-select-item-option{
        .ant-select-item-option-content{
          font-family: ${fontFamily.ptRegular};
        }
        &.ant-select-item-option-selected{
          font-family: ${fontFamily.ptBold};
        }
      }
    }
  }
  &.payment-dropdown{
    .rc-virtual-list-holder-inner{
      .ant-select-item{
        .ant-select-item-option-content{
          color: ${color.secondaryColor};
          font-family: ${fontFamily.ptBold};
        }
      }
    }
  }
}


  /* modal css */
  .ant-modal{
    .ant-modal-content{
      padding: 20px;
      .ant-modal-close{
        display: none;
      }
      .ant-modal-header{
        .ant-modal-title{
          margin-bottom: 20px;
          .header-wrapper{
            display: flex;
            align-items: center;
            .icon{
              margin-left: auto;
              svg,path{
                cursor: pointer !important;
              }
            }
            .title{
              font-size: 14px;
              line-height: 18px;
              color: ${color.blackColor};
              font-family: ${fontFamily.ptBold};
            }
            .title-wrapper{
              display: flex;
              align-items:center;
              margin-right: 15px;
              .ant-avatar{
                margin-right: 10px;
              }
            }
          }
        }
      }
      .ant-modal-body{}
      .ant-modal-footer{}
    }
    &.forgot-password-modal{
      .ant-modal-content{
        padding: 30px;
        .ant-modal-header{
          .ant-modal-title{
            text-align: center;
          }
        }
        .ant-modal-body{
          .ant-form{
            .ant-form-item{
              &:last-child{
                margin-bottom: 0;
              }
            }
          }
        }
      }
    }
    /* for front end */
    &.login-modal{
      .ant-modal-content{
        padding: 40px;
        border-radius: 10px;
        @media screen and (max-width: 767px){
          padding: 20px;
        }
        .ant-modal-header{
          .ant-modal-title{
            margin-bottom: 32px;
            @media screen and (max-width: 767px){
              margin-bottom: 20px;
            }
            .header-wrapper{
            .title{
              font-size: 20px;
              line-height: 35px;
              @media screen and (max-width: 767px){
                font-size: 18px;
                line-height: 30px;
              }
            }
            .icon{
              svg{
                path{
                  stroke: ${color.greyColor};
                }
              }
            }
          }
          }
        }
        .ant-modal-body{
          .ant-form{
            .ant-form-item{
              &:last-child{
                margin-bottom: 0;
              }
            }
          }
        }
        .ant-modal-footer{}
      }
    }

    /* for cancel booking request */
    &.booking-cancel{
      .ant-modal-content{
        padding: 20px 58px 58px;
        @media screen and (max-width: 767px){
          padding: 20px;
        }
        .ant-modal-header{
          .ant-modal-title{
            margin-bottom: 30px;
            @media screen and (max-width: 767px){
              margin-bottom: 20px;
            }
            .header-wrapper{
              /* position: relative; */
              text-align: center;
              .title{
                font-size: 20px;
                line-height: 25px;
                font-family: ${fontFamily.ptBold};
                color: ${color.blackColor};
                width: 100%;
                padding: 0 20px;
                @media screen and (max-width: 767px){
                font-size: 18px;
                line-height: 22px;
              }
              }
              svg{
                position: absolute;
                right: 20px;
                top: 28px;
                /* transform: translateY(-50%); */
                cursor: pointer !important;
                path{
                  cursor: pointer !important;
                }
              }
            }
          }
        }
        .ant-modal-body{
          .ant-radio-group{
            @media screen and (max-width: 480px){
              width: 100%;
            }
            .ant-space{
              @media screen and (max-width: 480px){
                width: 100%;
              }
              .ant-space-item{
                margin-bottom: 10px;
                @media screen and (max-width: 767px){
                  margin-bottom: 5px;
                }
                .ant-radio-wrapper{
                  .ant-radio{
                    .ant-radio-input{
                      cursor: pointer !important;
                    }
                    +span{
                      font-size: 20px;
                      line-height: 25px;
                      font-family: ${fontFamily.ptRegular};
                      color: ${color.blackColor};
                      cursor: pointer !important;
                      @media screen and (max-width: 767px){
                        font-size: 18px;
                        line-height: 22px;
                      }
                    }
                    .ant-radio-inner{
                      border-color: #000;
                      width: 20px;
                      height: 20px;
                      @media screen and (max-width: 767px){
                        width: 18px;
                        height: 18px;
                      }
                      /* cursor: pointer !important; */
                    }
                    &.ant-radio-checked{
                      .ant-radio-inner{
                        background-color: #000;
                        &::after{
                          transform: scale(0.5);
                          /* cursor: pointer !important; */
                        }
                      }
                    }
                  }
                }
                .ant-input{
                  width: 100% !important;
                  color: ${color.blackColor};
                  font-size: 20px;
                  line-height: 0;
                  padding: 5px 0 0;
                  border: none !important;
                  border-radius: 0;
                  border-bottom: 1px solid #000000;
                  margin: 0 !important;
                  font-family: ${fontFamily.ptBold};
                  @media screen and (max-width: 767px){
                    font-size: 16px;
                  }
                  &::placeholder{
                    color: ${color.greyColor};
                    font-family: ${fontFamily.ptRegular};
                  }
                  &:focus{
                    box-shadow: none;
                  }
                }
              }
            }
          }
        }
        .ant-modal-footer{
          .footer-wrapper{
              .btn-wrapper{
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                margin-top: 30px;
                @media screen and (max-width: 767px){
                  margin-top: 20px;
                }
                button{
                  margin-right: 20px;
                  min-width: 150px;
                  font-family: ${fontFamily.ptBold};
                  @media screen and (max-width: 767px){
                    min-width: 100px;
                    margin-right: 15px;
                  }
                  @media screen and (max-width: 480px){
                    margin-bottom: 5px;
                    flex: 1;
                  }
                  &:last-child{
                    margin-right: 0;
                  }
                }
              }
          }
        }
      }
    }
    &.duplicate-apartment-modal{
      .ant-modal-content{
        padding: 20px 70px 45px;
        @media screen and (max-width: 1199px){
          padding: 20px 40px 40px;
        }
        @media screen and (max-width: 767px){
          padding: 20px;
        }
        .ant-modal-header{
          margin-bottom: 0;
          .ant-modal-title{
            margin-bottom: 10px;
            svg{
              position: absolute;
              right: 25px;
              top: 25px;
              cursor: pointer !important;
              path{
                cursor: pointer !important;
              }
            }
          }
        }
      }
    }
    &.mobile-number{
      .ant-modal-content{
        padding: 40px 40px 40px;
        @media screen and (max-width: 767px){
          padding: 20px;
        }
        .ant-modal-header{
          position: absolute;
          top: 15px;
          right:15px;
          z-index: 1;
          @media screen and (max-width: 767px){
            position: absolute;
            top: 12px;
            right: 12px;
          }
          svg{
          position: unset !important;
          }
        }
        .ant-modal-body{
          .mobile-step{
            padding: 0;
            .ant-form{
              .ant-form-item{
                margin-bottom: 20px;
                &.empty-text{
                  margin-bottom: 5px;
                  .ant-form-item-control{
                    display: none;
                  }
                }
                .ant-form-item-label{
                  padding: 0;
                }
                .ant-input{
                  max-width: 100%;
                }
                &:last-child{
                  margin-bottom: 0;
                }
                button{
                  width: 100%;
                  max-width: 100%;
                  margin-top: 10px;
                  height: 36px;
                }
              }
            }
          }
        }
      }
    }
    &.add-language-modal{
      .ant-modal-content{
        padding: 24px;
        border-radius: 10px;
        .ant-modal-header{
          margin-bottom: 0;
          position: absolute;
          top: 10px;
          right: 15px;
          .ant-modal-title{
            line-height: 1;
            margin-bottom: 0;
            text-align: right;
            .icon{
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: #C9C9C9;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer !important;
              svg{
                width: 10px;
                height: 10px;
                cursor: pointer !important;
                path{
                  cursor: pointer !important;
                  stroke: ${color.whiteColor};
                }
              }
            }
          }
        }
        .ant-modal-body{
          .ant-form {
            .ant-form-item {
              &:last-child{
                margin-bottom: 0;
              }
              .ant-form-item-label{
                label{
                  color: ${color.blackColor};
                  font-size: 14px;
                  text-transform: capitalize;
                  height: auto;
                  line-height: 1;
                  font-family: ${fontFamily.ptBold};
                }
              }
                .ant-select {
                  width: 100%;
                  .ant-select-selector{
                      height: 40px;
                      border: 1px solid rgba(0, 0, 0, 0.3);
                      border-radius: 8px;
                      border-right-width: 3px !important;
                      border-right-color: ${color.primaryColor} !important;
                      .ant-select-selection-item{
                        display: flex;
                        align-items: center;
                        font-size: 12px;
                        font-family: ${fontFamily.ptBold};
                        color: ${color.blackColor};
                      }
                      .ant-select-selection-placeholder{
                        font-family: ${fontFamily.ptRegular};
                        color: ${color.greyColor};
                        display: flex;
                        align-items: center;
                        font-size: 12px;
                      }
                  }
                  .ant-select-arrow{
                      .anticon{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        svg{
                          path{
                            stroke: ${color.primaryColor};
                          }
                        }
                      }
                  }
                  &.ant-select-focused, &.ant-select-open, &:hover{
                    .ant-select-selector{
                      box-shadow: none;
                    }
                  }
                }
                .btn-wrapper{
                  display: flex;
                  align-items: center;
                  margin-top: 10px;
                  button{
                    margin-right: 20px;
                    min-width: 100px;
                    &:last-child{
                      margin-right: 0;
                    }
                  }
                }
            }
          }
        }
      }
      
    }
    &.delete-property{
      .ant-modal-body{
        .title{
            font-size: 20px;
            line-height: 25px;
            font-family: Pt sans Bold;
            margin-bottom: 30px;
            color: #252525;
            text-align: center;
          }
          .btn-wrapper{
            display: flex;
            justify-content: center;
            button{
              margin-right: 20px;
              &:last-child{
              margin-right: 0;
              }
            }
          }
        }
      }
    }

  .ant-modal-mask{
    z-index: 10000 !important;

  }
  .ant-modal-wrap{
    z-index: 10000 !important;
  }


  .ant-picker-dropdown{
    z-index: 10500;
    @media screen and (max-width: 767px){
      width: 100vw;
      margin: 0 auto;
      position: fixed;
      left: 0 !important;
      top: 100px !important;
      /* transform: translate(-50%, -50%); */
      @media screen and (max-width: 575px){
        left: 0 !important;
        top: 50px !important;
      }
      .ant-picker-panel-layout{
        height: 100%;
      }
      .ant-picker-panels{
        flex-direction: column;
      }
    }
  }

  .ant-picker-dropdown-range{
    .ant-picker-range-wrapper{
      @media screen and (max-width: 767px){
        width: 100vw;
        margin: 0 auto;
        justify-content: center;
      }
      .ant-picker-range-arrow{
        display: none;
      }
      .ant-picker-panel-container{
        .ant-picker-panels{
          padding: 10px 10px 0;
          .ant-picker-panel{
            border: none;
            .ant-picker-header{
              border: none;
              button{
                span{
                  &::before{
                    color: #000;
                    border-block-start-width: 2px;
                    border-inline-start-width: 2px;
                  }
                  &::after{
                    color: #000;
                    border-block-start-width: 2px;
                    border-inline-start-width: 2px;
                  }
                }
              }
            }
            .ant-picker-body{
              table{
                tr{
                  th{
                    display: none;
                  }
                  td{
                    .ant-picker-cell-inner{
                      color: rgba(0, 0, 0, 0.25);
                      opacity: 0;
                    }
                    &.ant-picker-cell-in-view{
                      .ant-picker-cell-inner{
                        opacity: 1;
                        color: #000;
                        font-family: ${fontFamily.ptBold};
                      }
                      &.ant-picker-cell-range-start, &.ant-picker-cell-range-end, &.ant-picker-cell-in-range{
                        .ant-picker-cell-inner{
                          background: #000;
                          color: #fff;
                          border-radius: 0;
                        }
                      }
                      &.ant-picker-cell-in-range, &.ant-picker-cell-range-start, &.ant-picker-cell-range-end{
                        &::before{
                          background: #000;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        .ant-picker-footer{
          padding-bottom: 30px;
          .ant-picker-footer-extra{
            display: flex;
            button{
              margin-right: 25px;
              margin-left: auto;
              font-size: 18px;
            }
          }
        }
      }
    }
  }

  /* notification */
  .ant-notification{
    z-index: 10000;
  }


  /* dropdown for front end */
  .ant-dropdown{
    z-index: 10500;
    .ant-dropdown-menu{
      background: #FFFFFF;
      border-radius: 10px;
      padding: 7px 0;
      .ant-dropdown-menu-item{
        padding: 5px 28px;
        border-radius: 0;
        .ant-dropdown-menu-title-content{
            color: ${color.secondaryColor};
            font-family: ${fontFamily.ptBold};
            font-size: 14px;
            line-height: 35px;
            cursor: pointer !important;
            span {
              width: 100%;
              display:block;
            }
          a{
            cursor: pointer !important;
          }
        }
        &.ant-dropdown-menu-item-active{
          background: rgba(121, 121, 121, 0.1);
        }
      }
    }
    &.list-action-dropdown{
      .ant-dropdown-menu{
        .ant-dropdown-menu-item{
          padding: 0 28px;
          @media screen and (max-width: 767px){
            padding: 0 20px;
          }
          .ant-dropdown-menu-title-content{
            text-align: center;
            @media screen and (max-width: 767px){
              line-height: 30px;
            }
          }
        }
      }
    }
  }

`;

export const SubTitle = styled.div`
  font-size: 16px;
`;
export const Pera = styled.div``;

export const CustomButton = styled.button`
  outline: none;
  font-size: 12px;
  font-family: ${fontFamily.ptBold};
  text-align: center;
  background: #fff;
  color: ${color.primaryColor};
  border-radius: 8px;
  border: 1px solid ${color.primaryColor};
  padding: 0 20px;
  min-height: 36px;
  text-transform: capitalize;
  cursor: pointer !important;
  &.fill {
    border: 1px solid ${color.primaryColor};
    background: ${color.primaryColor};
    color: #fff;
  }
`;

export const Box = styled.div`
  border-bottom: ${(props) => props.border};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  background: #ffffff;
  padding: 24px;
  &.chart-wrapper {
    margin-bottom: 30px;
    @media screen and (max-width: 1199px) {
      margin-bottom: 15px;
    }
    canvas {
      height: 350px !important;
      width: 100% !important;
    }
  }
`;

export const TableWrapper = styled.div`
  .ant-table-wrapper {
    table {
      border: 1px solid rgba(3, 72, 139, 0.2);
      border-top: none;
      border-radius: 4px;
      tr {
        th {
          background: #03488b;
          color: #fff;
          font-family: ${fontFamily.ptBold};
          font-size: 12px;
          line-height: 15px;
          font-weight: normal;
          padding: 12px 15px;
          &:hover {
            background: #03488b;
            color: #fff;
            &.ant-table-column-has-sorters {
              background: #03488b;
              color: #fff;
            }
          }
          &:first-child {
            border-start-start-radius: 4px !important;
          }
          &:last-child {
            border-start-end-radius: 4px !important;
          }
          &::before {
            background: rgba(255 255 255 / 20%);
            opacity: 0.2;
            width: 2px !important;
          }
          &.ant-table-column-has-sorters {
            background: #03488b;
            color: #fff;
            .ant-table-column-title {
              display: flex;
              align-items: center;
              text-transform: capitalize;
              .btn-wrapper {
                margin-left: auto;
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
                button {
                  outline: none;
                  border: none;
                  background: none;
                  height: 12px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  .anticon {
                    svg {
                      width: 10px;
                      height: 10px;
                    }
                  }
                }
              }
            }
            .ant-table-column-sorter {
              display: none;
            }
          }
        }
        td {
          font-family: ${fontFamily.ptBold};
          font-size: 12px;
          line-height: 15px;
          color: ${color.greyColor};
          border-bottom: none;
          padding: 12px 15px;
          .dark-font {
            color: ${color.blackColor};
            font-family: ${fontFamily.ptBold};
          }
          .edit {
            color: ${color.primaryColor};
            cursor: pointer;
            display: inline-block;
            position: relative;
            &::before {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 1px;
              background: ${color.primaryColor};
            }
          }
          .icon {
            /* text-align: right; */
            /* padding-left: 14px; */
            text-align: left;
          }
          .ant-avatar {
            margin-right: 8px;
          }
          .anticon {
            svg,
            path {
              cursor: pointer !important;
            }
          }
          .underline {
            text-decoration: underline;
            color: ${color.primaryColor};
          }
          .payment {
            font-size: 14px;
          }
          .select-dropdown {
            .ant-select {
              .ant-select-selector {
                border-color: ${color.secondaryColor};
                border-radius: 8px;
                .ant-select-selection-item {
                  color: ${color.secondaryColor};
                  font-family: ${fontFamily.ptBold};
                  text-transform: capitalize;
                  cursor: pointer !important;
                }
              }
              .ant-select-arrow {
                .anticon {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  svg,
                  path {
                    stroke: ${color.secondaryColor};
                  }
                }
              }

              &:hover {
                .ant-select-selector {
                  border-color: ${color.secondaryColor};
                  box-shadow: none;
                }
              }
              &.ant-select-open,
              &.ant-select-focused {
                .ant-select-selector {
                  border-color: ${color.secondaryColor};
                  box-shadow: none;
                }
              }
            }
          }
        }
      }
    }
    .ant-pagination {
      // position: fixed;
      bottom: 40px;
      right: 40px;
      // margin-bottom: 0;
      @media screen and (max-width: 767px) {
        margin-bottom: 0;
      }

      li {
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 36px;
        min-height: 36px;
        cursor: pointer !important;
        @media screen and (max-width: 767px) {
          min-width: 30px;
          min-height: 30px;
        }
        .anticon {
          svg {
            color: #fff;
            cursor: pointer !important;
          }
        }
        &.ant-pagination-prev {
          background: #03488b;
          position: relative;
          margin-right: 20px;
          &::before {
            content: '';
            position: absolute;
            top: 50%;
            right: -10px;
            transform: translateY(-50%);
            height: 6px;
            width: 1px;
            background: rgba(121, 121, 121, 0.5);
          }
          &.ant-pagination-disabled {
            /* display: none; */
            background: ${color.greyColor};
            opacity: 0.2;
            cursor: not-allowed !important;
            button {
              cursor: not-allowed !important;
              svg {
                cursor: not-allowed !important;
                path {
                  cursor: not-allowed !important;
                }
              }
            }
          }
        }
        &.ant-pagination-next {
          background: #03488b;
          position: relative;
          margin-left: 20px;
          &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: -10px;
            transform: translateY(-50%);
            height: 6px;
            width: 1px;
            background: rgba(121, 121, 121, 0.5);
          }
          &.ant-pagination-disabled {
            /* display: none; */
            background: ${color.greyColor};
            opacity: 0.2;
            cursor: not-allowed !important;
            button {
              cursor: not-allowed !important;
              svg {
                cursor: not-allowed !important;
                path {
                  cursor: not-allowed !important;
                }
              }
            }
          }
        }
        a {
          color: ${color.blackColor};
          font-family: ${fontFamily.ptBold};
          font-size: 14px;
          line-height: 18px;
          cursor: pointer !important;
        }
        &.ant-pagination-item-active {
          border-color: #03488b;
          a {
            color: #03488b;
            text-decoration: underline;
          }
        }
        button {
          cursor: pointer !important;
        }
      }
    }
    &.static-management-table {
      table {
        tr {
          th {
          }
          td {
            padding: 16px 15px;
          }
        }
      }
    }
    &.add-language {
      table {
        tr {
          th {
          }
          td {
            .icon {
              .delete-icon {
                padding: 0 10px 0 0;
                text-decoration: underline;
                color: rgba(255, 57, 57, 1);
                font-family: ${fontFamily.ptBold};
                cursor: pointer !important;
              }
            }
          }
        }
      }
    }
  }
`;

export const UserHeader = styled.div`
  &.user-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .user-name {
      display: flex;
      align-items: center;
      margin-right: 15px;
      .ant-avatar {
        margin-right: 10px;
      }
      .user {
        font-size: 14px;
        line-height: 18px;
        font-family: ${fontFamily.ptBold};
        color: ${color.blackColor};
      }
    }
    .btn-wrapper {
      margin-left: auto;
      button {
        padding: 0 40px;
        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }
`;

export const Container = styled.div`
  max-width: 1150px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`;

export const SectionTitle = styled.div`
  .section-title {
    margin-bottom: 15px;
  }
`;

export default GlobalStyle;
