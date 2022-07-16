import {createAction} from "@reduxjs/toolkit";

export const addToFavorites = createAction('[Product UI] Add product to Favorites');

export const removeToFavorites = createAction('[Product UI] Remove product to Favorites');

export const showFavoritesProducts = createAction('[Search UI] Show Favorites Products');