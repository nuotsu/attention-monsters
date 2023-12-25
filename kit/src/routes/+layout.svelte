<header>
	<a href="/">{data.site.title}</a>
</header>

<slot />

<footer>
	<p>&copy; {new Date().getFullYear()}</p>
</footer>

<script lang="ts">
	import type { LayoutServerData } from './$types'
	import '../styles/app.css'

	export let data: LayoutServerData
</script>
