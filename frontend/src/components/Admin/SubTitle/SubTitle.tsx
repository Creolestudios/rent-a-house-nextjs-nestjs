import React from 'react';
import { SubTitleWrapper } from './SubTitle.styles';

export interface IstylesProps {
  color?: string;
  marginBottom?: string;
  lineHeight?: string;
  fontFamily?: string;
  textTransform?: string;
  underline?: boolean;
  fontSize?: string;
}

export interface Iprops extends IstylesProps {
  title: string;
}

const SubTitle = ({
  title,
  color,
  marginBottom,
  lineHeight,
  fontFamily,
  textTransform,
  underline,
  fontSize,
}: Iprops) => {
  const objStyle = {
    color: color,
    marginBottom: marginBottom,
    lineHeight: lineHeight,
    fontFamily: fontFamily,
    textTransform: textTransform,
    underline: underline,
    fontSize: fontSize,
  };

  return <SubTitleWrapper {...objStyle}>{title}</SubTitleWrapper>;
};

export default SubTitle;
