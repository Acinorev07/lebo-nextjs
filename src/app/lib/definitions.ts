// src/app/lib/definition.ts
import {z} from 'zod'

export const SignupFormSchema = z.object({
    name: z
       .string()
       .min(2,{message: 'Name must be at least 2 characters long.'})
       .trim(),
    email: z.string().email({message: 'Ingresa un email válido (ejemplo: nombre@dominio.com)'}).trim(),
    password: z
        .string()
        .min(8, {message: 'La contraseña debe tener mínimo 8 caracteres'})
        .regex(/^(?=(.*[A-Z]){2})(?=(.*[a-z]){2})(?=(.*\d){3})(?=(.*[.]){1})[A-Za-z\d.]{8,}$/, {
            message: 'Debe contener: 2 mayúsculas, 2 minúsculas, 3 números y 1 punto'
        })
        .trim()
        
})

export type FormState = 
|{

    errors?:{
        name?:string[]
        email?:string[]
        password?: string[]
    }
    message?: string
    success?: boolean // 👈 Añade esta línea
}

|undefined