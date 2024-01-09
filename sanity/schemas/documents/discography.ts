import { defineField, defineType } from 'sanity'
import { VscMusic } from 'react-icons/vsc'

export default defineType({
	name: 'discography',
	title: 'Discography',
	icon: VscMusic,
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'type',
			type: 'string',
			options: {
				list: ['Single', 'Album'],
			},
		}),
		defineField({
			name: 'releaseDate',
			type: 'date',
		}),
		defineField({
			name: 'images',
			type: 'array',
			of: [{ type: 'image' }],
		}),
		defineField({
			name: 'songs',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'song' }] }],
		}),
	],
	preview: {
		select: {
			title: 'title',
			type: 'type',
			releaseDate: 'releaseDate',
			images: 'images',
		},
		prepare: ({ title, type, releaseDate, images }) => ({
			title: title,
			subtitle: [releaseDate, type].filter(Boolean).join(' — '),
			media: images[0],
		}),
	},
})
