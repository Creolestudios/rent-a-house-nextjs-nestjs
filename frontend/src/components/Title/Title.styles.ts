import styled from 'styled-components';
import { IstylesProps } from './Title';

export const TitleWrapper = styled.h2`
  position: relative;
  font-size: 22px;
  line-height: 28px;
  color: ${(props: IstylesProps) => props.color};
  margin-bottom: ${(props: IstylesProps) => props.marginBottom};
  font-family: ${(props: IstylesProps) => props.fontFamily};
  width: fit-content;
  @media screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    margin: 0 auto 15px;
  }
`;
