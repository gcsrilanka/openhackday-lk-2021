import classNames from '../../scss/Team.module.scss'
import teamMembers from '../../data/team.json'

export default function Team() {
	return (
		<div className={classNames.wrapper}>
			<div className={classNames.title}>Team</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
			<div className={classNames.teamWrapper}>
				{teamMembers.map(item => (
					<div className={classNames.avatar} key={item.id}>
						<img src={item.img} alt={item.name} />
					</div>
				))}
			</div>
		</div>
	)
}
