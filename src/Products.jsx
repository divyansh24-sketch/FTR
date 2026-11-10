'use client';

import React, { useState, useMemo } from 'react';

// -------------------------------------------------------------------------
// 1. COMPREHENSIVE 5 PRODUCTS DATA
// -------------------------------------------------------------------------
const PRODUCTS_DATA = [
  {
    id: 'noseep',
    name: 'FTR NOSEEP® 1',
    subtitle: 'Acrylic Elastomeric Membrane',
    categoryKey: 'waterproofing',
    categoryName: 'Waterproofing',
    badge: '100% Water Impermeable',
    themeColor: '#0284c7',
    themeBg: 'rgba(2, 132, 199, 0.08)',
    themeBorder: 'rgba(2, 132, 199, 0.22)',
    image: '/assets/ftr/b.png',
    tagline: 'High-performance elastomeric liquid membrane creating an impenetrable barrier against persistent seepage and dampness.',
    features: [
      'Zero Seepage & Hydrostatic Pressure Defense',
      '300%+ High Tensile Elasticity & Crack Bridging',
      'Extreme UV, Carbonation & Severe Weather Shield',
      'Breathable, Non-Toxic, & Eco-Friendly Formulation',
    ],
    idealFor: ['Terrace & Roof Slabs', 'Sunken Slabs & Bathrooms', 'Basements & Retaining Walls', 'Overhead Water Tanks'],
    packaging: ['1 Liter', '4 Liters', '10 Liters', '20 Liters'],
    specs: {
      form: 'Thick Viscous Liquid Emulsion',
      elongation: '> 300% at Break',
      solidContent: '65 ± 2%',
      coverage: '18 – 22 sq. ft. per liter (in 2 coats)',
      recoatTime: '4 – 6 hours at 30°C',
      shelfLife: '24 Months in Original Sealed Pack',
    },
  },
  {
    id: 'blockbond',
    name: 'FTR Block Bond®',
    subtitle: 'Polymerized Adhesive Mortar',
    categoryKey: 'adhesives',
    categoryName: 'Adhesives',
    badge: 'Zero Joint Cracking',
    themeColor: '#e21b22',
    themeBg: 'rgba(226, 27, 34, 0.08)',
    themeBorder: 'rgba(226, 27, 34, 0.22)',
    image: '/assets/ftr/w.png',
    tagline: 'Pre-mixed, polymer-fortified thin-bed bonding adhesive engineered for superior tensile joint strength and crack-free masonry.',
    features: [
      'High Tensile & Shear Bond Strength',
      'Zero Joint Cracking Even Under Seismic Stress',
      '3mm Thin-Bed Application Saves Mortar & Cost',
      'Self-Curing Formula (No Water Curing Needed)',
    ],
    idealFor: ['AAC Blocks', 'Concrete Masonry Units (CMU)', 'Fly Ash Bricks', 'Joint Repair & Leveling'],
    packaging: ['20 kg Pails', '40 kg Moisture-Proof Bags'],
    specs: {
      form: 'Dry Powder (Grey / White)',
      bedThickness: '3 – 4 mm',
      tensileBond: '> 0.8 MPa at 28 Days',
      coverage: '120 – 140 sq. ft. per 40kg bag (3mm)',
      potLife: '90 – 120 minutes after mixing',
      shelfLife: '12 Months in Cool Dry Place',
    },
  },
  {
    id: 'norust',
    name: 'FTR NORUST®',
    subtitle: 'Advanced Rust Protection',
    categoryKey: 'rust',
    categoryName: 'Rust Defense',
    badge: 'Converts Rust to Iron',
    themeColor: '#f59e0b',
    themeBg: 'rgba(245, 158, 11, 0.08)',
    themeBorder: 'rgba(245, 158, 11, 0.22)',
    image: '/assets/ftr/y.png',
    tagline: 'Active chemical rust converter that transforms destructive iron oxides into an impervious, permanently stable organo-metallic iron shield.',
    features: [
      'Chemical Rust Converter (No Sandblasting Required)',
      'Passivates Steel & Stops Micro-Corrosion Cells',
      'Forms Moisture & Chemical Resistant Barrier',
      'Can Be Overcoated with Paints or Epoxies',
    ],
    idealFor: ['TMT Rebars in Concrete Structures', 'Structural Steel Framing & Trusses', 'Industrial Pipelines & Tanks', 'Metal Sheds'],
    packaging: ['500 ml', '1 Liter', '5 Liters', '20 Liters Metal Cans'],
    specs: {
      form: 'Amber Liquid (Turns Black on Reacting)',
      reactionTime: '30 – 45 minutes',
      ph: '1.5 – 2.0 (Active Chelating Agent)',
      coverage: '12 – 15 sq. meters per liter',
      fullCure: '24 hours for heavy duty overcoat',
      shelfLife: '36 Months in Sealed Can',
    },
  },
  {
    id: 'putty',
    name: 'FTR ERP® Putty',
    subtitle: 'Elastomeric Resurfacing Putty - Smooth',
    categoryKey: 'putty_plaster',
    categoryName: 'Putty & Plasters',
    badge: 'No Crack No Leakage',
    themeColor: '#eab308',
    themeBg: 'rgba(234, 179, 8, 0.08)',
    themeBorder: 'rgba(234, 179, 8, 0.22)',
    image: '/assets/ftr/e.png',
    tagline: 'Micro-flexible interior and exterior leveling putty designed to absorb wall vibrations and permanently eliminate hairline paint cracks.',
    features: [
      'High-Flexibility Matrix Prevents Hairline Cracks',
      'Ultra-Silky Smooth Finish for Premium Paint Coats',
      'Hydrophobic Surface Resists Dampness & Efflorescence',
      'Excellent Adhesion to Old & New Plastered Walls',
    ],
    idealFor: ['Interior & Exterior Wall Leveling', 'Hairline Plaster Crack Sealing', 'Ceilings & Pre-Cast Panels', 'High-Humidity Facades'],
    packaging: ['5 kg', '10 kg', '20 kg Airtight Buckets'],
    specs: {
      form: 'Ready-to-Apply Smooth Paste (White)',
      flexibility: 'Elastomeric Polymeric Base',
      coverage: '14 – 18 sq. ft. per kg (at 1.5mm thickness)',
      dryingTime: 'Touch dry in 2 hrs; Sandable in 6 hrs',
      fineness: '> 300 Mesh Smooth Particles',
      shelfLife: '18 Months in Sealed Bucket',
    },
  },
  {
    id: 'plaster',
    name: 'FTR ERP® Plaster',
    subtitle: 'Elastomeric Repair Plaster - Fiber',
    categoryKey: 'putty_plaster',
    categoryName: 'Putty & Plasters',
    badge: 'Fiber Reinforced Matrix',
    themeColor: '#84cc16',
    themeBg: 'rgba(132, 204, 22, 0.08)',
    themeBorder: 'rgba(132, 204, 22, 0.22)',
    image: '/assets/ftr/g.png',
    tagline: 'Heavy-duty fiber-reinforced elastomeric repair mortar formulated to bridge structural fissures and deliver an impact-resistant waterproof shell.',
    features: [
      'Interlocking Synthetic Micro-Fiber Matrix',
      'Bridges Deep Structural Cracks up to 10mm',
      'Superior Shear Adhesion & Impact Resistance',
      'Thermal Shock & Extreme Weather Resistant',
    ],
    idealFor: ['Deep Structural Wall Cracks', 'Exterior Facade Crack Restoration', 'Expansion Joint Perimeters', 'Parapet Walls & Balconies'],
    packaging: ['5 kg', '10 kg', '20 kg, 30 kg Buckets'],
    specs: {
      form: 'Fiber-Infused Thixotropic Mortar Paste',
      crackBridging: 'Up to 10mm Static / Dynamic Cracks',
      tensileStrength: '> 1.2 MPa with Poly-Fibers',
      coverage: '8 – 12 sq. ft. per kg (varies with depth)',
      initialSet: '3 hours; Full cure in 24 hours',
      shelfLife: '18 Months in Original Pail',
    },
  },
];

