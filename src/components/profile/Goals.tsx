import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../ui/Button';
import { useProfileStore } from '../../store/useProfileStore';
import { GoalCard } from './goals/GoalCard';
import { financialGoals, type FinancialGoal } from './goals/constants';

const goalsSchema = z.object({
  goals: z.array(z.string()).min(1, 'Please select at least one financial goal')
});

type GoalsForm = z.infer<typeof goalsSchema>;

interface GoalsProps {
  onNext: () => void;
}

export function Goals({ onNext }: GoalsProps) {
  const { goals: selectedGoals, setGoals } = useProfileStore();
  
  const { handleSubmit, formState: { errors }, setValue } = useForm<GoalsForm>({
    resolver: zodResolver(goalsSchema),
    defaultValues: {
      goals: selectedGoals
    }
  });

  const toggleGoal = (goalId: FinancialGoal) => {
    const newGoals = selectedGoals.includes(goalId)
      ? selectedGoals.filter(g => g !== goalId)
      : [...selectedGoals, goalId];
    
    setValue('goals', newGoals);
    setGoals(newGoals);
  };

  const onSubmit = (data: GoalsForm) => {
    setGoals(data.goals);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {financialGoals.map((goal) => (
          <GoalCard
            key={goal.id}
            icon={goal.icon}
            title={goal.title}
            description={goal.description}
            isSelected={selectedGoals.includes(goal.id)}
            onClick={() => toggleGoal(goal.id)}
          />
        ))}
      </div>

      {errors.goals && (
        <p className="text-sm text-red-500 text-center">
          {errors.goals.message}
        </p>
      )}

      <Button type="submit" className="w-full">
        Review Summary
      </Button>
    </form>
  );
}