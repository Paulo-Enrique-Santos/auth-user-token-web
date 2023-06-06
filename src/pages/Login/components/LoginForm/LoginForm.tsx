import { Grid, Button, Typography } from '@mui/material'
import { useFormik } from 'formik'
import EmailIcon from '@mui/icons-material/Email'
import CustomInput from '../../../../shared/components/CustomInput/CustomInput'
import ValidatePassword from '../../../../shared/components/ValidatePassword/ValidatePassword'
import { type UserLoginRequest } from '../../../../shared/model/user'
import { useNavigate } from 'react-router-dom'
import { UserAPI } from '../../../../api/user'

interface LoginFormModel {
  emailOrNickName: string
  password: string
}

const initialValues: LoginFormModel = {
  emailOrNickName: '',
  password: '',
}

const LoginForm = () => {
  const { login } = UserAPI()
  const navigate = useNavigate()

  const onSubmit = (values: LoginFormModel) => {
    console.log(values)
  }

  const handleSubmit = () => {
    const values: LoginFormModel = formik.values

    const request: UserLoginRequest = {
      emailOrNickName: values.emailOrNickName,
      password: values.password,
    }

    void login(request).then(() => {
      navigate('/detalhes-usuario')
    })
  }

  const validate = (values: LoginFormModel) => {
    const errors: LoginFormModel = {
      emailOrNickName: '',
      password: '',
    }

    if (values.password && values.password.length < 8) {
      errors.password = 'Informe uma senha válida!'
    }

    return errors
  }

  const formik = useFormik({ initialValues, validate, onSubmit })

  const handleShowRegister = () => {
    navigate('/cadastro')
  }

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
      <Grid item container xs={12} md={7}>
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
              onClick={handleShowRegister}
              component="span"
              color="primary"
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
                label="Email ou NickName"
                id="emailOrNickName"
                type="text"
                error={formik.errors.emailOrNickName}
                value={formik.values.emailOrNickName}
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
                fullWidth
                onClick={handleSubmit}
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
