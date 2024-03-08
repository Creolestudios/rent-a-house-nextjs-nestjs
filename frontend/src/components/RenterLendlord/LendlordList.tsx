import React, { useEffect } from "react";
import { WorkListWrapper } from "../LendingPage/LendingPage.styles";
import Icon from "@ant-design/icons";
import RollerSketingImg from "@/assets/images/RollerSketingSvg";
import ReadingSideImg from "@/assets/images/ReadingSideSvg";
import BalletImg from "@/assets/images/BalletSvg";
import numberOne from "@/assets/images/NumberOneSvg";
import numberTwo from "@/assets/images/NumberTwoSvg";
import numberThree from "@/assets/images/NumberThreeSvg";
import { Button } from "antd";
import arrowIcon from "@/assets/images/icons/LongRightArrowSvg";
import { RentLendlordListWrapper } from "./RenterLendlord.styles";
import { useSelector } from "react-redux";

// export interface IstylesProps {
//   distanceItem: number;
// }

const landlordDataList = [
  {
    id: 1,
    title: "List your place",
    description:
      "Create your listings within 5 minutes and make your properties visible to the world!",
    numberImg: <Icon component={numberOne} />,
    listImg: <Icon component={RollerSketingImg} />,
  },
  {
    id: 2,
    title: "Rent it out",
    description:
      "Receive contact requests, select your favourite tenants and confirm the booking.",
    numberImg: <Icon component={numberTwo} />,
    listImg: <Icon component={ReadingSideImg} />,
  },
  {
    id: 3,
    title: "Get paid",
    description: "Get paid out after your tenant has successfully moved-in.",
    numberImg: <Icon component={numberThree} />,
    listImg: <Icon component={BalletImg} />,
  },
];

const LendlordList = ({ selected, content,isEdit,isHome,id }: any) => {

  const data = useSelector((state:any)=>state.cmsReducer?.pageContent)
  let parsedData= data && JSON.parse(data)

    useEffect(()=>{
      console.log("fromHome",isHome)
    },[])

  // return (
  //   <RentLendlordListWrapper>
  //     <WorkListWrapper
  //       //  {...obj}
  //       className="work-list-wrapper"
  //     >
  //       {landlordDataList.map((item): any => (
  //         <div className="list-item" key={item?.id}>
  //           <div className="number">{item?.numberImg}</div>
  //           <div className="list-img">{item?.listImg}</div>
  //           <div
  //             className="title"
  //             contentEditable={isEdit}
  //             id={`pricinglandlord${item.id}`}
  //           >
  //             {content[`pricinglandlord${item?.id}`]}
  //           </div>
  //           <p contentEditable={isEdit} id={`pricinglandlorddesc${item.id}`}>
  //             {content[`pricinglandlord${item?.id + 3}`]}
  //           </p>
  //         </div>
  //       ))}
  //     </WorkListWrapper>
  //     {selected ? (
  //       <Button className="custom-btn">
  //         List Your Properties For Free <Icon component={arrowIcon} />
  //       </Button>
  //     ) : null}
  //   </RentLendlordListWrapper>
  // );

  if(isHome){
    return (
      <RentLendlordListWrapper>
        <WorkListWrapper
          //  {...obj}
          className="work-list-wrapper"
        >
          {landlordDataList.map((item): any => (
            <div className="list-item" key={item?.id}>
              <div className="number">{item?.numberImg}</div>
              <div className="list-img">{item?.listImg}</div>
              <div
                className="title"
                contentEditable={isEdit}
                id={`${id}${item?.id}Title`}
              >
                {/* {content[`pricinglandlord${item?.id}`]} */}
                {/* {content[`${id}${item?.id}Title`]} */}
                {content ? content[`${id}${item?.id}Title`] : parsedData[`landlordHome${item?.id}Title`]}

              </div>
              <p contentEditable={isEdit} id={`${id}${item?.id}Description`}>
                {/* {content[`pricinglandlord${item?.id + 3}`]} */} 
                {/* {content[`${id}${item?.id}Description`]} */}
                {content ? content[`${id}${item?.id}Description`] : parsedData[`landlordHome${item.id}Description`] }

              </p>
            </div>
          ))}
        </WorkListWrapper>
        {selected ? (
          <Button className="custom-btn">
            List Your Properties For Free <Icon component={arrowIcon} />
          </Button>
        ) : null}
      </RentLendlordListWrapper>
    );
  }
  else{
    return (
      <RentLendlordListWrapper>
        <WorkListWrapper
          //  {...obj}
          className="work-list-wrapper"
        >
          {landlordDataList.map((item): any => (
            <div className="list-item" key={item?.id}>
              <div className="number">{item?.numberImg}</div>
              <div className="list-img">{item?.listImg}</div>
              <div
                className="title"
                contentEditable={isEdit}
                id={`pricinglandlord${item.id}`}
              >
                {content[`pricinglandlord${item?.id}`]}
              </div>
              <p contentEditable={isEdit} id={`pricinglandlorddesc${item.id}`}>
                {content[`pricinglandlord${item?.id + 3}`]}
              </p>
            </div>
          ))}
        </WorkListWrapper>
        {selected ? (
          <Button className="custom-btn">
            List Your Properties For Free <Icon component={arrowIcon} />
          </Button>
        ) : null}
      </RentLendlordListWrapper>
    );
  }
 




};

export default LendlordList;
