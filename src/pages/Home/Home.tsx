import Grid from '@mui/material/Unstable_Grid2'
import ProfileCard from './components/ProfileCard/ProfileCard'
import ChartCard from './components/ChartCard/ChartCard'
import ResumeCard from './components/ResumeCard/ResumeCard'

const Home = () => {
  return (
    <Grid
      container
      xs={10}
      xsOffset={1}
      minHeight="100vh"
      sx={{ backgroundColor: '#fff' }}
    >
      <Grid xs={5} sx={{ backgroundColor: 'red' }}>
        <ProfileCard />
      </Grid>
      <Grid xs={7} sx={{ backgroundColor: 'green' }}>
        <ChartCard />
      </Grid>
      <Grid xs={12} sx={{ backgroundColor: 'orange' }}>
        <ResumeCard />
      </Grid>
    </Grid>
  )
}

export default Home
