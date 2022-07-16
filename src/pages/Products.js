import React, {useEffect} from 'react'
import Product from "../components/Product";
import {useSelector} from "react-redux";
import {store} from "../store/config";
import {categoriesFetch, productsFetch} from "../store/products/async";
import Search from "../components/Search";
import {statusEnum} from "../utils/const";
import Spinner from "../components/Spinner";

export const Products = () => {
  const {products, status} = useSelector((state) => state.products);

  useEffect(() => {
      store.dispatch(productsFetch());
      store.dispatch(categoriesFetch());
  }, []);
  if (status === statusEnum.pending){
      return (<Spinner></Spinner>)
  }
  return (
      <div className={'container'}>
        <div className={'d-flex justify-content-between mt-4 mb-4'}>
          <h1 className={'fw-bold col-8'}>Products</h1>
            <Search></Search>
        </div>
    <div className={'d-flex row'}>
        {
          products?.map((product) => (
                <Product product={product} key={product.id}></Product>
            ))
        }
    </div>
      </div>
  )
}