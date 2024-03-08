import React from 'react';
import { RequestBookingWrapper } from './InquiryRequest.styles';
import { CustomButton } from '@/globalStyles';
import { DatePicker } from 'antd';
import Icon from '@ant-design/icons';
import downArrow from '@/assets/images/icons/DownArrowSvg';
import { useDispatch } from 'react-redux';
import appActions from '@/redux/app/app.action';

const { RangePicker } = DatePicker;

const ChangeRequestDate = () => {
  const dispatch = useDispatch();

  // const { changeRequestDate } = useSelector((state: any) => state.appReducer);

  return (
    <RequestBookingWrapper className='change-date-request'>
      <div className='content'>
        <h3>For which period would you like to rent place?</h3>
        <p>You will only be charged when the advertiser accepts your request</p>

        <RangePicker
          suffixIcon={<Icon component={downArrow} />}
          separator={' '}
        />

        <div className='btn-wrapper'>
          <CustomButton className='fill'>Send Request</CustomButton>
          <CustomButton
            onClick={() => dispatch(appActions.changeRequestDate(false))}
          >
            Cancel
          </CustomButton>
        </div>
      </div>
    </RequestBookingWrapper>
  );
};

export default ChangeRequestDate;
