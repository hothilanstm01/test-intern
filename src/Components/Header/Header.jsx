import React from "react";
import { Select } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Option } = Select;
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerLeft">
          <div className="headerLeftIcon">
            <MenuOutlined />
          </div>
          <div className="headerLeftTitle">PENSKE</div>
        </div>
        <div className="headerInnter">
          <Select defaultValue="nsm" style={{ width: 220 }} bordered={false}>
            <Option value="nsm">North Star Motors</Option>
            <Option value="lucy">Lucky</Option>
          </Select>
        </div>
        <div className="headerRight">
          <div className="avatar">JV</div>
          <div className="nameUser">
            <Select defaultValue="name" style={{ width: 130 }} bordered={false}>
              <Option value="name">Jean Valjean</Option>
              <Option value="lucy">Logout</Option>
            </Select>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
