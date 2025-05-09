// /src/app/iu/button.tsx
'use client'

import { forwardRef , ButtonHTMLAttributes} from 'react'
import { useEffect } from 'react';

type ButtonProps = {
  pending?: boolean;
  texto: string;
  onSuccess?: ()=>void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ pending = false, texto, onSuccess, type = 'submit', className = '', ...props }, ref) => {

    console.log("Estamos en el componente Button", pending)

    useEffect(() => {
      if (!pending && onSuccess) {
        onSuccess();
      }
    }, [pending, onSuccess]);

    const buttonClasses = `w-full bg-teal-800 text-white py-3 px-4 rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors ${className}`;

    return (
      <button
        ref={ref}
        type={type}
        disabled={pending}
        className={buttonClasses}
        {...props}
      >
        {pending ? 'Enviando...' : texto}
      </button>
    );
  }
);

Button.displayName = 'Button';



