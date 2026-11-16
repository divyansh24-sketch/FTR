'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * =========================================================================
 * FTR - FLOATING CAPSULE NAVBAR (Navbar.jsx)
 * =========================================================================
 * - Balanced Height: 56px
 * - Sleek Width: 860px
 * - Clean transparent track (no gray border behind Solutions -> FAQ)
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
          top: 16px;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 9999;
          padding: 0 16px;
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
          max-width: 860px;
          height: 56px; /* Height increased from 50px to 56px */
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 9999px;
          box-shadow: 0 4px 18px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.03);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 5px 8px 5px 16px;
          box-sizing: border-box;
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ftr-floating-capsule.is-scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.1), 0 3px 8px -2px rgba(0, 0, 0, 0.04);
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
          padding-right: 4px;
        }

        .ftr-brand-logo-img {
          height: 34px;
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
          height: 34px;
          width: auto;
          display: block;
          transition: transform 0.2s ease;
        }

        /* ---------------- Center Track (Clean & Transparent) ---------------- */
        .ftr-center-capsule-track {
          display: flex;
          align-items: center;
          background: transparent;
          border: none;
          padding: 0;
          gap: 2px;
          position: relative;
        }

        .ftr-floating-capsule.is-dark .ftr-center-capsule-track {
          background: transparent;
        }

        .ftr-nav-pill-item {
          position: relative;
          background: transparent;
          border: none;
          padding: 6px 13px;
          font-size: 13.5px;
          font-weight: 500;
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
          font-weight: 600;
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

        /* Active Pill Indicator */
        .ftr-sliding-white-indicator {
          position: absolute;
          inset: 0;
          background: #f4f4f6;
          border-radius: 9999px;
          z-index: 1;
        }

        .ftr-floating-capsule.is-dark .ftr-sliding-white-indicator {
          background: #27272a;
        }

        /* ---------------- Right: Solid Black CTA ---------------- */
        .ftr-right-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .ftr-capsule-cta-btn {
          background: #09090b;
          color: #ffffff;
          border: 1px solid #09090b;
          border-radius: 9999px;
          padding: 8px 16px 8px 18px;
          font-size: 13px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
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
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
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
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #f4f4f7;
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: #09090b;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 16px;
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
          top: 78px;
          left: 16px;
          right: 16px;
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.14);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          z-index: 998;
        }

        .ftr-capsule-mobile-drawer.is-dark {
          background: #18181b;
          border-color: rgba(255, 255, 255, 0.12);
        }

        .ftr-mobile-drawer-item {
          background: transparent;
          border: none;
          padding: 11px 14px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 550;
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
        @media (max-width: 820px) {
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
            padding: 0 10px;
          }
          .ftr-floating-capsule {
            height: 50px;
            padding: 4px 6px 4px 12px;
          }
          .ftr-brand-logo-img, .ftr-brand-svg-logo {
            height: 30px;
          }
          .ftr-capsule-cta-btn {
            padding: 7px 13px;
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
        {/* 1. Official FTR Logo */}
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

        {/* 2. Center: Navigation Items */}
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

        {/* 3. Right: CTA & Hamburger */}
        <div className="ftr-right-actions">
          <button
            type="button"
            className="ftr-capsule-cta-btn"
            onClick={handleCtaClick}
          >
            <span>{ctaText}</span>
            <svg
              className="ftr-arrow-icon"
              width="14"
              height="14"
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
              style={{ width: '100%', justifyContent: 'center', marginTop: '8px', padding: '11px' }}
              onClick={handleCtaClick}
            >
              <span>{ctaText}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
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