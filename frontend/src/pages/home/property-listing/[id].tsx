import React from "react";
import MainComp from "@/components/MainComp/MainComp";
import PropertyDetail from "@/components/PropertyDetail/PropertyDetail";
import Authguard from "@/services/Authguard/Authgaurd";

const SinglePropertyDetail = () => {
  return (
    <Authguard secure={false} role={"user"}>
      <MainComp>
        <PropertyDetail />
      </MainComp>
    </Authguard>
  );
};

export default SinglePropertyDetail;
