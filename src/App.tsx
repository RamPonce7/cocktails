import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import { HeaderComponent } from "./shared"
import { Box, ThemeProvider } from "@mui/material"
import { appTheme } from "./shared/theme/app.theme"


function App() {

  return (
    <ThemeProvider theme={appTheme}>
      <HeaderComponent />
      <Box p={1} mt={8}>
        <RouterProvider router={router} />
      </Box>

    </ThemeProvider>

  )
}

export default App



