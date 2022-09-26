import React, { useState, useRef } from "react";
import { useAppSelector } from "../../redux/Hooks";

export function SideMenuFolderLists({ filesData }) {
  const fontResizerState = useAppSelector((state) => state.globalFontResizer);

  const [sideMenuForderListsState, setsideMenuForderListsState] = useState({
    folderListsShow: false,
    folderListsHeight: 0,
  });

  const folderListsContentRef = useRef(null);

  const accToggleHandler = () => {
    setsideMenuForderListsState(prevVal=>({
      ...prevVal,
      folderListsShow: !prevVal["folderListsShow"],
      folderListsHeight:
        sideMenuForderListsState.folderListsHeight === 0
          ? folderListsContentRef.current.scrollHeight
          : 0,
    }));
  };

  return (
    <div style={{ padding: "0px 10px 5px 5px" }}>
      <div
        className="d-flex align-items-center justify-content-between cursor-pointer light-green-background pad-5"
        onClick={() => accToggleHandler()}
      >
        <div>
          <img
            className={
              sideMenuForderListsState["folderListsShow"]
                ? "drop-down-rotated"
                : "drop-down-icon"
            }
            src="/images/green-drop-down-image.png"
            alt="Drop Down..."
          />
          <span
            className="text-green font-change-animation has-font-weight pad-l-10"
            style={{ fontSize: fontResizerState["lowFont"] }}
          >
            Device
          </span>
        </div>
        <span
          className="text-green font-change-animation has-font-weight"
          style={{ fontSize: fontResizerState["lowFont"] }}
        >
          145
        </span>
      </div>
      <div
        ref={folderListsContentRef}
        className="accordian-height-animation"
        style={{ maxHeight: sideMenuForderListsState["folderListsHeight"] }}
      >
        {filesData.map((each, idx) => {
          return (
            <div
              key={idx}
              className="d-flex align-items-center justify-content-between"
              style={{ padding: "5px 10px 0px 10px" }}
            >
              <div>
                <div
                  className="rounded-indicator"
                  style={{ backgroundColor: each.color }}
                ></div>
                <span
                  className="text-green font-change-animation has-font-weight pad-l-10"
                  style={{ fontSize: fontResizerState["lowFont"] }}
                >
                  {each.file}
                </span>
              </div>
              <span
                className="text-green font-change-animation has-font-weight"
                style={{ fontSize: fontResizerState["lowFont"] }}
              >
                {each.count}
              </span>
            </div>
          );
        })}
      </div>
      <div className="d-flex align-items-center justify-content-between cursor-pointer light-green-background pad-5 mar-t-10">
        <div>
          <div
            className="rounded-indicator"
            style={{ backgroundColor: "#C92121" }}
          ></div>
          <span
            className="text-green font-change-animation has-font-weight pad-l-10"
            style={{ fontSize: fontResizerState["lowFont"] }}
          >
            Adverse Events
          </span>
        </div>
        <span
          className="text-green font-change-animation has-font-weight"
          style={{ fontSize: fontResizerState["lowFont"] }}
        >
          19
        </span>
      </div>
      <div className="d-flex align-items-center justify-content-between cursor-pointer light-green-background pad-5 mar-t-10">
        <div>
          <div
            className="rounded-indicator"
            style={{ backgroundColor: "#D7D03D" }}
          ></div>
          <span
            className="text-green font-change-animation has-font-weight pad-l-10"
            style={{ fontSize: fontResizerState["lowFont"] }}
          >
            Review Later
          </span>
        </div>
        <span
          className="text-green font-change-animation has-font-weight"
          style={{ fontSize: fontResizerState["lowFont"] }}
        >
          28
        </span>
      </div>
    </div>
  );
}
