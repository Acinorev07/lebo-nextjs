// /src/app/iu/form.tsx

'use client'
import { useActionState } from 'react'
import {createPost} from '@/app/lib/actions'
import {Button} from './button'

const initializeState: { message: string } = { message: '' }; 


export function Form(){

    const [state, formAction, pending] = useActionState(createPost, initializeState)

    return (

        <form action = {formAction} className='flex flex-col gap-4 max-w-md mx-auto'>
             {/* Label del input frente al campo */}
             <div className="flex items-center gap-2">
                <label htmlFor="title" className="font-semibold">Title:</label>
                <input type="text" id="title" name="title" required className="border p-2 rounded w-full" />
            </div>

            {/* Label del textarea encima del campo */}
            <div className="flex flex-col">
                <label htmlFor="content" className="font-semibold mb-1">Content:</label>
                <textarea id="content" name="content" required className="border p-2 rounded w-full min-h-[100px]" />
            </div>
            {state?.message && <p aria-live="polite">{state.message}</p>}
             {/* Pasamos `pending` como prop al botón */}
             <Button pending={pending} texto={'crear'}/>
        </form>
    )
}