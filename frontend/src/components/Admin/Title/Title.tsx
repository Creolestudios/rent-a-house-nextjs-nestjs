import React from 'react';
import { TitleWrapper } from './Title.styles';

export interface IstylesProps {
  color?: string;
  marginBottom?: string;
  lineHeight?: string;
  fontFamily?: string;
  textTransform?: string;
  underline?: boolean;
  children?: any;
  className?: string;
}

export interface Iprops extends IstylesProps {
  title: string;
}

const Title = ({
  title,
  color,
  marginBottom,
  lineHeight,
  fontFamily,
  textTransform,
  underline,
  children,
  className,
}: Iprops) => {
  const objStyle = {
    color: color,
    marginBottom: marginBottom,
    lineHeight: lineHeight,
    fontFamily: fontFamily,
    textTransform: textTransform,
    underline: underline,
  };

  return (
    <TitleWrapper {...objStyle} className={className}>
      {title}
      {children}
    </TitleWrapper>
  );
};

export default Title;
