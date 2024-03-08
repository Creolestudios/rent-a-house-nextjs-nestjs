import { Avatar, Form, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { ChatBoxWrapper } from './InquiryRequest.styles';
import { Input } from 'antd';
import Icon from '@ant-design/icons';
import pinIcon from '@/assets/images/icons/PinSvg';
import type { UploadProps } from 'antd';
import { Button, Upload } from 'antd';
import { CustomButton } from '@/globalStyles';
import ChatMessages from './ChatMessages';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/rootReducer';
import { useSubscription } from '@apollo/client';
import { inquiryChat } from '@/services/inquiryRequest/inquiryRequest.subscription';
import actions from '@/redux/inquiryRequest/inquiryRequest.action';
import { useRouter } from 'next/router';
import ToastNotification from '../Admin/Notification/ToastNotification';

const { TextArea } = Input;

const handleRequest = ({ file, onSuccess, onError }: any) => {
  if (file) {
    onSuccess();
  }
};

const ChatBox = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [userId, setUserId] = useState(0);
  const [uploadedFile, setUploadedFile] = useState(0);

  const bookingId = parseInt(router.asPath.split(':')[1]);
  const fromId = parseInt(router.asPath.split(':')[2]);
  const toId = parseInt(router.asPath.split(':')[3]);
  let payloaduser1 = {
    fromId: fromId,
    toId: toId,
    bookingId: bookingId,
  };
  let payloaduser2 = {
    fromId: toId,
    toId: fromId,
    bookingId: bookingId,
  };

  const tenantChat = useSubscription(inquiryChat, {
    variables: payloaduser1,
  });
  const landlordChat = useSubscription(inquiryChat, {
    variables: payloaduser2,
  });
  const propertyData = useSelector(
    (state: RootState) => state.inquiryRequestReducer.propertyInfo
  );
  const messagesData = useSelector(
    (state: RootState) => state.inquiryRequestReducer.messages
  );
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = (e) => {
    let messagePayload;
    userId === fromId
      ? (messagePayload = {
          fromId: fromId,
          toId: toId,
          bookingId: bookingId,
          message: e?.message,
          file: uploadedFile ? uploadedFile : null,
        })
      : (messagePayload = {
          fromId: toId,
          toId: fromId,
          bookingId: bookingId,
          message: e?.message,
          file: uploadedFile ? uploadedFile : null,
        });
        console.log("messagePayload",messagePayload)
        if(messagePayload?.message){

          dispatch(actions.sendMessage(messagePayload));
        }
        else if(messagePayload?.file && !messagePayload?.message){
          let obj={
            ...messagePayload,
            message:''
          }
            dispatch(actions.sendMessage(obj))
          console.log("obj",obj)
        }
        else{
          ToastNotification({
            type:'info',
            message:'Please enter message'
          })
        }
  };

  const handleFile = (e) => {
    setUploadedFile(e.file.originFileObj);
  };

 //for test
 useEffect(()=>{
  if(payloaduser1.toId){

    dispatch(actions.continueChat(payloaduser1))
  }
 },[])

  useEffect(() => {
    tenantChat?.data &&
      dispatch(actions.setSubsriptionMessage(tenantChat?.data?.newMessage));
  }, [tenantChat]);

  useEffect(() => {
    landlordChat?.data &&
      dispatch(actions.setSubsriptionMessage(landlordChat?.data?.newMessage));
  }, [landlordChat]);
  // console.log(loading, 'subscription', data);

  useEffect(() => {
    setUserId(Number(sessionStorage.getItem('user_id')));
  }, []);
  const chatLabel = () => {
    return (
      <div>
        <strong>to</strong>
        <div>
          <Avatar size={24} src={propertyData?.landlord?.image}>
            {`${propertyData?.landlord?.first_name.slice(
              0,
              1
            )} ${propertyData?.landlord?.last_name.slice(0, 1)}`}
          </Avatar>
          <div>
            <h4>{`${propertyData?.landlord?.first_name} ${propertyData?.landlord?.last_name}`}</h4>
            <span className='seperator'>,</span>
            <p>
              Owner of <span>{propertyData?.name}</span>
            </p>
          </div>
        </div>
      </div>
    );
  };

  const { inquiryStep, cancelBook } = useSelector(
    (state: any) => state.appReducer
  );

  return (
    <ChatBoxWrapper>
      {!cancelBook && (
        <Form onFinish={handleSendMessage}>
          <Form.Item label={chatLabel()} name='message'>
            <TextArea
              rows={4}
              placeholder='Start Typing here...'
              value={message}
              onChange={handleMessage}
            />
          </Form.Item>
          <Form.Item>
            <div className='upload-wrapper'>
              <Upload
                name='file'
                onChange={handleFile}
                customRequest={handleRequest}
                maxCount={1}
              >
                <Button icon={<Icon component={pinIcon} />}>Upload File</Button>
              </Upload>
              <CustomButton className='fill' type='submit'>
                send
              </CustomButton>
            </div>
          </Form.Item>
        </Form>
      )}
      <ChatMessages messages={messagesData} />

    </ChatBoxWrapper>
  );
};

export default ChatBox;
