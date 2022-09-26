import {useDispatch,useSelector, TypedUseSelectorHook} from "react-redux"
import type {RootState, AppDispatch} from "./Store"

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()