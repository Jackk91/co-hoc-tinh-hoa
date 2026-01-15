/**
 * LUXURY HOME PAGE - Cổ Học Tinh Hoa
 * Premium design with Sơn Mài aesthetic
 * 100% Vietnamese - No Chinese characters
 */

import { motion } from 'framer-motion';
import {
  Sparkles,
  Hand,
  User,
  Hash,
  ArrowRight,
  Star,
  Moon,
  Sun,
  Heart,
  Calendar,
  Compass,
  LayoutGrid
} from 'lucide-react';

// Custom Specialized Icons for Features
const AstrologyIcon = ({ size = 32, color = "#d4af37" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Constellation lines */}
    <path d="M20 45L35 38L50 48L70 52L85 45L80 65L65 68L50 52" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    {/* Stars */}
    <circle cx="20" cy="45" r="2" fill={color} />
    <circle cx="35" cy="38" r="2" fill={color} />
    <circle cx="50" cy="48" r="2" fill={color} />
    <circle cx="70" cy="52" r="2" fill={color} />
    <circle cx="85" cy="45" r="2" fill={color} />
    <circle cx="80" cy="65" r="2" fill={color} />
    <circle cx="65" cy="68" r="2" fill={color} />
    {/* Highlight stars */}
    <path d="M50 15L52 23L60 25L52 27L50 35L48 27L40 25L48 23L50 15Z" fill={color} />
    <path d="M25 75L26 79L30 80L26 81L25 85L24 81L20 80L24 79L25 75Z" fill={color} />
    <path d="M80 20L81 22L83 23L81 24L80 26L79 24L77 23L79 22L80 20Z" fill={color} />
  </svg>
);

