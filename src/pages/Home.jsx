import React, { useEffect, useState } from 'react';
import { Github, Instagram, Mail, Phone, ExternalLink, Download } from 'lucide-react';
import mePhoto from '../components/images/MePhotoo.png';

const roles = [
  'Full Stack Developer',
  'AI Engineer',
  'Machine Learning Builder',
  'Computer Engineer',
];

const Home = () => {
  const [currentRole, setCurrentRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];
      setCurrentRole(
        isDeleting
          ? fullText.substring(0, currentRole.length - 1)
          : fullText.substring(0, currentRole.length + 1)
      );
      setTypingSpeed(isDeleting ? 50 : 150);
      if (!isDeleting && currentRole === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentRole === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, loopNum, typingSpeed]);

  const socialLinks = [
    { icon: Github,    url: 'https://github.com/sushant347',                    label: 'GitHub'    },
    { icon: Instagram, url: 'https://www.instagram.com/sushantgautam258/',      label: 'Instagram' },
    { icon: Mail,      url: 'mailto:sushantgautam98677@gmail.com',              label: 'Email'     },
    { icon: Phone,     url: 'tel:+9779869465432',                               label: 'Phone'     },
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
    const el = document.getElementById(path.substring(1));
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleDownloadCV = async () => {
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });

    /* ── Layout constants ── */
    const PAGE_W = 210;
    const PAGE_H = 297;
    const LEFT = 14;
    const RIGHT = 14;
    const CONTENT_W = PAGE_W - LEFT - RIGHT;
    const LINE = 4.2;

    /* ── Palette (matches reference template) ── */
    const NAVY = [38, 44, 56];
    const ACCENT = [166, 40, 74];
    const HEADING = [26, 26, 30];
    const BODY = [60, 62, 68];
    const MUTED = [110, 114, 122];
    const RULE = [190, 194, 200];

    let y = 0;

    const setFill = (c) => doc.setFillColor(c[0], c[1], c[2]);
    const setText = (c) => doc.setTextColor(c[0], c[1], c[2]);
    const setDraw = (c) => doc.setDrawColor(c[0], c[1], c[2]);

    const ensureSpace = (needed = 10) => {
      if (y + needed > PAGE_H - 14) {
        doc.addPage();
        y = 18;
      }
    };

    /* ── Header band ── */
    const addHeader = () => {
      setFill(NAVY);
      doc.rect(0, 0, PAGE_W, 26, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(25);
      const first = 'SUSHANT';
      const last = ' GAUTAM';
      doc.setTextColor(255, 255, 255);
      doc.text(first, LEFT, 17.5);
      const firstW = doc.getTextWidth(first);
      setText(ACCENT);
      doc.text(last, LEFT + firstW, 17.5);

      /* contact strip */
      setFill(NAVY);
      doc.rect(0, 28.5, PAGE_W, 8, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.6);
      doc.setTextColor(255, 255, 255);
      doc.text(
        'Lalitpur, Nepal  |  +977 9869465432  |  sushantgautam98677@gmail.com  |  github.com/sushant347  |  sushantgautam347.com.np',
        LEFT,
        34
      );
      doc.link(LEFT, 30, PAGE_W - LEFT * 2, 6, { url: 'https://github.com/sushant347' });

      y = 43.5;
    };

    /* ── Section heading with rule ── */
    const addHeading = (title, minContent = 14) => {
      ensureSpace(10 + minContent);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(13.5);
      setText(HEADING);
      doc.text(title, LEFT, y);
      y += 1.8;
      setDraw(RULE);
      doc.setLineWidth(0.3);
      doc.line(LEFT, y, PAGE_W - RIGHT, y);
      y += 5.4;
    };

    const addParagraph = (text, opts = {}) => {
      const size = opts.size || 9.6;
      const weight = opts.weight || 'normal';
      const color = opts.color || BODY;
      doc.setFont('helvetica', weight);
      doc.setFontSize(size);
      setText(color);
      const lines = doc.splitTextToSize(text, CONTENT_W);
      ensureSpace(lines.length * LINE + 2);
      doc.text(lines, LEFT, y);
      y += lines.length * LINE + 2;
    };

    /* ── Entry title (left) + date (right), like the job rows ── */
    const addEntry = (title, date) => {
      ensureSpace(12);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      setText(HEADING);
      doc.text(title, LEFT, y);
      if (date) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        setText(BODY);
        doc.text(date, PAGE_W - RIGHT, y, { align: 'right' });
      }
      y += 4.4;
    };

    /* ── Sub-line under an entry (org / stack) ── */
    const addSubline = (text) => {
      ensureSpace(8);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.2);
      setText(BODY);
      doc.text(text, LEFT, y);
      y += 4.6;
    };

    const addBullet = (text, opts = {}) => {
      const indent = 4.4;
      const color = opts.color || BODY;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.4);
      setText(color);
      const lines = doc.splitTextToSize(text, CONTENT_W - indent);
      ensureSpace(lines.length * LINE + 1.2);
      setFill(color);
      doc.circle(LEFT + 1.3, y - 1.1, 0.55, 'F');
      doc.text(lines, LEFT + indent, y);
      y += lines.length * LINE + 1.2;
    };

    /* ── Two-column bullet grid (skills) ── */
    const addBulletColumns = (items) => {
      const colGap = 8;
      const colW = (CONTENT_W - colGap) / 2;
      const half = Math.ceil(items.length / 2);
      const cols = [items.slice(0, half), items.slice(half)];
      const rows = Math.max(cols[0].length, cols[1].length);
      ensureSpace(rows * 5.2 + 2);
      const startY = y;
      cols.forEach((col, ci) => {
        const x = LEFT + ci * (colW + colGap);
        let cy = startY;
        col.forEach((item) => {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(9.4);
          setText(BODY);
          const lines = doc.splitTextToSize(item, colW - 4.4);
          setFill(BODY);
          doc.circle(x + 1.3, cy - 1.1, 0.55, 'F');
          doc.text(lines, x + 4.4, cy);
          cy += lines.length * LINE + 1.2;
        });
        y = Math.max(y, cy);
      });
      y += 1.5;
    };

    const addLinks = (links) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.8);
      ensureSpace(LINE + 2);
      let x = LEFT + 4.4;
      links.forEach(({ label, url }, i) => {
        setText(ACCENT);
        const text = i === links.length - 1 ? label : `${label}   •   `;
        doc.textWithLink(text, x, y, { url });
        x += doc.getTextWidth(text);
      });
      y += LINE + 1.5;
    };

    /* ══════════ CONTENT ══════════ */
    addHeader();

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    setText(ACCENT);
    doc.text('Full Stack Developer  |  AI / ML Engineer  |  Computer Engineering Student', LEFT, y);
    y += 9;

    addHeading('Professional Summary');
    addParagraph(
      'Computer Engineering student with hands-on experience building production-style full-stack applications and applied machine learning systems. Skilled in React, Django REST Framework, PostgreSQL, and Python, with practical work in NLP, recommendation engines, and cloud-based model training on Microsoft Azure. Strong foundation in data structures, API design, and clean, maintainable architecture. Seeking a Software Engineering or AI/ML internship where I can ship real features and grow fast.'
    );

    addHeading('Technical Skills');
    addBulletColumns([
      'Python, JavaScript (ES6+), SQL',
      'React.js, Tailwind CSS, HTML5, CSS3',
      'Django, Django REST Framework',
      'RESTful API Design & Integration',
      'PostgreSQL, MS SQL Server',
      'PyTorch, Scikit-learn, NLP',
      'Recommendation Systems, Model Evaluation',
      'Microsoft Azure, Azure Machine Learning',
      'Git, GitHub, Postman, Agile Workflow',
      'Data Structures & Algorithms, OOP',
    ]);

    addHeading('Projects');

    addEntry('CineMatch — Movie Recommendation System', '2026');
    addSubline('React · Django REST · PostgreSQL · Scikit-learn');
    addBullet('Built a full-stack movie recommender combining collaborative filtering with NLP-based content similarity.');
    addBullet('Designed a hybrid ranking pipeline and REST APIs serving real-time, personalized recommendations.');
    addBullet('Modelled user–item interactions in PostgreSQL and evaluated ranking quality against baseline recommenders.');
    addLinks([{ label: 'GitHub', url: 'https://github.com/sushant347/CineMatch' }]);

    addEntry('ElectroNest — Full Stack E-Commerce Platform', '2025 - 2026');
    addSubline('React · Django REST · PostgreSQL · Stripe · ML Forecasting');
    addBullet('Developed an end-to-end e-commerce platform with product search, cart, and order tracking.');
    addBullet('Integrated Stripe for secure payment processing and implemented token-based user authentication.');
    addBullet('Added ML-driven demand forecasting to support inventory and product-ranking decisions.');
    addLinks([
      { label: 'GitHub', url: 'https://github.com/sushant347/ElectroNest' },
      { label: 'Live Demo', url: 'https://electro-nest.vercel.app/' },
    ]);

    addEntry('Nepali News Summarizer — AI News Aggregation Platform', '2025');
    addSubline('React · Django REST · PostgreSQL · NLP');
    addBullet('Built a news dashboard aggregating Nepali articles from multiple sources into a unified feed.');
    addBullet('Implemented NLP summarization and sentiment analysis to surface concise summaries and topic trends.');
    addBullet('Optimised ingestion and query performance to keep the dashboard responsive at scale.');
    addLinks([{ label: 'GitHub', url: 'https://github.com/sushant347/Nepali-News-Summarizer' }]);

    addHeading('Education');
    addEntry('B.E. in Computer Engineering', '2023 - 2027 (Expected)');
    addSubline('Himalaya Engineering College — Chyasal-07, Lalitpur, Nepal');
    addBullet('Currently in 6th Semester.');
    addBullet('Relevant coursework: Data Structures & Algorithms, OOP, DBMS, Software Engineering, Operating Systems.');

    addHeading('Certifications');
    addBullet('Create Machine Learning Models in Microsoft Azure — Microsoft (Coursera), 2026');
    addBullet('Supervised Machine Learning: Regression and Classification — DeepLearning.AI & Stanford, 2026');
    addBullet('Generative AI Essentials: Using LLMs to Work with Data — IBM SkillsBuild, 2026');
    addBullet('AI Practitioner: Ready to Use AI — IBM SkillsBuild, 2026 (ID: PLAN-BA0D92BE45DD)');
    addLinks([
      { label: 'Verify Azure ML', url: 'https://coursera.org/verify/TVKJSA0LOQF7' },
      { label: 'Verify Supervised ML', url: 'https://coursera.org/verify/UOFG0DWLETJ3' },
      { label: 'Verify IBM', url: 'https://www.credly.com/go/ZGp0xc54' },
    ]);

    doc.save('Sushant_Gautam_CV.pdf');
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden lg:h-screen section-shell"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* ── MAIN CONTAINER ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 lg:h-full">
        <div className="flex flex-col lg:flex-row lg:h-full">

          {/* ══ RIGHT: PHOTO — order-1 on mobile so it appears at top ══ */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="order-1 lg:order-2 w-full lg:w-[44%] flex items-end justify-center lg:justify-end pt-10 lg:pt-0 lg:h-full relative"
          >
            <img
              src={mePhoto}
              alt="Sushant Gautam"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={580}
              height={820}
              className="relative z-10 w-auto max-w-[210px] sm:max-w-[300px] lg:max-w-none lg:h-[98%] object-contain object-bottom transition-transform duration-500 hover:scale-[1.02] select-none lg:-translate-y-3"
              style={{
                maskImage: 'linear-gradient(to bottom, black 84%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 84%, transparent 100%)',
              }}
              draggable={false}
            />
          </div>

          {/* ══ LEFT: TEXT — order-2 on mobile so it appears below photo ══ */}
          <div className="order-2 lg:order-1 w-full lg:w-[56%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left pt-3 pb-12 lg:py-0 gap-5 lg:gap-6">

            {/* Badge */}
            <div
              data-aos="fade-down"
              data-aos-delay="100"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{
                background: 'rgba(34, 197, 94, 0.12)',
                color: '#16a34a',
                border: '1px solid rgba(34, 197, 94, 0.28)',
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
              Available for Work
            </div>

            {/* Name */}
            <div data-aos="fade-right" data-aos-delay="150">
              <h1
                className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
                style={{ color: 'var(--text-primary)' }}
              >
                Sushant <span style={{ color: 'var(--accent-color)' }}>Gautam</span>
              </h1>
            </div>

            {/* Typing Role */}
            <div
              data-aos="fade-left"
              data-aos-delay="250"
              className="flex items-center justify-center lg:justify-start gap-2 text-lg sm:text-xl md:text-2xl"
            >
              <span style={{ color: 'var(--text-secondary)' }}>I&apos;m a</span>
              <span className="font-bold" style={{ color: 'var(--text-primary)' }}>
                {currentRole}
                <span
                  className="animate-blink ml-0.5 inline-block w-[3px] h-6 align-middle"
                  style={{ background: 'var(--accent-color)' }}
                />
              </span>
            </div>

            {/* Description */}
            <p
              data-aos="fade-left"
              data-aos-delay="350"
              className="text-sm sm:text-base md:text-[1.05rem] leading-[1.9] max-w-xl mx-auto lg:mx-0"
              style={{ color: 'var(--text-secondary)', textAlign: 'justify' }}
            >
              I build user-focused web applications with React, Django, and practical AI integration.
              I enjoy turning ideas into reliable, maintainable, and polished digital products.
            </p>
            <p
              data-aos="fade-left"
              data-aos-delay="400"
              className="text-sm sm:text-base md:text-[1.02rem] leading-[1.9] max-w-xl mx-auto lg:mx-0"
              style={{ color: 'var(--text-secondary)', textAlign: 'justify' }}
            >
              Based in Nepal, I focus on full stack web apps, AI-powered products, and project work that combines strong engineering with practical machine learning.
            </p>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center lg:justify-start"
            >
              <button
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center justify-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 w-full sm:w-auto"
                style={{ background: 'var(--accent-color)', boxShadow: '0 12px 26px -18px var(--shadow-color)' }}
              >
                Contact Me <ExternalLink size={16} />
              </button>
              <button
                type="button"
                onClick={handleDownloadCV}
                className="flex items-center justify-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full font-bold transition-all duration-300 hover:bg-[var(--bg-secondary)] hover:scale-105 active:scale-95 w-full sm:w-auto"
                style={{ border: '2px solid var(--border-color)', color: 'var(--text-primary)' }}
              >
                Download CV <Download size={16} />
              </button>
            </div>

            {/* Social Links */}
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target={s.url.startsWith('http') ? '_blank' : undefined}
                    rel={s.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={s.label}
                    className="social-icon-btn w-10 h-10 flex items-center justify-center rounded-full duration-300 hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .animate-blink { animation: blink 1s step-end infinite; }
        .hero-photo { filter: none; }
      `}</style>
    </section>
  );
};

export default Home;
