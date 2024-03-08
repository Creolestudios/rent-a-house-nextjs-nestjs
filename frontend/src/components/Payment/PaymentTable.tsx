import React, { useState } from 'react';
import { Divider, Radio, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Icon from '@ant-design/icons';
import deleteIcon from '@/assets/images/icons/DeleteSvg';

interface DataType {
  key: React.Key;
  methods: string;
  details: string;
  remove: string;
}

const data: DataType[] = [
  {
    key: '1',
    methods: 'Card',
    details: '**** **** **** 6789',
    remove: '',
  },
  {
    key: '2',
    methods: 'Stripe',
    details: '**** **** **** 6789',
    remove: '',
  },
];

const PaymentTable = () => {
  const [tableData, setTableData] = useState(data);

  const columns: ColumnsType<DataType> = [
    {
      title: 'Methods',
      dataIndex: 'methods',
      width: 160,
      className: 'method',
      render: (_, record) => <div>{record.methods}</div>,
    },
    {
      title: 'Details',
      dataIndex: 'details',
      width: 200,
    },
    {
      title: 'Remove',
      dataIndex: 'remove',
      width: 160,
      className: 'remove',
      render: (_, record) => {
        return (
          <div>
            <Icon
              component={deleteIcon}
              onClick={() => deleteRow(record.key)}
            />
          </div>
        );
      },
    },
  ];

  //   rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {},
  };

  const deleteRow = (id: any) => {
    const newData = tableData.filter((item) => item?.key !== id);
    setTableData(newData);
  };

  return (
    <div className='payment-card'>
      <Table
        scroll={{ x: 450 }}
        style={{
          maxWidth: '630px',
        }}
        bordered
        rowSelection={{
          type: 'radio',
          columnTitle: 'Default',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={tableData}
        pagination={false}
      />
    </div>
  );
};

export default PaymentTable;
