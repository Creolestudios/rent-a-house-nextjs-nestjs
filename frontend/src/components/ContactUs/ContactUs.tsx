import React, { useEffect } from 'react';
import { Container } from '@/globalStyles';
import { ContactUsWrapper } from './ContactUs.styles';
import ContactForm from './ContactForm';
import actions from "@/redux/admin/cms/cms.action";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "@/redux/store/rootReducer";


const ContactUs = ({isEdit}:any) => {
  const dispatch = useDispatch();

  const pageContent = useSelector(
    (state: RootState) => state.staticPageReducer.pageContent
  );
  useEffect(() => {
    dispatch(actions.getContent({ pageName: "contact-us" }));
  }, []);
  let data =pageContent && JSON.parse(pageContent)
  return (
    <ContactUsWrapper>
      <Container>
        <div className='header-wrapper'>
          <div className='title' contentEditable={isEdit} id='contact_1'>{data.contact1}</div>
          <p contentEditable={isEdit} id='contact_2'>
          {data.contact2}
          </p>
        </div>
        <ContactForm isEdit={isEdit} data={data}/>
      </Container>
    </ContactUsWrapper>
  );
};

export default ContactUs;
