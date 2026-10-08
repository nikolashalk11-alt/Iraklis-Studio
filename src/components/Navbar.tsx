import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { GymData } from '../data/gymData';
import { IraklisLogo } from './IraklisLogo';

interface NavbarProps {
  gymData: GymData;
}

export const Navbar: React.FC<NavbarProps> = ({ gymData }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(gymData.phone);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = gymData.phone;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#e7e8e2] bg-[#fbfcf8]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Main Brand Logo in top-left */}
        <a
          href="#"
          className="flex items-center hover:opacity-95 transition-opacity py-1.5"
          aria-label="Iraklis Health and Fitness Center - Αρχική"
        >
          <IraklisLogo className="h-11 sm:h-13 md:h-14 w-auto" />
        </a>

        {/* Copy Phone to Clipboard Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleCopyPhone}
            title="Αντιγραφή τηλεφώνου στο πρόχειρο"
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-bold tracking-tight text-[#18181b] bg-white hover:bg-[#f4f5f0] border border-[#d8d9d2] rounded transition-all whitespace-nowrap shadow-xs cursor-pointer active:scale-95"
          >
            {copied ? (
              <span className="text-zinc-900 font-bold">Αντιγράφηκε</span>
            ) : (
              <>
                <Phone className="w-3.5 h-3.5 text-zinc-600" />
                <span>{gymData.phone}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
