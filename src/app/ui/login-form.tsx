// src/app/ui/login-form.tsx
'use client';

export default function LoginForm() {
  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-teal-800 mb-6">Inicia sesión como facturador en LeBo</h1>
      
      <form className="space-y-6">
        <div className="space-y-4">
          {/* Campo Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="email"
                name="email"
                type="email"
                required
                pattern="[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}"
                title="Ingresa un email válido (ejemplo: nombre@dominio.com)"
                className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>

          {/* Campo Contraseña */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="password"
                name="password"
                type="password"
                required
                pattern="^(?=(.*[A-Z]){2,})(?=(.*[a-z]){2,})(?=(.*\\d){3,})(?=(.*[.]){1,})[A-Za-z\\d.]{8,}$"
                title="La contraseña debe tener: mínimo 8 caracteres, 2 mayúsculas, 2 minúsculas, 3 números y 1 punto"
                className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 pr-10"
              />
              <button 
                type="button" 
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                aria-label="Mostrar contraseña"
              >
                👁️
              </button>
            </div>
          </div>
        </div>

        {/* Enlaces olvidé contraseña */}
        <p className="text-sm text-gray-600">
          ¿Has olvidado la <a href="/forgot-password" className="text-amber-700 hover:underline">contraseña</a> o el 
          <a href="/forgot-username" className="text-amber-700 hover:underline ml-1">nombre de usuario</a>?
        </p>

        {/* Botón de submit */}
        <button
          type="submit"
          className="w-full bg-teal-800 text-white py-3 px-4 rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
        >
          Continuar
        </button>

        {/* Texto de ayuda */}
        <p className="text-sm text-gray-600 text-center">
          ¿Necesita ayuda? <a href="https://support.aegisia.com" className="text-amber-700 hover:underline" target="_blank">Contacta con el equipo de Atención al cliente</a>
        </p>
      </form>
    </div>
  );
}