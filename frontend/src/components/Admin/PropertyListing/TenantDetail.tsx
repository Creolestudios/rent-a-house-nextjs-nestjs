import { Box, CustomButton } from "@/globalStyles";
import { fontFamily, color } from "@/styles/variable";
import React, { useEffect } from "react";
import Title from "../Title/Title";
import { TenantDetailWrapper } from "./PropertyListing.styles";
import ViewDetail from "./ViewDetail";
import { useDispatch } from "react-redux";
import actions from "@/redux/admin/propertyListing/adminPropertyListing.action";
import { useRouter } from "next/router";

const TenantDetail = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    let id: number = parseInt(router.asPath.split("?")[1]);
    dispatch(actions.getTenantDetails({ id }));
  }, []);

  return (
    <TenantDetailWrapper>
      <Title
        className="title-wrapper"
        title="Tenancy Details"
        fontFamily={`${fontFamily.demiBold}`}
        color={`${color.blackColor}`}
      ></Title>

      <Box className="box">
        <ViewDetail />
      </Box>
    </TenantDetailWrapper>
  );
};

export default TenantDetail;
