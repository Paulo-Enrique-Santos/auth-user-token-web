import { Box, Grow } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import RegisterForm from './components/RegisterForm/RegisterForm'
import { showLoginAnimation, showRegisterAnimation } from './style'
import LoginForm from './components/LoginForm/LoginForm'
import { useState } from 'react'

const Authentication = () => {
  const isLargeScreen = window.innerWidth >= 900
  const [showRegister, setShowRegister] = useState(true)
  const [showLogin, setShowLogin] = useState(false)

  const handleSetShowLogin = () => {
    setShowLogin(true)
    setShowRegister(false)
  }

  const handleSetShowRegister = () => {
    setShowLogin(false)
    setShowRegister(true)
  }

  return (
    <Grid
      container
      height="100vh"
      maxWidth="100vw"
      sx={{ backgroundColor: '#F7F7F7', overflowX: 'hidden' }}
    >
      <Grid container xs={12} md={8} height="100vh">
        <Box
          sx={{
            width: '100%',
            zIndex: 1,
            animation: isLargeScreen
              ? showRegister
                ? `${showRegisterAnimation} 1s forwards ease-in-out`
                : `${showLoginAnimation} 1s forwards ease-in-out`
              : '',
            backgroundColor: '#fff',
          }}
        >
          {showRegister ? (
            <Grow in={showRegister} timeout={2000}>
              <Box sx={{ height: '100%' }}>
                <RegisterForm setShowLogin={handleSetShowLogin} />
              </Box>
            </Grow>
          ) : (
            <Grow in={showLogin} timeout={2000}>
              <Box sx={{ height: '100%' }}>
                <LoginForm setShowRegister={handleSetShowRegister} />
              </Box>
            </Grow>
          )}
        </Box>
      </Grid>
    </Grid>
  )
}

export default Authentication
