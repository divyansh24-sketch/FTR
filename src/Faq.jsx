'use client';

import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * =========================================================================
 * FTR SOLUTIONS - FAQ SECTION (Faq.jsx)
 * =========================================================================
 * - 60FPS GPU-accelerated BlurReveal text animation
 * - Bidirectional Scroll Up & Scroll Down triggers (once: false)
 * - Mouse Auto-Open (Hover over any FAQ to automatically open it)
 * - Smooth spring expand/collapse with AnimatePresence
 * - Signature multi-color animated linear gradient headline
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

const FAQ_ITEMS = [
  {
    num: '01',
    question: 'Why do traditional construction repairs fail after 1–2 monsoons?',
    answer:
      'Ordinary contractors apply rigid fillers (thick sand-cement, brittle white putty, or tar felts) that treat only visible surface symptoms. Under 50°C summer heat and ambient slab movement, rigid bonds snap. FTR engineers high-tensile elastomeric polymers with 300%+ stretch that flex with building movement permanently.',
  },
  {
    num: '02',
    question: 'What is FTR’s “Solution First, Product Next” philosophy?',
    answer:
      'We do not push standalone buckets off a retail shelf. Our certified technical sales engineers visit your ongoing project to diagnose negative-side dampness, structural cracks, and substrate porosity first — prescribing a complete synchronized multi-layer system.',
  },
  {
    num: '03',
    question: 'How do you guarantee performance against poor site workmanship?',
    answer:
      'As stated in the FTR Mission Statement: "Performance is the responsibility of the material — not an excuse left to execution." Our synthetic formulations are engineered with forgiving water ratios and active polymers that cure reliably despite job site labor variability.',
  },
  {
    num: '04',
    question: 'Can we test an FTR live sample on our ongoing project before ordering?',
    answer:
      'Yes, 100% free of cost. We provide strategic on-site mockups where an FTR technical engineer applies a live test patch directly onto your problem substrate to prove tensile adhesion, workability, and zero-leakage defense before you order.',
  },
  {
    num: '05',
    question: 'How does 3mm FTR Block Bond® replace 15mm thick sand mortar?',
    answer:
      'Traditional 15mm sand mortar undergoes severe drying shrinkage, causing diagonal stair-step cracks. FTR Block Bond® utilizes self-curing molecular polymers to create a 3mm cross-linking joint stronger than the AAC block itself, with zero shrinkage cracking.',
  },
  {
    num: '06',
    question: 'What is the FTR NORUST® advantage over wire brushing corroded rebar?',
    answer:
      'Wire brushing leaves microscopic active rust behind, which continues oxidising, expands 600%, and bursts surrounding concrete. FTR NORUST® is a direct chemical converter that passivates ferric oxides into an inert, non-corrosive metallic iron shield without sandblasting.',
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0);

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const handleMouseEnter = (idx) => {
    setOpenIdx(idx); // Auto-open on mouse hover
  };

  return (
    <section className="nx-faq-root" id="faq-section" aria-label="Frequently Asked Questions">
      <style>{`
        /* ---------------- Root Container ---------------- */
        .nx-faq-root {
          width: 100%;
          background: #ffffff;
          color: #0f172a;
          padding: 85px 24px 90px;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;
          position: relative;
          overflow: hidden;
          contain: paint;
        }

        /* Ambient soft linear glow mesh */
        .nx-faq-ambient-glow {
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

        .nx-faq-container {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ---------------- Header Block ---------------- */
        .nx-faq-head {
          margin-bottom: 44px;
          position: relative;
        }

        .nx-faq-bracket {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 0.8px;
          color: #334155;
          margin-bottom: 14px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        .nx-faq-bracket span.nx-highlight {
          color: #e21b22;
          font-weight: 800;
        }

        .nx-faq-title {
          font-size: clamp(38px, 5.2vw, 64px);
          font-weight: 900;
          line-height: 1.06;
          letter-spacing: -0.038em;
          margin: 0 0 14px;
          display: flex;
          flex-direction: column;
        }

        .nx-dark-line {
          color: #0b0f19;
          font-weight: 900;
          display: block;
        }

        @keyframes faqTextGradientFlow {
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
          animation: faqTextGradientFlow 6s ease-in-out infinite;
          letter-spacing: -0.038em;
          font-weight: 850;
          display: block;
          transform: translateZ(0);
        }

        .nx-faq-lead {
          font-size: clamp(15.5px, 1.8vw, 17.5px);
          color: #475569;
          line-height: 1.55;
          max-width: 680px;
          margin: 0;
        }

        /* ---------------- Accordion List (Mouse Auto-Open + Click) ---------------- */
        .nx-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 40px;
        }

        .nx-accordion-item {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          transition: border-color 0.22s ease, box-shadow 0.22s ease, transform 0.2s ease;
          overflow: hidden;
          cursor: pointer;
          transform: translateZ(0);
        }

        .nx-accordion-item:hover {
          border-color: #cbd5e1;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
        }

        .nx-accordion-item.is-open {
          border-color: #e21b22;
          box-shadow: 0 8px 24px rgba(226, 27, 34, 0.08);
        }

        .nx-accordion-btn {
          width: 100%;
          background: transparent;
          border: none;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
          outline: none;
        }

        .nx-btn-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .nx-faq-circle-num {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12.5px;
          font-weight: 850;
          color: #64748b;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, monospace;
          flex-shrink: 0;
          transition: all 0.22s ease;
        }

        .nx-accordion-item.is-open .nx-faq-circle-num {
          background: #e21b22;
          border-color: #e21b22;
          color: #ffffff;
        }

        .nx-faq-question-text {
          font-size: 16.5px;
          font-weight: 800;
          color: #0b0f19;
          letter-spacing: -0.015em;
          margin: 0;
          transition: color 0.2s ease;
        }

        .nx-accordion-item.is-open .nx-faq-question-text {
          color: #e21b22;
        }

        .nx-faq-chevron {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          color: #64748b;
          flex-shrink: 0;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease, color 0.2s ease;
        }

        .nx-accordion-item.is-open .nx-faq-chevron {
          transform: rotate(180deg);
          background: #fef2f2;
          color: #e21b22;
        }

        .nx-accordion-body {
          padding: 0 24px 22px 76px;
          font-size: 14.5px;
          color: #475569;
          line-height: 1.6;
        }

        @media (max-width: 640px) {
          .nx-accordion-btn {
            padding: 16px 18px;
          }
          .nx-accordion-body {
            padding: 0 18px 18px 18px;
          }
          .nx-btn-left {
            gap: 12px;
          }
          .nx-faq-question-text {
            font-size: 15px;
          }
        }
      `}</style>

      {/* Ambient Radial Gradient Mesh */}
      <div className="nx-faq-ambient-glow" />

      <div className="nx-faq-container">
        {/* =====================================================================
            1. HEADER BLOCK (Scroll Up/Down BlurReveal)
            ===================================================================== */}
        <div className="nx-faq-head">
          <motion.div
            className="nx-faq-bracket"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
           
          </motion.div>

          <h2 className="nx-faq-title">
            <BlurReveal as="span" className="nx-dark-line" delay={0.04}>
              Frequently Asked Questions.
            </BlurReveal>

            <motion.span
              className="nx-dim-gradient"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              Straight from the Engineering Playbook.
            </motion.span>
          </h2>

          <BlurReveal as="p" className="nx-faq-lead" delay={0.16}>
            Everything you need to know about FTR&rsquo;s root-cause methodology, formulation standards, and on-site testing protocols.
          </BlurReveal>
        </div>

        {/* =====================================================================
            2. ACCORDION LIST (Mouse Auto-Open on Hover + Click)
            ===================================================================== */}
        <div className="nx-accordion-list">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;

            return (
              <motion.div
                key={item.num}
                className={`nx-accordion-item ${isOpen ? 'is-open' : ''}`}
                onMouseEnter={() => handleMouseEnter(idx)}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.32,
                  ease: [0.22, 1, 0.36, 1],
                  delay: idx * 0.05,
                }}
              >
                <button
                  type="button"
                  className="nx-accordion-btn"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isOpen}
                >
                  <div className="nx-btn-left">
                    <span className="nx-faq-circle-num">{item.num}</span>
                    <h3 className="nx-faq-question-text">{item.question}</h3>
                  </div>
                  <span className="nx-faq-chevron">&darr;</span>
                </button>

                {/* Spring Animated Expansion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="nx-accordion-body">
                        <p style={{ margin: 0 }}>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}