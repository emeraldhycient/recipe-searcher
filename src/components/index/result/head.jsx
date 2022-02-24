import React from "react";

function Head({ img, label, url, calories, cuisineType }) {
  const handleSharing = async () => {
    if (navigator.share) {
      try {
        await navigator
          .share({
            url,
            title: label,
            text: "shared from recipe searcher",
          })
          .then(() => alert("Hooray! Your content was shared to tha world"));
      } catch (error) {
        alert(`Oops! I couldn't share to the world because: ${error}`);
      }
    } else {
      // fallback code
      alert("Web share is currently not supported on this browser.");
    }
  };

  return (
    <div className="card">
      <div className="row">
        <div className="col-md-4">
          <img src={img} alt="" style={{ height: "100px", width: "100%" }} />
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
              {calories}
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
              {cuisineType}
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
          <h6 onClick={handleSharing}>
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
