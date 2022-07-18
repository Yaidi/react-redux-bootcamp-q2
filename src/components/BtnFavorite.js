import React from "react";
import {useSelector} from "react-redux";
import {store} from "../store/config";
import StarIconFilled from "./icons/StarFilled";
import StarIconEmpty from "./icons/StarEmpty";
import {addToFavorites, removeToFavorites} from "../store/favorites/actions";

const BtnFavorite = ({id}) => {
    const {favorites} = useSelector(state => state.favorites);
    const isFavorite = () => favorites.includes(id);
    const remove = () => store.dispatch(removeToFavorites(id))
    const add = () => store.dispatch(addToFavorites(id));

    return (<div className=''>{isFavorite() ? (
        <StarIconFilled click={ () => remove()}></StarIconFilled>
            )
             :
            (
                <StarIconEmpty click={ () => add()}></StarIconEmpty>
            )

        }</div>
    )

}
export default BtnFavorite;