import React, { useState } from "react";
import { DropDown } from "../common/DropDown";
import { InputFieldEmptyAlert } from "../common/InputFieldEmptyAlert";
import { SplitedDropDown } from "../common/SplitedDropDown";
import { useAppSelector } from "../../redux/Hooks";
import { Button } from "../common/Button";

export function AdvanceSearchComponent({
  toCollapse,
  advanceSearchAndFilterShowHandler,
}) {
  const fontResizerState = useAppSelector((state) => state.globalFontResizer);

  let queryBoxDropDownValues = [
    "Author",
    "Publication Type",
    "Language",
    "Title",
    "Title/Abstract",
    "Population",
    "Intervention",
    "Comparision",
  ];
  let andOrNotDropDownValues = ["AND", "OR", "NOT"];

  const [advanceSearchState, setadvanceSearchState] = useState({
    activeDropDownVal: queryBoxDropDownValues[0],
    jointActiveDropDownVal: "ADD",
    enteredSearchTerm: "",
    termsQueryBoxPopOverShow: false,
    searchQueryBoxPopOverShow: false,
    termsHaveSelected: [],
    enteredQueryTerms: [],
    andOrNotQuery: [],
    querySet: "",
    initialRendering: true,
  });

  const enteredTermsHandler = (e) => {
    setadvanceSearchState({
      ...advanceSearchState,
      enteredSearchTerm: e,
      termsQueryBoxPopOverShow: false,
    });
  };

  const enteredQueryHandler = (e) => {
    setadvanceSearchState({
      ...advanceSearchState,
      querySet: e,
      termsQueryBoxPopOverShow: false,
      searchQueryBoxPopOverShow: false,
    });
  };

  const queryBoxDropDownValueHandler = (val) => {
    setadvanceSearchState({
      ...advanceSearchState,
      activeDropDownVal: val,
    });
  };

  const querySetHandler = (val) => {
    if (advanceSearchState["enteredSearchTerm"] !== "") {
      const querySet = concatinateQueryHandler(val);
      setadvanceSearchState({
        ...advanceSearchState,
        jointActiveDropDownVal: val !== "ADD" ? val : "AND",
        searchQueryBoxPopOverShow: false,
        termsHaveSelected: [
          ...advanceSearchState.termsHaveSelected,
          advanceSearchState["activeDropDownVal"],
        ],
        enteredQueryTerms: [
          ...advanceSearchState.enteredQueryTerms,
          advanceSearchState["enteredSearchTerm"],
        ],
        andOrNotQuery: advanceSearchState["initialRendering"]
          ? []
          : [...advanceSearchState.andOrNotQuery, val],
        querySet: querySet,
        initialRendering: false,
      });
    } else {
      setadvanceSearchState({
        ...advanceSearchState,
        jointActiveDropDownVal: "ADD",
        termsQueryBoxPopOverShow: true,
        searchQueryBoxPopOverShow: false,
      });
    }
  };

  const concatinateQueryHandler = (val) => {
    const copyOfAdvanceSearchFieldState = { ...advanceSearchState };
    copyOfAdvanceSearchFieldState["termsHaveSelected"] = [
      ...copyOfAdvanceSearchFieldState["termsHaveSelected"],
      advanceSearchState["activeDropDownVal"],
    ];
    copyOfAdvanceSearchFieldState["enteredQueryTerms"] = [
      ...copyOfAdvanceSearchFieldState["enteredQueryTerms"],
      advanceSearchState["enteredSearchTerm"],
    ];
    copyOfAdvanceSearchFieldState["andOrNotQuery"] = advanceSearchState[
      "initialRendering"
    ]
      ? []
      : [...copyOfAdvanceSearchFieldState["andOrNotQuery"], val];

    let dropDownSelectedItemsQueryArray = [];
    let singleItemQuery;
    copyOfAdvanceSearchFieldState["termsHaveSelected"].forEach((each, idx) => {
      const termHasSelectedJoint = `${"("}${
        copyOfAdvanceSearchFieldState["enteredQueryTerms"][idx]
      }${"["}${each}${"]"}${")"}`;
      const newEntry = [
        ...dropDownSelectedItemsQueryArray,
        termHasSelectedJoint,
      ];
      const singleEntry = `${
        copyOfAdvanceSearchFieldState["enteredQueryTerms"][idx]
      }${"["}${each}${"]"}`;
      dropDownSelectedItemsQueryArray = newEntry;
      singleItemQuery = singleEntry;
    });

    let searchQueryArray = [];
    if (copyOfAdvanceSearchFieldState["andOrNotQuery"].length === 0) {
      return singleItemQuery;
    } else {
      copyOfAdvanceSearchFieldState["andOrNotQuery"].forEach((each, idx) => {
        if (searchQueryArray.length === 0) {
          const queryString = `${
            dropDownSelectedItemsQueryArray[idx]
          } ${each} ${dropDownSelectedItemsQueryArray[idx + 1]}`;
          const newQueryEntry = [queryString];
          searchQueryArray = newQueryEntry;
        } else {
          const queryString = `${"("}${searchQueryArray[0]}${")"} ${each} ${
            dropDownSelectedItemsQueryArray[idx + 1]
          }`;
          const newQueryEntry = [queryString];
          searchQueryArray = newQueryEntry;
        }
      });
      return searchQueryArray;
    }
  };

  const searchClickHandler = () => {
    setadvanceSearchState({
      ...advanceSearchState,
      termsQueryBoxPopOverShow: false,
      searchQueryBoxPopOverShow: true,
    });
    advanceSearchAndFilterShowHandler(toCollapse, 0, "smooth");
  };

  const crossClickHandler = (key) => {
    if (key === "enteredSearchTerm") {
      setadvanceSearchState({
        ...advanceSearchState,
        [key]: "",
      });
    } else {
      setadvanceSearchState({
        ...advanceSearchState,
        [key]: "",
        jointActiveDropDownVal: "ADD",
        termsHaveSelected: [],
        enteredQueryTerms: [],
        andOrNotQuery: [],
        initialRendering: true,
      });
    }
  };

  return (
    <div className="advance-search-box">
      <div className="pad-15">
        <p
          className="text-green has-font-weight has-gray-border-bottom font-change-animation"
          style={{ fontSize: fontResizerState["midFont"] }}
        >
          ADVANCED SEARCH
        </p>
        <div className="row no-margin">
          <div className="col-md-3 no-padding">
            <p
              className="text-light-gray font-change-animation"
              style={{ fontSize: fontResizerState["lowFont"] }}
            >
              Add terms to the query box
            </p>
            <DropDown
              activeDropDownVal={advanceSearchState.activeDropDownVal}
              changeValHandler={queryBoxDropDownValueHandler}
              dropdownValues={queryBoxDropDownValues}
              width={200}
              height={150}
              backGroundColor={"#F8FDF4"}
            />
          </div>
          <div className="col-md-9 no-padding">
            <p
              className="text-light-gray font-change-animation"
              style={{ fontSize: fontResizerState["lowFont"] }}
            >
              Add terms to the query box
            </p>
            <div className="d-flex align-items-center justify-content-between">
              <div className="position-relative" style={{ width: "80%" }}>
                <input
                  className="pale-green-background advanced-search-input-field w-100"
                  value={advanceSearchState.enteredSearchTerm}
                  onChange={(e) => enteredTermsHandler(e.target.value)}
                  placeholder="Enter a Search term"
                />
                {!advanceSearchState.enteredSearchTerm &&
                  advanceSearchState.termsQueryBoxPopOverShow && (
                    <div className="position-absolute popover-position">
                      <InputFieldEmptyAlert text={"Please Enter the term..."} />
                    </div>
                  )}
                {advanceSearchState.enteredSearchTerm && (
                  <div
                    className="position-absolute cross-position cursor-pointer"
                    onClick={() => crossClickHandler("enteredSearchTerm")}
                  >
                    <img
                      className="cross-icon"
                      src="/images/cross-image.png"
                      alt="Cross..."
                    />
                  </div>
                )}
              </div>
              <SplitedDropDown
                activeDropDownVal={advanceSearchState.jointActiveDropDownVal}
                changeValHandler={querySetHandler}
                dropdownValues={andOrNotDropDownValues}
                width={100}
                height={"auto"}
                backGroundColor={"#2BB24C"}
              />
            </div>
          </div>
          <div className="col-md-3 no-padding mar-t-15"></div>
          <div className="col-md-9 no-padding mar-t-15">
            <p
              className="text-light-gray font-change-animation"
              style={{ fontSize: fontResizerState["lowFont"] }}
            >
              Query box
            </p>
            <div className="d-flex align-items-center justify-content-between">
              <div className="position-relative" style={{ width: "80%" }}>
                {advanceSearchState.searchQueryBoxPopOverShow && (
                  <div className="position-absolute popover-position">
                    <InputFieldEmptyAlert
                      text={"Please Click the Query Add Button..."}
                    />
                  </div>
                )}
                {advanceSearchState.querySet && (
                  <div
                    className="position-absolute cross-position cursor-pointer"
                    onClick={() => crossClickHandler("querySet")}
                  >
                    <img
                      className="cross-icon"
                      src="/images/cross-image.png"
                      alt="Cross..."
                    />
                  </div>
                )}
                <textarea
                  value={advanceSearchState.querySet}
                  onChange={(e) => enteredQueryHandler(e.target.value)}
                  className="pale-green-background advanced-search-input-field w-100"
                  style={{ height: 100 }}
                  placeholder="Enter / edit your search query here"
                />
              </div>
              <Button
                hasExtraPad={false}
                text={"search"}
                upperCaseText={true}
                btnHasRadius={true}
                btnHasImg={false}
                btnClickHandler={searchClickHandler}
                fontSize={fontResizerState["lowFont"]}
                imgUrl={""}
                loadingCase={true}
                hasMarginLeft={false}
                textCenter={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
