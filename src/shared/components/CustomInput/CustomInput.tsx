import { Box, InputAdornment, TextField, Typography } from '@mui/material'

export interface Props {
  label: string
  error: string
  value: string
  setValue: (value: string) => void
  icon?: JSX.Element
}

const CustomInput = ({ label, error, value, setValue, icon }: Props) => {
  return (
    <Box>
      <Typography variant="body2" fontSize={16}>
        {label}:
      </Typography>
      <TextField
        error={Boolean(error)}
        id={label}
        name={label}
        fullWidth
        value={value}
        variant="standard"
        helperText={
          <Typography variant="body2" fontSize={12}>
            {error}
          </Typography>
        }
        InputProps={{
          startAdornment: icon && (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        }}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
    </Box>
  )
}

export default CustomInput
