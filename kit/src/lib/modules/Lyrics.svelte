<details class="contents" name="song" bind:open>
	<summary class="inline-block link decoration-blue/50 text-blue text-xs ml-2">
		{#if open}
			Hide lyrics
		{:else}
			View lyrics
		{/if}
	</summary>

	{#key open}
		<div class="relative font-serif ml-2 anim-fade-to-b">
			<div class="py-6 max-h-[20em] overflow-y-auto richtext">
				<PortableText value={song.lyrics} components={{}} />
			</div>
		</div>
	{/key}
</details>

<style lang="postcss">
	div::before {
		content: '';
		pointer-events: none;
		position: absolute;
		inset: 0;
		background-image: linear-gradient(
			to bottom,
			#000,
			#0000 3em,
			#0000 calc(100% - 3em),
			#000
		);
	}
</style>

<script lang="ts">
	import { PortableText } from '@portabletext/svelte'

	export let song: Sanity.Song

	let open = false
</script>
