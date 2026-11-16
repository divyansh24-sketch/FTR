'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * =========================================================================
 * FTR SOLUTIONS - 4-COLUMN LINEAR GRADIENT FOOTER (Footer.jsx)
 * =========================================================================
 * - 4-Column Layout: Brand | Menu | Chemical Systems | Get in Touch
 * - Get in Touch includes Address, Phone, Email & Social Media with Icons + Names
 * - Continuous modern linear gradient background
 * - Massive signature "FTR" watermark typography
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
          height: 300px;
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
          max-width: 1220px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* ---------------- 4-Column Balanced Grid ---------------- */
        .ftr-footer-top-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.75fr 1.05fr 1.25fr;
          gap: 32px;
          margin-bottom: 24px;
        }

        /* Column 1: Brand */
        .ftr-fcol-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

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

        .ftr-fbrand-hero-title {
          font-size: clamp(19px, 2vw, 23px);
          font-weight: 850;
          color: #0f172a;
          line-height: 1.25;
          letter-spacing: -0.03em;
          margin: 0;
        }

        .ftr-fbrand-summary {
          font-size: 13px;
          color: #64748b;
          line-height: 1.55;
          margin: 0;
          max-width: 340px;
        }

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

        .ftr-fmeta-block {
          display: flex;
          flex-direction: column;
          gap: 3px;
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

        /* Generic Column Styling */
        .ftr-fcol {
          display: flex;
          flex-direction: column;
          gap: 12px;
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
          gap: 9px;
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

        /* ---------------- Column 4: Get in Touch ---------------- */
        .ftr-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 12.5px;
          color: #475569;
          line-height: 1.5;
        }

        .ftr-contact-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #e2e8f0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #0f172a;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .ftr-contact-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .ftr-contact-text a {
          color: #0f172a;
          font-weight: 650;
          text-decoration: none;
          transition: color 0.18s ease;
        }

        .ftr-contact-text a:hover {
          color: #e21b22;
        }

        .ftr-contact-subtext {
          font-size: 11px;
          color: #94a3b8;
        }

        /* Social Media Section */
        .ftr-socials-wrapper {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 4px;
          padding-top: 10px;
          border-top: 1px dashed rgba(226, 232, 240, 0.9);
        }

        .ftr-socials-title {
          font-size: 11.5px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .ftr-socials-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .ftr-social-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 11px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid #e2e8f0;
          border-radius: 9999px;
          font-size: 11.5px;
          font-weight: 600;
          color: #334155;
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 1px 3px rgba(15, 23, 42, 0.03);
        }

        .ftr-social-pill:hover {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(15, 23, 42, 0.15);
        }

        .ftr-social-pill svg {
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .ftr-social-pill:hover svg {
          transform: scale(1.1);
        }

        /* ---------------- Massive FTR Signature Watermark ---------------- */
        .ftr-massive-signature-wrap {
          width: 100%;
          text-align: center;
          position: relative;
          margin-top: 8px;
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

        /* ---------------- Bottom Subline ---------------- */
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
        @media (max-width: 1040px) {
          .ftr-footer-top-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
          .ftr-fcol-brand {
            grid-column: 1 / -1;
            max-width: 100%;
          }
        }

        @media (max-width: 600px) {
          .ftr-cooldock-footer-root {
            padding: 36px 16px 8px;
          }
          .ftr-footer-top-grid {
            grid-template-columns: 1fr;
            gap: 24px;
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
            TOP 4-COLUMN GRID: Brand | Menu | Chemical Systems | Get in Touch
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
                Made with <span style={{ color: '#e21b22' }}>❤️</span> by <strong>Devlofox</strong>
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

          {/* Column 3: Chemical Systems */}
          <motion.div
            className="ftr-fcol"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
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

          {/* Column 4: Get in Touch (Right of Chemical Systems) */}
          <motion.div
            className="ftr-fcol"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <h4 className="ftr-fcol-heading">Get in Touch</h4>

            {/* Address */}
            <div className="ftr-contact-item">
              <div className="ftr-contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="ftr-contact-text">
                <span> New Delhi - 110034</span>
              </div>
            </div>

            {/* Phone */}
            <div className="ftr-contact-item">
              <div className="ftr-contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="ftr-contact-text">
                <a href="tel:+911146205620">+91-11-46205620</a>
                <span className="ftr-contact-subtext">Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>

            {/* Email */}
            <div className="ftr-contact-item">
              <div className="ftr-contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div className="ftr-contact-text">
                <a href="mailto:info@ftrsolutions.com">info@ftrsolutions.com</a>
              </div>
            </div>

            {/* Social Media with Icons & Names */}
            <div className="ftr-socials-wrapper">
              <span className="ftr-socials-title">Follow Us</span>
              <div className="ftr-socials-grid">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ftr-social-pill"
                  title="LinkedIn"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ftr-social-pill"
                  title="Instagram"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ftr-social-pill"
                  title="X (Twitter)"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>X</span>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ftr-social-pill"
                  title="YouTube"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================================
            GIGANTIC "FTR" WATERMARK TYPOGRAPHY
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
            BOTTOM SUBLINE (Back to Top & Minimal Legal)
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