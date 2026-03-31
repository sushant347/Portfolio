import React, { useEffect, useState } from 'react';
import { Github, Instagram, Mail, Phone, ExternalLink, Download } from 'lucide-react';
import { jsPDF } from 'jspdf';
import mePhoto from '../components/images/mee.png';

const roles = [
  'Full Stack Developer',
  'UI/UX Designer',
  'Web Developer',
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

  const handleDownloadCV = () => {
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const pageHeight = 297;
    const left = 16;
    const right = 16;
    const maxWidth = 210 - left - right;
    const lineGap = 5;
    let y = 18;

    const ensureSpace = (requiredHeight = 10) => {
      if (y + requiredHeight > pageHeight - 16) {
        doc.addPage();
        y = 18;
      }
    };

    const addHeading = (title) => {
      ensureSpace(10);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.setTextColor(24, 24, 27);
      doc.text(title, left, y);
      y += 2;
      doc.setDrawColor(59, 130, 246);
      doc.setLineWidth(0.4);
      doc.line(left, y, 210 - right, y);
      y += 6;
    };

    const addParagraph = (text, options = {}) => {
      const fontSize = options.fontSize || 10.5;
      const weight = options.weight || 'normal';
      const color = options.color || [55, 65, 81];
      doc.setFont('helvetica', weight);
      doc.setFontSize(fontSize);
      doc.setTextColor(color[0], color[1], color[2]);
      const lines = doc.splitTextToSize(text, maxWidth);
      ensureSpace(lines.length * lineGap + 2);
      doc.text(lines, left, y);
      y += lines.length * lineGap + 2;
    };

    const addBullet = (text, options = {}) => {
      const bulletOffset = 4;
      const color = options.color || [55, 65, 81];
      const underline = options.underline || false;
      const weight = options.weight || 'normal';
      doc.setFont('helvetica', weight);
      doc.setFontSize(10.5);
      doc.setTextColor(color[0], color[1], color[2]);
      const lines = doc.splitTextToSize(text, maxWidth - bulletOffset);
      ensureSpace(lines.length * lineGap + 1);
      doc.text('-', left, y);
      const startY = y;
      doc.text(lines, left + bulletOffset, y);
      if (underline) {
        lines.forEach((line, index) => {
          const lineWidth = doc.getTextWidth(line);
          const lineY = startY + index * lineGap;
          doc.setDrawColor(color[0], color[1], color[2]);
          doc.setLineWidth(0.2);
          doc.line(left + bulletOffset, lineY + 0.8, left + bulletOffset + lineWidth, lineY + 0.8);
        });
      }
      y += lines.length * lineGap + 1;
    };

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.setTextColor(17, 24, 39);
    doc.text('Sushant Gautam', left, y);
    y += 8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10.5);
    doc.setTextColor(75, 85, 99);
    doc.text('Full Stack Developer | Computer Engineering Student', left, y);
    y += 6;
    doc.text('Kathmandu, Nepal | +977 9869465432 | sushantgautam98677@gmail.com', left, y);
    y += 6;
    doc.text('GitHub: https://github.com/sushant347', left, y);
    y += 8;

    addHeading('Professional Summary');
    addParagraph(
      'I am Sushant Gautam, a Computer Engineering student and full stack developer focused on creating reliable, user-friendly web products. I enjoy combining frontend polish with strong backend fundamentals to build solutions that are both fast and maintainable.'
    );
    addParagraph(
      'My workflow is simple: understand the real problem, design a clean architecture, and execute with attention to detail. I bring the same discipline to UI design, APIs, and machine learning projects.'
    );

    addHeading('Technical Skills');
    addBullet('Frontend: React.js, Tailwind CSS, Next.js, TypeScript, JavaScript, HTML, CSS');
    addBullet('Backend: Node.js, Django, REST APIs');
    addBullet('Database: MongoDB, PostgreSQL');
    addBullet('AI and Data: Python, PyTorch, TensorFlow, Scikit-learn');
    addBullet('Tools: Git/GitHub, Linux, Problem Solving');

    addHeading('Featured Projects');
    addParagraph('UrbanWave E-commerce', { weight: 'bold', color: [31, 41, 55] });
    addBullet('E-commerce frontend with product listing, cart flow, and checkout simulation.');
    addBullet('Stack: HTML, CSS, JavaScript');
    addBullet('GitHub: https://github.com/sushant347/Minor-demo-Project-HTML_CSS_JS-', {
      color: [37, 99, 235],
      underline: true,
    });
    addBullet('Live: https://sushant347.github.io/Minor-demo-Project-HTML_CSS_JS-/index.html', {
      color: [37, 99, 235],
      underline: true,
    });

    addParagraph('ElectroNest', { weight: 'bold', color: [31, 41, 55] });
    addBullet('Electronics e-commerce platform with product listings, cart management, and smooth checkout flow.');
    addBullet('Stack: React, JavaScript, CSS');
    addBullet('GitHub: https://github.com/sushant347/ElectroNest', {
      color: [37, 99, 235],
      underline: true,
    });
    addBullet('Live: https://electro-nest.vercel.app', {
      color: [37, 99, 235],
      underline: true,
    });

    addParagraph('CineScope Intelligence', { weight: 'bold', color: [31, 41, 55] });
    addBullet('AI-powered movie discovery platform focused on intelligent recommendations and rich exploration.');
    addBullet('Stack: React, Node.js, MongoDB, AI Recommendations');
    addBullet('GitHub: https://github.com/sushant347/CineScope-Intelligence', {
      color: [37, 99, 235],
      underline: true,
    });

    addParagraph('Space Invader Game', { weight: 'bold', color: [31, 41, 55] });
    addBullet('Arcade-style shooter featuring wave progression, score tracking, and smooth controls.');
    addBullet('Stack: Python, Pygame');
    addBullet('GitHub: https://github.com/sushant347/Space-Invadar-Game', {
      color: [37, 99, 235],
      underline: true,
    });

    addParagraph('Snake Game', { weight: 'bold', color: [31, 41, 55] });
    addBullet('Classic snake game with collision logic, increasing difficulty, and high-score tracking.');
    addBullet('Stack: Python, Pygame');
    addBullet('GitHub: https://github.com/sushant347/Snake-Game', {
      color: [37, 99, 235],
      underline: true,
    });

    addHeading('Education');
    addBullet('Bachelor-level Computer Engineering (ongoing)');

    addHeading('Languages');
    addBullet('English, Nepali');

    doc.save('Sushant_Gautam_CV.pdf');
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden lg:h-screen"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* ── BACKGROUND AMBIENCE ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
          style={{ background: 'var(--accent-color)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
          style={{ background: 'var(--text-primary)' }}
        />
      </div>

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
              width="580"
              height="820"
              className="relative z-10 w-auto max-w-[210px] sm:max-w-[300px] lg:max-w-none lg:h-[98%] object-contain object-bottom transition-transform duration-500 hover:scale-[1.02] select-none lg:-translate-y-8"
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
                background: 'var(--bg-tertiary)',
                color: 'var(--accent-color)',
                border: '1px solid var(--border-color)',
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent-color)' }} />
              Available for Work
            </div>

            {/* Name */}
            <div data-aos="fade-right" data-aos-delay="150">
              <h1
                className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
                style={{ color: 'var(--text-primary)' }}
              >
                Sushant
              </h1>
              <h1
                className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(to right, var(--accent-color), var(--accent-hover))' }}
              >
                Gautam
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
              I craft exceptional digital experiences through innovative web development and elegant design.
              Specialized in React, Django, Node.js, and modern UI technologies — turning ideas into fast,
              accessible, and visually polished products.
            </p>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="450"
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center lg:justify-start"
            >
              <button
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center justify-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 w-full sm:w-auto"
                style={{ background: 'var(--accent-color)' }}
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
              data-aos-delay="550"
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    aria-label={s.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:text-[var(--accent-color)]"
                    style={{
                      color: 'var(--text-tertiary)',
                      border: '1px solid var(--border-color)',
                      background: 'var(--bg-tertiary)',
                    }}
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
