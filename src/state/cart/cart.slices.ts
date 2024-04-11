import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICocktail } from "../cocktails/interface/cocktail";
import { ICartState } from "./interfaces/cart.interface";

const initialState: ICartState = {
    cart: [],
    total: 0,
};


export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ICocktail>) => {
            state.cart.push(action.payload);
            state.total += action.payload.price || 0;
        },
        removeFromCart: (state, action) => {
            const item = state.cart.find((item) => item.idDrink === action.payload);
            if (item) {
                state.cart = state.cart.filter((item) => item.idDrink !== action.payload);
                state.total -= item.price || 0;
            }
        }
    }
});

export const { addToCart, removeFromCart } = CartSlice.actions;