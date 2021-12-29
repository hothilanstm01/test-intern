import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import employeesApi from "../../api/employeesApi";
import AddEmploy from "../Employees/Components/AddEmploy";
import MenuItem from "../Menu/Menu";
import ListEmp from "./Components/ListEmp";

const Delete = () => {
  const [data, setdata] = useState([]);
  const [demo, setdemo] = useState("");
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      const res = await employeesApi.GetEmployees();
      setdata(res);
    };
    fetchData();
  }, []);
  const handleRemove = (id) => {
    try {
      const fetchRemove = async (data) => {
        try {
          const res = await employeesApi.DelEmployees(data);
          console.log(res);
          if (res.status === 200) {
            Swal.fire("Delete", "Delete Success!", "success").then((result) => {
              if (result.isConfirmed) {
                console.log(1);
                setdemo((pre) => pre + 1);
                history.push({ pathname: "/del" });
              }
            });
          }
           
        } catch (err) {
          console.log(err);
          Swal.fire("...", "Lỗi Rồi", "error").then(
            (result) => {
              if (result.isConfirmed) {
                console.log(1);
                setdemo((pre) => pre + 1);
                history.push({ pathname: "/del" });
              }
            }
          );
        }
      };

      fetchRemove(id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <MenuItem data={data} />
      <div className="content">
        <div className="ListEmploy">
          <ListEmp data={data} handleRemove={handleRemove}/>
        </div>
      </div>
      <div className="Add">
        <AddEmploy />
      </div>
    </>
  );
};

export default Delete;
