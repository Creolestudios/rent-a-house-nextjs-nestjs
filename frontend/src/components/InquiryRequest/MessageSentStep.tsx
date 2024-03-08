import React, { useEffect, useState } from 'react';
import Title from '../Title/Title';
import {
  MassageFormWrapper,
  MessageSentStepWrapper,
} from './InquiryRequest.styles';
import { fontFamily, color } from '@/styles/variable';
import SubTitle from '../SubTitle/SubTitle';
import dayjs from 'dayjs';

import {
  Avatar,
  Form,
  Input,
  Radio,
  Select,
  DatePicker,
  DatePickerProps,
} from 'antd';
import Icon from '@ant-design/icons';
import downArrow from '@/assets/images/icons/DownArrowSvg';
import calenderIcon from '@/assets/images/icons/CalenderSvg';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/inquiryRequest/inquiryRequest.action';
import { RootState } from '@/redux/store/rootReducer';
import { useForm } from 'antd/lib/form/Form';
import { appConstant } from '@/config/constants';
import moment from 'moment';
import { useRouter } from 'next/router';

const dateFormat = 'YYYY/MM/DD';

const MessageSentStep = ({ setRequiredDetails, requiredDetails }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userDetails = useSelector(
    (state: RootState) => state.inquiryRequestReducer.userDetails
  );
  const requiredFields = useSelector(
    (state: RootState) => state.inquiryRequestReducer.requiredDetails
  );
  const propertyInfo = useSelector(
    (state: RootState) => state.inquiryRequestReducer.propertyInfo
  );
  const [formData] = useForm();
  const [value, setValue] = useState<number>(1);
  const [render, setRender] = useState<boolean>(false);
  const [defaultMessage, setDefaultMessage] = useState<string>(
    appConstant.inquiryMessage
  );

  const radioBtnChange = (e: any) => {
    setValue(e.target.value);
    setRequiredDetails({
      ...requiredDetails,
      gender: e.target.value,
    });
  };
  const handleDOB: DatePickerProps['onChange'] = (date, dateString) => {
    setRequiredDetails({
      ...requiredDetails,
      dob: moment(dateString).format('YYYY-MM-DD'),
    });
  };

  useEffect(() => {
    let checkIn = router.asPath.split('?')[1].split(':')[1];
    let checkOut = router.asPath.split('?')[1].split(':')[2];
    const userId = Number(sessionStorage.getItem('user_id'));
    console.log(userId);

    dispatch(actions.checkDetails({ userId }));
    formData.setFieldsValue({
      // number: requiredFields?.mobile,
      // code: requiredFields?.dialer_code,
      // gender: requiredFields?.gender,
      // DOB: dayjs(requiredFields?.dob,'YYYY-MM-DD'),
      // occupation: requiredFields?.occupation,


      number:requiredDetails?.mobile ? requiredDetails?.mobile: requiredFields?.mobile,
      code:requiredDetails?.dialerCode ? requiredDetails?.dialerCode: requiredFields?.dialer_code,
      gender:requiredDetails?.gender ? requiredDetails?.gender : requiredFields?.gender,
      DOB:requiredDetails?.dob ? dayjs(requiredDetails?.dob,'YYYY-MM-DD') : requiredFields?.dob !== null && dayjs(requiredFields?.dob,'YYYY-MM-DD'),
      occupation:requiredDetails?.occupation ? requiredDetails.occupation: requiredFields?.occupation,

    });
    setRequiredDetails({
      ...requiredDetails,
      landLordID: propertyInfo?.landlord?.id,
      checkIn: checkIn,
      checkOut: checkOut,
      propertyId: propertyInfo?.id,
      message: defaultMessage,
    });
  }, [requiredFields, propertyInfo]);

  useEffect(() => {
    setRender(userDetails);
  }, [userDetails]);
  console.log("required details",dayjs(requiredFields?.dob,'YYYY-MM-DD'))
  return (
    <MessageSentStepWrapper>
      <Title
        className='title'
        title='Introduce Yourself'
        fontFamily={`${fontFamily.ptBold}`}
        color={`${color.blackColor}`}
        marginBottom={'4px'}
      />
      <SubTitle
        className='sub-title'
        title='For a faster response, share as much as you can.'
        fontFamily={`${fontFamily.ptBold}`}
        color={`${color.greyColor}`}
        marginBottom={'4px'}
      />
      <MassageFormWrapper>
        <Form
          name='basic'
          // onFinish={onFinish}
          autoComplete='off'
          form={formData}
        >
          <Form.Item
            name='username'
            label={
              <div className='user-label'>
                <label>To</label>
                <div>
                  <Avatar size={24}>s</Avatar>
                  <span className='name'>{`${propertyInfo?.landlord?.first_name} ${propertyInfo?.landlord?.last_name}`}</span>
                  <span className='area'>
                    , Owner of {propertyInfo?.name}, Vancouver
                  </span>
                </div>
              </div>
            }
          >
            <Input.TextArea
              rows={4}
              value={defaultMessage}
              onChange={(e) => (
                setDefaultMessage(e.target.value),
                setRequiredDetails({
                  ...requiredDetails,
                  message: e.target.value,
                })
              )}
            />
            <div className='clear-text' onClick={() => setDefaultMessage('')}>
              Clear Message
            </div>
          </Form.Item>
          {render === false && (
            <>
              <div className='ant-form-item'>
                <Form.Item name='code' label='Mobile No' className='small'>
                  <Select
                    placeholder='Country code*'
                    optionFilterProp='children'
                    suffixIcon={<Icon component={downArrow} />}
                    options={[
                      {
                        value: 91,
                        label: '+91',
                      },
                      {
                        value: 92,
                        label: '+92',
                      },
                      {
                        value: 1,
                        label: '+1',
                      },
                    ]}
                    onChange={(value) =>
                      setRequiredDetails({
                        ...requiredDetails,
                        dialerCode: value,
                      })
                    }
                  />
                </Form.Item>
                <Form.Item name='number' label='' className='medium'>
                  <Input
                    placeholder='Mobile Number*'
                    onChange={(e) =>
                      setRequiredDetails({
                        ...requiredDetails,
                        mobile: parseInt(e.target.value),
                      })
                    }
                  />
                </Form.Item>
              </div>

              <Form.Item name='gender' label='Gender'>
                <Radio.Group onChange={radioBtnChange} value={value}>
                  <Radio value={0}>Male</Radio>
                  <Radio value={1}>Female</Radio>
                  <Radio value={2}>Other</Radio>
                </Radio.Group>
              </Form.Item>

              <div className='ant-form-item'>
                <Form.Item
                  name="DOB"
                  label='Birthdate & Occupation'
                  className='small'
                  >
                  <DatePicker
                 
                    placeholder='Date of birth'
                    format={dateFormat}
                    suffixIcon={<Icon component={calenderIcon} />}
                    onChange={handleDOB}
                  />
                </Form.Item>
                <Form.Item name='occupation' label='' className='medium'>
                  <Input
                    placeholder='Select Occupation*'
                    onChange={(e) =>
                      setRequiredDetails({
                        ...requiredDetails,
                        occupation: e?.target?.value,
                      })
                    }
                  />
                </Form.Item>
              </div>
            </>
          )}
        </Form>
      </MassageFormWrapper>
    </MessageSentStepWrapper>
  );
};

export default MessageSentStep;
