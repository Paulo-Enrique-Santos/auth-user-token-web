import { Box, Grow } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import LoginForm from './components/LoginForm/LoginForm'

const Login = () => {
  return (
    <Grid container xs={12} md={8} height="100vh">
      <Box
        sx={{
          width: '100%',
          zIndex: 1,
          animation: `show-login-animation 1s forwards ease-in-out`,
          backgroundColor: '#fff',
        }}
      >
        <Grow in={true} timeout={2000}>
          <Box sx={{ height: '100%' }}>
            <LoginForm />
          </Box>
        </Grow>
      </Box>
    </Grid>
  )
}

export default Login
