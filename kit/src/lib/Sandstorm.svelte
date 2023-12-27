<aside />

<style>
	aside {
		pointer-events: none;
		position: absolute;
		inset: 0;
		z-index: 20;
		background: url(/noise.png) top left / 150px repeat;
		mix-blend-mode: hard-light;
		opacity: 0.13;
		animation: move 1s linear infinite;
	}

	@keyframes move {
		to {
			background-position: 100% -100%;
		}
	}
</style>
