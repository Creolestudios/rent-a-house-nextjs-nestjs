import styled from 'styled-components';
import { IstylesProps } from './Title';

export const TitleWrapper = styled.div`
  position: relative;
  font-size: 16px;
  color: ${(props) => props.color};
  margin-bottom: ${(props: IstylesProps) => props.marginBottom};
  line-height: ${(props: IstylesProps) => props.lineHeight};
  font-family: ${(props: IstylesProps) => props.fontFamily};
  text-transform: ${(props: IstylesProps) => props.textTransform};
  width: fit-content;
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #ff904c;
    display: ${(props: IstylesProps) => (props.underline ? 'block' : 'none')};
  }
`;
