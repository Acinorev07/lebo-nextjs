// src/app/iu/signup-form.tsx

'use client'


import { signup } from "../actions/auth"
import { useActionState, useRef} from "react"
import {Button} from './button'

export default function SignupForm () {
    const [state, action, pending] = useActionState(signup, undefined)
    const formRef = useRef<HTMLFormElement>(null) //Referencia al formulario
    const buttonRef = useRef<HTMLButtonElement>(null)

    const handleSuccess = () => {
        if (state?.success && formRef.current) {
            formRef.current.reset()
        }
    }


    return (

          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-teal-800 mb-6">Inicia sesión como facturador en LeBo</h1>
                <form
                 ref={formRef} 
                 action={action} 
                 className="space-y-6"
                 >
                    <div className="space-y-4">
                            {/* Campo para el nombre de la empresa */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input 
                                    id='name' 
                                    name='name' 
                                    placeholder='Nombre' 
                                    className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"/>
                                </div>
                            </div>
                            {state?.errors?.name && <p>{state.errors.name}</p>}
                            
                            {/* Campo Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                 <div>
                                   <input 
                                      type="email" 
                                      id='email' 
                                      name='email' 
                                      placeholder='Email' 
                                      className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"/>
                                 </div>   
                            </div>
                            {state?.errors?.email && <p>{state.errors.email}</p>}
                            
                            {/* Campo Contraseña */}

                                <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Contraseña
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
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
                                {state?.errors?.password && (
                                    <div className="text-sm text-red-600 mt-2">
                                        <p>La contraseña debe cumplir con:</p>
                                        <ul className="list-disc pl-5">
                                            <li>Mínimo 8 caracteres</li>
                                            <li>2 letras mayúsculas</li>
                                            <li>2 letras minúsculas</li>
                                            <li>3 números</li>
                                            <li>1 punto (.)</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            {/* Enlaces olvidé contraseña */}
                            <p className="text-sm text-gray-600">
                            ¿Has olvidado la <a href="/forgot-password" className="text-amber-700 hover:underline">contraseña</a> o el 
                            <a href="/forgot-username" className="text-amber-700 hover:underline ml-1">nombre de usuario</a>?
                            </p>

                            <Button 
                                ref={buttonRef}
                                pending={pending} 
                                texto="Registrarse"
                                onSuccess={handleSuccess}
                                
                            />
                   
                </form>
          </div>

    )
}