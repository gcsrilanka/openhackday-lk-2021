import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import ScheduleCard from './ScheduleCard'
import user from '../../assets/images/user.png'

const Schedule = () => (
    <div className="">
        <Container>
        <Grid container justifyContent="center">
            <h1>Schedule</h1>
        </Grid>
        <Grid container className="schedule">
            <ScheduleCard title="Deploy using Filebase's S3 Compatible API" time="7 Sep 2021 19:00 IST" name="Akanksha Bhasin" src={user} href="/"/>
            <ScheduleCard title="Deploy using Filebase's S3 Compatible API" time="7 Sep 2021 19:00 IST" name="Akanksha Bhasin" src={user} href="/"/>
            <ScheduleCard title="Deploy using Filebase's S3 Compatible API" time="7 Sep 2021 19:00 IST" name="Akanksha Bhasin" src={user} href="/"/>
            
        </Grid>

        
        </Container>
    </div>
)

export default Schedule
