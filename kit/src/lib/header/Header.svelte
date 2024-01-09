<header
	class="fixed z-10 top-0 w-full flex flex-wrap items-center gap-x-4 p-4 after:backdrop-blur"
>
	<a class="h3 drop-shadow-md" href="/" data-sveltekit-reload>
		{$page.data.site.title}
	</a>

	<Social
		class="ml-auto flex flex-wrap items-center justify-end [&_a]:px-1 font-serif max-md:text-sm drop-shadow-lg"
	/>
</header>

<style lang="postcss">
	header::after {
		pointer-events: none;
		position: absolute;
		z-index: -1;
		inset: 0 0 -3rem;
		mask-image: linear-gradient(to bottom, #000 10%, transparent);
	}
</style>

<script lang="ts">
	import { page } from '$app/stores'
	import Social from '$lib/Social.svelte'

	let offsetHeight: number
</script>
