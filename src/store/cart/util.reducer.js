export const addProductToCart = (cart, product) => {
    const isItemInCart = cart.find(item => item.id === product.id);
    if (!isItemInCart){
        return [...cart, {...product, quantity: 1}]
    }
    return cart.map(item => {
        if (item.id === product.id) {
            return {...item, quantity: ++item.quantity};
        }
        return item;
    })
};

export const changeQuantity = (cart, product, newQuantity) => {
    return cart.map(item => {
        if (item.id === product.id){
            return {...product, quantity: newQuantity}
        }
        return item;
    })
}
export const removeProduct = (cart, id) => {
    return cart.filter(item => item.id !== id);
}
export const removeFavorites = (favorites, id) => {
return favorites.filter(favorite => favorite != id)
}

export const productsFavorites = (products, favorites) => {
    return products.filter(({id}) => favorites.includes(id)
    )
}