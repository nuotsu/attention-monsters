<section class="section grid gap-12">
	<header class="richtext text-center">
		<PortableText value={content} components={{}} />
	</header>

	{#each discography as disc}
		<article
			class="w-full max-w-screen-sm mx-auto grid md:grid-cols-[auto,1fr] gap-8 items-start"
		>
			<div class="grid gap-3">
				<swiper-container class="max-w-[150px]" effect="cards">
					{#each disc.images as image}
						<swiper-slide>
							<img
								src={urlFor(image).size(300, 300).auto('format').url()}
								alt=""
								width={300}
								height={300}
								loading="lazy"
								draggable="false"
							/>
						</swiper-slide>
					{/each}
				</swiper-container>

				<nav class="flex items-center justify-center text-xl">
					{#each disc.links as link}
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
					<time datetime={disc.releaseDate}>
						{format(new Date(disc.releaseDate))}
					</time>
				</dd>

				<dl class="grid gap-2 mt-3">
					<dt class="h3 max-w-max text-gradient bg-gradient-to-br">Songs</dt>
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
	import { register } from 'swiper/element/bundle'
	import IconSpotify from '$lib/icons/IconSpotify.svelte'
	import IconAppleMusic from '$lib/icons/IconAppleMusic.svelte'
	import Lyrics from './Lyrics.svelte'

	register()

	const { content } = $$props as Partial<{
		content: any
	}>

	$: ({ discography = [] } = $page.data)

	const { format } = new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
</script>
