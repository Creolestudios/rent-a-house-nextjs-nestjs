import { Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommissionDetailWrapper } from './Commission.styles';
import actions from '@/redux/admin/comission/commission.action';
import { RootState } from '@/redux/store/rootReducer';
import Icon from '@ant-design/icons';
import DownArrowIcon from '@/assets/images/icons/DownArrowSvg';
import { appConstant, commissionFrom } from '@/config/constants';

interface Iprop {
  setUpdatedCommission: React.Dispatch<React.SetStateAction<string>>;
  setCommissionFrom: React.Dispatch<React.SetStateAction<number>>;
  commissionValue: number;
  takeCommissionFrom: number;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommissionDetail = ({
  setUpdatedCommission,
  setCommissionFrom,
  commissionValue,
  takeCommissionFrom,
  error,
  setError,
}: Iprop) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getCommission());
  }, []);

  useEffect(() => {}, [commissionValue]);

  return (
    commissionValue >= 0 && (
      <CommissionDetailWrapper>
        <div className='block'>
          <label>Commission From:</label>
          <Select
            style={{ width: 150 }}
            onChange={(value) => setCommissionFrom(value)}
            placeholder={'Commission Type'}
            defaultValue={takeCommissionFrom}
            options={commissionFrom}
          />
        </div>
        <div className='block'>
          <label>Commisssion Percentage:</label>
          <div className='commission-block'>
            <Input
              defaultValue={commissionValue}
              onChange={(e) => (
                setUpdatedCommission(e.target.value),
                e.target.value.length > 0 ? setError(false) : setError(true)
              )}
              className='commissionInput'
            />

            {error ? (
              <div className='errorMessage'>
                {appConstant?.formValidation?.commission}
              </div>
            ) : null}
          </div>
        </div>
        <div className='block'>
          <label>Currency:</label>
          <span>CA$(Canadian Dollar)</span>
        </div>
      </CommissionDetailWrapper>
    )
  );
};

export default CommissionDetail;
