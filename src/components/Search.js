import React, {useEffect, useState} from "react";
import {findProductFetch, productsFetch} from "../store/products/async";
import {useSelector} from "react-redux";
import {store} from "../store/config";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {showFavoritesProducts} from "../store/favorites/actions";

const Search = () => {
    const [find, setFind] = useState('');
    const [selected, setSelected] = useState('All Categories');
    const {categories} = useSelector(state => state.products);
    const {favorites} = useSelector(state => state.favorites);

    useEffect(() => {
        store.dispatch(findProductFetch(find));
    }, [find])

    const showFavorites = () => {
      store.dispatch(showFavoritesProducts(favorites));
    }
    const showAll = () => {
      store.dispatch(productsFetch());
    }

    return (
        <div className={`input-group mb-3`}>
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">{selected}
            </button>
            <ul className="dropdown-menu">
                <li onClick={() => showAll()}><span className="dropdown-item">All Categories</span></li>
                <li onClick={() => showFavorites()}><span className="dropdown-item">Favorites</span></li>
                {
                    categories?.map(({name, id}) => (
                        <li key={generateUniqueID()} onClick={() => setSelected(name)} ><span className="dropdown-item">{name}</span></li>
                    ))
                }
            </ul>
            <input type='search' value={find} onChange={(e) => {setFind(e.target.value)}}/>
        </div>
)
}
export default Search;