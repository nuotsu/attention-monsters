<header class="sticky z-10 top-0 p-4 after:backdrop-blur" bind:offsetHeight>
	<a class="h3 drop-shadow-md" href="/" data-sveltekit-reload>
		{$page.data.site.title}
	</a>
</header>

<style lang="postcss">
	header::after {
		mask-image: linear-gradient(to bottom, #000, transparent);
		@apply absolute inset-0 -bottom-8 z-[-1];
	}
</style>

<script lang="ts">
	import { page } from '$app/stores'

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
