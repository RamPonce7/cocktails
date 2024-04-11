import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./cart/cart.slices";
import { CocktailsSlice } from "./cocktails/cocktails.slices";
import { UserSlice } from "./user/user.slices";

export type RootState = ReturnType<typeof store.getState>;


export const store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
        cocktails: CocktailsSlice.reducer,
        user: UserSlice.reducer
    }
})