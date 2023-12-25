import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import {
	dashboardTool,
	projectInfoWidget,
	projectUsersWidget,
} from '@sanity/dashboard'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

import defaultDocumentNode from './src/defaultDocumentNode'
import structure from './src/structure'

const singletonTypes = ['site']

export default defineConfig({
	name: 'default',
	title: 'Attention Monsters',

	projectId: '6qmz2lrb',
	dataset: 'production',

	plugins: [
		deskTool({ defaultDocumentNode, structure }),
		dashboardTool({ widgets: [projectInfoWidget(), projectUsersWidget()] }),
		visionTool(),
	],

	schema: {
		types: schemaTypes,
		templates: (templates) =>
			templates.filter(
				({ schemaType }) => !singletonTypes.includes(schemaType),
			),
	},

	document: {
		actions: (input, { schemaType }) =>
			singletonTypes.includes(schemaType)
				? input.filter(
						({ action }) =>
							action &&
							['publish', 'discardChanges', 'restore'].includes(action),
					)
				: input,
	},
})
