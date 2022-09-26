import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ArticleSlice from "./reducers/ArticleSlice";
import GlobalAlertSlice from "./reducers/GlobalAlertSlice";
import GlobalFontResizingSlice from "./reducers/GlobalFontResizingSlice";
import UserSlice from "./reducers/UserSlice";

const reducer = combineReducers({
  globalFontResizer: GlobalFontResizingSlice,
  userDetails : UserSlice,
  globalAlert : GlobalAlertSlice,
  articleSlice:ArticleSlice
})

export const store = configureStore({
  reducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
