import React, { useEffect, useState } from 'react';
import { IraklisLogo } from './IraklisLogo';

interface PreloaderProps {
  gymName?: string;
  onFinish?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({
  onFinish,
}) => {
  const [fading, setFading] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Keep visible briefly for smooth branding preload, then initiate fade out
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 750);

    const removeTimer = setTimeout(() => {
      setRemoved(true);
      if (onFinish) onFinish();
    }, 1250);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  if (removed) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#fbfcf8] transition-opacity duration-500 ease-in-out select-none ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Φόρτωση..."
      role="status"
    >
      <div className="flex flex-col items-center justify-center gap-5">
        {/* Center Logo with new official emblem and lockup */}
        <div className="w-64 sm:w-80 md:w-96 max-w-[85vw]">
          <IraklisLogo className="w-full h-auto" />
        </div>

        {/* Minimal accent line */}
        <div className="w-24 h-0.5 bg-[#e7e8e2] overflow-hidden rounded mt-2">
          <div
            className={`h-full bg-[#6EC454] transition-all duration-700 ease-out ${
              fading ? 'w-full' : 'w-3/5 animate-pulse'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

