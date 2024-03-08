import { CustomButton } from '@/globalStyles';
import React from 'react';
import SubTitle from '../SubTitle/SubTitle';
import Title from '../Title/Title';
import { MessageSentWrapper } from './InquiryRequest.styles';
import { fontFamily, color } from '@/styles/variable';
import { useDispatch, useSelector } from 'react-redux';
import appActions from '@/redux/app/app.action';
import actions from '@/redux/inquiryRequest/inquiryRequest.action';
import { RootState } from '@/redux/store/rootReducer';
import { useRouter } from 'next/router';

const MessageSent = ({ setDocumentSend, setDocCheckText, setDocumentPage }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const bookingId = useSelector(
    (state: RootState) => state?.inquiryRequestReducer?.bookingId
  );
  const fromId = useSelector(
    (state: RootState) => state?.inquiryRequestReducer?.tenantId
  );
  const toId = useSelector(
    (state: RootState) => state?.inquiryRequestReducer?.landlordId
  );
  const property = useSelector(
    (state: RootState) => state?.inquiryRequestReducer?.propertyInfo
  );

  const handleContinueChat = () => {
    setDocumentSend(true);
    dispatch(appActions.inquiryStepper(1));
    window.sessionStorage.setItem('stepper', '1');
    setDocCheckText('');
    setDocumentPage(false);

    let continueChatPayload = {
      bookingId: bookingId,
      toId: toId,
      fromId: fromId,
    };
    dispatch(actions.continueChat(continueChatPayload));
    router.push(`?${property?.id}:${bookingId}:${fromId}:${toId}`);
  };

  return (
    <MessageSentWrapper>
      <Title
        className='title'
        title={`Your information was sent to ${property?.landlord?.first_name}`}
        fontFamily={`${fontFamily.ptBold}`}
        color={`${color.blackColor}`}
        marginBottom={'4px'}
      />
      <SubTitle
        className='sub-title'
        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla finibus mi varius sodales. 
Vestibulum consectetur metus placerat tortor imperdiet egestas.'
        fontFamily={`${fontFamily.ptBold}`}
        color={`${color.greyColor}`}
      />

      <div className='btn-wrapper'>
        <CustomButton className='fill' onClick={handleContinueChat}>
          continue chatting
        </CustomButton>
        {/* <CustomButton className='fill'>Send Booking Request</CustomButton> */}
        {/* <CustomButton>Continue Chatting</CustomButton> */}
      </div>
    </MessageSentWrapper>
  );
};

export default MessageSent;
