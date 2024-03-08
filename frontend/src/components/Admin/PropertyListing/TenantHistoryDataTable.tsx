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
import moment from "moment";
import { tenantHistoryStatus } from "@/config/constants";
// import PropertyDetailModal from '../CommonModal/PropertyDetailModal';

interface DataType {
  key: string;
  property: {
    name: string;
  };
  name: string;
  id: number;
  tenant: {
    first_name: string;
    last_name: string;
  };
  start_date: string;
  end_date: string;
  status: string;
}

const TenantHistoryDataTable = ({ route, setPageNo, tenantList }: any) => {
  const router = useRouter();
  const [tableData, setTableData] = useState<any>();
  const totalTenant = useSelector(
    (state: RootState) => state.adminPropertyListingReducer.tenantHistory
  );
  const [orderDirection, setOrderDirection] = useState();

  const changeOrder = (direction: any) => () => {
    setOrderDirection(direction);
  };

  useEffect(() => {
    let array = [];
    tenantList.map((item: any) => {
      let obj = {
        ...item,
        key: item.id,
      };
      array.push(obj);
    });
    setTableData(array);
  }, [tenantList]);

  const columns: ColumnsType<DataType> = [
    {
      title: (
        <>
          ID
          <div className="btn-wrapper">
            <button onClick={changeOrder("ascend")}>
              <UpOutlined />
            </button>
            <button onClick={changeOrder("descent")}>
              <DownOutlined />
            </button>
          </div>
        </>
      ),
      dataIndex: "id",
      key: "id",
      sorter: (a: any, b: any) => a.id - b.id,
      sortOrder: orderDirection,
      render: (_, record) => <div>{record.id}</div>,
      width: 70,
    },
    {
      title: (
        <>
          Tenant Name
          <div className="btn-wrapper">
            <button onClick={changeOrder("ascend")}>
              <UpOutlined />
            </button>
            <button onClick={changeOrder("descent")}>
              <DownOutlined />
            </button>
          </div>
        </>
      ),
      dataIndex: "name",
      key: "name",
      sorter: (a: any, b: any) => a.first_name - b.first_name,
      sortOrder: orderDirection,
      render: (_, record) => (
        <div>
          <Avatar size={24} icon={<UserOutlined />} />
          {`${record.tenant.first_name} ${record.tenant.last_name}`}
        </div>
      ),
      width: 350,
    },
    {
      title: (
        <>
          Property Name
          <div className="btn-wrapper">
            <button onClick={changeOrder("ascend")}>
              <UpOutlined />
            </button>
            <button onClick={changeOrder("descent")}>
              <DownOutlined />
            </button>
          </div>
        </>
      ),
      dataIndex: "property",
      key: "property",
      width: 350,
      sorter: (a: any, b: any) => a.property.name - b.property.name,
      sortOrder: orderDirection,
      render: (_, record) => <div>{record.property.name}</div>,
    },
    {
      title: (
        <>
          Booking Date
          <div className="btn-wrapper">
            <button onClick={changeOrder("ascend")}>
              <UpOutlined />
            </button>
            <button onClick={changeOrder("descent")}>
              <DownOutlined />
            </button>
          </div>
        </>
      ),
      dataIndex: "date",
      key: "date",
      sorter: (a: any, b: any) => a.end_date - b.end_date,
      sortOrder: orderDirection,
      render: (_, record) => (
        <div className="dark-font">
          {moment(record.end_date).format("YYYY-MM-DD")}
        </div>
      ),
      width: 160,
    },
    {
      title: (
        <>
          Checkout Date
          <div className="btn-wrapper">
            <button onClick={changeOrder("ascend")}>
              <UpOutlined />
            </button>
            <button onClick={changeOrder("descent")}>
              <DownOutlined />
            </button>
          </div>
        </>
      ),
      dataIndex: "tenants",
      key: "tenants",
      sorter: (a: any, b: any) => a.start_date - b.start_date,
      sortOrder: orderDirection,
      render: (_, record) => (
        <div className="dark-font">
          {moment(record.start_date).format("YYYY-MM-DD")}
        </div>
      ),
      width: 170,
    },
    {
      title: (
        <>
          Status
          <div className="btn-wrapper">
            <button onClick={changeOrder("ascend")}>
              <UpOutlined />
            </button>
            <button onClick={changeOrder("descent")}>
              <DownOutlined />
            </button>
          </div>
        </>
      ),
      key: "status",
      dataIndex: "status",
      sorter: (a: any, b: any) => a.period - b.period,
      sortOrder: orderDirection,
      render: (_, record) => (
        <div className="">{tenantHistoryStatus[record?.status]?.label}</div>
      ),
      width: 180,
    },
    {
      title: "View",
      key: "view",
      width: 100,
      render: (_, record) => (
        <div className="">
          <Icon
            onClick={() => router.push(`${route}?${record.id}`)}
            component={EyeSvgIcon}
          />
        </div>
      ),
    },
  ];
  tenantList;

  return (
    <TableWrapper>
      <Table
        columns={columns}
        dataSource={tableData}
        scroll={{ x: 1000 }}
        pagination={{
          pageSize: 10,
          total: totalTenant,
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

export default TenantHistoryDataTable;
