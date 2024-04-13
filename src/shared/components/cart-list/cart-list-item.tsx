import { Grid, Stack, Typography } from "@mui/material";
import { ICart } from "../../../state/cart/interfaces/cart.interface";
import { ICocktail } from "../../../state/cocktails/interface/cocktail";
import { InCartCocktailComponent } from "../cocktail/add-cocktail.component";



interface CartListItemProps {
    cartItem: ICart & ICocktail;

}

export const CartListItem = ({ cartItem }: CartListItemProps) => {
    return (
        <Stack key={cartItem.idDrink} sx={{
            width: { xs: '100%', sm: '420px' },
            borderRadius: '8px',
            backgroundColor: 'background.paper',
            boxShadow: 0,
            ':hover': {
                boxShadow: `0px 5px 5px -3px rgb(122 122 122 / 20%), 0px 8px 10px 1px rgb(122 122 122 / 14%), 0px 3px 14px 2px rgb(122 122 122 / 12%);`,
            }
        }}>
            <Grid container>
                <Grid item xs={4} sx={{
                    height: '140px',
                    backgroundImage: `url(${cartItem.strDrinkThumb}/preview)`,
                    backgroundSize: 'cover',
                    borderRadius: '8px 0 0 8px'
                }}>

                </Grid>
                <Grid item xs={6} p={1}>
                    <Typography variant="h6">{cartItem.strDrink}</Typography>

                    <Typography variant="body1" color={'primary.main'}>${(cartItem.quantity * (cartItem.price ?? 0)).toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={2} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                }} >
                    <InCartCocktailComponent idDrink={cartItem.idDrink} opacity={false} />
                </Grid>

            </Grid>

        </Stack>
    )
}
