<Header />

<main class="grow relative z-[1] bg-black after:block">
	<slot />
</main>

<Footer />

<style lang="postcss">
	main {
		opacity: 0;
		scale: 0.98;
		filter: blur(10px);
		animation: intro 1s ease-in-out 0.5s forwards;

		@keyframes intro {
			to {
				opacity: 1;
				scale: 1;
				filter: none;
			}
		}
	}

	main::after {
		@apply absolute inset-x-0 top-full h-8 bg-gradient-to-b from-black to-transparent;
	}
</style>

<script lang="ts">
	import Header from '$lib/header/Header.svelte'
	import Footer from '$lib/footer/Footer.svelte'
	import '../styles/app.css'
</script>
