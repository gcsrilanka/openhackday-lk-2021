import { Container, Grid } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import speakers from '../../data/speakers.json'
import '../../scss/speakers.scss'

export default function Speakers() {
	return (
		<section id='Speakers'>
			<Container>
				<div className='title'>Speakers</div>
				<p className='intro'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<div className='team-boxed'>
					<Grid container>
						{speakers.map(item => (
							<Grid
								item
								xs={12}
								sm={6}
								md={3}
								justifyContent='center'
								className='item'
							>
								<div className='box'>
									<img
										className='rounded-circle'
										data-bs-hover-animate='pulse'
										src={item.img}
										alt='{{ item.name }}'
									/>
									<h3 className='name'>{item.name}</h3>
									<p className='role'>
										GitHub Campus Expert <br />
										Software Engineer
									</p>
									<div className='social'>
										<a href='www.google.com' target='_blank'>
											<i>
												<LinkedInIcon />
											</i>
										</a>
										<a href='www.google.com' target='_blank'>
											<i>
												<TwitterIcon />
											</i>
										</a>
										<a href='www.google.com' target='_blank'>
											<i>
												<InstagramIcon />
											</i>
										</a>

										<a href='www.google.com' target='_blank'>
											<i>
												<GitHubIcon />
											</i>
										</a>
									</div>
								</div>
							</Grid>
						))}
					</Grid>
				</div>
			</Container>
		</section>
	)
}
