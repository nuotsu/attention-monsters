import { defineField, defineType } from 'sanity'
import { VscOutput } from 'react-icons/vsc'
import { getBlockText } from '../../src/utils'

export default defineType({
	name: 'form.contact',
	title: 'Form (contact)',
	icon: VscOutput,
	type: 'object',
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			name: 'endpoint',
			type: 'url',
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			content: 'content',
		},
		prepare: ({ content }) => ({
			title: getBlockText(content),
			subtitle: 'Form (contact)',
		}),
	},
})
