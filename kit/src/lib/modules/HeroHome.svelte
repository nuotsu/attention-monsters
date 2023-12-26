<section>
	<PortableText value={content} components={{}} />
</section>

<script lang="ts">
	import { PortableText } from '@portabletext/svelte'

	const { content } = $$props as Partial<{
		content: any
	}>
</script>
