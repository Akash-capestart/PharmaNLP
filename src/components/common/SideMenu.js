import React, { useState } from "react";
import { useAppSelector } from "../../redux/Hooks";
import { SideMenuFolderLists } from "./SideMenuFolderLists";

export function SideMenu() {
  const fontResizerState = useAppSelector((state) => state.globalFontResizer);
  const [folderSelector, setfolderSelector] = useState(true);

  const folderSelectHandler = (key) => {
    if (key === "folder") {
      setfolderSelector(true);
    } else {
      setfolderSelector(false);
    }
  };

  return (
    <>
      <div className="d-flex align-items-center nav-box-height light-green-background">
        <img
          src="/images/pnlp-logo.png"
          className="nav-box-height"
          alt="PNLP Logo..."
        />
        <div className="w-100 text-center">
          <img
            className="h-30"
            src="/images/capestart-logo.png"
            alt="CapeStart Logo..."
          />
        </div>
      </div>
      <div className="h-78"></div>
      <div className="d-flex">
        <button
          onClick={() => folderSelectHandler("folder")}
          className={`w-50 text-center d-flex align-items-center justify-content-around no-padding h-36 ${
            folderSelector ? "btn-active" : "btn-std"
          }`}
        >
          <span
            className="font-change-animation"
            style={{ fontSize: fontResizerState["lowFont"] }}
          >
            Folders
          </span>
        </button>
        <button
          onClick={() => folderSelectHandler("savedSearch")}
          className={`w-50 text-center d-flex align-items-center justify-content-around no-padding h-36 ${
            !folderSelector ? "btn-active" : "btn-std"
          }`}
        >
          <span
            className="font-change-animation"
            style={{ fontSize: fontResizerState["lowFont"] }}
          >
            Saved Searches
          </span>
        </button>
      </div>
      {folderSelector ? (
        <div className="mar-t-10">
          <SideMenuFolderLists
            filesData={[
              { color: "#31D0DA", file: "Femoral Neck System", count: 79 },
              { color: "#EB629B", file: "Dynamic Hip Screw", count: 42 },
              { color: "#9031DA", file: "Cannulated Screw", count: 24 },
            ]}
          />
        </div>
      ) : (
        <div className="pad-10">
          <div className="cursor-pointer nav-save-search-content">
            <span
              className="text-green has-font-weight pad-r-10 font-change-animation"
              style={{ fontSize: fontResizerState["lowFont"] }}
            >
              #1
            </span>
            <span
              className="text-green has-font-weight font-change-animation"
              style={{ fontSize: fontResizerState["lowFont"] }}
            >
              Femoral Neck System
            </span>
          </div>
          <div className="cursor-pointer nav-save-search-content">
            <span
              className="has-font-weight pad-r-10 font-change-animation"
              style={{ fontSize: fontResizerState["lowFont"] }}
            >
              #2
            </span>
            <span
              className="has-font-weight font-change-animation"
              style={{ fontSize: fontResizerState["lowFont"] }}
            >
              Dynamic Hip Screw
            </span>
          </div>
          <div className="cursor-pointer nav-save-search-content">
            <span
              className="has-font-weight pad-r-10 font-change-animation"
              style={{ fontSize: fontResizerState["lowFont"] }}
            >
              #3
            </span>
            <span
              className="has-font-weight font-change-animation"
              style={{ fontSize: fontResizerState["lowFont"] }}
            >
              Cannulated Screw
            </span>
          </div>
        </div>
      )}
    </>
  );
}
