import React, { useEffect, useState } from "react";
import { Box } from "@/globalStyles";
import { Input } from "antd";
import Icon from "@ant-design/icons";
import SearchIcon from "@/assets/images/icons/SearchIconSvg";
import { ManageUserRolesWrapper } from "../UsersRoles/UsersRoles.styles";
import UserDataTable from "../UserRoleDataTable/UserDataTable";
import { useDispatch } from "react-redux";
import actions from "@/redux/admin/userListing/userListing.action";

const SystemUsers = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [searchInput, setSearchInput] = useState<string>("");

  const dispatch = useDispatch();

  const handleUserSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const getUsersList = () => {
    let values = {
      pageNo: pageNumber,
      userSearch: searchInput,
    };
    dispatch(actions.getUsersList(values));
  };

  useEffect(() => {
    getUsersList();
  }, [searchInput, pageNumber]);

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
        <UserDataTable setPageNumber={setPageNumber} />
      </Box>
    </ManageUserRolesWrapper>
  );
};

export default SystemUsers;
