import React, { useEffect, useState } from "react";
import { Box } from "@/globalStyles";
import { Input, Select } from "antd";
import Icon from "@ant-design/icons";
import SearchIcon from "@/assets/images/icons/SearchIconSvg";
import DownArrowIcon from "@/assets/images/icons/DownArrowSvg";
import { ManageListingWrapper } from "./PropertyListing.styles";
import TenantHistoryDataTable from "./TenantHistoryDataTable";
import { useDispatch, useSelector } from "react-redux";
import actions from "@/redux/admin/propertyListing/adminPropertyListing.action";
import { useRouter } from "next/router";
import { RootState } from "@/redux/store/rootReducer";

const TenantHistory = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const tenantList = useSelector(
    (state: RootState) => state.adminPropertyListingReducer.tenantHistory
  );
  const [searchTenant, setSearchTenant] = useState<string>("");
  const [pageNo, setPageNo] = useState<number>(1);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    let values = {
      searchTenant: searchTenant,
      pageNo: pageNo,
      status: status,
      propertyId: parseInt(router.asPath.split("?")[1]),
    };

    dispatch(actions.getTenantList(values));
  }, [status, searchTenant, pageNo]);
  return (
    <>
      <ManageListingWrapper>
        <Box className="manage-user-box">
          <div className="search-box">
            <Input
              size="large"
              placeholder="Search Tenants"
              prefix={<Icon component={SearchIcon} />}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTenant(e.target.value)
              }
            />
            <Select
              style={{ width: 182 }}
              onChange={(value) => setStatus(value)}
              placeholder={"Status"}
              suffixIcon={<Icon component={DownArrowIcon} />}
              options={[
                { value: "", label: "All" },
                { value: "0", label: "Inquiry" },
                { value: "1", label: "Pending" },
                { value: "2", label: "Request" },
                { value: "3", label: "Accept" },
                { value: "4", label: "Confirm" },
                { value: "5", label: "Reject" },
              ]}
            />
          </div>
          <TenantHistoryDataTable
            route={
              "/admin/property-listing/property-page/tenant-history/tenant-name"
            }
            setPageNo={setPageNo}
            tenantList={tenantList}
          />
        </Box>
      </ManageListingWrapper>
    </>
  );
};

export default TenantHistory;
