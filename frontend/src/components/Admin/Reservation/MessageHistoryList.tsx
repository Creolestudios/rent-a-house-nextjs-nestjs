import React from "react";
import { Avatar } from "antd";
import { HistoryList, MessageHistoryListWrapper } from "./Reservation.styles";
import Image from "next/image";
import UserIcon from "@/assets/images/user5.png";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/rootReducer";
import moment from "moment";

const MessageHistoryList = () => {
  const singleReservation = useSelector(
    (state: RootState) => state.adminReservationListingReducer.singleReservation
  );
  function isImageUrl(url: any) {
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".svg"];
    const extension = url?.slice(url.lastIndexOf(".")).toLowerCase();
    return imageExtensions.includes(extension);
  }
  console.log("messages", singleReservation);
  return (
    <MessageHistoryListWrapper>
      {singleReservation?.messages?.map((x: any) => {
        return (
          <HistoryList>
            <div className="header-content">
              <Image
                src={isImageUrl(x?.file) ? x?.file : UserIcon}
                alt="images"
                width={24}
                height={24}
                style={{
                  marginRight: "10px",
                }}
              />
              <span className="user">
                {/* {singleReservation?.reservations?.tenant?.id === x.from_id
                  ? singleReservation?.reservations?.tenant?.first_name
                  : singleReservation?.reservations?.landlord?.first_name} */}

                {singleReservation?.reservations?.tenant?.id === x.from_id &&
                  singleReservation?.reservations?.tenant?.first_name}
                {singleReservation?.reservations?.landlord?.id === x.from_id &&
                  singleReservation?.reservations?.landlord?.first_name}
                {!(
                  singleReservation?.reservations?.tenant?.id === x.from_id ||
                  singleReservation?.reservations?.landlord?.id === x.from_id
                ) && "deleted"}
              </span>
              <span className="badge">
                {/* {singleReservation?.reservations?.tenant?.id === x.from_id
                  ? "tenant"
                  : "landlord"} */}
                    {singleReservation?.reservations?.tenant?.id === x.from_id &&
                 'tenant'}
                {singleReservation?.reservations?.landlord?.id === x.from_id &&
                  'landlord'}
                {!(
                  singleReservation?.reservations?.tenant?.id === x.from_id ||
                  singleReservation?.reservations?.landlord?.id === x.from_id
                ) && "deleted"}
              </span>
              <span className="time">
                {moment
                  .utc(x?.created_at)
                  .local()
                  .format("YYYY-MMM-DD ( HH:mm )")}
              </span>
            </div>
            <div className="content-text">
              <p>{x?.text}</p>
            </div>
          </HistoryList>
        );
      })}

      {/* <HistoryList>

        <div className="header-content">
          <Image
            src={isImageUrl("UserIcon") ? UserIcon : UserIcon}
            alt="images"
            width={24}
            height={24}
            style={{
              marginRight: "10px",
            }}
          />{" "}
          <span className="user">You</span>
          <span className="badge">Tenant</span>
          <span className="time">5 mins ago</span>
        </div>
        <div className="content-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu
            ex, malesuada ut porttitor nec, ullamcorper eu arcu. Curabitur eros
            dolor, elementum eu nisl eget, interdum mattis lorem.
          </p>
        </div>

      </HistoryList> */}
      {/* <HistoryList>
        <div className="header-content">
          <Image
            src={isImageUrl("UserIcon") ? UserIcon : UserIcon}
            alt="images"
            width={24}
            height={24}
            style={{
              marginRight: "10px",
            }}
          />{" "}
          <span className="user">James</span>
          <span className="badge">Host</span>
          <span className="time">5 mins ago</span>
        </div>
        <div className="content-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu
            ex, malesuada ut porttitor nec, ullamcorper eu arcu. Curabitur eros
            dolor, elementum eu nisl eget, interdum mattis lorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu
            ex, malesuada ut porttitor nec, ullamcorper eu arcu.
          </p>
          <p>
            Curabitur eros dolor, elementum eu nisl eget, interdum mattis lorem.
          </p>
        </div>
       
      </HistoryList> */}
      {/* <HistoryList>
        <div className="header-content">
          <Image
            src={isImageUrl("UserIcon") ? UserIcon : UserIcon}
            alt="images"
            width={24}
            height={24}
            style={{
              marginRight: "10px",
            }}
          />{" "}
          <span className="user">lora</span>
          <span className="badge">Tenant</span>
          <span className="time">5 mins ago</span>
        </div>
        <div className="content-text">
          <p>
            Hello! I'm interested in renting your accommodation. I believe I
            match your tenant preferences.
          </p>
        </div>
      </HistoryList> */}
    </MessageHistoryListWrapper>
  );
};

export default MessageHistoryList;
