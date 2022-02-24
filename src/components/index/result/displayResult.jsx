import React from "react";
import Cautions from "./cautions";
import Digest from "./digest";
import Head from "./head";
import Healthlabels from "./healthlabels";
import Ingredients from "./ingredients";

function DisplayResult({ data, key }) {
  const {
    image,
    label,
    url,
    calories,
    cuisineType,
    healthLabels,
    cautions,
    ingredientLines,
    digest,
  } = data.recipe;

  console.log(cautions);

  return (
    <section className="mt-4 card">
      <details>
        <summary>{label}</summary>
        <>
          <Head
            img={image}
            label={label}
            url={url}
            calories={calories}
            cuisineType={cuisineType}
          />
          <Healthlabels data={healthLabels} />
          <Cautions data={cautions} />
          <Ingredients data={ingredientLines} />
          <Digest data={digest} />
        </>
      </details>
    </section>
  );
}

export default DisplayResult;
