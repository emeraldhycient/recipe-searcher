import React, { useState } from "react";
import axios from "axios";
import DisplayResult from "./result/displayResult";

function Searchbar() {
  const [query, setquery] = useState();
  const [recipes, setrecipes] = useState([]);

  const [loadin, setloadin] = useState(false);

  const toggleLoading = () => {
    setloadin((prev) => !prev);
  };

  const SearchResult = (e) => {
    e.preventDefault();

    toggleLoading();

    let options = {
      method: "GET",
      url: "https://edamam-recipe-search.p.rapidapi.com/search",
      params: { q: `${query}` },
      headers: {
        "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
        "x-rapidapi-key": "f208687e5bmsh09d7ae5b67c7385p12eee7jsnb6715d041e02",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setrecipes(response.data.hits);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setTimeout(() => toggleLoading(), 200));
  };

  return (
    <section className="col mt-5">
      <div className="col-md-7 col-12 mx-auto">
        <form onSubmit={SearchResult}>
          <div className="card">
            <div className="d-flex">
              <input
                type="text"
                value={query}
                onChange={(e) => setquery(e.target.value)}
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
            width: "100%",
            height: " 100vh",
            overflowY: "auto",
          }}
        >
          <h4 className="content_header">
            Your Results
            <i className="fa fa-arrow-down mr-2 text-success"></i>
          </h4>
          {loadin ? (
            <div className="spinner-border text-success m-2" role="status">
              <span className="text-info">Loading...</span>
            </div>
          ) : recipes.length > 0 ? (
            recipes.map((recipe, index) => (
              <DisplayResult data={recipe} key={index} />
            ))
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}

export default Searchbar;
