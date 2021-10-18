import React from 'react'
import classNames from '../../scss/FAQ.module.scss'
import faqData from '../../data/faqs.json'

export default function FAQ() {
	return (
		<div className={classNames.wrapper}>
			<div className={classNames.title}>FAQ</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
			<div className={classNames.cardWrapper}>
				{faqData.map(item => (
					<div className={classNames.card} key={item.id}>
						<div className={classNames.question}>{item.question}</div>
						<p className={classNames.answer}>{item.answer}</p>
					</div>
				))}
			</div>
		</div>
	)
}
