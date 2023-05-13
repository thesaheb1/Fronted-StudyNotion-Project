import React from "react";
import Template from "../Components/Template";

function Login({ SetisLoggedIn }) {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        formtype="login"
        SetisLoggedIn={SetisLoggedIn}
      />
    </div>
  );
}

export default Login;
