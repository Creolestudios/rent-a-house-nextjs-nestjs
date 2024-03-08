import React, { useEffect, useState } from "react";
import { Box } from "@/globalStyles";
import { Input, Select } from "antd";
import Icon from "@ant-design/icons";
import SearchIcon from "@/assets/images/icons/SearchIconSvg";
import DownArrowIcon from "@/assets/images/icons/DownArrowSvg";
import { ManageListingWrapper } from "./PropertyListing.styles";
import ManageListingDataTable from "./ManageListingDataTable";
import { useDispatch } from "react-redux";
import actions from "@/redux/admin/propertyListing/adminPropertyListing.action";

const PropertyListing = () => {
  const dispatch = useDispatch();
  const [propertySearch, setPropertySearch] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");
  const [pageNo, setPageNo] = useState<number>(1);

  useEffect(() => {
    let values = {
      pageNo: pageNo,
      propertyName: propertySearch,
      propertyType: propertyType,
    };

    dispatch(actions.getPropertyList(values));
  }, [pageNo, propertySearch, propertyType]);
  return (
    <>
      <ManageListingWrapper>
        <Box className="manage-user-box">
          <div className="search-box">
            <Input
              size="large"
              placeholder="Search property name"
              prefix={<Icon component={SearchIcon} />}
              onChange={(e) => setPropertySearch(e.target.value)}
            />
            <Select
              style={{ width: 182 }}
              onChange={(value) => setPropertyType(value)}
              placeholder={"Property Type"}
              suffixIcon={<Icon component={DownArrowIcon} />}
              options={[
                { value: "", label: "All" },
                { value: "Apartment", label: "Apartment" },
                { value: "Studio", label: "Studio" },
                { value: "Shared Room", label: "Shared Room" },
                { value: "Private Room", label: "Private Room" },
              ]}
            />
          </div>
          <ManageListingDataTable
            route={"/admin/property-listing/property-page"}
            setPageNo={setPageNo}
          />
        </Box>
      </ManageListingWrapper>
    </>
  );
};

export default PropertyListing;
