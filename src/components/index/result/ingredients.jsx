import React from "react";

function Ingredients() {
  return (
    <div>
      <h4 className="content_header ml-2">Ingredients</h4>
      <div className="d-flex justify-content-around align-items-center ">
        <img
          src="https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          alt=""
          className="img-thumbnail"
          style={{ height: "40px", width: "70px" }}
        />
        <div>
          <h6 className="content_body">measure : 1/2 cup olive oil</h6>
          <h6 className="content_body">cat: oils</h6>
          <hr />
        </div>
      </div>
      <div className="d-flex justify-content-around align-items-center ">
        <img
          src="https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          alt=""
          className="img-thumbnail"
          style={{ height: "40px", width: "70px" }}
        />
        <div>
          <h6 className="content_body">measure : 1/2 cup olive oil</h6>
          <h6 className="content_body">cat: oils</h6>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
