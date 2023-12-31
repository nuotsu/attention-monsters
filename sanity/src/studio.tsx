export default {
	icon: () => (
		<div
			style={{
				display: 'grid',
				placeContent: 'center',
				aspectRatio: '1',
			}}
		>
			<div style={{ gridArea: '1 / 1 / 1 / 1', translate: '20% 0' }}>🥀</div>
			<div style={{ gridArea: '1 / 1 / 1 / 1', translate: '-20% 0' }}>💀</div>
		</div>
	),
}
