import { Container } from '@/globalStyles';
import { fontFamily, color } from '@/styles/variable';
import React, { useState } from 'react';
import Title from '../Title/Title';
import { ChatWrapper } from './Chat.styles';
import { Input } from 'antd';
import Icon from '@ant-design/icons';
import searchIcon from '@/assets/images/icons/SearchIconSvg';
import ChatBox from './ChatBox';
import { useSelector } from 'react-redux';

export interface HeaderProps {
  headerHeight: number;
}

const Chat = () => {
  const { headerHeight } = useSelector((state: any) => state.appReducer);
  const[searchedChat,setSearchedChat]=useState<any>("")

  const obj: HeaderProps = {
    headerHeight,
  };

  return (
    <ChatWrapper {...obj}>
      <Container>
        <div className='header-wrapper'>
          <Title
            className='title'
            title='Inbox'
            fontFamily={`${fontFamily.ptBold}`}
            color={`${color.blackColor}`}
          />
          <div className='search-wrapper'>
            <Input placeholder='Keyword' onChange={(e:any)=>{setSearchedChat(e.target.value)}} />
            <span className='icon'>
              <Icon component={searchIcon} />
            </span>
          </div>
        </div>
        <ChatBox searchedChat={searchedChat} />
      </Container>
    </ChatWrapper>
  );
};

export default Chat;
