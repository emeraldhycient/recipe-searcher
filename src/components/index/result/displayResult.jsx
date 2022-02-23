import React from "react";
import Digest from "./digest";
import Head from "./head";
import Ingredients from "./ingredients";

function DisplayResult({ data }) {
  return (
    <section className="mt-4 card">
      <Head />
      <Ingredients />
      <Digest />
    </section>
  );
}

export default DisplayResult;
