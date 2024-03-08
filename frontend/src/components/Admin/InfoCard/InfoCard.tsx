import React from "react";
import { InfoCardWrapper } from "../Dashboard/Dashboard.styles";
import Icon from "@ant-design/icons";
import HighRateSvg from "@/assets/images/icons/HighRateSvg";
import FilterSvg from "@/assets/images/icons/FilterSvg";

export interface Iprops {
  title?: string;
  user?: number | string;
  property?: number | string;
  revenue?: number | string;
  userRegistration?: number | string;
  listing?: number | string;
  earning?: number | string;
  high?: number | string;
  icon?: boolean | any;
  color?: string;
  value?: string
  key?: number
}

const DashboardInfoCard = ({
  title,
  value,
  key,
  color,
  icon
}: Iprops) => {

  return (
    <InfoCardWrapper style={{ borderColor: color }}>
      <div key={key}>
        <span className="title">{title}</span>
        {icon && (
          <span className="icon">
            <Icon component={FilterSvg} />
          </span>
        )}
      </div>
      <div>
        <span className="numbers">{value}</span>
      </div>
    </InfoCardWrapper>
  );
};

export default DashboardInfoCard;
