import { Grid } from '@mui/material'
import React from 'react'
import Image from '../../assets/images/share-card.png'
import '../../scss/about.scss'

const Banner = () => (
	<Grid container justifyContent='center' sx={{ mt: 10 }}>
		<Grid item xs={12} sm={12} md={12} justifyContent='center' display="flex">
			<img
				src={Image}
				alt='banner'
				className='img-fluidBanner'
				style={{ borderRadius: '10px' }}
			/>
		</Grid>
	</Grid>
)

export default Banner
