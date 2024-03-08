import { Container } from "@/globalStyles";
import React from "react";
import SubTitle from "../SubTitle/SubTitle";
import Title from "../Title/Title";
import { fontFamily, color } from "@/styles/variable";
import { BenifitLendlordWrapper } from "./Pricing.styles";
import BenifitBlock from "./BenifitBlock";

const BenifitLendlord = ({ isEdit, data }: any) => {
  return (
    <BenifitLendlordWrapper>
      <Container className="container">
        <div className="title-wrapper">
          <Title
            title={data.pricingId2}
            marginBottom={"8px"}
            fontFamily={fontFamily.ptBold}
            color={color.blackColor}
            id={"pricingHeadingId2"}
            isEdit={isEdit}
          />
          <SubTitle

          title={data.pricingId4}
            fontFamily={fontFamily.ptRegular}
            color={color.greyColor}
            id={"pricingSubtitleId2"}
            isEdit={isEdit}
          />
        </div>
        <BenifitBlock content={data} isEdit={isEdit} />
      </Container>
    </BenifitLendlordWrapper>
  );
};

export default BenifitLendlord;
