import React, { useEffect, useState } from 'react';
import { TableWrapper } from '@/globalStyles';
import { Tag, Table, Avatar, Pagination } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { UserOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import EyeSvgIcon from '@/assets/images/icons/EyeSvg';
import UserIcon from '@/assets/images/user5.png';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { RootState } from '@/redux/store/rootReducer';
import Image from 'next/image';

interface DataType {
  key: string;
  user: string;
  id: number | string;
  email: string;
  mobile: string;
  date: string;
  first_name: string;
  last_name: string;
  created_at: string;
  image: string;
}

const UserDataTable = ({ setPageNumber }) => {
  const userList = useSelector(
    (state: RootState) => state.usersListingReducer.userList
  );
  const totalUser = useSelector(
    (state: RootState) => state.usersListingReducer.totalUser
  );
  const router = useRouter();

  const [orderDirection, setOrderDirection] = useState();
  const [tableData, setTableData] = useState<any>();

  const changeOrder = (direction: any) => () => {
    setOrderDirection(direction);
  };
  function isImageUrl(url: any) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg'];
    const extension = url.slice(url.lastIndexOf('.')).toLowerCase();
    return imageExtensions.includes(extension);
  }
  useEffect(() => {
    let array = [];
    userList.map((item: any) => {
      console.log('image', item.image);
      let obj = {
        ...item,
        key: item.id,
      };
      array.push(obj);
    });
    setTableData(array);
  }, [userList]);

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
          User Details
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
      dataIndex: 'user',
      key: 'user',
      sorter: (a: any, b: any) => a.user - b.user,
      sortOrder: orderDirection,
      render: (_, record) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <Avatar
            size={24}
            style={{
              lineHeight: '0',
              background: 'none',
            }}
          > */}
          {/* <Image src={UserIcon} width={216} height={200} alt='img' /> */}
          <Image
            src={isImageUrl(record.image) ? record.image : UserIcon}
            alt='images'
            width={24}
            height={24}
            style={{
              marginRight: '10px',
            }}
          />
          {/* </Avatar> */}
          <span
            style={{ lineHeight: '24px' }}
          >{`${record.first_name} ${record.last_name}`}</span>
        </div>
      ),
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
          Phone Number
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
      dataIndex: 'mobile',
      key: 'mobile',
      sorter: (a: any, b: any) => a.mobile - b.mobile,
      sortOrder: orderDirection,
      render: (_, record) => <div className=''>{record.mobile}</div>,
    },
    {
      title: (
        <>
          Joining Date
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
      key: 'created_at',
      dataIndex: 'created_at',
      sorter: (a: any, b: any) => a.created_at - b.created_at,
      sortOrder: orderDirection,
      render: (_, record) => (
        <div className='dark-font'>
          {moment(record.created_at).format('MM/DD/YYYY')}
        </div>
      ),
    },
    {
      title: 'View',
      key: 'view',
      render: (_, record) => (
        <div className='icon'>
          <Icon
            onClick={() => {
              router.push(`/admin/system-users/view-user?${record.id}`);
            }}
            component={EyeSvgIcon}
          />
        </div>
      ),
    },
  ];

  return (
    <TableWrapper>
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={{
          pageSize: 10,
          total: totalUser,
          onChange: (page) => {
            setPageNumber(page);
          },
        }}
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

export default UserDataTable;
