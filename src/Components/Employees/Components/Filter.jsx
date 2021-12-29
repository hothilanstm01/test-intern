import React, { useEffect, useState } from "react";
import { Select } from "antd";
import employeesApi from "../../../api/employeesApi";
import AddEmploy from "./AddEmploy";
import ListEmp from "./ListEmp";
import departmentApi from "../../../api/departmentApi";
import MenuItem from "../../Menu/Menu";
import positionApi from "../../../api/positionApi";
const { Option } = Select;
const Filter = () => {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");
  const [output, setoutput] = useState([]);
  const [departmentData, setdepartmentData] = useState([]);
  const [position, setposition] = useState([]);
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

    const fetchPosition = async () => {
      const res = await positionApi.GetPosition();
      setposition(res);
    };
    fetchPosition();
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
  const handleChangeSearch = (value) => {
    console.log(value);
    const values = data.filter((item) => item.name === value);
    setoutput(values);
  };
  const handleChangeDepartment = (value) => {
    console.log(value);
    const values = data.filter((item) => item.department === value);
    setoutput(values);
  };
  const handleChangePosition = (value) => {
    console.log(value);
    const values = data.filter((item) => item.position === value);
    setoutput(values);
  };

  return (
    <>
      <MenuItem data={data} />
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
              <label>Position</label>
              <Select
                // defaultValue="choice"
                style={{ width: 190 }}
                bordered={false}
                onChange={handleChangePosition}
                placeholder="Choice"
              >
                {position.map((item, index) => (
                  <Option value={item.name} key={index}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </div>
            <div className="boxItem">
              <label>Department</label>
              <Select
                // defaultValue={departmentData.id}
                style={{ width: 190 }}
                bordered={false}
                onChange={handleChangeDepartment}
                placeholder="Choice"
              >
                {departmentData.map((item, index) => (
                  <Option value={item.name} key={index}>
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
