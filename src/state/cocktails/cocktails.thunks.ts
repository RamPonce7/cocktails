import { Dispatch } from "@reduxjs/toolkit";
import { cocktailsApi } from "../../api/cocktails.api";
import { fetchCocktails, fetchCocktailsSuccess, fetchCocktailsBySearch } from "./cocktails.slices";
import { ICocktail } from './interface/cocktail';

export const getAlcoholicDrinks = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchCocktails());
        const { data } = await cocktailsApi.get(`/filter.php?a=Alcoholic`);
        dispatch(fetchCocktailsSuccess(data.drinks.map((drink: ICocktail) => ({ ...drink, isAlcoholic: true, price: Number((Math.random() * 1000).toFixed(2)) }))));
    }
}

export const getNotAlcoholicDrinks = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchCocktails());
        const { data } = await cocktailsApi.get(`/filter.php?a=Non_Alcoholic`);
        dispatch(fetchCocktailsSuccess(data.drinks.map((drink: ICocktail) => ({ ...drink, isAlcoholic: false, price: Number((Math.random() * 1000).toFixed(2)) }))));
    }
}

export const searchDrinksByPattern = (pattern: string) => {
    return async (dispatch: Dispatch) => {

        const { data } = await cocktailsApi.get(`/search.php?s=${pattern}`);
        if (data.drinks === null) {
            dispatch(fetchCocktailsBySearch([]));
            return;
        }
        dispatch(fetchCocktailsBySearch(data.drinks.map((drink: ICocktail) => ({ ...drink, isAlcoholic: false, price: Number((Math.random() * 1000).toFixed(2)) }))));
    }
}