<footer
	class="sticky bottom-0 section py-8 w-full flex flex-wrap max-md:flex-col items-center justify-between gap-4 text-white/60"
>
	<Social class="flex flex-wrap gap-2 font-serif text-sm md:order-1" />

	<p class="font-serif">
		<small>
			&copy; {new Date().getFullYear()}
			— {$page.data.site.title} — 💀🥀
		</small>
	</p>
</footer>

<script lang="ts">
	import { page } from '$app/stores'
	import Social from '$lib/Social.svelte'
</script>
