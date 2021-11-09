import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Widget = () => (
  <div className="widget">
    This is a widget rendered in react. It should be red, which comes from the bundled css file.
  </div>
);

ReactDOM.render(<Widget />, document.getElementById("lukman-test"))
