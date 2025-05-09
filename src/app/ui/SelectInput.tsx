'use client';

type SelectInputProps = {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  className?: string;
};

export default function SelectInput({ 
  name, 
  label, 
  options, 
  className = '' 
}: SelectInputProps) {
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name}>
        <option value="">---</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}