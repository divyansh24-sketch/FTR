'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';

/**
 * =========================================================================
 * FTR SOLUTIONS - ABOUT SECTION (AboutSection.jsx)
 * =========================================================================
 * - 60FPS GPU-accelerated word-level BlurReveal text animations
 * - Bidirectional Scroll Up & Scroll Down triggers (once: false)
 * - Flowing animated linear gradient headline
 * - Smooth floating product cards with hover physics
 * - Interactive 100% stats badge & 5.0 rating floating card
 * - Pure 120Hz smooth compositor transforms (translateZ(0), zero lag)
 * =========================================================================
 */

// -------------------------------------------------------------
// 1. ZERO-LAG 60FPS BLUR REVEAL ENGINE
// -------------------------------------------------------------
export const BlurReveal = memo(function BlurReveal({
  children,
  className = '',
  delay = 0,
  as = 'span',
  style,
}) {
  const MotionTag = motion[as] || motion.span;

  if (!children || typeof children !== 'string') {
    return <span className={className} style={style}>{children}</span>;
  }

  const words = children.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      className={className}
      style={{
        ...style,
        display: 'inline-block',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
      }}
    >
      {words.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          variants={wordVariants}
          style={{
            display: 'inline-block',
            marginRight: '0.28em',
            transform: 'translateZ(0)',
            willChange: 'transform, opacity, filter',
          }}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
});

export default function AboutSection({ onExploreClick }) {
  return (
    <section className="ftr-about-showcase-root" id="about-section">
      {/* ================= ALL-IN-ONE CSS (<style>) ================= */}
      <style>{`
        .ftr-about-showcase-root {
          --ftr-red: #e21b22;
          --ftr-red-dark: #b91c1c;
          --ftr-dark: #0f172a;
          --ftr-slate: #1e293b;
          --ftr-gray: #556987;
          position: relative;
          width: 100%;
          padding: 100px 32px 110px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: var(--ftr-dark);
          overflow: hidden;
          contain: paint;
        }

        .ftr-about-inner {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 68px;
          align-items: center;
        }

        /* ---------------- LEFT COLLAGE (IMAGE 1 STYLE) ---------------- */
        .ftr-collage-wrap {
          position: relative;
          width: 100%;
          min-height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Top-Left Card */
        .ftr-collage-card-1 {
          position: absolute;
          top: 80px;
          left: 10px;
          width: 250px;
          height: 290px;
          border-radius: 20px;
          background: linear-gradient(145deg, #f1f5f9 0%, #e2e8f0 100%);
          overflow: hidden;
          box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.12);
          border: 1px solid rgba(226, 232, 240, 0.9);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 16px;
          z-index: 2;
          transform: translateZ(0);
        }

        .ftr-collage-card-1:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 28px 50px -15px rgba(15, 23, 42, 0.2);
        }

        .ftr-card-1-img {
          width: 82%;
          height: auto;
          max-height: 190px;
          object-fit: contain;
          filter: drop-shadow(0 12px 18px rgba(15, 23, 42, 0.18));
          transition: transform 0.3s ease;
        }

        .ftr-collage-card-1:hover .ftr-card-1-img { transform: scale(1.06); }

        .ftr-card-chip {
          margin-top: 12px;
          font-size: 11.5px;
          font-weight: 700;
          color: var(--ftr-slate);
          background: #ffffff;
          padding: 5px 12px;
          border-radius: 9999px;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ftr-card-chip .dot-blue {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #0284c7;
        }

        /* Center-Right Card */
        .ftr-collage-card-2 {
          position: absolute;
          top: 140px;
          right: 30px;
          width: 250px;
          height: 330px;
          border-radius: 20px;
          background: linear-gradient(145deg, #fef2f2 0%, #f1f5f9 100%);
          overflow: hidden;
          box-shadow: 0 24px 50px -15px rgba(15, 23, 42, 0.14);
          border: 1px solid rgba(226, 232, 240, 0.9);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 18px;
          z-index: 3;
          transform: translateZ(0);
        }

        .ftr-collage-card-2:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 32px 60px -15px rgba(226, 27, 34, 0.22);
        }

        .ftr-card-2-img {
          width: 84%;
          height: auto;
          max-height: 220px;
          object-fit: contain;
          filter: drop-shadow(0 14px 22px rgba(15, 23, 42, 0.2));
          transition: transform 0.3s ease;
        }

        .ftr-collage-card-2:hover .ftr-card-2-img { transform: scale(1.06); }

        .ftr-card-chip .dot-red {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--ftr-red);
        }

        /* Top Floating Stats Badge */
        .ftr-float-stats-badge {
          position: absolute;
          top: 10px;
          right: 50px;
          width: 220px;
          background: #ffffff;
          border-radius: 16px;
          padding: 16px 18px;
          box-shadow: 0 18px 36px -8px rgba(15, 23, 42, 0.12);
          border: 1px solid rgba(226, 232, 240, 0.85);
          z-index: 5;
          transform: translateZ(0);
        }

        .ftr-badge-top-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .ftr-badge-stat-num {
          font-size: 22px;
          font-weight: 900;
          color: var(--ftr-dark);
        }

        .ftr-badge-trend-icon {
          color: #16a34a;
        }

        .ftr-badge-stat-desc {
          font-size: 11px;
          line-height: 1.45;
          color: #64748b;
          margin: 0 0 12px;
        }

        .ftr-badge-avatars-row {
          display: flex;
          align-items: center;
          gap: 0;
        }

        .ftr-avatar-circle {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #cbd5e1;
          border: 2px solid #ffffff;
          margin-left: -6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 700;
          color: #334155;
        }

        .ftr-avatar-circle:first-child { margin-left: 0; }
        .ftr-avatar-1 { background: #fee2e2; color: #dc2626; }
        .ftr-avatar-2 { background: #e0f2fe; color: #0284c7; }
        .ftr-avatar-3 { background: #fef3c7; color: #d97706; }
        .ftr-avatar-4 { background: #dcfce7; color: #16a34a; }
        .ftr-avatar-plus { background: #0f172a; color: #ffffff; font-size: 8px; }

        /* Bottom Floating Rating Badge */
        .ftr-float-rating-badge {
          position: absolute;
          bottom: 25px;
          left: 45px;
          background: #ffffff;
          border-radius: 14px;
          padding: 12px 18px;
          box-shadow: 0 16px 32px -8px rgba(15, 23, 42, 0.12);
          border: 1px solid rgba(226, 232, 240, 0.85);
          z-index: 5;
          transform: translateZ(0);
        }

        .ftr-rating-title {
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          margin-bottom: 4px;
        }

        .ftr-rating-stars-row {
          display: flex;
          align-items: center;
          gap: 3px;
          color: #f59e0b;
          font-size: 13px;
        }

        .ftr-rating-score {
          font-size: 11.5px;
          font-weight: 800;
          color: #0f172a;
          margin-left: 4px;
        }

        /* ---------------- RIGHT SIDE TYPOGRAPHY (IMAGE 1 STYLE) ---------------- */
        .ftr-about-text-wrap {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }

        .ftr-about-eyebrow {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 3.5px;
          color: var(--ftr-red);
          text-transform: uppercase;
          margin-bottom: 12px;
          display: inline-block;
        }

        .ftr-about-heading {
          font-size: clamp(38px, 4.2vw, 56px);
          font-weight: 950;
          letter-spacing: -1.2px;
          text-transform: uppercase;
          line-height: 1.05;
          margin: 0 0 24px;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #e21b22 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: ftrGradientShift 6s ease infinite;
        }

        @keyframes ftrGradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .ftr-about-summary-p {
          font-size: 15.5px;
          line-height: 1.68;
          color: var(--ftr-gray);
          margin: 0 0 16px;
          max-width: 520px;
        }

        .ftr-about-summary-p strong {
          color: #0f172a;
          font-weight: 700;
        }

        .ftr-philosophy-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 10px;
          background: rgba(226, 27, 34, 0.06);
          border-left: 3px solid var(--ftr-red);
          font-size: 13.5px;
          font-weight: 700;
          color: var(--ftr-dark);
          margin: 10px 0 28px;
        }

        .ftr-about-explore-btn {
          background: linear-gradient(135deg, var(--ftr-red) 0%, var(--ftr-red-dark) 100%);
          color: #ffffff;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          padding: 15px 36px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          box-shadow: 0 12px 28px -4px rgba(226, 27, 34, 0.42);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transform: translateZ(0);
        }

        .ftr-about-explore-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 36px -4px rgba(226, 27, 34, 0.55);
        }

        .ftr-about-explore-btn svg {
          transition: transform 0.25s ease;
        }

        .ftr-about-explore-btn:hover svg {
          transform: translateX(3px);
        }

        /* ---------------- RESPONSIVE BREAKPOINTS ---------------- */
        @media (max-width: 980px) {
          .ftr-about-inner { grid-template-columns: 1fr; gap: 50px; }
          .ftr-collage-wrap { min-height: 480px; }
        }

        @media (max-width: 600px) {
          .ftr-about-showcase-root { padding: 60px 20px 80px; }
          .ftr-collage-wrap { min-height: 420px; }
          .ftr-collage-card-1 { width: 190px; height: 230px; left: 0; top: 60px; }
          .ftr-collage-card-2 { width: 190px; height: 250px; right: 0; top: 120px; }
          .ftr-float-stats-badge { right: 10px; top: 0; width: 190px; padding: 12px 14px; }
          .ftr-float-rating-badge { left: 10px; bottom: 10px; padding: 10px 14px; }
          .ftr-about-heading { font-size: 36px; }
          .ftr-about-explore-btn { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="ftr-about-inner">
        {/* =========================================================================
            LEFT SIDE: PHOTO COLLAGE WITH 2 CARDS + 2 FLOATING BADGES (BIDIRECTIONAL)
            ========================================================================= */}
        <div className="ftr-collage-wrap">
          {/* Top Floating Badge: Stats with growth arrow & avatars */}
          <motion.div
            className="ftr-float-stats-badge"
            initial={{ opacity: 0, y: -16, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ftr-badge-top-row">
              <span className="ftr-badge-stat-num">100%</span>
              <span className="ftr-badge-trend-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="7 17 17 7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </div>
            <p className="ftr-badge-stat-desc">
              On-site engineered systems with zero crack &amp; leak failure.
            </p>
            <div className="ftr-badge-avatars-row">
              <span className="ftr-avatar-circle ftr-avatar-1">IN</span>
              <span className="ftr-avatar-circle ftr-avatar-2">QC</span>
              <span className="ftr-avatar-circle ftr-avatar-3">RD</span>
              <span className="ftr-avatar-circle ftr-avatar-4">FT</span>
              <span className="ftr-avatar-circle ftr-avatar-plus">+5k</span>
            </div>
          </motion.div>

          {/* Card 1: Top-Left Product Image Card */}
          <motion.div
            className="ftr-collage-card-1"
            initial={{ opacity: 0, x: -24, y: 16 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          >
            <img
              src="/assets/ftr/b.png"
              onError={(e) => {
                e.currentTarget.src = '/assets/ftr/product_noseep.png';
              }}
              alt="FTR NOSEEP Waterproofing"
              className="ftr-card-1-img"
            />
            <div className="ftr-card-chip">
              <span className="dot-blue" />
              <span>Waterproofing Barrier</span>
            </div>
          </motion.div>

          {/* Card 2: Center-Right Product Image Card */}
          <motion.div
            className="ftr-collage-card-2"
            initial={{ opacity: 0, x: 24, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <img
              src="/assets/ftr/w.png"
              onError={(e) => {
                e.currentTarget.src = '/assets/ftr/product_blockbond.png';
              }}
              alt="FTR Block Bond Adhesive"
              className="ftr-card-2-img"
            />
            <div className="ftr-card-chip">
              <span className="dot-red" />
              <span>Polymerized Adhesive</span>
            </div>
          </motion.div>

          {/* Bottom Floating Badge: Ratings Card */}
          <motion.div
            className="ftr-float-rating-badge"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="ftr-rating-title">Best performance</div>
            <div className="ftr-rating-stars-row">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span className="ftr-rating-score">5.0</span>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            RIGHT SIDE: "ABOUT US" + BLUR REVEAL + GRADIENT
            ========================================================= */}
        <div className="ftr-about-text-wrap">
          {/* Eyebrow Subtitle */}
          <motion.span
            className="ftr-about-eyebrow"
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            A Bit About Us
          </motion.span>

          {/* Big Headline with Animated Flowing Linear Gradient */}
          <motion.h2
            className="ftr-about-heading"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            ABOUT US
          </motion.h2>

          {/* Summarized Paragraph 1 with 60FPS Word BlurReveal */}
          <BlurReveal as="p" className="ftr-about-summary-p" delay={0.05}>
            FTR Solutions Pvt. Ltd. is a dynamic company established with a clear vision—to become a reliable solution provider in the construction and surface solutions industry. Incorporated in 2026 in New Delhi, we focus on chemical and construction-related innovation, high performance, and practical problem-solving.
          </BlurReveal>

          {/* Summarized Paragraph 2 with 60FPS Word BlurReveal */}
          <BlurReveal as="p" className="ftr-about-summary-p" delay={0.12}>
            At FTR Solutions, every on-site challenge is an opportunity to engineer a better system. Our approach is not just to sell products, but to deliver end-to-end solutions for real issues like cracks, bonding failures, and waterproofing concerns—backed by consistent quality and field performance.
          </BlurReveal>

          {/* Philosophy Highlight Tag */}
          <motion.div
            className="ftr-philosophy-pill"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          >
            <span>🎯</span>
            <span>Philosophy: &ldquo;Solution First, Product Next&rdquo; &mdash; A trusted problem-solving partner.</span>
          </motion.div>

          {/* Button (EXPLORE MORE) */}
          <motion.button
            className="ftr-about-explore-btn"
            onClick={onExploreClick}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
          >
            <span>EXPLORE MORE</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}