<section class="section grid grid-cols-2 gap-4 md:gap-8 max-md:carousel">
	{#each items as item}
		<article class="shrink-0" style="--size: min(88vw, 300px)">
			<h2 class="sr-only">{item.title}</h2>

			{@html item.code}
		</article>
	{/each}
</section>

<script lang="ts">
	const { items = [] } = $$props as Partial<{
		items: {
			title: string
			code: string
		}[]
	}>
</script>
