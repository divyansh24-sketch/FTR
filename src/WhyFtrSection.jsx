'use client';

import React, { useState } from 'react';

/**
 * =========================================================================
 * FTR SOLUTIONS - WHY FTR / WHY US SECTION (WhyFtrSection.jsx)
 * =========================================================================
 * Clean, Punchy Homepage Edition:
 * - Minimalist, high-impact copy tailored for fast scanning on a homepage
 * - Dual-Tone Stacked Typography with animated linear gradient
 * - 6 Core Pillars with Circular Badges (01 - 06) & hover animation
 * - Quick Switcher: 'The 6 FTR Pillars' vs. 'Comparison Matrix'
 * - Clean white background (#ffffff), 100% boxless & ultra-modern
 * =========================================================================
 */

const WHY_FTR_PILLARS = [
  {
    num: '01',
    title: 'Solution First, Product Next',
    tagline: 'Root-Cause Engineering',
    desc: 'We diagnose negative moisture and structural movement first. Never pushing standalone buckets off a shelf.',
    highlight: 'Zero shelf-pushing',
    icon: '🎯',
  },
  {
    num: '02',
    title: 'Workmanship-Proof Chemistry',
    tagline: 'Material Responsibility',
    desc: 'Performance is engineered directly into our polymer matrix — forgiving on-site labor errors and mixing variances.',
    highlight: 'Site-tolerant formulation',
    icon: '🛡️',
  },
  {
    num: '03',
    title: 'The FTR Principle',
    tagline: 'Problem ➔ Diagnosis ➔ System',
    desc: 'Every recommendation follows a scientific 4-stage engineering protocol. Grounded in technical data, not guesswork.',
    highlight: '100% scientific protocol',
    icon: '🔬',
  },
  {
    num: '04',
    title: 'Engineered Systems, Not Buckets',
    tagline: 'Multi-Layer Barrier',
    desc: 'Complete synchronized systems combining substrate primers, flexible elastomeric cores, and protective top-coats.',
    highlight: 'Multi-layer protection',
    icon: '⚡',
  },
  {
    num: '05',
    title: 'Free On-Site Sample Demo',
    tagline: 'Proof Before Commitment',
    desc: 'We apply a live test patch directly onto your actual problem substrate to prove bonding and zero seepage before you order.',
    highlight: 'Live on-site test trial',
    icon: '🧪',
  },
  {
    num: '06',
    title: 'First Time Right Standard',
    tagline: 'Zero Recurring Callbacks',
    desc: 'High-flex synthetic polymers and rust passivators engineered to permanently stop the cycle of annual monsoon repairs.',
    highlight: 'Permanent structural defense',
    icon: '🏆',
  },
];

const COMPARISON_DATA = [
  {
    aspect: 'AAC Block Masonry',
    traditional: '15mm sand-cement mortar prone to heavy drying shrinkage and zigzag stair-step cracks.',
    ftr: '3mm engineered FTR Block Bond® with molecular polymer lock and zero shrinkage cracks.',
    winner: 'FTR Block Bond®',
  },
  {
    aspect: 'Corroded Rebar Repair',
    traditional: 'Ineffective wire brushing leaving active rust underneath that expands 600% and bursts concrete.',
    ftr: 'FTR NORUST® chemical converter passivating rust into a permanent protective iron shield.',
    winner: 'FTR NORUST®',
  },
  {
    aspect: 'Terrace & Slab Seepage',
    traditional: 'Rigid tar felts and cheap surface paints that tear and blister under summer thermal expansion.',
    ftr: 'FTR NOSEEP® seamless liquid membrane with 300%+ continuous elastomeric stretch.',
    winner: 'FTR NOSEEP®',
  },
  {
    aspect: 'Internal Wall Hairlines',
    traditional: 'Brittle white cement putty that chalks and snaps under ambient building vibrations.',
    ftr: 'FTR ERP® Putty Smooth with flexible elastomers that absorb building movement permanently.',
    winner: 'FTR ERP® Putty Smooth',
  },
  {
    aspect: 'Deep Plaster Fissures',
    traditional: 'Unreinforced mortar filled into cracks that inevitably splits in 45°C Indian summer heat.',
    ftr: 'FTR ERP® Plaster Fiber with multidirectional micro-fibers bridging structural tears up to 50°C.',
    winner: 'FTR ERP® Plaster Fiber',
  },
];

