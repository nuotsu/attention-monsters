<nav class={className}>
	{#each $page.data.site.social as social}
		<a href={social}>
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

<script lang="ts">
	import { page } from '$app/stores'

	const { class: className } = $$props as {
		class: string
	}
</script>
