import OpenAI from 'openai';

// Default to a test mode if API key is not available
const isTestMode = !import.meta.env.VITE_OPENAI_API_KEY;

export const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || 'dummy-key',
  dangerouslyAllowBrowser: true
});

export const getOpenAIConfig = () => ({
  isTestMode,
  hasValidKey: !isTestMode
});