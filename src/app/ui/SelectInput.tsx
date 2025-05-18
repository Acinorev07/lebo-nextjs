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
  className = 'flex gap-4 w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 text-xl font-medium' 
}: SelectInputProps) {
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} className="w-full border border-gray-300 rounded-md text-xl font-medium h-10">
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