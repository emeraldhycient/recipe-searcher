import React from "react";

function Sidebar() {
  return (
    <section id="sidebar_container" className="bg-light">
      <ul id="sidebar">
        <li>
          <i className="fa fa-pen"></i>
          <a href="/">Search Recipe</a>
        </li>
        <li>
          <i className="fa fa-image"></i>
          <a href="/by-img">Search Recipe(img)</a>
        </li>
        <li>
          <i className="fa fa-link"></i>
          <a href="/by-url">Search Recipe(url)</a>
        </li>
        <li>
          <i className="fa fa-video"></i>
          <a href="/video">Search Video</a>
        </li>
      </ul>
    </section>
  );
}

export default Sidebar;
