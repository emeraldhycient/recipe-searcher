import React from "react";

function Head({ img, label, url }) {
  return (
    <div className="card">
      <div className="row">
        <div className="col-md-4">
          <img
            src={img}
            alt=""
            style={{ height: "100px", width: "100%" }}
            className="rounded"
          />
        </div>
        <div className="col-md-7">
          <div className="title d-flex align-items-center pt-3 ">
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              Name :
            </h4>
            <h5
              style={{
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "10px",
                marginLeft: "5px",
              }}
            >
              {label}
            </h5>
          </div>
          <div className="title d-flex align-items-center">
            <h4
              style={{
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "10px",
              }}
            >
              Calories :
            </h4>
            <h5
              style={{
                fontSize: "13px",
                fontWeight: "500",
                marginBottom: "10px",
                marginLeft: "5px",
              }}
            >
              3033.2012500008163
            </h5>
          </div>
          <div className="title d-flex align-items-center">
            <h4
              style={{
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "10px",
              }}
            >
              cuisineType :
            </h4>
            <h5
              style={{
                fontSize: "13px",
                fontWeight: "500",
                marginBottom: "10px",
                marginLeft: "5px",
              }}
            >
              central europe
            </h5>
          </div>
        </div>
        <div className="col-md-1 sharable">
          <h6
            onClick={() => {
              navigator.clipboard
                .writeText(`${url}`)
                .then(() => {
                  alert("successfully copied");
                })
                .catch(() => {
                  alert("something went wrong");
                });
            }}
          >
            <i className="fa fa-copy" style={{ color: "#563d7c" }}></i>
          </h6>
          <h6
            onClick={() => {
              if (navigator.share) {
                navigator
                  .share({
                    title: "WebShare API Demo",
                    url: "https://codepen.io/ayoisaiah/pen/YbNazJ",
                  })
                  .then(() => {
                    alert("Thanks for sharing!");
                  })
                  .catch(console.error);
              } else {
                alert("browser doesnt support sharing directly");
              }
            }}
          >
            <i className="fa fa-share" style={{ color: "#563d7c" }}></i>
          </h6>
          <h6>
            <a href={url} target="_blank">
              <i className="fa fa-link" style={{ color: "#563d7c" }}></i>
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Head;
