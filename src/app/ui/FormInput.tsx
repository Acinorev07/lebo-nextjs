'use client';

import {forwardRef} from 'react';

type FormInputProps = {
  type?: string;
  name: string;
  label: string;
  placeholder?: string;
  title?: string;
  pattern?: string;
  required?: boolean;
  className?: string;
  errors?: string[]; // Añadimos esta prop
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      type = 'text',
      name,
      label,
      placeholder,
      title,
      pattern,
      required = false,
      className = '',
      errors,
      value,
      onChange
    },
    ref
  ) => {
    return (
      <div className={className}>
        <label htmlFor={name}>{label}</label>
        <input
          ref={ref}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          title={title}
          pattern={pattern}
          required={required}
          value={value}
          onChange={onChange}
          className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
        />
          {errors && errors.length > 0 && (
          <div className="text-sm text-red-600 mt-1">
            {errors.join(', ')}
          </div>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

export default FormInput;