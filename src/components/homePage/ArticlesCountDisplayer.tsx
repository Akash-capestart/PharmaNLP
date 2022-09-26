import React from "react";
import { useAppSelector } from "../../redux/Hooks";

export function ArticlesCountDisplayer() {
  const fontResizerState = useAppSelector((state) => state.globalFontResizer);

  return (
    <div className="row no-margin light-green-background align-items-center article-count-displayer-height">
      <div className="col-md-3 pad-15">
        <div className="pale-green-background pad-10">
          <p
            className="has-font-weight font-change-animation"
            style={{ fontSize: fontResizerState["midFont"] }}
          >
            TOTAL RELEVANT STUDIES
          </p>
          <h3 className="no-margin">145</h3>
        </div>
      </div>
      <div className="col-md-3 pad-15">
        <div className="pale-green-background pad-10">
          <p
            className="has-font-weight font-change-animation"
            style={{ fontSize: fontResizerState["midFont"] }}
          >
            ADVERSE EVENTS
          </p>
          <h3 className="no-margin">19</h3>
        </div>
      </div>
      <div className="col-md-3 pad-15">
        <div className="pale-green-background pad-10">
          <p
            className="has-font-weight font-change-animation"
            style={{ fontSize: fontResizerState["midFont"] }}
          >
            FREE FULL-TEXT
          </p>
          <h3 className="no-margin">118</h3>
        </div>
      </div>
      <div className="col-md-3 pad-15">
        <div className="pad-10">
          <p
            className="has-font-weight font-change-animation"
            style={{ fontSize: fontResizerState["midFont"] }}
          >
            TOTAL RELEVANT STUDIES
          </p>
          <h3 className="no-margin">27</h3>
        </div>
      </div>
    </div>
  );
}
