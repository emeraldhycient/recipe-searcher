import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        Recipe Searcher
      </a>
    </nav>
  );
}

export default Header;
