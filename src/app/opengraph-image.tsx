import { ImageResponse } from 'next/og'

export const alt = 'VB — web design & development'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					padding: '80px',
					background: 'linear-gradient(135deg, #333644 0%, #1f2130 100%)',
					color: '#fdfdfd',
					fontFamily: 'sans-serif'
				}}
			>
				<div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							width: 96,
							height: 96,
							borderRadius: 28,
							background: '#3669f9',
							fontSize: 44,
							fontWeight: 700,
							letterSpacing: -2
						}}
					>
						VB
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
						<div style={{ fontSize: 26, opacity: 0.7 }}>Valeria Beloborodova</div>
						<div style={{ fontSize: 22, color: '#8fb0ff' }}>web design · development · SEO</div>
					</div>
				</div>

				<div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
					<div style={{ display: 'flex', fontSize: 76, lineHeight: 1.12, maxWidth: 980 }}>
						Websites that work
					</div>
					<div style={{ display: 'flex', fontSize: 30, opacity: 0.65 }}>
						Strategy · prototype · design · code
					</div>
				</div>

				<div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
					<div style={{ display: 'flex', width: 220, height: 8, borderRadius: 4, background: '#3669f9' }} />
					<div style={{ display: 'flex', fontSize: 24, opacity: 0.55 }}>vb-olive.vercel.app</div>
				</div>
			</div>
		),
		size
	)
}
