/**
 * TET WISH POPUP component
 * 100% Vietnamese - Luxury "Sơn Mài" Aesthetic
 * Featuring Eagles Group Sponsor
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import Modal from './ui/Modal';
import { GoldShimmerText, FloatingParticles } from './animations';

// Assets
import bgCorner from '../data/sponsor/bg-corner-pupop-left.png';
import sponsorLogo from '../data/sponsor/eagles-group-logo.svg';
import zodiac2026 from '../data/sponsor/zodiac-2026.png';

export default function TetWishPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if shown in this session
        const hasBeenShown = sessionStorage.getItem('tet_popup_shown');
        if (!hasBeenShown) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                sessionStorage.setItem('tet_popup_shown', 'true');
            }, 1500); // Delay for cinematic effect
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            size="lg" // Increased size for more luxury feel
            showCloseButton={false} // Custom close button
            className="overflow-hidden border-none bg-transparent shadow-none"
        >
            <div className="relative group perspective-1000">
                {/* Luxury Background Container with Glassmorphism */}
                <div
                    className="relative bg-[rgba(15,13,11,0.85)] backdrop-blur-xl border border-[rgba(196,154,61,0.4)] rounded-[40px] p-8 md:p-16 overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6),var(--lux-shadow-modal)]"
                >
                    {/* Ambient Glows inside */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-[40px]">
                        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-[rgba(196,154,61,0.1)] blur-[100px] rounded-full" />
                        <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-[rgba(196,92,92,0.08)] blur-[100px] rounded-full" />

                        {/* Light Sweep Animation */}
                        <motion.div
                            className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.05)] to-transparent skew-x-[-25deg]"
                            animate={{ left: ['100%', '-100%'] }}
                            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                        />
                    </div>

                    {/* Gold Dust Particles */}
                    <div className="absolute inset-0 z-0">
                        <FloatingParticles count={25} />
                    </div>

                    {/* Vertical Couplets (Liễn) - Enhanced Style */}
                    {/* Left - Hán Nôm */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1.2 }}
                        className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col items-center z-10 hidden lg:flex"
                    >
                        <div className="relative bg-[var(--lux-vermillion)] border border-[var(--lux-gold)]/50 px-4 py-6 rounded-sm shadow-2xl flex flex-col items-center gap-1.5 overflow-hidden">
                            {/* Silk Pattern Overlay */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '12px 12px' }} />

                            {[
                                { hn: '春', vi: 'XUÂN' },
                                { hn: '安', vi: 'AN' },
                                { hn: '康', vi: 'KHANG' },
                                { hn: '德', vi: 'ĐỨC' },
                                { hn: '才', vi: 'TÀI' },
                                { hn: '如', vi: 'NHƯ' },
                                { hn: '意', vi: 'Ý' }
                            ].map((pair, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <GoldShimmerText className="text-2xl font-serif font-bold leading-none">
                                        {pair.hn}
                                    </GoldShimmerText>
                                    <span className="text-[var(--lux-gold-bright)] text-[7px] font-display font-semibold uppercase tracking-wider leading-none drop-shadow-sm">
                                        {pair.vi}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Hán Nôm */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 1.2 }}
                        className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center z-10 hidden lg:flex"
                    >
                        <div className="relative bg-[var(--lux-vermillion)] border border-[var(--lux-gold)]/50 px-4 py-6 rounded-sm shadow-2xl flex flex-col items-center gap-1.5 overflow-hidden">
                            {/* Silk Pattern Overlay */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '12px 12px' }} />

                            {[
                                { hn: '年', vi: 'NIÊN' },
                                { hn: '盛', vi: 'THỊNH' },
                                { hn: '旺', vi: 'VƯỢNG' },
                                { hn: '福', vi: 'PHÚC' },
                                { hn: '夀', vi: 'THỌ' },
                                { hn: '無', vi: 'VÔ' },
                                { hn: '邊', vi: 'BIÊN' }
                            ].map((pair, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <GoldShimmerText className="text-2xl font-serif font-bold leading-none">
                                        {pair.hn}
                                    </GoldShimmerText>
                                    <span className="text-[var(--lux-gold-bright)] text-[7px] font-display font-semibold uppercase tracking-wider leading-none drop-shadow-sm">
                                        {pair.vi}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Sponsor Logo - Centered Bottom */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
                        <p className="text-[var(--lux-mist)] text-[8px] tracking-[0.3em] uppercase mb-4 opacity-30 whitespace-nowrap">
                            Đồng hành cùng phát triển
                        </p>
                        <img
                            src={sponsorLogo}
                            alt="Eagles Group"
                            className="h-14 md:h-[84px] w-auto grayscale brightness-150 opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-105"
                        />
                    </div>

                    {/* Close Button - Refined */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-6 right-8 z-20 p-3 text-[var(--lux-gold-dim)] hover:text-[var(--lux-gold)] transition-all duration-300 hover:rotate-90"
                    >
                        <X size={28} />
                    </button>

                    {/* Content */}
                    <div className="relative z-10 text-center flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <motion.div
                                className="pt-12 mb-6 flex justify-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 1.2 }}
                            >
                                <div className="relative group">
                                    <div className="absolute -inset-6 bg-[var(--lux-gold)]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                    <img
                                        src={zodiac2026}
                                        alt="Zodiac 2026 - Horse"
                                        className="h-28 md:h-40 w-28 md:w-40 rounded-full object-cover border-2 border-[var(--lux-gold)]/30 relative z-10 shadow-[0_0_40px_rgba(196,154,61,0.3)] hover:scale-105 transition-all duration-700"
                                    />
                                </div>
                            </motion.div>

                            <GoldShimmerText className="text-2xl md:text-5xl font-display mb-10 block tracking-tight whitespace-nowrap">
                                Chúc Mừng Năm Mới
                            </GoldShimmerText>

                            <div className="max-w-xl mx-auto mb-4 relative">
                                <motion.p
                                    className="text-[var(--lux-ivory)] text-xl md:text-2xl font-display italic leading-loose px-6 drop-shadow-md tracking-wide"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 2 }}
                                >
                                    Vạn sự như ý, tỷ sự như mơ<br />
                                    Triệu triệu bất ngờ, không chờ cũng đến<br />
                                    An khang thịnh vượng, cung chúc xuân sang
                                </motion.p>

                                {/* Decorative underline */}
                                <motion.div
                                    className="h-px w-24 bg-gradient-to-r from-transparent via-[var(--lux-gold)] to-transparent mx-auto mt-8"
                                    initial={{ width: 0 }}
                                    animate={{ width: 120 }}
                                    transition={{ delay: 1.5, duration: 1.5 }}
                                />
                            </div>

                            <div className="pb-24" />
                        </motion.div>
                    </div>
                </div>

                {/* Ambient Glows around the modal */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[var(--lux-gold)]/30 to-[var(--lux-vermillion)]/20 rounded-[45px] blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-1000 -z-10" />
            </div>
        </Modal>
    );
}
