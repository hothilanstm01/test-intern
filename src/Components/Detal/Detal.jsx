import { Avatar, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import employeesApi from "../../api/employeesApi";
import { Bar } from "react-chartjs-2";
import { LoadingOutlined } from "@ant-design/icons";
import DetailItem from "./Components/DetailItem";
import Credentials from "./Components/Credentials";

const Detal = () => {
  const match = useRouteMatch();
  const [detail, setdetail] = useState({});
  useEffect(() => {
    const id = match.params.id;
    const fetchData = async () => {
      const res = await employeesApi.GetEmployeesID(id);
      setdetail(res);
    };
    fetchData(id);
  }, []);
  const dataSource = [
    {
      key: "1",
      name: "PN322",
      age: "Control Demo V2",
      address: "10 Downing Street",
      second: "10s",
    },
    {
      key: "2",
      name: "PN344",
      age: "Control Demo V2",
      address: "10 Downing Street",
      second: "10s",
    },
    {
      key: "3",
      name: "PN322",
      age: "Control Demo V2",
      address: "10 Downing Street",
      second: "10s",
    },
    {
      key: "4",
      name: "PN344",
      age: "Control Demo V2",
      address: "10 Downing Street",
      second: "10s",
    },
    {
      key: "5",
      name: "PN322",
      age: "Control Demo V2",
      address: "10 Downing Street",
      second: "10s",
    },
    {
      key: "6",
      name: "PN344",
      age: "Control Demo V2",
      address: "10 Downing Street",
      second: "10s",
    },
    {
      key: "7",
      name: "PN322",
      age: "Control Demo V2",
      address: "10 Downing Street",
      second: "10s",
    },
    {
      key: "8",
      name: "PN344",
      age: "Control Demo V2",
      address: "10 Downing Street",
      second: "10s",
    },
  ];
  const columns = [
    {
      title: "#",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Checklist",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Date",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Duaration",
      dataIndex: "second",
      key: "second",
    },
  ];
  return (
    <>
      <div className="menu">
        <div className="menuLeft">
          <div className="logo">
            <Link to="/">Employees</Link>
          </div>
        </div>
      </div>
      {detail ? (
        <div className="contentDetail">
          <div className="layout">
            <div className="detailTop">
              <div className="item">
                <div className="inner">
                  <div className="title">{detail.name}</div>
                  <div className="content">
                    <div className="contentTop">
                      <div className="avatar">
                        <div className="txt">Employees Image</div>
                        <div className="avt">
                          <Avatar
                            className="avatarImage"
                            src={detail.avatar}
                            alt="Han Solo"
                            size={{
                              xs: 70,
                              sm: 100,
                              md: 130,
                              lg: 130,
                              xl: 130,
                              xxl: 130,
                            }}
                          />
                        </div>
                        <div className="changeAvt">+</div>
                      </div>
                      <div className="chart">
                        <div className="chart_text">Inspections Completed</div>
                        <Bar
                          data={{
                            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                            datasets: [
                              {
                                label: "# of Votes",
                                data: [12, 19, 3, 5, 2, 3],
                                backgroundColor: "blue",

                                borderWidth: 1,
                              },
                            ],
                          }}
                          className="chartBar"
                        />
                      </div>
                    </div>
                    <div className="contentBottom">
                      <div className="box">
                        <div className="txt">Total Inspections</div>
                        <div className="itemtxt">230</div>
                      </div>
                      <div className="box">
                        <div className="txt">Open Issues</div>
                        <div className="itemtxt">4</div>
                      </div>
                      <div className="box">
                        <div className="txt">Last Login</div>
                        <div className="itemtxt">24/12/2017</div>
                      </div>
                      <div className="box">
                        <div className="txt">Sites</div>
                        <div className="itemtxt">4</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <DetailItem detail={detail} />
                <Credentials detail={detail} />
              </div>
            </div>
            <div className="detailBottom">
              <div className="inner">
                <div className="title">Employee Inspections</div>
                <div className="ItemContent">
                  <div className="tabs">
                    <button className="tabItem active">Inspections</button>
                    <button className="tabItem">Issues</button>
                  </div>
                  <div className="lst">
                    <Table dataSource={dataSource} columns={columns} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoadingOutlined />
      )}
    </>
  );
};

export default Detal;
