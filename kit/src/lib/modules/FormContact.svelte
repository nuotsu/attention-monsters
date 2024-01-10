<section id="contact-form" class="section max-w-screen-lg">
	<div class="max-md:max-w-lg mx-auto grid md:grid-cols-2 gap-8">
		<div class="richtext md:text-right">
			<PortableText value={content} components={{}} />
		</div>

		<form method="POST" action={endpoint} class="grid gap-4">
			<label>
				<p>Thy Name</p>
				<input
					class="input"
					name="name"
					type="text"
					placeholder="Steve"
					autocomplete="name"
					required
				/>
			</label>

			<label>
				<p>Thy Email</p>
				<input
					class="input"
					name="email"
					type="email"
					placeholder="steve@attentionmonsters.com"
					autocomplete="email"
					required
				/>
			</label>

			<label>
				<p>Thy Message</p>
				<textarea
					class="input"
					name="message"
					rows="3"
					placeholder="Thy message goes here"
					required
				/>
			</label>

			<p><button class="action text-lg">Submit</button></p>
		</form>
	</div>
</section>

<style lang="postcss">
	section :global(h2) {
		@apply text-5xl;
	}

	label {
		display: grid;
		gap: 0.25rem;

		& p {
			@apply font-serif;
		}
	}
</style>

<script lang="ts">
	import { PortableText } from '@portabletext/svelte'

	const { content, endpoint } = $$props as Partial<{
		content: any
		endpoint: string
	}>
</script>
