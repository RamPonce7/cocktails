import { Grid, Stack, Typography } from "@mui/material"
import { ICocktail } from "../../../state/cocktails/interface/cocktail"
import { AddCocktailComponent } from "./add-cocktail.component"
import { AddFavoriteComponent } from "./add-favorite.component"

interface CocktailCardComponentProps {
    cocktail: ICocktail
}

export const CocktailCardComponent = ({ cocktail }: CocktailCardComponentProps) => {
    return (
        <Stack sx={{
            borderRadius: 2,
            backgroundColor: 'background.paper',
            height: '100%',
            boxShadow: 0,
            ':hover': {
                boxShadow: `0px 5px 5px -3px rgb(122 122 122 / 20%), 0px 8px 10px 1px rgb(122 122 122 / 14%), 0px 3px 14px 2px rgb(122 122 122 / 12%);`,
            },
            '& .image-card': {
                // opacity: 0.8,
                ':hover': {
                    opacity: 1
                }
            }
        }}>
            <Grid container sx={{
                height: '100%'

            }}>
                <Grid item xs={12} position={'relative'} className="image-card"
                    sx={{
                        borderRadius: '8px 8px 0 0',
                        backgroundImage: `url(${cocktail.strDrinkThumb}/preview)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '260px',
                    }}
                >

                    <AddCocktailComponent idDrink={cocktail.idDrink} />
                    <AddFavoriteComponent idDrink={cocktail.idDrink} />
                </Grid>
                <Grid item xs={8} display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                    <Stack p={1}>
                        <Typography variant="body1" >{cocktail.strDrink}</Typography>

                    </Stack>
                </Grid>
                <Grid item xs={4} display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
                    <Stack p={1} >

                        <Typography variant="body2" >${cocktail.price}</Typography>
                    </Stack>
                </Grid>

            </Grid>



        </Stack>
    )
}
