import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading = <h1>Hi from the react element</h1>;

// React Component

const HeadingComponent = () => {
  return <h1>Hi from a React Component</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
