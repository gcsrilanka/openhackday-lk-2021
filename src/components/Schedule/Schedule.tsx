import { Container, Grid } from '@mui/material'
import React from 'react'
import ScheduleCard from './ScheduleCard'
import scheduleData from '../../data/schedule.json';

const Schedule = () => (
    <div className="schedule">
        <Container>
        <Grid container justifyContent="center">
            <h1>Schedule</h1>
        </Grid>
        <Grid container>
            {scheduleData.map(data => 
            <ScheduleCard title={data.title}time={data.time} name={data.name} src={data.src} href={data.href} /> 
            )}
        </Grid>

        
        </Container>
    </div>
)

export default Schedule
