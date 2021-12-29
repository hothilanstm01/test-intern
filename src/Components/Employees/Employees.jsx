import React, { useEffect, useState } from "react";
import ListEmp from "./Components/ListEmp";
import employeesApi from "../../api/employeesApi";
import AddEmploy from "./Components/AddEmploy";
import MenuItem from "../Menu/Menu";

const Employees = () => {
  const [data, setdata] = useState([]);
  const [show, setShow] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      const res = await employeesApi.GetEmployees();
      setdata(res);
    };
    fetchData();

  }, []);

const handleToggle = () => {
  setShow(!show)
}
  return (
    <>
      <MenuItem data={data} onClick={handleToggle}/>
      <div className="content">
        <div className="ListEmploy">
          
          <ListEmp
            data={data}
          />
        </div>
      </div>
      <div className="Add">
        <AddEmploy />
      </div>
    </>
  );
};

export default Employees;
