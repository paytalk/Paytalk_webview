import {
    Action,
    combineReducers,
    configureStore,
    ThunkAction
} from "@reduxjs/toolkit";
import logger from "redux-logger";

import { useDispatch } from "react-redux";

const reducer = combineReducers({});

const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
