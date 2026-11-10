'use client';

import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * =========================================================================
 * FTR SOLUTIONS - 60FPS SMOOTH SCROLL SOLUTION SECTION (SolutionSection.jsx)
 * =========================================================================
 * - 60FPS GPU-accelerated BlurReveal text animation
 * - Bidirectional Scroll Up & Scroll Down triggers (once: false)
 * - Zero-lag compositor architecture with translateZ(0)
 * - Signature animated linear gradients preserved
 * - Circular application steps & 5-Step connected timeline
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

const SOLUTIONS = [
  {
    num: '01.',
    id: 'seepage',
    bracket: '[ Waterproofing Barrier ]',
    title: 'Terrace & Slab Seepage',
    productName: 'FTR NOSEEP® 1 & 2',
    category: 'Acrylic Elastomeric Liquid Membrane',
    desc: 'Seamless liquid membrane creating an impenetrable barrier against persistent dampness, water pooling, and hydrostatic pressure.',
    tag: '300%+ Elastic Stretch',
    badge: '100% Water Impermeable',
    image: '/assets/ftr/b.png',
    fallbackImage: '/assets/ftr/bucket_blue.png',
    symptom: 'Ceiling leakage, damp patches & white salt efflorescence',
    rootCause: 'Concrete micro-capillaries under continuous hydrostatic head',
    steps: ['Crack V-Groove Cleaning', 'Deep Polymer Bonding Slurry', 'FTR NOSEEP® Dual Coat'],
  },
  {
    num: '02.',
    id: 'blockbond',
    bracket: '[ Masonry Bonding ]',
    title: 'AAC Block Joint Cracking',
    productName: 'FTR Block Bond®',
    category: 'Polymerized High-Tensile Thin-Bed Mortar',
    desc: 'High-tensile adhesive replacing thick 15mm sand-cement mortar with an engineered 3mm molecular cross-linking lock.',
    tag: 'Zero Joint Cracking',
    badge: 'Zero Joint Cracking',
    image: '/assets/ftr/w.png',
    fallbackImage: '/assets/ftr/bucket_white.png',
    symptom: 'Zigzag step-stair cracks along AAC block lines',
    rootCause: 'Thick sand mortar undergoes extreme drying shrinkage',
    steps: ['Block Dust Extraction', 'Controlled Mist Priming', 'FTR Block Bond® 3mm Bed'],
  },
  {
    num: '03.',
    id: 'rust',
    bracket: '[ Structural Protection ]',
    title: 'Rebar Rust & Concrete Spall',
    productName: 'FTR NORUST®',
    category: 'Active Chemical Rust Converter & Shield',
    desc: 'Direct chemical converter transforming active ferric oxides into a permanent, inert metallic iron shield without sandblasting.',
    tag: 'Converts Rust to Iron',
    badge: 'Converts Rust to Iron',
    image: '/assets/ftr/y.png',
    fallbackImage: '/assets/ftr/bucket_yellow.png',
    symptom: 'Falling concrete chunks, spalling & exposed rusted steel',
    rootCause: 'Carbonation destroys alkaline passive layer, expanding rebar 600%',
    steps: ['Concrete Chipping & Exposure', 'FTR NORUST® Chemical Coat', 'Polymer Repair Mortar'],
  },
  {
    num: '04.',
    id: 'putty',
    bracket: '[ Surface Finishing ]',
    title: 'Internal Wall Hairline Cracks',
    productName: 'FTR ERP® Putty Smooth',
    category: 'Elastomeric Resurfacing & Vibration Putty',
    desc: 'Micro-flexible polymer putty absorbing ambient building vibrations and ending the recurring cycle of hairline paint cracks.',
    tag: 'Vibration Flexible',
    badge: 'Micro-Vibration Flexible',
    image: '/assets/ftr/e.png',
    fallbackImage: '/assets/ftr/bucket_white.png',
    symptom: 'Spiderweb fine cracks & paint peeling around door frames',
    rootCause: 'Brittle white cement putty calcifies and snaps under vibration',
    steps: ['Dead Paint Stripping', 'Primer Pore Sealer', 'FTR ERP® Putty Smooth'],
  },
  {
    num: '05.',
    id: 'plaster',
    bracket: '[ Exterior Defense ]',
    title: 'Deep Masonry Plaster Fissures',
    productName: 'FTR ERP® Plaster Fiber',
    category: 'Micro-Fiber Reinforced Repair Plaster',
    desc: 'Multidirectional synthetic micro-fiber matrix engineered to bridge wide structural tears and withstand severe 50°C thermal shocks.',
    tag: 'Fiber-Reinforced Matrix',
    badge: 'Micro-Fiber Matrix',
    image: '/assets/ftr/g.png',
    fallbackImage: '/assets/ftr/bucket_blue.png',
    symptom: 'Wide gaping wall fissures (>3mm) letting rain soak inside',
    rootCause: 'Severe thermal expansion shocks tearing unreinforced plaster',
    steps: ['Dovetail Groove Chiseling', 'Polymer Bonding Bridge', 'FTR ERP® Plaster Fiber Core'],
  },
];

