<input id="menu-open" type="checkbox" hidden />

<header
	class="fixed z-10 top-0 w-full grid gap-4 items-center p-4 after:backdrop-blur"
>
	<div style:grid-area="logo">
		<a
			href="/"
			data-sveltekit-reload
			class="h3 max-sm:h4 text-nowrap drop-shadow-md"
		>
			{title}
		</a>
	</div>

	<nav class="h4 max-sm:mx-auto max-sm:anim-fade-to-b" style:grid-area="menu">
		<ul>
			{#each menu as page}
				<li>
					{#if page.type === 'internal'}
						<a href={page.internal?.metadata.slug.current}>
							{page.label || page.internal?.title}
						</a>
					{:else}
						<a href={page.external}>
							{page.label}
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>

	<Social
		class="social flex flex-wrap items-center justify-center sm:justify-end [&_a]:px-1 font-serif max-md:text-sm drop-shadow-lg max-sm:anim-fade-to-b"
		gridArea="social"
	/>

	<label
		class="ml-auto sm:hidden text-xl before:content-['💀']"
		style:grid-area="toggle"
		for="menu-open"
		aria-label="Toggle menu"
	/>
</header>

<style lang="postcss">
	header {
		grid-template-columns: 1fr auto;
		grid-template-areas:
			'logo		toggle'
			'menu		menu'
			'social	social';

		--duration: 0.5s;

		@screen sm {
			grid-template-columns: 1fr auto 1fr;
			grid-template-areas: 'menu logo social';
		}

		&::after {
			pointer-events: none;
			position: absolute;
			z-index: -1;
			inset: 0 0 -3rem;
			mask-image: linear-gradient(to bottom, #000 10%, transparent);
			@apply transition-all duration-500;
		}
	}

	@media (width < 640px) {
		#menu-open:not(:checked) ~ header :global(nav) {
			display: none;
		}

		#menu-open:checked ~ header::after {
			@apply bg-black -bottom-40;
		}

		#menu-open:checked ~ header label::before {
			content: '☠️';
		}
	}
</style>

<script lang="ts">
	import { page } from '$app/stores'
	import Social from '$lib/Social.svelte'

	$: ({ title, menu } = $page.data.site)
</script>
