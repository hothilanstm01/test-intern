import React from 'react'

const Credentials = (props) => {
    const {detail} = props
    return (
        <div className="credentials">
        <div className="inner">
          <div className="title">Credentials</div>
          <div className="txt">
              <h2>Portal and CheckMate</h2>
              <h2>CheckRite Application</h2>
          </div>
          <div className="credentials_content">
            <div className="boxItem">
                <label htmlFor="username">Username</label>
              <input type="text" value={detail.firtname} />
            </div>
            <div className="boxItem">
                <label htmlFor="role">Role</label>

              <input type="text" value="Demo User" />
            </div>
            <div className="boxItem">
            <label htmlFor="employid">Employee ID</label>

              <input type="text" value={detail.userID}/>
            </div>
            <div className="boxItem">
            <label htmlFor="password">Password</label>

              <input type="password" value="1234567"/>
            </div>
            <div className="boxItem">
            <label htmlFor="site">Site Access</label>

              <input type="text" value="Four Sites" />
            </div>
            <div className="boxItem">
            <label htmlFor="pin">Pin</label>

              <input type="password" value="1234" />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Credentials
