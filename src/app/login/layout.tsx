// src/app/login/layout.tsx
import '@/app/globals.css';

export default function LoginLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html  >
      <body>
        {/* Contenedor principal sin padding para que use todo el ancho */}
        <main className="w-full h-full max-w-screen-2xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}