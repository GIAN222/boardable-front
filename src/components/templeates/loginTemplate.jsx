import React from "react";
import Banner from "./banner.jsx";
import Forms from "../organisms/forms.jsx";
import LogInPage from "../pages/logIn.jsx";

function LoginTemplate() {
  return (
    <main className="max-w-xs">
      <Banner></Banner>
      <Forms></Forms>

      <div>
        <span>Create an account</span>
      </div>
    </main>
  );
}

export default LoginTemplate;
