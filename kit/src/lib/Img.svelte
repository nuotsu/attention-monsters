<svelte:head>
	{#if preload}
		{#if src}
			<link rel="preload" as="image" href={src} />
		{/if}
		{#if srcset}
			<link rel="preload" as="image" href={srcset} />
		{/if}
	{/if}
</svelte:head>

{#if image}
	<picture class={className}>
		{#if imagePortrait}
			<source {srcset} {media} />
		{/if}

		<img
			class={imgClass}
			{src}
			alt={image.alt || ''}
			loading="lazy"
			{...rest}
		/>
	</picture>
{/if}

<script lang="ts">
	import { urlFor } from '$utils/sanity'
	import type { ImageUrlBuilderOptionsWithAliases } from '@sanity/image-url/lib/types/types'
	import type { HTMLImgAttributes } from 'svelte/elements'

	const {
		image,
		imagePortrait,
		media = '(min-aspect-ratio: 1)',
		class: className,
		imgClass,
		options = {},
		preload,
		...rest
	} = $$props as {
		image?: Sanity.Image
		imagePortrait?: Sanity.Image
		media: string
		class?: string
		imgClass?: string
		options?: Partial<ImageUrlBuilderOptionsWithAliases>
		preload: boolean
	} & HTMLImgAttributes

	const src = image && urlFor(image).withOptions(options).auto('format').url()

	const srcset =
		imagePortrait &&
		urlFor(imagePortrait).withOptions(options).auto('format').url()
</script>
