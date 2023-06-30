import Grid from '@mui/material/Unstable_Grid2'
import ProfileCard from './components/ProfileCard/ProfileCard'
import ChartCard from './components/ChartCard/ChartCard'
import ResumeCard from './components/ResumeCard/ResumeCard'
import * as signalR from '@microsoft/signalr'
import { useEffect, useState } from 'react'

const Home = () => {
    const [rodou, setRodou] = useState(false)


    async function teste() {
      setRodou(true)
      const connection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7111/server', {
        accessTokenFactory: () => 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImFzZGFzZCIsIklkIjoiMSIsImV4cCI6MTY4Nzk3NjcwMH0.m5T5XxPRAo8LJV9vWBB7MoY9bWiPqmh4fxQToQljgCc'
      }).build()
      await connection.start()
      console.log(connection)
      connection.on('ReceiveMessage', (data) => {
        console.log(data)
      })

      
    }
    
    useEffect(() => {
    !rodou && teste()
  }, [])

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
