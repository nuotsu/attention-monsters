<svelte:head>
	{#if image}
		<link rel="preload" as="image" href={src} />
	{/if}
</svelte:head>

<section class="relative grid items-end min-h-svh">
	{#if image}
		{@const { width, height } = getImageDimensions(image)}

		<picture class="absolute inset-0 before:top-0 after:bottom-0">
			<img
				class="size-full object-cover"
				{src}
				alt=""
				{width}
				{height}
				loading="eager"
				draggable="false"
			/>
		</picture>
	{/if}

	<div class="relative section w-full max-md:before:backdrop-blur">
		<div class="max-w-md richtext drop-shadow-xl [&_h1]:text-pretty">
			{#if pretitle}
				<p class="technical text-xs">{pretitle}</p>
			{/if}
			<PortableText value={content} components={{}} />
			<CTAList {ctas} class="!mt-4" />
		</div>
	</div>
</section>

<style lang="postcss">
	section {
		& picture::before,
		& picture::after {
			@apply absolute inset-x-0 h-1/4 from-black to-transparent pointer-events-none;
		}

		& picture::before {
			@apply bg-gradient-to-b;
		}

		& picture::after {
			@apply bg-gradient-to-t;
		}
	}

	.section::before {
		position: absolute;
		inset: -3rem 0 0 0;
		mask-image: linear-gradient(to top, #000e 50%, transparent);
	}
</style>

<script lang="ts">
	import { urlFor } from '$utils/sanity'
	import { getImageDimensions } from '@sanity/asset-utils'
	import { PortableText } from '@portabletext/svelte'
	import CTAList from '$lib/CTAList.svelte'

	const { pretitle, content, ctas, image } = $$props as Partial<{
		pretitle: string
		content: any
		ctas: Sanity.CTA[]
		image: Sanity.Image
	}>

	const src = image && urlFor(image).auto('format').url()
</script>
