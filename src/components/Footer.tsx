import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { GymData } from '../data/gymData';
import { IraklisLogo } from './IraklisLogo';

interface FooterProps {
  gymData: GymData;
}

export const Footer: React.FC<FooterProps> = ({ gymData }) => {
  return (
    <footer className="border-t border-[#e7e8e2] bg-[#f4f5f0] text-zinc-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Col 1: Wordmark & Statement */}
          <div className="space-y-3">
            <IraklisLogo className="h-10 sm:h-12 w-auto" />
            <p className="text-xs sm:text-sm text-zinc-600 max-w-md leading-relaxed font-roboto">
              Εξαιρετικά εξοπλισμένο γυμναστήριο στα Ιωάννινα. Αφοσιωμένοι στην πραγματική δύναμη, την σωστή τεχνική και την υγεία.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={gymData.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-white border border-[#d8d9d2] flex items-center justify-center text-zinc-700 hover:text-zinc-900 hover:border-zinc-400 transition-colors shadow-xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={gymData.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-white border border-[#d8d9d2] flex items-center justify-center text-zinc-700 hover:text-zinc-900 hover:border-zinc-400 transition-colors shadow-xs"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Details */}
          <div className="space-y-2 md:text-right">
            <h4 className="text-xs font-mono font-bold uppercase text-zinc-900 tracking-wider">
              Στοιχεία Επικοινωνίας
            </h4>
            <div className="space-y-1 text-xs font-mono text-zinc-600">
              <div>{gymData.address}</div>
              <div>{gymData.city}, {gymData.postalCode}</div>
              <div>
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(gymData.phone);
                    } catch {}
                  }}
                  title="Κλικ για αντιγραφή"
                  className="text-zinc-900 hover:text-zinc-600 font-bold cursor-pointer whitespace-nowrap"
                >
                  Τηλ: {gymData.phone}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-[#e2e4dc] flex flex-col items-center justify-center text-center">
          <div className="text-xs text-zinc-500">
            © 2026 {gymData.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
