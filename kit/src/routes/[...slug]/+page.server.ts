import { client } from '$utils/sanity'
import groq from 'groq'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params: { slug } }) => {
	const data = await client.fetch(
		groq`{
		'page': *[_type == 'page' && metadata.slug.current == $slug][0],
		'news': *[_type == 'news'] | order(date desc),
		'discography': *[_type == 'discography']|order(releaseDate desc){
			...,
			songs[]->
		}
	}`,
		{ slug: slug === '' ? 'index' : slug },
	)

	if (!data) error(404, 'Page not found')

	return data
}
