'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * =========================================================================
 * FTR SOLUTIONS - COMPACT LINEAR GRADIENT FOOTER (Footer.jsx)
 * =========================================================================
 * - Tightened margins, compact gaps & sleek layout
 * - Continuous modern linear gradient background
 * - Official FTR Logo + Dark Pill CTA
 * - 4-Column compact hierarchy
 * - Massive signature "FTR" watermark typography
 * - 60FPS scroll up & scroll down animations
 * =========================================================================
 */

export default function Footer({ onExploreClick }) {
  const [imgError, setImgError] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="ftr-cooldock-footer-root" aria-label="Site Footer">
      <style>{`
        /* ---------------- Root Container (Continuous Linear Gradient) ---------------- */
        .ftr-cooldock-footer-root {
          width: 100%;
          background: linear-gradient(165deg, #ffffff 0%, #f8fafc 25%, #f1f5f9 60%, #e2e8f0 100%);
          color: #0f172a;
          padding: 48px 24px 10px;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;
          position: relative;
          overflow: hidden;
          border-top: 1px solid #e2e8f0;
          contain: paint;
        }

        /* Ambient soft linear glow mesh */
        .ftr-footer-ambient-glow {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) translateZ(0);
          width: 1000px;
          height: 280px;
          background: radial-gradient(
            ellipse at bottom center,
            rgba(226, 27, 34, 0.05) 0%,
            rgba(226, 232, 240, 0.45) 50%,
            transparent 75%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(28px);
        }

        .ftr-footer-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* ---------------- Compact 4-Column Grid ---------------- */
        .ftr-footer-top-grid {
          display: grid;
          grid-template-columns: 1.55fr 1fr 1fr 1fr;
          gap: 32px;
          margin-bottom: 24px;
        }

        /* Column 1: Brand */
        .ftr-fcol-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        /* Official FTR Logo Link */
        .ftr-footer-logo-link {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          user-select: none;
          cursor: pointer;
          margin-bottom: 2px;
        }

        .ftr-footer-logo-img {
          height: 36px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        .ftr-footer-svg-logo {
          height: 36px;
          width: auto;
          display: block;
        }

        .ftr-fbrand-tagline {
          font-size: 10.5px;
          font-weight: 800;
          color: #e21b22;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          margin: -4px 0 0;
        }

        .ftr-fbrand-hero-title {
          font-size: clamp(20px, 2.2vw, 26px);
          font-weight: 850;
          color: #0f172a;
          line-height: 1.2;
          letter-spacing: -0.03em;
          margin: 0;
        }

        .ftr-fbrand-summary {
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
          margin: 0;
          max-width: 360px;
        }

        /* Solid Black Pill CTA Button */
        .ftr-footer-pill-cta {
          background: #0f172a;
          color: #ffffff;
          border: 1px solid #0f172a;
          border-radius: 9999px;
          padding: 8px 18px;
          font-size: 13px;
          font-weight: 650;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          cursor: pointer;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 3px 10px rgba(15, 23, 42, 0.1);
          text-decoration: none;
          font-family: inherit;
          margin-top: 2px;
          transform: translateZ(0);
        }

        .ftr-footer-pill-cta:hover {
          background: #e21b22;
          border-color: #e21b22;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(226, 27, 34, 0.3);
        }

        .ftr-footer-pill-cta .arrow {
          transition: transform 0.2s ease;
        }

        .ftr-footer-pill-cta:hover .arrow {
          transform: translate(2px, -2px);
        }

        /* Meta credits */
        .ftr-fmeta-block {
          display: flex;
          flex-direction: column;
          gap: 2px;
          font-size: 11.5px;
          color: #94a3b8;
          margin-top: 4px;
        }

        .ftr-fmeta-credit {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #64748b;
          font-weight: 550;
        }

        .ftr-fmeta-credit strong {
          color: #0f172a;
        }

        /* Columns 2, 3, 4 (Links) */
        .ftr-fcol {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .ftr-fcol-heading {
          font-size: 14px;
          font-weight: 750;
          color: #0f172a;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .ftr-flinks-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ftr-flink-btn {
          background: transparent;
          border: none;
          padding: 0;
          font-size: 13px;
          color: #475569;
          text-align: left;
          cursor: pointer;
          transition: all 0.18s ease;
          font-family: inherit;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transform: translateZ(0);
        }

        .ftr-flink-btn:hover {
          color: #e21b22;
          transform: translateX(3px);
        }

        .ftr-flink-pill-tag {
          font-size: 9.5px;
          font-weight: 800;
          color: #e21b22;
          background: #fee2e2;
          padding: 1px 5px;
          border-radius: 9999px;
          letter-spacing: 0.3px;
        }

        /* ---------------- MASSIVE FTR SIGNATURE TYPOGRAPHY ---------------- */
        .ftr-massive-signature-wrap {
          width: 100%;
          text-align: center;
          position: relative;
          margin-top: 0px;
          margin-bottom: -8px;
          user-select: none;
          pointer-events: none;
          overflow: hidden;
        }

        .ftr-massive-text {
          font-size: clamp(90px, 18vw, 210px);
          font-weight: 950;
          line-height: 0.82;
          letter-spacing: -0.05em;
          margin: 0;
          text-transform: uppercase;
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;
          background: linear-gradient(
            180deg,
            rgba(15, 23, 42, 0.14) 0%,
            rgba(15, 23, 42, 0.06) 55%,
            rgba(226, 27, 34, 0.02) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          transform: translateZ(0);
        }

        /* Bottom Subline */
        .ftr-footer-subline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 0 6px;
          border-top: 1px solid rgba(203, 213, 225, 0.7);
          font-size: 11.5px;
          color: #94a3b8;
          position: relative;
          z-index: 3;
        }

        .ftr-back-to-top-btn {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #334155;
          padding: 5px 14px;
          border-radius: 9999px;
          font-size: 11.5px;
          font-weight: 650;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          transition: all 0.2s ease;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
        }

        .ftr-back-to-top-btn:hover {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          transform: translateY(-2px);
        }

        /* ---------------- Responsive ---------------- */
        @media (max-width: 960px) {
          .ftr-footer-top-grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
          .ftr-fcol-brand {
            grid-column: 1 / -1;
            max-width: 100%;
          }
          .ftr-fbrand-summary {
            max-width: 100%;
          }
        }

        @media (max-width: 600px) {
          .ftr-cooldock-footer-root {
            padding: 36px 16px 8px;
          }
          .ftr-footer-top-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .ftr-massive-text {
            font-size: clamp(75px, 24vw, 130px);
          }
          .ftr-footer-subline {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }
      `}</style>

      {/* Ambient Radial Gradient Mesh */}
      <div className="ftr-footer-ambient-glow" />

      <div className="ftr-footer-container">
        {/* =====================================================================
            1. TOP 4-COLUMN COMPACT GRID
            ===================================================================== */}
        <div className="ftr-footer-top-grid">
          {/* Column 1: Brand & CTA */}
          <motion.div
            className="ftr-fcol-brand"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Official FTR Logo (Same as Navbar) */}
            <a
              href="#home"
              className="ftr-footer-logo-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              title="FTR - First Time Right"
            >
              {!imgError ? (
                <img
                  src="/ftr-logo.png"
                  alt="FTR - First Time Right"
                  className="ftr-footer-logo-img"
                  onError={() => setImgError(true)}
                />
              ) : (
                <svg
                  className="ftr-footer-svg-logo"
                  viewBox="0 0 230 122"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text
                    x="4"
                    y="66"
                    fill="#0b1325"
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
                    fill="#64748b"
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

           

            <h3 className="ftr-fbrand-hero-title">
              Engineered for permanent structural protection.
            </h3>

            <p className="ftr-fbrand-summary">
              FTR eliminates terrace seepage, masonry cracks, and rebar corrosion with high-tensile molecular polymer defense across India.
            </p>

            <button
              type="button"
              className="ftr-footer-pill-cta"
              onClick={() => scrollToSection('contact-section')}
            >
              <span>Book Site Diagnosis</span>
              <span className="arrow">&rarr;</span>
            </button>

            <div className="ftr-fmeta-block">
              <span>&copy; 2026 FTR Solutions Pvt. Ltd. All rights reserved.</span>
              <span className="ftr-fmeta-credit">
                Engineered with <span style={{ color: '#e21b22' }}>❤️</span> in <strong>New Delhi, India</strong>
              </span>
            </div>
          </motion.div>

          {/* Column 2: Menu */}
          <motion.div
            className="ftr-fcol"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          >
            <h4 className="ftr-fcol-heading">Menu</h4>
            <ul className="ftr-flinks-list">
              <li>
                <button
                  type="button"
                  className="ftr-flink-btn"
                  onClick={() => scrollToSection('solutions-section')}
                >
                  Solutions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="ftr-flink-btn"
                  onClick={() => scrollToSection('why-us-section')}
                >
                  Why FTR
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="ftr-flink-btn"
                  onClick={() => scrollToSection('products-catalog')}
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="ftr-flink-btn"
                  onClick={() => scrollToSection('clients-section')}
                >
                  Our Clients
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="ftr-flink-btn"
                  onClick={() => scrollToSection('testimonials-section')}
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="ftr-flink-btn"
                  onClick={() => scrollToSection('faq-section')}
                >
                  FAQ
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Navigation */}
          <motion.div
            className="ftr-fcol"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <h4 className="ftr-fcol-heading">Navigation</h4>
            <ul className="ftr-flinks-list">
              <li>
                <button
                  type="button"
                  className="ftr-flink-btn"
                  onClick={() => scrollToSection('contact-section')}
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="ftr-flink-btn"
                  onClick={() => scrollToSection('stats-section')}
                >
                  Engineering Playbook
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="ftr-flink-btn"
                  onClick={() => scrollToSection('solutions-section')}
                >
                  5-Step Method
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="ftr-flink-btn"
                  onClick={() => scrollToSection('contact-section')}
                >
                  Schedule On-Site Demo
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="ftr-flink-btn"
                  onClick={onExploreClick}
                >
                  Technical TDS Sheets
                </button>
              </li>
              <li>
                <a
                  href="mailto:info@ftr.co.in"
                  className="ftr-flink-btn"
                >
                  Customer Support
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Chemical Systems */}
          <motion.div
            className="ftr-fcol"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <h4 className="ftr-fcol-heading">Chemical Systems</h4>
            <ul className="ftr-flinks-list">
              <li>
                <button
                  type="button"
                  className="ftr-flink-btn"
                  onClick={() => scrollToSection('solutions-section')}
                >
                  <span>FTR NOSEEP® 1 & 2</span>
                  <span className="ftr-flink-pill-tag">Barrier</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="ftr-flink-btn"
                  onClick={() => scrollToSection('solutions-section')}
                >
                  <span>FTR Block Bond®</span>
                  <span className="ftr-flink-pill-tag">Thin-Bed</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="ftr-flink-btn"
                  onClick={() => scrollToSection('solutions-section')}
                >
                  <span>FTR NORUST®</span>
                  <span className="ftr-flink-pill-tag">Shield</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="ftr-flink-btn"
                  onClick={() => scrollToSection('solutions-section')}
                >
                  FTR ERP® Putty Smooth
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="ftr-flink-btn"
                  onClick={() => scrollToSection('solutions-section')}
                >
                  FTR ERP® Plaster Fiber
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="ftr-flink-btn"
                  onClick={() => scrollToSection('contact-section')}
                >
                  Custom Formulations
                </button>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* =====================================================================
            2. GIGANTIC "FTR" WATERMARK TYPOGRAPHY (Snug & Compact)
            ===================================================================== */}
        <motion.div
          className="ftr-massive-signature-wrap"
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="ftr-massive-text">FTR</h1>
        </motion.div>

        {/* =====================================================================
            3. BOTTOM SUBLINE (Back to Top & Minimal Legal)
            ===================================================================== */}
        <div className="ftr-footer-subline">
          <div>
            <span>FTR Solutions &bull; Performance is the responsibility of the material.</span>
          </div>

          <button
            type="button"
            className="ftr-back-to-top-btn"
            onClick={scrollToTop}
          >
            <span>Back to top</span>
            <span>&uarr;</span>
          </button>
        </div>
      </div>
    </footer>
  );
}