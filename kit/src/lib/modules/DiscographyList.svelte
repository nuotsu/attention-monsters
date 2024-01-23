<section class="section grid gap-12">
	<header class="richtext text-center">
		<PortableText value={content} components={{}} />
	</header>

	{#each discography as disc}
		<article
			class="w-full max-w-screen-sm mx-auto grid grid-cols-[auto,1fr] gap-4 sm:gap-8 items-start"
		>
			<div class="grid gap-3">
				<figure class="max-w-[80px] sm:max-w-[150px] mx-auto">
					{#if disc.image}
						<img
							src={urlFor(disc.image).size(300, 300).auto('format').url()}
							alt=""
							width={300}
							height={300}
							loading="lazy"
							draggable="false"
						/>
					{:else}
						<div
							class="aspect-square p-4 grid place-content-center bg-gradient-to-br from-white/10 to-transparent font-serif"
						>
							Coming soon...
						</div>
					{/if}
				</figure>

				<nav class="flex items-center justify-center text-xl">
					{#each disc.links || [] as link}
						<a
							class="px-1 transition-opacity text-orange"
							href={link}
							target="_blank"
						>
							{#if link.includes('spotify')}
								<IconSpotify />
							{:else if link.includes('apple')}
								<IconAppleMusic />
							{/if}
						</a>
					{/each}
				</nav>
			</div>

			<div class="relative z-[2] grid gap-2">
				<dt class="h2">{disc.title}</dt>
				<dd class="text-xs">
					{#if disc.releaseDate}
						<Date date={disc.releaseDate} />
					{:else}
						Coming soon...
					{/if}
				</dd>

				<dl class="grid gap-2 grid-cols-[auto,1fr] mt-3">
					<dt class="h5 max-w-max text-gradient bg-gradient-to-br">Songs</dt>
					<dd class="richtext">
						<ol>
							{#each disc.songs as song}
								<li>
									{song.title}

									{#if song.lyrics}
										<Lyrics {song} />
									{/if}
								</li>
							{/each}
						</ol>
					</dd>
				</dl>
			</div>
		</article>
	{/each}
</section>

<style>
	nav:has(a:hover) a:not(:hover) {
		opacity: 0.5;
	}
</style>

<script lang="ts">
	import { PortableText } from '@portabletext/svelte'
	import { page } from '$app/stores'
	import { urlFor } from '$utils/sanity'
	import IconSpotify from '$lib/icons/IconSpotify.svelte'
	import IconAppleMusic from '$lib/icons/IconAppleMusic.svelte'
	import Lyrics from './Lyrics.svelte'
	import Date from '$lib/Date.svelte'

	const { content } = $$props as Partial<{
		content: any
	}>

	$: ({ discography = [] } = $page.data)
</script>
