import { ImageResponse } from 'next/og'
import { siteConfig } from '@/data/site'

export const alt = `${siteConfig.name} — ${siteConfig.role}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#06080f',
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #0A84FF33, transparent 45%), radial-gradient(circle at 80% 70%, #5AC8FA22, transparent 45%)',
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: 'linear-gradient(135deg,#0A84FF,#5AC8FA)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            MJ
          </div>
          <div style={{ fontSize: 26, color: '#94a3b8' }}>{siteConfig.location}</div>
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 40,
            marginTop: 16,
            background: 'linear-gradient(90deg,#0A84FF,#5AC8FA)',
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: 600,
          }}
        >
          {siteConfig.role}
        </div>
        <div
          style={{
            fontSize: 26,
            color: '#94a3b8',
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          3+ years building high-performance Android & iOS apps with Flutter.
        </div>
      </div>
    ),
    { ...size }
  )
}
