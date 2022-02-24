import React from "react";

function Healthlabels({ data }) {
  return (
    <div className="ml-2">
      <h4 className="content_header">healthLabels</h4>
      <div className="d-flex flex-wrap">
        {data.map((item) => (
          <span className="badge badge-warning mr-1 my-1">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default Healthlabels;
