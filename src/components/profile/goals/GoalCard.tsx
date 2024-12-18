import React from 'react';
import { cn } from '../../../utils/cn';
import { LucideIcon } from 'lucide-react';

interface GoalCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

export function GoalCard({ icon: Icon, title, description, isSelected, onClick }: GoalCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full text-left p-6 rounded-lg transition-all duration-300",
        "border group cursor-pointer",
        "hover:bg-gold-500/5",
        isSelected ? (
          "bg-gold-500/10 border-gold-500"
        ) : (
          "bg-dark-800/50 border-gold-500/10"
        )
      )}
    >
      <div className="flex items-start gap-4">
        <div className={cn(
          "p-2 rounded-lg transition-colors",
          isSelected ? "bg-gold-500 text-dark-900" : "bg-dark-900 text-gold-500/60"
        )}>
          <Icon className="w-6 h-6" />
        </div>
        
        <div>
          <h4 className={cn(
            "text-lg font-medium transition-colors",
            isSelected ? "text-gold-500" : "text-white/60"
          )}>
            {title}
          </h4>
          <p className={cn(
            "mt-1 text-sm transition-colors",
            isSelected ? "text-gold-500/80" : "text-gold-500/40"
          )}>
            {description}
          </p>
        </div>
      </div>
    </button>
  );
}