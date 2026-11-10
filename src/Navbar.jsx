'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * =========================================================================
 * FTR - 100% AGERO STYLE FLOATING CAPSULE NAVBAR (Navbar.jsx)
 * =========================================================================
 * - Brand: Official "FTR (✓) First Time Right" Logo
 * - Center: Light gray pill track (#f1f1f4) with smooth sliding white pill
 *   Links: Solutions | Why FTR | Products | Our Clients | Testimonials | FAQ
 * - Right: Circular Moon Theme button (☾) + Solid Black CTA "Book Site Diagnosis ↗"
 * - Responsive: Full mobile drawer menu included
 * =========================================================================
 */

const NAV_ITEMS = [
  { name: 'Solutions', targetId: 'solutions-section' },
  { name: 'Why FTR', targetId: 'why-us-section' },
  { name: 'Products', targetId: 'products-catalog' },
  { name: 'Our Clients', targetId: 'clients-section' },
  { name: 'Testimonials', targetId: 'testimonials-section' },
  { name: 'FAQ', targetId: 'faq-section' },
];

export function Navbar({
  activeItem = 'Solutions',
  onSelect,
  navItems = NAV_ITEMS,
  ctaText = 'Book Site Diagnosis',
}) {
  const [activeTab, setActiveTab] = useState(activeItem);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (item) => {
    setActiveTab(item.name);
    setMobileMenuOpen(false);

    if (onSelect) {
      onSelect(item.name);
    }

    if (item.targetId) {
      const el = document.getElementById(item.targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    const el = document.getElementById('contact-section') || document.getElementById('solutions-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return createPortal(
    <header className="ftr-agero-nav-wrapper">
      <style>{`
        /* ---------------- Floating Wrapper ---------------- */
        .ftr-agero-nav-wrapper {
          position: fixed;
          top: 18px;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 9999;
          padding: 0 20px;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          pointer-events: none;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        /* ---------------- Floating White Capsule Pill ---------------- */
        .ftr-floating-capsule {
          pointer-events: auto;
          width: 100%;
          max-width: 1120px;
          height: 60px;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 9999px;
          box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.03);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 10px 6px 18px;
          box-sizing: border-box;
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ftr-floating-capsule.is-scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 10px 30px -4px rgba(0, 0, 0, 0.1), 0 4px 10px -2px rgba(0, 0, 0, 0.04);
          border-color: rgba(0, 0, 0, 0.12);
        }

        .ftr-floating-capsule.is-dark,
        .ftr-floating-capsule.is-dark.is-scrolled {
          background: rgba(24, 24, 27, 0.96);
          border-color: rgba(255, 255, 255, 0.12);
          box-shadow: 0 10px 30px -4px rgba(0, 0, 0, 0.3);
        }

        /* ---------------- FTR Official Logo ---------------- */
        .ftr-brand-logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          user-select: none;
          flex-shrink: 0;
          padding-right: 6px;
        }

        .ftr-brand-logo-img {
          height: 38px;
          width: auto;
          object-fit: contain;
          display: block;
          transition: transform 0.2s ease;
        }

        .ftr-brand-logo-link:hover .ftr-brand-logo-img,
        .ftr-brand-logo-link:hover .ftr-brand-svg-logo {
          transform: scale(1.03);
        }

        .ftr-brand-svg-logo {
          height: 38px;
          width: auto;
          display: block;
          transition: transform 0.2s ease;
        }

        /* ---------------- Center Gray Capsule Track ---------------- */
        .ftr-center-capsule-track {
          display: flex;
          align-items: center;
          background: #f1f1f4;
          border-radius: 9999px;
          padding: 4px;
          gap: 2px;
          position: relative;
        }

        .ftr-floating-capsule.is-dark .ftr-center-capsule-track {
          background: #27272a;
        }

        .ftr-nav-pill-item {
          position: relative;
          background: transparent;
          border: none;
          padding: 7px 16px;
          font-size: 13.5px;
          font-weight: 550;
          color: #52525b;
          cursor: pointer;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          white-space: nowrap;
          outline: none;
          font-family: inherit;
          transition: color 0.18s ease;
          user-select: none;
        }

        .ftr-nav-pill-item:hover {
          color: #09090b;
        }

        .ftr-nav-pill-item.is-active {
          color: #09090b;
          font-weight: 650;
        }

        .ftr-floating-capsule.is-dark .ftr-nav-pill-item {
          color: #d4d4d8;
        }

        .ftr-floating-capsule.is-dark .ftr-nav-pill-item:hover,
        .ftr-floating-capsule.is-dark .ftr-nav-pill-item.is-active {
          color: #ffffff;
        }

        .ftr-pill-text-label {
          position: relative;
          z-index: 2;
        }

        /* Smooth Sliding Active White Pill */
        .ftr-sliding-white-indicator {
          position: absolute;
          inset: 0;
          background: #ffffff;
          border-radius: 9999px;
          box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.08), 0 0.5px 1.5px rgba(0, 0, 0, 0.04);
          z-index: 1;
        }

        .ftr-floating-capsule.is-dark .ftr-sliding-white-indicator {
          background: #3f3f46;
          box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.3);
        }

        /* ---------------- Right: Theme Toggle & Solid Black CTA ---------------- */
        .ftr-right-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        /* Circular Moon Theme Button */
        .ftr-circle-theme-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: transparent;
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: #27272a;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          outline: none;
          padding: 0;
        }

        .ftr-circle-theme-btn:hover {
          background: #f4f4f7;
          border-color: rgba(0, 0, 0, 0.2);
          transform: scale(1.05);
          color: #09090b;
        }

        .ftr-circle-theme-btn:active {
          transform: scale(0.96);
        }

        .ftr-floating-capsule.is-dark .ftr-circle-theme-btn {
          color: #f4f4f5;
          border-color: rgba(255, 255, 255, 0.2);
        }

        .ftr-floating-capsule.is-dark .ftr-circle-theme-btn:hover {
          background: #3f3f46;
          border-color: rgba(255, 255, 255, 0.3);
          color: #ffffff;
        }

        /* Solid Black Pill CTA Button */
        .ftr-capsule-cta-btn {
          background: #09090b;
          color: #ffffff;
          border: 1px solid #09090b;
          border-radius: 9999px;
          padding: 9px 18px 9px 20px;
          font-size: 13.5px;
          font-weight: 650;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          cursor: pointer;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
          font-family: inherit;
          white-space: nowrap;
          outline: none;
          user-select: none;
        }

        .ftr-arrow-icon {
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ftr-capsule-cta-btn:hover {
          background: #18181b;
          border-color: #18181b;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
        }

        .ftr-capsule-cta-btn:hover .ftr-arrow-icon {
          transform: translate(2px, -2px);
        }

        .ftr-capsule-cta-btn:active {
          transform: translateY(0);
        }

        .ftr-floating-capsule.is-dark .ftr-capsule-cta-btn {
          background: #f4f4f5;
          color: #18181b;
          border-color: #f4f4f5;
        }

        .ftr-floating-capsule.is-dark .ftr-capsule-cta-btn:hover {
          background: #e4e4e7;
          border-color: #e4e4e7;
        }

        /* Mobile Hamburger Toggle */
        .ftr-hamburger-toggle-btn {
          display: none;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #f4f4f7;
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: #09090b;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 18px;
          line-height: 1;
        }

        .ftr-floating-capsule.is-dark .ftr-hamburger-toggle-btn {
          background: #3f3f46;
          border-color: rgba(255, 255, 255, 0.15);
          color: #f4f4f5;
        }

        /* ---------------- Mobile Drawer ---------------- */
        .ftr-capsule-mobile-drawer {
          pointer-events: auto;
          position: fixed;
          top: 86px;
          left: 20px;
          right: 20px;
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.14);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 998;
        }

        .ftr-capsule-mobile-drawer.is-dark {
          background: #18181b;
          border-color: rgba(255, 255, 255, 0.12);
        }

        .ftr-mobile-drawer-item {
          background: transparent;
          border: none;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          color: #3f3f46;
          text-align: left;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background-color 0.18s ease;
        }

        .ftr-mobile-drawer-item:hover,
        .ftr-mobile-drawer-item.is-active {
          background: #f4f4f7;
          color: #09090b;
        }

        .ftr-capsule-mobile-drawer.is-dark .ftr-mobile-drawer-item {
          color: #d4d4d8;
        }

        .ftr-capsule-mobile-drawer.is-dark .ftr-mobile-drawer-item:hover,
        .ftr-capsule-mobile-drawer.is-dark .ftr-mobile-drawer-item.is-active {
          background: #3f3f46;
          color: #ffffff;
        }

        /* ---------------- Responsive Breakpoints ---------------- */
        @media (max-width: 960px) {
          .ftr-center-capsule-track {
            display: none;
          }
          .ftr-hamburger-toggle-btn {
            display: inline-flex;
          }
        }

        @media (max-width: 600px) {
          .ftr-agero-nav-wrapper {
            top: 12px;
            padding: 0 12px;
          }
          .ftr-floating-capsule {
            height: 54px;
            padding: 4px 6px 4px 12px;
          }
          .ftr-brand-logo-img, .ftr-brand-svg-logo {
            height: 32px;
          }
          .ftr-capsule-cta-btn {
            padding: 8px 14px;
            font-size: 12px;
          }
        }
      `}</style>

      {/* Main Floating Capsule Pill */}
      <motion.nav
        className={`ftr-floating-capsule ${isScrolled ? 'is-scrolled' : ''} ${isDark ? 'is-dark' : ''}`}
        aria-label="Main Navigation"
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* 1. Official FTR Logo (Image with crisp SVG fallback) */}
        <a
          href="#home"
          className="ftr-brand-logo-link"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          title="FTR - First Time Right"
        >
          {!imgError ? (
            <img
              src="/ftr-logo.png"
              alt="FTR - First Time Right"
              className="ftr-brand-logo-img"
              onError={() => setImgError(true)}
            />
          ) : (
            <svg
              className="ftr-brand-svg-logo"
              viewBox="0 0 230 122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="4"
                y="66"
                fill={isDark ? '#f4f4f5' : '#0b1325'}
                fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                fontWeight="900"
                fontSize="68"
                letterSpacing="-1"
              >
                FTR
              </text>
              <circle cx="166" cy="45" r="21" fill="#e21b22" />
              <path
                d="M157 45.5L163 51.5L175 38.5"
                stroke="#ffffff"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text
                x="6"
                y="104"
                fill={isDark ? '#a1a1aa' : '#64748b'}
                fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                fontWeight="550"
                fontSize="24"
                letterSpacing="0.5"
              >
                First Time Right
              </text>
            </svg>
          )}
        </a>

        {/* 2. Center: Gray Track with Sliding White Indicator */}
        <div className="ftr-center-capsule-track">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;

            return (
              <button
                key={item.name}
                type="button"
                className={`ftr-nav-pill-item ${isActive ? 'is-active' : ''}`}
                onClick={() => handleTabClick(item)}
              >
                <span className="ftr-pill-text-label">{item.name}</span>

                {/* Smooth Animated Spring White Pill */}
                {isActive && (
                  <motion.div
                    layoutId="ftrActivePill"
                    className="ftr-sliding-white-indicator"
                    transition={{
                      type: 'spring',
                      stiffness: 420,
                      damping: 32,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* 3. Right: Theme Toggle & Solid Black CTA */}
        <div className="ftr-right-actions">
          {/* Moon Theme Toggle Button */}
          <button
            type="button"
            className="ftr-circle-theme-btn"
            onClick={() => setIsDark((current) => !current)}
            aria-label={isDark ? 'Switch to day theme' : 'Switch to night theme'}
            aria-pressed={isDark}
            title={isDark ? 'Switch to day theme' : 'Switch to night theme'}
          >
            {isDark ? (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Solid Black Pill CTA */}
          <button
            type="button"
            className="ftr-capsule-cta-btn"
            onClick={handleCtaClick}
          >
            <span>{ctaText}</span>
            <svg
              className="ftr-arrow-icon"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="ftr-hamburger-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation drawer"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </motion.nav>

      {/* 4. Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={`ftr-capsule-mobile-drawer ${isDark ? 'is-dark' : ''}`}
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                className={`ftr-mobile-drawer-item ${activeTab === item.name ? 'is-active' : ''}`}
                onClick={() => handleTabClick(item)}
              >
                <span>{item.name}</span>
                <span style={{ opacity: 0.4 }}>↗</span>
              </button>
            ))}

            <button
              type="button"
              className="ftr-capsule-cta-btn"
              style={{ width: '100%', justifyContent: 'center', marginTop: '10px', padding: '12px' }}
              onClick={handleCtaClick}
            >
              <span>{ctaText}</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>,
    document.body,
  );
}

export default Navbar;