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
