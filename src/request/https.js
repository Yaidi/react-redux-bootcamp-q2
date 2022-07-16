
export const getProductsMock = () => {
    return  fetch('data/products.json').then((res) => res.json().then((json) => {
        return json.data
    })).catch((err) => console.log(err))
}
const URL = 'https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api';
const API_KEY = 'pjFAZecwtNaUW6TyVyPY18vadg3VQIzT3s3qsxCW';
const headers = {
    "X-API-KEY": `${API_KEY}` };

export const getProducts = (find) => {
    const productsAPI = find? `${URL}/products?q=${find}` : `${URL}/products`;
        return fetch(productsAPI, {
        method: "GET",
            headers
        }).then(res => res.json()).then(json => {
        return json;
    })
}
export const makeOrder = () => {
    return fetch(`${URL}/orders`, {method: "POST", headers}).then(res => res.json())
}

export const getCategories = () => {
    return fetch(`${URL}/categories`, {method: "GET", headers}).then(res => res.json()).then(json => json.items);
}