import React, { useEffect, useState } from "react";
import { FilterFilled, MoreOutlined } from "@ant-design/icons";
import ListEmp from "./Components/ListEmp";
import employeesApi from "../../api/employeesApi";
import { Dropdown, Menu, Select } from "antd";
import { Link } from "react-router-dom";
import AddEmploy from "./Components/AddEmploy";
import {CSVLink} from "react-csv";
const { Option } = Select;
const Employees = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await employeesApi.GetEmployees();
      setdata(res);
    };
    fetchData();
  }, []);
  console.log(data);
 const headers = [
   {label: 'Full name', key: 'name'},
   {label: 'Image', key: 'avatar'},
   {label: 'Employee ID', key: 'userID'},
   {label: 'Email', key: 'email'},
 ];
 const csvReport = {
   filename: 'Employees.csv',
   headers: headers,
   data: data
 }
 console.log(csvReport);
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="https://www.antgroup.com">Select Columns</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <CSVLink {...csvReport}>Download Employees</CSVLink>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="https://www.aliyun.com">Import Employees</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="https://www.aliyun.com">Delete Employees</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
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
      <div className="content">
        <div className="ListEmploy">
          <ListEmp data={data} />
        </div>
      </div>
      <div className="Add">
        <AddEmploy />
      </div>
    </>
  );
};

export default Employees;
