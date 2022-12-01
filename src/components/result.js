import React from "react";

const Result = ({ conversionData, totalAmount, from, to }) => {
  return (
    <div className="row border rounded-3 p-3 mt-3" style={{ width: "450px" }}>
      <div className="row">
        <h2 className="col">Result:</h2>
        <h2 className="col">
          {Math.round(conversionData.conversion_rate * totalAmount, 6)} {to}
        </h2>
      </div>
      <div className="row">
        <p className="col">Exchange rate: </p>
        <p className="col">
          1 {from} = {conversionData.conversion_rate} {to}
        </p>
      </div>
    </div>
  );
};

export default Result;
