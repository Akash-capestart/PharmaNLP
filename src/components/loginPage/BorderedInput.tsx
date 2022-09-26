import React from "react";

type BorderedInputProps = {
  type : string,
  placeholder : string,
  onChangeHandler : Function,
  onChangeFor : string,
  // value : string
}

export function BorderedInput({type,placeholder,onChangeHandler,onChangeFor} : BorderedInputProps) {
  return (
    <>
      <input                        
        type={type}
        className="w-100 login-input has-green-border mar-t-40"
        // value={value}
        onChange={(e) => onChangeHandler(e.target.value, onChangeFor)}
        placeholder={placeholder}
      />
    </>
  );
}
