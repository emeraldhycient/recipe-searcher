import React from "react";
import Header from "../components/header";
import Searchbar from "../components/index/searchbar";
import Sidebar from "../components/sidebar";

function Index() {
  return (
    <section>
      <Header />
      <div className="content">
        <Sidebar />
        <Searchbar />
      </div>
    </section>
  );
}

export default Index;
