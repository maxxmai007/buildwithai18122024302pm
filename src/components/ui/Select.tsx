import React from 'react';
import { cn } from '../../utils/cn';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: readonly SelectOption[];
  error?: string;
  onChange: (value: string) => void;
}

export function Select({ 
  options, 
  error, 
  className, 
  placeholder,
  onChange,
  value,
  ...props 
}: SelectProps) {
  return (
    <div className="space-y-2">
      <select
        value={value || ''} // Ensure empty string when no value
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full px-4 py-3 bg-dark-800 border rounded-lg outline-none transition-all duration-200",
          "text-white placeholder:text-gold-500/40 appearance-none",
          "border-gold-500/20 focus:border-gold-500/40",
          "pr-10", // Add right padding for arrow
          "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA2TDggMTBMMTIgNiIgc3Ryb2tlPSIjRDRCNzg4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==')] bg-no-repeat",
          "bg-[position:right_1rem_center]", // Position arrow precisely
          error && "border-red-500/50 focus:border-red-500/70",
          className
        )}
        {...props}
      >
        <option value="" disabled>
          {placeholder || 'Select an option'}
        </option>
        {options.map(({ value, label }) => (
          <option key={value} value={value} className="bg-dark-800">
            {label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}