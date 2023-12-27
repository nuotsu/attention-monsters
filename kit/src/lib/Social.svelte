<nav class={className}>
	{#each $page.data.site.social as social}
		<a class="transition-opacity" href={social}>
			{#if social.includes('spotify')}
				spotify
			{:else if social.includes('apple')}
				apple
			{:else if social.includes('youtube')}
				yt
			{:else if social.includes('instagram')}
				ig
			{:else if social.includes('tiktok')}
				tiktok
			{/if}
		</a>
	{/each}
</nav>

<style lang="postcss">
	nav:hover a:not(:hover) {
		opacity: 0.4;
	}
</style>

<script lang="ts">
	import { page } from '$app/stores'

	const { class: className } = $$props as {
		class: string
	}
</script>
