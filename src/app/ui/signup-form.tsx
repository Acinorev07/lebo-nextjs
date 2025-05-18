
// src/app/ui/signup-form.tsx
'use client';

import {signup} from "../actions/auth";
import {useActionState, useRef, useState, useEffect} from "react";
import {Button} from './button';
import PasswordInput from './PasswordInput';
import FormInput from './FormInput';

export default function SignupForm() {
    const [state, action, pending] = useActionState(signup, undefined);

    const formRef = useRef<HTMLFormElement>(null);
    const [resetTrigger, setResetTrigger] = useState(false); //Contador para forzar reset

    useEffect(()=>{
        if(state?.success){
            console.log("Reset del formulario activado");
            formRef.current?.reset();
            setResetTrigger(prev=>!prev); //Alternamos el valor para forzar reset
        }
    }, [state?.success]);

    // const handleSuccess = () => {

    //     console.log("Estamos en el componente SignupForm  el valor de useActionState");
    //     console.log("Estamos en el componente SignupForm  el valor de state.success 1", state?.success);
    //     console.log("Estamos en el componente SignupForm  el valor de state.message 1", state?.message);
        
    //     if (state?.success) {
    //         console.log("Estamos en el componente SignupForm  el valor de state.success 2", state?.success);
    //         console.log("Estamos en el componente SignupForm  el valor de state.message 2", state?.message);
    //         // Puedes añadir lógica adicional aquí si es necesario
    //         formRef.current?.reset();

    //         // setResetCount(prev => prev + 1);
    //     }
    // };

    return (
        <div className="w-full max-w-md text-xl bg-[var(--verdeCardenal-1)] p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-teal-800 mb-6">Inicia sesión como facturador en LeBo</h1>
            <form ref={formRef}  action={action} className="space-y-6">
                <div className="space-y-4">
                    {/* Campo para el nombre */}
                    <FormInput
                        name="name"
                        label="Nombre"
                        placeholder="Nombre"
                        errors={state?.errors?.name}
                    />                  
                    {/* Campo Email */}
                    <FormInput
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="Email"
                        errors={state?.errors?.email}
                    />
                    {/* Campo Contraseña */}
                    <PasswordInput 
                        name="password"
                        label="Contraseña"
                        errors={state?.errors?.password}
                        resetTrigger={resetTrigger} //Pasamos el estado de exito
                        key={`password-input-${resetTrigger}`} //Key unica que cambia al resetear
                        // className="flex w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                    {/* Enlaces olvidé contraseña */}
                    <p className="text-sm text-gray-600">
                        ¿Has olvidado la <a href="/forgot-password" className="text-amber-700 hover:underline">contraseña</a> o el 
                        <a href="/forgot-username" className="text-amber-700 hover:underline ml-1">nombre de usuario</a>?
                    </p>
                    <Button 
                        pending={pending} 
                        texto="Registrarse"
                        // onSuccess={handleSuccess}
                    />
                </div>
            </form>
        </div>
    );
}