<header class="sticky z-10 top-0 p-4 mix-blend-difference" bind:offsetHeight>
	<a class="h3" href="/" data-sveltekit-reload>{$page.data.site.title}</a>
</header>

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
