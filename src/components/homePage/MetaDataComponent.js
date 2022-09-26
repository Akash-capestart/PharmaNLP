import React, { useState } from "react";
import { useAppSelector } from "../../redux/Hooks";
import { CamelStringToCapsString } from "../../helpers/CamelStringToCapsString";

const MetaDataSelectBtnUI = ({
  metaDataSelectorHandler,
  value,
  activeMetaData,
}) => {
  return (
    <li
      className={`mar-r-5 pad-10 cursor-pointer has-font-weight gray-background ${
        value === activeMetaData && "active"
      }`}
      onClick={() => metaDataSelectorHandler(value)}
    >
      {CamelStringToCapsString(value)}
    </li>
  );
};

const MetaDataFieldsUI = ({ metaDataObj }) => { 

  const fontResizerState = useAppSelector((state) => state.globalFontResizer);

  return (
    <div className="no-margin row">
      {Object.keys(metaDataObj[0]).map((key,idx) => {
        return (
          <div key={idx} className="col-md-4 pad-l-0 mar-b-10 mar-t-10">            
            <p
              className="text-light-gray mar-b-10 font-change-animation"
              style={{ fontSize: fontResizerState["lowFont"] }}
            >
              {CamelStringToCapsString(key)}
            </p>            
            <div className="meta-data-fields gray-background has-green-border mar-b-10">
              <p
                className="text-light-gray no-margin font-change-animation"
                style={{ fontSize: fontResizerState["lowFont"] }}
              >
                {metaDataObj[0][key] === ""
                  ? "-"
                  : String(metaDataObj[0][key])}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export function MetaDataComponent({
  activeArticle,
  articleViewHeight,
  metaDataCloseHandler,
}) {    
  const fontResizerState = useAppSelector((state) => state.globalFontResizer);
  const [metaDataComponentState, setmetaDataComponentState] = useState({
    activeMetaDataSelector: [],
    activeMetaData: "studyData",
  });

  const metaDataSelectorHandler = (key) => {
    if (metaDataComponentState["activeMetaDataSelector"].includes(key[0])) {
      setmetaDataComponentState({
        ...metaDataComponentState,
        activeMetaDataSelector: [],
        activeMetaData: key,
      });
    } else {
      setmetaDataComponentState({
        ...metaDataComponentState,
        activeMetaDataSelector: [key[0]],
        activeMetaData: key,
      });
    }
  };

  return (
    <div
      className="col-md-8 overflow-auto"
      style={{ paddingRight: 0, maxHeight: articleViewHeight }}
    >      
      <ul
        className="d-flex no-padding no-margin meta-data-options-box font-change-animation position-relative align-items-center"
        style={{ fontSize: fontResizerState["lowFont"] }}
      >
        <MetaDataSelectBtnUI
          metaDataSelectorHandler={metaDataSelectorHandler}
          value={"studyData"}
          activeMetaData={metaDataComponentState["activeMetaData"]}
        />
        <MetaDataSelectBtnUI
          metaDataSelectorHandler={metaDataSelectorHandler}
          value={"studyLevelData"}
          activeMetaData={metaDataComponentState["activeMetaData"]}
        />
        <MetaDataSelectBtnUI
          metaDataSelectorHandler={metaDataSelectorHandler}
          value={"patientBaseline"}
          activeMetaData={metaDataComponentState["activeMetaData"]}
        />
        <MetaDataSelectBtnUI
          metaDataSelectorHandler={metaDataSelectorHandler}
          value={"interventions"}
          activeMetaData={metaDataComponentState["activeMetaData"]}
        />
        <MetaDataSelectBtnUI
          metaDataSelectorHandler={metaDataSelectorHandler}
          value={"outcomes"}
          activeMetaData={metaDataComponentState["activeMetaData"]}
        />
        <img
          onClick={() => metaDataCloseHandler(null, 0)}
          style={{ right: 0 }}
          className="cursor-pointer w-20 position-absolute"
          src="/images/cross-image.png"
          alt="Close..."
        />
      </ul>
      <MetaDataFieldsUI
        metaDataObj={activeArticle[metaDataComponentState["activeMetaData"]]}
      />
    </div>
  );
}
