<nav
	class="h4 max-sm:mx-auto drop-shadow-md max-sm:anim-fade-to-b"
	style:grid-area="menu"
>
	<ul class="flex flex-wrap max-sm:flex-col items-center max-sm:gap-y-2">
		{#each menu as page}
			<li>
				{#if page.type === 'internal'}
					<a
						class="px-2 transition-opacity"
						href={page.internal?.metadata.slug.current}
					>
						{page.label || page.internal?.title}
					</a>
				{:else}
					<a class="px-2 transition-opacity" href={page.external}>
						{page.label}
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav:has(a:hover) a:not(:hover) {
		opacity: 0.4;
	}
</style>

<script lang="ts">
	import { page } from '$app/stores'

	$: ({ menu } = $page.data.site)
</script>
