import React from 'react';
import { Calendar } from 'lucide-react';
import { GymData } from '../data/gymData';

interface ScheduleSectionProps {
  gymData: GymData;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ gymData }) => {
  const currentDayIndex = new Date().getDay();

  return (
    <section id="schedule" className="py-14 sm:py-16 bg-[#fbfcf8] border-b border-[#e7e8e2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
            Ωραριο Λειτουργιας
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#18181b] tracking-tight font-work-sans-bold mt-1">
            ΠΡΟΠΟΝΗΣΟΥ ΣΤΟ ΔΙΚΟ ΣΟΥ ΡΥΘΜΟ.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-2 leading-relaxed font-roboto">
            Ανοιχτά από τις 07:30 το πρωί μέχρι 23:00 το βράδυ. Καμία πίεση χρόνου, πάντα έτοιμοι να σε υποδεχτούμε.
          </p>
        </div>

        {/* Schedule Table */}
        <div className="max-w-4xl rounded overflow-hidden border border-[#e7e8e2] bg-white shadow-xs">
          <div className="p-6 border-b border-[#e7e8e2] flex items-center justify-between bg-[#fbfcf8]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-zinc-600" />
              <h3 className="text-lg font-bold uppercase text-[#18181b] font-work-sans-bold tracking-wide">
                Εβδομαδιαίο Πρόγραμμα
              </h3>
            </div>
          </div>

          <div className="divide-y divide-[#e7e8e2]">
            {gymData.hours.map((item) => {
              const isToday = item.dayIndex === currentDayIndex;

              return (
                <div
                  key={item.day}
                  className={`flex items-center justify-between px-6 py-4 transition-colors ${
                    isToday
                      ? 'bg-[#f4f5f0] border-l-4 border-l-zinc-800'
                      : 'hover:bg-[#fafaf7]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-semibold uppercase ${isToday ? 'text-zinc-900 font-bold' : 'text-zinc-700'}`}>
                      {item.day}
                    </span>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="hidden sm:block text-right">
                      <span className="text-[11px] font-mono text-zinc-400 block">Ώρες αιχμής</span>
                      <span className="text-xs font-mono text-zinc-600">{item.busyHours}</span>
                    </div>

                    <div className="text-right min-w-[120px]">
                      {item.isOpen ? (
                        <span className="text-sm sm:text-base font-bold font-mono tracking-tight text-zinc-900 tabular-nums">
                          {item.open} – {item.close}
                        </span>
                      ) : (
                        <span className="text-sm sm:text-base font-bold font-mono tracking-tight text-zinc-900">
                          Κλειστά
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
