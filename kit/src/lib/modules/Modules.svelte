{#each modules || [] as module (module._type)}
	{#if module._type === 'bio'}
		<Bio {...module} />
	{:else if module._type === 'embedded-player'}
		<EmbeddedPlayer {...module} />
	{:else if module._type === 'form.contact'}
		<FormContact {...module} />
	{:else if module._type === 'hero.home'}
		<HeroHome {...module} />
	{:else if module._type === 'hero.image'}
		<HeroImage {...module} />
	{:else}
		<div data-type={module._type} />
	{/if}
{/each}

<script lang="ts">
	import Bio from './Bio.svelte'
	import EmbeddedPlayer from './EmbeddedPlayer.svelte'
	import FormContact from './FormContact.svelte'
	import HeroHome from './HeroHome.svelte'
	import HeroImage from './HeroImage.svelte'

	export let modules: Sanity.Module[] = []
</script>
