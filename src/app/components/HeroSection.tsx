export default function HeroSection() {
  return (
    <section style={{
      // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.74), rgba(17, 4, 4, 0.6)), url(/lugaresfont.jpg)`,
      backgroundImage: 'none',
      height: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      borderRadius: '20px',
      padding: '2rem',
      background: 'linear-gradient(145deg, rgba(0, 0, 0, 0.05), rgba(255,255,255,0.02))',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 0 20px rgba(0,255,255,0.1), 0 0 40px rgba(0,255,255,0.05)'
    }}>
      <h1 style={{ fontSize: '3rem' }}>UNIMAPS Contigo🚀</h1>
      <p style={{ fontSize: '1.2rem', color: '#ccc' }}>
        Conoce y Explora tu universidad.
      </p>
    </section>
  )
}
