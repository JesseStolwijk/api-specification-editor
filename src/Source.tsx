import React, { useState } from "react";
import spec from "./spec.json";
import YAML from "yaml";
import Editor from "@monaco-editor/react";

enum Notation {
  JSON = "JSON",
  YAML = "YAML",
}

const Source = () => {
  const [notation, setNotation] = useState(Notation.JSON);

  return (
    <div>
      <div>
        <h2>Notation:</h2>
        <button onClick={() => setNotation(Notation.JSON)}>JSON</button>
        <button onClick={() => setNotation(Notation.YAML)}>YAML</button>
      </div>
      <Editor
        height="90vh"
        language={notation === Notation.JSON ? "json" : "yaml"}
        value={
          notation === Notation.JSON
            ? JSON.stringify(spec, null, 2)
            : YAML.stringify(spec)
        }
      />
    </div>
  );
};

export default Source;
