/**
 * Footer Component - Modern & Minimalist
 * Cổ Học Tinh Hoa
 */

import { motion } from 'framer-motion';
import { Star, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto">
      {/* Subtle top border gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--lux-gold)]/20 to-transparent" />

      <div className="bg-[var(--lux-ink)]/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">

          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Brand */}
            <div className="flex items-center gap-3">
              {/* Logo Icon - Bagua (Bát Quái) */}
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--lux-gold)]/20 to-[var(--lux-gold)]/5 rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-8 h-8">
                    {/* Outer circle */}
                    <circle cx="50" cy="50" r="48" fill="none" stroke="var(--lux-gold)" strokeWidth="1.5" />

                    {/* Yin-Yang symbol in center */}
                    <circle cx="50" cy="50" r="16" fill="var(--lux-gold)" />
                    <path d="M50,34 A16,16 0 0,1 50,66 A8,8 0 0,0 50,50 A8,8 0 0,1 50,34" fill="var(--lux-ink)" />
                    <circle cx="50" cy="42" r="2.5" fill="var(--lux-gold)" />
                    <circle cx="50" cy="58" r="2.5" fill="var(--lux-ink)" />

                    {/* Qian ☰ - top */}
                    <g transform="translate(50, 10)">
                      <rect x="-8" y="0" width="16" height="1.5" fill="var(--lux-gold)" />
                      <rect x="-8" y="3" width="16" height="1.5" fill="var(--lux-gold)" />
                      <rect x="-8" y="6" width="16" height="1.5" fill="var(--lux-gold)" />
                    </g>

                    {/* Kun ☷ - bottom */}
                    <g transform="translate(50, 84)">
                      <rect x="-8" y="0" width="7" height="1.5" fill="var(--lux-gold)" />
                      <rect x="1" y="0" width="7" height="1.5" fill="var(--lux-gold)" />
                      <rect x="-8" y="3" width="7" height="1.5" fill="var(--lux-gold)" />
                      <rect x="1" y="3" width="7" height="1.5" fill="var(--lux-gold)" />
                      <rect x="-8" y="6" width="7" height="1.5" fill="var(--lux-gold)" />
                      <rect x="1" y="6" width="7" height="1.5" fill="var(--lux-gold)" />
                    </g>

                    {/* Li ☲ - right */}
                    <g transform="translate(85, 50) rotate(90)">
                      <rect x="-5" y="-6" width="10" height="1.5" fill="var(--lux-gold)" />
                      <rect x="-5" y="-3" width="4" height="1.5" fill="var(--lux-gold)" />
                      <rect x="1" y="-3" width="4" height="1.5" fill="var(--lux-gold)" />
                      <rect x="-5" y="0" width="10" height="1.5" fill="var(--lux-gold)" />
                    </g>

                    {/* Kan ☵ - left */}
                    <g transform="translate(15, 50) rotate(90)">
                      <rect x="-5" y="-6" width="4" height="1.5" fill="var(--lux-gold)" />
                      <rect x="1" y="-6" width="4" height="1.5" fill="var(--lux-gold)" />
                      <rect x="-5" y="-3" width="10" height="1.5" fill="var(--lux-gold)" />
                      <rect x="-5" y="0" width="4" height="1.5" fill="var(--lux-gold)" />
                      <rect x="1" y="0" width="4" height="1.5" fill="var(--lux-gold)" />
                    </g>
                  </svg>
                </div>
              </div>
              <div>
                <span className="text-[var(--lux-ivory)] font-display text-sm tracking-wide">
                  Cổ Học Tinh Hoa
                </span>
                <span className="text-[var(--lux-mist)] text-xs block">
                  Huyền học AI
                </span>
              </div>
            </div>

            {/* Center - Vibecode Kit Credit */}
            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--lux-lacquer)]/50 border border-[var(--lux-gold)]/10"
              whileHover={{ scale: 1.02, borderColor: 'rgba(196, 154, 61, 0.3)' }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-[var(--lux-mist)] text-xs">Crafted with</span>
              <Heart size={12} className="text-[var(--lux-vermillion)]" />
              <span className="text-[var(--lux-mist)] text-xs">by</span>
              <span className="text-[var(--lux-gold)] text-xs font-medium tracking-wide">
                AI
              </span>
            </motion.div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-[var(--lux-mist)] text-xs">
                © {currentYear} All rights reserved
              </p>
            </div>
          </div>

          {/* Bottom Decoration */}
          <div className="flex items-center justify-center gap-3 mt-6 pt-6 border-t border-[var(--lux-gold)]/5">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[var(--lux-gold)]/30" />
            <Star size={10} className="text-[var(--lux-gold)]/40" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[var(--lux-gold)]/30" />
          </div>

          {/* Tagline */}
          <p className="text-center text-[var(--lux-mist)]/60 text-[10px] mt-3 tracking-widest uppercase">
            Khám phá vận mệnh qua lăng kính cổ xưa
          </p>
        </div>
      </div>
    </footer >
  );
}
