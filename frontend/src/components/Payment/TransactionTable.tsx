import React, { useState } from 'react';
import { TableWrapper } from '@/globalStyles';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import EyeSvgIcon from '@/assets/images/icons/EyeSvg';
import { useRouter } from 'next/router';

interface CompletedDataType {
  key: string;
  id: number | string;
  guest: string;
  paymentType: string;
  paymentNumber: string;
  propertyName: string;
  startDate: string;
  endDate: string;
  amount: string;
  payout: string;
  status: string;
  mainDate: string;
}

interface UpcomingDataType {
  key: string;
  sr: number | string;
  guest: string;
  paymentType: string;
  paymentNumber: string;
  propertyName: string;
  startDate: string;
  endDate: string;
  amount: string;
  mainDate: string;
}

const completedData: CompletedDataType[] = [
  {
    key: '1',
    id: '542541',
    guest: 'James harper',
    propertyName: 'Am Apartment',
    paymentType: 'Stripe',
    paymentNumber: '**** **** **** 6789',
    startDate: '1/5/2019',
    endDate: '5/5/2019',
    amount: 'Є 200',
    payout: 'Є 200',
    status: 'Successfull',
    mainDate: '20/01/2023',
  },
  {
    key: '2',
    id: '542542',
    guest: 'James harper2',
    propertyName: 'Am Apartment',
    paymentType: 'Stripe',
    paymentNumber: '**** **** **** 6789',
    startDate: '1/5/2019',
    endDate: '5/5/2019',
    amount: 'Є 200',
    payout: 'Є 200',
    status: 'Successfull',
    mainDate: '20/01/2023',
  },
  {
    key: '3',
    id: '542543',
    guest: 'James harper3',
    propertyName: 'Am Apartment',
    paymentType: 'Stripe',
    paymentNumber: '**** **** **** 6789',
    startDate: '1/5/2019',
    endDate: '5/5/2019',
    amount: 'Є 200',
    payout: 'Є 200',
    status: 'Successfull',
    mainDate: '20/01/2023',
  },
  {
    key: '4',
    id: '542544',
    guest: 'James harper4',
    propertyName: 'Am Apartment',
    paymentType: 'Stripe',
    paymentNumber: '**** **** **** 6789',
    startDate: '1/5/2019',
    endDate: '5/5/2019',
    amount: 'Є 200',
    payout: 'Є 200',
    status: 'Successfull',
    mainDate: '20/01/2023',
  },
  {
    key: '5',
    id: '542545',
    guest: 'James harper5',
    propertyName: 'Am Apartment',
    paymentType: 'Stripe',
    paymentNumber: '**** **** **** 6789',
    startDate: '1/5/2019',
    endDate: '5/5/2019',
    amount: 'Є 200',
    payout: 'Є 200',
    status: 'Successfull',
    mainDate: '20/01/2023',
  },
];

const upcomingData: UpcomingDataType[] = [
  {
    key: '1',
    sr: '1',
    guest: 'James harper',
    propertyName: 'Am Apartment',
    paymentType: 'Stripe',
    paymentNumber: '**** **** **** 6789',
    startDate: '1/5/2019',
    endDate: '5/5/2019',
    amount: 'Є 200',
    mainDate: '20/01/2023',
  },
  {
    key: '2',
    sr: '2',
    guest: 'James1 harper',
    propertyName: 'Am Apartment',
    paymentType: 'Stripe',
    paymentNumber: '**** **** **** 6789',
    startDate: '1/5/2019',
    endDate: '5/5/2019',
    amount: 'Є 200',
    mainDate: '20/01/2023',
  },
];

