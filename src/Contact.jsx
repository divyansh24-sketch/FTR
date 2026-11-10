'use client';

import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';

/**
 * =========================================================================
 * FTR SOLUTIONS - REDESIGNED 60FPS CONTACT SECTION (Contact.jsx)
 * =========================================================================
 * - 60FPS GPU-accelerated BlurReveal text animation
 * - Bidirectional Scroll Up & Scroll Down triggers (once: false)
 * - Zero personal/dummy data in placeholders (clean generic placeholders)
 * - Modern minimalist cards with active live status indicator
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    issue: 'seepage',
    structureType: 'residential',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="nx-contact-root" id="contact-section" aria-label="Book Site Diagnosis">
      <style>{`
        /* ---------------- Root Container ---------------- */
        .nx-contact-root {
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

        /* Ambient subtle radial glow */
        .nx-contact-ambient-glow {
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

        .nx-contact-container {
          max-width: 1160px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ---------------- Header Block ---------------- */
        .nx-contact-head {
          margin-bottom: 44px;
        }

        .nx-contact-bracket {
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

        .nx-contact-bracket span.nx-highlight {
          color: #e21b22;
          font-weight: 800;
        }

        .nx-contact-title {
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

        @keyframes contactTextGradientFlow {
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
          animation: contactTextGradientFlow 6s ease-in-out infinite;
          letter-spacing: -0.038em;
          font-weight: 850;
          display: block;
          transform: translateZ(0);
        }

        .nx-contact-lead {
          font-size: clamp(15px, 1.8vw, 17px);
          color: #64748b;
          line-height: 1.5;
          max-width: 650px;
          margin: 0;
        }

        /* ---------------- 2-Column Clean Grid ---------------- */
        .nx-contact-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 36px;
          align-items: start;
        }

        /* Left Column: Info Cards */
        .nx-contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .nx-contact-status-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 700;
          color: #16a34a;
          width: fit-content;
        }

        .nx-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          animation: nxPulseDot 1.8s infinite;
        }

        @keyframes nxPulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }

        .nx-contact-nodes {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .nx-cnode-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 16px 18px;
          box-shadow: 0 1px 3px rgba(15, 23, 42, 0.03);
          transition: all 0.2s ease;
          transform: translateZ(0);
        }

        .nx-cnode-item:hover {
          border-color: #cbd5e1;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.05);
        }

        .nx-cnode-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .nx-cnode-text h4 {
          font-size: 13.5px;
          font-weight: 800;
          color: #0b0f19;
          margin: 0 0 2px;
        }

        .nx-cnode-text p {
          font-size: 13px;
          color: #64748b;
          margin: 0;
          line-height: 1.45;
        }

        .nx-mission-banner-card {
          background: #0f172a;
          border-radius: 14px;
          padding: 20px 22px;
          color: #ffffff;
        }

        .nx-mission-banner-card blockquote {
          font-size: 13px;
          line-height: 1.5;
          margin: 0 0 8px;
          color: #e21b22;
          font-style: italic;
        }

        .nx-mission-sign {
          font-size: 11px;
          color: #ff5a1f;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        /* Right Column: Clean Form */
        .nx-form-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 28px 26px;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
          transform: translateZ(0);
        }

        .nx-form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }

        .nx-input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 14px;
        }

        .nx-input-group label {
          font-size: 11px;
          font-weight: 800;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        .nx-input-control {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 13.5px;
          color: #0f172a;
          box-sizing: border-box;
          outline: none;
          font-family: inherit;
          background: #ffffff;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .nx-input-control:focus {
          border-color: #e21b22;
          box-shadow: 0 0 0 3px rgba(226, 27, 34, 0.1);
        }

        .nx-submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #e21b22 0%, #b91c1c 100%);
          color: #ffffff;
          border: none;
          padding: 13px;
          border-radius: 10px;
          font-size: 13.5px;
          font-weight: 750;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 14px rgba(226, 27, 34, 0.3);
          transition: all 0.2s ease;
          margin-top: 4px;
        }

        .nx-submit-btn:hover {
          background: #dc2626;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(226, 27, 34, 0.4);
        }

        .nx-success-box {
          text-align: center;
          padding: 36px 16px;
        }

        .nx-success-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #f0fdf4;
          border: 2px solid #22c55e;
          color: #16a34a;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
        }

        .nx-success-title {
          font-size: 19px;
          font-weight: 850;
          color: #0b0f19;
          margin: 0 0 6px;
        }

        .nx-success-desc {
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
          margin: 0 0 18px;
        }

        /* ---------------- Responsive ---------------- */
        @media (max-width: 960px) {
          .nx-contact-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }

        @media (max-width: 600px) {
          .nx-contact-root {
            padding: 55px 16px 60px;
          }
          .nx-form-row-2 {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}</style>

      {/* Ambient Radial Gradient Mesh */}
      <div className="nx-contact-ambient-glow" />

      <div className="nx-contact-container">
        {/* =====================================================================
            1. HEADER BLOCK (Scroll Up/Down BlurReveal)
            ===================================================================== */}
        <div className="nx-contact-head">
          <motion.div
            className="nx-contact-bracket"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
           
          </motion.div>

          <h2 className="nx-contact-title">
            <BlurReveal as="span" className="nx-dark-line" delay={0.04}>
              Book a Technical Site Inspection.
            </BlurReveal>

            <motion.span
              className="nx-dim-gradient"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              Proof on Your Substrate Before Commitment.
            </motion.span>
          </h2>

          <BlurReveal as="p" className="nx-contact-lead" delay={0.16}>
            Have an active leak, cracking AAC wall, or new project? Tell us what you are building. Certified FTR engineers will visit your site, inspect moisture levels, and install a free live sample patch.
          </BlurReveal>
        </div>

        {/* =====================================================================
            2. TWO-COLUMN GRID (Scroll Up/Down Animated)
            ===================================================================== */}
        <div className="nx-contact-grid">
          {/* Left Column: Info Cards */}
          <motion.div
            className="nx-contact-info-col"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            

            <div className="nx-contact-nodes">
              <div className="nx-cnode-item">
                <div className="nx-cnode-icon">📍</div>
                <div className="nx-cnode-text">
                  <h4>Headquarters</h4>
                  <p>FTR Solutions Pvt. Ltd.<br />New Delhi, India</p>
                </div>
              </div>

              <div className="nx-cnode-item">
                <div className="nx-cnode-icon">✉️</div>
                <div className="nx-cnode-text">
                  <h4>Technical Inquiries</h4>
                  <p>info@ftr.co.in &bull; sales@ftr.co.in<br />www.ftr.co.in</p>
                </div>
              </div>

              <div className="nx-cnode-item">
                <div className="nx-cnode-icon">🧪</div>
                <div className="nx-cnode-text">
                  <h4>Free On-Site Mockup Standard</h4>
                  <p>Zero-cost live test patch applied directly on your problem substrate before quoting.</p>
                </div>
              </div>
            </div>

            
          </motion.div>

          {/* Right Column: Clean Form (Zero Personal Names in Placeholders) */}
          <motion.div
            className="nx-form-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            {submitted ? (
              <div className="nx-success-box">
                <div className="nx-success-icon">✓</div>
                <h3 className="nx-success-title">Site Inspection Request Logged</h3>
                <p className="nx-success-desc">
                  Thank you. An FTR certified Technical Sales Engineer will contact you within 2 hours to confirm your site visit.
                </p>
                <button
                  type="button"
                  className="nx-submit-btn"
                  style={{ maxWidth: '220px', margin: '0 auto' }}
                  onClick={() => setSubmitted(false)}
                >
                  Book Another Site
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="nx-form-row-2">
                  <div className="nx-input-group" style={{ marginBottom: 0 }}>
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="nx-input-control"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="nx-input-group" style={{ marginBottom: 0 }}>
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter phone number"
                      className="nx-input-control"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="nx-input-group">
                  <label>Project Site Location *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter project city or site location"
                    className="nx-input-control"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>

                <div className="nx-form-row-2">
                  <div className="nx-input-group" style={{ marginBottom: 0 }}>
                    <label>Structural Problem *</label>
                    <select
                      className="nx-input-control"
                      value={formData.issue}
                      onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                    >
                      <option value="seepage">Terrace & Slab Seepage (NOSEEP®)</option>
                      <option value="blockbond">AAC Block Joint Cracking (Block Bond®)</option>
                      <option value="rust">Rebar Rust & Spall (NORUST®)</option>
                      <option value="putty">Interior Hairline Paint Cracks (ERP® Putty)</option>
                      <option value="plaster">Deep Plaster Fissures (ERP® Plaster Fiber)</option>
                    </select>
                  </div>

                  <div className="nx-input-group" style={{ marginBottom: 0 }}>
                    <label>Structure Type *</label>
                    <select
                      className="nx-input-control"
                      value={formData.structureType}
                      onChange={(e) => setFormData({ ...formData, structureType: e.target.value })}
                    >
                      <option value="residential">Residential High-Rise</option>
                      <option value="commercial">Commercial Tower / Mall</option>
                      <option value="infra">Infrastructure / Bridge</option>
                      <option value="industrial">Industrial Facility / Warehouse</option>
                    </select>
                  </div>
                </div>

                <div className="nx-input-group">
                  <label>Project Notes (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Brief details about the project area or substrate condition..."
                    className="nx-input-control"
                    style={{ resize: 'vertical' }}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <button type="submit" className="nx-submit-btn">
                  <span>Schedule Free On-Site Diagnosis</span>
                  <span>&rarr;</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}