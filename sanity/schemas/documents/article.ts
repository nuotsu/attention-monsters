import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'article',
	title: 'Article',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			name: 'publishDate',
			type: 'date',
		}),
		defineField({
			name: 'metadata',
			type: 'metadata',
		}),
	],
})
