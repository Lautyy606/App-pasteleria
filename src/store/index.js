import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Cart/cartSlice";
import counterReducer from "../features/Counter/counterSlice";
import reductorDelShop from "../features/Shop/shopSlice";
import { shopApi } from "../services/shopService";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "../features/User/userSlice";
import { authApi } from "../services/authService";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        shop: reductorDelShop,
        cart: cartReducer,
        auth: authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);

export default store;
