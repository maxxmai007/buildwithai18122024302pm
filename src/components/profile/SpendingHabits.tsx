import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useProfileStore } from '../../store/useProfileStore';
import { SpendingSlider } from './spending/SpendingSlider';

const spendingSchema = z.object({
  groceries: z.number().min(1000, 'Please enter your grocery spending'),
  dining: z.number().min(1000, 'Please enter your dining spending'),
  shopping: z.number().min(1000, 'Please enter your shopping spending'),
  travel: z.number().min(1000, 'Please enter your travel spending'),
});

type SpendingForm = z.infer<typeof spendingSchema>;

interface SpendingHabitsProps {
  onNext: () => void;
}

export function SpendingHabits({ onNext }: SpendingHabitsProps) {
  const { spendingHabits, setSpendingHabits } = useProfileStore();
  const [formComplete, setFormComplete] = React.useState(false);
  
  const { formState: { errors }, setValue, watch } = useForm<SpendingForm>({
    resolver: zodResolver(spendingSchema),
    defaultValues: {
      groceries: 1000,
      dining: 1000,
      shopping: 1000,
      travel: 1000,
      ...spendingHabits && Object.fromEntries(
        Object.entries(spendingHabits).map(([key, value]) => [key, parseInt(value)])
      )
    },
  });

  const values = watch();

  // Debounced check for form completion
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const allValid = Object.values(values).every(v => v >= 1000);
      setFormComplete(allValid);
    }, 500);

    return () => clearTimeout(timer);
  }, [values]);

  // Only update store when form is complete
  React.useEffect(() => {
    if (formComplete) {
      const newHabits = Object.fromEntries(
        Object.entries(values).map(([key, value]) => [key, value.toString()])
      );
      
      // Only update if values have changed
      if (JSON.stringify(newHabits) !== JSON.stringify(spendingHabits)) {
        setSpendingHabits(newHabits);
        onNext();
      }
    }
  }, [formComplete]);

  return (
    <div className="space-y-6">
      <SpendingSlider
        label="Grocery"
        value={values.groceries}
        onChange={(value) => setValue('groceries', value)}
        error={errors.groceries?.message}
      />

      <SpendingSlider
        label="Dining"
        value={values.dining}
        onChange={(value) => setValue('dining', value)}
        error={errors.dining?.message}
      />

      <SpendingSlider
        label="Shopping"
        value={values.shopping}
        onChange={(value) => setValue('shopping', value)}
        error={errors.shopping?.message}
      />

      <SpendingSlider
        label="Travel"
        value={values.travel}
        onChange={(value) => setValue('travel', value)}
        error={errors.travel?.message}
      />
    </div>
  );
}