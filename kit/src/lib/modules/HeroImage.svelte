<picture class:applyGradient>
	{#if image}
		{@const { width, height } = getImageDimensions(image)}

		<img
			src={urlFor(image).auto('format').url()}
			alt={image.alt}
			{width}
			{height}
			loading="lazy"
			draggable="false"
		/>
	{/if}
</picture>

<style lang="postcss">
	.applyGradient {
		position: relative;
		display: block;

		&::after {
			content: '';
			position: absolute;
			inset: 0;
			mix-blend-mode: color;

			@apply bg-gradient-to-br from-orange to-blue;
		}
	}
</style>

<script lang="ts">
	import { urlFor } from '$utils/sanity'
	import { getImageDimensions } from '@sanity/asset-utils'

	const { image, applyGradient } = $$props as Partial<{
		image: Sanity.Image
		applyGradient: boolean
	}>
</script>
