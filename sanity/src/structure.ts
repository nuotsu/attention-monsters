import { list, singleton } from './utils'
import type { StructureResolver } from 'sanity/desk'

import { VscEdit, VscMusic, VscServerProcess } from 'react-icons/vsc'

const structure: StructureResolver = (S, context) =>
	S.list()
		.title('Content')
		.items([
			singleton(S, 'Site', 'site').icon(VscServerProcess),
			list(S, 'Pages', 'page'),
			S.divider(),
			list(S, 'Articles', 'article').icon(VscEdit),
			S.divider(),
			list(S, 'Discography', 'discography').icon(VscMusic),
			list(S, 'Songs', 'song').icon(VscMusic),
		])

export default structure
