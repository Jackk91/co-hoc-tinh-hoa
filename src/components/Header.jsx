/**
 * Header Component
 * Simplified navigation with mega menu dropdowns (Merged from Navigation.jsx)
 */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Hand,
  User,
  Hash,
  Sparkles,
  Crown,
  Heart,
  Calendar,
  CalendarDays,
  ChevronDown,
  Menu,
  X,
  Star,
} from 'lucide-react';

// Navigation structure with categories
const NAV_STRUCTURE = {
  home: {
    id: 'home',
    label: 'Trang Chủ',
    icon: Compass,
    type: 'link',
  },
  services: {
    id: 'services',
    label: 'Dịch Vụ',
    emoji: '✨',
    icon: Sparkles,
    type: 'dropdown',
    items: [
      { id: 'astrology', label: 'Tử Vi', description: 'Luận giải vận mệnh theo Tử Vi Đẩu Số', emoji: '✨', icon: Sparkles },
      { id: 'numerology', label: 'Thần Số Học', description: 'Khám phá con số định mệnh', emoji: '🔢', icon: Hash },
      { id: 'palmistry', label: 'Xem Tướng Tay', description: 'Giải mã vận mệnh qua đường chỉ tay', emoji: '✋', icon: Hand },
      { id: 'physiognomy', label: 'Xem Tướng Mặt', description: 'Nhân tướng học phương Đông', emoji: '😊', icon: User },
    ],
  },
  tools: {
    id: 'tools',
    label: 'Công Cụ',
    emoji: '📅',
    icon: CalendarDays,
    type: 'dropdown',
    items: [
      { id: 'lunar-calendar', label: 'Lịch Vạn Niên', description: 'Âm lịch, Can Chi, Giờ Hoàng Đạo', emoji: '🗓️', icon: CalendarDays },
      { id: 'auspicious-date', label: 'Xem Ngày Tốt', description: 'Chọn ngày tốt cho việc đại sự', emoji: '✅', icon: Calendar },
      { id: 'compatibility', label: 'Xem Hợp Tuổi', description: 'Kiểm tra độ hợp tuổi', emoji: '❤️', icon: Heart },
    ],
  },
  premium: {
    id: 'premium-section',
    label: 'Premium',
    emoji: '👑',
    icon: Crown,
    type: 'dropdown',
    premium: true,
    items: [
      { id: 'premium', label: 'Bản Đồ Vận Mệnh', description: 'Phân tích vận mệnh toàn diện', emoji: '🗺️', icon: Star, premium: true },
      { id: 'premium-numerology', label: 'Bản Đồ Số Mệnh', description: 'Thần số học chuyên sâu', emoji: '🔮', icon: Hash, premium: true },
      { id: 'report', label: 'Báo Cáo Tổng Hợp', description: 'Báo cáo phân tích chi tiết', emoji: '📊', icon: Sparkles },
    ],
  },
};

/**
 * MenuIcon Component
 * Small luxury circular icon with dots (Internal to Header)
 */
function MenuIcon({ emoji, icon: Icon, size = "sm", premium = false }) {
  const outerSize = size === "sm" ? 32 : 36;
  const innerSize = size === "sm" ? 20 : 24;
  const iconSize = size === "sm" ? 14 : 16;
  const emojiSize = size === "sm" ? "text-xs" : "text-sm";
  const color = premium ? "#facc15" : "#c4a35a";

  return (
    <div className="relative flex-shrink-0 flex items-center justify-center pointer-events-none" style={{ width: outerSize, height: outerSize }}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {/* Outer dots - 12 dots */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360 / 12 - 90) * (Math.PI / 180);
          const x = 50 + 45 * Math.cos(angle);
          const y = 50 + 45 * Math.sin(angle);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={i % 3 === 0 ? 3.5 : 2}
              fill={color}
              opacity={0.6}
            />
          );
        })}
        {/* Middle ring */}
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          opacity="0.3"
        />
      </svg>
      {/* Icon/Emoji Container */}
      <div
        className="relative rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{
          width: innerSize,
          height: innerSize,
          background: `radial-gradient(circle at center, ${color}20, transparent)`,
          border: `1px solid ${color}40`,
          boxShadow: `0 0 10px ${color}10`
        }}
      >
        {Icon ? (
          <Icon size={iconSize} style={{ color }} />
        ) : (
          <span className={`${emojiSize} leading-none`} style={{ filter: `drop-shadow(0 0 2px ${color}40)` }}>
            {emoji}
          </span>
        )}
      </div>
    </div>
  );
}

