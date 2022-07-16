import {createReducer} from "@reduxjs/toolkit";
import {orderFetch} from "../cart/async";

const initialState = {
    orders: []
}

export const OrdersReducer = createReducer(initialState, builder => {
    builder.addCase(orderFetch.fulfilled, (state, action) => {
        return ({orders: [...state.orders, action.payload]})
    })
})