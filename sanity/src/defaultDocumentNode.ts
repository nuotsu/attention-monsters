import { isDev, type SanityDocument } from 'sanity'
import type { DefaultDocumentNodeResolver } from 'sanity/structure'
import { Iframe } from 'sanity-plugin-iframe-pane'

const defaultDocumentNode: DefaultDocumentNodeResolver = (
	S,
	{ schemaType },
) => {
	switch (schemaType) {
		case 'page':
			return S.document().views([
				S.view.form(),
				S.view
					.component(Iframe)
					.options({
						url: (doc: SanityPage) => {
							const slug = doc?.metadata?.slug?.current
							const path = slug === 'index' ? '' : slug
							return isDev
								? `http://localhost:5173/${path}`
								: `https://attention-monsters-git-staging-nuotsu.vercel.app/${path}`
						},
						reload: {
							button: true,
						},
					})
					.title('Preview'),
			])

		default:
			return S.document().views([S.view.form()])
	}
}

export default defaultDocumentNode

type SanityPage = SanityDocument & {
	metadata?: { slug?: { current: string } }
}
