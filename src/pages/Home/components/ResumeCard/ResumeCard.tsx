import { Box, Grid, Tab } from '@mui/material'
import { useState } from 'react'
import TabPanel from '@mui/lab/TabPanel'
import { TabContext, TabList } from '@mui/lab'

const ResumeCard = () => {
  const [value, setValue] = useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    event && setValue(newValue)
  }

  return (
    <Grid>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Cotações" value="1" />
            <Tab label="Minha Posição" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"></TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Grid>
  )
}

export default ResumeCard
