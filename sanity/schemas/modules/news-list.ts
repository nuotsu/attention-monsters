import { defineField, defineType } from 'sanity'
import { VscBellDot } from 'react-icons/vsc'
import { getBlockText } from '../../src/utils'

export default defineType({
	name: 'news-list',
	title: 'News list',
	type: 'object',
	icon: VscBellDot,
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
	],
	preview: {
		select: {
			content: 'content',
		},
		prepare: ({ content }) => ({
			title: getBlockText(content),
			subtitle: 'News list',
		}),
	},
})
