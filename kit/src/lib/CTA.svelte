<a {href} class={style}>{link.label || link.internal?.title}</a>

<script lang="ts">
	export let cta: Sanity.CTA

	const { link, style } = cta

	const href =
		link.type === 'internal'
			? link.internal?.metadata.slug.current
			: link.external
</script>
