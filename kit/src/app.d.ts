import type { SanityDocument } from '@sanity/types'

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	namespace Sanity {
		// documents

		type Site = SanityDocument & {
			title: string
			menu: (Link | LinkList)[]
		}

		type Page = SanityDocument & {
			title: string
			modules: any[]
			metdata: Metadata
		}

		// objects

		type Link = {
			_type: 'link'
			label: string
			type: 'internal' | 'external'
			internal: Page
			exernal: string
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
	}
}

export {}
