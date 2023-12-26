{#if ctas}
	<p class={twMerge('flex gap-x-[.5em] items-center', className)}>
		{#each ctas as cta}
			<CTA {cta} />
		{/each}
	</p>
{/if}

<script lang="ts">
	import CTA from './CTA.svelte'
	import { twMerge } from 'tailwind-merge'

	const { ctas, class: className } = $$props as {
		ctas?: Sanity.CTA[]
		class?: string
	}
</script>
