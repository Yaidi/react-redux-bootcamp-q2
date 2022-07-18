import React from 'react';
import {Link} from 'react-router-dom';
import {Main} from '../styles/pages/Home.styles';
import {useSelector} from "react-redux";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

export const Home = () => {
    const {orders} = useSelector(state => state.orders);
  return (
    <Main>
      <h1>Welcome to WizeStore!</h1>
      <p>
        Browse our <Link to='/products'>products</Link>
      </p>
        <div className='d-flex'>
            { orders.length > 0 ? orders.map((order) => (
                <div className='card p-4 ms-2' key={generateUniqueID()}>
                    <label>Order</label>
                    <div>{order.order}</div>
                </div>
            )) : ''}
        </div>
    </Main>
  );
};
