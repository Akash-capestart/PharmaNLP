import React from "react";

export function ImageCenteredText() {
  return (
    <div className="col-md-8 no-padding position-relative overlay-before">
      <div className="position-absolute login-left-content-position">
        <h1 className="no-margin text-white has-font-weight text-center">
          AI-Assisted
        </h1>
        <p className="no-margin text-white high-font">
          Systematic Literature Review
        </p>
      </div>
      <img
        src="/images/login-ai-image.jpg"
        className="w-100 ai-image-border-radius"
        alt="AI..."
      />
    </div>
  );
}
