import { Grid, Button, Typography } from '@mui/material'
import { useFormik } from 'formik'
import EmailIcon from '@mui/icons-material/Email'
import CustomInput from '../../../../shared/components/CustomInput/CustomInput'
import ValidatePassword from '../ValidatePassword/ValidatePassword'

interface LoginFormModel {
  email: string
  password: string
}

export interface Props {
  setShowRegister: () => void
}

const LoginForm = ({ setShowRegister }: Props) => {
  const initialValues: LoginFormModel = {
    email: '',
    password: '',
  }

  const onSubmit = (values: LoginFormModel) => {
    console.log(values)
  }

  const validate = (values: LoginFormModel) => {
    const errors: LoginFormModel = {
      email: '',
      password: '',
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

    if (values.email && !emailRegex.test(values.email)) {
      errors.email = 'Informe um email válido!'
    }

    if (values.password && values.password.length < 8) {
      errors.password = 'Informe uma senha válida!'
    }

    return errors
  }

  const formik = useFormik({ initialValues, validate, onSubmit })

  return (
    <Grid
      container
      width="100%"
      padding="10px 20px"
      justifyContent="center"
      alignItems="center"
      zIndex={1}
      height="100%"
    >
      <Grid item container xs={7}>
        <Grid item container xs={12}>
          <Grid item container xs={12} justifyContent="center">
            <Typography
              variant="subtitle1"
              color="primary"
              sx={{ fontSize: 30 }}
            >
              Entre
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="subtitle1"
              sx={{ fontSize: 14, color: 'info.main' }}
            >
              Ainda não possui uma conta?&nbsp;
            </Typography>
            <Typography
              onClick={setShowRegister}
              component="span"
              color="secondary"
              style={{
                cursor: 'pointer',
                fontSize: 14,
                color: 'secondary',
                textDecoration: 'none',
              }}
            >
              Inscreva-se.
            </Typography>
          </Grid>
          <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
            <Grid item xs={12} marginTop={5}>
              <CustomInput
                label="Email"
                id="email"
                type="text"
                error={formik.errors.email}
                value={formik.values.email}
                setValue={formik.handleChange}
                icon={<EmailIcon sx={{ fontSize: 24 }} />}
              />
              <ValidatePassword
                id="password"
                error={formik.errors.password}
                value={formik.values.password}
                setValue={formik.handleChange}
                detailedValidation={false}
              />
            </Grid>
            <Grid
              item
              container
              xs={12}
              justifyContent="center"
              marginTop={1}
              marginBottom={1}
            >
              <Button
                sx={{ borderRadius: '6px', padding: '10px 20px' }}
                variant="contained"
                type="submit"
                fullWidth
              >
                Entre
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LoginForm
