import { Avatar } from "antd";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import employeesApi from "../../api/employeesApi";

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
                            xl: 100,
                            xxl: 100,
                          }}
                        />
                      </div>
                      <div className="changeAvt">+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="detailInfo"></div>
              <div className="credentials"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detal;
