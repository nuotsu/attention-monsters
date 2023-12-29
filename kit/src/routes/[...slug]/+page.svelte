<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://attentionmonsters.com" />
	{#if ogimage}
		<meta property="og:image" content={urlFor(ogimage).url()} />
	{/if}
</svelte:head>

<Modules modules={data.page.modules} />

<script lang="ts">
	import Modules from '$lib/modules/Modules.svelte'
	import { page } from '$app/stores'
	import { urlFor } from '$utils/sanity'
	import type { PageServerData } from './$types'

	export let data: PageServerData

	$: ({ title, description } = data.page.metadata)
	$: ({ ogimage } = $page.data.site)
</script>
