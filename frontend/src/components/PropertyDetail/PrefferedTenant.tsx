import React, { useEffect } from "react";
import Title from "../Title/Title";
import { PrefferedTenantWrap } from "./PropertyDetail.styles";
import { fontFamily, color } from "@/styles/variable";
import { gender, prefferedTenentType } from "@/config/constants";

const PrefferedTenant = ({ prefferedTenent }) => {
  return (
    <PrefferedTenantWrap>
      <Title
        title={"Preferred Tenant"}
        marginBottom={"0"}
        fontFamily={`${fontFamily.ptBold}`}
        color={`${color.blackColor}`}
      />
      <div className="tenant-detail">
        <div className="block">
          <label>Age :</label>
          <span>At least 25</span>
        </div>
        <div className="block">
          <label>Tenant type:</label>
          <span>{prefferedTenentType[prefferedTenent?.tenant]?.label}</span>
        </div>
        <div className="block">
          <label>Gender :</label>
          <span>{gender[prefferedTenent?.gender]?.label}</span>
        </div>
        {/* <div className="block">
          <label>Suitable for couples:</label>
          <span>Yes</span>
        </div> */}
      </div>
    </PrefferedTenantWrap>
  );
};

export default PrefferedTenant;
