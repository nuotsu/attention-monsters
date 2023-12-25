<header>
	{data.site.title}
</header>

<slot />

<script lang="ts">
	import type { LayoutServerData } from './$types'
	import '../styles/app.css'

	export let data: LayoutServerData
</script>
