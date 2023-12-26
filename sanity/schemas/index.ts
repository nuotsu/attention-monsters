// documents
import site from './documents/site'
import page from './documents/page'

// objects
import cta from './objects/cta'
import link from './objects/link'
import linkList from './objects/link.list'
import metadata from './objects/metadata'

// modules
import heroHome from './modules/hero.home'
import embeddedPlayer, { embeddedPlayerItem } from './modules/embedded-player'

export const schemaTypes = [
	// documents
	site,
	page,

	// objects
	cta,
	link,
	linkList,
	metadata,

	// modules
	embeddedPlayer,
	embeddedPlayerItem,
	heroHome,
]
