import React, { useEffect, useState } from "react";
import { FilterFilled, MoreOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Select } from "antd";
import { Link } from "react-router-dom";
import employeesApi from "../../../api/employeesApi";
import AddEmploy from "./AddEmploy";
import ListEmp from "./ListEmp";
import departmentApi from "../../../api/departmentApi";
const { Option } = Select;
const Filter = () => {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");
  const [output, setoutput] = useState([]);
  const [departmentData, setdepartmentData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await employeesApi.GetEmployees();
      setdata(res);
    };
    fetchData();
    const fetchDepartment = async () => {
      const res = await departmentApi.GetDepartment();
      setdepartmentData(res);
    };
    fetchDepartment();
  }, []);
  console.log(data);
  useEffect(() => {
    setoutput([]);
    data.filter((val) => {
      if (val.name.toLowerCase().includes(search.toLowerCase())) {
        setoutput((output) => [...output, val]);
      }
    });
  }, [search]);
  const handleChange = (value) => {
    console.log(value);
    setsearch(value)
    filterSearch(value)
    // data.filter((item) => item.department === value);

  }
  const filterSearch = (value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if(!lowerCaseValue) {
      setdata(data)
    }
    else{
      const filterSearchData = data.filter(item => {
        return Object.keys(item).some(key => {
          return item[key].toString().toLowerCase().includes(lowerCaseValue)
        })
      })
      setdata(filterSearchData)
    }
  }
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
          <div className="logo">
            <Link to="/">Employees</Link>
          </div>
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
                value={search}
              />
            </div>
            <div className="boxItem">
              <label>Employees ID</label>
              <input type="text" placeholder="Employees ID" />
            </div>
            <div className="boxItem">
              <label>Department</label>
              <Select
                defaultValue={departmentData.id}
                style={{ width: 190 }}
                bordered={false}
                onChange={handleChange}
              >
                {departmentData.map((item, index) => (
                  <Option value={item.id} key={index}>
                    {item.name}
                  </Option>
                ))}
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
