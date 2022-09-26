import React from "react";
import { useAppSelector } from "../../redux/Hooks";
import { Loader } from "./Loader";

type ButtonProps = {
  hasExtraPad : boolean,
  text : string,
  upperCaseText : boolean,
  btnHasRadius : boolean,
  btnHasImg : boolean,
  btnClickHandler :(event : React.MouseEvent<HTMLDivElement>) => void ,
  fontSize : number,
  imgUrl : string,
  loadingCase : boolean,
  hasMarginLeft : boolean,
  textCenter : boolean
}

export function Button(
  {hasExtraPad,
  text,
  upperCaseText,
  btnHasRadius,
  btnHasImg,
  btnClickHandler,
  fontSize,
  imgUrl,
  loadingCase,
  hasMarginLeft,
  textCenter} : ButtonProps
) {
  const userDetailsState = useAppSelector((state) => state.userDetails);

  return (
    <div
      className={`${textCenter ? "" : "d-inline-flex"} cursor-pointer ${
        hasMarginLeft ? "mar-l-15" : ""
      }`}
      onClick={btnClickHandler}
    >
      <div
        className={`d-flex align-items-center ${
          textCenter ? "justify-content-center" : "justify-content-between"
        } align-items-center green-background btn-box ${
          btnHasRadius ? "has-border-radius-5" : ""
        }`}
        style={{padding:hasExtraPad ? 10 : ""}}
      >
        {btnHasImg && (
          <img src={imgUrl} className="btn-img-std" alt="Advance Search..." />
        )}
        <button
          className={`green-background btn-active font-change-animation ${
            upperCaseText ? "upperCaseText" : "capitalizeText"
          }`}
          style={{ fontSize: fontSize }}
        >
          {text}
        </button>
        {loadingCase && (
          <div
            className="btn-width-animation"
            style={{ width: userDetailsState["loading"] ? "25px" : "0px" }}
          >
            <Loader size={20} activeColor={"#FFFFFF"} inActiveColor={"#2BB24C"} loaderBarWidth={"2px"}/>
          </div>
        )}
      </div>
    </div>
  );
}
