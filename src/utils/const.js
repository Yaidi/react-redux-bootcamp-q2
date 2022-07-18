export const statusEnum = {
    pending: 'pending',
    completed: 'completed',
    error: 'error'
}
export const storageKeys = {
    favorites: 'favorites',
    user: 'user'
}

export const getFavorites = () => {
  return localStorage.getItem(storageKeys.favorites);
}