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
			social: string[]
		}

		type Page = SanityDocument & {
			title: string
			modules?: Module[]
			metadata: Metadata
		}

		// objects

		type CTA = {
			link: Link
			style: 'action' | 'link'
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
