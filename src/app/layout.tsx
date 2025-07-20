import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title>UNIMAPS - Recorrido Virtual</title>
      </head>
      <body>
        <div style={{
          background: 'linear-gradient(135deg, #1f1c2c, #928dab)',
          minHeight: '100vh',
          padding: '2rem',
        }}>
          {children}
        </div>
      </body>
    </html>
  )
}

