import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { grey, orange } from '@mui/material/colors'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={createTheme({
    typography: {
      allVariants: {
        color: grey[300],
      }
    },
    palette: {
      mode: 'dark',
      primary: {
        main: orange[500],
      },
      secondary: {
        main: grey[900],
      },

    },
  })}>
    <App />
  </ThemeProvider>

)
