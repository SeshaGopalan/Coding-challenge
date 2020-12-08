// JavaScript source code
import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import List from "./list";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="Punk API" />
    <h2>Beer App</h2>
    <List />
  </div>
);

render(<App />, document.getElementById("root"));
