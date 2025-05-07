// src/app/login/layout.tsx


export default function LoginLayout({
  children
}: {
  children: React.ReactNode
}) {

        {/* Contenedor principal sin padding para que use todo el ancho */}
        return <section>{children}</section>
   

}