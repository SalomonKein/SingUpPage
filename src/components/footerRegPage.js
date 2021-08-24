import React from "react";

export default function FooterRegForm() {
  return (
    <div>
      <div className="mt-3" style={{textAlign: "center"}}>
        Already have an account?{" "}
        <a style={{color: "green"}} href="/">
          Log In
        </a>
      </div>
      <div className="mt-3 mb-3" style={{textAlign: "center"}}>
        Review privacy and disclosures{" "}
        <a style={{color: "green"}} href="/">
          here
        </a>
      </div>
    </div>
  );
}
