<section class="p-4">
	<div class="max-w-md richtext [&_h1]:text-pretty">
		<PortableText value={content} components={{}} />
		<CTAList {ctas} />
	</div>
</section>

<script lang="ts">
	import CTAList from '$lib/CTAList.svelte'
	import { PortableText } from '@portabletext/svelte'

	const { content, ctas } = $$props as Partial<{
		content: any
		ctas: Sanity.CTA[]
	}>
</script>
