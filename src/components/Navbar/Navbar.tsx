import {
	AppBar,
	Toolbar,
	Typography,
	makeStyles,
	Button,
	IconButton,
	Drawer,
	Link,
	MenuItem,
} from '@material-ui/core'
import MenuIcon from '@mui/icons-material/Menu'
import { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'

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
		label: 'Swag',
		href: '/Swag',
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

const useStyles = makeStyles(() => ({
	header: {
		width: '100%',
		backgroundColor: '#ffffff',
		'@media (max-width: 900px)': {
			paddingLeft: 0,
		},
		color: '#AD6359',
	},
	logo: {
		fontFamily: 'Work Sans, sans-serif',
		fontWeight: 600,
		color: '#193D5D',
		textAlign: 'left',
	},
	menuButton: {
		fontFamily: 'Work Sans, sans-serif',
		fontWeight: 700,
		size: '18px',
		marginLeft: '30px',
		textTransform: 'none',
		color: '#AD6359',
		'@media (max-width: 1024px)': {
			marginLeft: '10px',
		},
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	drawerContainer: {
		padding: '20px 30px',
	},
	active: {
		width: '6px',
		height: '6px',
		backgroundColor: '#193D5D',
		color: '#193D5D',
		borderRadius: '100%',
		marginRight: '10px',
		'@media (max-width: 900px)': {
			color: '#193D5D',
		},
		display: 'block',
	},
	activeTextColor: {
		color: '#193D5D',
		textDecoration: '#193D5D',
		'@media (max-width: 900px)': {
			color: '#193D5D !important',
			textDecoration: '#193D5D',
		},
	},
}))

export default function Header() {
	const {
		header,
		logo,
		menuButton,
		toolbar,
		drawerContainer,
		active,
		activeTextColor,
	} = useStyles()

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
		<Toolbar className={toolbar}>
			{OpenHackDaySriLankaTitel}
			<div>{getMenuButtons()}</div>
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
					}}
				>
					<div className={drawerContainer}>{getDrawerChoices()}</div>
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
					onClick: setActiveLinkClass,
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
		<Typography variant='h6' component='h1' className={logo}>
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
					className: menuButton,
					onClick: setActiveLinkClass,
					id: label + 1,
				}}
			>
				<span {...{ id: label }} />
				{label}
			</Button>
		))

	const setActiveLinkClass = () => {
		// get current page path
		const path = window.location.hash
		// set the active link class
		const activeLink = path.split('/')[1]

		const activeElement = document.getElementById(activeLink)

		// @ts-ignore: Object is possibly 'null'
		const activeElementText = document.getElementById(activeLink + 1)

		// @ts-ignore: Object is possibly 'null'
		if (activeElement != null) {
			activeElement.classList.add(active)
			// @ts-ignore: Object is possibly 'null'
			activeElementText.classList.add(activeTextColor)
		}
	}

	return (
		<header>
			<AppBar className={header}>
				{mobileView ? displayMobile() : displayDesktop()}
			</AppBar>
		</header>
	)
}
