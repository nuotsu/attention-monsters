import { defineField, defineType } from 'sanity'
import { VscFileMedia } from 'react-icons/vsc'

export default defineType({
	name: 'hero.image',
	title: 'Hero (image)',
	icon: VscFileMedia,
	type: 'object',
	fields: [
		defineField({
			name: 'image',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				defineField({
					name: 'alt',
					type: 'string',
				}),
			],
		}),
		defineField({
			name: 'applyGradient',
			type: 'boolean',
			initialValue: false,
		}),
	],
	preview: {
		select: {
			title: 'image.alt',
			media: 'image',
		},
		prepare: ({ title, media }) => ({
			title,
			subtitle: 'Hero (image)',
			media,
		}),
	},
})