const PROCESS_STEPS = [
  { num: '01.', title: 'Understand', desc: 'Identify failure history, moisture source & past repair attempts.' },
  { num: '02.', title: 'Diagnose', desc: 'On-site technical inspection scanning root causes & substrate movement.' },
  { num: '03.', title: 'Recommend', desc: 'Prescribe multi-layer engineered system, never an isolated product.' },
  { num: '04.', title: 'Demonstrate', desc: 'Apply a live sample patch on your actual site to prove adhesion.' },
  { num: '05.', title: 'First Time Right', desc: 'Certified durability and permanent protection with zero callbacks.' },
];

export default function SolutionSection({ onExploreClick }) {
  const [activeId, setActiveId] = useState('seepage');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', location: '', issue: 'seepage' });

  const activeItem = SOLUTIONS.find((s) => s.id === activeId) || SOLUTIONS[0];

  const handleOpenModal = (issueId = null) => {
    if (issueId) setFormData((prev) => ({ ...prev, issue: issueId }));
    setIsModalOpen(true);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSubmitted(false);
    }, 2200);
  };

  return (
    <section className="nx-sol-root" id="solutions-section">
      <style>{`
        /* ---------------- Root Container ---------------- */
        .nx-sol-root {
          width: 100%;
          background: #ffffff;
          color: #0f172a;
          padding: 85px 24px 95px;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;
          position: relative;
          overflow: hidden;
          contain: paint;
        }

        /* Ambient Linear Gradient Backplate */
        .nx-sol-ambient-grad {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%) translateZ(0);
          width: 1100px;
          height: 400px;
          background: radial-gradient(
            ellipse at center,
            rgba(226, 27, 34, 0.055) 0%,
            rgba(241, 245, 249, 0.5) 45%,
            transparent 72%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(28px);
        }

        .nx-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ---------------- Section Title Wrap ---------------- */
        .nx-section-title-wrap {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 40px;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 22px;
          position: relative;
        }

        .nx-bracket-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.6px;
          color: #94a3b8;
          margin-bottom: 12px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        .nx-bracket-tag span.nx-highlight {
          color: #e21b22;
          font-weight: 800;
        }

        .nx-sub-heading {
          font-size: clamp(32px, 4vw, 50px);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.035em;
          margin: 0;
          display: flex;
          flex-direction: column;
        }

        .nx-dark-line {
          color: #0b0f19;
          font-weight: 900;
          letter-spacing: -0.04em;
          display: block;
        }

        @keyframes nxTextGradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
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
          animation: nxTextGradientFlow 6s ease-in-out infinite;
          letter-spacing: -0.04em;
          font-weight: 850;
          display: block;
          transform: translateZ(0);
        }

        .nx-section-hint {
          font-size: 13px;
          font-weight: 600;
          color: #94a3b8;
          margin: 0;
          white-space: nowrap;
        }

        /* ---------------- Solutions Layout (100% Boxless) ---------------- */
        .nx-solutions-layout {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 85px;
        }

        .nx-items-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .nx-item-row {
          background: transparent;
          border: none;
          border-bottom: 1px solid #f1f5f9;
          padding: 18px 12px 18px 16px;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: left;
          position: relative;
          border-left: 3px solid transparent;
          transform: translateZ(0);
        }

        .nx-item-row:hover {
          border-left-color: #cbd5e1;
          padding-left: 20px;
        }

        .nx-item-row.is-active-item {
          border-left-color: #e21b22;
          padding-left: 22px;
        }

        .nx-item-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .nx-item-num {
          font-size: 13px;
          font-weight: 800;
          color: #e21b22;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        .nx-item-tag {
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .nx-item-title {
          font-size: 18.5px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 4px;
          letter-spacing: -0.015em;
          transition: color 0.2s;
        }

        .nx-item-row.is-active-item .nx-item-title {
          color: #e21b22;
        }

        .nx-item-desc {
          font-size: 13px;
          color: #64748b;
          line-height: 1.45;
          margin: 0;
        }

        /* ---------------- Right: 100% Boxless Showcase ---------------- */
        .nx-preview-panel {
          background: transparent;
          border: none;
          box-shadow: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          position: relative;
          transform: translateZ(0);
        }

        .nx-preview-top-badge {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .nx-rec-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11.5px;
          font-weight: 700;
          color: #e21b22;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        .nx-rec-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #e21b22;
        }

        /* Bucket Stage */
        .nx-boxless-bucket-stage {
          position: relative;
          width: 100%;
          height: 330px;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 0 18px;
        }

        .nx-animated-bucket-wrap {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .nx-boxless-bucket-img {
          height: 320px;
          max-height: 330px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 24px 38px rgba(15, 23, 42, 0.16));
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateZ(0);
        }

        .nx-boxless-bucket-img:hover {
          transform: scale(1.04) translateY(-4px) translateZ(0);
        }

        /* Product Title Block */
        .nx-spotlight-title-row {
          margin-bottom: 14px;
        }

        .nx-spotlight-name {
          font-size: 24px;
          font-weight: 850;
          color: #0f172a;
          margin: 0 0 3px;
          letter-spacing: -0.02em;
        }

        .nx-spotlight-cat {
          font-size: 13.5px;
          color: #64748b;
          font-weight: 600;
          margin: 0;
        }

        /* Diagnosis List */
        .nx-diag-clean-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 14px;
        }

        .nx-diag-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .nx-diag-lbl {
          font-size: 11px;
          font-weight: 800;
          color: #dc2626;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        .nx-diag-val {
          font-size: 13px;
          color: #334155;
          line-height: 1.45;
          margin: 0;
        }

        /* Circular Steps */
        .nx-circle-steps-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 24px;
        }

        .nx-circle-step-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 3px 0;
          transition: transform 0.2s ease;
          transform: translateZ(0);
        }

        .nx-circle-step-item:hover {
          transform: translateX(4px) translateZ(0);
        }

        .nx-step-circle-badge {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
          border: 1.5px solid #fca5a5;
          color: #e21b22;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 850;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          flex-shrink: 0;
          box-shadow: 0 2px 6px rgba(226, 27, 34, 0.12);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nx-circle-step-item:hover .nx-step-circle-badge {
          background: linear-gradient(135deg, #e21b22 0%, #b91c1c 100%);
          color: #ffffff;
          border-color: #b91c1c;
          transform: scale(1.15);
          box-shadow: 0 4px 12px rgba(226, 27, 34, 0.35);
        }

        .nx-step-circle-content {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .nx-step-circle-text {
          font-size: 13.5px;
          color: #1e293b;
          font-weight: 650;
          line-height: 1.35;
        }

        .nx-step-circle-sub {
          font-size: 10.5px;
          color: #94a3b8;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        /* Action Buttons */
        .nx-actions-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .nx-btn-primary {
          flex: 1;
          background: linear-gradient(135deg, #e21b22 0%, #b91c1c 100%);
          color: #ffffff;
          border: none;
          padding: 13px 20px;
          border-radius: 10px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 14px rgba(226, 27, 34, 0.25);
          transition: all 0.2s ease;
        }

        .nx-btn-primary:hover {
          background: #dc2626;
          transform: translateY(-1px);
        }

        .nx-btn-sec {
          background: transparent;
          border: 1px solid #cbd5e1;
          color: #334155;
          padding: 13px 18px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nx-btn-sec:hover {
          background: #f8fafc;
          border-color: #94a3b8;
          color: #0f172a;
        }

        /* ---------------- 5-Step Assurance Method ---------------- */
        .nx-process-section {
          margin-bottom: 85px;
          border-top: 1px solid #f1f5f9;
          padding-top: 60px;
        }

        .nx-proc-circle-timeline {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 28px;
          position: relative;
          margin-top: 36px;
        }

        .nx-proc-circle-timeline::before {
          content: '';
          position: absolute;
          top: 28px;
          left: 36px;
          right: 36px;
          height: 2px;
          background: linear-gradient(90deg, #fee2e2 0%, #e21b22 50%, #fee2e2 100%);
          z-index: 0;
        }

        .nx-proc-circle-item {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
          cursor: pointer;
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateZ(0);
        }

        .nx-proc-circle-item:hover {
          transform: translateY(-5px) translateZ(0);
        }

        .nx-proc-circle-badge {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid #e21b22;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          font-weight: 900;
          color: #e21b22;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          box-shadow: 0 4px 16px rgba(226, 27, 34, 0.16), 0 0 0 5px #ffffff;
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .nx-proc-circle-item:hover .nx-proc-circle-badge {
          background: linear-gradient(135deg, #e21b22 0%, #b91c1c 100%);
          color: #ffffff;
          border-color: #b91c1c;
          transform: scale(1.1);
          box-shadow: 0 8px 24px rgba(226, 27, 34, 0.35), 0 0 0 6px #ffffff;
        }

        .nx-proc-title {
          font-size: 17px;
          font-weight: 850;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.015em;
        }

        .nx-proc-desc {
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
          margin: 0;
        }

        /* ---------------- Behind The Chemistry ---------------- */
        .nx-split-box {
          background: transparent;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
          padding: 44px 0;
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 65px;
        }

        .nx-split-left {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .nx-split-desc {
          font-size: 14.5px;
          color: #475569;
          line-height: 1.6;
          margin: 0;
        }

        .nx-split-right {
          display: flex;
          flex-direction: column;
          gap: 14px;
          border-left: 1px solid #f1f5f9;
          padding-left: 36px;
        }

        .nx-meta-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .nx-meta-lbl {
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        .nx-meta-val {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
        }

        /* ---------------- Inquiry CTA ---------------- */
        .nx-inquiry-box {
          background: #0f172a;
          border-radius: 18px;
          padding: 38px 42px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          color: #ffffff;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
          transform: translateZ(0);
        }

        .nx-inquiry-left {
          max-width: 640px;
          position: relative;
          z-index: 1;
        }

        .nx-inquiry-title {
          font-size: clamp(26px, 3.2vw, 40px);
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 8px;
          letter-spacing: -0.03em;
          display: flex;
          flex-direction: column;
        }

        .nx-inquiry-line {
          color: #ffffff;
          display: block;
        }

        .nx-inquiry-gradient {
          background: linear-gradient(90deg, #ff5a1f 0%, #e21b22 40%, #ff8a4c 75%, #ff5a1f 100%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: nxTextGradientFlow 5s ease-in-out infinite;
          font-weight: 900;
          display: block;
        }

        .nx-inquiry-sub {
          font-size: 14px;
          color: #94a3b8;
          line-height: 1.5;
          margin: 0 0 14px;
        }

        .nx-inquiry-meta-row {
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 12.5px;
          color: #cbd5e1;
        }

        .nx-inquiry-meta-row span.nx-live-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22c55e;
          margin-right: 6px;
        }

        .nx-inquiry-btn {
          background: linear-gradient(135deg, #e21b22 0%, #b91c1c 100%);
          color: #ffffff;
          border: none;
          padding: 13px 26px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 4px 16px rgba(226, 27, 34, 0.35);
          transition: all 0.2s ease;
          position: relative;
          z-index: 1;
        }

        .nx-inquiry-btn:hover {
          background: #dc2626;
          transform: translateY(-2px);
        }

        /* ---------------- Modal Styles ---------------- */
        .nx-modal-bg {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(6px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .nx-modal-box {
          background: #ffffff;
          border-radius: 18px;
          max-width: 460px;
          width: 100%;
          box-shadow: 0 25px 60px rgba(0,0,0,0.25);
          overflow: hidden;
        }

        .nx-modal-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 22px;
          background: #0f172a;
          color: #ffffff;
        }

        .nx-modal-head h4 {
          font-size: 16px;
          font-weight: 700;
          margin: 0;
        }

        .nx-modal-close {
          background: none;
          border: none;
          color: #ffffff;
          font-size: 22px;
          cursor: pointer;
          padding: 0;
          line-height: 1;
        }

        .nx-modal-body {
          padding: 22px;
        }

        .nx-form-group {
          margin-bottom: 14px;
        }

        .nx-form-group label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 5px;
        }

        .nx-form-group input, .nx-form-group select {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 9px 12px;
          font-size: 13.5px;
          color: #0f172a;
          box-sizing: border-box;
          outline: none;
          font-family: inherit;
        }

        .nx-form-group input:focus, .nx-form-group select:focus {
          border-color: #e21b22;
        }

        .nx-modal-submit {
          width: 100%;
          background: #e21b22;
          color: #ffffff;
          border: none;
          padding: 12px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          margin-top: 6px;
        }

        /* ---------------- Responsive ---------------- */
        @media (max-width: 992px) {
          .nx-solutions-layout {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .nx-proc-circle-timeline {
            grid-template-columns: repeat(2, 1fr);
          }
          .nx-proc-circle-timeline::before {
            display: none;
          }
          .nx-split-box {
            grid-template-columns: 1fr;
            padding: 30px 0;
          }
          .nx-split-right {
            border-left: none;
            border-top: 1px solid #f1f5f9;
            padding-left: 0;
            padding-top: 20px;
          }
          .nx-inquiry-box {
            flex-direction: column;
            align-items: flex-start;
            padding: 30px;
          }
        }

        @media (max-width: 600px) {
          .nx-sol-root {
            padding: 60px 16px;
          }
          .nx-proc-circle-timeline {
            grid-template-columns: 1fr;
          }
          .nx-inquiry-meta-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>

      {/* Ambient Radial Gradient Mesh */}
      <div className="nx-sol-ambient-grad" />

      <div className="nx-container">
        {/* =====================================================================
            1. WHAT WE BRING TO THE STRUCTURE (Scroll Up/Down Animated)
            ===================================================================== */}
        <div className="nx-section-title-wrap">
          <div>
            <motion.div
              className="nx-bracket-tag"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
             
            </motion.div>

            <h3 className="nx-sub-heading">
              <BlurReveal as="span" className="nx-dark-line" delay={0.04}>
                Everything Your Structure Needs.
              </BlurReveal>

              <motion.span
                className="nx-dim-gradient"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                Engineered to Stand Out.
              </motion.span>
            </h3>
          </div>

          <motion.p
            className="nx-section-hint"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            Hover any service to inspect chemistry &rarr;
          </motion.p>
        </div>

        {/* =====================================================================
            2. SOLUTIONS GRID (Left: 5 Items, Right: Spotlight Showcase)
            ===================================================================== */}
        <div className="nx-solutions-layout">
          {/* Left: 5 Items as clean borderless rows */}
          <div className="nx-items-list">
            {SOLUTIONS.map((sol, index) => {
              const isActive = sol.id === activeId;
              return (
                <motion.div
                  key={sol.id}
                  className={`nx-item-row ${isActive ? 'is-active-item' : ''}`}
                  onMouseEnter={() => setActiveId(sol.id)}
                  onClick={() => setActiveId(sol.id)}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.32,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.05,
                  }}
                >
                  <div className="nx-item-top">
                    <span className="nx-item-num">{sol.num}</span>
                    <span className="nx-item-tag">{sol.tag}</span>
                  </div>
                  <h4 className="nx-item-title">{sol.title}</h4>
                  <p className="nx-item-desc">{sol.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Showcase (Animated Product Spotlight) */}
          <motion.div
            className="nx-preview-panel"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <div className="nx-preview-top-badge">
                <span className="nx-rec-chip">
                  <span className="nx-rec-dot" />
                  <span>{activeItem.bracket}</span>
                </span>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>
                  Active System
                </span>
              </div>

              {/* Bucket Stage */}
              <div className="nx-boxless-bucket-stage">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    className="nx-animated-bucket-wrap"
                    initial={{ opacity: 0, y: 14, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.96 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <img
                      src={activeItem.image}
                      alt={activeItem.productName}
                      className="nx-boxless-bucket-img"
                      onError={(e) => {
                        e.currentTarget.src = activeItem.fallbackImage;
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Product Info */}
              <div key={`title-${activeItem.id}`} className="nx-spotlight-title-row">
                <h4 className="nx-spotlight-name">{activeItem.productName}</h4>
                <p className="nx-spotlight-cat">{activeItem.category}</p>
              </div>

              {/* Symptoms & Root Cause */}
             

              {/* Circular Steps */}
              <div className="nx-circle-steps-list">
                {activeItem.steps.map((st, i) => (
                  <div key={i} className="nx-circle-step-item">
                    <div className="nx-step-circle-badge">
                      <span>0{i + 1}</span>
                    </div>
                    <div className="nx-step-circle-content">
                      <span className="nx-step-circle-text">{st}</span>
                      <span className="nx-step-circle-sub">System Phase 0{i + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="nx-actions-wrap">
              <button
                type="button"
                className="nx-btn-primary"
                onClick={() => handleOpenModal(activeItem.id)}
              >
                <span>Book Site Diagnosis</span>
                <span>&rarr;</span>
              </button>
              <button type="button" className="nx-btn-sec" onClick={onExploreClick}>
                View TDS
              </button>
            </div>
          </motion.div>
        </div>

        {/* =====================================================================
            3. THE 5-STEP ASSURANCE METHOD (Circular Connected Timeline)
            ===================================================================== */}
        <div className="nx-process-section">
          <div className="nx-section-title-wrap">
            <div>
              <motion.div
                className="nx-bracket-tag"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                
              </motion.div>

              <h3 className="nx-sub-heading">
                <BlurReveal as="span" className="nx-dark-line" delay={0.04}>
                  The 5-Step Assurance Method.
                </BlurReveal>

                <motion.span
                  className="nx-dim-gradient"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                >
                  Built for Permanent Protection.
                </motion.span>
              </h3>
            </div>
          </div>

          <div className="nx-proc-circle-timeline">
            {PROCESS_STEPS.map((ps, idx) => (
              <motion.div
                key={ps.num}
                className="nx-proc-circle-item"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.34,
                  ease: [0.22, 1, 0.36, 1],
                  delay: idx * 0.08,
                }}
              >
                <div className="nx-proc-circle-badge">
                  <span>0{idx + 1}</span>
                </div>
                <h4 className="nx-proc-title">{ps.title}</h4>
                <p className="nx-proc-desc">{ps.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =====================================================================
            4. BEHIND THE CHEMISTRY (Boxless Split Row)
            ===================================================================== */}
        <motion.div
          className="nx-split-box"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="nx-split-left">
            <div className="nx-bracket-tag">
              
            </div>
            <h3 className="nx-sub-heading" style={{ fontSize: 'clamp(28px, 3.4vw, 42px)' }}>
              <BlurReveal as="span" className="nx-dark-line" delay={0.04}>
                More Than Chemicals.
              </BlurReveal>

              <motion.span
                className="nx-dim-gradient"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                How a Structure Truly Lasts.
              </motion.span>
            </h3>
            <p className="nx-split-desc">
              &ldquo;At FTR Solutions, performance is the responsibility of the material &mdash; not
              an excuse left to execution. We engineer systems that perform reliably on site,
              independent of workmanship variability.&rdquo;
            </p>
          </div>

          <div className="nx-split-right">
            <div className="nx-meta-item">
              <span className="nx-meta-lbl">Core Philosophy</span>
              <span className="nx-meta-val">Solution First, Product Next</span>
            </div>
            <div className="nx-meta-item">
              <span className="nx-meta-lbl">Execution Standard</span>
              <span className="nx-meta-val">First Time Right (FTR Guarantee)</span>
            </div>
            <div className="nx-meta-item">
              <span className="nx-meta-lbl">Service Footprint</span>
              <span className="nx-meta-val">Delhi NCR &bull; Pan-India Availability</span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================================
            5. HAVE A STRUCTURE TO PROTECT? (Inquiry CTA)
            ===================================================================== */}
        <motion.div
          className="nx-inquiry-box"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="nx-inquiry-left">
            <div className="nx-bracket-tag" style={{ color: '#94a3b8' }}>
           
            </div>
            <h3 className="nx-inquiry-title">
              <span className="nx-inquiry-line">Let&rsquo;s Engineer Something</span>
              <span className="nx-inquiry-gradient">Built to Last.</span>
            </h3>
            <p className="nx-inquiry-sub">
              Have an ongoing site leakage, masonry cracks, or a new construction project? Tell us
              what you&rsquo;re building and schedule a free technical site diagnosis.
            </p>
            <div className="nx-inquiry-meta-row">
              <div>
                <span className="nx-live-dot" />
                <span>Currently Scheduling Site Visits</span>
              </div>
              <div>info@ftr.co.in</div>
              <div>New Delhi, India</div>
            </div>
          </div>

          <button
            type="button"
            className="nx-inquiry-btn"
            onClick={() => handleOpenModal()}
          >
            Start Project Diagnosis &rarr;
          </button>
        </motion.div>
      </div>

      {/* =====================================================================
          6. INQUIRY MODAL (Clean Dialog)
          ===================================================================== */}
      {isModalOpen && (
        <div className="nx-modal-bg" onClick={() => setIsModalOpen(false)}>
          <motion.div
            className="nx-modal-box"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.22 }}
          >
            <div className="nx-modal-head">
              <h4>Start Project Diagnosis</h4>
              <button
                type="button"
                className="nx-modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>
            </div>

            <div className="nx-modal-body">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <div style={{ fontSize: '36px', marginBottom: '12px' }}>✓</div>
                  <h4 style={{ margin: '0 0 6px', color: '#0f172a' }}>Inquiry Logged</h4>
                  <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
                    An FTR Technical Sales Engineer will contact you within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="nx-form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="nx-form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="nx-form-group">
                    <label>Site Location *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. New Delhi, Noida, Gurgaon"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                  <div className="nx-form-group">
                    <label>Challenge Category</label>
                    <select
                      value={formData.issue}
                      onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                    >
                      <option value="seepage">💧 Terrace / Slab Water Ingress</option>
                      <option value="blockbond">🧱 AAC Block Joint Cracking</option>
                      <option value="rust">🛡️ Rebar Rust & Concrete Spall</option>
                      <option value="putty">✨ Wall Hairline Cracks & Flaking</option>
                      <option value="plaster">🏗️ Deep Plaster & Wall Fissures</option>
                    </select>
                  </div>
                  <button type="submit" className="nx-modal-submit">
                    Confirm Technical Diagnosis &rarr;
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}