// Desktop dropdown menu
function DropdownMenu({ category, isOpen, onNavigate, onClose, alignRight = false }) {
  const items = category.items || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.15 }}
          className={`absolute top-full mt-2 min-w-[280px] z-[var(--z-dropdown)] ${alignRight ? 'right-0' : 'left-0'}`}
        >
          <div className="
            bg-[var(--color-lacquer)]
            border border-[rgba(196,163,90,0.3)]
            rounded-[var(--radius-xl)]
            shadow-[var(--shadow-lg)]
            overflow-hidden
            p-2
          ">
            {items.map((item) => {
              return (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    onClose();
                  }}
                  className="
                    w-full flex items-center gap-3 p-3
                    rounded-[var(--radius-lg)]
                    text-left
                    transition-colors duration-[var(--duration-fast)]
                    hover:bg-[rgba(196,163,90,0.1)]
                    group
                  "
                  whileHover={{ x: 4 }}
                >
                  <MenuIcon emoji={item.emoji} icon={item.icon} premium={item.premium} />
                  <div className="flex-1 min-w-0">
                    <span className={`
                      block font-medium text-sm
                      ${item.premium ? 'text-[var(--color-gold)]' : 'text-[var(--color-ivory)]'}
                    `}>
                      {item.label}
                      {item.premium && (
                        <Crown size={12} className="inline-block ml-1.5 text-[var(--color-gold)]" />
                      )}
                    </span>
                    <span className="block text-xs text-[var(--color-mist)] mt-0.5 line-clamp-1">
                      {item.description}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Desktop Navigation Item
function NavItem({ category, isActive, currentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  const Icon = category.icon;
  const isDropdown = category.type === 'dropdown';

  // Check if any child is active
  const hasActiveChild = isDropdown && category.items?.some(item => item.id === currentPage);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!isDropdown) {
    return (
      <motion.button
        onClick={() => onNavigate(category.id)}
        className={`
          relative flex items-center gap-2 px-4 py-2
          font-medium text-sm
          rounded-[var(--radius-lg)]
          transition-colors duration-[var(--duration-fast)]
          ${isActive
            ? 'text-[var(--color-gold)]'
            : 'text-[var(--color-ivory)] hover:text-[var(--color-gold-light)]'
          }
        `}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <MenuIcon emoji={category.emoji} icon={category.icon} premium={category.premium} />
        <span>{category.label}</span>
        {isActive && (
          <motion.div
            layoutId="navIndicator"
            className="absolute inset-0 bg-[rgba(196,163,90,0.1)] border border-[rgba(196,163,90,0.3)] rounded-[var(--radius-lg)] -z-10"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
          />
        )}
      </motion.button>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`
          flex items-center gap-2 px-4 py-2
          font-medium text-sm
          rounded-[var(--radius-lg)]
          transition-colors duration-[var(--duration-fast)]
          ${category.premium
            ? 'bg-gradient-to-r from-[rgba(196,163,90,0.15)] to-[rgba(74,107,93,0.15)] border border-[rgba(196,163,90,0.3)]'
            : ''
          }
          ${hasActiveChild || isOpen
            ? 'text-[var(--color-gold)]'
            : category.premium
              ? 'text-[var(--color-gold)]'
              : 'text-[var(--color-ivory)] hover:text-[var(--color-gold-light)]'
          }
        `}
      >
        <MenuIcon emoji={category.emoji} icon={category.icon} premium={category.premium} />
        <span>{category.label}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <DropdownMenu
        category={category}
        isOpen={isOpen}
        onNavigate={onNavigate}
        onClose={() => setIsOpen(false)}
        alignRight={category.premium}
      />
    </div>
  );
}

// Mobile Navigation
function MobileNav({ isOpen, onClose, currentPage, onNavigate }) {
  const [expandedCategory, setExpandedCategory] = useState(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-[var(--z-overlay)]"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="
              fixed top-0 right-0 bottom-0 w-[300px]
              bg-[var(--color-lacquer)]
              border-l border-[rgba(196,163,90,0.2)]
              z-[var(--z-modal)]
              overflow-y-auto
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[rgba(196,163,90,0.2)]">
              <span className="font-display text-lg text-[var(--color-gold)]">Menu</span>
              <button
                onClick={onClose}
                className="p-2 text-[var(--color-mist)] hover:text-[var(--color-gold)] transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Nav Items */}
            <div className="p-4 space-y-2">
              {Object.values(NAV_STRUCTURE).map((category) => {
                const Icon = category.icon;
                const isDropdown = category.type === 'dropdown';
                const isExpanded = expandedCategory === category.id;
                const isActive = currentPage === category.id;

                if (!isDropdown) {
                  return (
                    <button
                      key={category.id}
                      onClick={() => {
                        onNavigate(category.id);
                        onClose();
                      }}
                      className={`
                        w-full flex items-center gap-3 p-3
                        rounded-[var(--radius-lg)]
                        transition-colors
                        ${isActive
                          ? 'bg-[rgba(196,163,90,0.15)] text-[var(--color-gold)]'
                          : 'text-[var(--color-ivory)] hover:bg-[rgba(196,163,90,0.1)]'
                        }
                      `}
                    >
                      <MenuIcon emoji={category.emoji} icon={category.icon} premium={category.premium} />
                      <span className="font-medium">{category.label}</span>
                    </button>
                  );
                }

                return (
                  <div key={category.id}>
                    <button
                      onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                      className={`
                        w-full flex items-center justify-between p-3
                        rounded-[var(--radius-lg)]
                        transition-colors
                        ${category.premium
                          ? 'bg-gradient-to-r from-[rgba(196,163,90,0.1)] to-[rgba(74,107,93,0.1)] text-[var(--color-gold)]'
                          : 'text-[var(--color-ivory)] hover:bg-[rgba(196,163,90,0.1)]'
                        }
                      `}
                    >
                      <span className="flex items-center gap-3">
                        <MenuIcon emoji={category.emoji} icon={category.icon} premium={category.premium} />
                        <span className="font-medium">{category.label}</span>
                      </span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 space-y-1">
                            {category.items?.map((item) => {
                              const isItemActive = currentPage === item.id;

                              return (
                                <button
                                  key={item.id}
                                  onClick={() => {
                                    onNavigate(item.id);
                                    onClose();
                                  }}
                                  className={`
                                    w-full flex items-center gap-3 p-2.5
                                    rounded-[var(--radius-md)]
                                    text-sm
                                    transition-colors
                                    ${isItemActive
                                      ? 'bg-[rgba(196,163,90,0.15)] text-[var(--color-gold)]'
                                      : 'text-[var(--color-mist)] hover:text-[var(--color-ivory)] hover:bg-[rgba(196,163,90,0.05)]'
                                    }
                                  `}
                                >
                                  <MenuIcon emoji={item.emoji} icon={item.icon} premium={item.premium} />
                                  <span>{item.label}</span>
                                  {item.premium && (
                                    <Crown size={12} className="text-[var(--color-gold)]" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Main Header Component
export default function Header({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[var(--z-sticky)]">
      {/* Glass background */}
      <div className="absolute inset-0 bg-[var(--color-ink)]/90 backdrop-blur-xl border-b border-[rgba(196,163,90,0.1)]" />

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[var(--nav-height)]">
          {/* Logo */}
          <motion.button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Logo Icon - Bagua (Bát Quái) */}
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-muted)] rounded-full opacity-20 animate-pulse-glow" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-8 h-8">
                  {/* Outer circle */}
                  <circle cx="50" cy="50" r="48" fill="var(--color-lacquer)" stroke="var(--color-gold)" strokeWidth="1.5" />

                  {/* Yin-Yang symbol in center */}
                  <circle cx="50" cy="50" r="16" fill="var(--color-gold)" />
                  <path d="M50,34 A16,16 0 0,1 50,66 A8,8 0 0,0 50,50 A8,8 0 0,1 50,34" fill="var(--color-lacquer)" />
                  <circle cx="50" cy="42" r="2.5" fill="var(--color-gold)" />
                  <circle cx="50" cy="58" r="2.5" fill="var(--color-lacquer)" />

                  {/* Trigrams - Minimal Bagua for small size */}
                  {/* Qian ☰ - top */}
                  <g transform="translate(50, 12)">
                    <rect x="-8" y="0" width="16" height="1.5" fill="var(--color-gold)" />
                    <rect x="-8" y="3" width="16" height="1.5" fill="var(--color-gold)" />
                    <rect x="-8" y="6" width="16" height="1.5" fill="var(--color-gold)" />
                  </g>

                  {/* Kun ☷ - bottom */}
                  <g transform="translate(50, 80)">
                    <rect x="-8" y="0" width="7" height="1.5" fill="var(--color-gold)" />
                    <rect x="1" y="0" width="7" height="1.5" fill="var(--color-gold)" />
                    <rect x="-8" y="3" width="7" height="1.5" fill="var(--color-gold)" />
                    <rect x="1" y="3" width="7" height="1.5" fill="var(--color-gold)" />
                    <rect x="-8" y="6" width="7" height="1.5" fill="var(--color-gold)" />
                    <rect x="1" y="6" width="7" height="1.5" fill="var(--color-gold)" />
                  </g>

                  {/* Li ☲ - right */}
                  <g transform="translate(82, 50) rotate(90)">
                    <rect x="-5" y="-6" width="10" height="1.5" fill="var(--color-gold)" />
                    <rect x="-5" y="-3" width="4" height="1.5" fill="var(--color-gold)" />
                    <rect x="1" y="-3" width="4" height="1.5" fill="var(--color-gold)" />
                    <rect x="-5" y="0" width="10" height="1.5" fill="var(--color-gold)" />
                  </g>

                  {/* Kan ☵ - left */}
                  <g transform="translate(18, 50) rotate(90)">
                    <rect x="-5" y="-6" width="4" height="1.5" fill="var(--color-gold)" />
                    <rect x="1" y="-6" width="4" height="1.5" fill="var(--color-gold)" />
                    <rect x="-5" y="-3" width="10" height="1.5" fill="var(--color-gold)" />
                    <rect x="-5" y="0" width="4" height="1.5" fill="var(--color-gold)" />
                    <rect x="1" y="0" width="4" height="1.5" fill="var(--color-gold)" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Logo Text */}
            <div className="hidden sm:block">
              <h1 className="font-display text-lg md:text-xl font-semibold text-gradient-gold tracking-wide">
                Cổ Học Tinh Hoa
              </h1>
              <p className="text-[10px] text-[var(--color-mist)] tracking-[0.2em] uppercase">
                Ancient Wisdom
              </p>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {Object.values(NAV_STRUCTURE).map((category) => (
              <NavItem
                key={category.id}
                category={category}
                isActive={currentPage === category.id}
                currentPage={currentPage}
                onNavigate={onNavigate}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-[var(--color-ivory)] hover:text-[var(--color-gold)] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentPage={currentPage}
        onNavigate={onNavigate}
      />
    </header>
  );
}
