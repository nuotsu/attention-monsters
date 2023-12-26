<header
	class="sticky z-10 top-0 flex flex-wrap items-center justify-between gap-4 p-4 after:backdrop-blur"
	bind:offsetHeight
>
	<a class="h3 drop-shadow-md" href="/" data-sveltekit-reload>
		{$page.data.site.title}
	</a>

	<Social class="flex items-center gap-2 font-serif text-sm drop-shadow-lg" />
</header>

<style lang="postcss">
	header::after {
		mask-image: linear-gradient(to bottom, #000, transparent);
		@apply absolute inset-0 -bottom-8 z-[-1];
	}
</style>

<script lang="ts">
	import { page } from '$app/stores'
	import Social from '$lib/Social.svelte'

	let offsetHeight: number

	$: {
		if (offsetHeight) {
			document.documentElement.style.setProperty(
				'--header-height',
				`${offsetHeight}px`,
			)
		}
	}
</script>
