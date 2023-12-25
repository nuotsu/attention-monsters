import { createClient } from '@sanity/client'
import {
	PUBLIC_SANITY_PROJECT_ID,
	PUBLIC_SANITY_TOKEN,
} from '$env/static/public'
import { dev } from '$app/environment'

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: 'production',
	apiVersion: '2023-12-25',
	useCdn: !dev,
	token: PUBLIC_SANITY_TOKEN,
})
