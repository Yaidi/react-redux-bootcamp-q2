import {createReducer} from "@reduxjs/toolkit";
import { removeFavorites} from "../cart/util.reducer";
import {addToFavorites, removeToFavorites} from "./actions";

const initialState = {
    favorites: []
}

export const FavoritesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addToFavorites, (state, {payload}) => {
            return ({favorites: [...state.favorites, payload]});
        })
        .addCase(removeToFavorites,(state, {payload}) => {
            return ({favorites: removeFavorites(state.favorites, payload)});
        })
});