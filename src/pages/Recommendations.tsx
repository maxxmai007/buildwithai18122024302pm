import React from 'react';
import { Logo } from '../components/layout/Logo';
import { BackButton } from '../components/ui/BackButton';
import { LoadingAnimation } from '../components/recommendations/LoadingAnimation';
import { RecommendationList } from '../components/recommendations/RecommendationList';
import { useRecommendationsStore } from '../store/useRecommendationsStore';
import { parseRecommendations } from '../utils/parseRecommendations';
import { getOpenAIConfig } from '../config/openai';

export function Recommendations() {
  const { recommendations, isLoading, error } = useRecommendationsStore();
  const { isTestMode } = getOpenAIConfig();
  const parsedData = recommendations ? parseRecommendations(recommendations) : null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-900 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl px-4">
          <div className="text-center mb-8">
            <Logo className="mx-auto" />
            <h2 className="mt-6 text-3xl font-display tracking-tight text-white">
              Finding Your Perfect Cards
            </h2>
            <p className="mt-2 text-sm text-gold-500/80">
              {isTestMode ? 
                'Demo Mode: Loading sample recommendations' : 
                'Our AI is analyzing thousands of credit cards to find your best matches'}
            </p>
          </div>
          <LoadingAnimation />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <BackButton />
        </div>
      </div>
    );
  }

  if (!parsedData?.recommendations.length) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gold-500 mb-4">No recommendations available. Please complete your profile first.</p>
          <BackButton />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BackButton className="mb-8" />
        
        <div className="text-center mb-12">
          <Logo className="mx-auto" />
          <h2 className="mt-6 text-3xl font-display tracking-tight text-white">
            Your Perfect Credit Cards
          </h2>
          <p className="mt-2 text-sm text-gold-500/80">
            Based on your profile and spending habits
            {isTestMode && ' (Demo Mode)'}
          </p>
        </div>

        <RecommendationList recommendations={parsedData.recommendations} />

        <div className="mt-12 text-center">
          <p className="text-gold-500/80 text-sm">
            These recommendations are based on your profile and current market offerings.
            Card benefits and fees may vary. Please verify details with the card issuer.
          </p>
        </div>
      </div>
    </div>
  );
}