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
    <div className="form-group-obligaciones">
      <label>Obligaciones Tributarias</label>
      
      <div className="selects-container">
        {selects.map((select) => (
          <SelectInput
            key={select.id}
            label='hola'
            name={`oblig-tribut-${select.id}`}
            options={obligaciones}
            className="oblig-tribut"
          />
        ))}
      </div>
      
      <div className="buttons-container">
        <button 
          type="button" 
          onClick={addSelect}
          disabled={selects.length >= 5}
          className="btn-obligacion"
        >
          +
        </button>
        <button 
          type="button" 
          onClick={removeSelect}
          disabled={selects.length <= 1}
          className="btn-obligacion"
        >
          -
        </button>
      </div>
    </div>
  );
}