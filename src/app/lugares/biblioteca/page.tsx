'use client'
import { FaBookReader, FaBook, FaTabletAlt, FaUsers } from 'react-icons/fa'

export default function BibliotecaPage() {
  const secciones = [
    { nombre: 'Área de Lectura', icono: <FaBookReader size={40} /> },
    { nombre: 'Préstamo de Libros', icono: <FaBook size={40} /> },
    { nombre: 'Biblioteca Digital', icono: <FaTabletAlt size={40} /> },
    { nombre: 'Sala de Estudio en Grupo', icono: <FaUsers size={40} /> }
  ]

  return (
    <section style={{
      padding: '2rem 0',
      textAlign: 'center',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(17, 4, 4, 0.6)), url('/lugaresfont.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#fff' }}>Biblioteca</h1>

      <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '3rem'
      }}>
        {secciones.map((item, i) => (
          <button
            key={i}
            style={{
              padding: '1.5rem',
              width: '220px',
              fontSize: '1.1rem',
              background: 'linear-gradient(to right, #00c9ff)',
              color: '#000',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)',
              textAlign: 'center',
              userSelect: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1.0)'}
          >
            {item.icono}
            {item.nombre}
          </button>
        ))}
      </div>

      {/* 🔽 Card de video debajo de los botones */}
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        background: 'rgba(255,255,255,0.07)',
        padding: '1.5rem',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 0 20px rgba(0,255,255,0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Descubre la Biblioteca</h2>
        <iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/RBxnTpO5fzI"
  title="Recorrido Biblioteca"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  style={{ borderRadius: '15px' }}
></iframe>

      </div>
    </section>
  )
}
