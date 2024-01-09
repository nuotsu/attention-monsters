<nav class="h4 max-sm:mx-auto max-sm:anim-fade-to-b" style:grid-area="menu">
	<ul class="flex max-sm:flex-col gap-x-3 gap-y-2">
		{#each menu as page}
			<li>
				{#if page.type === 'internal'}
					<a href={page.internal?.metadata.slug.current}>
						{page.label || page.internal?.title}
					</a>
				{:else}
					<a href={page.external}>
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
