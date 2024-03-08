import React, { useEffect, useState } from "react";
import { Avatar, Rate } from "antd";
import { ChatListWrapper } from "./Chat.styles";
import Icon, { StarOutlined } from "@ant-design/icons";
import archiveIcon from "@/assets/images/icons/ArchiveSvg";
import archiveFillIcon from "@/assets/images/icons/ArchiveFillSvg";
import { useRouter } from "next/router";
import moment from "moment";
import action from "@/redux/inbox/inbox.action";
import { useDispatch } from "react-redux";

const ChatList = ({ messageData }: any) => {
  const [value, setValue] = useState(0);
  const [archieveValue, setArchieveValue] = useState(0);
  const [sortlist, setSortlist] = useState(false);
  const [archive, setArchive] = useState(false);
  const [userId, setUserId] = useState(0);

  const router = useRouter();
  const dispatch = useDispatch();

  const onHandelSortListClick = () => {
    // false
    setSortlist(!sortlist); // true
    !sortlist ? setValue(1) : setValue(0); //false

    //click on handlesortlistclick
    let data;
    // console.log("hello",messageData.status)
    // if (messageData.status === 7) {
    //   console.log("archieve value", archieveValue);

    //   data = {
    //     id: messageData.id,
    //     status: 6,
    //   };
    // } else {
    //   if (value === 1) {
    //     data = {
    //       id: messageData.id,
    //       status: 0,
    //     };
    //   } else {
    //     data = {
    //       id: messageData.id,
    //       status: 5,
    //     };
    //   }
    // }

    // for testing
    if (value === 1) {
      if (archieveValue === 0) {
        data = {
          id: messageData.id,
          status: 0,
        };
      } else {
        data = {
          id: messageData.id,
          status: 6,
        };
      }
    } else {
      data = {
        id: messageData.id,
        status: 5,
      };
    }

    dispatch(action.setSortlistMessage(data));
  };

  const onHandelArchiveClick = () => {
    setArchive(!archive);

    !archive ? setArchieveValue(1) : setArchieveValue(0);

    //click on handleArchive
    let data;
    // console.log("helloooo",messageData.status)
    // if (messageData.status === 7) {
    //   data = {
    //     id: messageData.id,
    //     status: 5,
    //   };
    // } else {
    //   if (archieveValue === 1) {
    //     data = {
    //       id: messageData.id,
    //       status: 0,
    //     };
    //   } else {
    //     data = {
    //       id: messageData.id,
    //       status: 6,
    //     };
    //   }
    // }
    //for testing
    if (archieveValue === 1) {
      if (value === 0) {
        data = {
          id: messageData.id,
          status: 0,
        };
      } else {
        data = {
          id: messageData.id,
          status: 5,
        };
      }
    } else {
      data = {
        id: messageData.id,
        status: 6,
      };
    }

    dispatch(action.setSortlistMessage(data));
    console.log("data", data);
  };

  const handleOnClick = () => {
    router.push(
      `/home/inquiry-request?${messageData?.property?.id}:${messageData?.booking_id}:${messageData?.from_id}:${messageData?.to_id}`
    );
    sessionStorage.setItem("stepper", "1");
  };

  const FormattedDate=(dateString)=>{
    // Convert the date string to a moment object
  const dateObj = moment.utc(dateString).local().format("YYYY-MMM-DD ( HH:mm )");
  const now = moment().local().startOf('day');


  if(now.isSame(dateObj, 'day')){   
    return 'Today'
  }
  else{   
    return dateObj
  }

  }

  useEffect(() => {
    setUserId(Number(sessionStorage.getItem("user_id")));

    //for shortlist
    if (messageData.status === 5 || messageData.status === 7) {
      setSortlist(true);
      setValue(1);
    } else {
      setSortlist(false);
      setValue(0);
    }

    //for archieve
    if (messageData.status === 6 || messageData.status === 7) {
      setArchive(true);
      setArchieveValue(1);
    } else {
      setArchive(false);
      setArchieveValue(0);
    }
  }, [messageData.status]);
  
  return (
    <ChatListWrapper>
      {messageData?.landlordData?.id === userId ? (
        <div className="left">
          <Avatar size={32} src={messageData?.tenantData?.image}>
            {messageData?.tenantData?.first_name?.charAt(0)}
          </Avatar>
        </div>
      ) : (
        <div className="left">
          <Avatar size={32} src={messageData?.landlordData?.image}>
            {messageData?.landlordData?.first_name?.charAt(0)}
          </Avatar>
        </div>
      )}

      <div className="right">
        <div className="header-wrap">
          <div>
            <ul className="dot">
              {messageData?.landlordData?.id === userId ? (
                <li className="user">{`${messageData?.tenantData?.first_name} ${messageData?.tenantData?.last_name}`}</li>
              ) : (
                <li className="user">{`${messageData?.landlordData?.first_name} ${messageData?.landlordData?.last_name}`}</li>
              )}
              <li className="status">
                <span>Pending</span>
              </li>
              <li>
                {moment(messageData?.created_at).format("YYYY-MMM-DD  HH:MM")}
              </li>
            </ul>
            <ul className="line">
              <li>{messageData?.property?.name}</li>
              <li>{`${messageData?.dates?.start_date} to ${messageData?.dates?.end_date}`}</li>
            </ul>
          </div>
          <div>
            <ul className="icons">
              <li
                onClick={onHandelSortListClick}
                className={sortlist ? "active" : ""}
              >
                <Rate
                  defaultValue={0}
                  onChange={setValue}
                  value={value}
                  count={1}
                />
                Shortlist
              </li>
              <li
                onClick={onHandelArchiveClick}
                className={archive ? "active" : ""}
              >
                {archive ? (
                  <Icon component={archiveFillIcon} />
                ) : (
                  <Icon component={archiveIcon} />
                )}
                Archive
              </li>
            </ul>
          </div>
        </div>
        <div className="message" onClick={handleOnClick}>
          <div>
            <label>
              {userId === messageData?.userMessages?.userMessages?.from_id
                ? "You"
                : messageData?.landlordData?.id === userId
                ? messageData?.landlordData?.first_name
                : messageData?.tenantData?.first_name}
            </label>
            <span>
              {messageData?.userMessages?.userMessages?.text === null
                ? "File..."
                : messageData?.userMessages?.userMessages?.text}
            </span>
          </div>
          <div className="date-time">
            {/* {moment
              .utc(messageData?.userMessages?.userMessages?.created_at)
              .local()
              .format("YYYY-MMM-DD ( HH:mm )")} */}
              {FormattedDate(messageData?.userMessages?.userMessages?.created_at)}
          </div>
        </div>
      </div>
    </ChatListWrapper>
  );
};

export default ChatList;
