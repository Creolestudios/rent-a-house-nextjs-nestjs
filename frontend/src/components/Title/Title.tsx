import React from 'react';
import { TitleWrapper } from './Title.styles';

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

const Title = ({
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
    <TitleWrapper {...objStyle} className={className}>
     <div contentEditable={isEdit} id={id}> {title}</div>
      {children}
    </TitleWrapper>
  );
};

export default Title;
