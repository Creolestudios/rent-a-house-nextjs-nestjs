import React from 'react';
import { SortListWrapper } from './PropertyListing.styles';
import { Select } from 'antd';
import { sortData } from '@/config/constants';
import Icon from '@ant-design/icons';
import downArrow from '@/assets/images/icons/DownArrowSvg';

const SortList = ({ setSortValue }) => {
  const handleChange = (value: any) => {
    setSortValue(value);
  };

  return (
    <SortListWrapper>
      <Select
        defaultValue='Sort by'
        style={{ width: 120 }}
        onChange={handleChange}
        options={sortData}
        suffixIcon={<Icon component={downArrow} />}
      />
    </SortListWrapper>
  );
};

export default SortList;
