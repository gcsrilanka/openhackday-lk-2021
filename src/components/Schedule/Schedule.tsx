import { Container, Grid } from '@mui/material'
import React from 'react'
import ScheduleCard from './ScheduleCard'
import scheduleData from '../../data/schedule.json'
import '../../scss/schedule.scss'

const Schedule = () => (
	<Container className='wrapper'>
		<Grid container justifyContent='center' className='title'>
			<h1>Schedule</h1>
		</Grid>
		<Grid container className='schedule'>
			{scheduleData.map(data => (
				<ScheduleCard
					title={data.title}
					time={data.time}
					name={data.name}
					src={data.src}
					href={data.href}
				/>
			))}
		</Grid>
	</Container>
)

export default Schedule
