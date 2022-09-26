import React from "react";
import { useAppDispatch,useAppSelector } from "../../redux/Hooks";
import { Button } from "../common/Button";
import { successAlertShow } from "../../redux/reducers/GlobalAlertSlice";

type PublishNewsLetterModalProps = {
  closeModalHandler : Function;
}

export function PublishNewsLetterModal({ closeModalHandler } : PublishNewsLetterModalProps) {
  const fontResizerState = useAppSelector((state) => state.globalFontResizer);
  const dispatch = useAppDispatch();  

  const modalClickHandler = () => {
    dispatch(
      successAlertShow({
        showAlert: true,
        alertMsg: "Published Successfully!!!",
      })
    );
    closeModalHandler("newsLetterModal");
  };

  return (
    <div className="alert-box position-absolute">
      <div className="d-flex align-items-center">
        <img
          src="/images/publish-news-letter-image.png"
          className="icon-std"
          alt="Save..."
        />
        <span
          className="has-font-weight pad-l-10 font-change-animation"
          style={{ fontSize: fontResizerState["midFont"] }}
        >
          PUBLISH NEWSLETTER
        </span>
      </div>
      <div className="row no-margin align-items-center pad-t-15">
        <div className="col-md-5 no-padding">
          <p
            className="no-margin font-change-animation"
            style={{ fontSize: fontResizerState["lowFont"] }}
          >
            Title
          </p>
        </div>
        <div className="col-md-7 no-padding">
          <input className="w-100 modal-field" />
        </div>
      </div>      
      <div className="row no-margin align-items-center pad-t-15">
        <div className="col-md-5 no-padding">
          <p
            className="no-margin font-change-animation"
            style={{ fontSize: fontResizerState["lowFont"] }}
          >
            Recipients
          </p>
        </div>
        <div className="col-md-7 no-padding">
          <input className="w-100 modal-field" />
        </div>
      </div>
      <div className="row no-margin align-items-center pad-t-15">
        <div className="col-md-5 no-padding">
          <p
            className="no-margin font-change-animation"
            style={{ fontSize: fontResizerState["lowFont"] }}
          >
            Message
          </p>
        </div>
        <div className="col-md-7 no-padding">
          <textarea className="w-100 modal-field" />
        </div>
      </div>
      <span
        className="font-change-animation"
        style={{ fontSize: fontResizerState["lowFont"] }}
      >
        Studies selected :
        <span
          className="text-green font-change-animation"
          style={{ fontSize: fontResizerState["lowFont"] }}
        >
          {" "}
          5
        </span>
      </span>
      <div className="text-end pad-t-15">
        <Button
          hasExtraPad={false}
          text={"Send"}
          upperCaseText={false}
          btnHasRadius={false}
          btnHasImg={false}
          btnClickHandler={modalClickHandler}
          fontSize={fontResizerState["lowFont"]}
          imgUrl={""}
          loadingCase={true}
          hasMarginLeft={false}
          textCenter={false}
        />
      </div>
    </div>
  );
}
