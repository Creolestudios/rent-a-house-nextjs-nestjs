import React, { useEffect, useState } from 'react';
import { Avatar } from 'antd';
import { ChatMessagesWrapper } from './InquiryRequest.styles';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/rootReducer';
import { fontFamily } from '@/styles/variable';

const ChatMessages = ({ messages }) => {
  const [userId, setUserId] = useState(0);
  const [landlord, setLandlord] = useState(0);
  const chatData = useSelector(
    (state: RootState) => state.inquiryRequestReducer.chatingData
  );
  useEffect(() => {
    setUserId(Number(sessionStorage.getItem('user_id')));
    setLandlord(Number(sessionStorage.getItem('landlord')));
  }, []);
  return (
    <ChatMessagesWrapper>
      {messages.length > 0 &&
        messages?.toReversed()?.map((data, key) => (
          <div className='msg' key={key}>
            <div className='header-title'>
              {landlord !== 1 ? (
                userId === data.from_id ? (
                  <>
                    <Avatar size={24} src={chatData?.tenant_data?.image}>
                      Y
                    </Avatar>
                    <h4>You</h4>
                  </>
                ) : (
                  <>
                    <Avatar size={24} src={chatData?.landlord_data?.image}>
                      {chatData?.landlord_data?.first_name.charAt(0)}
                    </Avatar>
                    <h4>{chatData?.landlord_data?.first_name}</h4>
                  </>
                )
              ) : userId == data.from_id ? (
                (console.log('I am landlord'),
                (
                  <>
                    <Avatar size={24} src={chatData?.tenant_data?.image}>
                      Y
                    </Avatar>
                    <h4>You</h4>
                  </>
                ))
              ) : (
                (console.log('I am user'),
                (
                  <>
                    <Avatar size={24} src={chatData?.tenant_data?.image}>
                      {chatData?.tenant_data?.first_name.charAt(0)}
                    </Avatar>
                    <h4>{chatData?.tenant_data?.first_name}</h4>
                  </>
                ))
              )}
              <div className='date'>
                {moment
                  .utc(data?.created_at)
                  .local()
                  .format('YYYY-MM-DD ( HH:mm )')}
              </div>
            </div>
            <div className='content'>
              <p>{data?.text}</p>
              {data.file !== null ? (
                <a
                  href={data.file}
                  target='_blank'
                  style={{
                    color: '#03488B',
                    textDecoration: 'underline',
                    fontFamily: fontFamily.demiBold,
                  }}
                >
                  {data.file.split('/')?.[6]}
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
    </ChatMessagesWrapper>
  );
};

export default ChatMessages;
