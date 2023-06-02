import { Grid, Button, Typography } from '@mui/material'
import { useFormik } from 'formik'
import CustomInput from '../../../../shared/components/CustomInput/CustomInput'
import ValidatePassword from '../ValidatePassword/ValidatePassword'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'

interface RegisterFormModel {
  name: string
  nickName: string
  email: string
  password: string
  length: string
  specialCharacter: string
  number: string
  upperCase: string
  lowerCase: string
}

export interface Props {
  setShowLogin: () => void
}

const RegisterForm = ({ setShowLogin }: Props) => {
  const initialValues: RegisterFormModel = {
    name: '',
    nickName: '',
    email: '',
    password: '',
    length: '',
    specialCharacter: '',
    number: '',
    upperCase: '',
    lowerCase: '',
  }

  const onSubmit = (values: RegisterFormModel) => {
    console.log(values)
  }

  const validate = (values: RegisterFormModel) => {
    const errors: RegisterFormModel = {
      name: '',
      nickName: '',
      email: '',
      password: '',
      length: '',
      specialCharacter: '',
      number: '',
      upperCase: '',
      lowerCase: '',
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    if (values.email && !emailRegex.test(values.email)) {
      errors.email = 'Informe um email válido!'
    }

    if (values.password && values.password.length < 8) {
      errors.length = 'A senha deve ter pelo menos 8 caracteres!'
    }

    const specialCharacterRegex = /[!@#$%^&*(.)_\-+=?]/
    if (values.password && !specialCharacterRegex.test(values.password)) {
      errors.specialCharacter =
        'A senha deve conter pelo menos um caractere especial!'
    }

    const numberRegex = /\d/
    if (values.password && !numberRegex.test(values.password)) {
      errors.number = 'A senha deve conter pelo menos um número!'
    }

    const upperCaseRegex = /[A-Z]/
    if (values.password && !upperCaseRegex.test(values.password)) {
      errors.upperCase = 'A senha deve conter pelo menos uma letra maiúscula!'
    }

    const lowerCaseRegex = /[a-z]/
    if (values.password && !lowerCaseRegex.test(values.password)) {
      errors.lowerCase = 'A senha deve conter pelo menos uma letra minúscula!'
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
      <Grid item container md={7} xs={12}>
        <Grid item container xs={12}>
          <Grid item container xs={12} justifyContent="center">
            <Typography
              variant="subtitle1"
              color="primary"
              sx={{ fontSize: 30 }}
            >
              Increva-se
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
              sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.6)' }}
            >
              Já possui uma conta?&nbsp;
            </Typography>
            <Typography
              onClick={setShowLogin}
              component="span"
              color="primary"
              style={{
                cursor: 'pointer',
                fontSize: 14,
                textDecoration: 'none',
              }}
            >
              Faça Login.
            </Typography>
          </Grid>
          <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
            <Grid item xs={12} marginTop={5}>
              <CustomInput
                label="Nome"
                id="name"
                type="text"
                error={formik.errors.name}
                value={formik.values.name}
                setValue={formik.handleChange}
                icon={<PersonIcon sx={{ fontSize: 24 }} />}
              />
              <CustomInput
                label="NickName"
                id="nickName"
                type="text"
                error={formik.errors.nickName}
                value={formik.values.nickName}
                setValue={formik.handleChange}
                icon={<AccountCircleIcon sx={{ fontSize: 24 }} />}
              />
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
                errorDetailed={{
                  length: formik.errors.length,
                  specialCharacter: formik.errors.specialCharacter,
                  number: formik.errors.number,
                  upperCase: formik.errors.upperCase,
                  lowerCase: formik.errors.lowerCase,
                }}
                value={formik.values.password}
                setValue={formik.handleChange}
                detailedValidation={true}
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
                Inscreva-se
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default RegisterForm
