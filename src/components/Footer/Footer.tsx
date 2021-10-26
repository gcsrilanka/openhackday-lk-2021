import { Container, Grid, Link, List, ListItemText } from '@mui/material'
import React from 'react'
import '../../scss/_variables.scss'
import '../../scss/footer.scss'

const Footer = () => (
	<div>
		<div className='footer'>
			<Container>
				<Grid container justifyContent='' className='footer'>
					<Grid item xs={12} sm={4} md={4}>
						<h2>
							OpenHackDay <br /> Sri Lanka
						</h2>
					</Grid>
					<Grid item xs={12} sm={4} md={3}>
						<h3>Docs</h3>
						<List className='list'>
							<Link href='/' className='link'>
								<ListItemText className='list'>Tutorial</ListItemText>
							</Link>
						</List>
					</Grid>
					<Grid item xs={12} sm={4} md={3}>
						<h3>Community</h3>

						<List className='list'>
							<Link href='https://github.com/GitHubExperts-LK/' className='link'>
								<ListItemText className='list'>GitHub</ListItemText>
							</Link>
							<Link href='https://discord.com/invite/uR84QnAC' className='link'>
								<ListItemText className='list'>Discord</ListItemText>
							</Link>
							<Link href='https://twitter.com/gcsrilanka' className='link'>
								<ListItemText className='list'>Twitter</ListItemText>
							</Link>
							<Link href='https://www.facebook.com/GitHubCommunityLK' className='link'>
								<ListItemText className='list'>Facebook</ListItemText>
							</Link>
							<Link href='https://www.instagram.com/gcsrilanka/' className='link'>
								<ListItemText className='list'>Instagram</ListItemText>
							</Link>
							<Link
								href='https://www.youtube.com/channel/UCVapZkkBAbbYhpl5UeFvrFQ'
								className='link'
							>
								<ListItemText className='list'>YouTube</ListItemText>
							</Link>
						</List>
					</Grid>
				</Grid>
			</Container>
		</div>
		<Grid container justifyContent='center' style={{ padding: '15px' }}>
			Copyright © 2021 OpenHackDay. Built with 🖤 in Sri Lanka.
		</Grid>
	</div>
)

export default Footer
