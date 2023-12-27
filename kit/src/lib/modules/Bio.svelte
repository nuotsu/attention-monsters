<section
	class="section max-w-screen-lg grid md:grid-cols-[1fr_1.5fr] gap-y-8 gap-x-16 items-end"
>
	<figure class="w-full min-w-0 max-md:max-w-[300px] max-md:mx-auto">
		<swiper-container effect="cards">
			{#each images as image}
				<swiper-slide>
					<Img class="max-w-[400px]" {image} options={{ width: 600 }} />
				</swiper-slide>
			{/each}
		</swiper-container>
	</figure>

	<div
		class="max-w-lg mx-auto richtext [&_em]:text-gradient [&_em]:bg-gradient-to-r"
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
	import Img from '$lib/Img.svelte'
	import { PortableText } from '@portabletext/svelte'
	import { register } from 'swiper/element/bundle'

	const { content, images = [] } = $$props as Partial<{
		content: any
		images: Sanity.Image[]
	}>

	register()
</script>
