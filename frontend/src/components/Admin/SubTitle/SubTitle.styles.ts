import styled from 'styled-components';
import { IstylesProps } from './SubTitle';

export const SubTitleWrapper = styled.div`
  position: relative;
  font-size: ${(props: IstylesProps) => props.fontSize};
  color: ${(props: IstylesProps) => props.color};
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
