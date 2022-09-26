import React, { useState, useRef, useEffect } from "react";
import { useAppSelector,useAppDispatch } from "../../redux/Hooks";
import { Button } from "../common/Button";
import { AdvanceSearchComponent } from "./AdvanceSearchComponent";
import { ArticlesCountDisplayer } from "./ArticlesCountDisplayer";
import { ArticleViewComponent } from "./ArticleViewComponent";
import { HomeFilteringComponent } from "./HomeFilteringComponent";
import { FectallArticles } from "../../redux/actions/ArticlesActions";
// import { Loader } from "../components/common/Loader";


export function ArticlesViewContainer() {
  const fontResizerState = useAppSelector((state) => state.globalFontResizer);
  const { articleViewContainerLoading, articles } = useAppSelector((state) => state.articleSlice); 
  const dispatchEvent=useAppDispatch()
  const [articlesViewContainerState, setarticlesViewContainerState] = useState({
    advanceSearchContentHeight: 0,
    filteringContentHeight: 0,
  });

  const { innerHeight } = window;

  const advanceSearchContentRef = useRef(null);
  const filteringContentRef = useRef(null);
  const scrollToTopRef = useRef(null);

  const advanceSearchAndFilterShowHandler = (
    key,
    howMuchToScrollTop,
    scrollBehaviour
  ) => {
    if (key === "advanceSearchShow") {
      setarticlesViewContainerState({
        ...articlesViewContainerState,
        advanceSearchContentHeight:
          articlesViewContainerState.advanceSearchContentHeight === 0
            ? advanceSearchContentRef.current.scrollHeight + 20
            : 0,
        filteringContentHeight: 0,
      });
    } else if (key === "filteringShow") {
      setarticlesViewContainerState({
        ...articlesViewContainerState,
        filteringContentHeight:
          articlesViewContainerState.filteringContentHeight === 0
            ? filteringContentRef.current.scrollHeight + 20
            : 0,
        advanceSearchContentHeight: 0,
      });
    }
    if (scrollBehaviour === "smooth") {
      setTimeout(() => {
        scrollToTopHandler(howMuchToScrollTop, scrollBehaviour);
      }, 400);
    } else {
      scrollToTopHandler(howMuchToScrollTop, scrollBehaviour);
    }
  };

  const scrollToTopHandler = (howMuchToScrollTop, scrollBehaviour) => {
    scrollToTopRef.current.scrollTo({
      top: howMuchToScrollTop,
      behavior: scrollBehaviour,
    });
  };

  const collapseHandler = () => {
    let toCollapse;
    if (
      articlesViewContainerState["advanceSearchContentHeight"] === 0 &&
      articlesViewContainerState["filteringContentHeight"] === 0
    ) {
      toCollapse = "";
    } else {
      toCollapse =
        articlesViewContainerState["advanceSearchContentHeight"] !== 0
          ? "advanceSearchShow"
          : "filteringShow";
    }
    return toCollapse;
  };


  useEffect(()=>{
    dispatchEvent(FectallArticles({ endUrl: "/article/getAllArticles?page=0" }))
  },[])

  // console.log("this is the data in viewcon",data)
  return (
    <>
      <div className="d-flex align-items-center gray-background pad-b-15">
        <Button
          hasExtraPad={false}
          text={"Advanced Search"}
          upperCaseText={false}
          btnHasRadius={true}
          btnHasImg={true}
          btnClickHandler={() =>
            advanceSearchAndFilterShowHandler("advanceSearchShow", 0, "auto")
          }
          fontSize={fontResizerState["lowFont"]}
          imgUrl={"./images/advance-search-image.png"}
          loadingCase={false}
          hasMarginLeft={true}
          textCenter={false}
        />
        <Button
          hasExtraPad={false}
          text={"Filter"}
          upperCaseText={false}
          btnHasRadius={true}
          btnHasImg={true}
          btnClickHandler={() =>
            advanceSearchAndFilterShowHandler("filteringShow", 0, "auto")
          }
          fontSize={fontResizerState["lowFont"]}
          imgUrl={"./images/filter-image.png"}
          loadingCase={false}
          hasMarginLeft={true}
          textCenter={false}
        />
        <Button
          hasExtraPad={false}
          text={"Import"}
          upperCaseText={false}
          btnHasRadius={true}
          btnHasImg={true}
          fontSize={fontResizerState["lowFont"]}
          imgUrl={"./images/import-image.png"}
          loadingCase={false}
          hasMarginLeft={true}
          textCenter={false}
        />
      </div>
      <div
        className="advance-search-container"
        style={{ maxHeight: innerHeight - 180 }}
        ref={scrollToTopRef}
      >
        <div
          ref={advanceSearchContentRef}
          className="smooth-height-animation"
          style={{
            height: articlesViewContainerState["advanceSearchContentHeight"],
          }}
        >
          <AdvanceSearchComponent
            toCollapse={collapseHandler()}
            advanceSearchAndFilterShowHandler={
              advanceSearchAndFilterShowHandler
            }
          />
        </div>
        <div
          ref={filteringContentRef}
          className="smooth-height-animation"
          style={{
            height: articlesViewContainerState["filteringContentHeight"],
          }}
        >
          <HomeFilteringComponent
            toCollapse={collapseHandler()}
            advanceSearchAndFilterShowHandler={
              advanceSearchAndFilterShowHandler
            }
          />
        </div>
        <div className="pad-15">
          <ArticlesCountDisplayer />
        </div>
        <div style={{ padding: "0px 15px 15px 15px" }}>
            <ArticleViewComponent
              articleViewHeight={innerHeight - 180}
              toCollapse={collapseHandler()}
              advanceSearchAndFilterShowHandler={
                advanceSearchAndFilterShowHandler
              }
            />
          </div>
        {/* {
          articles.length>0?
          
            :

<div className="d-flex align-items-center justify-content-center w-100 h-100">
<Loader
  size={60}
  activeColor={"#2BB24C"}
  inActiveColor={"#FFFFFF"}
  loaderBarWidth={"5px"}
/>            
</div> 

        } */}
      
      </div>
    </>
  );
}
