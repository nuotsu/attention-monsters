import { client } from '$lib/sanity'
import groq from 'groq'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params: { slug } }) => {
	const page = await client.fetch<Sanity.Page>(
		groq`*[_type == 'page' && metadata.slug.current == $slug][0]`,
		{ slug: slug === '' ? 'index' : slug },
	)

	if (!page) error(404, 'Page not found')

	return {
		page,
	}
}
