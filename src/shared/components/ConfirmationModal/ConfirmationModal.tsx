import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

export interface Props {
  open: boolean
  handleHiddenModal: () => void
  handleConfirm: () => void
}

const ConfirmationModal = ({
  open,
  handleHiddenModal,
  handleConfirm,
}: Props) => {
  return (
    <Dialog
      open={open}
      onClose={handleHiddenModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleHiddenModal}>Disagree</Button>
        <Button onClick={handleConfirm} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmationModal
