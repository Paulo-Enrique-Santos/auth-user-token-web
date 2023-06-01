import {
  Card,
  Grid,
  CardContent,
  CardHeader,
  Button,
  Typography,
} from '@mui/material'
import { useFormik } from 'formik'
import CustomInput from '../../../shared/components/CustomInput/CustomInput'
import CustomButton from '../../../shared/components/CustomButton/CustomButton'
import { Link } from 'react-router-dom'

interface RegisterFormModel {
  name: string
  nickName: string
  email: string
  password: string
  confirmPassword: string
}

const RegisterForm = () => {
  const initialValues: RegisterFormModel = {
    name: '',
    nickName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const onSubmit = (values: RegisterFormModel) => {
    console.log(values)
  }

  const validate = (values: RegisterFormModel) => {
    console.log(values, 'values error')
  }

  const formik = useFormik({ initialValues, validate, onSubmit })

  return (
    <Card
      sx={{ width: '100%', zIndex: 1, padding: '20px', borderRadius: '16px' }}
    >
      <CardHeader
        title="Olá, Seja Bem Vindo!"
        subheader="Informe seus dados corretamente para fazer o cadastro no nosso site!"
        color="info"
        titleTypographyProps={{
          textAlign: 'center',
          color: 'primary',
          variant: 'h4',
          fontSize: 28,
          fontWeight: 500,
        }}
        subheaderTypographyProps={{
          textAlign: 'center',
          variant: 'subtitle1',
          fontSize: 14,
          color: 'rgba(0, 0, 0, 0.6)',
        }}
      ></CardHeader>
      <CardContent sx={{ padding: '0 26px' }}>
        <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <CustomInput
                label="Nome"
                id="name"
                error={formik.errors.name}
                value={formik.values.name}
                setValue={formik.handleChange}
              />
            </Grid>
            <Grid item container xs={12} justifyContent="center" marginY={2}>
              <Button
                sx={{ borderRadius: '16px', padding: '10px 20px' }}
                variant="contained"
              >
                Cadastrar-se
              </Button>
            </Grid>
            <Grid item container xs={12} justifyContent="center">
              <Typography
                variant="subtitle1"
                sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.6)' }}
              >
                Já possui uma conta?&nbsp;
                <Link
                  to="/login"
                  style={{ color: '#6096BA', textDecoration: 'none' }}
                >
                  Faça Login.
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default RegisterForm
