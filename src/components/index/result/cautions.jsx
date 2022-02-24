import React from "react";

function Cautions({ data }) {
  return (
    <div className="ml-2">
      <h4 className="content_header">Cautions</h4>
      <div className="d-flex">
        {data.map((item) => (
          <span className="badge badge-info mr-1 my-1">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default Cautions;
