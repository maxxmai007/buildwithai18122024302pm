import React from 'react';
import { Slider } from '../../ui/Slider';

interface SpendingSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  error?: string;
}

export function SpendingSlider({ label, value, onChange, error }: SpendingSliderProps) {
  return (
    <Slider
      label={`Monthly ${label} Spending`}
      value={value}
      onChange={onChange}
      min={1000}
      max={100000}
      step={1000}
      error={error}
    />
  );
}