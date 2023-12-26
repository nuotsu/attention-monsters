{#each modules || [] as module (module._type)}
	{#if module._type === 'hero.home'}
		<HeroHome {...module} />
	{:else}
		<div data-type={module._type} />
	{/if}
{/each}

<script lang="ts">
	import HeroHome from './HeroHome.svelte'

	export let modules: Sanity.Module[] = []
</script>
