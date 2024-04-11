import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from ".";
import { ICocktail } from "../cocktails/interface/cocktail";

const initialState: IUserState = {
    favorites: [],
}

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<ICocktail>) => {
            state.favorites.push(action.payload);
        },
        removeFromFavorites: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter((item) => item.idDrink !== action.payload);
        }
    }
});

export const { addToFavorites, removeFromFavorites } = UserSlice.actions;