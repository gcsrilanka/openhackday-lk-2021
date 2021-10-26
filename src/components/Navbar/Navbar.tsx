import {
	Toolbar,
	AppBar,
	Typography,
	Button,
	IconButton,
	Drawer,
	Link,
	MenuItem,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import '../../scss/navbar.scss'

const headersData = [
	{
		label: 'About',
		href: '/About',
	},
	{
		label: 'Speakers',
		href: '/Speakers',
	},
	{
		label: 'Schedule',
		href: '/Schedule',
	},
	{
		label: 'Sponsor',
		href: '/Sponsor',
	},
	{
		label: 'Leaderboard',
		href: '/leaderboard',
	},
	{
		label: 'FAQ',
		href: '/FAQ',
	},
	{
		label: 'Team',
		href: '/Team',
	},
]

function Navbar() {
	const [state, setState] = useState({
		mobileView: false,
		drawerOpen: false,
	})

	const { mobileView, drawerOpen } = state

	useEffect(() => {
		const setResponsiveness = () =>
			window.innerWidth < 900
				? setState(prevState => ({ ...prevState, mobileView: true }))
				: setState(prevState => ({ ...prevState, mobileView: false }))

		setResponsiveness()

		window.addEventListener('resize', () => setResponsiveness())

		return () => {
			window.removeEventListener('resize', () => setResponsiveness())
		}
	}, [])

	const displayDesktop = () => (
		<Toolbar>
			<div className='navHeaderBar'>
				<div>{OpenHackDaySriLankaTitel}</div>
				<div className='centerRow'>{getMenuButtons()}</div>
			</div>
		</Toolbar>
	)

	const displayMobile = () => {
		const handleDrawerOpen = () =>
			setState(prevState => ({ ...prevState, drawerOpen: true }))
		const handleDrawerClose = () =>
			setState(prevState => ({ ...prevState, drawerOpen: false }))

		return (
			<Toolbar>
				<IconButton
					{...{
						edge: 'start',
						color: 'inherit',
						'aria-label': 'menu',
						'aria-haspopup': 'true',
						onClick: handleDrawerOpen,
					}}
				>
					<MenuIcon />
				</IconButton>

				<Drawer
					{...{
						anchor: 'left',
						open: drawerOpen,
						onClose: handleDrawerClose,
						className: 'drawerContainer',
					}}
				>
					<div>{getDrawerChoices()}</div>
				</Drawer>

				<div>{OpenHackDaySriLankaTitel}</div>
			</Toolbar>
		)
	}

	const getDrawerChoices = () =>
		headersData.map(({ label, href }) => (
			<Link
				{...{
					component: RouterLink,
					to: href,
					color: 'inherit',
					style: { textDecoration: 'none', color: '#AD6359' },
					key: label,
					// onClick: setActiveLinkClass,
					id: label + 1,
				}}
			>
				<MenuItem>
					<span {...{ id: label }} />
					{label}
				</MenuItem>
			</Link>
		))

	const OpenHackDaySriLankaTitel = (
		<Typography variant='h6' component='h1' className='logo'>
			OpenHackDay Sri Lanka
		</Typography>
	)

	const getMenuButtons = () =>
		headersData.map(({ label, href }) => (
			<Button
				{...{
					key: label,
					color: 'inherit',
					to: href,
					component: RouterLink,
					// onClick: setActiveLinkClass,
					id: label + 1,
					className: 'menuButton',
				}}
			>
				<span {...{ id: label }} />
				{label}
			</Button>
		))

	return (
		<header>
			<AppBar className='header'>
				{mobileView ? displayMobile() : displayDesktop()}
			</AppBar>
		</header>
	)
}

export default Navbar
