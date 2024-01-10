<section
	id="bio"
	class="section max-w-screen-lg grid md:grid-cols-[1fr_1.5fr] gap-y-8 gap-x-20 items-end max-md:overflow-hidden"
>
	<figure class="w-full min-w-0 max-md:max-w-[300px] max-md:mx-auto">
		<swiper-container effect="cards">
			{#each images as image}
				<swiper-slide>
					<img
						src={image && urlFor(image).size(600, 600).auto('format').url()}
						alt=""
						width={600}
						height={600}
						loading="lazy"
					/>
				</swiper-slide>
			{/each}
		</swiper-container>
	</figure>

	<div
		class="relative max-w-lg mx-auto richtext [&_em]:text-gradient [&_em]:bg-gradient-to-r"
	>
		<PortableText value={content} components={{}} />
	</div>
</section>

<style lang="postcss">
	figure {
		filter: drop-shadow(0 0.5rem 1.5rem #d7723e44);
	}
</style>

<script lang="ts">
	import { urlFor } from '$utils/sanity'
	import { PortableText } from '@portabletext/svelte'
	import { register } from 'swiper/element/bundle'

	register()

	const { content, images = [] } = $$props as Partial<{
		content: any
		images: Sanity.Image[]
	}>
</script>
