import { defineField, defineType } from 'sanity'
import { VscMusic } from 'react-icons/vsc'
import { getBlockText } from '../../src/utils'

export default defineType({
	name: 'discography-list',
	title: 'Discography list',
	icon: VscMusic,
	type: 'object',
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
	],
	preview: {
		select: {
			title: 'content',
		},
		prepare: ({ title }) => ({
			title: getBlockText(title),
		}),
	},
})
