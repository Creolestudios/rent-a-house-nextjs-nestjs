import React, { ReactNode } from "react";
import { Spin } from "antd";
import Loader from "./Loader";

const SpinCustom = (props: {
  fontSize?: string;
  children: ReactNode;
  spinning: boolean;
}) => <Spin indicator={<Loader />} {...props} />;

export default SpinCustom;
