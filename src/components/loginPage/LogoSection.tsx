import React from "react";

export function LogoSection() {
  return (
    <div className="position-absolute pad-10 login-pharma-logo-box">
      <div className="d-flex align-items-center justify-content-between">
        <img
          src="/images/pnlp-logo.png"
          className="login-pnlp-logo"
          alt="copy-right"
        />
        <span className="has-font-weight text-white high-font pad-l-10">
          PharmaNLP-SLR
        </span>
      </div>
    </div>
  );
}
