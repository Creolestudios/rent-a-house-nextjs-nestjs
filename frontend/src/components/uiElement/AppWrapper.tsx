import SpinCustom from "@/components/uiElement/spinCustom";
import React, { FC } from "react";
import { useSelector } from "react-redux";

const SpinCustomWrapper: FC<{ children: any }> = ({ children }) => {
  const globalLoader = useSelector(
    (state: any) => state.appReducer.globalLoader
  );

  return <SpinCustom spinning={globalLoader > 0}>{children}</SpinCustom>;
};

export default SpinCustomWrapper;
