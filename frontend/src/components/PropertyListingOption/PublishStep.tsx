import React, { useEffect, useState } from 'react';
import { PublishStepWrapper } from './PropertyListingOptionWrapper.styles';
import { Input } from 'antd';
import { CustomButton } from '@/globalStyles';
import DuplicateApartmentSuccessModal from './DuplicateApartmentSuccessModal';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/duplicateListing/duplicateListing.action';
import { RootState } from '@/redux/store/rootReducer';
import MobileNumberModal from './MobileNumberModal';
import ToastNotification from '../Admin/Notification/ToastNotification';

const PublishStep = ({
  handleVerify,
  className,
  setPhoneVerificationModalOpen,
  phoneVerificationModalOpen,
}: any) => {
  const [mobileNumberModal, setMobileNumberModal] = useState(false);
  const [addSuccessApartmentModal, setAddSuccessApartmentModal] =
    useState(false);
  const dispatch = useDispatch();
  const [id, setId] = useState<Number>(
    Number(globalThis.sessionStorage?.getItem('duplicate_property_id'))
  );
  const mobileNumber = useSelector(
    (state: RootState) =>
      state.duplicateListingReducer.mobile_details.mobile_number
  );

  const { error } = useSelector(
    (state: RootState) => state.duplicateListingReducer
  );

  const message = useSelector(
    (state: RootState) => state.duplicateListingReducer.message
  );
  const number = useSelector(
    (state: RootState) => state.addPropertyReducer.mobileNo
  );

  const propId = useSelector(
    (state: RootState) => state.addPropertyReducer.propertyId
  );
  const [otp, setOtp] = useState();
  useEffect(() => {
    dispatch(actions.getMobileNumber({ property_id: id }));
    if (mobileNumber) {
      dispatch(
        actions.requestOtp({
          property_id: id,
        })
      );
    }
  }, [dispatch, id, mobileNumber]);

  useEffect(() => {
    setId(Number(globalThis.sessionStorage?.getItem('duplicate_property_id')));
  }, [globalThis.sessionStorage?.getItem('duplicate_property_id')]);

  useEffect(() => {
    if (message === 'Property Created successfully') {
      setPhoneVerificationModalOpen(false);
      setAddSuccessApartmentModal(true);
    }
  }, [message]);

  const handleChange = (e: any) => {
    setOtp(e.target.value);
  };

  const handleSubmit = () => {
    let payload;
    if (mobileNumber) {
      payload = {
        verifyOTPInput: {
          mobileNumber: mobileNumber,
          property_id: id,
          otp: otp,
        },
      };
    } else {
      payload = {
        verifyOTPInput: {
          mobileNumber: number,
          property_id: id,
          otp: otp,
        },
      };
    }





// this dispatch for otp verification
    dispatch(actions.submitOtp(payload));

  };

  const handleResendOTP = () => {
    ToastNotification({
      type:'success',
      message:'OTP has been re-sent to your registered mobile number'
    })
    dispatch(actions.requestOtp({ property_id: propId }));
  };

  useEffect(() => {
    if (error === 'Please Update Mobile Number') {
      setMobileNumberModal(true);
    }
  }, [error]);

  return (
    <>
      <PublishStepWrapper className={className}>
        <div className='title'>Verify your account</div>
        <div className='sub-title'>
          Enter the code received on below mentioned mobile number.
        </div>
        <div className='number'>
          {mobileNumber !== undefined
            ? mobileNumber?.slice(0, 3) +
              '*'?.repeat(mobileNumber?.length - 4) +
              mobileNumber?.slice(-3)
            : null}
        </div>
        {/* {mobileNumber === undefined ? null : (
          <> */}
        <Input placeholder='Enter Code' onChange={handleChange} />
        <CustomButton
          className='fill fill-none'
          onClick={() => handleResendOTP()}
        >
          resend OTP
        </CustomButton>
        <CustomButton
          className='fill'
          onClick={() => {
            if (phoneVerificationModalOpen) {
              handleSubmit();
            } else {
              handleVerify(otp, mobileNumber, propId);
            }
          }}
        >
          Verify
        </CustomButton>
        {/* </>
        )} */}
      </PublishStepWrapper>
      <DuplicateApartmentSuccessModal
        setAddSuccessApartmentModal={setAddSuccessApartmentModal}
        addSuccessApartmentModal={addSuccessApartmentModal}
      />
      <MobileNumberModal
        mobileNumberModal={mobileNumberModal}
        setMobileNumberModal={setMobileNumberModal}
      />
    </>
  );
};

export default PublishStep;
