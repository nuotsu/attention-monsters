import { defineField, defineType } from 'sanity'
import { VscCalendar } from 'react-icons/vsc'

export default defineType({
	name: 'countdown',
	title: 'Countdown',
	icon: VscCalendar,
	type: 'object',
	fields: [
		defineField({
			name: 'datetime',
			type: 'datetime',
			validation: (rule) => rule.required(),
		}),
	],
})
