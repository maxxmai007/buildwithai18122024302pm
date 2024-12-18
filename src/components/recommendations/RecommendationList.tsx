import React from 'react';
import { RecommendationCard } from './RecommendationCard';

interface Recommendation {
  name: string;
  image: string;
  annualFee: string;
  maxRewards: string;
  benefits: string[];
  applyLink?: string;
}

interface RecommendationListProps {
  recommendations: Recommendation[];
}

export function RecommendationList({ recommendations }: RecommendationListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {recommendations.map((card, index) => (
        <RecommendationCard
          key={index}
          name={card.name}
          image={card.image}
          annualFee={card.annualFee}
          maxRewards={card.maxRewards}
          benefits={card.benefits}
          applyLink={card.applyLink}
        />
      ))}
    </div>
  );
}