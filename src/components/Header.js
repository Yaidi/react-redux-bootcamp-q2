import React from 'react';
import {
  Bar,
  Links,
  FlexContainer,
} from '../styles/components/Header.styles.js';
import {useSelector} from "react-redux";
import {logoutUser} from "../store/user/actions";
import {store} from "../store/config";
import {sumQuantity} from "../utils/fn";

export const Header = () => {
    const {loggedIn} = useSelector(state => state.user);
    const {cart} = useSelector(state => state.cart);
    const totalItems = sumQuantity(cart);
    const onLogout = () => {
        sessionStorage.removeItem('user');
        store.dispatch(logoutUser());
    }
  return (
    <Bar className="topnav sticky-top" id="myTopnav" >
      <Links to="/">
        Wizestore
      </Links>
      <FlexContainer>
          <ul className="nav p-1">
              <li className="nav-item position-relative">
                  <span className="badge text-bg-secondary position-absolute ">{totalItems}</span>
                  <Links to="/cart">Cart</Links>
              </li>
              <li className="nav-item">
                  <Links to="/products">Products</Links>

              </li>
              <li className="nav-item">

                  {
                      loggedIn ? <Links to="/login" onClick={()=> onLogout()}>Logout</Links> : <Links to="/login">Login</Links>
                  }
              </li>

          </ul>

      </FlexContainer>
    </Bar>
  );
};