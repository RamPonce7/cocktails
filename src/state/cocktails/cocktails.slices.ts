import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICocktail, ICocktailsState } from "./interface/cocktail";

const initialState: ICocktailsState = {
    cocktails: [],
    loading: false,
    error: null

}

export const CocktailsSlice = createSlice({
    name: "cocktails",
    initialState,
    reducers: {
        fetchCocktails: (state) => {
            state.loading = true;
        },
        fetchCocktailsSuccess: (state, action: PayloadAction<ICocktail[]>) => {
            state.loading = false;
            state.cocktails = action.payload;
        },
        fetchCocktailsFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { fetchCocktails, fetchCocktailsSuccess, fetchCocktailsFailed } = CocktailsSlice.actions;