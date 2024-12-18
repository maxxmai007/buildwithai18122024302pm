import React from 'react';
import { User, CreditCard, Brain, CheckCircle } from 'lucide-react';
import { TimelineStep } from './TimelineStep';

const steps = [
  {
    icon: User,
    title: 'Create Your Profile',
    description: 'Start by sharing your financial profile including income, occupation, and location. This helps us understand your eligibility for different credit cards.'
  },
  {
    icon: CreditCard,
    title: 'Share Spending Habits',
    description: 'Tell us about your monthly spending across categories like groceries, dining, travel, and shopping. We use this to maximize your potential rewards.'
  },
  {
    icon: Brain,
    title: 'AI Analysis',
    description: 'Our advanced AI algorithms analyze thousands of credit cards, comparing their benefits, rewards, and terms to find the perfect matches for your profile.'
  },
  {
    icon: CheckCircle,
    title: 'Get Recommendations',
    description: 'Receive personalized credit card recommendations, complete with detailed breakdowns of benefits and potential rewards based on your spending patterns.'
  }
];

export function Steps() {
  return (
    <div className="relative">
      {/* Background glow effect */}
      <div className="absolute -inset-4 bg-gold-500/5 blur-3xl rounded-full" />
      
      {/* Timeline steps */}
      <div className="relative space-y-2">
        {steps.map((step, index) => (
          <TimelineStep
            key={step.title}
            {...step}
            index={index}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
}