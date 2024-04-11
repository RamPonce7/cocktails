import { createTheme } from "@mui/material";
import { grey, orange } from "@mui/material/colors";


export const appTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: grey[900],
        },
        secondary: {
            main: orange[50],
        },
    },
}) 