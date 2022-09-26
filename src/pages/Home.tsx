import React from "react";
import { NavBar } from "../components/common/NavBar";
import { SideMenu } from "../components/common/SideMenu";
import { ArticlesViewContainer } from "../components/homePage/ArticlesViewContainer";
import { SearchSection } from "../components/common/SearchSection";
import AlertModal from "../components/common/AlertModal";


export function Home() {
  return (
    <div className="row no-margin position-relative">
      <div className="col-md-2 no-padding h-100vh">
        <SideMenu />
      </div>
      <div className="col-md-10 no-padding h-100vh">
        <NavBar />
        <SearchSection />
        <div className="white-background">
          <ArticlesViewContainer />
        </div>
        <div>
          
        </div>
        <AlertModal />
      </div>
    </div>
  );
}
