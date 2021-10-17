import React from 'react'
import classNames from './Sponsors.module.scss'
import gceLogo from '../../assets/images/gc-srilanka-logoblack 1.png'
import sliitLogo from '../../assets/images/logo-dark 1.png'
import hfLogo from '../../assets/images/logo-hacktoberfest-full.f42e3b1 1.png'
import doLogo from '../../assets/images/Vector.png'

export default function Sponsors() {
	return (
		<div className={classNames.wrapper}>
			<h2 className={classNames.title}>Sponsors</h2>
			<div className={classNames.logoWrapper}>
				<img src={hfLogo} alt='Hacktoberfest' />
				<img src={doLogo} alt='DigitalOcean' />
				<img src={gceLogo} alt='Github Campus Experts' />
				<img src={sliitLogo} alt='Sliit FOSS' />
			</div>
		</div>
	)
}
