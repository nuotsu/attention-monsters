{#if !!relative}
	{relative}
{:else}
	<slot />
{/if}

<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte'
	import { onMount } from 'svelte'

	export let portableText: CustomBlockComponentProps<{
		datetime: string
	}>

	let relative: string | false

	$: now = new Date()
	$: relative = false

	function calcRelative() {
		now = new Date()

		const timeDiff =
			new Date(portableText.value.datetime).getTime() - now.getTime()

		const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
		const hours = Math.floor(
			(timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
		)
		const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
		const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)

		const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

		if (days > 0) {
			relative = formatter.format(days, 'day')
		} else if (hours > 0) {
			relative = formatter.format(hours, 'hour')
		} else if (minutes > 0) {
			relative = formatter.format(minutes, 'minute')
		} else if (seconds > 0) {
			relative = formatter.format(seconds, 'second')
		} else {
			relative = false
		}
	}

	calcRelative()

	onMount(() => {
		const interval = setInterval(calcRelative, 1000)
		return () => clearInterval(interval)
	})
</script>
