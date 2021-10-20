import { Container, Grid } from '@mui/material'
import React from 'react'
import digitalocean from '../../assets/images/digitalocean.png'
import gc from '../../assets/images/gc-srilanka.png'
import foss from '../../assets/images/logo-sliit-foss.png'
import hacktoberfest from '../../assets/images/logo-hacktoberfest.png'
import '../../scss/main.scss'
import '../../scss/sponsors.scss'
import '../../scss/_variables.scss'

const Sponsors = () => (
	<div className='sponsors'>
		<Container>
			<Grid container justifyContent='center'>
				<div className='title'>Sponsors</div>
			</Grid>
			<Grid container className='' alignItems='center'>
				<Grid item xs={12} sm={6} md={3} display='flex' justifyContent='center'>
					<img src={hacktoberfest} alt='logo-hacktoberfest' className='img-fluid' />
				</Grid>
				<Grid item xs={12} sm={6} md={3} display='flex' justifyContent='center'>
					<img src={digitalocean} alt='digitalocean' className='img-fluid' />
				</Grid>
				<Grid item xs={12} sm={6} md={3} display='flex' justifyContent='center'>
					<img src={gc} alt='gc-srilanka' className='img-fluid' />
				</Grid>
				<Grid item xs={12} sm={6} md={3} display='flex' justifyContent='center'>
					<img src={foss} alt='logo-sliit-foss' className='img-fluid' />
				</Grid>
			</Grid>
		</Container>
	</div>
)

export default Sponsors
