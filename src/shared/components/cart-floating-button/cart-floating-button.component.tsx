import { Badge, Box, Fab } from "@mui/material"
import ShoppingCart from "@mui/icons-material/ShoppingCart"
import { useStoreApp } from "../../../state/useStore"
import { useCallback, useEffect, useState } from "react"
import { CartList } from "../cart-list/cart-list"



export const CartFloatingButtonComponent = () => {
    const { appSelector } = useStoreApp()
    const { cart } = appSelector(state => state.cart)
    const calculateCocktails = useCallback(
        () => {
            return cart.reduce((acc, item) => acc + item.quantity, 0)
        },
        [cart],
    )

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    useEffect(() => {
        if (cart.length === 0) setOpen(false)
    }, [cart])


    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 20,
                right: 20

            }}
        >
            <BadgeFloatingButton badgeContent={calculateCocktails()}>
                <Fab color="primary" aria-label="shopping-cart"
                    onClick={() => {
                        if (cart.length === 0) return
                        toggleDrawer(true)()
                    }}
                >
                    <ShoppingCart sx={{
                        color: 'white'

                    }} />
                </Fab>
            </BadgeFloatingButton>

            <CartList open={open} toggleDrawer={toggleDrawer} />
        </Box>

    )
}

interface BadgeFloatingButtonProps {
    badgeContent: number;
    children: React.ReactNode;
}

export const BadgeFloatingButton = ({ badgeContent, children }: BadgeFloatingButtonProps) => {
    return (
        <>
            {badgeContent > 0 ? (
                <Badge badgeContent={badgeContent < 100 ? badgeContent : '99+'} color="error">
                    {children}
                </Badge>
            ) : (<>
                {children}
            </>)}
        </>
    )
}

