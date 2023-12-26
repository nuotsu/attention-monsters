<svelte:head>
	<title>{data.page.metadata.title}</title>
	<meta name="description" content={data.page.metadata.description} />
</svelte:head>

<Modules modules={data.page.modules} />

<script lang="ts">
	import Modules from '$lib/modules/Modules.svelte'
	import type { PageServerData } from './$types'

	export let data: PageServerData
</script>
