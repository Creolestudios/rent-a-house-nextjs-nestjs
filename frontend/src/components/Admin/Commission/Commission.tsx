import { Box, CustomButton, UserHeader } from '@/globalStyles';
import actions from '@/redux/admin/comission/commission.action';
import { fontFamily, color } from '@/styles/variable';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../Title/Title';
import CommissionDetail from './CommissionDetail';
import { ManageCommissionWrapper } from './Commission.styles';
import { RootState } from '@/redux/store/rootReducer';

const Commission = () => {
  const commissionValue = useSelector(
    (state: RootState) => state.commissionReducer.commission
  );
  const takeCommissionFrom = useSelector(
    (state: RootState) => state.commissionReducer.commissionFrom
  );
  const [updatedCommission, setUpdatedCommission] = useState<string>('');
  const [commissionFrom, setCommissionFrom] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleSaveCommission = () => {
    updatedCommission === '' ? setError(true) : setError(false);
    let commission = {
      value: parseInt(updatedCommission),
      commissionFrom: commissionFrom,
    };

    updatedCommission !== '' && dispatch(actions.updateCommission(commission));
  };
  useEffect(() => {
    setUpdatedCommission(commissionValue);
    setCommissionFrom(takeCommissionFrom);
  }, [commissionValue, takeCommissionFrom]);

  return (
    <ManageCommissionWrapper>
      <Title
        className='title-wrapper'
        title='Manage Commission Fees'
        fontFamily={`${fontFamily.demiBold}`}
        color={`${color.blackColor}`}
      >
        <div className='btn-wrapper'>
          <CustomButton className='fill' onClick={handleSaveCommission}>
            Save
          </CustomButton>
        </div>
      </Title>

      <Box className='box'>
        <CommissionDetail
          setUpdatedCommission={setUpdatedCommission}
          setCommissionFrom={setCommissionFrom}
          commissionValue={commissionValue}
          takeCommissionFrom={takeCommissionFrom}
          error={error}
          setError={setError}
        />
      </Box>
    </ManageCommissionWrapper>
  );
};

export default Commission;
