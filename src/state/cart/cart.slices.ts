import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICocktail } from "../cocktails/interface/cocktail";
import { ICartState } from "./interfaces/cart.interface";

const initialState: ICartState = {
    cart: [],

};


export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ICocktail>) => {
            const item = state.cart.find((item) => item.idDrink === action.payload.idDrink);
            if (item) {
                state.cart = state.cart.map((item) => {
                    if (item.idDrink === action.payload.idDrink) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
            } else {
                state.cart.push({ idDrink: action.payload.idDrink, quantity: 1, });
            }

        },
        removeFromCart: (state, action: PayloadAction<ICocktail>) => {
            const item = state.cart.find((item) => item.idDrink === action.payload.idDrink);
            if (item) {
                if (item.quantity === 1) {
                    state.cart = state.cart.filter((item) => item.idDrink !== action.payload.idDrink);
                    return;
                } else {
                    state.cart = state.cart.map((item) => {
                        if (item.idDrink === action.payload.idDrink) {
                            return { ...item, quantity: item.quantity - 1 };
                        }
                        return item;
                    });
                }
            }
        }
    }
});

export const { addToCart, removeFromCart } = CartSlice.actions;