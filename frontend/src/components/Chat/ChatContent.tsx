import React, { useEffect } from "react";
import { ChatContentwrapper } from "./Chat.styles";
import { fontFamily, color } from "@/styles/variable";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import ChatList from "./ChatList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/rootReducer";

const ChatContent = ({ item }: any) => {
  const dispatch=useDispatch()
  const inboxData = useSelector(
    (state: RootState) => state.inboxReducer.messages
  );

  console.log("we got ", inboxData);
  console.log("item", item);
  return (
    <ChatContentwrapper>
      <div className="title-wrapper">
        <Title
          className="title"
          title={item?.label}
          fontFamily={`${fontFamily.ptBold}`}
          color={`${color.blackColor}`}
          marginBottom={"0"}
        />
        <SubTitle
          className="sub-title"
          title={`${inboxData.length} messages`}
          fontFamily={`${fontFamily.ptRegular}`}
          color={`${color.greyColor}`}
          marginBottom={"0"}
        />
      </div>
      <div className="chat-list-wrapper">
        {inboxData && inboxData.map((data) => <ChatList messageData={data} />)}
      </div>
    </ChatContentwrapper>
  );
};

export default ChatContent;
