// /src/app/iu/button.tsx
'use client'

import { forwardRef } from 'react'
import { useEffect } from 'react';

export const Button = forwardRef<HTMLButtonElement, {
  pending: boolean;
  texto: string;
  onSuccess?: () => void; // Nueva prop para manejar éxito
}>(({ pending, texto, onSuccess }, ref) => {

  // Efecto que se dispara cuando pending cambia de true a false (envío completado)
  useEffect(() => {
    if (!pending && onSuccess) {
      onSuccess();
    }
  }, [pending, onSuccess]);

  return (
    <button
      ref={ref}
      type="submit"
      disabled={pending}
      className="w-full bg-teal-800 text-white py-3 px-4 rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
    >
      {pending ? 'Enviando...' : texto}
    </button>
  )
})

Button.displayName = 'Button';



