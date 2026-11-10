'use client';

import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * =========================================================================
 * FTR SOLUTIONS - MINIMALIST TESTIMONIALS (Testimonials.jsx)
 * =========================================================================
 * - Clean, simple, modern redesign with concise text content
 * - 60FPS GPU-accelerated BlurReveal text animation
 * - Bidirectional Scroll Up & Scroll Down triggers (once: false)
 * - Snappy interactive filter pills
 * - Subtle hover card elevation with verified project badges
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

// Concise, crisp stakeholder testimonials
const TESTIMONIALS_DATA = [
  {
    name: 'Rajesh Singhal',
    role: 'Project Director',
    company: 'Apex Towers',
    sector: 'builders',
    system: 'FTR Block Bond®',
    initials: 'RS',
    rating: 5,
    quote: 'Reduced mortar weight by 75% and eliminated shrinkage cracks across 4 residential towers.',
  },
  {
    name: 'Ar. Ananya Sen',
    role: 'Principal Consultant',
    company: 'Sen Associates',
    sector: 'consultants',
    system: 'FTR NOSEEP®',
    initials: 'AS',
    rating: 5,
    quote: 'Specified across 1.8M sq. ft. of podium decks. 300% elasticity bridges slab micro-cracks with zero leakage.',
  },
  {
    name: 'Vikramaditya Chawla',
    role: 'VP Infrastructure',
    company: 'Skyline Assets',
    sector: 'contractors',
    system: 'FTR NORUST®',
    initials: 'VC',
    rating: 5,
    quote: 'Passivated rebar corrosion into an inert iron shield directly, saving us 3 weeks of retrofit downtime.',
  },
  {
    name: 'Mohit Aggarwal',
    role: 'Chief Engineer',
    company: 'Capital Township',
    sector: 'builders',
    system: 'FTR ERP® Plaster',
    initials: 'MA',
    rating: 5,
    quote: 'Absorbed 48°C peak thermal expansion without a single hairline plaster crack.',
  },
  {
    name: 'Sunil Mehta',
    role: 'General Contractor',
    company: 'Mehta Buildtech',
    sector: 'contractors',
    system: 'On-Site Demo',
    initials: 'SM',
    rating: 5,
    quote: 'The free live on-site demo held active hydrostatic heads immediately. Solid engineering.',
  },
  {
    name: 'Pooja Kulkarni',
    role: 'QA Lead',
    company: 'Sterling Spaces',
    sector: 'consultants',
    system: 'FTR ERP® Putty',
    initials: 'PK',
    rating: 5,
    quote: 'Flexible micro-polymer putty survived two monsoons without any paint flaking or hairline cracks.',
  },
];

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredList =
    activeFilter === 'all'
      ? TESTIMONIALS_DATA
      : TESTIMONIALS_DATA.filter((t) => t.sector === activeFilter);

  return (
    <section className="nx-test-root" id="testimonials-section" aria-label="Client Testimonials">
      <style>{`
        /* ---------------- Root Container ---------------- */
        .nx-test-root {
          width: 100%;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%);
          color: #0f172a;
          padding: 85px 24px 90px;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;
          position: relative;
          overflow: hidden;
          contain: paint;
        }

        /* Ambient soft linear glow */
        .nx-test-ambient-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%) translateZ(0);
          width: 1000px;
          height: 380px;
          background: radial-gradient(
            ellipse at center,
            rgba(226, 27, 34, 0.05) 0%,
            rgba(241, 245, 249, 0.45) 50%,
            transparent 72%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(28px);
        }

        .nx-test-container {
          max-width: 1160px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ---------------- Header Block ---------------- */
        .nx-test-head {
          margin-bottom: 36px;
        }

        .nx-test-bracket {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 0.8px;
          color: #334155;
          margin-bottom: 12px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        .nx-test-bracket span.nx-highlight {
          color: #e21b22;
          font-weight: 800;
        }

        .nx-test-title {
          font-size: clamp(38px, 5vw, 62px);
          font-weight: 900;
          line-height: 1.06;
          letter-spacing: -0.038em;
          margin: 0 0 12px;
          display: flex;
          flex-direction: column;
        }

        .nx-dark-line {
          color: #0b0f19;
          font-weight: 900;
          display: block;
        }

        @keyframes testTextGradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .nx-dim-gradient {
          background: linear-gradient(
            135deg,
            #8b9cb4 0%,
            #475569 25%,
            #0f172a 50%,
            #e21b22 75%,
            #8b9cb4 100%
          );
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: testTextGradientFlow 6s ease-in-out infinite;
          letter-spacing: -0.038em;
          font-weight: 850;
          display: block;
          transform: translateZ(0);
        }

        .nx-test-lead {
          font-size: clamp(15px, 1.8vw, 17px);
          color: #64748b;
          line-height: 1.5;
          max-width: 620px;
          margin: 0;
        }

        /* ---------------- Clean Filter Tabs ---------------- */
        .nx-test-filters {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #f1f5f9;
          padding: 4px;
          border-radius: 9999px;
          margin-bottom: 34px;
          border: 1px solid #e2e8f0;
          flex-wrap: wrap;
        }

        .nx-test-filter-btn {
          background: transparent;
          border: none;
          padding: 7px 16px;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 650;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: inherit;
        }

        .nx-test-filter-btn:hover {
          color: #0f172a;
        }

        .nx-test-filter-btn.is-active-filter {
          background: #0f172a;
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.14);
        }

        /* ---------------- Clean Grid of Concise Cards ---------------- */
        .nx-test-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .nx-test-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 22px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: left;
          transform: translateZ(0);
        }

        .nx-test-card:hover {
          border-color: #cbd5e1;
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
        }

        .nx-test-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .nx-stars-row {
          color: #f59e0b;
          font-size: 13px;
          letter-spacing: 2px;
        }

        .nx-verified-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 10.5px;
          font-weight: 750;
          color: #16a34a;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          padding: 2px 8px;
          border-radius: 9999px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        .nx-test-system-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 750;
          color: #e21b22;
          background: #fef2f2;
          padding: 2px 8px;
          border-radius: 6px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          margin-top: 8px;
        }

        .nx-test-quote {
          font-size: 13.5px;
          color: #334155;
          line-height: 1.5;
          margin: 10px 0 0;
          font-weight: 500;
        }

        /* Author Row */
        .nx-test-author-row {
          display: flex;
          align-items: center;
          gap: 10px;
          border-top: 1px solid #f1f5f9;
          padding-top: 12px;
          margin-top: auto;
        }

        .nx-test-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #0f172a;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.5px;
          flex-shrink: 0;
        }

        .nx-test-author-info {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .nx-test-author-name {
          font-size: 13.5px;
          font-weight: 800;
          color: #0b0f19;
          margin: 0;
        }

        .nx-test-author-role {
          font-size: 11px;
          color: #64748b;
          margin: 0;
          font-weight: 550;
        }

        /* ---------------- Responsive ---------------- */
        @media (max-width: 960px) {
          .nx-test-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 600px) {
          .nx-test-root {
            padding: 55px 16px 60px;
          }
          .nx-test-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .nx-test-filters {
            width: 100%;
            justify-content: flex-start;
          }
        }
      `}</style>

      {/* Ambient Radial Gradient Mesh */}
      <div className="nx-test-ambient-glow" />

      <div className="nx-test-container">
        {/* =====================================================================
            1. HEADER BLOCK (Scroll Up/Down BlurReveal)
            ===================================================================== */}
        <div className="nx-test-head">
          <motion.div
            className="nx-test-bracket"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
           
          </motion.div>

          <h2 className="nx-test-title">
            <BlurReveal as="span" className="nx-dark-line" delay={0.04}>
              Built with Integrity.
            </BlurReveal>

            <motion.span
              className="nx-dim-gradient"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              Validated by Site Engineers.
            </motion.span>
          </h2>

          <BlurReveal as="p" className="nx-test-lead" delay={0.16}>
            Real feedback from architects and project directors who trust FTR systems to end structural callbacks permanently.
          </BlurReveal>
        </div>

        {/* =====================================================================
            2. CLEAN FILTER TABS
            ===================================================================== */}
        <motion.div
          className="nx-test-filters"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <button
            type="button"
            className={`nx-test-filter-btn ${activeFilter === 'all' ? 'is-active-filter' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Stakeholders
          </button>
         
        </motion.div>

        {/* =====================================================================
            3. CLEAN GRID OF CONCISE CARDS (Scroll Up/Down Animated)
            ===================================================================== */}
        <div className="nx-test-grid">
          <AnimatePresence mode="popLayout">
            {filteredList.map((item, idx) => (
              <motion.div
                key={item.name}
                className="nx-test-card"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                  delay: idx * 0.05,
                }}
              >
                <div>
                  <div className="nx-test-card-top">
                    <div className="nx-stars-row">
                      {'★'.repeat(item.rating)}
                    </div>
                    <span className="nx-verified-badge">
                      <span>✓</span> Verified Project
                    </span>
                  </div>

                  <span className="nx-test-system-tag">{item.system}</span>

                  <p className="nx-test-quote">&ldquo;{item.quote}&rdquo;</p>
                </div>

                <div className="nx-test-author-row">
                  <div className="nx-test-avatar">{item.initials}</div>
                  <div className="nx-test-author-info">
                    <h4 className="nx-test-author-name">{item.name}</h4>
                    <p className="nx-test-author-role">
                      {item.role} &bull; {item.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}