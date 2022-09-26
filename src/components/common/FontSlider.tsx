import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  fontSizeDecrement,
  fontSizeIncrement,
} from "../../redux/reducers/GlobalFontResizingSlice";

export function FontSlider() {
  const fontArr = ["Low", "Default", "Moderate", "Maximum"];
  const fontVal = [0, 25, 50, 75];

  const dispatch = useDispatch();

  const [fontSliderState, setfontSliderState] = useState({
    showFontSelector: false,
    fontSelectedVal: 25,
    fontLabel: fontArr[1],
  });

  const fontChangeShowHandler = () => {
    setfontSliderState((prevVal) => ({
      ...prevVal,
      showFontSelector: !prevVal["showFontSelector"],
    }));
  };

  const activeFontSelectingHandler = (e:string) => {    
    let findIndexOfE = fontVal.findIndex((each) => each === parseInt(e));
    let findIndexOfPrev = fontVal.findIndex(
      (each) => each === fontSliderState["fontSelectedVal"]
    );
    setfontSliderState({
      ...fontSliderState,
      fontSelectedVal: parseInt(e),
      fontLabel: fontArr[findIndexOfE],
    });
    if (parseInt(e) < fontSliderState["fontSelectedVal"]) {
      dispatch(
        fontSizeDecrement({
          fontValue: findIndexOfPrev - findIndexOfE,
        })
      );
    } else {
      dispatch(
        fontSizeIncrement({
          fontValue: findIndexOfE - findIndexOfPrev,
        })
      );
    }
  };

  return (
    <div className="font-resizer-box position-relative" style={{ height: 26 }}>
      <span className="cursor-pointer" onClick={() => fontChangeShowHandler()}>
        - aA +
      </span>
      {fontSliderState["showFontSelector"] && (
        <div className="slider pad-15">
          <p className="text-center no-margin">
            {fontSliderState["fontLabel"]}
          </p>
          <div className="d-flex align-items-center justify-content-between mar-5">
            <span className="min-font mar-r-5">A</span>
            <input
              className="cursor-pointer"
              type="range"
              min="0"
              max="75"
              value={fontSliderState["fontSelectedVal"]}
              step="25"
              list="volsettings"
              onChange={(e) => activeFontSelectingHandler(e.target.value)}
            />
            <datalist id="volsettings">
              <option>25</option>
              <option>50</option>
              <option>75</option>
            </datalist>
            <span className="mid-font mar-l-5">A</span>
          </div>
          <p className="text-center no-margin min-font">
            Make the text on screen smaller or larger
          </p>
        </div>
      )}
    </div>
  );
}