const NumerologyIcon = ({ size = 32, color = "#d4af37" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="15" width="70" height="70" rx="4" stroke={color} strokeWidth="3" />
    <line x1="15" y1="38" x2="85" y2="38" stroke={color} strokeWidth="2" />
    <line x1="15" y1="62" x2="85" y2="62" stroke={color} strokeWidth="2" />
    <line x1="38" y1="15" x2="38" y2="85" stroke={color} strokeWidth="2" />
    <line x1="62" y1="15" x2="62" y2="85" stroke={color} strokeWidth="2" />
    {/* Numbers - simplified as paths/dots/glyphs */}
    <text x="26.5" y="31" fill={color} fontSize="14" fontWeight="bold" textAnchor="middle">1</text>
    <text x="50" y="31" fill={color} fontSize="14" fontWeight="bold" textAnchor="middle">2</text>
    <text x="73.5" y="31" fill={color} fontSize="14" fontWeight="bold" textAnchor="middle">3</text>
    <text x="26.5" y="55" fill={color} fontSize="14" fontWeight="bold" textAnchor="middle">4</text>
    <text x="50" y="55" fill={color} fontSize="14" fontWeight="bold" textAnchor="middle">5</text>
    <text x="73.5" y="55" fill={color} fontSize="14" fontWeight="bold" textAnchor="middle">6</text>
    <text x="26.5" y="79" fill={color} fontSize="14" fontWeight="bold" textAnchor="middle">7</text>
    <text x="50" y="79" fill={color} fontSize="14" fontWeight="bold" textAnchor="middle">8</text>
    <text x="73.5" y="79" fill={color} fontSize="14" fontWeight="bold" textAnchor="middle">9</text>
  </svg>
);

const PalmistryIcon = ({ size = 32, color = "#d4af37" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Fine Line Luxury Hand Outline */}
    <path
      d="M32 90 C 25 90, 20 82, 20 68 C 20 60, 16 56, 12 50 C 9 43, 13 38, 20 38 C 25 38, 30 42, 32 50 V 22 C 32 17, 39 17, 39 22 V 45 H 41 V 15 C 41 10, 48 10, 48 15 V 45 H 51 V 12 C 51 7, 58 7, 58 12 V 45 H 61 V 18 C 61 13, 68 13, 68 18 V 55 C 68 75, 55 90, 35 90 Z"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Spiritual Palm Lines */}
    <path d="M35 55 C 45 48, 60 48, 70 55" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
    <path d="M32 63 C 45 60, 58 61, 68 72" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
    <path d="M30 48 C 38 58, 40 75, 35 88" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
    <path d="M48 58 V 85" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const PhysiognomyIcon = ({ size = 32, color = "#d4af37" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Elegant Face Outline */}
    <path d="M28 40 C 28 18, 40 10, 50 10 C 60 10, 72 18, 72 40 C 72 65, 65 85, 50 85 C 35 85, 28 65, 28 40 Z" stroke={color} strokeWidth="2.2" strokeLinejoin="round" />
    {/* Soft Ears */}
    <path d="M28 42 C 24 44, 24 56, 28 58" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M72 42 C 76 44, 76 56, 72 58" stroke={color} strokeWidth="2" strokeLinecap="round" />
    {/* Refined Features */}
    <path d="M35 38 C 40 35, 45 35, 48 38" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M52 38 C 55 35, 60 35, 65 38" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M35 46 C 40 43, 45 43, 48 46 C 45 49, 40 49, 35 46 Z" fill={color} />
    <path d="M52 46 C 55 43, 60 43, 65 46 C 60 49, 55 49, 52 46 Z" fill={color} />
    <path d="M50 45 V 60 C 47 64, 53 64, 50 60" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    {/* Neutral, Professional Mouth */}
    <path d="M40 73 H 60" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.9" />
  </svg>
);

// Luxury Animations
import {
  CinematicReveal,
  GoldShimmerText,
  FloatingParticles,
  GlowingOrb,
  StaggerContainer,
  StaggerItem,
  RevealOnScroll,
  TiltCard,
  MagneticHover,
} from '../components/animations';

import TetWishPopup from '../components/TetWishPopup';

// ==============================================
// DATA - 100% Vietnamese
// ==============================================

const features = [
  {
    id: 'astrology',
    icon: AstrologyIcon,
    title: 'Tử Vi',
    subtitle: 'Lá số mệnh vận',
    description: 'Khám phá vận mệnh qua hệ thống Can Chi và 12 Con Giáp theo truyền thống Á Đông.',
    color: 'vermillion',
    colorVar: 'var(--lux-vermillion)'
  },
  {
    id: 'numerology',
    icon: NumerologyIcon,
    title: 'Thần Số Học',
    subtitle: 'Con số định mệnh',
    description: 'Giải mã bản đồ số mệnh từ tên và ngày sinh theo phương pháp Pythagorean & Chaldean.',
    color: 'jade',
    colorVar: 'var(--lux-jade)'
  },
  {
    id: 'palmistry',
    icon: PalmistryIcon,
    title: 'Chỉ Tay Học',
    subtitle: 'Nghệ thuật đọc vân tay',
    description: 'Phân tích đường vân tay theo nghệ thuật Chỉ Tay Học cổ xưa Á Đông.',
    color: 'gold',
    colorVar: 'var(--lux-gold)'
  },
  {
    id: 'physiognomy',
    icon: PhysiognomyIcon,
    title: 'Nhân Tướng Học',
    subtitle: 'Thuật xem tướng mạo',
    description: 'Đọc ngũ quan theo Nhân Tướng Học - nghệ thuật xem tướng mạo cổ truyền.',
    color: 'water',
    colorVar: 'var(--lux-mist)'
  }
];

const premiumFeatures = [
  {
    id: 'compatibility',
    icon: Heart,
    title: 'Xem Hợp Tuổi',
    subtitle: 'Tình duyên & đối tác',
    description: 'Phân tích độ hợp đôi qua Con Giáp, Ngũ Hành và Thần Số Học. Khám phá mức độ tương hợp trong tình yêu, hôn nhân.',
    color: 'vermillion',
    colorVar: 'var(--lux-vermillion)'
  },
  {
    id: 'auspicious-date',
    icon: Calendar,
    title: 'Xem Ngày Tốt',
    subtitle: 'Hoàng đạo & cát nhật',
    description: 'Tìm ngày lành tháng tốt theo 12 Trực, 28 Sao và Giờ Hoàng Đạo cho các sự kiện quan trọng.',
    color: 'jade',
    colorVar: 'var(--lux-jade)'
  },
  {
    id: 'lunar-calendar',
    icon: Moon,
    title: 'Lịch Vạn Niên',
    subtitle: 'Âm lịch chi tiết',
    description: 'Tra cứu âm lịch, tiết khí, can chi và thông tin phong thủy cho mọi ngày trong năm.',
    color: 'gold',
    colorVar: 'var(--lux-gold)'
  }
];

// ==============================================
// COMPONENT
// ==============================================

export default function HomePage({ onNavigate }) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Tet Wish Popup */}
      <TetWishPopup />

      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <GlowingOrb
          size={400}
          color="gold"
          className="absolute -top-40 -left-40 opacity-40"
        />
        <GlowingOrb
          size={500}
          color="jade"
          className="absolute -bottom-60 -right-60 opacity-30"
        />
        <GlowingOrb
          size={300}
          color="vermillion"
          className="absolute top-1/3 right-1/4 opacity-20"
        />
      </div>

      {/* Floating Particles */}
      <FloatingParticles count={30} />

      {/* ========== HERO SECTION ========== */}
      <section className="relative pt-28 md:pt-36 pb-24 px-4">
        <CinematicReveal delay={0.2}>
          <div className="max-w-5xl mx-auto text-center">

            {/* Decorative Header */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Moon size={18} className="text-[var(--lux-gold-dim)]" />
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-[var(--lux-gold)] to-transparent" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Star size={24} className="text-[var(--lux-gold)]" />
              </motion.div>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-[var(--lux-gold)] to-transparent" />
              <Sun size={18} className="text-[var(--lux-gold-dim)]" />
            </motion.div>

            {/* Main Title */}
            <h1 className="font-display text-luxury-hero mb-8">
              <GoldShimmerText className="block">
                Cổ Học
              </GoldShimmerText>
              <span className="text-[var(--lux-ivory)] block mt-2">
                Tinh Hoa
              </span>
            </h1>

            {/* Tagline */}
            <motion.p
              className="font-display text-2xl md:text-3xl text-[var(--lux-mist)] italic mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              "Khám phá vận mệnh qua lăng kính cổ xưa"
            </motion.p>

            {/* Description */}
            <motion.p
              className="max-w-2xl mx-auto text-[var(--lux-pearl)] text-lg md:text-xl leading-relaxed mb-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Nền tảng tử vi và tướng số kết hợp trí tuệ nhân tạo,
              mang đến phân tích sâu sắc dựa trên phương pháp truyền thống Á Đông.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <MagneticHover strength={0.2}>
                <motion.button
                  onClick={() => onNavigate('numerology')}
                  className="btn-luxury rounded-full text-lg group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Bắt Đầu Khám Phá</span>
                  <ArrowRight size={20} className="inline ml-3 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </MagneticHover>

              <MagneticHover strength={0.2}>
                <motion.button
                  onClick={() => onNavigate('astrology')}
                  className="px-10 py-4 rounded-full border border-[var(--lux-gold)]/40 text-[var(--lux-gold)] hover:bg-[var(--lux-gold)]/10 hover:border-[var(--lux-gold)]/60 transition-all duration-500 font-display text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Xem Tử Vi
                </motion.button>
              </MagneticHover>
            </motion.div>
          </div>
        </CinematicReveal>
      </section>

      {/* Divider */}
      <div className="max-w-xl mx-auto px-4">
        <div className="luxury-divider">
          <Compass size={18} className="luxury-divider-icon" />
        </div>
      </div>

      {/* ========== FEATURES SECTION ========== */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <RevealOnScroll direction="up" className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-[var(--lux-ivory)] mb-5">
              Các Phương Pháp
            </h2>
            <p className="text-[var(--lux-mist)] text-lg">
              Khám phá bốn phương pháp huyền học cổ xưa
            </p>
          </RevealOnScroll>

          {/* Feature Cards Grid - Centered Icon Style */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch" staggerDelay={0.15}>
            {features.map((feature) => {
              return (
                <StaggerItem key={feature.id} className="h-full">
                  <TiltCard maxTilt={5} glareOpacity={0.08} className="h-full">
                    <motion.div
                      className="luxury-card rounded-2xl p-6 md:p-8 cursor-pointer group h-full flex flex-col items-center text-center"
                      onClick={() => onNavigate(feature.id)}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        background: 'linear-gradient(180deg, rgba(20,18,15,0.95) 0%, rgba(15,13,10,0.98) 100%)',
                        border: '1px solid var(--lux-gold-dim)',
                      }}
                    >
                      {/* Large Iconic SVG for Feature */}
                      <div className="relative mb-8 flex items-center justify-center transition-all duration-500 group-hover:scale-105" style={{ width: '120px', height: '120px' }}>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {feature.icon && (
                          <feature.icon
                            size={100}
                            color="#d4af37"
                            className="transition-all duration-300 drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                          />
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl md:text-2xl text-[var(--lux-gold)] mb-3 tracking-wide uppercase">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[var(--lux-pearl)] text-sm leading-relaxed opacity-80">
                        {feature.description}
                      </p>
                    </motion.div>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xl mx-auto px-4">
        <div className="luxury-divider">
          <Heart size={18} className="luxury-divider-icon" />
        </div>
      </div>

      {/* ========== PREMIUM FEATURES ========== */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <RevealOnScroll direction="up" className="text-center mb-16">
            <motion.span
              className="inline-block px-5 py-2 bg-[var(--lux-gold)]/10 border border-[var(--lux-gold)]/30 rounded-full text-[var(--lux-gold)] text-sm mb-5"
              whileHover={{ scale: 1.05 }}
            >
              Công Cụ Cao Cấp
            </motion.span>
            <h2 className="font-display text-4xl md:text-5xl text-[var(--lux-ivory)] mb-5">
              Dịch Vụ Đặc Biệt
            </h2>
            <p className="text-[var(--lux-mist)] text-lg">
              Công cụ phân tích chuyên sâu cho các quyết định quan trọng
            </p>
          </RevealOnScroll>

          {/* Premium Cards Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch" staggerDelay={0.15}>
            {premiumFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={feature.id} className="h-full">
                  <TiltCard maxTilt={6} glareOpacity={0.1} className="h-full">
                    <motion.div
                      className="relative luxury-card rounded-2xl p-7 md:p-8 cursor-pointer group overflow-hidden h-full"
                      onClick={() => onNavigate(feature.id)}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Premium Gradient Accent */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                          background: `linear-gradient(135deg, ${feature.colorVar}15 0%, transparent 50%, ${feature.colorVar}10 100%)`
                        }}
                      />

                      <div className="relative">
                        {/* Icon */}
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
                          style={{
                            background: `linear-gradient(135deg, ${feature.colorVar}25, ${feature.colorVar}10)`,
                            border: `1px solid ${feature.colorVar}40`,
                            boxShadow: `0 0 25px ${feature.colorVar}20`
                          }}
                        >
                          <Icon size={26} style={{ color: feature.colorVar }} />
                        </div>

                        {/* Content */}
                        <h3 className="font-display text-2xl text-[var(--lux-ivory)] mb-2 group-hover:text-[var(--lux-gold)] transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <span className="text-xs text-[var(--lux-mist)] tracking-wider block mb-4">
                          {feature.subtitle}
                        </span>
                        <p className="text-[var(--lux-pearl)] leading-relaxed text-sm">
                          {feature.description}
                        </p>
                      </div>

                      {/* Hover Arrow */}
                      <motion.div
                        className="absolute bottom-6 right-6 text-[var(--lux-gold)] opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    </motion.div>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

    </div>
  );
}
