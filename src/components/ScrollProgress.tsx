import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9998]" aria-hidden="true">
      <div
        className="h-full bg-vermillion origin-left"
        style={{ transform: `scaleX(${progress})`, transition: 'transform 0.1s linear' }}
      />
    </div>
  );
};
