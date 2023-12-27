<section class="section grid place-content-center min-h-xsvh text-center">
	<div class="space-y-4">
		<h1 class="_h text-7xl text-gradient bg-gradient-to-b">
			{$page.status}
		</h1>
		<h2 class="h2">The Void of Non-Existence Prevails</h2>
		<p><small>({$page.error?.message})</small></p>
	</div>
</section>

<script lang="ts">
	import { page } from '$app/stores'
</script>
