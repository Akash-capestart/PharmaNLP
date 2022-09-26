import React, { useState } from "react";
import { useAppSelector } from "../../redux/Hooks";
import { Button } from "../common/Button";

const MultiSelectView = ({ label, itemLists, filterHadler, checkValue }) => {
  const fontResizerState = useAppSelector((state) => state.globalFontResizer);

  const filterContentClickHandler = (key, val) => {
    filterHadler(key, val);
  };

  return (
    <>
      <p
        className="no-margin text-green has-font-weight font-change-animation"
        style={{ fontSize: fontResizerState["lowFont"] }}
      >
        {label}
      </p>
      <div className="filtering-content-box">
        {itemLists.map((each, idx) => (
          <div
            key={idx}
            className="d-flex align-items-center justify-content-between cursor-pointer filtering-content"
            onClick={() => filterContentClickHandler(label, each)}
          >
            <p
              className="no-margin text-dark-gray has-font-weight pad-5 font-change-animation"
              style={{ fontSize: fontResizerState["minFont"] }}
            >
              {each}
            </p>
            {checkValue.includes(each) && (
              <img
                src="/images/selected-image.png"
                className="w-10 mar-r-5"
                alt="Selected..."
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

const UserEntryView = ({ label }) => {
  const fontResizerState = useAppSelector((state) => state.globalFontResizer);

  return (
    <>
      <p
        className="no-margin text-green has-font-weight font-change-animation"
        style={{ fontSize: fontResizerState["lowFont"] }}
      >
        {label}
      </p>
      <input placeholder="-" className="filtering-input w-100" />
    </>
  );
};

export function HomeFilteringComponent({
  toCollapse,
  advanceSearchAndFilterShowHandler,
}) {
  const fontResizerState = useAppSelector((state) => state.globalFontResizer);

  const sourcesLists = [
    "All",
    "Pubmed",
    "Embase",
    "Google Scholar",
    "Cochrane Central",
  ];
  const countryLists = [
    "All",
    "United States",
    "United Kingdom",
    "France",
    "Germany",
    "Russia",
    "Australia",
  ];
  const languageLists = ["All", "English", "French", "Japanese"];
  const adverseEvents = ["All", "Yes", "No"];
  const textAvailability = ["All", "Free", "Paid"];
  const studyDesign = [
    "All",
    "Randomized Controlled Trial",
    "Non-Randomized Trial",
    "Case-Control Study",
    "Systemetic Review",
    "Cross-Sectional Study",
  ];
  const typeOfControl = [
    "All",
    "Active",
    "Placebo",
    "Active-Placebo",
    "No Therapy",
  ];
  const categoryOfTreatment = [
    "All",
    "First Time Therapy",
    "Consolidation Therapy",
    "Salvage Therapy",
  ];
  const gender = ["All", "Male", "Female"];

  const [multiSelectState, setmultiSelectState] = useState({
    Source: ["All"],
    Country: ["All"],
    Language: ["All"],
    "Adverse Event": ["All"],
    "Full-Text-Availability": ["All"],
    "Study Design": ["All"],
    "Type of Control": ["All"],
    "Category Of Treatment": ["All"],
    Gender: ["All"],
  });

  const filterResetHandler = () => {
    setmultiSelectState({
      ...multiSelectState,
      Source: ["All"],
      Country: ["All"],
      Language: ["All"],
      "Adverse Event": ["All"],
      "Full-Text-Availability": ["All"],
      "Study Design": ["All"],
      "Type of Control": ["All"],
      "Category Of Treatment": ["All"],
      Gender: ["All"],
    });
  };

  const filterContentClickHandler = (key, val) => {
    if (!multiSelectState[key].includes(val)) {
      if (val === "All") {
        setmultiSelectState({
          ...multiSelectState,
          [key]: [val],
        });
      } else {
        const notAllArr = multiSelectState[key].filter(
          (each) => each !== "All"
        );
        const newArr = [...notAllArr, val];
        setmultiSelectState({
          ...multiSelectState,
          [key]: newArr,
        });
      }
    } else {
      if (val === "All") {
        setmultiSelectState({
          ...multiSelectState,
          [key]: [],
        });
      } else {
        setmultiSelectState({
          ...multiSelectState,
          [key]: multiSelectState[key].filter((each) => each !== val),
        });
      }
    }
  };

  const filterSetHandler = () => {
    advanceSearchAndFilterShowHandler(toCollapse, 0, "smooth");
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between has-gray-border-bottom mar-15">
        <p
          className="text-green has-font-weight no-margin font-change-animation"
          style={{ fontSize: fontResizerState["midFont"] }}
        >
          BASIC FILTERS
        </p>
        <div>
          <Button
            hasExtraPad={false}
            text={"Clear All"}
            upperCaseText={false}
            btnHasRadius={true}
            btnHasImg={false}
            btnClickHandler={filterResetHandler}
            fontSize={fontResizerState["lowFont"]}
            imgUrl={""}
            loadingCase={false}
            hasMarginLeft={false}
            textCenter={false}
          />
          <Button
            hasExtraPad={false}
            text={"Apply"}
            upperCaseText={false}
            btnHasRadius={true}
            btnHasImg={false}
            btnClickHandler={filterSetHandler}
            fontSize={fontResizerState["lowFont"]}
            imgUrl={""}
            loadingCase={true}
            hasMarginLeft={true}
            textCenter={false}
          />
        </div>
      </div>
      <div className="row has-green-border-bottom mar-15">
        <div className="col-md-2 border-right-green filter-content-box-margin">
          <MultiSelectView
            label={"Source"}
            itemLists={sourcesLists}
            filterHadler={filterContentClickHandler}
            checkValue={multiSelectState["Source"]}
          />
        </div>
        <div className="col-md-2 border-right-green filter-content-box-margin">
          <MultiSelectView
            label={"Country"}
            itemLists={countryLists}
            filterHadler={filterContentClickHandler}
            checkValue={multiSelectState["Country"]}
          />
        </div>
        <div className="col-md-2 border-right-green filter-content-box-margin">
          <MultiSelectView
            label={"Language"}
            itemLists={languageLists}
            filterHadler={filterContentClickHandler}
            checkValue={multiSelectState["Language"]}
          />
        </div>
        <div className="col-md-2 border-right-green filter-content-box-margin">
          <MultiSelectView
            label={"Adverse Event"}
            itemLists={adverseEvents}
            filterHadler={filterContentClickHandler}
            checkValue={multiSelectState["Adverse Event"]}
          />
          <MultiSelectView
            label={"Full-Text-Availability"}
            itemLists={textAvailability}
            filterHadler={filterContentClickHandler}
            checkValue={multiSelectState["Full-Text-Availability"]}
          />
        </div>
        <div className="col-md-2 border-right-green filter-content-box-margin">
          <MultiSelectView
            label={"Study Design"}
            itemLists={studyDesign}
            filterHadler={filterContentClickHandler}
            checkValue={multiSelectState["Study Design"]}
          />
        </div>
        <div className="col-md-2 filter-content-box-margin">
          <UserEntryView label={"Author"} />
          <UserEntryView label={"Journal"} />
          <UserEntryView label={"Publication Year"} />
        </div>
      </div>
      <div className="row no-margin">
        <div className="col-md-6">
          <p
            className="no-margin text-green has-font-weight has-gray-border-bottom font-change-animation"
            style={{ fontSize: fontResizerState["midFont"] }}
          >
            STUDY INTERVENTION
          </p>
        </div>
        <div className="col-md-6 pad-l-0">
          <p
            className="no-margin text-green has-font-weight has-gray-border-bottom font-change-animation"
            style={{ fontSize: fontResizerState["midFont"] }}
          >
            BASELINE CHARACTARISTICS OF PATIENTS
          </p>
        </div>
      </div>
      <div className="row has-green-border-bottom mar-15">
        <div className="col-md-2 border-right-green filter-content-box-margin">
          <MultiSelectView
            label={"Type of Control"}
            itemLists={typeOfControl}
            filterHadler={filterContentClickHandler}
            checkValue={multiSelectState["Type of Control"]}
          />
        </div>
        <div className="col-md-2 border-right-green filter-content-box-margin">
          <MultiSelectView
            label={"Category Of Treatment"}
            itemLists={categoryOfTreatment}
            filterHadler={filterContentClickHandler}
            checkValue={multiSelectState["Category Of Treatment"]}
          />
        </div>
        <div className="col-md-2 border-right-green filter-content-box-margin">
          <UserEntryView label={"Experimental Intervention"} />
          <UserEntryView label={"Intervention Control"} />
          <UserEntryView label={"Outcomes"} />
        </div>
        <div className="col-md-2 border-right-green filter-content-box-margin">
          <UserEntryView label={"Age"} />
          <MultiSelectView
            label={"Gender"}
            itemLists={gender}
            filterHadler={filterContentClickHandler}
            checkValue={multiSelectState["Gender"]}
          />
        </div>
        <div className="col-md-2 border-right-green filter-content-box-margin">
          <UserEntryView label={"Diagnosis"} />
          <UserEntryView label={"Extent of Disease"} />
          <UserEntryView label={"Organ Involvement"} />
        </div>
        <div className="col-md-2 filter-content-box-margin">
          <UserEntryView label={"Stage"} />
          <UserEntryView label={"Previous Treatment"} />
          <UserEntryView label={"Performance Status"} />
        </div>
      </div>
    </>
  );
}
