interface CardRecommendation {
  name: string;
  image: string;
  annualFee: string;
  maxRewards: string;
  benefits: string[];
  applyLink?: string;
}

export function parseRecommendations(content: string): {
  recommendations: CardRecommendation[];
} {
  try {
    // Handle both string and parsed JSON
    const jsonContent = typeof content === 'string' ? JSON.parse(content) : content;
    
    if (!jsonContent.CreditCards || !Array.isArray(jsonContent.CreditCards)) {
      console.error('Invalid recommendations format:', jsonContent);
      return { recommendations: [] };
    }

    const recommendations = jsonContent.CreditCards.map((card: any) => ({
      name: card.CreditCardName,
      image: card.CardImageURL || 'https://via.placeholder.com/300x200?text=Credit+Card',
      annualFee: card.AnnualFee,
      maxRewards: card.MaximumAnnualRewards,
      benefits: Array.isArray(card.RealWorldBenefits) ? card.RealWorldBenefits : [],
      applyLink: card.ApplyLink
    }));

    return { recommendations };
  } catch (error) {
    console.error('Error parsing recommendations:', error);
    return { recommendations: [] };
  }
}