const CATEGORIES = [
  { key: 'all', label: 'All Products', count: 5 },
  { key: 'waterproofing', label: 'Waterproofing', count: 1 },
  { key: 'adhesives', label: 'Adhesives', count: 1 },
  { key: 'rust', label: 'Rust Defense', count: 1 },
  { key: 'putty_plaster', label: 'Putty & Plasters', count: 2 },
];

export default function ProductSection({ onContactClick }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return PRODUCTS_DATA;
    return PRODUCTS_DATA.filter((p) => p.categoryKey === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="ftr-catalog-root" id="products-catalog">
      <style>{`
        .ftr-catalog-root {
          --ftr-red: #e21b22;
          --ftr-dark: #0f172a;
          --ftr-muted: #64748b;
          --ftr-border: #e2e8f0;
          --ftr-card-bg: #ffffff;
          position: relative;
          width: 100%;
          padding: 80px 20px 95px;
          background-color: #f8fafc;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          overflow: hidden;
        }

        .ftr-catalog-ambient {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 10% 20%, rgba(226, 27, 34, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 90% 70%, rgba(2, 132, 199, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .ftr-catalog-container {
          position: relative;
          z-index: 10;
          max-width: 1360px;
          margin: 0 auto;
        }

        .ftr-catalog-header {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 40px;
        }

        .ftr-catalog-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          background: rgba(226, 27, 34, 0.08);
          border: 1px solid rgba(226, 27, 34, 0.2);
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ftr-red);
          margin-bottom: 14px;
        }

        .ftr-catalog-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--ftr-red);
        }

        .ftr-catalog-title {
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 900;
          line-height: 1.16;
          letter-spacing: -0.03em;
          color: var(--ftr-dark);
          margin: 0 0 14px;
        }

        .ftr-catalog-title span {
          background: linear-gradient(135deg, var(--ftr-red) 0%, #b91c1c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ftr-catalog-desc {
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.6;
          color: var(--ftr-muted);
          margin: 0;
        }

        .ftr-tabs-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 46px;
          flex-wrap: wrap;
        }

        .ftr-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 9999px;
          font-size: 13.5px;
          font-weight: 700;
          color: #475569;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .ftr-tab-btn:hover {
          border-color: rgba(226, 27, 34, 0.35);
          color: var(--ftr-red);
          transform: translateY(-2px);
        }

        .ftr-tab-btn.is-active {
          background: var(--ftr-dark);
          color: #ffffff;
          border-color: var(--ftr-dark);
          box-shadow: 0 6px 16px rgba(15, 23, 42, 0.18);
        }

        .ftr-tab-count {
          font-size: 11px;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: 9999px;
          background: #f1f5f9;
          color: #475569;
        }

        .ftr-tab-btn.is-active .ftr-tab-count {
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        .ftr-products-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 28px;
        }

        @media (min-width: 640px) {
          .ftr-products-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 1080px) {
          .ftr-products-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .ftr-prod-card {
          position: relative;
          background: var(--ftr-card-bg);
          border: 1px solid var(--ftr-border);
          border-radius: 22px;
          padding: 28px 24px 24px;
          display: flex;
          flex-direction: column;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
          overflow: hidden;
        }

        .ftr-prod-card:hover {
          transform: translateY(-8px);
          border-color: rgba(226, 27, 34, 0.3);
          box-shadow: 0 20px 42px -12px rgba(15, 23, 42, 0.12);
        }

        .ftr-prod-accent-strip {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3.5px;
        }

        .ftr-prod-top-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .ftr-prod-cat-pill {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 4px 10px;
          border-radius: 9999px;
        }

        .ftr-prod-badge-pill {
          font-size: 11px;
          font-weight: 700;
          color: #475569;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 3px 9px;
          border-radius: 6px;
        }

        .ftr-prod-img-stage {
          position: relative;
          width: 100%;
          height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 6px 0 16px;
          border-radius: 16px;
          background: #fbfcfe;
          overflow: hidden;
        }

        .ftr-prod-glow-circle {
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          filter: blur(28px);
          opacity: 0.55;
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        .ftr-prod-card:hover .ftr-prod-glow-circle {
          opacity: 0.85;
          transform: scale(1.15);
        }

        .ftr-prod-bucket-image {
          position: relative;
          z-index: 2;
          height: 210px;
          width: auto;
          max-width: 90%;
          object-fit: contain;
          filter: drop-shadow(0 14px 22px rgba(15, 23, 42, 0.22));
          transition: transform 0.4s ease, filter 0.4s ease;
        }

        .ftr-prod-card:hover .ftr-prod-bucket-image {
          transform: translateY(-8px) scale(1.06);
          filter: drop-shadow(0 20px 32px rgba(15, 23, 42, 0.32));
        }

        .ftr-prod-title {
          font-size: 21px;
          font-weight: 900;
          color: var(--ftr-dark);
          margin: 0 0 3px;
        }

        .ftr-prod-sub {
          font-size: 12.5px;
          font-weight: 700;
          color: var(--ftr-red);
          margin-bottom: 10px;
        }

        .ftr-prod-tagline {
          font-size: 13px;
          line-height: 1.5;
          color: var(--ftr-muted);
          margin: 0 0 16px;
        }

        .ftr-prod-features-list {
          list-style: none;
          padding: 0;
          margin: 0 0 18px;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .ftr-prod-feat-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 600;
          color: #334155;
          line-height: 1.4;
        }

        .ftr-prod-feat-bullet {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: rgba(226, 27, 34, 0.1);
          color: var(--ftr-red);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 800;
          flex-shrink: 0;
        }

        .ftr-prod-chips-wrap {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px dashed #e2e8f0;
          margin-bottom: 18px;
        }

        .ftr-prod-chips-title {
          font-size: 10.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #94a3b8;
          margin-bottom: 6px;
        }

        .ftr-prod-chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .ftr-prod-chip {
          font-size: 11px;
          font-weight: 600;
          background: #f1f5f9;
          color: #475569;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .ftr-prod-actions {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 10px;
          align-items: center;
        }

        .ftr-prod-btn-specs {
          background: var(--ftr-dark);
          color: #ffffff;
          font-size: 12.5px;
          font-weight: 700;
          padding: 10px 14px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .ftr-prod-btn-specs:hover {
          background: var(--ftr-red);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(226, 27, 34, 0.3);
        }

        .ftr-prod-btn-enquire {
          background: #ffffff;
          color: var(--ftr-dark);
          font-size: 12.5px;
          font-weight: 700;
          padding: 9px 14px;
          border-radius: 10px;
          border: 1.5px solid #cbd5e1;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .ftr-prod-btn-enquire:hover {
          border-color: var(--ftr-red);
          color: var(--ftr-red);
          background: rgba(226, 27, 34, 0.04);
        }

        .ftr-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .ftr-modal-window {
          position: relative;
          width: 100%;
          max-width: 680px;
          max-height: 90vh;
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.35);
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        .ftr-modal-close-btn {
          position: absolute;
          top: 18px; right: 18px;
          width: 36px; height: 36px;
          border-radius: 50%;
          background: #f1f5f9;
          border: none;
          font-size: 18px;
          color: #475569;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .ftr-modal-close-btn:hover {
          background: var(--ftr-red);
          color: #ffffff;
        }

        .ftr-modal-header {
          padding: 30px 30px 20px;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .ftr-modal-img {
          width: 90px;
          height: 90px;
          object-fit: contain;
          filter: drop-shadow(0 8px 14px rgba(15, 23, 42, 0.2));
        }

        .ftr-modal-title-group h3 {
          font-size: 22px;
          font-weight: 900;
          color: var(--ftr-dark);
          margin: 0 0 4px;
        }

        .ftr-modal-title-group p {
          font-size: 13.5px;
          font-weight: 700;
          color: var(--ftr-red);
          margin: 0;
        }

        .ftr-modal-body {
          padding: 24px 30px 30px;
        }

        .ftr-specs-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 24px;
        }

        .ftr-specs-table tr {
          border-bottom: 1px solid #f1f5f9;
        }

        .ftr-specs-table th {
          text-align: left;
          font-size: 12.5px;
          font-weight: 700;
          color: #64748b;
          padding: 10px 8px;
          width: 38%;
        }

        .ftr-specs-table td {
          font-size: 13px;
          font-weight: 600;
          color: #0f172a;
          padding: 10px 8px;
        }

        .ftr-modal-section-title {
          font-size: 14px;
          font-weight: 800;
          color: var(--ftr-dark);
          margin: 0 0 10px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .ftr-modal-ideal-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 24px;
        }

        .ftr-modal-ideal-chip {
          font-size: 12px;
          font-weight: 600;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #1e293b;
          padding: 5px 12px;
          border-radius: 9999px;
        }

        .ftr-modal-footer-cta {
          display: flex;
          gap: 12px;
          align-items: center;
          padding-top: 14px;
          border-top: 1px solid #f1f5f9;
        }

        .ftr-modal-action-btn {
          flex: 1;
          background: linear-gradient(135deg, var(--ftr-red) 0%, #b91c1c 100%);
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          padding: 12px 20px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          text-align: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .ftr-modal-action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(226, 27, 34, 0.4);
        }
      `}</style>

      <div className="ftr-catalog-ambient" />

      <div className="ftr-catalog-container">
        {/* HEADER */}
        <div className="ftr-catalog-header">
          <div className="ftr-catalog-badge">
            <span className="ftr-catalog-badge-dot" />
            <span>CERTIFIED PRODUCT RANGE</span>
          </div>
          <h2 className="ftr-catalog-title">
            Engineered Systems for <span>Every Structural Need</span>
          </h2>
          <p className="ftr-catalog-desc">
            Explore our specialized 5-product chemical engineering lineup designed to solve
            water seepage, masonry crack bonding, and metallic oxidation on construction sites across India.
          </p>
        </div>

        {/* CATEGORIES */}
        <div className="ftr-tabs-wrapper">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              className={`ftr-tab-btn ${selectedCategory === cat.key ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory(cat.key)}
            >
              <span>{cat.label}</span>
              <span className="ftr-tab-count">{cat.count}</span>
            </button>
          ))}
        </div>

        {/* 5 PRODUCTS GRID */}
        <div className="ftr-products-grid">
          {filteredProducts.map((prod) => (
            <div key={prod.id} className="ftr-prod-card">
              <div className="ftr-prod-accent-strip" style={{ background: prod.themeColor }} />

              <div className="ftr-prod-top-meta">
                <span
                  className="ftr-prod-cat-pill"
                  style={{
                    color: prod.themeColor,
                    background: prod.themeBg,
                    border: `1px solid ${prod.themeBorder}`,
                  }}
                >
                  {prod.categoryName}
                </span>
                <span className="ftr-prod-badge-pill">{prod.badge}</span>
              </div>

              <div className="ftr-prod-img-stage">
                <div className="ftr-prod-glow-circle" style={{ background: prod.themeColor }} />
                <img src={prod.image} alt={prod.name} className="ftr-prod-bucket-image" loading="lazy" />
              </div>

              <h3 className="ftr-prod-title">{prod.name}</h3>
              <div className="ftr-prod-sub">{prod.subtitle}</div>
              <p className="ftr-prod-tagline">{prod.tagline}</p>

              <ul className="ftr-prod-features-list">
                {prod.features.slice(0, 3).map((feat, idx) => (
                  <li key={idx} className="ftr-prod-feat-item">
                    <span className="ftr-prod-feat-bullet">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="ftr-prod-chips-wrap">
                <div className="ftr-prod-chips-title">Recommended Surfaces</div>
                <div className="ftr-prod-chips-row">
                  {prod.idealFor.slice(0, 3).map((app, i) => (
                    <span key={i} className="ftr-prod-chip">{app}</span>
                  ))}
                </div>
              </div>

              <div className="ftr-prod-actions">
                <button className="ftr-prod-btn-specs" onClick={() => setActiveModalProduct(prod)}>
                  <span>Technical Specs</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <button
                  className="ftr-prod-btn-enquire"
                  onClick={() => {
                    if (onContactClick) onContactClick(prod);
                  }}
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {activeModalProduct && (
          <div
            className="ftr-modal-backdrop"
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveModalProduct(null);
            }}
          >
            <div className="ftr-modal-window">
              <button
                className="ftr-modal-close-btn"
                onClick={() => setActiveModalProduct(null)}
                aria-label="Close Modal"
              >
                &times;
              </button>

              <div className="ftr-modal-header">
                <img src={activeModalProduct.image} alt={activeModalProduct.name} className="ftr-modal-img" />
                <div className="ftr-modal-title-group">
                  <h3>{activeModalProduct.name}</h3>
                  <p>{activeModalProduct.subtitle}</p>
                </div>
              </div>

              <div className="ftr-modal-body">
                <div className="ftr-modal-section-title">Technical Specifications (TDS)</div>
                <table className="ftr-specs-table">
                  <tbody>
                    {Object.entries(activeModalProduct.specs).map(([key, val]) => (
                      <tr key={key}>
                        <th>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</th>
                        <td>{val}</td>
                      </tr>
                    ))}
                    <tr>
                      <th>Available Packaging</th>
                      <td>{activeModalProduct.packaging.join(', ')}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="ftr-modal-section-title">Recommended Application Areas</div>
                <div className="ftr-modal-ideal-chips">
                  {activeModalProduct.idealFor.map((area, idx) => (
                    <span key={idx} className="ftr-modal-ideal-chip">
                      📍 {area}
                    </span>
                  ))}
                </div>

                <div className="ftr-modal-footer-cta">
                  <button
                    className="ftr-modal-action-btn"
                    onClick={() => {
                      alert(`Technical Data Sheet (TDS) for ${activeModalProduct.name} initiated.`);
                      setActiveModalProduct(null);
                    }}
                  >
                    Download Technical Data Sheet (PDF)
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}