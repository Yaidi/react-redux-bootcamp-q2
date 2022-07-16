import React from "react";
import {firstElement} from "../utils/fn";
import Images from "./Images";
import {addToCart} from "../store/cart/actions";
import {store} from "../store/config";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import BtnFavorite from "./BtnFavorite";

const Product = ({product}) => {
    const {name, price, images, categories, id} = product;
    const newId = generateUniqueID();
    const onAdd = (item) => {
        store.dispatch(addToCart(item))
    };
    return (
        <div className={'card col-4 p-4'}>
            <div className={'card-img-top'}>
                <Images images={images} name={name} id={newId}/>
            </div>
            <article className={'card-body'}>
                <div className={'card-title fw-bold'}>{name}</div>
                <div className={'card-text fw-bolder'}>${price}</div>
                <span className={'mb-2 badge text-bg-light'}>{firstElement(categories)}</span>
                <div className='d-flex'>
                    <button className={'btn btn-primary btn-sm'} onClick={()=> onAdd(product)}>Add to cart</button>
                    <BtnFavorite id={id}></BtnFavorite>
                </div>
            </article>
        </div>

    )
}
export default Product