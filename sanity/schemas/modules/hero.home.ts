import { defineField, defineType } from 'sanity'
import { TfiLayoutCtaLeft } from 'react-icons/tfi'
import { getBlockText } from '../../src/utils'

export default defineType({
	name: 'hero.home',
	title: 'Hero (Homepage)',
	icon: TfiLayoutCtaLeft,
	type: 'object',
	fieldsets: [{ name: 'images', title: 'Images', options: { columns: 2 } }],
	fields: [
		defineField({
			name: 'pretitle',
			type: 'string',
		}),
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
		defineField({
			name: 'image',
			type: 'image',
			fields: [
				defineField({
					name: 'alt',
					type: 'string',
				}),
			],
			fieldset: 'images',
		}),
		defineField({
			name: 'imagePortrait',
			type: 'image',
			fieldset: 'images',
		}),
	],
	preview: {
		select: {
			content: 'content',
			media: 'image',
		},
		prepare: ({ content, media }) => ({
			title: getBlockText(content),
			subtitle: 'Hero (centered)',
			media,
		}),
	},
})
