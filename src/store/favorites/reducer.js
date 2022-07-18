import {createReducer} from "@reduxjs/toolkit";
import { removeFavorites} from "../cart/util.reducer";
import {addToFavorites, getFavoritesProducts, removeToFavorites} from "./actions";
import {storageKeys} from "../../utils/const";

const initialState = {
    favorites: []
}

export const FavoritesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addToFavorites, (state, {payload}) => {
            localStorage.setItem(storageKeys.favorites, [...state.favorites, payload]);
            return ({favorites: [...state.favorites, payload]});
        })
        .addCase(removeToFavorites,(state, {payload}) => {
            localStorage.setItem(storageKeys.favorites, removeFavorites(state.favorites, payload))
            return ({favorites: removeFavorites(state.favorites, payload)});
        })
        .addCase(getFavoritesProducts, (state, {payload}) => {
            return ({favorites: payload})
        })
});