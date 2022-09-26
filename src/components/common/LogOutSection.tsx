import React,{useState} from "react";
import { useAppDispatch } from "../../redux/Hooks";
import { storageRemove } from "../../localStorageHelpers/localStorageActions";
import { useNavigate } from 'react-router-dom';
import { loggedInOrNot } from "../../redux/reducers/UserSlice";

export function LogOutSection() {

  const [logOutBoxShow, setlogOutBoxShow] = useState(false)
  const dispatch = useAppDispatch();  
  const navigate = useNavigate() 

  const logoutClickHandler = () => {
    dispatch(loggedInOrNot({
        isLoggedIn : false
    }))
    storageRemove("isLoggedIn");
    storageRemove("token")
    navigate("/login")
  };

  return (
    <div className="position-relative">
      <img
        src="/images/user-image.png"
        className="cursor-pointer w-20"
        alt="User..."
        onClick={() => setlogOutBoxShow(prevVal => !prevVal)}
      />
      {logOutBoxShow && (
        <div className="logout-box pad-15 position-absolute d-flex align-items-center justify-content-between cursor-pointer" onClick={()=>logoutClickHandler()}>
            <img src="/images/logout-image.png" alt="Logout..." className="w-20"/>
            <p className="no-margin text-light-gray pad-l-10">Logout</p>
        </div>)
      }
    </div>
  );
}
