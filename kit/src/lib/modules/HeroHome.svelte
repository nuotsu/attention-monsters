<section
	class="relative grid items-end min-h-[calc(100dvh-var(--header-height))]"
>
	<Img
		class="absolute inset-0 before:top-0 after:bottom-0"
		imgClass="size-full object-cover"
		{image}
		{imagePortrait}
		preload
		loading="eager"
		draggable={false}
	/>

	<div class="relative section w-full">
		<div class="max-w-md richtext [&_h1]:text-pretty">
			{#if pretitle}
				<p class="technical text-xs">{pretitle}</p>
			{/if}
			<PortableText value={content} components={{}} />
			<CTAList {ctas} />
		</div>
	</div>
</section>

<style lang="postcss">
	section {
		& :global(picture::before),
		:global(picture::after) {
			@apply absolute inset-x-0 h-1/4 from-black to-transparent pointer-events-none;
		}

		& :global(picture::before) {
			@apply bg-gradient-to-b;
		}

		& :global(picture::after) {
			@apply bg-gradient-to-t;
		}
	}
</style>

<script lang="ts">
	import Img from '$lib/Img.svelte'
	import { PortableText } from '@portabletext/svelte'
	import CTAList from '$lib/CTAList.svelte'

	const { pretitle, content, ctas, image, imagePortrait } = $$props as Partial<{
		pretitle: string
		content: any
		ctas: Sanity.CTA[]
		image: Sanity.Image
		imagePortrait: Sanity.Image
	}>
</script>
