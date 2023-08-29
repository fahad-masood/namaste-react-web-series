import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <div className="logo">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSutTvjP5Nx7u5vk-IZlmBsiIZIn4ZgTli70lW3i_KRw2FriVJ0YxtVctxFi56AgnqZgrk&usqp=CAU"
        alt=""
        srcset=""
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Search</li>
        <li>Offers</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const AppLayout = () => (
  <div className="app">
    <Header />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
