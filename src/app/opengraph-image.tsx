import { ImageResponse } from 'next/og';

export const alt = 'ObraFácil — Placas Decorativas SPC y Revestimientos Sin Obra';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#0D0D0D',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F5D800',
              borderRadius: '12px',
              width: '72px',
              height: '72px',
              fontSize: '36px',
              fontWeight: 900,
              color: '#0D0D0D',
            }}
          >
            OF
          </div>
          <div style={{ display: 'flex', fontSize: '48px', fontWeight: 900 }}>
            <span style={{ color: '#FAFAF8' }}>OBRA</span>
            <span style={{ color: '#F5D800' }}>FÁCIL</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: '32px',
            color: '#999999',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          Placas decorativas SPC y revestimientos sin obra a precio de almacén. Envíos a toda España.
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: '40px',
            backgroundColor: '#F5D800',
            color: '#0D0D0D',
            padding: '16px 40px',
            borderRadius: '999px',
            fontSize: '24px',
            fontWeight: 700,
          }}
        >
          obrafacil.es
        </div>
      </div>
    ),
    { ...size }
  );
}
