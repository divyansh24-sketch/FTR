'use client';

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  memo,
} from 'react';
import { motion } from 'framer-motion';

// -------------------------------------------------------------
// 1. ZERO-LAG GPU-ACCELERATED TEXT REVEAL (120FPS Compositor Mode)
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

// -------------------------------------------------------------
// 2. ULTRA-LIGHTWEIGHT 60FPS COUNTING NUMBER
// -------------------------------------------------------------
export const CountingNumber = forwardRef(
  (
    {
      from = 0,
      target = 100,
      duration = 0.9,
      className = '',
      autoStart = true,
      ...props
    },
    ref
  ) => {
    const [count, setCount] = useState(from);
    const animRef = useRef(null);

    const startAnimation = useCallback(() => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      setCount(from);

      const durationMs = duration * 1000;
      const startTime = performance.now();

      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.round(from + (target - from) * eased);

        setCount(currentVal);

        if (progress < 1) {
          animRef.current = requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };

      animRef.current = requestAnimationFrame(step);
    }, [from, target, duration]);

    useImperativeHandle(ref, () => ({
      startAnimation,
    }));

    useEffect(() => {
      if (autoStart) {
        startAnimation();
      }
      return () => {
        if (animRef.current) cancelAnimationFrame(animRef.current);
      };
    }, [autoStart, startAnimation]);

    const formatted = target < 10 && count < 10 ? `0${count}` : count.toLocaleString();

    return (
      <span
        className={className}
        style={{
          fontVariantNumeric: 'tabular-nums',
          transform: 'translateZ(0)',
        }}
        {...props}
      >
        {formatted}
      </span>
    );
  }
);

CountingNumber.displayName = 'CountingNumber';

// -------------------------------------------------------------
// 3. FTR PLAYBOOK & STATS (100% LAG-FREE & ZERO JANK)
// -------------------------------------------------------------
const STATS_DATA = [
  { target: 100, suffix: '%', label: 'Leak-Proof Warranty' },
  { target: 50, suffix: 'M+', label: 'Sq. Ft. Protected' },
  { target: 25, suffix: '+', label: 'Years Structural Longevity' },
  { target: 5, suffix: '+', label: 'Engineered Systems' },
];

export default function FtrPlaybookHeaderStats() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Zero-overhead observer without window scroll lag
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="nx-playbook-root" id="stats-section">
      <style>{`
        /* ---------------- Root Container ---------------- */
        .nx-playbook-root {
          width: 100%;
          background: #ffffff;
          color: #0f172a;
          padding: 85px 24px 65px;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;
          position: relative;
          overflow: hidden;
          contain: paint;
        }

        /* ---------------- Behind Content Ambient Linear Gradient ---------------- */
        .nx-ambient-backdrop-grad {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%) translateZ(0);
          width: 1000px;
          height: 420px;
          background: radial-gradient(
            ellipse at center,
            rgba(226, 27, 34, 0.07) 0%,
            rgba(241, 245, 249, 0.45) 45%,
            rgba(255, 255, 255, 0) 70%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(28px);
        }

        .nx-playbook-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ---------------- Header Block & Behind-Text Glow ---------------- */
        .nx-head-block {
          margin-bottom: 48px;
          position: relative;
        }

        /* Linear gradient directly behind the text */
        .nx-text-behind-glow {
          position: absolute;
          top: 10%;
          left: -10px;
          width: 70%;
          height: 85%;
          background: linear-gradient(
            115deg,
            rgba(226, 27, 34, 0.05) 0%,
            rgba(15, 23, 42, 0.03) 40%,
            rgba(241, 245, 249, 0.6) 70%,
            transparent 100%
          );
          border-radius: 24px;
          filter: blur(20px);
          pointer-events: none;
          z-index: -1;
          transform: translateZ(0);
        }

        .nx-bracket-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.6px;
          color: #94a3b8;
          margin-bottom: 16px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        }

        .nx-bracket-tag span.nx-highlight {
          color: #e21b22;
          font-weight: 800;
        }

        .nx-main-title {
          font-size: clamp(44px, 5.8vw, 76px);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.04em;
          margin: 0 0 20px;
          max-width: 960px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .nx-dark-line {
          color: #0b0f19;
          font-weight: 900;
          letter-spacing: -0.04em;
          display: block;
        }

        /* Signature Multi-Color Flowing Linear Gradient */
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

        .nx-lead-text {
          font-size: clamp(16px, 1.8vw, 19.5px);
          color: #475569;
          line-height: 1.6;
          max-width: 740px;
          margin: 0;
          position: relative;
        }

        /* ---------------- Metrics Grid ---------------- */
        .nx-metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
          padding: 36px 0;
          box-sizing: border-box;
          position: relative;
          background: linear-gradient(
            180deg,
            rgba(248, 250, 252, 0.4) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        .nx-metric-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateZ(0);
        }

        .nx-metric-col:hover {
          transform: translateY(-3px) translateZ(0);
        }

        .nx-metric-num {
          font-size: clamp(38px, 4.3vw, 54px);
          font-weight: 900;
          color: #0b0f19;
          line-height: 1;
          letter-spacing: -0.035em;
          display: flex;
          align-items: baseline;
          gap: 2px;
          font-variant-numeric: tabular-nums;
        }

        .nx-metric-num .nx-accent {
          color: #e21b22;
          font-weight: 850;
          font-size: 0.75em;
        }

        .nx-metric-lbl {
          font-size: 14.5px;
          color: #64748b;
          font-weight: 600;
          letter-spacing: -0.01em;
          margin-top: 2px;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .nx-metrics-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px 24px;
          }
        }

        @media (max-width: 600px) {
          .nx-playbook-root {
            padding: 50px 16px 40px;
          }
          .nx-metrics-grid {
            grid-template-columns: 1fr 1fr;
            gap: 22px 18px;
            padding: 24px 0;
          }
          .nx-head-block {
            margin-bottom: 35px;
          }
        }
      `}</style>

      {/* 1. Behind-Content Ambient Linear Gradient */}
      <div className="nx-ambient-backdrop-grad" />

      <div className="nx-playbook-inner">
        {/* Header Block with Behind-Text Linear Gradient */}
        <div className="nx-head-block">
          <div className="nx-text-behind-glow" />

          {/* Bracket Tag */}
          <motion.div
            className="nx-bracket-tag"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
           
          </motion.div>

          {/* Heading with 60FPS Word-Level BlurReveal & Flowing Gradient */}
          <h2 className="nx-main-title">
            <BlurReveal as="span" className="nx-dark-line" delay={0.04}>
              Built with Intention.
            </BlurReveal>

            <motion.span
              className="nx-dim-gradient"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              Engineered to Last.
            </motion.span>
          </h2>

          {/* Lead Text */}
          <BlurReveal as="p" className="nx-lead-text" delay={0.16}>
            From initial site diagnosis to multi-layer polymer barriers, we eliminate guesswork and deliver permanent, certified structural protection.
          </BlurReveal>
        </div>

        {/* 4 Metrics Row (High Refresh Rate, Zero Stutter) */}
        <div className="nx-metrics-grid">
          {STATS_DATA.map((item, idx) => (
            <motion.div
              key={item.label}
              className="nx-metric-col"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.32,
                ease: [0.22, 1, 0.36, 1],
                delay: idx * 0.05,
              }}
            >
              <span className="nx-metric-num">
                <CountingNumber
                  target={item.target}
                  duration={0.85 + idx * 0.08}
                  autoStart={isInView}
                />
                <span className="nx-accent">{item.suffix}</span>
              </span>

              <span className="nx-metric-lbl">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}