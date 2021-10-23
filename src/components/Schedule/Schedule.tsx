import { Container, Grid } from '@mui/material'
import React from 'react'
import ScheduleCard from './ScheduleCard'
import scheduleData from '../../data/schedule.json'

const Schedule = () => (
	<section id='Schedule'>
		<Container className='schedule'>
			<Grid container justifyContent='center'>
				<div className='title'>Schedule</div>
			</Grid>
			<div className='scheduleCardWrapper'>
				{scheduleData.map(data => (
					<ScheduleCard
						title={data.title}
						time={data.time}
						name={data.name}
						src={data.src}
						href={data.href}
					/>
				))}
			</div>
		</Container>
	</section>
)

export default Schedule
