import React from "react";
import ImageView from "./ImageView";
import { PropertyDetailViewWrapper } from "./PropertyDetail.styles";
import PropertyDetailContent from "./PropertyDetailContent";

const PropertyDetailView = () => {
  return (
    <PropertyDetailViewWrapper>
      <ImageView />
      <PropertyDetailContent />
    </PropertyDetailViewWrapper>
  );
};

export default PropertyDetailView;
