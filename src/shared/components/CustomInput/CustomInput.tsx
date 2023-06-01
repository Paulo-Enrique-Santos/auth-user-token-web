import {
  FormControl,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'

export interface Props {
  label: string
  id: string
  error: string | undefined
  value: string
  setValue: (e: React.ChangeEvent<any>) => void
  icon?: JSX.Element
}

const CustomInput = ({ label, error, value, setValue, icon }: Props) => {
  return (
    <FormControl fullWidth>
      <TextField
        error={Boolean(error)}
        id={label}
        name={label}
        fullWidth
        value={value}
        label={label}
        variant="standard"
        helperText={
          <Typography variant="body2" fontSize={12} component="span">
            {error}
          </Typography>
        }
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: icon && (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        }}
        onChange={setValue}
      />
    </FormControl>
  )
}

export default CustomInput
