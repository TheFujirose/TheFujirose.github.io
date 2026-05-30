import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './index.css'
import { theme } from './theme'
import App from './App.tsx'
import favicon from './assets/favicon.svg'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Favicon */}
    <link rel="icon" type="image/svg+xml" href={favicon} />
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
