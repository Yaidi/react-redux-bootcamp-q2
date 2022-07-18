import {createAsyncThunk} from "@reduxjs/toolkit";
import {GetProducts} from "./actions";
import {getCategories, getProducts} from "../../request/https";

export const productsFetch = createAsyncThunk(GetProducts().type, () => {
    return getProducts().then((res) => {
        return res;
    })
});
export const findProductFetch = createAsyncThunk('[Products UI] Find Product', (text) => {
    return getProducts(text).then(res => res);
})
export const categoriesFetch = createAsyncThunk('[Products UI] Get Categories', () => {
    return getCategories().then(res => {
        return res;
    });
})