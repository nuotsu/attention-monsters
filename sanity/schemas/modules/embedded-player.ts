import { defineField, defineType } from 'sanity'
import { BsFillMusicPlayerFill } from 'react-icons/bs'

export default defineType({
	name: 'embedded-player',
	title: 'Embedded player',
	icon: BsFillMusicPlayerFill,
	type: 'object',
	fields: [
		defineField({
			name: 'items',
			type: 'array',
			of: [{ type: 'embedded-player.item' }],
		}),
	],
	preview: {
		select: {
			items: 'items',
		},
		prepare: ({ items }) => ({
			title: `${items?.length || 0} items`,
			subtitle: 'Embedded player',
		}),
	},
})

export const embeddedPlayerItem = defineType({
	name: 'embedded-player.item',
	title: 'Embedded player item',
	icon: BsFillMusicPlayerFill,
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'code',
			type: 'text',
		}),
	],
})
