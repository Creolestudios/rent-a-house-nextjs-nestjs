import Image from "next/image";
import React from "react";
import { RentLendlordListWrapper } from "./RenterLendlord.styles";
import imgWrp from "@/assets/images/roller skating.svg";
import renter1 from "@/assets/images/renter1.png";
import renter2 from "@/assets/images/renter2.png";
import renter3 from "@/assets/images/renter3.png";
import renter4 from "@/assets/images/renter4.png";

const data = [
  {
    id: 1,
    title: "Book your new home from home",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ex, malesuada ut porttitor nec, ullamcorper eu arcu. Curabitur eros dolor, elementum eu nisl eget, interdum mattis lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ex, malesuada ut porttitor nec, ullamcorper eu arcu. Curabitur eros dolor, elementum eu nisl eget, interdum mattis lorem.",
    imgWrp: renter1,
  },
  {
    id: 2,
    title: "Book your new home from home",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ex, malesuada ut porttitor nec, ullamcorper eu arcu. Curabitur eros dolor, elementum eu nisl eget, interdum mattis lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ex, malesuada ut porttitor nec, ullamcorper eu arcu. Curabitur eros dolor, elementum eu nisl eget, interdum mattis lorem.",
    imgWrp: renter2,
  },
  {
    id: 3,
    title: "Book your new home from home",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ex, malesuada ut porttitor nec, ullamcorper eu arcu. Curabitur eros dolor, elementum eu nisl eget, interdum mattis lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ex, malesuada ut porttitor nec, ullamcorper eu arcu. Curabitur eros dolor, elementum eu nisl eget, interdum mattis lorem.",
    imgWrp: renter3,
  },
  {
    id: 4,
    title: "Book your new home from home",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ex, malesuada ut porttitor nec, ullamcorper eu arcu. Curabitur eros dolor, elementum eu nisl eget, interdum mattis lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ex, malesuada ut porttitor nec, ullamcorper eu arcu. Curabitur eros dolor, elementum eu nisl eget, interdum mattis lorem.",
    imgWrp: renter4,
  },
];

const RenterList = () => {
  return (
    <RentLendlordListWrapper>
      {data.map((item: any, key: number) => (
        <div className="list" key={key}>
          <div className="img-wrapper">
            <Image src={item?.imgWrp} width={173} height={137} alt={"img"} />
          </div>
          <div className="content">
            <div className="title">{item?.title}</div>
            <p>{item?.description}</p>
          </div>
        </div>
      ))}
    </RentLendlordListWrapper>
  );
};

export default RenterList;
