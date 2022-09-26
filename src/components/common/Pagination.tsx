import React from "react";
import { useState } from "react";
import { FectallArticles, Fetchbykeywords } from "../../redux/actions/ArticlesActions";
import { useAppSelector, useAppDispatch } from "../../redux/Hooks";
import { addcurrentpage } from "../../redux/reducers/ArticleSlice";

const Pagination = () => {
  // const [activepage,setActivepage]=useState("")
  const { currentpage,searchkeyword } = useAppSelector((state) => state.articleSlice);

  console.log("pagination currentpage", currentpage);

  const dispatch = useAppDispatch();
  let btnnumber = 4;
  let btnarray = [];
  for (let i = 0; i < btnnumber; i++) {
    btnarray.push(i);
  }
console.log("btnarray",btnarray);
  const changeThePage = async(noofbutton: number) => {
    // alert(noofbutton)
    // console.log("noofbutton",noofbutton)
    if(searchkeyword)
    {
      dispatch(
        Fetchbykeywords({ endUrl: `/article/getArticlesByVal?value=${searchkeyword}&page=${noofbutton}` }))
    }
    else{
      dispatch(
        FectallArticles({ endUrl: `/article/getAllArticles?page=${noofbutton}` })
      );
    }
    
  };

  const decrementpage = async() => {
    if(currentpage>0)
    {
        console.log("dec currentpage", currentpage);
        let deconepage = currentpage - 1;
        dispatch(addcurrentpage({ currentpage: deconepage }));
        changeThePage(deconepage);
    }
    // else if(currentpage===0)
    // {
    //   console.log("zero currentpage", currentpage);
    //   dispatch(addcurrentpage({ currentpage: currentpage }));
    //   changeThePage(currentpage);
    // }

  };

  const incrementpage = async() => {
    if(currentpage<btnnumber)
    {
        console.log("inc currentpage", currentpage);
        let addonepage = currentpage + 1;
        dispatch(addcurrentpage({ currentpage: addonepage }));
        changeThePage(addonepage);
    }
    else if(currentpage === btnnumber-1)
    {
      console.log("last currentpage", currentpage);
      dispatch(addcurrentpage({ currentpage: currentpage }));
        changeThePage(currentpage);
    }
  
  };

  return (
    <div>
      {/* <button onClick={()=>changeThePage(1)}>1</button> */}
      <button
        style={{ width: "50px", height: "30px", margin: "5px",border:"none" }}
        onClick={decrementpage}
      >
        Back
      </button>
      {btnarray.map((m, i) => {
        return (
        
            <button
              style={{ width: "30px", height: "30px", margin: "5px",border:"none" }}
              onClick={() => changeThePage(m)}
              key={i}
            >
              {m+1}
            </button>
        
        );
      })}
      <button
        style={{ width: "50px", height: "30px", margin: "5px",border:"none" }}
        onClick={incrementpage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
