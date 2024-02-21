// documents
import site from './documents/site'
import news from './documents/news'
import page from './documents/page'
import article from './documents/article'
import discography from './documents/discography'
import song from './documents/song'

// objects
import countdown from './objects/countdown'
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
import newsList from './modules/news-list'

export const schemaTypes = [
	// documents
	site,
	news,
	page,
	article,
	discography,
	song,

	// objects
	countdown,
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
	newsList,
]
