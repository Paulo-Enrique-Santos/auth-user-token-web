import { Box, Grow } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import RegisterForm from './components/RegisterForm/RegisterForm'

const Register = () => {
  return (
    <Grid container xs={12} md={8} height="100vh">
      <Box
        sx={{
          width: '100%',
          zIndex: 1,
          animation: `show-register-animation 1s forwards ease-in-out`,
          backgroundColor: '#fff',
        }}
      >
        <Grow in={true} timeout={2000}>
          <Box sx={{ height: '100%' }}>
            <RegisterForm />
          </Box>
        </Grow>
      </Box>
    </Grid>
  )
}

export default Register
