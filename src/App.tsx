import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import { Box } from "@mui/material"
import { Provider } from "react-redux"
import { store } from "./state/store"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CartFloatingButtonComponent } from "./shared/components/cart-floating-button/cart-floating-button.component"
import { useStoreApp } from "./state/useStore"
import { useEffect } from "react"
import { getAlcoholicDrinks, getNotAlcoholicDrinks } from "./state/cocktails"
import { LoaderComponent } from "./shared"



function App() {



  return (

    <Provider store={store}>

      <MainLayout>
        <>
          <Box p={1} mt={10}>
            <RouterProvider router={router} />
          </Box>
          <CartFloatingButtonComponent />
        </>
      </MainLayout>

    </Provider>


  )
}

export default App


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { appSelector, appDispatch } = useStoreApp()
  const { loading } = appSelector(state => state.cocktails)

  useEffect(() => {
    appDispatch(getAlcoholicDrinks());
    appDispatch(getNotAlcoholicDrinks());
  }, [appDispatch])

  if (loading) {
    return <LoaderComponent />
  }
  return (
    <>
      {children}
    </>
  )
}


