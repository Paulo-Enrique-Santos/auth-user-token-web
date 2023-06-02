import {
  Box,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import CircleIcon from '@mui/icons-material/Circle'
import DoneIcon from '@mui/icons-material/Done'
import { useState } from 'react'

export interface Props {
  id: string
  error?: string
  errorDetailed?: PasswordErrorModel | undefined
  value: string
  setValue: (e: React.ChangeEvent<any>) => void
  detailedValidation: boolean
}

export interface PasswordErrorModel {
  length: string | undefined
  specialCharacter: string | undefined
  number: string | undefined
  upperCase: string | undefined
  lowerCase: string | undefined
}

const ValidatePassword = ({
  id,
  errorDetailed,
  value,
  error,
  setValue,
  detailedValidation,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Box sx={{ width: '100%' }}>
      <FormControl fullWidth>
        <TextField
          error={Boolean(
            error ||
              errorDetailed?.length ||
              errorDetailed?.lowerCase ||
              errorDetailed?.number ||
              errorDetailed?.specialCharacter ||
              errorDetailed?.upperCase
          )}
          id={id}
          name={id}
          fullWidth
          value={value}
          label="Senha:"
          variant="standard"
          type={showPassword ? 'text' : 'password'}
          InputLabelProps={{
            shrink: true,
            style: { fontSize: 18 },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment
                onClick={() => {
                  setShowPassword(!showPassword)
                }}
                position="start"
              >
                {!showPassword ? (
                  <VisibilityIcon
                    onClick={() => {
                      setShowPassword(true)
                    }}
                    sx={{ cursor: 'pointer', fontSize: 24 }}
                  />
                ) : (
                  <VisibilityOffIcon
                    onClick={() => {
                      setShowPassword(false)
                    }}
                    sx={{ cursor: 'pointer', fontSize: 24 }}
                  />
                )}
              </InputAdornment>
            ),
          }}
          helperText={
            !detailedValidation && (
              <Typography
                variant="body2"
                fontSize={12}
                height={20}
                component="span"
                display="block"
              >
                {error}
              </Typography>
            )
          }
          onChange={setValue}
        />
      </FormControl>
      {detailedValidation && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '20px',
            marginTop: '2px',
          }}
        >
          <Typography
            variant="body2"
            fontSize={12}
            height={20}
            component="span"
            display="block"
            color={
              errorDetailed?.length
                ? 'error'
                : value
                ? 'success.main'
                : 'info.main'
            }
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
            }}
          >
            {errorDetailed?.length ? (
              <CloseIcon
                color="error"
                sx={{
                  fontSize: 14,
                }}
              />
            ) : !value ? (
              <CircleIcon
                color="info"
                sx={{
                  fontSize: 8,
                }}
              />
            ) : (
              <DoneIcon
                color="success"
                sx={{
                  fontSize: 14,
                }}
              />
            )}
            Pelo menos 8 caracteres
          </Typography>
          <Typography
            variant="body2"
            fontSize={12}
            height={20}
            component="span"
            display="block"
            color={
              errorDetailed?.number
                ? 'error'
                : value
                ? 'success.main'
                : 'info.main'
            }
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
            }}
          >
            {errorDetailed?.number ? (
              <CloseIcon
                color="error"
                sx={{
                  fontSize: 14,
                }}
              />
            ) : !value ? (
              <CircleIcon
                color="info"
                sx={{
                  fontSize: 8,
                }}
              />
            ) : (
              <DoneIcon
                color="success"
                sx={{
                  fontSize: 14,
                }}
              />
            )}
            Pelo menos 1 numero de 0 a 9
          </Typography>
          <Typography
            variant="body2"
            fontSize={12}
            height={20}
            component="span"
            display="block"
            color={
              errorDetailed?.upperCase || errorDetailed?.lowerCase
                ? 'error'
                : value
                ? 'success.main'
                : 'info.main'
            }
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
            }}
          >
            {errorDetailed?.upperCase || errorDetailed?.lowerCase ? (
              <CloseIcon
                color="error"
                sx={{
                  fontSize: 14,
                }}
              />
            ) : !value ? (
              <CircleIcon
                color="info"
                sx={{
                  fontSize: 8,
                }}
              />
            ) : (
              <DoneIcon
                color="success"
                sx={{
                  fontSize: 14,
                }}
              />
            )}
            Pelo menos 1 letra maiúscula e 1 letra minúscula
          </Typography>
          <Typography
            variant="body2"
            fontSize={12}
            height={20}
            component="span"
            display="block"
            color={
              errorDetailed?.specialCharacter
                ? 'error'
                : value
                ? 'success.main'
                : 'info.main'
            }
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
            }}
          >
            {errorDetailed?.specialCharacter ? (
              <CloseIcon
                color="error"
                sx={{
                  fontSize: 14,
                }}
              />
            ) : !value ? (
              <CircleIcon
                color="info"
                sx={{
                  fontSize: 8,
                }}
              />
            ) : (
              <DoneIcon
                color="success"
                sx={{
                  fontSize: 14,
                }}
              />
            )}
            Pelo menos 1 caractere especial !@#$%^&*(.)_\-+=?
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default ValidatePassword
