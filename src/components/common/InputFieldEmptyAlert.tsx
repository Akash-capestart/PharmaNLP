import React from "react";

type InputFieldEmptyAlertProps = {
  text : string
}

export function InputFieldEmptyAlert({ text } : InputFieldEmptyAlertProps) {
  return (
    <>
      <div className="position-relative">
        <p className="no-margin min-font white-background popover-text has-font-weight">
          {text}
        </p>
        <div className="down-arrow"></div>
      </div>
    </>
  );
}
