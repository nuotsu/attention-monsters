const BASE_URL = 'https://attentionmonsters.com'

export function GET() {
	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			<url>
				<loc>${BASE_URL}/</loc>
				<changefreq>weekly</changefreq>
				<priority>1.0</priority>
			</url>
		</urlset>`.trim(),
		{
			headers: { 'content-type': 'application/xml' },
		},
	)
}
