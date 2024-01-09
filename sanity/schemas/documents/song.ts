import { defineField, defineType } from 'sanity'
import { VscMusic } from 'react-icons/vsc'

export default defineType({
	name: 'song',
	title: 'Song',
	icon: VscMusic,
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'lyrics',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [{ title: 'Normal', value: 'normal' }],
				},
			],
		}),
	],
})
