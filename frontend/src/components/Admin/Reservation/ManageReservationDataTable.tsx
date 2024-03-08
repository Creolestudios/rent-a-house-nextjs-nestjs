import React, { useEffect, useState } from 'react';
import { TableWrapper } from '@/globalStyles';
import { Tag, Table, Avatar } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { UserOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import EyeSvgIcon from '@/assets/images/icons/EyeSvg';
import { useRouter } from 'next/router';
// import PropertyDetailModal from '../CommonModal/PropertyDetailModal';
import Image from 'next/image';
import UserIcon from '@/assets/images/user5.png';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/rootReducer';
import { adminReservationStatus } from '@/config/constants';

interface DataType {
  key: string;
  property: string;
  id: number | string;
  tenants: number;
  date: string;
  status: string;
  hostName: string;
  guestName: string;
}

// const data: DataType[] = [
//   {
//     key: '1',
//     id: '001',
//     property: 'La Ri Sa Apartment',
//     tenants: 5,
//     date: '01-12-2023',
//     status: 'Ongoing',
//     hostName: 'James Harper',
//     guestName: 'James Harper',
//   },
//   {
//     key: '2',
//     id: '002',
//     property: 'La Ri Sa Apartment',
//     tenants: 5,
//     date: '01-12-2023',
//     status: 'Ongoing',
//     hostName: 'James Harper',
//     guestName: 'James Harper',
//   },
//   {
//     key: '3',
//     id: '003',
//     property: 'La Ri Sa Apartment',
//     tenants: 5,
//     date: '01-12-2023',
//     status: 'Ongoing',
//     hostName: 'James Harper',
//     guestName: 'James Harper',
//   },
//   {
//     key: '4',
//     id: '001',
//     property: 'La Ri Sa Apartment',
//     tenants: 5,
//     date: '01-12-2023',
//     status: 'Ongoing',
//     hostName: 'James Harper',
//     guestName: 'James Harper',
//   },
//   {
//     key: '5',
//     id: '002',
//     property: 'La Ri Sa Apartment',
//     tenants: 5,
//     date: '01-12-2023',
//     status: 'Ongoing',
//     hostName: 'James Harper',
//     guestName: 'James Harper',
//   },
//   {
//     key: '6',
//     id: '003',
//     property: 'La Ri Sa Apartment',
//     tenants: 5,
//     date: '01-12-2023',
//     status: 'Ongoing',
//     hostName: 'James Harper',
//     guestName: 'James Harper',
//   },
//   {
//     key: '7',
//     id: '001',
//     property: 'La Ri Sa Apartment',
//     tenants: 5,
//     date: '01-12-2023',
//     status: 'Ongoing',
//     hostName: 'James Harper',
//     guestName: 'James Harper',
//   },
//   {
//     key: '8',
//     id: '002',
//     property: 'La Ri Sa Apartment',
//     tenants: 5,
//     date: '01-12-2023',
//     status: 'Ongoing',
//     hostName: 'James Harper',
//     guestName: 'James Harper',
//   },
//   {
//     key: '9',
//     id: '003',
//     property: 'La Ri Sa Apartment',
//     tenants: 5,
//     date: '01-12-2023',
//     status: 'Ongoing',
//     hostName: 'James Harper',
//     guestName: 'James Harper',
//   },
//   {
//     key: '10',
//     id: '001',
//     property: 'La Ri Sa Apartment',
//     tenants: 5,
//     date: '01-12-2023',
//     status: 'Ongoing',
//     hostName: 'James Harper',
//     guestName: 'James Harper',
//   },
//   {
//     key: '11',
//     id: '002',
//     property: 'La Ri Sa Apartment',
//     tenants: 5,
//     date: '01-12-2023',
//     status: 'Ongoing',
//     hostName: 'James Harper',
//     guestName: 'James Harper',
//   },
//   {
//     key: '12',
//     id: '003',
//     property: 'La Ri Sa Apartment',
//     tenants: 5,
//     date: '01-12-2023',
//     status: 'Ongoing',
//     hostName: 'James Harper',
//     guestName: 'James Harper',
//   },
// ];

const ManageReservationDataTable = ({ route, setPageNo  }: any) => {
  const router = useRouter();
    const reservationListData = useSelector(
    (state:RootState)=>state.adminReservationListingReducer.reservationList
    )
    const totalReservation=useSelector(
      (state:RootState)=>state.adminReservationListingReducer.totalReservation
    )
  const [orderDirection, setOrderDirection] = useState();
  const [tableData, setTableData] = useState<any>();

  const changeOrder = (direction: any) => () => {
    setOrderDirection(direction);
  };
  function isImageUrl(url: any) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg'];
    const extension = url?.slice(url.lastIndexOf('.')).toLowerCase();
    return imageExtensions.includes(extension);
  }

  const columns: ColumnsType<any> = [
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
      render: (_, record) => <div>{record?.id}</div>,
      width: 70,
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
      dataIndex: 'name',
      key: 'name',
      sorter: (a: any, b: any) => a.name - b.name,
      sortOrder: orderDirection,
      render: (_, record) => <div className='underline'>{record?.propertys_id?.name ? record?.propertys_id?.name : 'deleted-property'}</div>,
      width: 200,
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
            src={isImageUrl(record?.landlord?.image) ? record.landlord.image : UserIcon}
            alt='images'
            width={24}
            height={24}
            style={{
              marginRight: '10px',
            }}
          />
          {record?.landlord?.first_name ? record?.landlord?.first_name:'deleted-landlord'} {record?.landlord?.last_name}
        </div>
      ),
      width: 180,
    },
    {
      title: (
        <>
          Guest Name
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
      dataIndex: 'guestName',
      key: 'guestName',
      sorter: (a: any, b: any) => a.guestName - b.guestName,
      sortOrder: orderDirection,
      render: (_, record) => (
        <div>
          <Image
            src={isImageUrl(record?.tenant?.image) ? record.tenant.image : UserIcon}
            alt='images'
            width={24}
            height={24}
            style={{
              marginRight: '10px',
            }}
          />
              {record?.tenant?.first_name ? record?.tenant?.first_name:'deleted-guest '}     {record?.tenant?.last_name}

        </div>
      ),
      width: 180,
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
      dataIndex: 'date',
      key: 'date',
      sorter: (a: any, b: any) => a.date - b.date,
      sortOrder: orderDirection,
      render: (_, record) => <div className='dark-font'>{record?.start_date?.split('T')[0]}</div>,
      width: 140,
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
      render: (_, record) => <div className=''>{adminReservationStatus[record?.status]?.label}</div>,
      width: 120,
    },
    {
      title: 'View',
      key: 'view',
      width: 50,
      render: (_, record) => (
        <div className=''>
          <Icon
            onClick={() => router.push(`${route}?${record?.id}`)}
            component={EyeSvgIcon}
          />
        </div>
      ),
    },
  ];
useEffect(() => {
  let array = [];
  reservationListData.map((item: any) => {
    let obj = {
      ...item,
      key: item.id,
    };
    array.push(obj);
  });
  setTableData(array);
}, [reservationListData]);
  return (
    <TableWrapper>
      <Table
        scroll={{ x: 900 }}
        columns={columns}
        dataSource={tableData}
        showSorterTooltip={{
          title:
            orderDirection === 'ascend'
              ? 'Click to sort descending'
              : 'Click to sort ascending',
        }}
        pagination={
          totalReservation <= 10 ?false:
          {
          pageSize:10,
          total:totalReservation,
          onChange:(page)=>{
            setPageNo(page);
          }
        }
      }
      />
    </TableWrapper>
  );
};

export default ManageReservationDataTable;
