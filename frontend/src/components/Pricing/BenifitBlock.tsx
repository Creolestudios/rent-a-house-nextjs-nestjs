import React, { useEffect, useState } from "react";
import { BenifitBlockWrapper } from "./Pricing.styles";
import Icon from "@ant-design/icons";
import checkIcon from "@/assets/images/icons/CheckSvg";
import crossIcon from "@/assets/images/icons/CrossDangerSvg";
import Image from "next/image";
import logo from "@/assets/images/logo-white.svg";
import arrowIcon from "@/assets/images/icons/LongRightArrowSvg";
import { Button } from "antd";
import tableImg from "../../assets/images/Table_webview.png";
import tableMbImg from "../../assets/images/Table_mobileview.png";
import { gql, useMutation } from "@apollo/client";
import { useSelector } from "react-redux";

const data = [
  {
    id: 1,
    title: "Commission fee",
    description: "Only charged if your place is successfully booked",
    ownRent: "25%",
    agencyRent: "100%",
  },
  {
    id: 2,
    title: "Quality tenants",
    description: "Choose the tenant of your liking",
    ownQuility: true,
    agencyQuality: true,
  },
  {
    id: 3,
    title: "Fast online bookings",
    description: "No need for in-person viewings.",
    ownFastBookign: true,
    agencyFastBooking: true,
  },
  {
    id: 4,
    title: "Get booked",
    description: "Secure tenants months in advance",
    ownAdvanceBooked: true,
    agencyAdvanceBooked: true,
  },
];

const BenifitBlock = ({ isEdit, content }: any) => {
  const [img, setImg] = useState<any>();
  const imageFromDatabase=useSelector((state:any)=>state.cmsReducer.pageContent)
  let parsedImage=imageFromDatabase && JSON.parse(imageFromDatabase);
  
  const [mutate] = useMutation(gql`
    mutation ($file: Upload!) {
      uploadForCmsPage(file: $file)
    }
  `);
  const imageHandler = async (event) => {
    const file = event.target.files[0];
    let responseImage = await mutate({ variables: { file } });
    setImg(responseImage.data.uploadForCmsPage);
  };
  useEffect(()=>{
    setImg(parsedImage.benifitBlockImage)
  },[])
  return (
    <BenifitBlockWrapper>
      {/* <div className="benifit-table">
        <div className="header">
          <div>Benefits</div>
          <div>
            <Image src={logo} width={131} height={41} alt="logo" />
          </div>
          <div>Other Agencies</div>
        </div>
        <div className="body-content">
          {data.map((row, key) => (
            <div className="row" key={key}>
              <div>
                <div className="title" contentEditable={isEdit} id={`pricingTable${row?.id}`}>
                  {content[`pricingTableHeading${row?.id}`]}
                  </div>
                <p contentEditable={isEdit} id={`pricingTableDesc${row?.id}`}>
                  {content[`pricingTableDesc${row?.id}`]}

                  </p>
              </div>
              <div>
                {row?.ownRent && (
                  <>
                    <div className="green-text">{row?.ownRent}</div>
                    <p>of month’s rent</p>
                  </>
                )}
                {(row?.ownQuility ||
                  row?.ownFastBookign ||
                  row?.ownAdvanceBooked) && (
                    <div className="icon">
                      <Icon component={checkIcon} />
                    </div>
                  )}
              </div>
              <div>
                {row?.agencyRent && (
                  <>
                    <div className="red-text">{row?.agencyRent}</div>
                    <p>of month’s rent</p>
                  </>
                )}
                {(row?.agencyQuality ||
                  row?.agencyFastBooking ||
                  row?.agencyAdvanceBooked) && (
                    <div className="icon">
                      <Icon component={crossIcon} />
                    </div>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="table-images">
        <Image
        id="benifitBlockImage"
          src={window.innerWidth > 767 ? img?img:tableImg : img?img:tableMbImg}
          alt="images"
          width={900}
          height={447}
          onClick={() => {isEdit &&
            document.getElementById("benifitBlock").click();
          }}
        />
      </div>
      <input
        style={{ visibility: "hidden", display: "none" }}
        type="file"
        accept="image/*"
        id="benifitBlock"
        onChange={(e) => imageHandler(e)}
      />
      <Button className="custom-btn">
        Let’s Get Started
        <Icon component={arrowIcon} />
      </Button>
    </BenifitBlockWrapper>
  );
};

export default BenifitBlock;
