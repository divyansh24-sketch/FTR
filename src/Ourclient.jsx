'use client';

import React from 'react';

/**
 * =========================================================================
 * FTR SOLUTIONS - OUR CLIENTS SECTION (OurClients.jsx)
 * =========================================================================
 * - Seamless 60FPS Infinite Marquee with Pause-on-Hover
 * - Real Industry Sectors from FTR Sales Manual (Builders, Infra, Commercial)
 * - Pure Clean White Theme (#ffffff) & Nexlivo Dual-Tone Typography
 * - Animated Moving Linear Gradient Headline
 * - Quick Proof Metric Pills
 * =========================================================================
 */

const CLIENTS_ROW_1 = [
  { name: 'DLF CyberCity', sector: 'Commercial Towers', metric: '1.2M Sq.Ft Protected', icon: '🏢' },
  { name: 'Larsen & Toubro', sector: 'Infra & Metro Rail', metric: 'Retaining Wall Defense', icon: '🏗️' },
  { name: 'Tata Projects', sector: 'Industrial Plants', metric: 'Anti-Corrosion Shield', icon: '🏭' },
  { name: 'Shapoorji Pallonji', sector: 'High-Rise Residential', metric: 'Terrace Waterproofing', icon: '🏙️' },
  { name: 'Godrej Properties', sector: 'Premium Housing', metric: 'AAC Block Bonding', icon: '🏡' },
  { name: 'Oberoi Realty', sector: 'Luxury High-Rise', metric: 'Elastomeric Plasters', icon: '🏛️' },
];

const CLIENTS_ROW_2 = [
  { name: 'Delhi Metro Rail Corp', sector: 'Underground Infra', metric: 'Negative Head Waterproofing', icon: '🚇' },
  { name: 'NHAI Highway Structures', sector: 'Bridge Deck Joints', metric: 'Expansion Joint Seal', icon: '🌉' },
  { name: 'Max Healthcare Infra', sector: 'Hospital Facilities', metric: 'Zero-Damp Basements', icon: '🏥' },
  { name: 'Prestige Group', sector: 'Mixed-Use Developments', metric: 'First Time Right Spec', icon: '🏢' },
  { name: 'Adani Infra', sector: 'Heavy Logistics Hubs', metric: 'High-Tensile Flooring', icon: '⚓' },
  { name: 'Sobha Developers', sector: 'Precision Construction', metric: 'Zero Hairline Plaster', icon: '📐' },
];

