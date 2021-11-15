import React from "react";

const Tokens = ({ tokens }) => {
  return (
    <div>
      <center>
        <h1>Welcome to ScantotiP</h1>{" "}
      </center>
      <div className="card"></div>
      <div className="card-body"></div>
      <h5 className="card-title">{tokens.success}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{tokens.createdAt}</h6>
      {/* <h6 className="card-subtitle mb-2 text-muted">{tokens.data.token}</h6> */}
    </div>
  );


};

export default Tokens;
