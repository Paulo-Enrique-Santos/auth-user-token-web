import { Grid, Button, Typography } from '@mui/material'
import { useFormik } from 'formik'
import CustomInput from '../../../../shared/components/CustomInput/CustomInput'

interface RegisterFormModel {
  name: string
  nickName: string
  email: string
  password: string
  confirmPassword: string
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
              style={{
                cursor: 'pointer',
                fontSize: 14,
                color: '#6096BA',
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
              />
              <CustomInput
                label="NickName"
                id="nickName"
                type="text"
                error={formik.errors.nickName}
                value={formik.values.nickName}
                setValue={formik.handleChange}
              />
              <CustomInput
                label="Email"
                id="email"
                type="text"
                error={formik.errors.email}
                value={formik.values.email}
                setValue={formik.handleChange}
              />
              <CustomInput
                label="Senha"
                id="password"
                type="password"
                error={formik.errors.password}
                value={formik.values.password}
                setValue={formik.handleChange}
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
    // <Card
    //   sx={{
    //     width: '100%',
    //     zIndex: 1,
    //     padding: '10px 20px',
    //     borderRadius: '16px',
    //   }}
    // >
    //   <CardHeader
    //     title="Faça seu Cadastro!"
    //     subheader="Informe seus dados corretamente para fazer o cadastro no nosso site ou faça o cadastro pelo facebook ou google!"
    //     color="info"
    //     titleTypographyProps={{
    //       textAlign: 'center',
    //       color: 'primary',
    //       variant: 'h4',
    //       fontSize: 28,
    //       fontWeight: 500,
    //     }}
    //     subheaderTypographyProps={{
    //       textAlign: 'center',
    //       variant: 'subtitle1',
    //       fontSize: 14,
    //       color: 'rgba(0, 0, 0, 0.6)',
    //     }}
    //   ></CardHeader>
    //   <CardContent sx={{ padding: '0 26px' }}>
    //     <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
    //       <Grid item container xs={12}>
    //         <Grid item xs={12}>
    //           <CustomInput
    //             label="Informe seu Nome"
    //             id="name"
    //             type="text"
    //             error={formik.errors.name}
    //             value={formik.values.name}
    //             setValue={formik.handleChange}
    //           />
    //           <CustomInput
    //             label="Informe um NickName"
    //             id="nickName"
    //             type="text"
    //             error={formik.errors.nickName}
    //             value={formik.values.nickName}
    //             setValue={formik.handleChange}
    //           />
    //           <CustomInput
    //             label="Informe seu Email"
    //             id="email"
    //             type="text"
    //             error={formik.errors.email}
    //             value={formik.values.email}
    //             setValue={formik.handleChange}
    //           />
    //           <CustomInput
    //             label="Informe sua Senha"
    //             id="password"
    //             type="password"
    //             error={formik.errors.password}
    //             value={formik.values.password}
    //             setValue={formik.handleChange}
    //           />
    //           <CustomInput
    //             label="Confirme sua Senha"
    //             id="confirmPassword"
    //             type="password"
    //             error={formik.errors.confirmPassword}
    //             value={formik.values.confirmPassword}
    //             setValue={formik.handleChange}
    //           />
    //         </Grid>
    //         <Grid
    //           item
    //           container
    //           xs={12}
    //           justifyContent="center"
    //           marginTop={2}
    //           marginBottom={1}
    //         >
    //           <Button
    //             sx={{ borderRadius: '16px', padding: '10px 20px' }}
    //             variant="contained"
    //             type="submit"
    //             fullWidth
    //           >
    //             cadastrar
    //           </Button>
    //         </Grid>
    //         <Grid item container xs={12} justifyContent="center">
    //           <Typography
    //             variant="subtitle1"
    //             sx={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.6)' }}
    //           >
    //             Já possui uma conta?&nbsp;
    //             <Link
    //               to="/login"
    //               style={{ color: '#6096BA', textDecoration: 'none' }}
    //             >
    //               Faça Login.
    //             </Link>
    //           </Typography>
    //         </Grid>
    //       </Grid>
    //     </form>
    //   </CardContent>
    // </Card>
  )
}

export default RegisterForm
