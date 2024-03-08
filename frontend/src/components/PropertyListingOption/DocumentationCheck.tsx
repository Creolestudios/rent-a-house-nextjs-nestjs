import React, { useEffect, useState } from 'react';
import { RentalConditionWrapper as RulesPreferencesWrapper } from './PropertyListingOptionWrapper.styles';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import { Checkbox } from 'antd';

const DocumentationCheck = ({ option, onChange,data }: any) => {

const[value,setValue]=useState<any>([])
const valueSetter:any=(step6Data:any)=>{
  if (step6Data?.document === 0) {
    
    setValue([]);
  } else if (step6Data?.document === 1) {
    

    setValue([1]);
  } else if (step6Data?.document === 2) {
   

    setValue([2]);
  } else if (step6Data?.document === 3) {
   

    setValue([1, 2]);
  } 
  else{
    setValue([]);
  }
}
useEffect(()=>{
  valueSetter(data)
},[data.document])

  return (
    <RulesPreferencesWrapper>
      <Checkbox.Group
        options={option}
        onChange={onChange}
        value={value}
      
      />
    </RulesPreferencesWrapper>
  );
};

export default DocumentationCheck;
