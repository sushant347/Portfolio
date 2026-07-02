import { useRef, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Cpu,
  DraftingCompass,
  Palette,
  Cloud,
  SearchCheck,
} from "lucide-react";
import { SiOpenai, SiReact } from "react-icons/si";

const STAGES = [
  {
    id: "01",
    icon: SearchCheck,
    title: "Discover",
    tag: "Scope & requirements",
    desc: "We define the real problem, users, and constraints before any build work starts.",
    points: ["Requirements", "User flows", "Tech scoping"],
    pos: { x: 100, y: 110 },
    posM: { x: 110, y: 90 },
  },
  {
    id: "02",
    icon: Palette,
    iconColor: "#a259ff",
    title: "Design",
    tag: "Architecture & UI",
    desc: "Interface direction, system structure, and data modeling are planned together.",
    points: ["Figma", "DB schema", "API contracts"],
    pos: { x: 300, y: 60 },
    posM: { x: 190, y: 240 },
  },
  {
    id: "03",
    icon: SiReact,
    iconColor: "#4aa3c7",
    title: "Build",
    tag: "Full-stack development",
    desc: "React frontends and Django or FastAPI backends are built in reviewable increments.",
    points: ["React", "Next.js", "Django REST"],
    pos: { x: 500, y: 150 },
    posM: { x: 110, y: 390 },
  },
  {
    id: "04",
    icon: SiOpenai,
    iconColor: "#0f8b6b",
    title: "Integrate AI",
    tag: "Where it adds value",
    desc: "RAG flows, LLM features, and applied ML are added only when they improve the product.",
    points: ["LangChain", "Vector DBs", "LLM APIs"],
    pos: { x: 700, y: 60 },
    posM: { x: 190, y: 540 },
  },
  {
    id: "05",
    icon: Activity,
    title: "Test & Optimize",
    tag: "Before launch",
    desc: "Performance passes, QA checks, and Core Web Vitals work happen before shipping.",
    points: ["Lighthouse", "Load testing", "SEO audit"],
    pos: { x: 900, y: 150 },
    posM: { x: 110, y: 690 },
  },
  {
    id: "06",
    icon: Cloud,
    iconColor: "#2f99d3",
    title: "Deploy & Support",
    tag: "Ship and keep it healthy",
    desc: "CI/CD, hosting, and monitoring are set up so the app stays stable after launch.",
    points: ["Vercel", "Render", "CI/CD"],
    pos: { x: 1100, y: 110 },
    posM: { x: 190, y: 840 },
  },
];

const PATH_DESKTOP =
  "M100,110 C200,110 200,60 300,60 C400,60 400,150 500,150 C600,150 600,60 700,60 C800,60 800,150 900,150 C1000,150 1000,110 1100,110";

const PATH_MOBILE =
  "M110,90 C110,165 190,165 190,240 C190,315 110,315 110,390 C110,465 190,465 190,540 C190,615 110,615 110,690 C110,765 190,765 190,840";

