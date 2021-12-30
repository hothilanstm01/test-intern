import { Avatar, Button, Checkbox, Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const ListEmp = (props) => {
  const { data } = props;

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
      dataIndex: "position",
    },
    {
      title: "Department",
      key: "department",
      dataIndex: "department",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Checkbox",
      key: "checkbox",
      render: (record) => (
        <Checkbox/>
      ),
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default ListEmp;
