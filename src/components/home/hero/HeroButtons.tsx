import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from '../../ui/Button';
import { smoothScroll } from '../../../utils/scroll';

export function HeroButtons() {
  const navigate = useNavigate();

  const handleLearnMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    smoothScroll('what-we-do');
  };

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl font-montserrat">
      <Button 
        size="xl" 
        className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 rounded-none group"
        onClick={() => navigate('/profile')}
      >
        <span className="flex items-center justify-center w-full">
          Start Your Journey
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </span>
      </Button>
      <Button 
        variant="outline" 
        size="xl"
        className="w-full border-gold-500/20 hover:border-gold-500/40 px-8 py-4 rounded-none group"
        onClick={handleLearnMore}
      >
        <span className="flex items-center justify-center w-full">
          Learn More
          <PlayCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
        </span>
      </Button>
    </div>
  );
}