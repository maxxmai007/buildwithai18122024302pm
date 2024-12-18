import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../../utils/cn';
import '../../../styles/gold-text.css';

interface NetworkBarProps {
  percentage: number;
  cardCount: number;
  label: string;
}

export function NetworkBar({ percentage, cardCount, label }: NetworkBarProps) {
  const [height, setHeight] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setHeight(percentage);
          }, 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div className="flex flex-col items-center w-[60px]">
      {/* Static card count label */}
      <div className="h-6 mb-2">
        <span className="text-sm font-medium gold-gradient-text font-montserrat">
          {cardCount.toLocaleString()}
        </span>
      </div>

      {/* Bar */}
      <div className="relative w-full mb-4" ref={barRef}>
        <div
          className={cn(
            "w-full rounded-lg transition-all duration-[1.5s] ease-out",
            "bg-gradient-to-t from-[#BE9B3F] to-[#FFE5BC]",
            "hover:from-[#D4AF37] hover:to-[#FFE5BC]",
          )}
          style={{ 
            height: `${height}%`,
            minHeight: '40px',
            maxHeight: '160px',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)'
          }}
        >
          {/* Metallic shine effect */}
          <div 
            className="absolute inset-0 rounded-lg opacity-50"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 229, 188, 0.4) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
              animation: 'shine 3s infinite linear'
            }}
          />
        </div>
      </div>
      
      {/* Network label */}
      <span className="text-sm font-medium gold-gradient-text font-montserrat text-center">
        {label}
      </span>
    </div>
  );
}