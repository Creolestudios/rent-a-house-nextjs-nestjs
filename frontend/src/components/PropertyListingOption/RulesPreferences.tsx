import React, { useEffect, useState } from 'react';
import { RentalConditionWrapper as RulesPreferencesWrapper } from './PropertyListingOptionWrapper.styles';
import { Radio, RadioChangeEvent } from 'antd';
import DocumentationCheck from './DocumentationCheck';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/rootReducer';
import actions from '@/redux/addProperty/addProperty.action';
import duplicateActions from '@/redux/duplicateListing/duplicateListing.action';

const RulesPreferences = ({ title, className, setPayload }: any) => {
  const dispatch = useDispatch();
  const propertyId = useSelector(
    (state: RootState) => state.addPropertyReducer.propertyId
  );
  const stepData = useSelector(
    (state: RootState) => state.duplicateListingReducer.step6
  );
  const idx = Number(
    globalThis.sessionStorage?.getItem('duplicate_property_id')
  );
  const [editData, setEditData] = useState({});
  const [step6Data, setStep6Data] = useState({
    gender: 0,
    tenant: 0,
    pets: 0,
    document: 0,
    propertyId: propertyId,
  });

  const documentChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checkedValues",checkedValues)
    if (checkedValues.length === 0) {
      setStep6Data({ ...step6Data, document: 0 });
      setEditData({ ...editData, document: 0 });
    } else if (checkedValues.includes(1) && checkedValues.length === 1) {
      setEditData({ ...editData, document: 1 });
      setStep6Data({ ...step6Data, document: 1 });
    } else if (checkedValues.includes(2) && checkedValues.length === 1) {
      setEditData({ ...editData, document: 2 });
      setStep6Data({ ...step6Data, document: 2 });
    } else {
      setEditData({ ...editData, document: 3 });
      setStep6Data({ ...step6Data, document: 3 });
    }
  };

  useEffect(() => {
    let object = {
      ...editData,
      id: stepData?.id,
    };
    setPayload && setPayload(object);
  }, [editData,stepData]);

  useEffect(() => {
    setPayload && dispatch(duplicateActions.getStep6Data({ property_id: idx }));
    setPayload &&
      setStep6Data({
        gender: stepData.gender,
        tenant: stepData.tenant,
        pets: stepData.pets,
        document: stepData.document,
        propertyId: propertyId,
      });
  }, [idx, stepData]);

  useEffect(() => {
    dispatch(actions.step6Data(step6Data));
  }, [step6Data]);
  const checkOptions = [
    {
      label: (
        <div>
          <div className='title'>Proof of Identity</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            venenatis posuere ante, quis condimentum augue tincidunt nec.
          </p>
        </div>
      ),
      value: 1,
    },
    {
      label: (
        <div>
          <div className='title'>Proof of Occupation/Income</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            venenatis posuere ante, quis condimentum augue tincidunt nec.
          </p>
        </div>
      ),
      value: 2,
    },
  ];
  
  return (
    <RulesPreferencesWrapper className={className}>
      {title && <div className='title'>{title}</div>}

      <div className='block'>
        <div className='sub-title'>Documentation Required</div>
        <DocumentationCheck data={step6Data}  option={checkOptions} onChange={documentChange} />
      </div>

      <div className='block'>
        <div className='sub-title'>Gender preference</div>
        <Radio.Group
          onChange={(e) => {
            setStep6Data({ ...step6Data, gender: e.target.value });
            setEditData({ ...editData, gender: e.target.value });
          }}
          value={step6Data.gender}
          className='common-radio'
        >
          <Radio value={0}>Male</Radio>
          <Radio value={1}>Female</Radio>
          <Radio value={2}>Other</Radio>
        </Radio.Group>
      </div>

      <div className='block'>
        <div className='sub-title'>Tenant preference</div>
        <Radio.Group
          onChange={(e) => {
            setStep6Data({ ...step6Data, tenant: e.target.value });
            setEditData({...editData,tenant:e.target.value})
          }}
          value={step6Data.tenant}
          className='common-radio'
        >
          <Radio value={0}>Student</Radio>
          <Radio value={1}>Professional</Radio>
          <Radio value={2}>Any</Radio>
        </Radio.Group>
      </div>

      <div className='block'>
        <div className='sub-title'>Pets preference</div>
        <Radio.Group
          onChange={(e) => {
            setStep6Data({ ...step6Data, pets: e.target.value });
            setEditData({...editData,pets:e.target.value})
          }}
          value={step6Data.pets}
          className='common-radio'
        >
          <Radio value={1}>Yes</Radio>
          <Radio value={0}>No</Radio>
          <Radio value={2}>Negotiable</Radio>
        </Radio.Group>
      </div>
    </RulesPreferencesWrapper>
  );
};

export default RulesPreferences;
