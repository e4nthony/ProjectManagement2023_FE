/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete*/

import React from "react";
import ReactDOM from "react-dom/client";
import LoginUi from "./LoginUI";

const root = ReactDOM.createRoot(document.getElementById("root"));

function HomePage() {
  return (
    <div>
      <h1>Home page !</h1>
      <button onClick={() => root.render(<LoginUi />)}>Login</button>
    </div>
  );
}
export default HomePage;
