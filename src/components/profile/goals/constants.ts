import { CreditCard, Plane, ShoppingBag, UtensilsCrossed, Building2, Shield } from 'lucide-react';

export const financialGoals = [
  {
    id: 'cashback',
    icon: CreditCard,
    title: 'Cashback Rewards',
    description: 'Earn cash back on everyday purchases and maximize your savings'
  },
  {
    id: 'travel',
    icon: Plane,
    title: 'Travel Benefits',
    description: 'Get travel rewards, miles, and exclusive airport perks'
  },
  {
    id: 'shopping',
    icon: ShoppingBag,
    title: 'Shopping Rewards',
    description: 'Special discounts and points on retail purchases'
  },
  {
    id: 'dining',
    icon: UtensilsCrossed,
    title: 'Dining Benefits',
    description: 'Extra rewards on restaurant and food delivery spending'
  },
  {
    id: 'lounge',
    icon: Building2,
    title: 'Airport Lounge Access',
    description: 'Complimentary access to premium airport lounges worldwide'
  },
  {
    id: 'insurance',
    icon: Shield,
    title: 'Travel Insurance',
    description: 'Comprehensive coverage for your trips and purchases'
  }
] as const;

export type FinancialGoal = typeof financialGoals[number]['id'];