import { Container } from '@/globalStyles';
import React, { useEffect } from 'react';
import { FaqBlockWrapper } from './Faq.styles';
import FaqSectionBlock from './FaqSectionBlock';
import { useDispatch, useSelector } from 'react-redux';
import actions from "@/redux/admin/cms/cms.action";
import { RootState } from '@/redux/store/rootReducer';


const Faq = ({isEdit}:any) => {
  const dispatch = useDispatch();
  const check = useSelector(
    (state: RootState) => state.cmsReducer?.faqDetails
  );

  // const pageContent = useSelector(
  //   (state: RootState) => state.staticPageReducer.pageContent
  // );

  useEffect(() => {
    dispatch(actions.getContent({ pageName: "faq" }));
  }, []); 
  // let data = pageContent && JSON.parse(pageContent)
  let data=check &&JSON.parse(check)


  
  return (
    <FaqBlockWrapper>
      <Container>
        <div className='header-wrapper'>
          <div className='title' contentEditable={isEdit} id='faq1'>{data?.faq1}</div>
          <p contentEditable={isEdit} id='faq2'>
           {data?.faq2}
          </p>
        </div>
      </Container>
      <FaqSectionBlock isEdit={isEdit} data={data}/>
    </FaqBlockWrapper>
  );
};

export default Faq;
