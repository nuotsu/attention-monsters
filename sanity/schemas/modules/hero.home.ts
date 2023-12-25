import { defineField, defineType } from 'sanity'
import { TfiLayoutCtaLeft } from 'react-icons/tfi'
import { getBlockText } from '../../src/utils'

export default defineType({
	name: 'hero.home',
	title: 'Hero (Homepage)',
	icon: TfiLayoutCtaLeft,
	type: 'object',
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			name: 'ctas',
			title: 'Call-to-actions',
			type: 'array',
			of: [{ type: 'cta' }],
		}),
	],
	preview: {
		select: {
			content: 'content',
		},
		prepare: ({ content }) => ({
			title: getBlockText(content),
			subtitle: 'Hero (centered)',
		}),
	},
})
