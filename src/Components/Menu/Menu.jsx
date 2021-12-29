import React from 'react'
import { Link } from 'react-router-dom'
import { FilterFilled, MoreOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from 'antd';
import { CSVLink } from "react-csv";


const MenuItem = (props) => {
    const {data} = props
    const headers = [
        { label: "Full name", key: "name" },
        { label: "Image", key: "avatar" },
        { label: "Employee ID", key: "userID" },
        { label: "Position", key: "position" },
        { label: "Department", key: "department" },
        { label: "Email", key: "email" },
      ];
      const csvReport = {
        filename: "Employees.csv",
        headers: headers,
        data: data,
      };
      console.log(csvReport);
    const menu = (
        <Menu>
          <Menu.Item key="0">
            <div>Select Columns</div>
          </Menu.Item>
          <Menu.Item key="1">
            <CSVLink {...csvReport}>Download Employees</CSVLink>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="https://www.aliyun.com">Import Employees</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/del">Delete Employees</Link>
          </Menu.Item>
        </Menu>
      );
    return (
        <div className="menu">
        <div className="menuLeft">
          <div className="logo">
            <Link to="/">Employees</Link>
          </div>
          <div className="total">{data ? data.length : null} Employees</div>
        </div>
        <div className="menuRight">
          <div className="filter">
            <Link to="/filter">
              <FilterFilled />
            </Link>
          </div>
          <div className="menuList">
            <Dropdown overlay={menu} placement="bottomLeft" arrow>
              <MoreOutlined />
            </Dropdown>
          </div>
        </div>
      </div>
    )
}

export default MenuItem
