import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading = <h1>Hi from the react element</h1>;

// Component Composition -> Calling a component inside another component
const Title = () => <h1>This is a title</h1>;
const HeadingComponent = () => (
  <>
    {/* 3 ways to call a React component */}
    <Title />
    <Title></Title>
    {Title()}
    <h1>Hi from a React Component</h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
