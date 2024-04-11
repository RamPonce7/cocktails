import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import { HeaderComponent } from "./shared"


function App() {

  return (
    <>
      <HeaderComponent />
      <RouterProvider router={router} />
    </>

  )
}

export default App



