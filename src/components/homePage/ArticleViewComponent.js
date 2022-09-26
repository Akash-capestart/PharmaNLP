import React, { useState } from "react";
import { ArticleViewButtonSection } from "./ArticleViewButtonSection";
import { ArticlesListsSection } from "./ArticlesListsSection";
import { FullTextViewSection } from "./FullTextViewSection";
import { NewArticles } from "../common/NewArticles";

export function ArticleViewComponent({    
  articleViewHeight,  
  toCollapse,
  advanceSearchAndFilterShowHandler
}) {  
  const newArticles = NewArticles

  const [articleViewContainerState, setarticleViewContainerState] = useState({
    fullTextShow: true,
    selectedArticles: [],
    articlesExpand: false,    
    activeArticleId: null,
    activeArticle: null,
  });

  const metaDataClickHandler = () => {
    setarticleViewContainerState(prevVal=>({
      ...prevVal,
      fullTextShow: !prevVal["fullTextShow"],
    }));
  };

  const articleSelectHandler = (val) => {
    if (articleViewContainerState["selectedArticles"].includes(val)) {
      const notValArr = articleViewContainerState["selectedArticles"].filter(
        (each) => each !== val
      );
      setarticleViewContainerState({
        ...articleViewContainerState,
        selectedArticles: notValArr,
      });
    } else {
      setarticleViewContainerState({
        ...articleViewContainerState,
        selectedArticles: [
          ...articleViewContainerState["selectedArticles"],
          val,
        ],
      });
    }
  };

  const articlesExpandHandler = () => {
    setarticleViewContainerState(prevVal=>({
      ...prevVal,
      articlesExpand: !prevVal["articlesExpand"],
    }));
  };

  const singleArticleClickHandler = (id) => {  
    advanceSearchAndFilterShowHandler(toCollapse,150,"smooth")      
    setarticleViewContainerState({
      ...articleViewContainerState,      
      selectedArticles: [],
      articlesExpand: false,
      activeArticleId: id ? id : null,
      activeArticle: id ? newArticles["data"].filter((each) => each.refId === id) : null,
      moveToFolderModalShow: false,
    });
  };

  const articleFullTextViewHandler = (id) => {
    advanceSearchAndFilterShowHandler(toCollapse,150,"smooth")      
    setarticleViewContainerState({
      ...articleViewContainerState,
      activeArticleId: id,
      activeArticle: newArticles["data"].filter((each) => each.refId === id),
    });
  };

  return (
    <>
      <ArticleViewButtonSection
        articlesExpandHandler={articlesExpandHandler}        
        singleArticleView={articleViewContainerState['activeArticleId'] ? true : false}
        fullTextShow={articleViewContainerState["fullTextShow"]}
        metaDataClickHandler={metaDataClickHandler}
      />
      {!articleViewContainerState['activeArticleId'] ? (
        <ArticlesListsSection          
          newArticles={newArticles}         
          articlesExpand={articleViewContainerState["articlesExpand"]}
          selectedArticles={articleViewContainerState["selectedArticles"]}
          articleSelectHandler={articleSelectHandler}
          singleArticleClickHandler={singleArticleClickHandler}      
        />
      ) : (
        <FullTextViewSection
          articleViewHeight={articleViewHeight}
          newArticles={newArticles} 
          activeArticleId={articleViewContainerState["activeArticleId"]}
          activeArticle={articleViewContainerState["activeArticle"][0]}
          selectedArticles={articleViewContainerState["selectedArticles"]}
          fullTextShow={articleViewContainerState["fullTextShow"]}
          articleSelectHandler={articleSelectHandler}
          articleFullTextViewHandler={articleFullTextViewHandler}
          singleArticleClickHandler={singleArticleClickHandler}                
        />
      )}
    </>
  );
}
