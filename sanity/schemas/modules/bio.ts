import { defineField, defineType } from 'sanity'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { getBlockText } from '../../src/utils'

export default defineType({
	name: 'bio',
	title: 'Bio',
	icon: BsFillPersonLinesFill,
	type: 'object',
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			name: 'images',
			type: 'array',
			of: [
				defineField({
					name: 'image',
					type: 'image',
					fields: [
						defineField({
							name: 'alt',
							type: 'string',
						}),
					],
				}),
			],
		}),
	],
	preview: {
		select: {
			content: 'content',
			images: 'images',
		},
		prepare: ({ content, images }) => ({
			title: getBlockText(content),
			subtitle: 'Bio',
			media: images[0],
		}),
	},
})
