import { ThemeProvider } from '@mui/material/styles'
import AppRoutes from './AppRoutes'
import { theme } from './shared/theme/muiTheme'
import './style.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
