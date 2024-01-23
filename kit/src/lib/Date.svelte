<time datetime={date} class={className}>{formatted}</time>

<script lang="ts">
	export let date: string
	export let options: Intl.DateTimeFormatOptions = {}
	export let className: string | undefined = undefined

	const { format } = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		...options,
	})

	const formatted = date && format(new Date(date))
</script>
