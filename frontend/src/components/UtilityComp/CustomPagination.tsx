import React from 'react';
import { CustomPaginationWrapper } from './UtilityComp.styles';
import { Pagination } from 'antd';

interface pagination {
  pageNumber: number;
  setPageNumber: (params: number) => void;
  totalProperty: number;
  pageSize: number;
}

const CustomPagination = ({
  pageNumber,
  setPageNumber,
  totalProperty,
  pageSize,
}: pagination) => {
  return (
    <CustomPaginationWrapper className='pagination'>
      <Pagination
        defaultCurrent={pageNumber}
        total={totalProperty}
        pageSize={pageSize}
        onChange={(page) => {
          setPageNumber(page);
        }}
        // disabled={true}
      />
    </CustomPaginationWrapper>
  );
};

export default CustomPagination;
