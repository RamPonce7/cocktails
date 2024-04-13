export interface ICocktail {
    isAlcoholic?: boolean;
    idDrink: string;
    strDrink: string;
    strDrinkAlternate?: null;
    strTags?: string;
    strVideo?: null;
    strCategory?: string;
    strIBA?: string;
    strAlcoholic?: string;
    strGlass?: string;
    strInstructions?: string;
    strInstructionsES?: null;
    strInstructionsDE?: string;
    strInstructionsFR?: null;
    strInstructionsIT?: string;
    strDrinkThumb?: string;
    strImageSource?: string;
    strImageAttribution?: string;
    strCreativeCommonsConfirmed?: string;
    price?: number;
    dateModified?: Date;
}

export interface ICocktailsState {
    cocktails: ICocktail[];
    searched: ICocktail[];
    loading: boolean;
    error: string | null;
}