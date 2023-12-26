import { client } from '$utils/sanity'
import groq from 'groq'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async () => {
	const site = await client.fetch<Sanity.Site>(groq`*[_type == 'site'][0]`)

	return {
		site,
	}
}
