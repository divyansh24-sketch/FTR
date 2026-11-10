import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

export default function Hero({ onExploreClick, onContactClick }) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Page reload par ek baar smooth floating entrance trigger
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  const handleNavSelect = (name) => {
    if (name === 'About Us') {
      document.getElementById('about-section')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      className={`ftr-hero-root ${isLoaded ? 'is-mounted' : ''}`}
      id="hero-section"
    >
      {/* ================= ALL-IN-ONE CSS (<style>) ================= */}
      <style>{`
        .ftr-hero-root {
          --ftr-red: #e21b22;
          --ftr-red-dark: #b91c1c;
          --ftr-dark: #0f172a;
          --ftr-slate: #1e293b;
          --ftr-muted: #475569;
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background-color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Background Image (bg.png / Image 5) */
        .ftr-hero-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .ftr-hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .ftr-hero-navbar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 20;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 20px 48px;
        }

        /* Main Hero Grid */
        .ftr-hero-main {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 40px 48px;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 32px;
          align-items: center;
        }

        /* Left Stage: 3 Tilted Buckets */
        .ftr-stage-col {
          position: relative;
          width: 100%;
          height: 540px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(24px);
        }

        .ftr-bucket-entity {
          position: absolute;
          cursor: pointer;
          user-select: none;
        }

        .ftr-bucket-img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 14px 22px rgba(15, 23, 42, 0.22));
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease;
        }

        .ftr-bucket-shadow {
          position: absolute;
          bottom: -18px;
          left: 10%;
          width: 80%;
          height: 28px;
          border-radius: 50%;
          background: radial-gradient(
            ellipse at center,
            rgba(15, 23, 42, 0.38) 0%,
            rgba(15, 23, 42, 0.16) 45%,
            transparent 75%
          );
          filter: blur(8px);
          transform-origin: center center;
          pointer-events: none;
          z-index: -1;
          transition: transform 0.35s ease, opacity 0.35s ease, filter 0.35s ease;
        }

        /* 1. NOSEEP BUCKET (b.png) */
        .ftr-bucket-noseep {
          left: 4%;
          top: 15%;
          width: 44%;
          max-width: 320px;
          z-index: 15;
          opacity: 0;
        }

        .is-mounted .ftr-bucket-noseep {
          animation: dropSettleNoseep 1.15s cubic-bezier(0.22, 1, 0.36, 1) 0.08s forwards;
        }

        @keyframes dropSettleNoseep {
          0% {
            transform: translate3d(-20px, -260px, 0) rotate(-14deg) scale(0.88);
            opacity: 0;
          }
          65% {
            transform: translate3d(0, 14px, 0) rotate(-5.5deg) scale(1.02);
            opacity: 1;
          }
          82% {
            transform: translate3d(0, -4px, 0) rotate(-7.5deg) scale(0.995);
          }
          100% {
            transform: translate3d(0, 0, 0) rotate(-7deg) scale(1);
            opacity: 1;
          }
        }

        /* Hover ONLY on bucket itself */
        .ftr-bucket-noseep:hover .ftr-bucket-img {
          transform: translateY(-14px) scale(1.05);
          filter: drop-shadow(0 26px 36px rgba(15, 23, 42, 0.34)) brightness(1.04);
        }

        .ftr-bucket-noseep:hover .ftr-bucket-shadow {
          transform: scale(0.82);
          opacity: 0.35;
          filter: blur(12px);
        }

        /* 2. BLOCK BOND BUCKET (w.png) */
        .ftr-bucket-blockbond {
          left: 43%;
          top: 20%;
          width: 45%;
          max-width: 325px;
          z-index: 10;
          opacity: 0;
        }

        .is-mounted .ftr-bucket-blockbond {
          animation: dropSettleBlockBond 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.24s forwards;
        }

        @keyframes dropSettleBlockBond {
          0% {
            transform: translate3d(30px, -270px, 0) rotate(16deg) scale(0.85);
            opacity: 0;
          }
          65% {
            transform: translate3d(0, 15px, 0) rotate(8deg) scale(1.02);
            opacity: 1;
          }
          82% {
            transform: translate3d(0, -4px, 0) rotate(5.5deg) scale(0.995);
          }
          100% {
            transform: translate3d(0, 0, 0) rotate(6deg) scale(1);
            opacity: 1;
          }
        }

        .ftr-bucket-blockbond:hover .ftr-bucket-img {
          transform: translateY(-14px) scale(1.05);
          filter: drop-shadow(0 26px 36px rgba(15, 23, 42, 0.34)) brightness(1.04);
        }

        .ftr-bucket-blockbond:hover .ftr-bucket-shadow {
          transform: scale(0.82);
          opacity: 0.35;
          filter: blur(12px);
        }

        /* 3. NORUST CAN (y.png) */
        .ftr-bucket-norust {
          left: 27%;
          top: 36%;
          width: 32%;
          max-width: 240px;
          z-index: 25;
          opacity: 0;
        }

        .is-mounted .ftr-bucket-norust {
          animation: dropSettleNoRust 1.25s cubic-bezier(0.22, 1, 0.36, 1) 0.42s forwards;
        }

        @keyframes dropSettleNoRust {
          0% {
            transform: translate3d(0, -290px, 0) rotate(-12deg) scale(0.82);
            opacity: 0;
          }
          65% {
            transform: translate3d(0, 16px, 0) rotate(-1.5deg) scale(1.03);
            opacity: 1;
          }
          82% {
            transform: translate3d(0, -4px, 0) rotate(-3.5deg) scale(0.995);
          }
          100% {
            transform: translate3d(0, 0, 0) rotate(-3deg) scale(1);
            opacity: 1;
          }
        }

        .ftr-bucket-norust:hover .ftr-bucket-img {
          transform: translateY(-14px) scale(1.05);
          filter: drop-shadow(0 26px 36px rgba(15, 23, 42, 0.34)) brightness(1.04);
        }

        .ftr-bucket-norust:hover .ftr-bucket-shadow {
          transform: scale(0.82);
          opacity: 0.35;
          filter: blur(12px);
        }

        /* Tooltip Pill - ONLY shows on bucket hover */
        .ftr-hover-badge {
          position: absolute;
          top: -38px;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: rgba(15, 23, 42, 0.94);
          backdrop-filter: blur(8px);
          color: #ffffff;
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 700;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ftr-hover-badge .badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }

        .ftr-bucket-entity:hover .ftr-hover-badge {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        /* =========================================================
           RIGHT: HERO TYPOGRAPHY (STATIC, NO HOVER SHIFT, ON bg.png)
           ========================================================= */
        .ftr-text-col {
          position: relative;
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          user-select: text;
        }

        .ftr-text-block {
          position: relative;
          width: 100%;
          max-width: 620px;
          padding: 16px 0;
        }

        /* Soft linear gradient glow behind text only */
        .ftr-text-gradient-glow {
          position: absolute;
          top: -24px;
          left: -40px;
          right: -30px;
          bottom: -24px;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.92) 0%,
            rgba(255, 255, 255, 0.78) 45%,
            rgba(254, 242, 242, 0.38) 75%,
            transparent 100%
          );
          filter: blur(34px);
          border-radius: 40px;
          pointer-events: none;
          z-index: 0;
        }

        .ftr-text-inner {
          position: relative;
          z-index: 2;
        }

        /* Tagline with red bar */
        .ftr-tagline-wrap {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .ftr-accent-bar {
          width: 3.5px;
          height: 38px;
          background: var(--ftr-red);
          border-radius: 2px;
        }

        .ftr-tagline-text {
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 3px;
          color: #1e293b;
          text-transform: uppercase;
        }

        /* BUILT TO LAST Headline (Static, No hover shift) */
        .ftr-hero-title {
          margin: 0 0 16px;
          line-height: 0.98;
          letter-spacing: -1.6px;
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          column-gap: 0.22em;
        }

        .ftr-title-built {
          font-size: clamp(40px, 4.2vw, 60px);
          font-weight: 950;
          color: #0f172a;
          text-transform: uppercase;
        }

        .ftr-title-last {
          font-size: clamp(46px, 4.8vw, 68px);
          font-weight: 950;
          text-transform: uppercase;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #991b1b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 4px 10px rgba(220, 38, 38, 0.2));
          display: inline-block;
        }

        /* Categories (Static, No hover shifts) */
        .ftr-categories-list {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: clamp(15px, 1.5vw, 20px);
          font-weight: 700;
          color: #334155;
          margin-bottom: 22px;
          flex-wrap: wrap;
        }

        .ftr-cat-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 2px 0;
          cursor: default;
        }

        .ftr-cat-sep {
          color: #94a3b8;
          font-weight: 400;
        }

        /* Description */
        .ftr-hero-desc {
          font-size: 15.5px;
          line-height: 1.65;
          color: #475569;
          margin: 0 0 28px;
          max-width: 520px;
        }

        /* Feature Chips (Static, No hover shift) */
        .ftr-specs-chips {
          display: flex;
          gap: 10px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .ftr-spec-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          padding: 7px 14px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(203, 213, 225, 0.85);
          color: #334155;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
          cursor: default;
        }

        /* CTA Buttons */
        .ftr-cta-group {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .ftr-btn-primary {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #e21b22 0%, #b91c1c 100%);
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          padding: 14px 34px;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 25px -4px rgba(226, 27, 34, 0.45);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .ftr-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px -4px rgba(226, 27, 34, 0.55);
        }

        .ftr-btn-secondary {
          background: rgba(255, 255, 255, 0.9);
          color: #0f172a;
          font-size: 14.5px;
          font-weight: 700;
          padding: 13px 26px;
          border-radius: 9999px;
          border: 1.5px solid #cbd5e1;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .ftr-btn-secondary:hover {
          border-color: #0f172a;
          background: #ffffff;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1120px) {
          .ftr-hero-main {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 30px 24px 60px;
          }
          .ftr-stage-col {
            height: 440px;
            order: 1;
            transform: translateY(18px);
          }
          .ftr-text-col {
            order: 2;
            width: 100%;
          }
        }

        @media (max-width: 680px) {
          .ftr-hero-navbar { padding: 16px; }
          .ftr-hero-main { padding: 24px 16px 48px; }
          .ftr-stage-col { height: 330px; transform: translateY(12px); }
          .ftr-bucket-noseep { left: 2%; top: 10%; width: 48%; }
          .ftr-bucket-blockbond { left: 44%; top: 15%; width: 49%; }
          .ftr-bucket-norust { left: 26%; top: 36%; width: 36%; }
          .ftr-title-built { font-size: 38px; }
          .ftr-title-last { font-size: 46px; }
          .ftr-categories-list { font-size: 14px; gap: 8px; }
          .ftr-cta-group { flex-direction: column; width: 100%; }
          .ftr-btn-primary, .ftr-btn-secondary { width: 100%; justify-content: center; }
        }
      `}</style>

      {/* Background Image (bg.png / Image 5) */}
      <div className="ftr-hero-bg">
      <img
        src={`${import.meta.env.BASE_URL}assets/ftr/bg.png`}
        alt="FTR Architecture Background"
        className="ftr-hero-bg-img"
      />
      </div>

      <div className="ftr-hero-navbar">
        <Navbar onSelect={handleNavSelect} />
      </div>

      {/* Main Grid */}
      <div className="ftr-hero-main">
        {/* Left: 3 Tilted Buckets (Drop once, then settled) */}
        <div className="ftr-stage-col">
          {/* NOSEEP BUCKET */}
          <div
            className="ftr-bucket-entity ftr-bucket-noseep"
            title="FTR NOSEEP - Acrylic Elastomeric Membrane Waterproofing"
          >
            <div className="ftr-hover-badge">
              <span className="badge-dot" style={{ background: '#0284c7' }} />
              <span>FTR NOSEEP® Waterproofing</span>
            </div>
            <img
              src="/assets/ftr/b.png"
              onError={(e) => {
                e.currentTarget.src = '/assets/ftr/bg.png';
              }}
              alt="FTR NOSEEP Waterproofing"
              className="ftr-bucket-img"
            />
            <div className="ftr-bucket-shadow" />
          </div>

          {/* BLOCK BOND BUCKET */}
          <div
            className="ftr-bucket-entity ftr-bucket-blockbond"
            title="FTR BLOCK BOND - Polymerized Adhesive"
          >
            <div className="ftr-hover-badge">
              <span className="badge-dot" style={{ background: '#dc2626' }} />
              <span>FTR BLOCK BOND® Adhesive</span>
            </div>
            <img
              src="/assets/ftr/w.png"
              onError={(e) => {
                e.currentTarget.src = '/assets/ftr/bg.png';
              }}
              alt="FTR Block Bond Adhesive"
              className="ftr-bucket-img"
            />
            <div className="ftr-bucket-shadow" />
          </div>

          {/* NORUST CAN */}
          <div
            className="ftr-bucket-entity ftr-bucket-norust"
            title="FTR NORUST - Advanced Rust Protection"
          >
            <div className="ftr-hover-badge">
              <span className="badge-dot" style={{ background: '#f59e0b' }} />
              <span>FTR NORUST® Rust Protection</span>
            </div>
            <img
              src="/assets/ftr/y.png"
              onError={(e) => {
                e.currentTarget.src = '/assets/ftr/product_norust.png';
              }}
              alt="FTR NORUST Rust Protection"
              className="ftr-bucket-img"
            />
            <div className="ftr-bucket-shadow" />
          </div>
        </div>

        {/* Right: Hero Text directly on bg.png (Completely Static) */}
        <div className="ftr-text-col">
          <div className="ftr-text-block">
            {/* Soft linear gradient glow behind text only */}
            <div className="ftr-text-gradient-glow" />

            <div className="ftr-text-inner">
              <div className="ftr-tagline-wrap">
               
               
              </div>

              <h1 className="ftr-hero-title">
                <span className="ftr-title-built">BUILT TO</span>
                <span className="ftr-title-last">LAST</span>
              </h1>

              <div className="ftr-categories-list">
                <span className="ftr-cat-item">
                  💧 Waterproofing
                </span>
                <span className="ftr-cat-sep">|</span>
                <span className="ftr-cat-item">
                  🧱 Adhesive
                </span>
                <span className="ftr-cat-sep">|</span>
                <span className="ftr-cat-item">
                  🛡️ Rust Protection
                </span>
              </div>

              <p className="ftr-hero-desc">
                High-performance engineered construction chemicals and protective systems
                designed to shield, bond, and withstand the harshest environmental
                stresses. Certified durability from structural foundation to final finish.
              </p>

              <div className="ftr-specs-chips">
                <div className="ftr-spec-pill">
                  <span>💧 100% Water Impermeable</span>
                </div>
                <div className="ftr-spec-pill">
                  <span>🧱 High Polymer Strength</span>
                </div>
                <div className="ftr-spec-pill">
                  <span>🛡️ Converts Rust into Stable Iron</span>
                </div>
              </div>

              <div className="ftr-cta-group">
                <button className="ftr-btn-primary" onClick={onExploreClick}>
                  <span>Explore Solutions</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>

                <button
                  className="ftr-btn-secondary"
                  onClick={onContactClick || onExploreClick}
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <span>Technical Data Sheet</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}