import GlobalStyle from './styles/globalStyles';
import {AppRouter} from './routes/AppRouter';
import {useEffect} from "react";
import {getUser} from "./utils/loginApi";
import {loginUser} from "./store/user/actions";
import {store} from "./store/config";
import {getFavorites} from "./utils/const";
import {getFavoritesProducts} from "./store/favorites/actions";

const App = () => {
    useEffect(() => {
        if (getUser()){
            store.dispatch(loginUser());
        }
        if (getFavorites()){
            store.dispatch(getFavoritesProducts(getFavorites()));
        }
    }, [])
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
}
export default App;