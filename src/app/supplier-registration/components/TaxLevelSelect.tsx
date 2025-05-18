'use client';

import { useState } from 'react';
import SelectInput from '@/app/ui/SelectInput';

const obligaciones = [
  { value: "O-13", label: "Gran contribuyente" },
  { value: "O-15", label: "Autorretenedor" },
  // ... más opciones
];

export default function TaxLevelSelect() {
  const [selects, setSelects] = useState([{ id: 1 }]);

  const addSelect = () => {
    if (selects.length < 5) {
      setSelects([...selects, { id: selects.length + 1 }]);
    }
  };

  const removeSelect = () => {
    if (selects.length > 1) {
      setSelects(selects.slice(0, -1));
    }
  };

  return (
    <div className="flex flex-col gap-4 form-group-obligaciones text-xl">
      <label>Obligaciones Tributarias</label>
      
      <div className="flex flex-col gap-4 selects-container">
        {selects.map((select) => (
          <SelectInput
            key={select.id}
            label=''
            name={`oblig-tribut-${select.id}`}
            options={obligaciones}
            className="oblig-tribut"
          />
        ))}
      </div>
      
      <div className="flex justify-center gap-4 buttons-container">
        <button 
          type="button" 
          onClick={addSelect}
          disabled={selects.length >= 5}
          className="border border-gray-300 rounded-md btn-obligacion flex-1 text-xl hover:text-white hover:bg-[var(--verdeAzuladoClaro)] transition"
        >
          +
        </button>
        <button 
          type="button" 
          onClick={removeSelect}
          disabled={selects.length <= 1}
          className="border border-gray-300 rounded-md btn-obligacion flex-1 text-xl hover:text-white hover:bg-[var(--verdeAzuladoClaro)] transition"
        >
          -
        </button>
      </div>
    </div>
  );
}