import React, { useEffect, useState } from 'react';
import { ChatBoxWrapper } from './Chat.styles';
import { Tabs } from 'antd';
import ChatContent from './ChatContent';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/inbox/inbox.action';

const item = [
  {
    id: 9,
    label: 'All messages',
    masgCount: 2,
  },
  {
    id: 10,
    label: 'Active',
    masgCount: 1,
  },
  {
    id: 1,
    label: 'Unread',
    masgCount: 1,
  },
  {
    id: 2,
    label: 'Pending',
    masgCount: 1,
  },
  {
    id: 3,
    label: 'Booked',
    masgCount: 0,
  },
  {
    id: 5,
    label: 'Shortlisted',
    masgCount: 1,
  },
  {
    id: 8,
    label: 'Expired',
    masgCount: 0,
  },
  {
    id: 6,
    label: 'Archived',
    masgCount: 1,
  },
];

const ChatBox = ({searchedChat}:any) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(9);

  useEffect(() => {
   
    let getMessagePayload = {
      statusId: activeTab,
      name:searchedChat
    };
    dispatch(actions.getMessages(getMessagePayload));
  }, [activeTab,searchedChat]);

  const { windowWidth } = useSelector((state: any) => state.appReducer);
  console.log("active tab",activeTab)
  return (
    <ChatBoxWrapper>
      <Tabs
        tabPosition={windowWidth < 768 ? 'top' : 'left'}
        items={item.map((e: any) => {
          return {
            label: (
              <div
                className='tab-label-wrapper'
                onClick={() => setActiveTab(e.id)}
              >
                <div>
                  <span className='title'>{e?.label}</span>
                </div>
                {/* <span className='badge'>{e?.masgCount}</span> */}
              </div>
            ),
            key: e?.id,
            children: <ChatContent item={e} />,
          };
        })}
      />
    </ChatBoxWrapper>
  );
};

export default ChatBox;
