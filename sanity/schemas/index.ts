// documents
import site from './documents/site'
import page from './documents/page'
import article from './documents/article'
import discography from './documents/discography'
import song from './documents/song'

// objects
import cta from './objects/cta'
import link from './objects/link'
import linkList from './objects/link.list'
import metadata from './objects/metadata'

// modules
import bio from './modules/bio'
import discographyList from './modules/discography-list'
import embeddedPlayer, { embeddedPlayerItem } from './modules/embedded-player'
import formContact from './modules/form.contact'
import heroHome from './modules/hero.home'
import heroImage from './modules/hero.image'

export const schemaTypes = [
	// documents
	site,
	page,
	article,
	discography,
	song,

	// objects
	cta,
	link,
	linkList,
	metadata,

	// modules
	bio,
	discographyList,
	embeddedPlayer,
	embeddedPlayerItem,
	formContact,
	heroHome,
	heroImage,
]
