import React, { useState } from 'react';
import { Container } from '@/globalStyles';
import { InquiryRequestWrapper, RequestWrapper } from './InquiryRequest.styles';
import { Breadcrumb } from 'antd';
import Stepper from './Stepper';
import StepperRightContent from './StepperRightContent';
import FooterBtnInfo from './FooterBtnInfo';
import DocumentSubmission from './DocumentSubmission';
import MessageSent from './MessageSent';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '@ant-design/icons';
import rightArrow from '@/assets/images/icons/DownArrowSvg';
import homeOutline from '@/assets/images/icons/HomeOutlineSvg';
import archiveIcon from '@/assets/images/icons/ArchiveSvg';
import SendBookingRightContent from './SendBookingRightContent';
import { RootState } from '@/redux/store/rootReducer';
import actions from '@/redux/inquiryRequest/inquiryRequest.action';
import Link from 'next/link';

const InquiryRequest = () => {
  const userDetails = useSelector(
    (state: RootState) => state.inquiryRequestReducer.userDetails
  );
  const details = useSelector(
    (state: RootState) => state.inquiryRequestReducer.requiredDetails
  );
  const propertyData = useSelector(
    (state: RootState) => state.inquiryRequestReducer.propertyInfo
  );
  const [docCheckText, setDocCheckText] = useState('');
  const [documentPage, setDocumentPage] = useState(false);
  const [documentSend, setDocumentSend] = useState(false);
  const [requiredDetails, setRequiredDetails] = useState({
    proofOfIdentity: null,
    occupationDoc: null,
    propertyId: propertyData?.id,
    landLordID: propertyData?.landlord?.id,
    gender: details?.gender,
    checkIn: '',
    checkOut: '',
    dob: details?.dob,
    occupation: details?.occupation,
    dialerCode: details?.dialer_code,
    mobile: details?.mobile,
    message: details?.message,
  });
  const handleDocument = (e: any) => {
    setDocumentPage(true);
    let text = e.target.innerText.split(' ').at(-1).toLowerCase();
    setDocCheckText(text);
  };

  const render = () => {
    if (docCheckText === 'next' && userDetails === false) {
      return (
        <DocumentSubmission
          setRequiredDetails={setRequiredDetails}
          requiredDetails={requiredDetails}
        />
      );
    }
    //  else if (docCheckText === 'next' && userDetails === true) {
    //   return (
    //     <MessageSent
    //       setDocumentSend={setDocumentSend}
    //       setDocCheckText={setDocCheckText}
    //       setDocumentPage={setDocumentPage}
    //     />
    //   );
    // }
    else if (docCheckText === 'continue' && documentSend === true) {
      return (
        <Stepper
          setRequiredDetails={setRequiredDetails}
          requiredDetails={requiredDetails}
        />
      );
    } else if (docCheckText === 'continue') {
      return (
        <MessageSent
          setDocumentSend={setDocumentSend}
          setDocCheckText={setDocCheckText}
          setDocumentPage={setDocumentPage}
        />
      );
    } else if (docCheckText === 'back') {
      return (
        <Stepper
          setRequiredDetails={setRequiredDetails}
          requiredDetails={requiredDetails}
        />
      );
    } else {
      return (
        <Stepper
          setRequiredDetails={setRequiredDetails}
          requiredDetails={requiredDetails}
        />
      );
    }
  };

  const { inquiryStep } = useSelector((state: any) => state.appReducer);

  const renderRightContent = () => {
    switch (inquiryStep) {
      case 0:
        return (
          <StepperRightContent
            requiredDetails={requiredDetails}
            setRequiredDetails={setRequiredDetails}
          />
        );
      case 1:
        return <SendBookingRightContent />;
      case 2:
        return <SendBookingRightContent />;
      case 3:
        return <SendBookingRightContent />;
      default:
        return (
          <StepperRightContent
            requiredDetails={requiredDetails}
            setRequiredDetails={setRequiredDetails}
          />
        );
    }
  };

  const handleDocumentSubmit = () => {
    // let values = {
    //   proofOfIdentity: "",
    //   occupationDoc: "",
    //   propertyId: 1,
    //   landLordID: 1,
    //   gender: 1,
    //   checkIn: "",
    //   checkOut: "",
    //   dob: "",
    //   occupation: "",
    //   dialerCode: "",
    //   mobile: "",
    //   message: "",
    // };
    // dispatch(actions.sendDetails(requiredDetails));
  };

  return (
    <InquiryRequestWrapper>
      <Container>
        {inquiryStep !== 0 && (
          <div className='breadcrumb-header'>
            <Breadcrumb
              items={[
                {
                  title: (
                    <Link href='/home/property-listing?::'>
                      <Icon component={homeOutline} />
                    </Link>
                  ),
                },
                {
                  title: 'Inbox',
                },
                { title: 'James' },
              ]}
              separator={<Icon component={rightArrow} />}
            />
            <div className='archive'>
              <Icon component={archiveIcon} />
              Archive
            </div>
          </div>
        )}
        <RequestWrapper className={inquiryStep === 0 ? 'request-step-1' : ''}>
          <div className='left'>{render()}</div>
          {(docCheckText !== 'continue' || documentSend === true) && (
            <div className='right'>
              {renderRightContent()}
              {/* <StepperRightContent /> */}
            </div>
          )}
        </RequestWrapper>
      </Container>
      {inquiryStep === 0 && docCheckText !== 'continue' && (
        <FooterBtnInfo
          handleDocument={handleDocument}
          documentPage={documentPage}
          setDocumentPage={setDocumentPage}
          setRequiredDetails={setRequiredDetails}
          requiredDetails={requiredDetails}
          userDetails={userDetails}
        />
      )}
    </InquiryRequestWrapper>
  );
};

export default InquiryRequest;
