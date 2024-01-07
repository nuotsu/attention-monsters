// documents
import site from './documents/site'
import page from './documents/page'

// objects
import cta from './objects/cta'
import link from './objects/link'
import linkList from './objects/link.list'
import metadata from './objects/metadata'

// modules
import bio from './modules/bio'
import embeddedPlayer, { embeddedPlayerItem } from './modules/embedded-player'
import formContact from './modules/form.contact'
import heroHome from './modules/hero.home'

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
	bio,
	embeddedPlayer,
	embeddedPlayerItem,
	formContact,
	heroHome,
]
