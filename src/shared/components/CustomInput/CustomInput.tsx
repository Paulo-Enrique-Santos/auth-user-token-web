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
  type: string
  value: string
  setValue: (e: React.ChangeEvent<any>) => void
  icon?: JSX.Element
}

const CustomInput = ({
  label,
  id,
  error,
  value,
  setValue,
  icon,
  type,
}: Props) => {
  return (
    <FormControl fullWidth sx={{ marginBottom: '5px' }}>
      <TextField
        error={Boolean(error)}
        id={id}
        name={id}
        fullWidth
        value={value}
        label={label + ':'}
        variant="standard"
        type={type}
        helperText={
          <Typography
            variant="body2"
            fontSize={12}
            height={20}
            component="span"
            display="block"
          >
            {error}
          </Typography>
        }
        InputLabelProps={{
          shrink: true,
          style: { fontSize: 18 },
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
