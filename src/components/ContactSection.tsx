import React, { useState } from 'react';
import { MapPin, Phone, Mail, Navigation, ExternalLink } from 'lucide-react';
import { GymData } from '../data/gymData';

interface ContactSectionProps {
  gymData: GymData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ gymData }) => {
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
    <section id="contact" className="py-14 sm:py-16 bg-[#fbfcf8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
            Τοποθεσια & Επικοινωνια
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#18181b] tracking-tight mt-1">
            <span className="font-work-sans-bold">ΣΑΣ ΠΕΡΙΜΕΝΟΥΜΕ ΣΤΟ </span>
            <span className="font-heading">STUDIO.</span>
          </h2>
        </div>

        {/* Contact Details Card */}
        <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded bg-white border border-[#e7e8e2] shadow-xs space-y-5">
          <h3 className="text-lg sm:text-xl font-bold uppercase text-[#18181b] font-work-sans-bold mb-4">
            Στοιχεία Επικοινωνίας
          </h3>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded bg-[#f4f5f0] border border-[#e7e8e2] flex items-center justify-center text-zinc-700 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase">Διεύθυνση</div>
                <div className="text-base font-semibold text-zinc-900 mt-0.5">
                  {gymData.address}
                </div>
                <div className="text-xs text-zinc-500 mt-0.5">
                  {gymData.city}, Τ.Κ. {gymData.postalCode}
                </div>
                <a
                  href={gymData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-700 hover:text-zinc-900 hover:underline mt-2"
                >
                  <Navigation className="w-3.5 h-3.5 text-zinc-600" />
                  <span>Οδηγίες στο Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 pt-4 border-t border-[#f0f1ec]">
              <div className="w-10 h-10 rounded bg-[#f4f5f0] border border-[#e7e8e2] flex items-center justify-center text-zinc-700 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase">Τηλέφωνο Επικοινωνίας</div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  title="Κλικ για αντιγραφή του τηλεφώνου"
                  className="inline-flex items-center gap-2 text-lg font-bold font-mono text-zinc-900 hover:text-zinc-600 transition-colors mt-0.5 group cursor-pointer text-left"
                >
                  <span>{gymData.phone}</span>
                  {copied && (
                    <span className="text-xs font-sans font-bold bg-zinc-900 text-white px-2 py-0.5 rounded">
                      Αντιγράφηκε
                    </span>
                  )}
                </button>
                <div className="text-xs text-zinc-500 mt-0.5">
                  {copied ? (
                    "Αντιγράφηκε"
                  ) : (
                    <span className="font-roboto">Κάντε κλικ για αντιγραφή • Άμεση εξυπηρέτηση κατά το ωράριο</span>
                  )}
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 pt-4 border-t border-[#f0f1ec]">
              <div className="w-10 h-10 rounded bg-[#f4f5f0] border border-[#e7e8e2] flex items-center justify-center text-zinc-700 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase">Email</div>
                <a
                  href={`mailto:${gymData.email}`}
                  className="text-sm font-mono text-zinc-900 hover:text-zinc-600 transition-colors mt-0.5 block"
                >
                  {gymData.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
