import React from "react";

import LoginImage from "./image";
import FormLogin from "./form";

function Login() {
  return (
    <section id="login" className="h-screen">
      <div className="flex h-full justify-between gap-5">
        <LoginImage />

        <FormLogin />
      </div>
    </section>
  );
}

export default Login;
