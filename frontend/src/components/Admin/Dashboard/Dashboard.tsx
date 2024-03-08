import React, { useEffect } from "react";
import DashboardInfoCard from "../InfoCard/InfoCard";
import { DashboardWrapper, InfoCard } from "./Dashboard.styles";
import DashboardChart from "../DashboardChart/DashboardChart";
import { useDispatch, useSelector } from "react-redux";
import actions from "@/redux/admin/dashboard/dashboard.action";
import { color } from "@/styles/variable";
import { RootState } from "@/redux/store/rootReducer";

interface DashboardArray {
  name: string;
  value: string;
}

const Dashboard = () => {
  const dashboardData = useSelector(
    (state: RootState) => state.dashboardReducer.dashboardData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let value = {
      year: new Date().getFullYear(),
    };
    dispatch(actions.getDashboardData(value));
  }, []);
  useEffect(() => {}, [dashboardData]);

  return (
    <DashboardWrapper>
      <InfoCard>
        {dashboardData.otherData &&
          dashboardData.otherData.map((el: DashboardArray, ky: number) => (
            <DashboardInfoCard
              title={el.name}
              value={el.value}
              key={ky}
              color={color.secondaryColor}
              icon={false}
            />
          ))}
      </InfoCard>
      <DashboardChart
        totalUser={dashboardData.totalUserYear}
        dashboardChartData={dashboardData.monthWiseUser}
        chartyear={dashboardData.avalibleYears}
      />
    </DashboardWrapper>
  );
};

export default Dashboard;
