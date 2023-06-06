import { ThemeProvider } from '@mui/material/styles'
import AppRoutes from './AppRoutes'
import { theme } from './shared/theme/muiTheme'
import './shared/style/style.css'
import Background from './shared/components/Background/Background'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Background />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
