import React from "react";

const DetailItem = (props) => {
  const { detail, positionData, departmentData } = props;
  console.log(positionData);
  console.log(departmentData);
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

            <input type="text" value={detail.department} />
          </div>
          <div className="boxItem">
            <input type="text" value={detail.lastname} />
          </div>
          <div className="boxItem">
            <input type="text" value={detail.phone} />
          </div>
          <div className="boxItem">
            <label htmlFor="role">Position</label>

            <input type="text" value={detail.position} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
