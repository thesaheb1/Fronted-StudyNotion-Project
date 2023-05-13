import React from "react";
import Template from "../Components/Template";

function Signup({ SetisLoggedIn }) {
  return (
    <div>
      <Template
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        formtype="signup"
        SetisLoggedIn={SetisLoggedIn}
      />
    </div>
  );
}

export default Signup;
