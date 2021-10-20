import { Container } from '@mui/material'
import speakers from '../../data/speakers.json'
import '../../scss/main.scss'
import '../../scss/speakers.scss'

export default function Speakers() {
	return (
		<Container>
			<div className='wrapper'>
				<div className='title'>Speakers</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<div className='speakerWrapper'>
					{speakers.map(item => (
						<div className='avatar' key={item.id}>
							<img src={item.img} alt={item.name} />
						</div>
					))}
				</div>
			</div>
		</Container>
	)
}
