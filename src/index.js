import React from "react";
import ReactDOM from "react-dom";
import FlexboxBasics from "./FlexboxBasics";
import FlexGrid from "./FlexGrid";
import WebLayout from "./WebLayout";

import "./styles.css";

function App() {
  return (
    <div style={{ margin: "4px" }}>
      {/* <FlexGrid /> */}
      {/* <FlexboxBasics /> */}
      <WebLayout />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
