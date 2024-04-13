import { Box, Button, Drawer, IconButton, Stack, Typography } from "@mui/material";
import { useStoreApp } from "../../../state/useStore";
import { useMemo } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { CartListItem } from "./cart-list-item";
import { ICart } from "../../../state/cart/interfaces/cart.interface";
import { ICocktail } from "../../../state/cocktails/interface/cocktail";
import { clearCart } from "../../../state/cart";

interface CartListProps {
    open: boolean;
    toggleDrawer: (newOpen: boolean) => () => void;
}

type CartItem = ICart & ICocktail;

export const CartList = ({ open, toggleDrawer }: CartListProps) => {
    const { appSelector, appDispatch } = useStoreApp();
    const { cart } = appSelector(state => state.cart)
    const { cocktails } = appSelector(state => state.cocktails)

    const cartItems: CartItem[] = useMemo(() => {
        return cart.map(cartItem => {
            const cocktail = cocktails.find(cocktail => cocktail.idDrink === cartItem.idDrink)
            return {
                ...cartItem,
                ...cocktail
            } as CartItem
        })
    }, [cart, cocktails])
    return (
        <>

            <Drawer open={open} onClose={toggleDrawer(false)} anchor="right" sx={{
                '& .MuiDrawer-paper': {
                    width: { xs: '100%', sm: '436px' },
                    backgroundColor: 'background.paper',
                    overflowX: 'hidden',
                }
            }} >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        backgroundColor: 'primary.main',
                        position: 'fixed',
                        width: { xs: '100%', sm: '436px' },
                        zIndex: 1,
                        boxShadow: 1,
                        borderRadius: '0 0 16px 16px'

                    }}>
                    <IconButton onClick={toggleDrawer(false)}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Stack p={1} gap={2} mt={6} mb={7}>

                    {cartItems.map(cartItem => (
                        <CartListItem key={cartItem.idDrink} cartItem={cartItem} />
                    ))}
                </Stack>
                <Box sx={{
                    position: 'fixed',
                    bottom: 0,


                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        backgroundColor: 'primary.main',
                        position: 'fixed',
                        width: { xs: '100%', sm: '436px' },
                        zIndex: 1,
                        boxShadow: 1,
                        borderRadius: '16px 16px 0 0',
                        bottom: 0

                    }}>
                        <Box sx={{
                            backgroundColor: 'primary.main',
                            color: 'white',
                            borderRadius: '8px 8px 0 0',
                            px: 2,
                            py: 1,
                            boxShadow: 1,
                            width: { xs: '100%', sm: '100%', md: '436px' },
                        }}>
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="h6">Total</Typography>
                                <Typography variant="h6">${cartItems.reduce((acc, item) => acc + (item.quantity * (item.price ?? 0)), 0).toFixed(2)}</Typography>
                                <Button variant="outlined" color="secondary"
                                    onClick={() => {
                                        appDispatch(clearCart())
                                        toggleDrawer(false)()


                                    }}
                                >Checkout</Button>
                            </Stack>

                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </>
    )
}
