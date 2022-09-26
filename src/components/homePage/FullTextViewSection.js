import React from "react";
import { useAppSelector } from "../../redux/Hooks";
import { MetaDataComponent } from "./MetaDataComponent";

export function FullTextViewSection({
  articleViewHeight,
  newArticles,  
  activeArticleId,
  selectedArticles,
  articleSelectHandler,
  articleFullTextViewHandler,
  singleArticleClickHandler,
  fullTextShow,
  activeArticle,
}) {
  const fontResizerState = useAppSelector((state) => state.globalFontResizer);
  
  return (
    <>
      <div className="row" style={{ margin: "5px 0px 0px 0px" }}>
        <div
          className="col-md-4 no-padding overflow-auto"
          style={{ maxHeight: articleViewHeight }}
        >
          {newArticles["data"].map((article, idx) => {
            return (
              <div
                key={idx}
                className={`has-gray-border-bottom pad-10 ${
                  activeArticleId === article.refId ? "article-active" : ""
                }`}
              >
                <div className="d-flex align-items-center">
                  <div className="cursor-pointer">
                    {selectedArticles.includes(article.refId) ? (
                      <img
                        className="w-20"
                        src="/images/circle-selected-image.png"
                        onClick={() => articleSelectHandler(article.refId)}
                        alt="Selectable..."
                      />
                    ) : (
                      <img
                        className="w-20"
                        src="/images/selectable-image.png"
                        onClick={() => articleSelectHandler(article.refId)}
                        alt="Selectable..."
                      />
                    )}
                  </div>
                  <p
                    className="no-margin has-font-weight cursor-pointer pad-horizontal-15 font-change-animation"
                    style={{ fontSize: fontResizerState["midFont"] }}
                    onClick={() => articleFullTextViewHandler(article.refId)}
                  >
                    {article.title}
                  </p>
                </div>
                <div
                  style={{ paddingLeft: 35 }}
                  className="d-flex align-items-center justify-content-between"
                >
                  <a href={article.fullTextUrl} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <span
                      className="text-green has-font-weight font-change-animation"
                      style={{ fontSize: fontResizerState["lowFont"] }}
                    >
                      <img
                        className="w-15 mar-r-5"
                        src="/images/view-source-image.png"
                        alt="Source..."
                      />
                      View Source
                    </span>
                  </a>
                  <span
                    className="low-font text-dark-gray font-change-animation"
                    style={{ fontSize: fontResizerState["lowFont"] }}
                  >
                    {article["publicationYear"]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        {fullTextShow ? (
          <div
            className="col-md-8 overflow-auto"
            style={{ paddingRight: 0, maxHeight: articleViewHeight }}
          >
            <div className="d-flex align-items-center justify-content-between">
              <p
                className="has-font-weight font-change-animation"
                style={{ fontSize: fontResizerState["midFont"] }}
              >
                {activeArticle.title}
              </p>
              <img
                onClick={() => singleArticleClickHandler(null, 0)}
                className="cursor-pointer w-20"
                src="/images/cross-image.png"
                alt="Close..."
              />
            </div>
            <p
              className="has-font-weight font-change-animation"
              style={{ fontSize: fontResizerState["midFont"] }}
            >
              Abstract
            </p>
            <p
              className="font-change-animation"
              style={{ fontSize: fontResizerState["lowFont"] }}
            >
              {activeArticle.abstractData}
            </p>
          </div>
        ) : (
          <MetaDataComponent
            activeArticle={activeArticle}
            articleViewHeight={articleViewHeight}
            metaDataCloseHandler={singleArticleClickHandler}
          />
        )}
      </div>
    </>
  );
}
