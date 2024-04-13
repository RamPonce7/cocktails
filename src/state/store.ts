import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./cart/cart.slices";
import { CocktailsSlice } from "./cocktails/cocktails.slices";
import { UserSlice } from "./user/user.slices";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch


export const store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
        cocktails: CocktailsSlice.reducer,
        user: UserSlice.reducer
    }
})

store.subscribe(() => {
    localStorage.setItem('cart', JSON.stringify(store.getState().cart.cart))
    localStorage.setItem('favorites', JSON.stringify(store.getState().user.favorites))
})