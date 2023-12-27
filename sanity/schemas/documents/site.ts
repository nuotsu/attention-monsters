import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'site',
	title: 'Site',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'logo',
			type: 'image',
		}),
		defineField({
			name: 'menu',
			type: 'array',
			of: [{ type: 'link' }, { type: 'link.list' }],
		}),
		defineField({
			name: 'social',
			type: 'array',
			of: [{ type: 'url' }],
		}),
	],
})