function FlowPreview({ stage, inline = false }) {
  if (!stage) return null;

  const Icon = stage.icon;

  return (
    <div className={inline ? "svc-flow-preview svc-flow-preview-inline" : "svc-flow-preview"} aria-live="polite">
      <span className="svc-flow-preview-icon">
        <Icon size={30} style={{ color: stage.iconColor || "var(--accent-color)" }} />
      </span>
      <div>
        <p className="svc-flow-preview-tag">{stage.tag}</p>
        <h3 className="svc-flow-preview-title">{stage.title}</h3>
        <p className="svc-flow-preview-desc">{stage.desc}</p>
        <div className="svc-flow-preview-stack" aria-label={`${stage.title} tools`}>
          {stage.points.map((point) => (
            <span key={point} className="svc-chip">
              {point}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function FlowDiagram({ activeIndex, setActiveIndex, variant, showPreview = true }) {
  const isMobile = variant === "mobile";
  const width = isMobile ? 300 : 1200;
  const height = isMobile ? 900 : 220;
  const path = isMobile ? PATH_MOBILE : PATH_DESKTOP;
  const pathId = isMobile ? "flowPathMobile" : "flowPathDesktop";
  const activeStage = activeIndex === null ? null : STAGES[activeIndex];

  return (
    <div className={`flow-wrap flow-${variant}`} style={{ aspectRatio: `${width} / ${height}` }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="flow-svg"
        aria-hidden="true"
      >
        <defs>
          <filter id={`nodeGlow-${variant}`} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path id={pathId} d={path} fill="none" stroke="var(--border-color)" strokeWidth="2" />
        <path
          d={path}
          fill="none"
          stroke="var(--accent-color)"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="flow-dash flow-dash-a"
        />
        <path
          d={path}
          fill="none"
          stroke="var(--accent-color)"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="flow-dash flow-dash-b"
        />

        <circle r="5.5" fill="var(--accent-color)" filter={`url(#nodeGlow-${variant})`}>
          <animateMotion dur="6.5s" repeatCount="indefinite" rotate="auto">
            <mpath href={`#${pathId}`} />
          </animateMotion>
        </circle>
      </svg>

      {STAGES.map((stage, index) => {
        const point = isMobile ? stage.posM : stage.pos;
        const Icon = stage.icon;
        const active = activeIndex === index;

        return (
          <button
            key={stage.id}
            type="button"
            className={`flow-node${active ? " is-active" : ""}`}
            style={{ left: `${(point.x / width) * 100}%`, top: `${(point.y / height) * 100}%` }}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onFocus={() => setActiveIndex(index)}
            onBlur={() => setActiveIndex(null)}
            onClick={() => setActiveIndex(index)}
            aria-label={`Highlight ${stage.title}`}
          >
            <span className="flow-node-icon">
              <Icon size={30} style={{ color: stage.iconColor || "var(--accent-color)" }} />
            </span>
            <span className="flow-node-label">
              <span className="flow-node-id">{stage.id}</span>
              {stage.title}
            </span>
          </button>
        );
      })}

      {showPreview ? <FlowPreview stage={activeStage} /> : null}
    </div>
  );
}

function MagneticButton({ children, href = "#contact" }) {
  const ref = useRef(null);

  const handleMove = (event) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    element.style.setProperty("--tx", `${x * 0.24}px`);
    element.style.setProperty("--ty", `${y * 0.24}px`);
  };

  const handleLeave = () => {
    ref.current?.style.setProperty("--tx", "0px");
    ref.current?.style.setProperty("--ty", "0px");
  };

  return (
    <a ref={ref} href={href} className="svc-cta-btn" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {children}
    </a>
  );
}

export default function Services() {
  const [flowActiveIndex, setFlowActiveIndex] = useState(null);

  return (
    <section id="services" className="svc-section section-shell">
      <style>{`
        .svc-section {
          position: relative;
          background: var(--bg-primary);
          color: var(--text-primary);
          padding: 5rem 1rem 5.25rem;
          overflow: hidden;
        }

        .svc-inner {
          position: relative;
          z-index: 1;
          max-width: 80rem;
          margin: 0 auto;
        }

        .svc-header {
          text-align: center;
          margin-bottom: 1rem;
        }

        .svc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.38rem 1rem;
          border-radius: 999px;
          border: 1px solid var(--border-color);
          background: var(--bg-tertiary);
          color: var(--accent-color);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .svc-heading {
          margin: 1.35rem auto 1rem;
          max-width: 820px;
          color: var(--text-primary);
          font-size: 3rem;
          line-height: 1.15;
          font-weight: 800;
        }

        .svc-heading em {
          font-style: normal;
          color: var(--accent-color);
        }

        .svc-sub {
          max-width: 650px;
          margin: 0 auto;
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.75;
        }

        .svc-flow-preview {
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 4;
          width: min(520px, 90%);
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.1rem;
          border: 1px solid var(--border-color);
          border-radius: 1rem;
          background: var(--card-bg);
          box-shadow: 0 16px 40px -24px var(--shadow-color);
          border-color: var(--accent-color);
          pointer-events: none;
          transform: translate(-50%, -50%);
        }

        .svc-flow-preview-inline {
          position: static;
          left: auto;
          top: auto;
          width: 100%;
          margin-top: 1rem;
          transform: none;
          pointer-events: auto;
        }

        .svc-flow-preview-icon {
          width: 50px;
          height: 50px;
          border-radius: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          background: linear-gradient(180deg, var(--bg-tertiary), var(--card-bg));
          border: 1px solid var(--border-color);
          box-shadow: 0 10px 24px -20px var(--shadow-color);
        }

        [data-theme="dark"] .svc-flow-preview-icon {
          background: rgba(255, 255, 255, 0.08);
          border-color: #ffffff;
          box-shadow: 0 12px 28px -22px rgba(0, 0, 0, 0.85);
        }

        .svc-flow-preview-tag {
          margin: 0 0 0.15rem;
          color: var(--text-tertiary);
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .svc-flow-preview-title {
          margin: 0 0 0.3rem;
          color: var(--text-primary);
          font-size: 1.35rem;
          line-height: 1.25;
        }

        .svc-flow-preview-desc {
          margin: 0;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.65;
        }

        .svc-flow-preview-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: 0.8rem;
        }

        .flow-wrap {
          position: relative;
          width: 100%;
          margin: 0 0 2.1rem;
          isolation: isolate;
        }

        .flow-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
          z-index: 1;
        }

        .flow-dash {
          stroke-dasharray: 8 9;
          animation: flowDash 2.2s linear infinite;
        }

        .flow-dash-a {
          transform: translateY(-6px);
        }

        .flow-dash-b {
          transform: translateY(6px);
          animation-direction: reverse;
        }

        .flow-mobile .flow-dash-a {
          transform: translateX(-6px);
        }

        .flow-mobile .flow-dash-b {
          transform: translateX(6px);
        }

        @keyframes flowDash {
          to { stroke-dashoffset: -180; }
        }

        .flow-node {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.42rem;
          padding: 0.4rem;
          border: 0;
          background: transparent;
          color: var(--text-secondary);
          cursor: pointer;
          font: inherit;
        }

        .flow-node-icon {
          width: 68px;
          height: 68px;
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--border-color);
          background: var(--card-bg);
          box-shadow:
            0 12px 26px -22px var(--shadow-color);
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s ease, box-shadow 0.25s ease;
        }

        [data-theme="dark"] .flow-node-icon {
          background: #ffffff;
          border-color: rgba(255, 255, 255, 0.9);
          box-shadow: 0 14px 30px -24px rgba(0, 0, 0, 0.85);
        }

        .flow-node-label {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          white-space: nowrap;
          font-size: 0.82rem;
          font-weight: 700;
          opacity: 0;
          transform: translateY(-6px);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .flow-node-id {
          color: var(--accent-color);
        }

        .flow-node:hover .flow-node-icon,
        .flow-node:focus-visible .flow-node-icon,
        .flow-node.is-active .flow-node-icon {
          transform: translateY(-1px) scale(1.06);
          border-color: var(--accent-color);
          box-shadow: 0 16px 34px -24px var(--shadow-color);
        }

        [data-theme="dark"] .flow-node:hover .flow-node-icon,
        [data-theme="dark"] .flow-node:focus-visible .flow-node-icon,
        [data-theme="dark"] .flow-node.is-active .flow-node-icon {
          box-shadow: 0 18px 36px -26px rgba(0, 0, 0, 0.9);
        }

        .flow-node:hover .flow-node-label,
        .flow-node:focus-visible .flow-node-label,
        .flow-node.is-active .flow-node-label {
          opacity: 1;
          transform: translateY(0);
        }

        .flow-node:focus-visible {
          outline: none;
        }

        .flow-desktop {
          display: block;
        }

        .flow-mobile {
          display: none;
        }

        .svc-chip {
          padding: 0.3rem 0.55rem;
          border-radius: 999px;
          border: 1px solid var(--border-color);
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          font-size: 0.67rem;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.03em;
        }

        .svc-cta {
          margin-top: 3.4rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.45rem 1.45rem;
          border-radius: 1rem;
          border: 1px solid var(--border-color);
          background: var(--card-bg);
          box-shadow: 0 10px 30px -18px var(--shadow-color);
        }

        .svc-cta-left {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .svc-cta-prompt {
          font-size: 0.78rem;
          font-family: 'JetBrains Mono', monospace;
          color: var(--accent-color);
          letter-spacing: 0.06em;
        }

        .caret {
          display: inline-block;
          width: 8px;
          height: 1em;
          margin-left: 4px;
          background: var(--accent-color);
          vertical-align: text-bottom;
          animation: blink 1.1s step-end infinite;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        .svc-cta-text {
          color: var(--text-primary);
          font-size: 1.12rem;
          font-weight: 700;
          letter-spacing: 0;
        }

        .svc-cta-btn {
          --tx: 0px;
          --ty: 0px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.2rem;
          border-radius: 999px;
          background: var(--accent-color);
          color: #fff;
          text-decoration: none;
          font-size: 0.84rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          transform: translate(var(--tx), var(--ty));
          transition: transform 0.15s ease-out, background 0.2s ease;
          white-space: nowrap;
        }

        .svc-cta-btn:hover {
          background: var(--accent-hover);
          filter: none;
        }

        @media (max-width: 720px) {
          .svc-section {
            padding: 5.25rem 1rem 5.25rem;
          }

          .svc-heading {
            font-size: 2.25rem;
          }

          .flow-desktop {
            display: none;
          }

          .flow-mobile {
            display: block;
            max-width: 300px;
            margin: 0 auto 2.1rem;
          }

          .flow-mobile .flow-node {
            gap: 0.42rem;
          }

          .flow-mobile .flow-node-icon {
            width: 60px;
            height: 60px;
          }

          .flow-mobile .flow-node-label {
            max-width: 110px;
            white-space: normal;
            text-align: center;
            line-height: 1.1;
            font-size: 0.7rem;
            padding: 0.18rem 0.5rem;
            border-radius: 999px;
            background: var(--bg-primary);
            box-shadow: 0 6px 16px -14px var(--shadow-color);
          }

          .svc-cta {
            padding: 1.15rem 1.1rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .flow-dash,
          .svc-cta-btn,
          .caret,
          .flow-node-icon,
          .flow-node-label,
          .svc-flow-preview {
            animation: none !important;
            transition: none !important;
          }
        }

        @media (hover: none) {
          .flow-node-label {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <div className="svc-inner">
        <div className="svc-header" data-aos="fade-down">
          <h2 className="mt-5 text-4xl md:text-6xl font-bold" style={{ color: 'var(--text-primary)' }}>
            
            <span style={{ color: 'var(--accent-color)' }}>
              Services
            </span>
          </h2>

          <h2 className="svc-heading">
            From <em>idea</em> to production, one clear pipeline.
          </h2>

          
        </div>
        <FlowDiagram activeIndex={flowActiveIndex} setActiveIndex={setFlowActiveIndex} variant="desktop" />
        <FlowDiagram activeIndex={flowActiveIndex} setActiveIndex={setFlowActiveIndex} variant="mobile" />
        <div className="svc-cta">
          <div className="svc-cta-left">
            <span className="svc-cta-prompt">
              $ start_project<span className="caret" />
            </span>
            <span className="svc-cta-text">Got something to build?</span>
          </div>

          <MagneticButton>
            Get in touch
            <ArrowUpRight size={16} />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
