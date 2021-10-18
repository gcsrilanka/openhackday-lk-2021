import '../../scss/team.scss'
import teamMembers from '../../data/team.json'

export default function Team() {
	return (
		<div className='wrapper'>
			<div className='title'>Team</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
			<div className='teamWrapper'>
				{teamMembers.map(item => (
					<div className='avatar' key={item.id}>
						<img src={item.img} alt={item.name} />
					</div>
				))}
			</div>
		</div>
	)
}
