import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type InitialStateProps = {
  minFont: number,
  lowFont: number,
  midFont: number,
  highFont: number
}

type FontResizeProps = {
  fontValue: number
}

const initialState : InitialStateProps = {
  minFont: 11,
  lowFont: 13,
  midFont: 15,
  highFont: 17,
};

const GlobalFontResizingSlice = createSlice({
  name: "globalFontResizer",
  initialState,
  reducers: {
    fontSizeIncrement: (state, action:PayloadAction<FontResizeProps>) => {
      return {
        ...state,
        minFont: state["minFont"] + action.payload["fontValue"],
        lowFont: state["lowFont"] + action.payload["fontValue"],
        midFont: state["midFont"] + action.payload["fontValue"],
        highFont: state["highFont"] + action.payload["fontValue"]
      };
    },
    fontSizeDecrement: (state, action:PayloadAction<FontResizeProps>) => {
      return {
        ...state,
        minFont: state["minFont"] - action.payload["fontValue"],
        lowFont: state["lowFont"] - action.payload["fontValue"],
        midFont: state["midFont"] - action.payload["fontValue"],
        highFont: state["highFont"] - action.payload["fontValue"],
      };
    },
  },  
});

export const { fontSizeIncrement, fontSizeDecrement } = GlobalFontResizingSlice.actions;
export default GlobalFontResizingSlice.reducer;
