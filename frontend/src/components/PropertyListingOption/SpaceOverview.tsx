import React, { useEffect, useState } from 'react';
import { CreateListWrapper as SpaceOverviewWrapper } from './PropertyListingOptionWrapper.styles';
import { Form, Input, Radio, RadioChangeEvent } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/addProperty/addProperty.action';
import duplicateActions from '@/redux/duplicateListing/duplicateListing.action';
import { RootState } from '@/redux/store/rootReducer';

const { TextArea } = Input;

const SpaceOverview = ({ title, setPayload, error, setError }: any) => {
  const dispatch = useDispatch();
  const [spaceOverviewForm] = Form.useForm();
  const propertyId = useSelector(
    (state: RootState) => state.addPropertyReducer.propertyId
  );
  const stepData = useSelector(
    (state: RootState) => state.duplicateListingReducer.step3
  );
  const idx = Number(
    globalThis.sessionStorage?.getItem('duplicate_property_id')
  );
  const [editData, setEditData] = useState({});
  const [step3Data, setStep3Data] = useState({
    bedroom: 0,
    details: '',
    furnished: 0,
    people: 0,
    propertyId: propertyId,
    size: 0,
  });

  useEffect(() => {
    dispatch(actions.step3Data(step3Data));
    setPayload && dispatch(duplicateActions.getStep3Data({ property_id: idx }));
  }, [step3Data, idx]);

  useEffect(() => {
    let object = { ...editData, id: stepData.id };
    setPayload && setPayload(object);
  }, [editData,stepData]);

  useEffect(() => {
    if (idx && setPayload) {
      if (Object.keys(stepData).length !== 0) {
        spaceOverviewForm.setFieldsValue({
          bedrooms: stepData.bedrooms,
          details: stepData.details,
          is_furnished: stepData.is_furnished,
          peoples: stepData.peoples,
          size: stepData.size,
        });
      }
    }
  }, [stepData]);

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

  return (
    <SpaceOverviewWrapper>
      {title && <div className='title'>{title}</div>}
      <Form
        form={spaceOverviewForm}
        initialValues={{ is_furnished: step3Data.furnished }}
      >
        <div className='left'>
          <Form.Item name='bedrooms' label='Bedrooms'>
            <Input
              placeholder='Please enter the number of Bedrooms*'
              type='number'
              onChange={(e) => {
                setStep3Data({
                  ...step3Data,
                  bedroom: parseInt(e.target.value),
                });
                setEditData({
                  ...editData,
                  bedrooms: parseInt(e.target.value),
                });
                handleError('bedroom', e.target.value);
              }}
            />
          </Form.Item>
            {error?.bedroom !== 0 && (
              <p style={{ color: 'red' }}>{error?.bedroom}</p>
            )}
          <Form.Item name='peoples' label='Capacity'>
            <Input
              placeholder='Please enter the number of people can accommodate*'
              type='number'
              onChange={(e) => {
                setStep3Data({
                  ...step3Data,
                  people: parseInt(e.target.value),
                });
                setEditData({
                  ...editData,
                  peoples: parseInt(e.target.value),
                });
                handleError('people', e.target.value);
              }}
            />
          </Form.Item>
            {error?.people !== 0 && (
              <p style={{ color: 'red' }}>{error?.people}</p>
            )}
          <Form.Item name='size' label=''>
            <Input
              placeholder='Please enter size in Sq, Ft.'
              type='number'
              onChange={(e) => {
                setStep3Data({
                  ...step3Data,
                  size: parseInt(e.target.value),
                });
                setEditData({
                  ...editData,
                  size: parseInt(e.target.value),
                });
              }}
            />
          </Form.Item>
        </div>
        <div className='right'>
          <Form.Item label='Details' name='details'>
            <TextArea
              rows={4}
              placeholder='Enter the Description*'
              onChange={(e) => {
                setStep3Data({
                  ...step3Data,
                  details: e.target.value,
                });
                setEditData({
                  ...editData,
                  details: e.target.value,
                });
                handleError('details', e.target.value);
              }}
            />
          </Form.Item>
            {error?.details !== 0 && (
              <p style={{ color: 'red' }}>{error?.details}</p>
            )}
          <Form.Item label='Is furnished ?' name='is_furnished'>
            <Radio.Group
              onChange={(e) => {
                setStep3Data({
                  ...step3Data,
                  furnished: parseInt(e.target.value),
                });
                setEditData({
                  ...editData,
                  is_furnished: parseInt(e.target.value),
                });
              }}
            >
              <Radio value={1}>Yes</Radio>
              <Radio value={0}>No</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
      </Form>
    </SpaceOverviewWrapper>
  );
};

export default SpaceOverview;
