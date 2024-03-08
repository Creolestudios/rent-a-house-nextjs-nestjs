import styled from 'styled-components';
import bgImg from '@/assets/images/home-border.png';

export const LoginWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const FormWrapper = styled.div`
  padding: 120px 50px 50px;
  flex: 1;
  max-width: 427px;
  background-image: url(${bgImg.src});
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 90%;
  overflow-y: auto;
  @media screen and (max-width: 1199px) {
    padding: 100px 20px 30px;
    background-size: 95%;
  }
  .logo {
    margin-bottom: 65px;
  }
`;

export const RightImgWrapper = styled.div`
  padding: 40px;
  flex: 2;
  background: linear-gradient(183.22deg, #03488b -1.98%, #72baff 180.76%),
    #f9f9f9;
  position: relative;
  @media screen and (max-width: 991px) {
    flex: 1;
  }
  .right-img {
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 1000px;
    width: 100%;
    height: auto;
  }
`;
