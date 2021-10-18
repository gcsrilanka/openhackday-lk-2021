import { Container, Grid } from '@mui/material'
import React from 'react'
import Image from '../../assets/images/share-card.png'
import '../../scss/about.scss'

const Banner = () => (
	<Container>
	<Grid container justifyContent="center">
		<Grid item xs={12} sm={12} md={12} justifyContent="center">
			<img src={Image} alt='banner' className="img-fluid" style={{ borderRadius : "10px"}}/>
        </Grid>
	</Grid>
	</Container>
)

export default Banner
