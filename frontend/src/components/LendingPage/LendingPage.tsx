import React, { useEffect } from 'react';
import { LendingWrapper } from './LendingPage.styles';
import HeroSection from './HeroSection';
import FeaturePlaceSection from './FeaturePlaceSection';
import WorksSection from './WorksSection';
import ExperienceSection from './ExperienceSection';
import { gql, useSubscription } from '@apollo/client';
import { inquiryChat } from '@/services/inquiryRequest/inquiryRequest.subscription';
import actions from "@/redux/admin/cms/cms.action";
import { useDispatch, useSelector } from 'react-redux';


const LendingPage = ({isEdit}:any) => {
  const dispatch = useDispatch();
  const data = useSelector((state:any)=>state.cmsReducer?.pageContent)

  useEffect(()=>{
    dispatch(actions.getContent({ pageName: "home" }));
  },[])
  let parsedData= data && JSON.parse(data)
  return (
    <LendingWrapper>
      <HeroSection />
      <FeaturePlaceSection />
      <WorksSection isEdit={isEdit} content={parsedData}/>
      <ExperienceSection isEdit={isEdit} content={parsedData}/>
    </LendingWrapper>
  );
};

export default LendingPage;
