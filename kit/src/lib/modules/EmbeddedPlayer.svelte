<section class="relative">
	<div
		class="section grid grid-cols-[var(--cols)] gap-4 sm:gap-8 max-sm:carousel"
		style:--cols={items.filter((item) => item.enabled).length}
	>
		{#each items as item}
			{#if item.enabled}
				<article
					class="shrink-0 w-full sm:max-w-[650px] mx-auto"
					style="--size: min(88vw, 300px)"
				>
					<h2 class="sr-only">{item.title}</h2>

					{@html item.code}
				</article>
			{/if}
		{/each}
	</div>
</section>

<script lang="ts">
	const { items = [] } = $$props as Partial<{
		items: {
			enabled: boolean
			title: string
			code: string
		}[]
	}>
</script>
