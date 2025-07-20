'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

export default function Destinations() {
  const lugares = [
    { nombre: 'Edificios', ruta: 'edificios' },
    { nombre: 'Laboratorios', ruta: 'laboratorios' },
    { nombre: 'Biblioteca', ruta: 'biblioteca' },
    { nombre: 'Más lugares', ruta: 'mas' }
  ]

  type Visitas = Record<string, number>
  const [visitas, setVisitas] = useState<Visitas>({})

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('visitas') || '{}')
    const inicial: Visitas = {}
    lugares.forEach(l => (inicial[l.nombre] = saved[l.nombre] ?? 0))
    setVisitas(inicial)
  }, [])

  useEffect(() => {
    if (Object.keys(visitas).length) {
      localStorage.setItem('visitas', JSON.stringify(visitas))
    }
  }, [visitas])

  function handleVisit(nombre: string) {
    setVisitas(prev => ({ ...prev, [nombre]: (prev[nombre] ?? 0) + 1 }))
  }

  const total = Object.values(visitas).reduce((a, b) => a + b, 0) || 1
  const data = lugares.map(l => ({
    name: l.nombre,
    value: Math.round(((visitas[l.nombre] || 0) / total) * 100)
  }))

const colors = ['#1E90FF', '#32CD32', '#FFD700', '#FF4500']

function resetVisitas() {
  const inicial: Visitas = {}
  lugares.forEach(l => (inicial[l.nombre] = 0))
  localStorage.setItem('visitas', JSON.stringify(inicial))
  setVisitas(inicial)
}

  return (
    <section style={{ padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          gap: '3rem',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}
      >
        {/* Botones lado izquierdo */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
          maxWidth: '480px',
          flex: '1 1 400px'
        }}>
          {lugares.map((lugar, i) => (
            <Link
              key={i}
              href={`/lugares/${lugar.ruta}`}
              style={{ textDecoration: 'none' }}
              onClick={() => handleVisit(lugar.nombre)}
            >
              <button
                style={{
                  padding: '2rem',
                  width: '100%',
                  fontSize: '1.3rem',
                  background: 'linear-gradient(to right, #00c9ff, #00b3e6)',
                  color: '#000',
                  border: 'none',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)',
                  textAlign: 'center',
                  userSelect: 'none'
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1.0)')}
              >
                {lugar.nombre}
              </button>
            </Link>
          ))}
        </div>

        {/* Gráfica lado derecho */}
        <div style={{ width: '600px', maxWidth: '100%', flex: '1 1 400px' }}>
          <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>
            Distribución de visitas a secciones (%)
          </h2>
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {data.map((_, idx) => (
                  <Cell key={idx} fill={colors[idx % colors.length]} />
                ))}
              </Pie>
              <Tooltip formatter={v => `${v}%`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
  <button
    onClick={resetVisitas}
    style={{
        padding: '2rem',
        width: '100%',
        fontSize: '1.3rem',
        background: 'linear-gradient(to right, #00c9ff, #00b3e6)',
        color: '#000',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)',
        textAlign: 'center',
        userSelect: 'none'
    }}
  >
    Reiniciar gráfica
  </button>
</div>
      </div>
    </section>
  )
}
