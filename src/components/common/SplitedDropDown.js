import React, { useState } from "react";
import { useAppSelector } from "../../redux/Hooks";

export function SplitedDropDown({
  activeDropDownVal,
  changeValHandler,
  dropdownValues,
  width,
  height,
  hasBorder,
  backGroundColor,
}) {
  const fontResizerState = useAppSelector((state) => state.globalFontResizer);

  const [showDropDown, setshowDropDown] = useState({
    show: false,
    dropDownAnimation: false,
  });

  const dropDownShowHandler = () => {
    setshowDropDown(prevVal=>({
      ...prevVal,
      show: !prevVal["show"],
      dropDownAnimation: false,
    }));
  };

  const setSelectedValueHandler = (dropdownVal) => {
    changeValHandler(dropdownVal);
    setshowDropDown(prevVal=>({
      ...prevVal,
      show: !prevVal["show"],
      dropDownAnimation: false,
    }));
  };

  const queryAddHandler = () => {
    setshowDropDown(prevVal => ({
      ...prevVal,
      dropDownAnimation: !prevVal["dropDownAnimation"],
    }));
    changeValHandler(activeDropDownVal);
  };

  return (
    <div style={{ width: width }} className="position-relative">
      <div
        style={{
          border: hasBorder ? "solid 1px #EEEEEE" : "",
          backgroundColor: backGroundColor && backGroundColor,
        }}
        className="d-flex align-items-center justify-content-between drop-down-box"
      >
        <p
          className="no-margin w-50 text-white text-center cursor-pointer font-change-animation"
          style={{ fontSize: fontResizerState["lowFont"] }}
          onClick={() => queryAddHandler()}
        >
          {activeDropDownVal}
        </p>
        <div
          className="w-25 cursor-pointer text-center"
          onClick={() => dropDownShowHandler()}
        >
          <img
            src="/images/white-drop-down-image.png"
            className={`${
              showDropDown.show ? "drop-down-rotated" : "drop-down-icon"
            } ${
              showDropDown.dropDownAnimation ? "drop-down-icon-animation" : ""
            }`}
            alt="Drop Down..."
          />
        </div>
      </div>
      {showDropDown.show && (
        <div
          className="drop-down-content-box"
          onMouseLeave={() => dropDownShowHandler()}
          style={{ height: height, width: width }}
        >
          {dropdownValues.map((dropdownVal, idx) => {
            return (
              <p
                key={idx}
                className="drop-down-content no-margin font-change-animation"
                style={{ fontSize: fontResizerState["lowFont"] }}
                onClick={() => setSelectedValueHandler(dropdownVal)}
              >
                {dropdownVal}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}
