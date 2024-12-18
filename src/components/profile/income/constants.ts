export const incomeBrackets = [
  { value: 'below_300000', label: 'Below ₹3,00,000' },
  { value: '300000_600000', label: '₹3,00,000 - ₹6,00,000' },
  { value: '600000_1200000', label: '₹6,00,000 - ₹12,00,000' },
  { value: '1200000_2500000', label: '₹12,00,000 - ₹25,00,000' },
  { value: 'above_2500000', label: 'Above ₹25,00,000' }
] as const;

export type IncomeBracket = typeof incomeBrackets[number]['value'];