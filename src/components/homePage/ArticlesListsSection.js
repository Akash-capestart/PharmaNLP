import React, { useRef } from "react";
import { useAppSelector } from "../../redux/Hooks";
import { FectallArticles } from "../../redux/actions/ArticlesActions";
import Pagination from "../common/Pagination";

export function ArticlesListsSection({
  newArticles,
  selectedArticles,
  articlesExpand,
  articleSelectHandler,
  singleArticleClickHandler,
  scrollHeight,
}) {

  // let data=FectallArticles
  const fontResizerState = useAppSelector((state) => state.globalFontResizer);
  const articledata=useAppSelector((state)=> state.articleSlice.data);
  
  console.log("fajdshfkajh",articledata)
  const articleContentHeightRef = useRef(null);
  // console.log("data from the listsec",data)

  return (
    <>
      {articledata && articledata["data"].map((newArticle, idx) => {
        return (
          <div
            key={idx}
            className="row no-margin has-green-border-bottom pad-15"
          >
            <div className="col-md-10 no-padding">
              <div className="d-flex align-items-center">
                <div className="cursor-pointer">
                  {selectedArticles.includes(newArticle.refId) ? (
                    <img
                      className="w-20"
                      src="/images/circle-selected-image.png"
                      onClick={() => articleSelectHandler(newArticle.refId)}
                      alt="Selectable..."
                    />
                  ) : (
                    <img
                      className="w-20"
                      src="/images/selectable-image.png"
                      onClick={() => articleSelectHandler(newArticle.refId)}
                      alt="Selectable..."
                    />
                  )}
                </div>
                <p
                  className="no-margin has-font-weight cursor-pointer pad-horizontal-15 font-change-animation"
                  style={{ fontSize: fontResizerState["midFont"] }}
                  onClick={() =>
                    singleArticleClickHandler(newArticle.refId, scrollHeight)
                  }
                >
                  {
                   console.log("Introduction",newArticle.title)
                  }
                  {newArticle.title}
                </p>
              </div>
              <div
                className="article-content-box accordian-height-animation"
                ref={articleContentHeightRef}
                style={{
                  maxHeight: articlesExpand
                    ? articleContentHeightRef.current.scrollHeight
                    : 60,
                }}
              >
                <p
                  className="no-margin text-dark-gray article-content-view font-change-animation"
                  style={{ fontSize: fontResizerState["lowFont"] }}
                >
                  <span className="has-font-weight text-black">
                    Introduction :{" "}
                  </span>
                  {/* {
                    console.log("Introduction",newArticle.abstractData)
                  } */}
                  {newArticle.abstractData}
                </p>
              </div>
              <a href={newArticle.fullTextUrl} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <span
                  className="text-green has-font-weight cursor-pointer font-change-animation"
                  style={{
                    fontSize: fontResizerState["lowFont"],
                    paddingLeft: 50,
                  }}
                >
                  View Source...
                </span>
              </a>
            </div>
            <div className="col-md-2 no-padding">
              <div className="d-flex align-items-center justify-content-evenly mar-b-15">
                <span
                  className="text-dark-gray font-change-animation"
                  style={{ fontSize: fontResizerState["midFont"] }}
                >
                  {newArticle["publicationYear"]}
                </span>
                <img
                  className="w-20"
                  src="/images/cloud-download-image.png"
                  alt="Cloud..."
                />
                <img
                  className="h-15"
                  src="/images/label-image.png"
                  alt="label..."
                />
              </div>
              <p
                className="w-75 text-center m-auto text-dark-gray adverse-article-status has-font-weight font-change-animation"
                style={{ fontSize: fontResizerState["lowFont"] }}
              >
                Adverse Event
              </p>
              <div className="h-15"></div>
              <p
                className="w-75 text-center m-auto text-dark-gray adverse-article-status has-font-weight font-change-animation"
                style={{ fontSize: fontResizerState["lowFont"] }}
              >
                D1,A1,P1,R1
              </p>
            </div>
            <div>
              
            </div>
          </div>
          
        );
      })}
      <div style={{textAlign:"center"}}>
      <Pagination/>

      </div>
    </>
  );
}
