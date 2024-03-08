import React from "react";
import { ContentHeaderWrapper } from "./ContentHeader.styles";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const ContentHeader = ({ children, setCollapse, collapse }: any) => {
  return (
    <ContentHeaderWrapper>
      <div className="humberger-menu" onClick={() => setCollapse(!collapse)}>
        {!collapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      {children}
    </ContentHeaderWrapper>
  );
};

export default ContentHeader;
