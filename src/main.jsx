import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'

import theme from './styles/theme'

import { CepPage } from './pages/CepPage/CepPage'
import { router } from './routes/RoutesConfig'
import { Header } from './components/Header'
import { RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    
      <RouterProvider router={router} />
    </ThemeProvider>

  
  </React.StrictMode>,
)
