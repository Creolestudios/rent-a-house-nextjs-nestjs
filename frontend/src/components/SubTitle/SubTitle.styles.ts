import styled from 'styled-components';
import { IstylesProps } from './SubTitle';
// import { IstylesProps } from './Title';

export const SubTitleWrapper = styled.h3`
  position: relative;
  font-size: 16px;
  line-height: 20px;
  color: ${(props: IstylesProps) => props.color};
  margin-bottom: ${(props: IstylesProps) => props.marginBottom};
  font-family: ${(props: IstylesProps) => props.fontFamily};
  width: fit-content;
  @media screen and (max-width: 767px) {
    font-size: 15px;
    line-height: 20px;
    text-align: center;
  }
`;
