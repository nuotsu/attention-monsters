<div
	class="gap-4 sm:gap-8 carousel before:m-auto after:m-auto"
	style:--cols={items.filter((item) => item.enabled).length}
>
	{#each items as item}
		{#if item.enabled}
			<article
				class="shrink-0 md:[--max:640px]"
				style:--size="min(88vw, var(--max, 300px))"
			>
				<h2 class="sr-only">{item.title}</h2>

				{@html item.code}
			</article>
		{/if}
	{/each}
</div>

<script lang="ts">
	const { items = [] } = $$props as Partial<{
		items: {
			enabled: boolean
			title: string
			code: string
		}[]
	}>
</script>
