import React, { useEffect, useRef } from 'react';
import { CreditCard } from 'lucide-react';
import '../../styles/logo-animation.css';

export function AnimatedLogo() {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    // Add animation class after a small delay
    setTimeout(() => {
      logo.classList.add('animate-shine');
    }, 500);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <CreditCard className="w-6 h-6 gold-gradient-text" />
      <div className="logo-container" ref={logoRef}>
        <span className="text-xl font-display tracking-wide gold-gradient-text gold-shimmer" data-text="MAXXMAI">
          MAXXMAI
        </span>
        <div className="shine-effect" />
        <div className="i-dot" />
      </div>
    </div>
  );
}