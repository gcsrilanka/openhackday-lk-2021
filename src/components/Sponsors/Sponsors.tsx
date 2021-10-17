import React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import imgData from './imageData'
import classNames from './Sponsors.module.scss'

export default function Sponsors() {
	return (
		<div className={classNames.wrapper}>
			<h2 className={classNames.title}>Sponsors</h2>
			<ImageList cols={4} gap={50} className={classNames.logoWrapper}>
				{imgData.map(item => (
					<ImageListItem key={item.img}>
						<img src={item.img} srcSet={item.img} alt={item.title} loading='lazy' />
					</ImageListItem>
				))}
			</ImageList>
		</div>
	)
}
