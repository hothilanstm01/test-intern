import { Avatar, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import employeesApi from "../../api/employeesApi";
import { Bar } from "react-chartjs-2";

const Detal = () => {
  const match = useRouteMatch();
  const [detail, setdetail] = useState({});

  useEffect(() => {
    const id = match.params.id;
    const fetchData = async () => {
      const res = await employeesApi.GetEmployeesID(id);
      setdetail(res);
    };
    fetchData();
  }, []);
  console.log(detail);
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
          <div className="logo">Employees</div>
        </div>
      </div>
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
                            xs: 24,
                            sm: 32,
                            md: 40,
                            lg: 64,
                            xl: 130,
                            xxl: 100,
                          }}
                        />
                      </div>
                      <div className="changeAvt">+</div>
                    </div>
                    <div className="chart">
                      {/* <Bar
                        data={{
                          labels: [
                            "Red",
                            "Blue",
                            "Yellow",
                            "Green",
                            "Purple",
                            "Orange",
                          ],
                          datasets: [
                            {
                              label: "# of Votes",
                              data: [12, 19, 3, 5, 2, 3],
                              backgroundColor: "blue",

                              borderWidth: 1,
                            },
                          ],
                        }}
                        height={100}
                        width={100}
                      /> */}
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
              <div className="detailInfo">
                <div className="inner">
                  <div className="title">Details</div>
                  <div className="detailInfo_content">
                    <div className="boxItem">
                      <input type="text" value={detail.firtname} />
                    </div>
                    <div className="boxItem">
                      <input type="text" value={detail.email} />
                    </div>
                    <div className="boxItem">
                      <input type="text" value={detail.department} />
                    </div>
                    <div className="boxItem">
                      <input type="text" value={detail.lastname} />
                    </div>
                    <div className="boxItem">
                      <input type="text" value={detail.phone} />
                    </div>
                    <div className="boxItem">
                      <input type="text" value={detail.position} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="credentials">
                <div className="inner">
                  <div className="title">Details</div>
                  <div className="credentials_content">
                    <div className="boxItem">
                      <input type="text" value={detail.firtname} />
                    </div>
                    <div className="boxItem">
                      <input type="text" value={detail.email} />
                    </div>
                    <div className="boxItem">
                      <input type="text" value={detail.department} />
                    </div>
                    <div className="boxItem">
                      <input type="text" value={detail.lastname} />
                    </div>
                    <div className="boxItem">
                      <input type="text" value={detail.phone} />
                    </div>
                    <div className="boxItem">
                      <input type="text" value={detail.position} />
                    </div>
                  </div>
                </div>
              </div>
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
    </>
  );
};

export default Detal;
