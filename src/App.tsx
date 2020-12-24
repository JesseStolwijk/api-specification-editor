import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Source from "./Source";
import SpecEditor from "./SpecEditor";
import { RecoilRoot } from "recoil";

function App() {
  // const initializeState = ({ set }) => {
  //   for (const [key, value] of Storage.entries()) {
  //     set(myLookupOfAtomWithKey(key), JSON.parse(value).value);
  //   }
  // };

  return (
    <div className="App">
      {/* <RecoilRoot initializeState={null}> */}

      <SpecEditor />
      {/* <Source /> */}
      {/* </RecoilRoot> */}
    </div>
  );
}

export default App;
