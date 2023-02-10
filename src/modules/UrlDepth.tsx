import { createAction, createReducer } from "@reduxjs/toolkit";

export const prevUrlDepth = createAction<string>("urlDepth");

const initialState = "next";

export default createReducer(initialState, {
    urlDepth: (state, action) => {
        return action.payload;
    }
});
