import { client } from '$utils/sanity'
import groq from 'groq'

const BASE_URL = 'https://attentionmonsters.com'

export async function GET() {
	const pages = await client.fetch<string[]>(
		groq`*[_type == 'page' && metadata.slug.current != 'index'].metadata.slug.current`,
	)

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			<url>
				<loc>${BASE_URL}/</loc>
				<changefreq>weekly</changefreq>
				<priority>1.0</priority>
			</url>
			${pages
				.map(
					(slug) =>
						`<url>
					<loc>${BASE_URL}/${slug}</loc>
					<changefreq>weekly</changefreq>
					<priority>0.9</priority>
				</url>`,
				)
				.join('')}
		</urlset>`.trim(),
		{
			headers: { 'content-type': 'application/xml' },
		},
	)
}
