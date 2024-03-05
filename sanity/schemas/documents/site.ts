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
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'menu',
			type: 'array',
			of: [{ type: 'link' } /*{ type: 'link.list' }*/],
		}),
		defineField({
			name: 'social',
			type: 'array',
			of: [{ type: 'url' }],
		}),
		defineField({
			name: 'ogimage',
			title: 'Open Graph image',
			type: 'image',
		}),
	],
})