export default function WhyFtrSection({ onExploreClick }) {
  const [activeTab, setActiveTab] = useState('pillars'); // 'pillars' | 'comparison'
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section className="why-ftr-root" id="why-us-section" aria-label="Why Choose FTR Solutions">
      <style>{`
        /* =========================================================================
           ROOT & CONTAINER STYLES (Pure White #ffffff, Clean & Spaced)
           ========================================================================= */
        .why-ftr-root {
          width: 100%;
          background: #ffffff;
          color: #0f172a;
          padding: 80px 24px 85px;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;
          position: relative;
        }

        .why-ftr-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* -------------------------------------------------------------------------
           1. SECTION HEADER (Big Headings & Animated Linear Gradient)
           ------------------------------------------------------------------------- */
        .why-ftr-head {
          margin-bottom: 42px;
        }

        .why-ftr-bracket {
          display: inline-block;
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 0.8px;
          color: #334155;
          margin-bottom: 14px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        .why-ftr-bracket span {
          color: #e21b22;
          font-weight: 800;
        }

        .why-ftr-main-title {
          font-size: clamp(38px, 5.2vw, 66px);
          font-weight: 900;
          line-height: 1.06;
          letter-spacing: -0.038em;
          margin: 0 0 14px;
          max-width: 900px;
          display: flex;
          flex-direction: column;
        }

        .why-ftr-dark-line {
          color: #0b0f19;
          font-weight: 900;
          letter-spacing: -0.038em;
          display: block;
        }

        @keyframes whyTextGradientFlow {
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

        .why-ftr-dim-gradient {
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
          animation: whyTextGradientFlow 8s ease-in-out infinite;
          letter-spacing: -0.038em;
          font-weight: 850;
          display: block;
        }

        .why-ftr-lead {
          font-size: clamp(15.5px, 1.8vw, 17.5px);
          color: #475569;
          line-height: 1.55;
          max-width: 680px;
          margin: 0;
        }

        /* -------------------------------------------------------------------------
           2. INTERACTIVE VIEW TOGGLER (Pillars vs Comparison)
           ------------------------------------------------------------------------- */
        .why-ftr-tab-bar {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 4px;
          border-radius: 999px;
          margin-bottom: 40px;
        }

        .why-ftr-tab-btn {
          background: transparent;
          border: none;
          padding: 9px 20px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          color: #64748b;
          cursor: pointer;
          transition: all 0.22s ease;
          font-family: inherit;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .why-ftr-tab-btn.is-active-tab {
          background: #0f172a;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
        }

        .why-ftr-tab-btn:hover:not(.is-active-tab) {
          color: #0f172a;
        }

        /* -------------------------------------------------------------------------
           3. 6 CORE PILLARS GRID (Clean, Boxless, Circular Badges)
           ------------------------------------------------------------------------- */
        .why-ftr-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px 28px;
          margin-bottom: 60px;
        }

        .why-ftr-pillar-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          background: transparent;
          border-left: 2px solid #f1f5f9;
          padding: 6px 10px 12px 18px;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
        }

        .why-ftr-pillar-item:hover,
        .why-ftr-pillar-item.is-active-pillar {
          border-left-color: #e21b22;
          transform: translateY(-2px);
          padding-left: 22px;
        }

        .why-ftr-pillar-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .why-ftr-circle-badge {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid #e21b22;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13.5px;
          font-weight: 900;
          color: #e21b22;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          box-shadow: 0 3px 10px rgba(226, 27, 34, 0.12);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .why-ftr-pillar-item:hover .why-ftr-circle-badge,
        .why-ftr-pillar-item.is-active-pillar .why-ftr-circle-badge {
          background: linear-gradient(135deg, #e21b22 0%, #b91c1c 100%);
          color: #ffffff;
          border-color: #b91c1c;
          transform: scale(1.1);
          box-shadow: 0 6px 18px rgba(226, 27, 34, 0.3);
        }

        .why-ftr-pillar-icon {
          font-size: 18px;
          opacity: 0.85;
        }

        .why-ftr-pillar-tagline {
          font-size: 10.5px;
          font-weight: 800;
          color: #dc2626;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        .why-ftr-pillar-title {
          font-size: 18.5px;
          font-weight: 850;
          color: #0b0f19;
          margin: 0;
          line-height: 1.22;
          letter-spacing: -0.02em;
          transition: color 0.2s ease;
        }

        .why-ftr-pillar-item:hover .why-ftr-pillar-title {
          color: #e21b22;
        }

        .why-ftr-pillar-desc {
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
          margin: 0;
        }

        .why-ftr-pillar-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          color: #1e293b;
          margin-top: 2px;
        }

        .why-ftr-pillar-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #22c55e;
        }

        /* -------------------------------------------------------------------------
           4. TRADITIONAL VS FTR COMPARISON TABLE (Clean & Concise)
           ------------------------------------------------------------------------- */
        .why-ftr-comparison-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 60px;
          text-align: left;
        }

        .why-ftr-table-head th {
          padding: 14px 18px;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          border-bottom: 2px solid #0f172a;
          font-family: ui-monospace, monospace;
        }

        .why-ftr-th-aspect { width: 22%; color: #64748b; }
        .why-ftr-th-trad { width: 39%; color: #dc2626; }
        .why-ftr-th-ftr { width: 39%; color: #16a34a; }

        .why-ftr-table-row {
          border-bottom: 1px solid #f1f5f9;
          transition: background 0.18s ease;
        }

        .why-ftr-table-row:hover {
          background: #fafafa;
        }

        .why-ftr-td-aspect {
          padding: 18px 18px;
          font-size: 14.5px;
          font-weight: 800;
          color: #0b0f19;
          vertical-align: top;
        }

        .why-ftr-td-trad {
          padding: 18px 18px;
          font-size: 13px;
          color: #64748b;
          line-height: 1.48;
          vertical-align: top;
        }

        .why-ftr-td-trad span.trad-cross {
          color: #dc2626;
          font-weight: 900;
          margin-right: 6px;
        }

        .why-ftr-td-ftr {
          padding: 18px 18px;
          font-size: 13.5px;
          color: #0f172a;
          line-height: 1.48;
          font-weight: 600;
          vertical-align: top;
        }

        .why-ftr-td-ftr span.ftr-tick {
          color: #16a34a;
          font-weight: 900;
          margin-right: 6px;
        }

        /* -------------------------------------------------------------------------
           5. PROOF BENCHMARK STRIP
           ------------------------------------------------------------------------- */
        .why-ftr-proof-strip {
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
          padding: 36px 0;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 50px;
        }

        .why-ftr-proof-left {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .why-ftr-proof-heading {
          font-size: clamp(24px, 2.8vw, 34px);
          font-weight: 900;
          color: #0b0f19;
          margin: 0;
          line-height: 1.15;
          letter-spacing: -0.025em;
        }

        .why-ftr-proof-desc {
          font-size: 14px;
          color: #475569;
          line-height: 1.55;
          margin: 0;
        }

        .why-ftr-proof-right {
          display: flex;
          flex-direction: column;
          gap: 12px;
          border-left: 1px solid #f1f5f9;
          padding-left: 32px;
        }

        .why-ftr-stat-node {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .why-ftr-stat-lbl {
          font-size: 10.5px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          font-family: ui-monospace, monospace;
        }

        .why-ftr-stat-val {
          font-size: 14.5px;
          font-weight: 800;
          color: #0b0f19;
        }

        /* -------------------------------------------------------------------------
           6. CTA ACTION BANNER (Dark Compact Footer Accent)
           ------------------------------------------------------------------------- */
        .why-ftr-cta-banner {
          background: #0f172a;
          border-radius: 16px;
          padding: 34px 38px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          color: #ffffff;
        }

        .why-ftr-cta-title {
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 6px;
          letter-spacing: -0.025em;
        }

        .why-ftr-cta-sub {
          font-size: 13.5px;
          color: #94a3b8;
          line-height: 1.5;
          margin: 0 0 10px;
          max-width: 580px;
        }

        .why-ftr-live-tag {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #cbd5e1;
        }

        .why-ftr-live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22c55e;
        }

        .why-ftr-cta-btn {
          background: linear-gradient(135deg, #e21b22 0%, #b91c1c 100%);
          color: #ffffff;
          border: none;
          padding: 13px 24px;
          border-radius: 10px;
          font-size: 13.5px;
          font-weight: 800;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 4px 14px rgba(226, 27, 34, 0.3);
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .why-ftr-cta-btn:hover {
          background: #dc2626;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(226, 27, 34, 0.4);
        }

        /* -------------------------------------------------------------------------
           RESPONSIVE
           ------------------------------------------------------------------------- */
        @media (max-width: 992px) {
          .why-ftr-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .why-ftr-proof-strip {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .why-ftr-proof-right {
            border-left: none;
            border-top: 1px solid #f1f5f9;
            padding-left: 0;
            padding-top: 20px;
          }
          .why-ftr-cta-banner {
            flex-direction: column;
            align-items: flex-start;
            padding: 28px;
          }
        }

        @media (max-width: 640px) {
          .why-ftr-root {
            padding: 55px 16px;
          }
          .why-ftr-pillars-grid {
            grid-template-columns: 1fr;
          }
          .why-ftr-table-head {
            display: none;
          }
          .why-ftr-table-row {
            display: flex;
            flex-direction: column;
            gap: 6px;
            padding: 14px 0;
          }
          .why-ftr-td-aspect,
          .why-ftr-td-trad,
          .why-ftr-td-ftr {
            padding: 3px 0;
          }
        }
      `}</style>

      <div className="why-ftr-container">
        {/* =====================================================================
            1. SECTION HEADER (Big Headings & Animated Linear Gradient)
            ===================================================================== */}
        <div className="why-ftr-head">
          <div className="why-ftr-bracket">
           
          </div>
          <h2 className="why-ftr-main-title">
            <span className="why-ftr-dark-line">Built with Integrity.</span>
            <span className="why-ftr-dim-gradient">Engineered to Never Fail.</span>
          </h2>
          <p className="why-ftr-lead">
            We eliminate recurring structural failures at the substrate level. No rigid fillers, no guesswork, and zero seasonal callbacks.
          </p>
        </div>

        {/* =====================================================================
            2. INTERACTIVE VIEW TOGGLER (Pillars vs Comparison Matrix)
            ===================================================================== */}
        <div className="why-ftr-tab-bar">
          <button
            type="button"
            className={`why-ftr-tab-btn ${activeTab === 'pillars' ? 'is-active-tab' : ''}`}
            onClick={() => setActiveTab('pillars')}
          >
            <span>01.</span>
            <span>The 6 FTR Engineering Pillars</span>
          </button>
          <button
            type="button"
            className={`why-ftr-tab-btn ${activeTab === 'comparison' ? 'is-active-tab' : ''}`}
            onClick={() => setActiveTab('comparison')}
          >
            <span>02.</span>
            <span>Traditional Method vs. The FTR Way</span>
          </button>
        </div>

        {/* =====================================================================
            3. TAB CONTENT 1: 6 CORE PILLARS (With Circular Badges)
            ===================================================================== */}
        {activeTab === 'pillars' && (
          <div className="why-ftr-pillars-grid">
            {WHY_FTR_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.num}
                className={`why-ftr-pillar-item ${activePillar === idx ? 'is-active-pillar' : ''}`}
                onMouseEnter={() => setActivePillar(idx)}
              >
                <div className="why-ftr-pillar-top">
                  <div className="why-ftr-circle-badge">
                    <span>{pillar.num}</span>
                  </div>
                  <span className="why-ftr-pillar-icon">{pillar.icon}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span className="why-ftr-pillar-tagline">{pillar.tagline}</span>
                  <h3 className="why-ftr-pillar-title">{pillar.title}</h3>
                </div>
                <p className="why-ftr-pillar-desc">{pillar.desc}</p>
                <div className="why-ftr-pillar-pill">
                  <span className="why-ftr-pillar-dot" />
                  <span>{pillar.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* =====================================================================
            3. TAB CONTENT 2: TRADITIONAL VS FTR COMPARISON MATRIX
            ===================================================================== */}
        {activeTab === 'comparison' && (
          <table className="why-ftr-comparison-table">
            <thead className="why-ftr-table-head">
              <tr>
                <th className="why-ftr-th-aspect">Structural Challenge</th>
                <th className="why-ftr-th-trad">❌ Traditional Method</th>
                <th className="why-ftr-th-ftr">✅ The FTR Standard</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="why-ftr-table-row">
                  <td className="why-ftr-td-aspect">{row.aspect}</td>
                  <td className="why-ftr-td-trad">
                    <span className="trad-cross">&#10005;</span>
                    {row.traditional}
                  </td>
                  <td className="why-ftr-td-ftr">
                    <span className="ftr-tick">&#10003;</span>
                    {row.ftr}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* =====================================================================
            4. PROOF BENCHMARK STRIP
            ===================================================================== */}
        
        {/* =====================================================================
            5. CTA ACTION BANNER
            ===================================================================== */}
      
      </div>
    </section>
  );
}