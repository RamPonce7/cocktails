import { Box, Grid, Stack, Typography } from "@mui/material"
import { ICocktail } from "../../../state/cocktails/interface/cocktail"
import { CocktailCardComponent } from "../cocktail/cocktail-card.component"

interface ListCocktailComponentProps {
    title: string,
    cocktails: ICocktail[]
}

export const ListCocktailComponent = ({ cocktails, title }: ListCocktailComponentProps) => {
    if (cocktails.length === 0) {
        return (
            <Box>
                <Stack sx={{
                    my: 2
                }}>
                    <Typography variant="h4" color={'primary'}>No cocktails found</Typography>
                </Stack>
            </Box>
        )
    }
    return (

        <Box>
            <Stack sx={{
                my: 2
            }}>
                <Typography variant="h4" color={'primary'}>{title}</Typography>
            </Stack>
            <Grid container spacing={2}>
                {cocktails.map((cocktail) => (
                    <Grid item xs={6} sm={4} md={3} lg={2} key={cocktail.idDrink}>
                        <CocktailCardComponent cocktail={cocktail} />
                    </Grid>
                )
                )}
            </Grid>
        </Box>
    )
}
