import React from "react";

function Ingredients({ data }) {
  return (
    <div className="ml-2">
      <h4 className="content_header">Ingredients</h4>

      {data.map((item) => (
        <h6 className="content_body">measure : {item}</h6>
      ))}
    </div>
  );
}

export default Ingredients;
