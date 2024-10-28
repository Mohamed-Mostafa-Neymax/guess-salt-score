import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import { guessReducer } from "./guess-slice";

const getStore = () => configureStore({
    reducer: {
        guessReducer
    }
});

type AppStore = ReturnType<typeof getStore>;

export default getStore;
export const useAppSelector = useSelector.withTypes<ReturnType<AppStore['getState']>>();
export const useAppDispatch = useDispatch.withTypes<AppStore['dispatch']>();