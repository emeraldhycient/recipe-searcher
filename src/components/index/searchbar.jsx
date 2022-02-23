import React from "react";
import DisplayResult from "./result/displayResult";

function Searchbar() {
  return (
    <section className="col mt-5">
      <div className="col-md-7 mx-auto">
        <form>
          <div className="card">
            <div className="d-flex">
              <input
                type="text"
                name=""
                id=""
                className="form-control border-0 shadow-none"
                required={true}
              />
              <button type="submit" className="btn btn-light">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </form>
        <div
          style={{
            height: " 100vh",
            overflowY: "auto",
          }}
        >
          <h4 className="content-header">
            Your Results <i className="fa fa-arrow-down mr-2 text-success"></i>
          </h4>
          <DisplayResult data="" />
          <DisplayResult data="" />
          <DisplayResult data="" />
          <DisplayResult data="" />
        </div>
      </div>
    </section>
  );
}

export default Searchbar;
