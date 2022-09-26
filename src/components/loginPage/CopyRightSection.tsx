import React from "react";

export function CopyRightSection() {
  return (
    <div className="position-absolute pad-10" style={{ width: 200, bottom: 0 }}>
      <div className="d-flex align-items-center justify-content-center">
        <img
          src="/images/copy-right-image.png"
          className="w-15"
          alt="copy-right"
        />
        <span className="has-font-weight">2022</span>
      </div>
      <img src="/images/capestart-image.png" className="w-100" alt="Logo..." />
    </div>
  );
}
