import { Button } from '@mui/material'

export interface Props {
  label: string
  variant: 'outlined' | 'standart' | 'text'
}

export enum ButtonType {
  outlined = 'outlined',
}

const CustomButton = ({ label, variant }: Props) => {
  return (
    <Button type="submit" variant={variant}>
      {label}
    </Button>
  )
}

export default CustomButton
