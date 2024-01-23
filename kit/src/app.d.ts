import type { SanityAssetDocument } from '@sanity/client'
import type { SanityDocument } from '@sanity/types'

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}

		interface PageData {
			site: Sanity.Site
			news: Sanity.News[]
			discography: Sanity.Discography[]
		}

		// interface PageState {}
		// interface Platform {}
	}

	namespace Sanity {
		// documents

		type Site = SanityDocument & {
			title: string
			logo: Image
			menu: Link[]
			social: string[]
			ogimage: Image
		}

		type News = SanityDocument & {
			content: any
			date: string
		}

		type Page = SanityDocument & {
			title: string
			modules?: Module[]
			metadata: Metadata
		}

		type Article = SanityDocument & {
			title: string
			content: any
			publishDate: string
			metadata: Metadata
		}

		type Discography = SanityDocument & {
			title: string
			type: 'Single' | 'Album'
			songs: Song[]
			releaseDate: string
			links: string[]
			image: Image
		}

		type Song = SanityDocument & {
			title: string
			lyrics: any
		}

		// objects

		type CTA = {
			link: Link
			style: 'action' | 'link'
		}

		type Image = SanityAssetDocument & {
			alt?: string
		}

		type Link = {
			_type: 'link'
			label: string
			type: 'internal' | 'external'
			internal?: Page
			external?: string
		}

		type LinkList = {
			_type: 'link.list'
			label: string
			links: Link[]
		}

		type Metadata = {
			title: string
			description: string
			slug: {
				current: string
			}
		}

		type Module = {
			_type: string
			_key: string
		}
	}
}

export {}
