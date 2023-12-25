<section>
	<PortableText value={content} components={{}} />
</section>

<script lang="ts">
	import { PortableText } from '@portabletext/svelte'

	const { content } = $props<
		Sanity.Module & {
			content?: any
		}
	>()
</script>
