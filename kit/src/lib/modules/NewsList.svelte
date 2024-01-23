<section class="section">
	<header class="richtext text-center">
		<PortableText value={content} components={{}} />
	</header>

	<ul
		class="max-w-screen-sm mt-4 mx-auto px-2 bg-gradient-to-r from-white/10 to-transparent max-sm:text-sm"
	>
		{#each $page.data.news as news}
			<li
				class="
					grid sm:grid-cols-[5em,1fr] gap-x-4 gap-y-1 p-2
					[&_a]:link [&_a]:decoration-white/40
				"
			>
				<Date
					date={news.date}
					options={{ month: 'short' }}
					className="font-serif sm:text-center"
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
