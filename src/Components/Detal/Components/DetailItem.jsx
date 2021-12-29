import React, { useEffect, useState } from "react";
import departmentApi from "../../../api/departmentApi";
import positionApi from "../../../api/positionApi";

const DetailItem = (props) => {
  const { detail } = props;
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
  console.log(positionData);
  return (
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
            <label htmlFor="role">Role</label>

            <input
              type="text"
              // value={
              //   departmentData.find((item) => item.id === detail.department)
              //     .name
              // }
            />
          </div>
          <div className="boxItem">
            <input type="text" value={detail.lastname} />
          </div>
          <div className="boxItem">
            <input type="text" value={detail.phone} />
          </div>
          <div className="boxItem">
            <label htmlFor="role">Position</label>

            <input
              type="text"
              // value={
              //   positionData.find((item) => item.id === detail.position).name
              // }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
