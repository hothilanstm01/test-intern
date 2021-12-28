import { Avatar, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import positionApi from "../../../api/positionApi";

const ListEmp = (props) => {
  const { data } = props;
  const [positionData, setpositionData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
        const res = await positionApi.GetPosition();
        setpositionData(res);
      };
      fetchData();
  }, [])

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
      dataIndex: "name",
      key: "name",
      render: (record) => {
        return (
          <>
          <Link to="">{record}</Link>
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
          console.log(record);
        return (
          <>
          {positionData.id === record.position ? positionData.name : ""}
          </>
        );
      },
    },
    {
      title: "Department",
      key: "department",
    //   dataIndex: "department",
      render: (record) => {
        return (
          <>
          {record === positionData.id ? positionData.name : ""}
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
