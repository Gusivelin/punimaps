'use client'

import { useRouter } from 'next/navigation'

export default function StartButton() {
  const router = useRouter()

  const comenzar = () => {
    router.push('/recorrido')
  }
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <button
        onClick={comenzar}
        style={{
          padding: '1rem 2.5rem',
          fontSize: '1.2rem',
          background: 'linear-gradient(to right, #00c9ff)',
          color: '#000',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1.0)'}
      >
        Más de UNIMAPS
      </button>
    </div>
  )
}