const TransactionTable = ({ transactionType }: any) => {
  //   const router = useRouter();

  const [orderDirection, setOrderDirection] = useState();

  const changeOrder = (direction: any) => () => {
    setOrderDirection(direction);
  };

  const completedColumns: ColumnsType<CompletedDataType> = [
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
      width: 90,
    },
    {
      title: (
        <>
          Guest Details
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
      dataIndex: 'guest',
      key: 'guest',
      width: 180,
      sorter: (a: any, b: any) => a.guest - b.guest,
      sortOrder: orderDirection,
      render: (_, record) => (
        <>
          <div className='name dark-font'>{record?.guest}</div>
          <div>{record?.propertyName}</div>
          <div className='secondary'>
            {record?.startDate} - {record?.endDate}
          </div>
        </>
      ),
    },
    {
      title: (
        <>
          Payment Details
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
      dataIndex: 'payment',
      key: 'payment',
      width: 170,
      sorter: (a: any, b: any) => a.payment - b.payment,
      sortOrder: orderDirection,
      render: (_, record) => (
        <>
          <div>{record?.paymentType}</div>
          <div>{record?.paymentNumber}</div>
        </>
      ),
    },
    {
      title: (
        <>
          Amt.
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
      width: 90,
      sorter: (a: any, b: any) => a.amount - b.amount,
      sortOrder: orderDirection,
      render: (_, record) => (
        <>
          <div className='green'>{record?.amount}</div>
        </>
      ),
    },
    {
      title: (
        <>
          Payout
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
      dataIndex: 'payout',
      key: 'payout',
      width: 100,
      sorter: (a: any, b: any) => a.payout - b.payout,
      sortOrder: orderDirection,
      render: (_, record) => (
        <>
          <div className='red'>{record?.payout}</div>
        </>
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
      width: 100,
      sorter: (a: any, b: any) => a.status - b.status,
      sortOrder: orderDirection,
      render: (_, record) => (
        <div className='dark-font'>
          <div>{record?.status}</div>
        </div>
      ),
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
      dataIndex: 'mainDate',
      key: 'mainDate',
      sorter: (a: any, b: any) => a.mainDate - b.mainDate,
      sortOrder: orderDirection,
      render: (_, record) => (
        <>
          <div>{record?.mainDate}</div>
        </>
      ),
    },
    {
      title: '',
      key: 'view',
      width: 65,
      sorter: (a: any, b: any) => a - b,
      //   sortOrder: orderDirection,
      render: (_, record) => (
        <div className='icon'>
          <Icon
            // onClick={() => router.push(`${route}`)}
            component={EyeSvgIcon}
          />
        </div>
      ),
    },
  ];

  const upcomingColumns: ColumnsType<UpcomingDataType> = [
    {
      title: (
        <>
          Sr no.
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
      dataIndex: 'sr',
      key: 'sr',
      sorter: (a: any, b: any) => a.sr - b.sr,
      sortOrder: orderDirection,
      render: (_, record) => <div>{record.sr}</div>,
      width: 70,
    },
    {
      title: (
        <>
          Guest Details
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
      dataIndex: 'guest',
      key: 'guest',
      width: 200,
      sorter: (a: any, b: any) => a.guest - b.guest,
      sortOrder: orderDirection,
      render: (_, record) => (
        <>
          <div className='name dark-font'>{record?.guest}</div>
          <div>{record?.propertyName}</div>
          <div className='secondary'>
            {record?.startDate} - {record?.endDate}
          </div>
        </>
      ),
    },
    {
      title: (
        <>
          Amt.
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
      width: 50,
      sorter: (a: any, b: any) => a.amount - b.amount,
      sortOrder: orderDirection,
      render: (_, record) => (
        <>
          <div className='green'>{record?.amount}</div>
        </>
      ),
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
      dataIndex: 'mainDate',
      key: 'mainDate',
      width: 40,
      sorter: (a: any, b: any) => a.mainDate - b.mainDate,
      sortOrder: orderDirection,
      render: (_, record) => (
        <>
          <div>{record?.mainDate}</div>
        </>
      ),
    },
    {
      title: '',
      key: 'view',
      width: 30,
      sorter: (a: any, b: any) => a - b,
      //   sortOrder: orderDirection,
      render: (_, record) => (
        <div className='icon'>
          <Icon
            // onClick={() => router.push(`${route}`)}
            component={EyeSvgIcon}
          />
        </div>
      ),
    },
  ];

  return (
    <TableWrapper>
      {transactionType === 'completed' ? (
        <Table
          className='transaction-detail-table'
          scroll={{ x: 800 }}
          columns={completedColumns}
          dataSource={completedData}
          showSorterTooltip={{
            title:
              orderDirection === 'ascend'
                ? 'Click to sort descending'
                : 'Click to sort ascending',
          }}
        />
      ) : (
        <Table
          className='transaction-detail-table'
          scroll={{ x: 500 }}
          columns={upcomingColumns}
          dataSource={upcomingData}
          showSorterTooltip={{
            title:
              orderDirection === 'ascend'
                ? 'Click to sort descending'
                : 'Click to sort ascending',
          }}
        />
      )}
    </TableWrapper>
  );
};

export default TransactionTable;
