import {createAsyncThunk} from "@reduxjs/toolkit";
import { makeOrder} from "../../request/https";

export const orderFetch = createAsyncThunk('[Cart UI] Order', (history) => {
    return makeOrder().then((res) => {
        history.push('/');
        return res;
    })
});