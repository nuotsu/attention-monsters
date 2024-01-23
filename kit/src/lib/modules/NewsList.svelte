<section class="section">
	<header class="richtext text-center">
		<PortableText value={content} components={{}} />
	</header>

	<ul
		class="max-w-screen-sm mt-4 mx-auto px-2 bg-gradient-to-r from-white/10 to-transparent"
	>
		{#each $page.data.news as news}
			<li class="grid grid-cols-[auto,1fr] gap-x-4 p-2">
				<Date
					date={news.date}
					options={{ month: 'short' }}
					className="font-serif"
				/>

				<PortableText value={news.content} components={{}} />
			</li>
		{/each}
	</ul>
</section>

<script lang="ts">
	import { page } from '$app/stores'
	import { PortableText } from '@portabletext/svelte'
	import Date from '$lib/Date.svelte'

	const { content } = $$props as Partial<{
		content: any
	}>
</script>
