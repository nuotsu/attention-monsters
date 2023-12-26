<Header />

<main class="grow">
	<slot />
</main>

<Footer />

<script lang="ts">
	import Header from '$lib/header/Header.svelte'
	import Footer from '$lib/footer/Footer.svelte'
	import '../styles/app.css'
</script>
