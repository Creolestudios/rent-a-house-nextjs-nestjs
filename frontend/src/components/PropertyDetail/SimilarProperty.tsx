import React from "react";
import SubTitle from "../SubTitle/SubTitle";
import Title from "../Title/Title";
import { SimilarPropertyWrapper } from "./PropertyDetail.styles";
import { fontFamily, color } from "@/styles/variable";
import { CardWrapper } from "../CommonCard/CommonCard.styles";
import CommonCard from "../CommonCard/CommonCard";

interface IData {
  id?: number;
  images?: string[];
  name: string;
  type: string;
  space_overview: {
    bedrooms: number;
    size: number;
  };
  rent: number;
  available_from: string;
}

const SimilarProperty = () => {
  return (
    <SimilarPropertyWrapper>
      <Title
        title="Similar Properties"
        fontFamily={`${fontFamily.ptBold}`}
        color={`${color.blackColor}`}
        marginBottom={"8px"}
      />
      <SubTitle
        title="Discover thousands of apartments and homes for rent in Vancouver"
        fontFamily={`${fontFamily.ptRegular}`}
        color={`${color.greyColor}`}
        marginBottom={"8px"}
      />
      <CardWrapper className="card-wrapper">
        {/* {dataList.map((item): any => (
          <div className="card-item" key={item?.id}>
            <CommonCard item={item} />
          </div>
        ))} */}
      </CardWrapper>
    </SimilarPropertyWrapper>
  );
};

export default SimilarProperty;
