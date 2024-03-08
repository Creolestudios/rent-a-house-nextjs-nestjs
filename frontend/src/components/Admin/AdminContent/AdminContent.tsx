import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { AdminContentWrapper, Content } from "./AdminContent.styles";

const AdminContent = ({ children, collapse, setCollapse }: any) => {
  const [sidebarWidth, setSidebarWidth] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>();
  const handlesidebarWidth = () => {
    setSidebarWidth(document.querySelector(".sidebar")?.clientWidth);
  };

  const handleScroll = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth < 992) {
      setCollapse(false);
    } else {
      setCollapse(true);
    }
  };

  useEffect(() => {
    setSidebarWidth(document.querySelector(".sidebar")?.clientWidth);
  }, [collapse]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("load", handleScroll);
    window.addEventListener("resize", handleScroll);
  }, []);

  return (
    <AdminContentWrapper>
      <Header />
      <div className="content-wrapper">
        <Sidebar setCollapse={setCollapse} collapse={collapse} />
        <Content
          className="content"
          //@ts-ignore
          windowWidth={windowWidth}
          sidebarWidth={sidebarWidth}
          collapse={collapse}
        >
          {children}
        </Content>
      </div>
    </AdminContentWrapper>
  );
};

export default AdminContent;
