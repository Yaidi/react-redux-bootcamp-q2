import {createReducer} from "@reduxjs/toolkit";
import {loginUser, logoutUser} from "./actions";

export const initialState = {
    loggedIn: false
}

export const UserReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(loginUser, (state, action) => {
            return ({loggedIn: true});
        })
        .addCase(logoutUser,(state, action) => {
            return ({loggedIn: false});
        })
});