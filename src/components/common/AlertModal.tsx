import React,{useEffect} from 'react'
import { useAppDispatch,useAppSelector } from '../../redux/Hooks';
import { successAlertShow } from '../../redux/reducers/GlobalAlertSlice';

export default function AlertModal() {
  
  const globalAlertState = useAppSelector((state) => state.globalAlert);  
  const dispatch = useAppDispatch()

  useEffect(() => {    
    const alertHideHandler = () => {
        setTimeout(() => {
            dispatch(successAlertShow({
                showAlert : false,
                alertMsg : ""
            }))
        },2000)
    }
    if(globalAlertState["showAlert"]){
        alertHideHandler()
    }
  }, [dispatch,globalAlertState])      

  return (    
    <div className={`pad-15 position-fixed common-alert-box has-border-radius-5 ${globalAlertState["showAlert"] && "common-alert-box-in-animation"}`}>
        <p className="no-margin">{globalAlertState["alertMsg"]}</p>
    </div>    
  )
}
