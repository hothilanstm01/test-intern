import { Avatar, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import departmentApi from "../../../api/departmentApi";
import positionApi from "../../../api/positionApi";

const ListEmp = (props) => {
  const { data } = props;
  const [positionData, setpositionData] = useState([]);
  const [departmentData, setdepartmentData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await positionApi.GetPosition();
      setpositionData(res);
    };
    fetchData();
    const fetchDepartment = async () => {
      const res = await departmentApi.GetDepartment();
      setdepartmentData(res);
    };
    fetchDepartment();
  }, []);
  const columns = [
    {
      title: "Image",
      dataIndex: "avatar",
      key: "avatar",
      render: (record) => {
        return (
          <Avatar
            className="avatar"
            src={record}
            alt="Han Solo"
            size={{
              xs: 24,
              sm: 32,
              md: 40,
              lg: 64,
              xl: 60,
              xxl: 100,
            }}
          />
        );
      },
    },
    {
      title: "Name",
      key: "name",
      render: (record) => {
        return (
          <>
            <Link to={`/detail/${record.id}`}>{record.name}</Link>
          </>
        );
      },
    },
    {
      title: "Employess ID",
      dataIndex: "userID",
      key: "userID",
    },
    {
      title: "Position",
      key: "position",
      render: (record) => {
        return (
          <>
            {/* {positionData?positionData.find((item) => (item.id === record.position)).name: null} */}
          </>
        );
      },
    },
    {
      title: "Department",
      key: "department",
      render: (record) => {
        return (
          <>
            {/* {departmentData
              ? departmentData.find((item) => item.id === record.department)
                  .name
              : null} */}
          </>
        );
      },
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default ListEmp;
