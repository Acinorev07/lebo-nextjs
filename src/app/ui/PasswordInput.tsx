'use client';

import { useState, useRef, useEffect} from 'react';
import FormInput from './FormInput';
import { Button } from './button';

type PasswordInputProps = {
  name: string;
  label: string;
  errors?: string[];
  className?: string;
  resetTrigger?:boolean; //Nueva prop para sincronizar el reset
};

export default function PasswordInput({
  name,
  label,
  errors,
  resetTrigger = false //Valor por defecto
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState(''); // Estado local para el valor

  console.log("Estamos en el componente PasswordInput, y la variable resetTrigger",resetTrigger)
  //Expone la funcion reset al componente padre
  useEffect(()=>{
    if(resetTrigger){

      console.log("Reseteando PasswordInput");
      setPassword('');
      setShowPassword(false);
      if(inputRef.current){
        inputRef.current.value=''; //Reset directo del input DOM
      }
    }
  },[resetTrigger]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className={`relative`}>
      <FormInput
        ref={inputRef}
        type={showPassword ? 'text' : 'password'}
        name={name}
        label={label}
        value={password} // Usamos el estado local
        onChange={handlePasswordChange} // Manejador de cambios
        placeholder="Ingrese su contraseña"
        title="Mínimo 8 caracteres, incluir mayúsculas, minúsculas y números"
        // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
      />
      
      <div className="absolute right-3 top-1/2 -translate-y-1/4 h-8 w-8 flex items-center justify-center">
        <Button
          type="button"
          texto={showPassword ? '🙈' : '👁️'}
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center bg-transparent hover:bg-gray-100 rounded-full text-gray-500"
          pending={false}
        />
      </div>

      {errors && errors.length > 0 && (
        <div className="text-sm text-red-600 mt-2">
          <ul className="list-disc pl-5">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}