{#each data.page.modules || [] as module (module._key)}
	{#if module._type === 'hero.home'}
		<HeroHome {...module} />
	{:else}
		<div data-type={module._type} />
	{/if}
{/each}

<script lang="ts">
	import type { PageServerData } from './$types'

	import HeroHome from '$lib/modules/HeroHome.svelte'

	export let data: PageServerData
</script>
