import React from "react";

const Payment = ({ payment }) => {
  return (
    <div>
      <center>
        <h1>Payment Info</h1>{" "}
      </center>
      <div className="card"></div>
      <div className="card-body"></div>
      <h5 className="card-title">{payment.success}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{payment.data}</h6>
      {/* <h6 className="card-subtitle mb-2 text-muted">{tokens.data.token}</h6> */}
    </div>
  );


};

export default Payment;
