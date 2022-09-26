import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type InitialStateProps = {
    showAlert : boolean,
    alertMsg : string
}

const initialState : InitialStateProps = {
    showAlert : false,
    alertMsg : ''
}

const GlobalAlertSlice = createSlice({
    name:"globalAlertSlice",
    initialState,
    reducers:{
        successAlertShow : (state,action:PayloadAction<InitialStateProps>) => {
            return{
                ...state,
                showAlert : action.payload["showAlert"],
                alertMsg : action.payload["alertMsg"]
            }
        }
    }
})

export const {successAlertShow} = GlobalAlertSlice.actions;
export default GlobalAlertSlice.reducer;