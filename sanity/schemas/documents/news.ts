import { defineField, defineType } from 'sanity'
import { VscBellDot } from 'react-icons/vsc'

export default defineType({
	name: 'news',
	title: 'News',
	type: 'document',
	icon: VscBellDot,
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [{ title: 'Normal', value: 'normal' }],
				},
			],
		}),
		defineField({
			name: 'date',
			type: 'date',
		}),
	],
	preview: {
		select: {
			title: 'content',
			subtitle: 'date',
		},
	},
})
