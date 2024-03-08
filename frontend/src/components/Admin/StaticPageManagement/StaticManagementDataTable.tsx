import React, { useState, useEffect } from 'react';
import { TableWrapper } from '@/globalStyles';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import EyeSvgIcon from '@/assets/images/icons/EyeSvg';
import { useRouter } from 'next/router';
import { color, fontFamily } from '@/styles/variable';
import { useDispatch, useSelector } from 'react-redux';
import appActions from '@/redux/app/app.action';
import actions from '@/redux/admin/cms/cms.action';
import { RootState } from '@/redux/store/rootReducer';

interface DataType {
  key: string;
  id: number | string;
  page_name: string;
}

const StaticManagementDataTable = ({ route }) => {
  const [tableData, setTableData] = useState<any>();

  const router = useRouter();

  const dispatch = useDispatch();

  const [orderDirection, setOrderDirection] = useState();
  const allCMSPages = useSelector(
    (state: RootState) => state.cmsReducer.allCMS
  );

  const changeOrder = (direction: any) => () => {
    setOrderDirection(direction);
  };

  useEffect(() => {
    dispatch(actions.getAllCMSPages());
  });

  useEffect(() => {
    let array = [];
    allCMSPages.map((item: any) => {
      let obj = {
        ...item,
        key: item.id,
      };
      array.push(obj);
    });
    setTableData(array);
  }, [allCMSPages]);

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
      sorter: (a: any, b: any) => a.id - b.id,
      sortOrder: orderDirection,
      render: (_, record) => <div>{record.id}</div>,
      width: 100,
    },
    {
      title: (
        <>
          Page Name
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
      dataIndex: 'page_name',
      key: 'page_name',
      sorter: (a: any, b: any) => a.page_name - b.page_name,
      sortOrder: orderDirection,
      render: (_, record) => (
        <div className='dark-font'>{record.page_name}</div>
      ),
    },
    {
      title: <>View</>,
      key: 'view',
      width: 90,
      sorter: (a: any, b: any) => a - b,
      sortOrder: orderDirection,
      render: (_, record) => (
        <div className='icon'>
          <Icon
            onClick={() => {
              router.push(`${route}/${record?.page_name}`);
              dispatch(appActions.disableInput(true));
            }}
            component={EyeSvgIcon}
          />
        </div>
      ),
    },
    {
      title: <>Action</>,
      key: 'action',
      width: 90,
      sorter: (a: any, b: any) => a - b,
      sortOrder: orderDirection,
      render: (_, record) => (
        <div className='icon'>
          <span
            className='edit-icon'
            onClick={() => {
              router.push(`${route}/${record?.page_name}`);
              dispatch(appActions.disableInput(false));
            }}
          >
            Edit
          </span>
          {/* <span
            className='delete-icon'
            onClick={() => {
              dispatch(actions.removeCMSPage({ id: record.id }));
            }}
          >
            Delete
          </span> */}
        </div>
      ),
    },
  ];

  return (
    <TableWrapper>
      <Table
        className='static-management-table'
        scroll={{ x: 500 }}
        columns={columns}
        dataSource={tableData}
        showSorterTooltip={{
          title:
            orderDirection === 'ascend'
              ? 'Click to sort descending'
              : 'Click to sort ascending',
        }}
        pagination={false}
      />
    </TableWrapper>
  );
};

export default StaticManagementDataTable;
