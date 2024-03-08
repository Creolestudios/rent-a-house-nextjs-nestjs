import React, { useEffect, useState } from 'react';
import { AdditionalCostWrapper } from './PropertyListingOptionWrapper.styles';
import { Input } from 'antd';
import Icon from '@ant-design/icons';
import deleteIcon from '@/assets/images/icons/TrashSvg';
import plusIcon from '@/assets/images/icons/PlusIconSvg';

const AdditionalCost = ({
  additionalCost,
  setAdditionalCost,
  setEditData,
  editData,
}) => {
  const addInputCost = () => {
    const newData = [
      ...additionalCost,
      additionalCost[additionalCost.length - 1]
        ? {
            id: additionalCost[additionalCost.length - 1].id + 1,
            name: '',
            amount: '',
          }
        : { id: 1, name: '', amount: '' },
    ];
    setAdditionalCost(newData);
  };

  const deleteBlock = (id: any) => {
    ({ id, additionalCost });

    const filterData = additionalCost.filter((e: any) => e.id !== id);
    setAdditionalCost(filterData);
  };

  const handleAdditionalCost = (id, key, value) => {
    const updatedData = additionalCost.map((item) => {
      if (item.id === id) {
        return { ...item, [key]: value };
      }
      return item;
    });
    setAdditionalCost(updatedData);
    setEditData({
      ...editData,
      [key]: value,
      id: additionalCost[additionalCost.length - 1].id + 1,
    });
  };

  return (
    <AdditionalCostWrapper>
      {additionalCost?.map((data: any) => (
        <div key={data?.id} className='input-block'>
          <div className='block'>
            <Input
              value={data.name}
              placeholder='Define Cost'
              onChange={(e) =>
                handleAdditionalCost(data.id, 'name', e.target.value)
              }
            />
          </div>
          <div className='block'>
            <Input
              value={data.amount}
              placeholder='Enter Amount'
              onChange={(e) =>
                handleAdditionalCost(
                  data.id,
                  'amount',
                  parseInt(e.target.value)
                )
              }
            />
          </div>
          <div className='block'>
            <Icon component={deleteIcon} onClick={() => deleteBlock(data.id)} />
          </div>
        </div>
      ))}
      <div className='cost-btn' onClick={addInputCost}>
        <Icon component={plusIcon} />
        Add Cost
      </div>
    </AdditionalCostWrapper>
  );
};

export default AdditionalCost;
