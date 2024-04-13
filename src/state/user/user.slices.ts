import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from ".";


const persistedFavorites = localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites') || '[]') as string[]
    : [];

const initialState: IUserState = {
    favorites: persistedFavorites,
}

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<string>) => {
            state.favorites.push(action.payload);
        },
        removeFromFavorites: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter((item) => item !== action.payload);
        }
    }
});

export const { addToFavorites, removeFromFavorites } = UserSlice.actions;