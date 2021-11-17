import {
	Toolbar,
	AppBar,
	Typography,
	IconButton,
	Drawer,
	MenuItem,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useEffect, useState } from 'react'
import '../../scss/Navbar.scss'
import { Link } from 'react-scroll'

const headersData = [
	{
		label: 'Home',
		href: 'Home',
	},
	{
		label: 'About',
		href: 'About',
	},
	{
		label: 'Speakers',
		href: 'Speakers',
	},
	{
		label: 'Schedule',
		href: 'Schedule',
	},
	{
		label: 'Sponsor',
		href: 'Sponsor',
	},
	{
		label: 'FAQ',
		href: 'FAQ',
	},
	{
		label: 'Team',
		href: 'Team',
	}
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
			<Link activeClass='active' className='menuButton' to={href} spy smooth>
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
			<Link activeClass='active' className='menuButton' to={href} spy smooth>
				{label}
			</Link>
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
