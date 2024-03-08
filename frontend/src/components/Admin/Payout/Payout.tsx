import React, { FC, useState } from "react";
import { Box, CustomButton } from "@/globalStyles";
import { Input, Select } from "antd";
import Icon from "@ant-design/icons";
import SearchIcon from "@/assets/images/icons/SearchIconSvg";
import DownArrowIcon from "@/assets/images/icons/DownArrowSvg";
import { ManagePayoutWrapper } from "./Payout.styles";
import ManagePayoutDataTable from "./ManagePayoutDataTable";
import ManagePayoutHistoryDataTable from "./ManagePayoutHistoryDataTable";

const Payout: FC = () => {
  const [btnList, setbtnList] = useState<string[]>(["payout", "history"]);
  const [activeBtnName, setActiveBtnName] = useState<string>("payout");

  const handleClick = (name: string) => {
    btnList.map((el: string) => {
      if (el === name) {
        setActiveBtnName(name);
      }
    });
  };

  const renderComp = () => {
    switch (activeBtnName) {
      case "payout":
        return <ManagePayoutDataTable route={"/admin/payout/payout-detail"} />;
      case "history":
        return (
          <ManagePayoutHistoryDataTable route={"/admin/payout/payout-detail"} />
        );

      default:
        return "";
    }
  };

  return (
    <>
      <ManagePayoutWrapper>
        <Box className="manage-user-box">
          <Box className="box-bg">
            <div className="btn-wrapper">
              <CustomButton
                className={activeBtnName === "payout" ? "fill" : ""}
                onClick={() => handleClick("payout")}
              >
                Open Payout
              </CustomButton>
              <CustomButton
                onClick={() => handleClick("history")}
                className={activeBtnName === "history" ? "fill" : ""}
              >
                History
              </CustomButton>
            </div>
          </Box>
          <div className="search-box">
            <Input
              size="large"
              placeholder="Search Status"
              prefix={<Icon component={SearchIcon} />}
            />

            <Select
              style={{ width: 182 }}
              // onChange={handleChange}
              placeholder={"Status"}
              suffixIcon={<Icon component={DownArrowIcon} />}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </div>
          {renderComp()}
        </Box>
      </ManagePayoutWrapper>
    </>
  );
};

export default Payout;
