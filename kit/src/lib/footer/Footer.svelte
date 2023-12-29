<footer class="sticky bottom-0 section w-full py-8" bind:offsetHeight>
	<p class="h2 text-gradient bg-gradient-to-br text-center opacity-20">
		<a href={instagram}>#attentionmonsters</a>
	</p>

	<div
		class="flex flex-wrap max-md:flex-col items-center justify-between gap-4 text-white/60"
	>
		<Social class="flex flex-wrap [&_a]:px-1 font-serif text-sm md:order-1" />

		<p class="font-serif">
			<small>
				&copy; {new Date().getFullYear()}
				— {$page.data.site.title} — 💀🥀
			</small>
		</p>
	</div>
</footer>

<script lang="ts">
	import { page } from '$app/stores'
	import Social from '$lib/Social.svelte'

	let offsetHeight: number

	const instagram = ($page.data.site as Sanity.Site).social.find((s) =>
		s.includes('instagram'),
	)

	$: {
		if (offsetHeight) {
			document.documentElement.style.setProperty(
				'--footer-height',
				`${offsetHeight}px`,
			)
		}
	}
</script>
