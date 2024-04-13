import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICartState } from "./interfaces/cart.interface";




const persistedCart = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart') || '[]') as ICart[]
    : [];

const initialState: ICartState = {
    cart: persistedCart,
};


export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<string>) => {
            const item = state.cart.find((item) => item.idDrink === action.payload);
            if (item) {
                state.cart = state.cart.map((item) => {
                    if (item.idDrink === action.payload) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
            } else {
                state.cart.push({ idDrink: action.payload, quantity: 1, });
            }

        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const item = state.cart.find((item) => item.idDrink === action.payload);
            if (item) {
                if (item.quantity === 1) {
                    state.cart = state.cart.filter((item) => item.idDrink !== action.payload);
                    return;
                } else {
                    state.cart = state.cart.map((item) => {
                        if (item.idDrink === action.payload) {
                            return { ...item, quantity: item.quantity - 1 };
                        }
                        return item;
                    });
                }
            }
        },
        clearCart: (state) => {
            state.cart = [];
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;