export default function OurClients() {
  return (
    <section className="nx-clients-root" id="clients-section" aria-label="Our Trusted Clients">
      <style>{`
        .nx-clients-root {
          width: 100%;
          background: #ffffff;
          color: #0f172a;
          padding: 80px 24px 85px;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .nx-clients-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .nx-clients-head {
          margin-bottom: 44px;
        }

        .nx-clients-bracket {
          display: inline-block;
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 0.8px;
          color: #334155;
          margin-bottom: 14px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        .nx-clients-bracket span {
          color: #e21b22;
          font-weight: 800;
        }

        .nx-clients-title {
          font-size: clamp(38px, 5.2vw, 64px);
          font-weight: 900;
          line-height: 1.06;
          letter-spacing: -0.038em;
          margin: 0 0 14px;
          max-width: 920px;
          display: flex;
          flex-direction: column;
        }

        .nx-dark-line {
          color: #0b0f19;
          font-weight: 900;
          display: block;
        }

        @keyframes clientsTextGradientFlow {
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
          animation: clientsTextGradientFlow 8s ease-in-out infinite;
          letter-spacing: -0.038em;
          font-weight: 850;
          display: block;
        }

        .nx-clients-lead {
          font-size: clamp(15.5px, 1.8vw, 17.5px);
          color: #475569;
          line-height: 1.55;
          max-width: 680px;
          margin: 0;
        }

        /* ---------------- Infinite Marquee ---------------- */
        .nx-marquee-viewport {
          position: relative;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          overflow: hidden;
          padding: 12px 0;
        }

        .nx-marquee-viewport::before,
        .nx-marquee-viewport::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }

        .nx-marquee-viewport::before {
          left: 0;
          background: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0));
        }

        .nx-marquee-viewport::after {
          right: 0;
          background: linear-gradient(to left, #ffffff, rgba(255, 255, 255, 0));
        }

        @keyframes marqueeScrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marqueeScrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .nx-marquee-track {
          display: flex;
          width: max-content;
          gap: 18px;
          will-change: transform;
        }

        .nx-marquee-track.track-left {
          animation: marqueeScrollLeft 32s linear infinite;
        }

        .nx-marquee-track.track-right {
          animation: marqueeScrollRight 34s linear infinite;
          margin-top: 14px;
        }

        .nx-marquee-viewport:hover .nx-marquee-track {
          animation-play-state: paused;
        }

        .nx-client-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 14px 22px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.03);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          white-space: nowrap;
        }

        .nx-client-card:hover {
          border-color: #e21b22;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(226, 27, 34, 0.12);
        }

        .nx-client-icon-badge {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .nx-client-card:hover .nx-client-icon-badge {
          transform: scale(1.1);
          background: #fef2f2;
          border-color: #fca5a5;
        }

        .nx-client-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .nx-client-name {
          font-size: 15px;
          font-weight: 800;
          color: #0b0f19;
          margin: 0;
          letter-spacing: -0.015em;
        }

        .nx-client-sector-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          color: #64748b;
        }

        .nx-client-tag {
          font-size: 10.5px;
          font-weight: 700;
          color: #e21b22;
          background: #fef2f2;
          border-radius: 4px;
          padding: 1px 6px;
          font-family: ui-monospace, monospace;
        }

        /* Stats Strip */
        .nx-clients-metrics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          border-top: 1px solid #f1f5f9;
          padding-top: 40px;
          margin-top: 45px;
        }

        .nx-client-stat {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .nx-cstat-num {
          font-size: clamp(26px, 3.2vw, 36px);
          font-weight: 900;
          color: #0b0f19;
          letter-spacing: -0.03em;
          display: flex;
          align-items: baseline;
          gap: 2px;
        }

        .nx-cstat-num span {
          color: #e21b22;
        }

        .nx-cstat-lbl {
          font-size: 12.5px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .nx-clients-metrics {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
      `}</style>

      <div className="nx-clients-container">
        <div className="nx-clients-head">
          <div className="nx-clients-bracket">
            
          </div>
          <h2 className="nx-clients-title">
            <span className="nx-dark-line">Engineered for India&rsquo;s Leading Builders.</span>
            <span className="nx-dim-gradient">Tested on 50M+ Sq. Ft. of Concrete.</span>
          </h2>
          <p className="nx-clients-lead">
            From high-rise residential towers to metro rail retaining walls, FTR delivers zero-callback chemical solutions trusted by tier-1 developers and contractors.
          </p>
        </div>

        <div className="nx-marquee-viewport">
          <div className="nx-marquee-track track-left">
            {[...CLIENTS_ROW_1, ...CLIENTS_ROW_1].map((client, idx) => (
              <div key={`row1-${idx}`} className="nx-client-card">
                <div className="nx-client-icon-badge">
                  <span>{client.icon}</span>
                </div>
                <div className="nx-client-meta">
                  <h4 className="nx-client-name">{client.name}</h4>
                  <div className="nx-client-sector-row">
                    <span>{client.sector}</span>
                    <span>&bull;</span>
                    <span className="nx-client-tag">{client.metric}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="nx-marquee-track track-right">
            {[...CLIENTS_ROW_2, ...CLIENTS_ROW_2].map((client, idx) => (
              <div key={`row2-${idx}`} className="nx-client-card">
                <div className="nx-client-icon-badge">
                  <span>{client.icon}</span>
                </div>
                <div className="nx-client-meta">
                  <h4 className="nx-client-name">{client.name}</h4>
                  <div className="nx-client-sector-row">
                    <span>{client.sector}</span>
                    <span>&bull;</span>
                    <span className="nx-client-tag">{client.metric}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       
        
      </div>
    </section>
  );
}