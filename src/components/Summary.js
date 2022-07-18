import React from "react";
import {useSelector} from "react-redux";
import {sumQuantity, sumTotalCost} from "../utils/fn";
import {store} from "../store/config";
import {orderFetch} from "../store/cart/async";
import {useHistory} from "react-router-dom";

const Summary = () => {
const {cart} = useSelector(state => state.cart);
const totalItems = sumQuantity(cart);
const totalCost = sumTotalCost(cart);
const history = useHistory();

const getOrder = () => {
    store.dispatch(orderFetch(history))
}

if (cart.length !== 0){
    return (
        <article className={'card p-4'}>
            <h3>Summary</h3>
            <div>Items: {totalItems}</div>
            <div>Total Cost: {totalCost}</div>
            <button className={'btn btn-lg btn-dark mt-2'} onClick={() => getOrder()}>Checkout</button>
        </article>
    )
}
}
export default Summary;