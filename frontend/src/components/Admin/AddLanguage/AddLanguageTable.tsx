import React, { useEffect, useState } from 'react';
import { TableWrapper } from '@/globalStyles';
import { Tag, Table, Avatar, Pagination } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { UserOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/admin/languages/languages.action';
import { RootState } from '@/redux/store/rootReducer';

interface DataType {
  key: string | number;
  id: number | string;
  name: string;
  language_code: string;
}

const AddLanguageTable = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [orderDirection, setOrderDirection] = useState();
  const [tableData, setTableData] = useState<any>();
  const allLanguages = useSelector(
    (state: RootState) => state.languageReducer.allLanguages
  );

  const changeOrder = (direction: any) => () => {
    setOrderDirection(direction);
  };

  useEffect(() => {
    dispatch(actions.getAllLanguage());
  });

  useEffect(() => {
    let array = [];
    allLanguages.map((item: any) => {
      let obj = {
        ...item,
        key: item.id,
      };
      array.push(obj);
    });
    setTableData(array);
  }, [allLanguages]);

  const columns: ColumnsType<DataType> = [
    {
      title: (
        <>
          ID
          <div className='btn-wrapper'>
            <button onClick={changeOrder('ascend')}>
              <UpOutlined />
            </button>
            <button onClick={changeOrder('descent')}>
              <DownOutlined />
            </button>
          </div>
        </>
      ),
      dataIndex: 'id',
      key: 'id',
      width: 120,
      sorter: (a: any, b: any) => a.id - b.id,
      sortOrder: orderDirection,
      render: (_, record) => <div>{record.id}</div>,
    },
    {
      title: (
        <>
          Languages
          <div className='btn-wrapper'>
            <button onClick={changeOrder('ascend')}>
              <UpOutlined />
            </button>
            <button onClick={changeOrder('descent')}>
              <DownOutlined />
            </button>
          </div>
        </>
      ),
      dataIndex: 'name',
      key: 'name',
      sorter: (a: any, b: any) => a.lang - b.lang,
      sortOrder: orderDirection,
      render: (_, record) => <div className='dark-font'>{record?.name}</div>,
    },
    {
      title: 'Code',
      dataIndex: 'language_code',
      key: 'language_code',
      render: (_, record) => (
        <div className='dark-font'>{record?.language_code}</div>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      width: 120,
      render: (_, record) =>
        record.id !== 1 && (
          <div className='icon'>
            <div
              className='delete-icon'
              onClick={() =>
                dispatch(actions.removeLanguage({ id: record.id }))
              }
            >
              Delete
            </div>
          </div>
        ),
    },
  ];

  return (
    <TableWrapper>
      <Table
        className='add-language'
        columns={columns}
        dataSource={tableData}
        showSorterTooltip={{
          title:
            orderDirection === 'ascend'
              ? 'Click to sort descending'
              : 'Click to sort ascending',
        }}
        // pagination={dataSource.length < 10 ? false : true}
        // pagination={{
        //   pageSize: 10,
        //   total: totalUser,
        //   onChange: (page) => {
        //     setPageNumber(page);
        //   },
        // }}
        // onRow={(record, rowIndex) => {
        //   return {
        //     onClick: () => {
        //       router.push(`/admin/system-users/view-user?${record.id}`);
        //     },
        //   };
        // }}
      />
    </TableWrapper>
  );
};

export default AddLanguageTable;
