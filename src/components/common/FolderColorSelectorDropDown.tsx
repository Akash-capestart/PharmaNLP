import React, { useState } from "react";

type FolderColorSelectorDropDownProps = {
  dropDownValues : string[],
  activeDropDownVal : string,
  changeValHandler : Function,
  width : number,
  height : string | number,
  hasBorder : boolean
}

export function FolderColorSelectorDropDown({
  dropDownValues,
  activeDropDownVal,
  changeValHandler,
  width,
  height,
  hasBorder,
} : FolderColorSelectorDropDownProps) {
  const [showDropDown, setshowDropDown] = useState(false);

  const dropDownShowHandler = () => {
    setshowDropDown(prevVal => !prevVal);
  };

  const setSelectedValueHandler = (dropdownVal : string) => {
    changeValHandler(dropdownVal);
    setshowDropDown(prevVal => !prevVal);
  };

  return (
    <div style={{ width: width }} className="position-relative">
      <div
        onClick={() => dropDownShowHandler()}
        style={{ border: hasBorder ? "solid 1px #EEEEEE" : "" }}
        className="cursor-pointer d-flex align-items-center justify-content-evenly drop-down-box"
      >
        <div
          className="rounded-indicator"
          style={{ backgroundColor: activeDropDownVal }}
        ></div>
        <img
          src="/images/gray-drop-down-image.png"
          className={showDropDown ? "drop-down-rotated" : "drop-down-icon"}
          alt="Drop Down..."
        />
      </div>
      {showDropDown && (
        <div
          className="drop-down-content-box"
          onMouseLeave={() => dropDownShowHandler()}
          style={{ height: height, width: width }}
        >
          {dropDownValues.map((dropdownVal, idx) => {
            return (
              <div
                key={idx}
                className="text-center cursor-pointer"
                onClick={() => setSelectedValueHandler(dropdownVal)}
              >
                <div
                  className="rounded-indicator drop-down-content no-padding"
                  style={{ backgroundColor: dropdownVal }}
                ></div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
