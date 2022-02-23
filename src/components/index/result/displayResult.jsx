import React from "react";
import Cautions from "./cautions";
import Digest from "./digest";
import Head from "./head";
import Healthlabels from "./healthlabels";
import Ingredients from "./ingredients";

function DisplayResult({ data }) {
  return (
    <section className="mt-4 card">
      <details>
        <summary>Chicken Paprikash</summary>
        <>
          <Head />
          <Healthlabels />
          <Cautions />
          <Ingredients />
          <Digest />
        </>
      </details>
    </section>
  );
}

export default DisplayResult;
