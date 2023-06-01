import { Grid } from '@mui/material'
import { useFormik } from 'formik'
import CustomInput from '../../../shared/components/CustomInput/CustomInput'

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
    <form onSubmit={formik.handleSubmit}>
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
      </Grid>
    </form>
  )
}

export default RegisterForm
