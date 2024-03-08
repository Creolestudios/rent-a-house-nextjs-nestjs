import React, { useState } from "react";
import { Box } from "@/globalStyles";
import { Input, Select } from "antd";
import Icon from "@ant-design/icons";
import SearchIcon from "@/assets/images/icons/SearchIconSvg";
import DownArrowIcon from "@/assets/images/icons/DownArrowSvg";
import { ManageListingWrapper } from "../PropertyListing/PropertyListing.styles";
import PaymentHistoryDataTable from "./PaymentHistoryDataTable";

const handleChange = (value: string) => {
  // (`selected ${value}`);
};

const PaymentHistory = () => {
  return (
    <>
      <ManageListingWrapper>
        <Box className="manage-user-box">
          <div className="search-box">
            <Input
              size="large"
              placeholder="Search User"
              prefix={<Icon component={SearchIcon} />}
            />

            <Select
              style={{ width: 182 }}
              onChange={handleChange}
              placeholder={"Payment Type"}
              suffixIcon={<Icon component={DownArrowIcon} />}
              options={[
                { value: "cash", label: "Cash" },
                { value: "card", label: "Card" },
              ]}
            />

            <Select
              style={{ width: 182 }}
              onChange={handleChange}
              placeholder={"Status"}
              suffixIcon={<Icon component={DownArrowIcon} />}
              options={[
                { value: "open", label: "Open" },
                { value: "close", label: "Close" },
              ]}
            />
          </div>
          <PaymentHistoryDataTable
            route={"/admin/reservation/apartment-page"}
          />
        </Box>
      </ManageListingWrapper>
    </>
  );
};

export default PaymentHistory;
