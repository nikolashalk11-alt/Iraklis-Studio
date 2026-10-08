import React from 'react';
import { MapPin } from 'lucide-react';
import { GymData } from '../data/gymData';
import { calculateGymStatus } from '../utils/statusHelper';
import heroImg from '../assets/images/hero_gym_strength_1790428551139.jpg';

interface HeroProps {
  gymData: GymData;
}

export const Hero: React.FC<HeroProps> = ({ gymData }) => {
  const status = calculateGymStatus(gymData.hours);

  return (
    <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden border-b border-[#e7e8e2] bg-[#fbfcf8]">
      {/* Background Photography with light mode treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Iraklis Studio Gym Interior Ioannina"
          className="w-full h-full object-cover object-center opacity-15 filter grayscale contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Soft light scrims transitioning to #FBFCF8 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#fbfcf8] via-[#fbfcf8]/70 to-[#fbfcf8]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbfcf8] via-[#fbfcf8]/85 to-transparent" />
        {/* Subtle architectural dot grid */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #71717a 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
        <div className="max-w-3xl">
          {/* Location and live status in sophisticated grey palette (no green) */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-zinc-600 mb-4">
            <span className="flex items-center gap-1.5 text-zinc-800 font-medium">
              <MapPin className="w-3.5 h-3.5 text-zinc-500" />
              <span>{gymData.address}, {gymData.city}</span>
            </span>
            <span aria-hidden="true" className="text-zinc-400">·</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-zinc-700" />
              <span className="font-semibold text-zinc-900">{status.statusText}</span>
              <span className="text-zinc-500">({status.subText})</span>
            </span>
          </div>

          {/* Marquee Headline - ONLY "ΕΝΔΥΝΑΜΩΣΗΣ" is green */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#18181b] leading-tight font-work-sans-bold mb-4" style={{ textWrap: 'balance' }}>
            Ο ΑΠΟΛΥΤΟΣ ΧΩΡΟΣ <span className="text-[#6EC454] underline decoration-[#6EC454]/40 decoration-4 underline-offset-8">ΕΝΔΥΝΑΜΩΣΗΣ</span> ΣΤΑ ΙΩΑΝΝΙΝΑ.
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-2xl font-roboto">
            Σπύρου Λάμπρου 50 · Κορυφαίος εξοπλισμός δύναμης, ελεύθερα βάρη, εξειδικευμένες μηχανές και αυθεντική προπονητική ατμόσφαιρα. Χωρίς περιττούς συμβιβασμούς και η κοινότητα που σε ωθεί να ξεπεράσεις τα όριά σου.
          </p>
        </div>
      </div>
    </section>
  );
};
