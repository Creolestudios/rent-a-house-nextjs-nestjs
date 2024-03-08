import React, { useEffect, useState } from 'react';
import AdditionalCost from './AdditionalCost';
import Options from './Options';
import { RentalConditionWrapper } from './PropertyListingOptionWrapper.styles';
import { cancelationPolicyData, contractTypeData } from '@/config/constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/rootReducer';
import actions from '@/redux/addProperty/addProperty.action';
import duplicateActions from '@/redux/duplicateListing/duplicateListing.action';
import { RadioChangeEvent } from 'antd';

const RentalCondition = ({ title, className, setPayload }: any) => {
  const dispatch = useDispatch();
  const propertyId = useSelector(
    (state: RootState) => state.addPropertyReducer.propertyId
  );
  const [contractCancellationData, setContractCancellationData] = useState({
    contractType: 0,
    cancellation: 1,
  });
  const stepData = useSelector(
    (state: RootState) => state.duplicateListingReducer.step5
  );
  const [additionalCost, setAdditionalCost] = useState([]);
  const idx = Number(
    globalThis.sessionStorage?.getItem('duplicate_property_id')
  );
  const [editData, setEditData] = useState({});
  const [editCost, setEditCost] = useState([]);

  const handleChange = (e: RadioChangeEvent, type: string) => {
    if (type === 'contract') {
      setContractCancellationData({
        ...contractCancellationData,
        contractType: e.target.value,
      });
      setEditData({
        ...editData,
        contract_type: e.target.value,
      });
    } else {
      setContractCancellationData({
        ...contractCancellationData,
        cancellation: e.target.value,
      });
      // setEditData({
      //   ...contractCancellationData,
      //   cancellation_policy_id: e.target.value,
      // });
      setEditData(()=>{
        let obj:any = {...contractCancellationData,contract_type:contractCancellationData.contractType,cancellation_policy_id:e.target.value}
        delete obj.contractType
        delete obj.cancellation
        return obj
        })

     

    }
  };
  // this for test
  useEffect(()=>{
    setContractCancellationData({
      contractType:stepData?.contract_type,
      cancellation:stepData?.cancellation_policy_id,
    })
  },[stepData])

  useEffect(() => {
    let object = {
      ...editData,
      additional_required_cost: editCost,
      id: stepData.id,
    };
    setPayload && setPayload(object);
  }, [editData, editCost,stepData]);

  useEffect(() => {
    let cost = [];
    additionalCost?.map((item: any) => {
      let data = {
        amount: item.amount,
        id: item.id,
        name: item.name,
      };
      cost.push(data);
    });
    // setEditCost(cost);
  }, [additionalCost]);

  useEffect(() => {
    let modifiedArray;
    additionalCost &&
      (modifiedArray = additionalCost.map(({ id, ...rest }) => ({
        ...rest,
      })));
    let value = {
      cancellationPolicy: contractCancellationData?.cancellation,
      contractType: contractCancellationData.contractType,
      propertyId: propertyId,
      additionalCost: modifiedArray,
    };

    dispatch(actions.step5Data(value));
    setPayload && dispatch(duplicateActions.getStep5Data({ property_id: idx }));
    // setAdditionalCost(stepData.additional_required_cost);
  }, [
    stepData,
    contractCancellationData?.contractType,
    contractCancellationData?.cancellation,
  ]);
console.log("rentalcondition",stepData.contract_type)
  return (
    <RentalConditionWrapper className={className}>
      {title && <div className='title'>{title}</div>}

      <div className='block'>
        <div className='sub-title'>Contract Type</div>
        <Options
          data={contractTypeData}
          // value={stepData.contract_type !== undefined && stepData.contract_type}
          value={stepData.contract_type !== undefined && contractCancellationData.contractType}

          handleChange={(e) => handleChange(e, 'contract')}
        />
      </div>
      <div className='block'>
        <div className='sub-title'>Cancellation policy</div>
        <Options
          data={cancelationPolicyData}
          // value={
          //   stepData.cancellation_policy_id !== undefined &&
          //   stepData.cancellation_policy_id
          // }
          value={
            stepData.cancellation_policy_id !== undefined &&
            contractCancellationData.cancellation
          }
          handleChange={(e) => handleChange(e, 'cancellation')}
        />
      </div>
      <div className='block'>
        <div className='sub-title'>Additional Required Cost</div>
        <AdditionalCost
          additionalCost={additionalCost}
          setAdditionalCost={setAdditionalCost}
          editData={editCost}
          setEditData={setEditCost}
        />
      </div>
    </RentalConditionWrapper>
  );
};

export default RentalCondition;
