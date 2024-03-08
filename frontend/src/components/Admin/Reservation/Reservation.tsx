import React, { useEffect, useState } from "react";
import { Box } from "@/globalStyles";
import { Input, Select } from "antd";
import Icon from "@ant-design/icons";
import SearchIcon from "@/assets/images/icons/SearchIconSvg";
import DownArrowIcon from "@/assets/images/icons/DownArrowSvg";
import { ManageListingWrapper } from "../PropertyListing/PropertyListing.styles";
import ManageReservationDataTable from "./ManageReservationDataTable";
import { useDispatch } from "react-redux";
import reservationActions from "@/redux/admin/Reservation/adminReservationListing.action";



const Reservation = () => {
  const dispatch = useDispatch();
  const [reservationSearch, setReservationSearch] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");
  const[status,setStatus]=useState<any>(0)
  const [pageNo, setPageNo] = useState<number>(1);


  useEffect(()=>{
    let values = {
      pageNo: pageNo,
      name: reservationSearch,
      propertyType: propertyType,
      status:status
    };
      dispatch(reservationActions.getReservationList(values))
  },[pageNo,reservationSearch,propertyType,status])
  return (
    <>
      <ManageListingWrapper>
        <Box className="manage-user-box">
          <div className="search-box">
            <Input
              size="large"
              placeholder="Search Host"
              prefix={<Icon component={SearchIcon} />}
              onChange={(e)=>setReservationSearch(e.target.value)}
            />

            <Select
              style={{ width: 182 }}
              onChange={(value)=>setPropertyType(value)}
              placeholder={"Property Type"}
              suffixIcon={<Icon component={DownArrowIcon} />}
              options={[
                { value: "", label: "All" },
                { value: "Aparment", label: "Aparment" },
                { value: "Studio", label: "Studio" },
                { value: "Shared Room", label: "Shared Room" },
                { value: "Private Room", label: "Private Room"},

              ]}
            />

            <Select
              style={{ width: 182 }}
              onChange={(value)=>setStatus(value)}
              placeholder={"Status"}
              suffixIcon={<Icon component={DownArrowIcon} />}
              options={[
                { value: 0, label: "Upcoming" },
                { value: 1, label: "On Going " },
                { value: 2, label: "Completed" },
                { value: 3, label: "Cancelled"},
              ]}
            />
          </div>
          <ManageReservationDataTable
            route={"/admin/reservation/apartment-page"}
            setPageNo={setPageNo}
          />
        </Box>
      </ManageListingWrapper>
    </>
  );
};

export default Reservation;
