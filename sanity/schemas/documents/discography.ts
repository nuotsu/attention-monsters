import { defineField, defineType } from 'sanity'
import { VscMusic } from 'react-icons/vsc'

export default defineType({
	name: 'discography',
	title: 'Discography',
	icon: VscMusic,
	type: 'document',
	fieldsets: [
		{ title: 'Contents', name: 'contents', options: { columns: 2 } },
		{ title: 'Info', name: 'info', options: { columns: 2 } },
	],
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
			fieldset: 'contents',
		}),
		defineField({
			name: 'songs',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'song' }] }],
			fieldset: 'contents',
		}),
		defineField({
			name: 'releaseDate',
			type: 'date',
			fieldset: 'info',
		}),
		defineField({
			name: 'links',
			type: 'array',
			of: [{ type: 'url' }],
			fieldset: 'info',
		}),
		defineField({
			name: 'images',
			type: 'array',
			of: [{ type: 'image' }],
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
