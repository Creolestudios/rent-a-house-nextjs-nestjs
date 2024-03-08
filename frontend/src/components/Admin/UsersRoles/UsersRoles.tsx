import React, { useEffect, useState } from "react";
import { Box } from "@/globalStyles";
import { Input } from "antd";
import Icon from "@ant-design/icons";
import SearchIcon from "@/assets/images/icons/SearchIconSvg";
import { ManageUserRolesWrapper } from "./UsersRoles.styles";
import UserDataTable from "../UserRoleDataTable/UserRoleDataTable";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import actions from "@/redux/admin/adminListing/adminListing.action";
import { RootState } from "@/redux/store/rootReducer";

const ManageUserRoles = () => {
  const adminListdata = useSelector(
    (state: RootState) => state.adminListingReducer.data
  );
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [searchInput, setSearchInput] = useState<string>("");

  const handleUserSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    let values = {
      pageNo: pageNumber,
      adminSearch: searchInput,
    };
    dispatch(actions.getAdminsList(values));
  }, [searchInput]);

  return (
    <ManageUserRolesWrapper>
      <Box className="manage-user-box">
        <div className="search-box">
          <Input
            size="large"
            placeholder="Search user name"
            prefix={<Icon component={SearchIcon} />}
            onChange={handleUserSearch}
            value={searchInput}
          />
        </div>
        <UserDataTable
          adminListdata={adminListdata}
          setPageNumber={setPageNumber}
        />
      </Box>
    </ManageUserRolesWrapper>
  );
};

export default ManageUserRoles;
