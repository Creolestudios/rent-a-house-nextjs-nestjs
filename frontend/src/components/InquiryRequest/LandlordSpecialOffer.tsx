import React from "react";
import { LandlordSpecialOfferWrapper } from "./InquiryRequest.styles";
import { CustomButton } from "@/globalStyles";
import Icon from "@ant-design/icons";
import downArrow from "@/assets/images/icons/DownArrowSvg";
import { DatePicker, InputNumber } from "antd";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const dateFormat = "DD-MM-YYYY";

const LandlordSpecialOffer = () => {
  const onChangeNumber = (value: number) => {};

  return (
    <LandlordSpecialOfferWrapper>
      <div className="title">Provide Special Offer!</div>
      <div className="date-wrapper">
        <RangePicker
          suffixIcon={""}
          separator={" "}
          placeholder={["Move - in Date", "Move - out Date"]}
          defaultValue={[
            dayjs("01-01-2015", dateFormat),
            dayjs("05-01-2015", dateFormat),
          ]}
          renderExtraFooter={() => (
            <CustomButton className="fill">Clear All</CustomButton>
          )}
        />
        <InputNumber
          defaultValue={400}
          onChange={onChangeNumber}
          controls={{
            upIcon: <Icon component={downArrow} />,
            downIcon: <Icon component={downArrow} />,
          }}
        />
      </div>
      <div className="btn-wrapper">
        <CustomButton>Cancel</CustomButton>
        <CustomButton className="fill">Send Offer</CustomButton>
      </div>
    </LandlordSpecialOfferWrapper>
  );
};

export default LandlordSpecialOffer;
