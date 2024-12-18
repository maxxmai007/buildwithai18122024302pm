import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useProfileStore } from '../../store/useProfileStore';
import { IncomeBracketSelect } from './income/IncomeBracketSelect';
import { OccupationSelect } from './occupation/OccupationSelect';
import { CitySelect } from './city/CitySelect';

const basicDetailsSchema = z.object({
  income: z.string().min(1, 'Please select your annual income'),
  occupation: z.string().min(1, 'Please select your occupation'),
  city: z.string().min(1, 'Please select your city'),
});

type BasicDetailsForm = z.infer<typeof basicDetailsSchema>;

interface BasicDetailsProps {
  onNext: () => void;
}

export function BasicDetails({ onNext }: BasicDetailsProps) {
  const { basicDetails, setBasicDetails } = useProfileStore();
  const [formComplete, setFormComplete] = React.useState(false);
  
  const { formState: { errors }, setValue, watch } = useForm<BasicDetailsForm>({
    resolver: zodResolver(basicDetailsSchema),
    defaultValues: basicDetails || {
      income: '',
      occupation: '',
      city: '',
    },
  });

  const values = watch();

  // Check form completion without triggering updates
  React.useEffect(() => {
    const isComplete = Boolean(values.income && values.occupation && values.city);
    setFormComplete(isComplete);
  }, [values]);

  // Only update store and trigger onNext when form is complete
  React.useEffect(() => {
    if (formComplete) {
      const newDetails = {
        income: values.income,
        occupation: values.occupation,
        city: values.city
      };
      
      // Only update if values have changed
      if (JSON.stringify(newDetails) !== JSON.stringify(basicDetails)) {
        setBasicDetails(newDetails);
        onNext();
      }
    }
  }, [formComplete]);

  return (
    <div className="space-y-6">
      <IncomeBracketSelect
        value={values.income}
        onChange={(value) => setValue('income', value)}
        error={errors.income?.message}
      />

      <OccupationSelect
        value={values.occupation}
        onChange={(value) => setValue('occupation', value)}
        error={errors.occupation?.message}
      />

      <CitySelect
        value={values.city}
        onChange={(value) => setValue('city', value)}
        error={errors.city?.message}
      />
    </div>
  );
}