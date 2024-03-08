import React, { useState } from 'react';
import { TableWrapper } from '@/globalStyles';
import { Tag, Table, Avatar, Select } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { UserOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import EyeSvgIcon from '@/assets/images/icons/EyeSvg';
import { useRouter } from 'next/router';
import Image from 'next/image';
import UserIcon from '@/assets/images/user5.png';

interface DataType {
  key: string;
  property: string;
  id: number | string;
  tenants: number;
  date: string;
  status: string;
  hostName: string;
  booking: string;
  payoutAmount: number | string;
  action: string;
  payoutStatus: string;
}

const data: DataType[] = [
  {
    key: '1',
    id: '001',
    property: 'La Ri Sa Apartment',
    tenants: 5,
    date: '01-12-2023',
    status: 'Ongoing',
    hostName: 'James Harper',
    booking: 'Confirmed',
    payoutAmount: 'CA$200',
    action: 'Granted',
    payoutStatus: 'Successful',
  },
  {
    key: '2',
    id: '002',
    property: 'La Ri Sa Apartment',
    tenants: 5,
    date: '01-12-2023',
    status: 'Ongoing',
    hostName: 'James Harper',
    booking: 'Confirmed',
    payoutAmount: 'CA$200',
    action: 'Granted',
    payoutStatus: 'Successful',
  },
  {
    key: '3',
    id: '003',
    property: 'La Ri Sa Apartment',
    tenants: 5,
    date: '01-12-2023',
    status: 'Ongoing',
    hostName: 'James Harper',
    booking: 'Confirmed',
    payoutAmount: 'CA$200',
    action: 'Granted',
    payoutStatus: 'Successful',
  },
  {
    key: '4',
    id: '001',
    property: 'La Ri Sa Apartment',
    tenants: 5,
    date: '01-12-2023',
    status: 'Ongoing',
    hostName: 'James Harper',
    booking: 'Confirmed',
    payoutAmount: 'CA$200',
    action: 'Granted',
    payoutStatus: 'Successful',
  },
  {
    key: '5',
    id: '002',
    property: 'La Ri Sa Apartment',
    tenants: 5,
    date: '01-12-2023',
    status: 'Ongoing',
    hostName: 'James Harper',
    booking: 'Confirmed',
    payoutAmount: 'CA$200',
    action: 'Granted',
    payoutStatus: 'Successful',
  },
  {
    key: '6',
    id: '003',
    property: 'La Ri Sa Apartment',
    tenants: 5,
    date: '01-12-2023',
    status: 'Ongoing',
    hostName: 'James Harper',
    booking: 'Confirmed',
    payoutAmount: 'CA$200',
    action: 'Granted',
    payoutStatus: 'Successful',
  },
  {
    key: '7',
    id: '001',
    property: 'La Ri Sa Apartment',
    tenants: 5,
    date: '01-12-2023',
    status: 'Ongoing',
    hostName: 'James Harper',
    booking: 'Confirmed',
    payoutAmount: 'CA$200',
    action: 'Granted',
    payoutStatus: 'Successful',
  },
  {
    key: '8',
    id: '002',
    property: 'La Ri Sa Apartment',
    tenants: 5,
    date: '01-12-2023',
    status: 'Ongoing',
    hostName: 'James Harper',
    booking: 'Confirmed',
    payoutAmount: 'CA$200',
    action: 'Granted',
    payoutStatus: 'Successful',
  },
  {
    key: '9',
    id: '003',
    property: 'La Ri Sa Apartment',
    tenants: 5,
    date: '01-12-2023',
    status: 'Ongoing',
    hostName: 'James Harper',
    booking: 'Confirmed',
    payoutAmount: 'CA$200',
    action: 'Granted',
    payoutStatus: 'Successful',
  },
  {
    key: '10',
    id: '001',
    property: 'La Ri Sa Apartment',
    tenants: 5,
    date: '01-12-2023',
    status: 'Ongoing',
    hostName: 'James Harper',
    booking: 'Confirmed',
    payoutAmount: 'CA$200',
    action: 'Granted',
    payoutStatus: 'Successful',
  },
  {
    key: '11',
    id: '002',
    property: 'La Ri Sa Apartment',
    tenants: 5,
    date: '01-12-2023',
    status: 'Ongoing',
    hostName: 'James Harper',
    booking: 'Confirmed',
    payoutAmount: 'CA$200',
    action: 'Granted',
    payoutStatus: 'Successful',
  },
  {
    key: '12',
    id: '003',
    property: 'La Ri Sa Apartment',
    tenants: 5,
    date: '01-12-2023',
    status: 'Ongoing',
    hostName: 'James Harper',
    booking: 'Confirmed',
    payoutAmount: 'CA$200',
    action: 'Granted',
    payoutStatus: 'Successful',
  },
];

const ManagePayoutHistoryDataTable = ({ route }: any) => {
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
      width: 75,
    },
    {
      title: (
        <>
          Host Name
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
      dataIndex: 'hostName',
      key: 'hostName',
      sorter: (a: any, b: any) => a.hostName - b.hostName,
      sortOrder: orderDirection,
      render: (_, record) => (
        <div>
          <Image
            src={isImageUrl('UserIcon') ? UserIcon : UserIcon}
            alt='images'
            width={24}
            height={24}
            style={{
              marginRight: '10px',
            }}
          />{' '}
          {record.hostName}
        </div>
      ),
      width: 200,
    },
    {
      title: (
        <>
          Property Name
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
      dataIndex: 'property',
      key: 'property',
      sorter: (a: any, b: any) => a.property - b.property,
      sortOrder: orderDirection,
      render: (_, record) => <div className=''>{record.property}</div>,
      width: 200,
    },

    {
      title: (
        <>
          Booking Status
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
      dataIndex: 'booking',
      key: 'booking',
      sorter: (a: any, b: any) => a.booking - b.booking,
      sortOrder: orderDirection,
      render: (_, record) => <div className=''>{record.booking}</div>,
      width: 200,
    },
    {
      title: (
        <>
          Payout Amount
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
      key: 'payoutAmount',
      dataIndex: 'payoutAmount',
      sorter: (a: any, b: any) => a.payoutAmount - b.payoutAmount,
      sortOrder: orderDirection,
      render: (_, record) => (
        <div className='dark-font payment'>{record.payoutAmount}</div>
      ),
      width: 200,
    },
    {
      title: (
        <>
          Payout Status
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
      key: 'payoutStatus',
      dataIndex: 'payoutStatus',
      sorter: (a: any, b: any) => a.payoutStatus - b.payoutStatus,
      sortOrder: orderDirection,
      render: (_, record) => <div className=''>{record.payoutStatus}</div>,
      width: 160,
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
      sorter: (a: any, b: any) => a.date - b.date,
      sortOrder: orderDirection,
      render: (_, record) => <div className='dark-font'>{record.date}</div>,
      width: 120,
    },
    {
      title: (
        <>
          Action
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
      key: 'action',
      dataIndex: 'action',
      sorter: (a: any, b: any) => a.action - b.action,
      sortOrder: orderDirection,
      render: (_, record) => <div className='dark-font'>{record.action}</div>,
      width: 120,
    },
    {
      title: 'View',
      key: 'view',
      width: 80,
      render: (_, record) => (
        <div className=''>
          <Icon
            onClick={() => router.push(`${route}`)}
            component={EyeSvgIcon}
          />
        </div>
      ),
    },
  ];

  return (
    <TableWrapper>
      <Table
        scroll={{ x: 1100 }}
        columns={columns}
        dataSource={data}
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

export default ManagePayoutHistoryDataTable;
