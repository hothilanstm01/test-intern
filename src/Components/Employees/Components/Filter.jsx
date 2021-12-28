import React, { useEffect, useState } from "react";
import { FilterFilled, MoreOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Select } from "antd";
import { Link } from "react-router-dom";
import employeesApi from "../../../api/employeesApi";
import AddEmploy from "./AddEmploy";
import ListEmp from "./ListEmp";
const { Option } = Select;
const Filter = () => {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");
  const [output, setoutput] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await employeesApi.GetEmployees();
      setdata(res);
    };
    fetchData();
  }, []);
  console.log(data);
  useEffect(() => {
    setoutput([]);
    data.filter((val) => {
      if (
          val.name.toLowerCase().includes(search.toLowerCase())
        ) {
        setoutput((output) => [...output, val]);
      }
    });
  }, [search]);
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="https://www.antgroup.com">Select Columns</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="https://www.aliyun.com">Download Employees</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="https://www.aliyun.com">Import Employees</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="https://www.aliyun.com">Delete Employees</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="menu">
        <div className="menuLeft">
          <div className="logo">Employees</div>
          <div className="total">{data ? data.length : null} Employees</div>
        </div>
        <div className="menuRight">
          <div className="filter">
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
              <Link to="/filter">
                <FilterFilled />
              </Link>
            </Dropdown>
          </div>
          <div className="menuList">
            <MoreOutlined />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="FormFilter">
          <form action="">
            <div className="title">Filters</div>
            <div className="boxItem">
              <label>Name</label>
              <input
                type="text"
                placeholder="Employees Name"
                onChange={(e) => setsearch(e.target.value)}
              />
            </div>
            <div className="boxItem">
              <label>Employees ID</label>
              <input type="text" placeholder="Employees ID"/>
            </div>
            <div className="boxItem">
              <label>Department</label>
              <Select defaultValue="1" style={{ width: 190 }} bordered={false}>
                <Option value="1">Head Office</Option>
                <Option value="2">Lucky</Option>
              </Select>
            </div>
          </form>
        </div>
        <div className="ListEmployFilter">
          <ListEmp data={output} />
        </div>
      </div>
      <div className="Add">
        <AddEmploy />
      </div>
    </>
  );
};

export default Filter;
