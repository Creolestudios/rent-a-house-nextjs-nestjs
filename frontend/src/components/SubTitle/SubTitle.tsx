import React from 'react';
import { SubTitleWrapper } from './SubTitle.styles';

export interface IstylesProps {
  color?: string;
  marginBottom?: string;
  fontFamily?: string;
  children?: any;
  className?: string;
  isEdit?:boolean;
  id?:string
}

export interface Iprops extends IstylesProps {
  title: string;
}

const SubTitle = ({
  title,
  color,
  marginBottom,
  fontFamily,
  children,
  className,
  isEdit,
  id
}: Iprops) => {
  const objStyle = {
    color: color,
    marginBottom: marginBottom,
    fontFamily: fontFamily,
  };

  return (
    <SubTitleWrapper {...objStyle} className={className}>
      <div contentEditable={isEdit} id={id}>{title}</div>
      {children}
    </SubTitleWrapper>
  );
};

export default SubTitle;
