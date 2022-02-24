import React from "react";
import Cautions from "./cautions";
import Digest from "./digest";
import Head from "./head";
import Healthlabels from "./healthlabels";
import Ingredients from "./ingredients";

function DisplayResult({ data, key }) {
  const { image, label, url } = data.recipe;

  return (
    <section className="mt-4 card">
      <details>
        <summary>{label}</summary>
        <>
          <Head img={image} label={label} url={url} />
          <Healthlabels data="" />
          <Cautions data="" />
          <Ingredients data="" />
          <Digest data="" />
        </>
      </details>
    </section>
  );
}

export default DisplayResult;
