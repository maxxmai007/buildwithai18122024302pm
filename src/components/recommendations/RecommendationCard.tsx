import React from 'react';
import { ExternalLink } from 'lucide-react';

interface RecommendationCardProps {
  name: string;
  image: string;
  annualFee: string;
  maxRewards: string;
  benefits: string[];
  applyLink?: string;
}

export function RecommendationCard({
  name,
  image,
  annualFee,
  maxRewards,
  benefits,
  applyLink
}: RecommendationCardProps) {
  return (
    <div className="bg-dark-800/50 border border-gold-500/10 rounded-lg overflow-hidden hover:border-gold-500/20 transition-all duration-300">
      <div className="aspect-[16/10] relative bg-gradient-to-br from-gold-500/5 to-dark-900/50">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-contain p-6"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-medium text-white">{name}</h3>
          {applyLink && (
            <a
              href={applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-500 hover:text-gold-600 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gold-500/60 mb-1">Annual Fee</p>
            <p className="text-white font-medium">{annualFee}</p>
          </div>
          <div>
            <p className="text-sm text-gold-500/60 mb-1">Maximum Rewards</p>
            <p className="text-white font-medium">{maxRewards}</p>
          </div>
        </div>

        <div>
          <p className="text-sm text-gold-500/60 mb-2">Real-World Benefits</p>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-white text-sm flex items-start gap-2">
                <span className="text-gold-500">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}