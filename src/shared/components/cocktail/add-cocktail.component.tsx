import { Box, Button, colors, IconButton, Stack, Typography } from "@mui/material"
import { useStoreApp } from "../../../state/useStore"
import { useMemo } from "react"
import AddIcon from '@mui/icons-material/Add';
import { addToCart, removeFromCart } from "../../../state/cart";
import RemoveIcon from "@mui/icons-material/Remove";


interface AddCocktailComponentProps {
    idDrink: string
}

export const AddCocktailComponent = ({ idDrink }: AddCocktailComponentProps) => {
    const { appSelector } = useStoreApp()
    const { cart } = appSelector(state => state.cart)

    const cocktail = useMemo(() => cart.find((c) => c.idDrink === idDrink), [cart, idDrink])

    return (
        <Box p={1} sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            color: 'white'
        }}>
            {
                cocktail ? (
                    <InCartCocktailComponent idDrink={idDrink} />

                ) : (<NoInCartCocktailComponent idDrink={idDrink} />)

            }
        </Box>
    )

}



export const NoInCartCocktailComponent = ({ idDrink }: AddCocktailComponentProps) => {
    const { appDispatch } = useStoreApp();
    return (
        <Box>

            <IconButton
                onClick={() => {
                    appDispatch(addToCart(idDrink));
                }}
                sx={{
                    backgroundColor: 'primary.main',
                    margin: 'auto',
                    height: 30,
                    width: 30,
                    ':hover': {
                        backgroundColor: colors.grey[100],
                        color: colors.orange[900]

                    }
                }}>
                <AddIcon fontSize="small" />
            </IconButton>
        </Box>
    )
}




export const InCartCocktailComponent = ({ idDrink, opacity = true }: AddCocktailComponentProps & { opacity?: boolean }) => {
    const { appDispatch, appSelector } = useStoreApp();
    const { cart } = appSelector(state => state.cart)
    const cocktail = useMemo(() => cart.find((c) => c.idDrink === idDrink), [cart, idDrink])
    return (
        <Stack direction="row" spacing={1} sx={{
            opacity: opacity ? 0.8 : 1,
            boxShadow: 1,
            ':hover': {
                opacity: 1
            }
        }}>
            <Stack sx={{
                flexDirection: 'column',
            }}>


                <Button
                    disabled={cocktail?.quantity === 9}
                    onClick={() => {
                        appDispatch(addToCart(idDrink));
                    }}
                    sx={{
                        maxWidth: '28px !important',
                        minWidth: '28px !important',
                        height: 25,
                        backgroundColor: 'primary.main',
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        color: 'white',
                        ':hover': {
                            backgroundColor: colors.grey[100],
                            color: colors.orange[900]

                        }
                    }}>
                    <AddIcon fontSize={'small'} />
                </Button>
                <Box
                    sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        px: 1,
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                >
                    <Typography variant="body2"
                        sx={{
                            color: 'white'
                        }}
                    >
                        {cocktail?.quantity}
                    </Typography>
                </Box>

                <Button
                    onClick={() => {
                        appDispatch(removeFromCart(idDrink));
                    }}
                    sx={{
                        maxWidth: '28px !important',
                        minWidth: '28px !important',
                        height: 25,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        backgroundColor: 'primary.main',
                        color: 'white',
                        ':hover': {
                            backgroundColor: colors.grey[100],
                            color: colors.orange[900]

                        }
                    }}>
                    <RemoveIcon fontSize="small" />
                </Button>


            </Stack>
        </Stack>

    )
}