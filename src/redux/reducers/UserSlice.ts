import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { storageSet } from "../../localStorageHelpers/localStorageActions";
import { doUserLogin } from "../actions/UserActions";

type InitialStateProps = {
    isLoggedIn : boolean,   
    loading : boolean,    
}

type LoggedInOrNotProps = {
    isLoggedIn : boolean
}

const initialState : InitialStateProps = {
    isLoggedIn : false,    
    loading : false,      
}

const UserSlice = createSlice({
    name:"userDetails",
    initialState,
    reducers : {
        loggedInOrNot : (state,action : PayloadAction<LoggedInOrNotProps>) => {
            return{
                ...state,
                isLoggedIn : action.payload["isLoggedIn"],                
            }
        }        
    },
    extraReducers : (builder) => {
        builder.addCase(doUserLogin.pending,(state)=>{                  
            state.loading = true
        })
        builder.addCase(doUserLogin.fulfilled,(state,action : PayloadAction<any>) => {                       
            if(action["payload"].status === "success"){
                state.loading = false
                state.isLoggedIn = true 
                storageSet("isLoggedIn", true);
                storageSet("token", action["payload"].token);                               
            }else{
                state.loading = false
                state.isLoggedIn = false                              
                alert(action["payload"].msg)
            }
        })        
        builder.addCase(doUserLogin.rejected,(state) => {        
            state.loading = false
            state.isLoggedIn = false            
            alert("Fetching Error!!!!")
        })
    }
})

export const {loggedInOrNot} = UserSlice.actions;
export default UserSlice.reducer;