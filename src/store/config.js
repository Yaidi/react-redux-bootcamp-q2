import {configureStore} from "@reduxjs/toolkit";
import {ProductsReducer} from "./products/reducer";
import {CartReducer} from "./cart/reducer";
import {FavoritesReducer} from "./favorites/reducer";
import {UserReducer} from "./user/reducer";
import {OrdersReducer} from "./orders/reducer";

export const store = configureStore({
    reducer: {
        products: ProductsReducer,
        cart: CartReducer,
        favorites: FavoritesReducer,
        user: UserReducer,
        orders: OrdersReducer
    }
});
