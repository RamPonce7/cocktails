import { ICocktail } from "../../cocktails/interface/cocktail";

export interface ICartState {
    cart: ICocktail[];
    total: number;
}