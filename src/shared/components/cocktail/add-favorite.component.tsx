import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material"
import { Box, IconButton } from "@mui/material"
import { useStoreApp } from "../../../state/useStore"
import { red } from "@mui/material/colors"
import { addToFavorites, removeFromFavorites } from "../../../state/user/user.slices"
import { useMemo } from "react"

interface AddFavoriteComponentProps {
    idDrink: string

}
export const AddFavoriteComponent = ({ idDrink }: AddFavoriteComponentProps) => {
    return (
        <Box
            p={1} sx={{
                position: 'absolute',
                top: 0,
                left: 0,
            }}
        >
            <FavoriteCocktail idDrink={idDrink} />
        </Box>
    )
}


interface FavoriteCocktailProps {
    idDrink: string

}

export const FavoriteCocktail = ({ idDrink }: FavoriteCocktailProps) => {
    const { appSelector, appDispatch } = useStoreApp()
    const { favorites } = appSelector(state => state.user)
    const isFavorite = useMemo(() => favorites.includes(idDrink), [favorites, idDrink]);
    return (
        <Box>

            <IconButton
                onClick={() => {
                    if (isFavorite) {
                        appDispatch(removeFromFavorites(idDrink));
                    } else {
                        appDispatch(addToFavorites(idDrink));
                    }

                }}
                sx={{

                    backgroundColor: 'transparent',
                    margin: 'auto',
                    height: 30,
                    width: 30,
                    color: isFavorite ? red[500] : 'white',

                }}>
                {
                    isFavorite ? <Favorite /> : <FavoriteBorderOutlined />
                }
            </IconButton>
        </Box>
    )
}
