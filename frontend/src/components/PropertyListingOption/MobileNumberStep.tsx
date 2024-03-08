import React, { useEffect, useState } from 'react';
import { PublishStepWrapper } from './PropertyListingOptionWrapper.styles';
import { Input, Form, Select } from 'antd';
import { CustomButton } from '@/globalStyles';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '@ant-design/icons';
import downArrow from '@/assets/images/icons/DownArrowSvg';
import actions from '@/redux/addProperty/addProperty.action';

const MobileNumberStep = ({
  setMobileNumberModal,
  mobileNumberModal,
  className,
}: any) => {
  const dispatch = useDispatch();
  const [dialerCodes, setDialerCodes] = useState([]);

  const handleMobileData = (value) => {
    dispatch(actions.addMobile(value));
  };

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

  return (
    <>
      <PublishStepWrapper className={className}>
        <Form onFinish={handleMobileData}>
          <Form.Item label='Dailer code' className='empty-text' />
          <div className='mobile-number'>
            <Form.Item label='' name='dailer'>
              <Select
                placeholder='Dailer code*'
                suffixIcon={<Icon component={downArrow} />}
                options={dialerCodes.map((item: any) => {
                  return {
                    value: item.dialCode,
                    label: item.dialCode,
                  };
                })}
              />
            </Form.Item>
            <Form.Item name='mobile'>
              <Input placeholder='Mobile Number*' />
            </Form.Item>
          </div>
          {/* </Form.Item> */}
          <Form.Item>
            <CustomButton
              onClick={() => setMobileNumberModal(false)}
              className='fill'
              type='submit'
            >
              Confirm
            </CustomButton>
          </Form.Item>
        </Form>
      </PublishStepWrapper>
    </>
  );
};

export default MobileNumberStep;
