<nav class={className} style:grid-area={gridArea}>
	{#each $page.data.site.social as social}
		<a class="transition-opacity" href={social}>
			{#if social.includes('spotify')}
				Spotify
			{:else if social.includes('apple')}
				Apple
			{:else if social.includes('youtube')}
				YouTube
			{:else if social.includes('instagram')}
				Instagram
			{:else if social.includes('tiktok')}
				TikTok
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

	const { class: className, gridArea } = $$props as {
		class: string
		gridArea?: string
	}
</script>
