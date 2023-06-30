import { Avatar, Fab, Grid, Input, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from 'react'
import ConfirmationModal from '../../../../shared/components/ConfirmationModal/ConfirmationModal'

const ProfileCard = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleConfirm = () => {}

  const handleHiddenModal = () => {
    setOpenModal(false)
  }

  const handleShowModal = () => {
    setOpenModal(true)
  }

  const handleImageChange = () => {}

  return (
    <Grid
      container
      item
      xs={12}
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Grid
        container
        item
        xs={12}
        justifyContent="center"
        position="relative"
        direction={'row'}
      >
        <Avatar
          sx={{
            width: 120,
            height: 120,
            bgcolor: '#274C77',
            border: '2px solid white',
          }}
          alt={'teste'}
          src={`data:image/png;base64,asdasda`}
        />
        <Fab
          component="label"
          size="small"
          color="primary"
          aria-label="add"
          sx={{ position: 'absolute', bottom: '0', left: 'calc(50% + 20px)' }}
          disabled={false}
        >
          <Input
            type="file"
            sx={{ display: 'none' }}
            onChange={handleImageChange}
          />
          <AddIcon />
        </Fab>
      </Grid>
      <Grid
        container
        item
        xs={12}
        justifyContent="center"
        direction={'row'}
        marginBottom={2}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: 22,
            color: 'rgba(0, 0, 0, 0.6)',
          }}
        >
          Olá&nbsp;
        </Typography>
        <Typography
          variant="subtitle1"
          color="primary"
          sx={{
            fontSize: 22,
          }}
        >
          Paulo!
        </Typography>
      </Grid>
      <Grid container item xs={12}>
        <Grid container item xs={6} alignItems="center" direction="column">
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: 12,
              color: 'rgba(0, 0, 0, 0.6)',
            }}
          >
            NickName
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: 18,
              color: 'rgba(0, 0, 0, 0.6)',
            }}
          >
            BigHouts
          </Typography>
        </Grid>
        <Grid container item xs={6} alignItems="center" direction="column">
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: 12,
              color: 'rgba(0, 0, 0, 0.6)',
            }}
          >
            Saldo Atual
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: 18,
              color: 'rgba(0, 0, 0, 0.6)',
            }}
          >
            R$ ****,**
          </Typography>
        </Grid>
      </Grid>
      <DeleteIcon
        color="error"
        sx={{ position: 'absolute', top: 5, right: 5, cursor: 'pointer' }}
        onClick={handleShowModal}
      />
      <ConfirmationModal
        open={openModal}
        handleHiddenModal={handleHiddenModal}
        handleConfirm={handleConfirm}
      />
    </Grid>
  )
}

export default ProfileCard
