import "./css/index.css";
import "./css/NavBar.css";
import "./css/AdvanceSearch.css";
import "./css/SideMenu.css";
import "./css/Login.css";
import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch,useAppSelector } from "./redux/Hooks";
import { storageGet } from "./localStorageHelpers/localStorageActions";
import { loggedInOrNot } from "./redux/reducers/UserSlice";
import { AppRoutes } from "./route/AppRoutes";

function App() {  
  const userDetailsState = useAppSelector((state) => state.userDetails);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  let isLoggedIn = storageGet("isLoggedIn");
  const hasAuth = isLoggedIn && userDetailsState["isLoggedIn"] ? true : false;  
  const [routesReady, setroutesReady] = useState(false)  

  useEffect(() => {    
    setroutesReady(true)
    if (isLoggedIn && !userDetailsState["isLoggedIn"]) { // if the isLoggedIn status is stored in local storage this checks the stored token is valid by sent it to the backend.            
      dispatch(
        loggedInOrNot({
          isLoggedIn: true,
        })
      );
    }    
  }, [navigate, userDetailsState, dispatch, isLoggedIn]);  

  return (
    <div className="gray-background position-relative">      
      {routesReady && // This condition is used to prevent the flikering effect of login page...
        <AppRoutes hasAuth={hasAuth} />
      }
    </div>
  );
}

export default App;
