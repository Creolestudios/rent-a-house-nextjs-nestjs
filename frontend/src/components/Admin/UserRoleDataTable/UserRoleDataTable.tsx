import React, { useState, useEffect } from 'react';
import { TableWrapper } from '@/globalStyles';
import { Table, Avatar } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { UserOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { RootState } from '@/redux/store/rootReducer';
import { useSelector } from 'react-redux';
import { adminRole, adminStatus } from '@/config/constants';

interface DataType {
  key: string;
  user_name: string;
  id: number;
  email: string;
  role: string;
  status: string;
}

const UserRoleDataTable = ({ adminListdata, setPageNumber }: any) => {
  const router = useRouter();
  const [tableData, setTableData] = useState<any>();
  const totalAdmin = useSelector(
    (state: RootState) => state.adminListingReducer.totalAdmin
  );

  const [orderDirection, setOrderDirection] = useState();

  const changeOrder = (direction: any) => () => {
    setOrderDirection(direction);
  };

  useEffect(() => {
    let array = [];
    adminListdata.map((item: any) => {
      let obj = {
        ...item,
        key: item.id,
      };
      array.push(obj);
    });
    setTableData(array);
  }, [adminListdata]);

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
    },
    {
      title: (
        <>
          User name
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
      dataIndex: 'user_name',
      key: 'user_name',
      sorter: (a: any, b: any) => a.user_name - b.user_name,
      sortOrder: orderDirection,
      render: (_, record) => <div>{record.user_name}</div>,
    },
    {
      title: (
        <>
          Email Address
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
      dataIndex: 'email',
      key: 'email',
      sorter: (a: any, b: any) => a.email - b.email,
      sortOrder: orderDirection,
    },
    {
      title: (
        <>
          Role
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
      dataIndex: 'role',
      key: 'role',
      sorter: (a: any, b: any) => a.role - b.role,
      sortOrder: orderDirection,
      render: (_, record) => (
        <div className='dark-font'>{adminRole[record?.role]?.label}</div>
      ),
    },
    {
      title: (
        <>
          Status
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
      key: 'status',
      dataIndex: 'status',
      sorter: (a: any, b: any) => a.status - b.status,
      sortOrder: orderDirection,
      render: (_, record) => (
        <div className='dark-font'>{adminStatus[record?.status]?.label}</div>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div
          className='edit'
          onClick={() => {
            router.push(`/admin/users-roles/edit-admin-user?${record.id}`);
          }}
        >
          Edit
        </div>
      ),
    },
  ];

  return (
    <TableWrapper>
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={
          totalAdmin > 10
            ? {
                pageSize: 10,
                total: totalAdmin,
                onChange: (page) => {
                  setPageNumber(page);
                },
              }
            : false
        }
        showSorterTooltip={{
          title:
            orderDirection === 'ascend'
              ? 'Click to sort descending'
              : 'Click to sort ascending',
        }}
      />
    </TableWrapper>
  );
};

export default UserRoleDataTable;
