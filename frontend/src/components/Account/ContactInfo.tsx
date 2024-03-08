import React, { useEffect, useState } from 'react';
import { DataWrapper } from './Account.styles';
import { Avatar, DatePicker, Form, Input, Select } from 'antd';
import Icon from '@ant-design/icons';
import downArrow from '@/assets/images/icons/DownArrowSvg';
import { CustomButton } from '@/globalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/rootReducer';
import actions from '@/redux/account/account.action';
import { appConstant } from '@/config/constants';

const ContactInfo = ({ title }: any) => {
  const dispatch = useDispatch();
  const [id, setId] = useState<Number>();
  const [dialerCode, setDialerCode] = useState<Number>();
  const userDetails = useSelector(
    (state: RootState) => state.accountReducer.userDetails
  );
  const [dialerCodes, setDialerCodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        const codes = data.reduce((uniqueCodes, country) => {
          const dialCode = country.callingCodes[0];
          const countryName = country.name;
          const codeObj = { dialCode, countryName };

          const existingCode = uniqueCodes.find(
            (code) => Number(code.dialCode) === Number(dialCode)
          );
          if (!existingCode) {
            uniqueCodes.push(codeObj);
          }
          return uniqueCodes;
        }, []);
        const sortedCodes = codes.sort((a, b) =>
          a.dialCode.localeCompare(b.dialCode)
        ); // Sort in ascending order

        setDialerCodes(sortedCodes);
      } catch (error) {
        return error;
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setId(Number(sessionStorage.getItem('user_id')));
  });

  const handleChange = (value: string) => {
    setDialerCode(Number(value));
  };
  const handleSave = (e: any) => {
    let payload = {
      id: id,
      mobile: Number(e.mobile),
      dialer_code: dialerCode,
    };
    dispatch(actions.contactInformation({ UserContactInformation: payload }));
  };
  return (
    <DataWrapper>
      <h3>{title}</h3>
      <Form
        style={{ maxWidth: '470px' }}
        onFinish={handleSave}
        initialValues={userDetails}
      >
        <Form.Item name='email' label='Email'>
          <Input placeholder='Enter Your Email*' disabled />
        </Form.Item>
        <Form.Item label='Phone no.'>
          <div className='mobile-number'>
            <Select
              defaultValue={userDetails.dialer_code}
              placeholder='Select Country*'
              onChange={handleChange}
              suffixIcon={<Icon component={downArrow} />}
              options={dialerCodes.map((item: any) => {
                return {
                  value: item.dialCode,
                  label: item.dialCode,
                };
              })}
            />
            <Form.Item
              name='mobile'
              rules={[
                {
                  required: true,
                  message: appConstant.formValidation.contactRequired,
                },
              ]}
            >
              <Input placeholder='Mobile Number*' />
            </Form.Item>
          </div>
        </Form.Item>
        <Form.Item className='btn-wrapper'>
          <CustomButton className='fill' type='submit'>
            Save
          </CustomButton>
        </Form.Item>
      </Form>
    </DataWrapper>
  );
};

export default ContactInfo;
