import React, { useEffect, useState } from 'react';
import { CreateListWrapper } from './PropertyListingOptionWrapper.styles';
import { Form, Select, Input, DatePicker, DatePickerProps } from 'antd';
import Icon from '@ant-design/icons';
import downIcon from '@/assets/images/icons/DownArrowSvg';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/addProperty/addProperty.action';
import duplicateActions from '@/redux/duplicateListing/duplicateListing.action';
import { RootState } from '@/redux/store/rootReducer';
import { propertyType } from '@/config/constants';
import moment from 'moment';
import dayjs from 'dayjs';
import { disabledDate } from '@/config/Common';
import { log } from 'console';

const CreateList = ({ title, setPayload, error, setError }: any) => {
  const dispatch = useDispatch();
  const [propertyDetailsForm] = Form.useForm();
  const countryData = useSelector(
    (state: RootState) => state.addPropertyReducer.country
  );
  const stateData = useSelector(
    (state: RootState) => state.addPropertyReducer.stateList
  );
  const cityData = useSelector(
    (state: RootState) => state.addPropertyReducer.city
  );
  const stepData = useSelector(
    (state: RootState) => state.duplicateListingReducer.step2
  );
  const idx = Number(
    globalThis.sessionStorage?.getItem('duplicate_property_id')
  );
  const [id, setId] = useState<Number>(idx);
  const [country, setCountry] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  const [step2Data, setStep2Data] = useState({
    propertyName: '',
    countryId: 0,
    stateId: 0,
    cityId: 0,
    houseNo: '',
    postal: '',
    availability: '',
    rentMonth: 0,
    min: 0,
    max: 0,
    type: '',
  });
  const [editData, setEditData] = useState({});

  useEffect(() => {
    let object = { ...editData };
    setPayload && setPayload(object);
  }, [editData]);

  useEffect(() => {
    setPayload &&
      setId(
        Number(globalThis.sessionStorage?.getItem('duplicate_property_id'))
      );
  }, []);

  useEffect(() => {
    // Dispatch
    dispatch(actions.step2Data(step2Data));
    setPayload && dispatch(duplicateActions.getStep2Data({ property_id: id }));
  }, [step2Data]);

  useEffect(() => {
    if (id && setPayload) {
      if (Object.keys(stepData).length !== 0) {
        propertyDetailsForm.setFieldsValue({
          type: stepData.type,
          available_from: dayjs(stepData.available_from, 'YYYY-MM-DD'),
          rent: stepData.rent,
          country_id: stepData.country_id,
          // state_id: stepData.state_id,
          state_id:stepData?.state_details?.name,
          // city_id: stepData.city_id,
          city_id:stepData?.city_details?.name,
          name: stepData.name,
          house_no: stepData.house_no,
          max_rental_period: stepData.max_rental_period,
          min_rental_period: stepData.min_rental_period,
          postal_code: stepData.postal_code,
        });
      }
    }
  }, [stepData]);

  const handleCountryChange = (value: any) => {
    setStep2Data({ ...step2Data, countryId: value });
    setEditData({ ...editData, country_id: value });
    dispatch(actions.getState({ countryId: value }));
    handleError('countryId', value);
  };
  const handleStateChange = (value: any) => {
    setEditData({ ...editData, state_id: value });
    setStep2Data({ ...step2Data, stateId: value });
    dispatch(actions.getCity({ stateId: value }));
    handleError('stateId', value);
  };

  const handleAvailability: DatePickerProps['onChange'] = (
    date,
    dateString
  ) => {
    setStep2Data({ ...step2Data, availability: dateString });
    setEditData({ ...editData, available_from: dateString });
    handleError('availability', dateString);
  };

  useEffect(() => {
    dispatch(actions.getCountry());
    // in edit property
    if(stepData?.country_id){
      console.log('country_id',stepData.country_id)
      dispatch(actions.getState({countryId:stepData.country_id}))
    }
  }, [stepData]);

  useEffect(() => {
    setCountry([
      ...countryData?.map((data: any) => {
        return { value: data.id, label: data.name };
      }),
    ]);

    stateData &&
      setStateList([
        ...stateData?.map((data: any) => {
          return { value: data.id, label: data.name };
        }),
      ]);

    cityData &&
      setCityList([
        ...cityData?.map((data: any) => {
          return { value: data.id, label: data.name };
        }),
      ]);
  }, [countryData, stateData, cityData]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ''; // Required for Chrome
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  console.log('categoryErrors', error);

  const handleError = (fieldName: string, value?: string) => {
    const categoryErrors: any = error;
    if (categoryErrors && Object.keys(categoryErrors).length > 0) {
      if (value !== '') {
        setError({ ...categoryErrors, [fieldName]: '' });
      } else {
        return categoryErrors;
      }
    }
    return categoryErrors;
  };
  console.log("set",stepData)
  console.log("errors",error)
  
  return (
    <CreateListWrapper>
      {title && <div className='title'>{title}</div>}
      <Form form={propertyDetailsForm}>
        <div className='left'>
          <Form.Item label='Property'>
            <Form.Item name='type' label=''>
              <Select
                placeholder='Select Property type*'
                onChange={(value) => {
                  setStep2Data({ ...step2Data, type: value });
                  setEditData({ ...editData, type: value });
                  handleError('type', value);
                }}
                suffixIcon={<Icon component={downIcon} />}
                options={propertyType}
              />
            </Form.Item>
              {error?.type !== '' && (
                <p style={{ color: 'red' }}>{error?.type}</p>
              )}
          </Form.Item>
          <Form.Item label='Address'>
            <Form.Item name='name' label=''>
              <Input
                placeholder='Property Name*'
                onChange={(e) => {
                  setStep2Data({ ...step2Data, propertyName: e.target.value });
                  setEditData({ ...editData, name: e.target.value });
                  handleError('propertyName', e.target.value);
                }}
                // value={step2Data.propertyName}
              />
            </Form.Item>
              {error?.propertyName !== '' && (
                <p style={{ color: 'red' }}>{error?.propertyName  }</p>
              )}
            <Form.Item name='country_id' label=''>
              <Select
                placeholder='Select Country*'
                suffixIcon={<Icon component={downIcon} />}
                options={country}
                // value={step2Data?.countryId}
                onChange={handleCountryChange}
              />
            </Form.Item>
              {error?.countryId !== 0 && (
                <p style={{ color: 'red' }}> {error?.countryId}</p>
              )}
            <Form.Item name='state_id' label=''>
              <Select
                placeholder='Select State*'
                suffixIcon={<Icon component={downIcon} />}
                onChange={handleStateChange}
                options={stateList}
                // value={step2Data?.stateId}
              />
            </Form.Item>
              {error?.stateId !== 0 && (
                <p style={{ color: 'red' }}>{error?.stateId}</p>
              )}
            <Form.Item name='city_id' label=''>
              <Select
                placeholder='Select City*'
                suffixIcon={<Icon component={downIcon} />}
                options={cityList}
                onChange={(value) => {
                  setEditData({ ...editData, city_id: value });
                  setStep2Data({ ...step2Data, cityId: value });
                  handleError('cityId', String(value));
                }}
                // value={step2Data?.cityId}
              />
            </Form.Item>
              {error?.cityId !== 0 && (
                <p style={{ color: 'red' }}>{error?.cityId}</p>
              )}
            <Form.Item name='house_no' label=''>
              <Input
                placeholder='Street/House Number*'
                // value={step2Data?.houseNo}
                onChange={(e) => {
                  setStep2Data({ ...step2Data, houseNo: e.target.value });
                  setEditData({
                    ...editData,
                    house_no: e.target.value,
                  });
                  handleError('houseNo', e.target.value);
                }}
              />
            </Form.Item>
              {error?.houseNo !== '' && (
                <p style={{ color: 'red' }}>{error?.houseNo}</p>
              )}
            <Form.Item name='postal_code' label=''>
              <Input
                placeholder='Postal code*'
                // value={step2Data?.postal}
                onChange={(e) => {
                  setStep2Data({ ...step2Data, postal: e.target.value });
                  setEditData({
                    ...editData,
                    postal_code: e.target.value,
                  });
                  handleError('postal', e.target.value);
                }}
              />
            </Form.Item>
              {error?.postal !== 0 && (
                <p style={{ color: 'red' }}>{error?.postal}</p>
              )}
          </Form.Item>
        </div>
        <div className='right'>
          <Form.Item label='Price & Availability'>
            <Form.Item label='' name='available_from'>
              <DatePicker
                onChange={handleAvailability}
                format={'YYYY-MM-DD'}
                suffixIcon={<Icon component={downIcon} />}
                placeholder='Select Date*'
                disabledDate={disabledDate}
              />
            </Form.Item>
              {error?.availability !== 0 && (
                <p style={{ color: 'red' }}>{error?.availability}</p>
              )}
            <Form.Item name='rent' label=''>
              <Input
                placeholder='Rent per month*'
                type='number'
                // value={step2Data?.rentMonth}
                onChange={(e) => {
                  setStep2Data({
                    ...step2Data,
                    rentMonth: parseInt(e.target.value),
                  });
                  setEditData({
                    ...editData,
                    rent: parseInt(e.target.value),
                  });
                  handleError('rentMonth', e.target.value);
                }}
              />
            </Form.Item>
              {error?.rentMonth !== 0 && (
                <p style={{ color: 'red' }}>{error?.rentMonth}</p>
              )}
          </Form.Item>
          <Form.Item label='Rental Period'>
            <Form.Item label='' name='min_rental_period'>
              <Input
                placeholder='Minimum month*'
                // value={step2Data.min}
                type='number'
                onChange={(e) => {
                  setStep2Data({ ...step2Data, min: parseInt(e.target.value) });
                  setEditData({
                    ...editData,
                    min_rental_period: parseInt(e.target.value),
                  });
                  handleError('min', e.target.value);
                }}
              />
            </Form.Item>
              {error?.min !== 0 && <p style={{ color: 'red' }}>{error?.min}</p>}
            <Form.Item name='max_rental_period' label=''>
              <Input
                placeholder='Maximum months*'
                // value={step2Data.max}
                type='number'
                onChange={(e) => {
                  setEditData({
                    ...editData,
                    max_rental_period: parseInt(e.target.value),
                  });
                  setStep2Data({ ...step2Data, max: parseInt(e.target.value) });
                  handleError('max', e.target.value);
                }}
              />
            </Form.Item>
              {error?.max !== 0 && <p style={{ color: 'red' }}>{error?.max}</p>}
          </Form.Item>
        </div>
      </Form>
    </CreateListWrapper>
  );
};

export default CreateList;
