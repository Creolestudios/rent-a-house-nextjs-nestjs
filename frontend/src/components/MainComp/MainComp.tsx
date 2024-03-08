import { useRouter } from "next/router";
import React, {useState} from "react";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const MainComp = ({ children }: any) => {
  const { propertyHostActive, inquiryStep } = useSelector(
    (state: any) => state.appReducer
  );

  const router = useRouter();

  return (
    <>
      <Header />
      {children}
      {(inquiryStep === 0 && router.pathname === "/home/inquiry-request") ||
      router.pathname === "/home/property-host" ||
      router.pathname === "/home/property-edit" || router.pathname === "/home/listed-properties" || router.pathname === "/home/manage-listing" ? (
        ""
      ) : (
        <Footer />
      )}
    </>
  );
};

export default MainComp;
