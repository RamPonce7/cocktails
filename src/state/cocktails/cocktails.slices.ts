import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICocktail, ICocktailsState } from "./interface/cocktail";

const initialState: ICocktailsState = {
    cocktails: [],
    searched: [],
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
            state.cocktails = [...state.cocktails, ...action.payload]
        },
        fetchCocktailsFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        fetchCocktailsBySearch: (state, action: PayloadAction<ICocktail[]>) => {
            state.loading = false;
            state.searched = [...action.payload]

        }
    }
});

export const { fetchCocktails, fetchCocktailsSuccess, fetchCocktailsFailed, fetchCocktailsBySearch } = CocktailsSlice.actions;