import React from "react";
import spec from "./spec.json";
import YAML from "yaml";
const Source = () => {
  console.log(spec);
  return (
    <div>
      <pre>{JSON.stringify(spec)}</pre>
      {YAML.stringify(spec)}
    </div>
  );
};

export default Source;
