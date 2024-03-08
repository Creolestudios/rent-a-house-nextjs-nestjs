import React, { useState } from 'react';
import { TableWrapper } from '@/globalStyles';
import { Tag, Table, Avatar } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { UserOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import EyeSvgIcon from '@/assets/images/icons/EyeSvg';
import { useRouter } from 'next/router';
import Image from 'next/image';
import UserIcon from '@/assets/images/user5.png';
// import PropertyDetailModal from '../CommonModal/PropertyDetailModal';

interface DataType {
  key: string;
  id: number | string;
  userName: string;
  paymentType: string;
  date: string;
  status: string;
  amount: string;
  method: string;
  accountId: string;
}

const data: DataType[] = [
  {
    key: '1',
    id: '001',
    userName: 'James Harper',
    paymentType: 'Commission',
    amount: 'CA$150',
    status: 'Successful',
    method: 'stripe',
    accountId: '**** **** **** 6789',
    date: '01-12-2023',
  },
  {
    key: '2',
    id: '002',
    userName: 'James Harper',
    paymentType: 'Commission',
    amount: 'CA$150',
    status: 'Successful',
    method: 'stripe',
    accountId: '**** **** **** 6789',
    date: '01-12-2023',
  },
  {
    key: '3',
    id: '003',
    userName: 'James Harper',
    paymentType: 'Commission',
    amount: 'CA$150',
    status: 'Successful',
    method: 'stripe',
    accountId: '**** **** **** 6789',
    date: '01-12-2023',
  },
  {
    key: '4',
    id: '001',
    userName: 'James Harper',
    paymentType: 'Commission',
    amount: 'CA$150',
    status: 'Successful',
    method: 'stripe',
    accountId: '**** **** **** 6789',
    date: '01-12-2023',
  },
  {
    key: '5',
    id: '002',
    userName: 'James Harper',
    paymentType: 'Commission',
    amount: 'CA$150',
    status: 'Successful',
    method: 'stripe',
    accountId: '**** **** **** 6789',
    date: '01-12-2023',
  },
  {
    key: '6',
    id: '003',
    userName: 'James Harper',
    paymentType: 'Commission',
    amount: 'CA$150',
    status: 'Successful',
    method: 'stripe',
    accountId: '**** **** **** 6789',
    date: '01-12-2023',
  },
  {
    key: '7',
    id: '001',
    userName: 'James Harper',
    paymentType: 'Commission',
    amount: 'CA$150',
    status: 'Successful',
    method: 'stripe',
    accountId: '**** **** **** 6789',
    date: '01-12-2023',
  },
  {
    key: '8',
    id: '002',
    userName: 'James Harper',
    paymentType: 'Commission',
    amount: 'CA$150',
    status: 'Successful',
    method: 'stripe',
    accountId: '**** **** **** 6789',
    date: '01-12-2023',
  },
  {
    key: '9',
    id: '003',
    userName: 'James Harper',
    paymentType: 'Commission',
    amount: 'CA$150',
    status: 'Successful',
    method: 'stripe',
    accountId: '**** **** **** 6789',
    date: '01-12-2023',
  },
  {
    key: '10',
    id: '001',
    userName: 'James Harper',
    paymentType: 'Commission',
    amount: 'CA$150',
    status: 'Successful',
    method: 'stripe',
    accountId: '**** **** **** 6789',
    date: '01-12-2023',
  },
  {
    key: '11',
    id: '002',
    userName: 'James Harper',
    paymentType: 'Commission',
    amount: 'CA$150',
    status: 'Successful',
    method: 'stripe',
    accountId: '**** **** **** 6789',
    date: '01-12-2023',
  },
  {
    key: '12',
    id: '003',
    userName: 'James Harper',
    paymentType: 'Commission',
    amount: 'CA$150',
    status: 'Successful',
    method: 'stripe',
    accountId: '**** **** **** 6789',
    date: '01-12-2023',
  },
];

const PaymentHistoryDataTable = ({ route }: any) => {
  const router = useRouter();

  const [orderDirection, setOrderDirection] = useState();

  const changeOrder = (direction: any) => () => {
    setOrderDirection(direction);
  };
  function isImageUrl(url: any) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg'];
    const extension = url.slice(url.lastIndexOf('.')).toLowerCase();
    return imageExtensions.includes(extension);
  }

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
      width: 70,
    },
    {
      title: (
        <>
          User Name
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
      dataIndex: 'userName',
      key: 'userName',
      sorter: (a: any, b: any) => a.userName - b.userName,
      sortOrder: orderDirection,
      render: (_, record) => (
        <div className=''>
          <Image
            src={isImageUrl('UserIcon') ? UserIcon : UserIcon}
            alt='images'
            width={24}
            height={24}
            style={{
              marginRight: '10px',
            }}
          />{' '}
          {record.userName}
        </div>
      ),
      width: 250,
    },
    {
      title: (
        <>
          Payment Type
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
      dataIndex: 'paymentType',
      key: 'paymentType',
      sorter: (a: any, b: any) => a.paymentType - b.paymentType,
      sortOrder: orderDirection,
      render: (_, record) => (
        <div>
          {/* <Avatar size={24}>Asd</Avatar> */}
          {record.paymentType}
        </div>
      ),
      width: 250,
    },
    {
      title: (
        <>
          Amount
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
      dataIndex: 'amount',
      key: 'amount',
      width: 150,
      sorter: (a: any, b: any) => a.amount - b.amount,
      sortOrder: orderDirection,
      render: (_, record) => (
        <div style={{ color: '#62C282', fontSize: '14px' }}>
          {/* <Avatar size={24}>Asd</Avatar> */}
          {record.amount}
        </div>
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
      dataIndex: 'status',
      key: 'status',
      sorter: (a: any, b: any) => a.status - b.status,
      sortOrder: orderDirection,
      render: (_, record) => <div className=''>{record.status}</div>,
      width: 150,
    },
    {
      title: (
        <>
          Method
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
      key: 'method',
      dataIndex: 'method',
      sorter: (a: any, b: any) => a.method - b.method,
      sortOrder: orderDirection,
      render: (_, record) => <div className=''>{record.method}</div>,
      width: 140,
    },
    {
      title: (
        <>
          Account ID
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
      key: 'accountId',
      dataIndex: 'accountId',
      sorter: (a: any, b: any) => a.accountId - b.accountId,
      sortOrder: orderDirection,
      render: (_, record) => <div className=''>{record.accountId}</div>,
      width: 200,
    },
    {
      title: (
        <>
          Date
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
      key: 'date',
      dataIndex: 'date',
      width: 140,
      sorter: (a: any, b: any) => a.date - b.date,
      sortOrder: orderDirection,
      render: (_, record) => <div className='dark-font'>{record.date}</div>,
    },
  ];

  return (
    <TableWrapper>
      <Table
        scroll={{ x: 1000 }}
        columns={columns}
        dataSource={data}
        showSorterTooltip={{
          title:
            orderDirection === 'ascend'
              ? 'Click to sort descending'
              : 'Click to sort ascending',
        }}
        // onRow={(record, rowIndex) => {
        //   return {
        //     onClick: () => {
        //       router.push(`/manage-users-roles/edit-admin-user`);
        //     },
        //   };
        // }}
      />
    </TableWrapper>
  );
};

export default PaymentHistoryDataTable;
