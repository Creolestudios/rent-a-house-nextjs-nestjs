import React from 'react';
import { color } from '@/styles/variable';
import { ProgressLineWrapper } from './PropertyListingOptionWrapper.styles';
import { useSelector } from 'react-redux';
export interface HeaderProps {
  headerHeight: number;
}

const ProgressLine = ({ listStep, totalStep }: any) => {
  let { headerHeight } = useSelector((state: any) => state.appReducer);

  const obj: HeaderProps = {
    headerHeight,
  };
  return (
    <ProgressLineWrapper
      {...obj}
      style={{ width: `${(100 * listStep) / totalStep}%` }}
    >
      {/* ProgressLine */}
    </ProgressLineWrapper>
  );
};

export default ProgressLine;
