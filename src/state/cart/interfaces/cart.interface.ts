
export interface ICartState {
    cart: ICart[];
}

interface ICart {
    idDrink: string;
    quantity: number;
}