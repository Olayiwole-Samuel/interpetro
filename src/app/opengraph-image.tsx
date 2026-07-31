import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Interpetro Energy Resources Limited';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0A1B33 0%, #0F2747 55%, #003C7A 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: '50%',
              background: '#0057B8',
              display: 'flex',
            }}
          />
          <span style={{ color: 'white', fontSize: 32, fontWeight: 700 }}>
            Interpetro<span style={{ color: '#9BD600' }}>.</span>
          </span>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 64,
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Powering Africa&rsquo;s Energy Future
        </div>
        <div style={{ marginTop: 24, fontSize: 26, color: 'rgba(255,255,255,0.7)' }}>
          Exploration &amp; Production &middot; Gas Development &middot; Energy Trading
        </div>
      </div>
    ),
    { ...size }
  );
}
