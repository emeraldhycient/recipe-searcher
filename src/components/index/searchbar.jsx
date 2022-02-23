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
        <h4
          style={{
            fontSize: "16px",
            fontWeight: "600",
            marginBottom: "10px",
            marginTop: "20px",
          }}
        >
          Your Results <i className="fa fa-arrow-down mr-2"></i>
        </h4>
        <DisplayResult data="" />
      </div>
    </section>
  );
}

export default Searchbar;
