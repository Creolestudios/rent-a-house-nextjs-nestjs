import React, { useState, useEffect } from "react";
import { TableWrapper } from "@/globalStyles";
import { Tag, Table, Avatar } from "antd";
import type { ColumnsType } from "antd/es/table";
import { UserOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";
import Icon from "@ant-design/icons";
import EyeSvgIcon from "@/assets/images/icons/EyeSvg";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/rootReducer";
import Image from 'next/image';
import UserIcon from '@/assets/images/user5.png';

interface DataType {
  key: string;
  name: string;
  host_details: {
    first_name: string;
    last_name: string;
    image: string;
  };
  host: string;
  id: number;
  type: string;
  tenant_counts: number;
  available_from: string;
}

const ManageListingDataTable = ({ route, setPageNo }: any) => {
  const router = useRouter();
  const propertyList = useSelector(
    (state: RootState) => state.adminPropertyListingReducer.propertyList
  );
  const totalProperty = useSelector(
    (state: RootState) => state.adminPropertyListingReducer.totalProperty
  );

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
    propertyList.map((item: any) => {
      let obj = {
        ...item,
        key: item.id,
      };
      array.push(obj);
    });
    setTableData(array);
  }, [propertyList]);

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
      render: (_, record) => <div>{record.name}</div>,
    },
    {
      title: (
        <>
          Host Details
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
      dataIndex: 'host',
      key: 'host',
      sorter: (a: any, b: any) => a.host - b.host,
      sortOrder: orderDirection,
      render: (_, record) => (
        <div>
          <Image
            src={
              isImageUrl(record.host_details.image)
                ? record.host_details.image
                : UserIcon
            }
            alt='images'
            width={24}
            height={24}
            style={{
              marginRight: '10px',
            }}
          />
          {record.host_details.first_name} {record.host_details.last_name}
        </div>
      ),
    },
    {
      title: (
        <>
          Property Type
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
      dataIndex: 'type',
      key: 'type',
      sorter: (a: any, b: any) => a.type - b.type,
      sortOrder: orderDirection,
    },
    {
      title: (
        <>
          No of Tenants
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
      dataIndex: 'tenant_counts',
      key: 'tenant_counts',
      sorter: (a: any, b: any) => a.tenant_counts - b.tenant_counts,
      sortOrder: orderDirection,
      render: (_, record) => <div className=''>{record.tenant_counts}</div>,
    },
    {
      title: (
        <>
          Available from
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
      key: 'available_from',
      dataIndex: 'available_from',
      sorter: (a: any, b: any) => a.available_from - b.available_from,
      sortOrder: orderDirection,
      render: (_, record) => (
        <div className='dark-font'>{record.available_from}</div>
      ),
    },
    {
      title: 'View',
      key: 'view',
      render: (_, record) => (
        <div className=''>
          <Icon
            onClick={() => router.push(`${route}?${record.id}`)}
            component={EyeSvgIcon}
          />
        </div>
      ),
    },
  ];
console.log("propertyList",propertyList)
  return (
    <TableWrapper>
      <Table
        columns={columns}
        dataSource={tableData}
        scroll={{ x: 900 }}
        pagination={{
          pageSize: 10,
          total: totalProperty,
          onChange: (page) => {
            setPageNo(page);
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

export default ManageListingDataTable;
