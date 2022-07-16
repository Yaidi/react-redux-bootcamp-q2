import {createReducer} from "@reduxjs/toolkit";
import {categoriesFetch, findProductFetch, productsFetch} from "./async";
import {status, statusEnum} from "../../utils/const";
import {showFavoritesProducts} from "../favorites/actions";
import product from "../../components/Product";
import {productsFavorites} from "../cart/util.reducer";

const initialState = {
    products: [],
    categories: [],
    status: null
}

export const ProductsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(productsFetch.pending, (state) => {
            return {...state, status: statusEnum.pending}
        })
        .addCase(productsFetch.fulfilled, (state, {payload}) => {
            return ({...state, products: payload.items, status: statusEnum.completed})
        })
        .addCase(categoriesFetch.fulfilled, (state, {payload}) => {
            return ({ ...state, categories: payload})
        })
        .addCase(findProductFetch.fulfilled, (state, {payload}) => {
            return ({...state, products: payload.items})
        })
        .addCase(showFavoritesProducts, (state, {payload}) => {
            console.log('show fav')
            return ({...state, products: productsFavorites(state.products, payload)})
        })
});