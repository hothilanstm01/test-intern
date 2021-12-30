import React, { useEffect, useState } from "react";
import employeesApi from "../../api/employeesApi";
import AddEmploy from "../Employees/Components/AddEmploy";
import MenuItem from "../Menu/Menu";
import ListEmp from "./Components/ListEmp";


const SelectTemp = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await employeesApi.GetEmployees();
      setdata(res);
    };
    fetchData();
  }, []);
  return (
    <>
      <MenuItem data={data} />
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

export default SelectTemp;
