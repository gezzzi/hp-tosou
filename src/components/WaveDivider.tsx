import React from 'react';

interface WaveDividerProps {
  color?: string;
  flip?: boolean;
}

export default function WaveDivider({ color = '#ffffff', flip = false }: WaveDividerProps) {
  return (
    <div className={`relative w-full h-16 overflow-hidden pointer-events-none ${flip ? 'rotate-180' : ''}`} aria-hidden="true">
      <svg 
        viewBox="0 0 1440 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block"
        preserveAspectRatio="none"
      >
        <path 
          d="M0 120L1440 120L1440 0C1440 0 1140 120 720 120C300 120 0 0 0 0L0 120Z" 
          fill={color}
        />
      </svg>
    </div>
  );
}
