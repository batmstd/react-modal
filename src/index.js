import React from "react";
import ReactDOM from "react-dom";
import ModalComponent from "./Sanbox.jsx";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ModalComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
