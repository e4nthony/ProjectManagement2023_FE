/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete*/

import React from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function HomePage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  return (
    <div>
      <h1>Home page !</h1>
      <button type="button" onClick={handleClick}>Login</button>
    </div>
  );
}
export default HomePage;
