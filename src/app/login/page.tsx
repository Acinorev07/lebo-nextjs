// src/app/login/page.tsx
// import LoginForm from '@/app/ui/login-form';
import SignupForm from '@/app/ui/signup-form';
import Logo from '@/app/ui/logo';
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-full w-full grid grid-cols-1 lg:grid-cols-[1fr_2fr] mx-auto p-4 gap-1  ">
      {/* Sección de imagen - ahora con ancho completo */}
      <div className="hidden lg:block relative bg-cover bg-center bg-no-repeat bg-blend-overlay bg-white bg-opacity-40 h-full min-h-[80vh] w-full border border-gray-300 rounded-md">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/90 to-transparent animate-shimmer-diagonal mix-blend-screen pointer-events-none" />
        <div className="flex items-center justify-center h-full p-10 w-full">
          <img 
            src="/logoLeBo.png" 
            alt="Logo LeBo" 
            className="max-w-full max-h-full object-contain w-auto h-auto"
          />
        </div>
      </div>

      {/* Sección del formulario */}
      <div className="flex flex-col min-h-[80vh] w-full rounded-md ">
        {/* Header con ancho completo */}
        <header className="w-full p-3 lg:p-6 bg-[var(--verdeCardenal-1)] shadow-md border border-gray-300 rounded-md">
          <nav className="flex justify-between items-center w-full max-w-7xl mx-auto">
            <Logo />
            <Link href={`/supplier-registration`} className="px-4 py-2 bg-teal-800 text-white rounded hover:bg-amber-700 transition-colors text-lg">Crear una cuenta</Link>
          </nav>
        </header>

        {/* Contenedor del formulario con ancho completo */}
        <div className="flex-grow flex items-center justify-center p-4 w-full">
          <div className="w-full max-w-md">
            {/* <LoginForm /> */}
            <SignupForm/>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full flex justify-center gap-6 p-4 text-gray-600 text-sm">
          <a href="/legal/privacy" className="hover:underline">Aviso de privacidad</a>
          <a href="/legal" className="hover:underline">Términos de servicio</a>
        </footer>
      </div>
    </div>
  );
}