import React from 'react';
import { Award, BadgeCheck, FileText, Calendar } from 'lucide-react';
import generativeAiCertImg from '../components/images/Generative AI Certificate.png';
import aiPractitionerCertImg from '../components/images/AI Practitioner Certificate.png';
import supervisedMlCertImg from '../components/images/Supervised ML Certificate.png';

/* ─── Certificate Data ─── */
const certificates = [
  {
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI · Stanford',
    date: 'Jul 2026',
    description:
      'Stanford & DeepLearning.AI course taught by Andrew Ng, covering supervised learning fundamentals — building linear and logistic regression models, gradient descent, and applying regression and classification techniques with NumPy and scikit-learn.',
    skills: ['Machine Learning', 'Regression', 'Classification', 'Gradient Descent', 'scikit-learn'],
    verify: 'https://coursera.org/verify/UOFG0DWLETJ3',
    certificate: '/certificates/supervised-ml-deeplearning-stanford.pdf',
    image: supervisedMlCertImg,
  },
  {
    title: 'Generative AI Essentials: Using LLMs to Work with Data',
    issuer: 'IBM SkillsBuild',
    date: 'Jul 2026',
    description:
      'Covers core generative AI concepts and practical techniques for using large language models to analyze, transform, and work with data.',
    skills: ['Generative AI', 'LLMs', 'Data Analysis', 'Prompt Engineering'],
    verify: 'https://www.credly.com/go/ZGp0xc54',
    certificate: '/certificates/generative-ai-essentials-ibm-skillsbuild.pdf',
    image: generativeAiCertImg,
  },
  {
    title: 'AI Practitioner: Ready to use AI',
    issuer: 'IBM SkillsBuild',
    date: 'Jul 2026',
    credentialId: 'PLAN-BA0D92BE45DD',
    description:
      'Foundational AI practitioner program covering AI concepts, real-world applications, and responsible use of AI tools in practice.',
    skills: ['Artificial Intelligence', 'AI Applications', 'Responsible AI'],
    certificate: '/certificates/ai-practitioner-ibm-skillsbuild.pdf',
    image: aiPractitionerCertImg,
  },
];

/* ─── Certificates Component ─── */
const Certificates = () => {
  return (
    <section
      id="certificates"
      className="relative py-20 sm:py-24 px-4 sm:px-6 overflow-hidden section-shell"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <header className="text-center mb-16 md:mb-20" data-aos="fade-down">
          <span
            className="inline-flex px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5"
            style={{
              background: 'var(--bg-tertiary)',
              color: 'var(--accent-color)',
              border: '1px solid var(--border-color)',
            }}
          >
            Credentials
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Certificates &amp;{' '}
            <span style={{ color: 'var(--accent-color)' }}>
              Badges
            </span>
          </h2>
          <p
            className="max-w-2xl mx-auto mt-5 text-base md:text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Verified professional certifications that back up my skills  each one can be independently verified through the issuing organization.
          </p>
        </header>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <article
              key={cert.title}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="group relative rounded-2xl border flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--border-color)',
                boxShadow: '0 12px 40px -16px var(--shadow-color)',
              }}
            >
              <div className="absolute top-0 left-0 w-full h-[3px] z-10" style={{ background: 'var(--accent-color)' }} />

              {/* Certificate preview  full-bleed, natural aspect ratio (no side gaps, no cropping) */}
              <div className="relative overflow-hidden shrink-0" style={{ background: '#ffffff' }}>
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* Issuer badge */}
                <span
                  className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 text-[11px] px-3 py-1 rounded-full font-semibold tracking-wide uppercase backdrop-blur-sm"
                  style={{
                    background: 'var(--card-bg)',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <Award size={12} style={{ color: 'var(--accent-color)' }} />
                  {cert.issuer}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {cert.title}
                </h3>

                <div
                  className="flex items-center gap-2 text-xs font-medium mb-3"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <Calendar size={13} style={{ color: 'var(--accent-color)' }} />
                  Issued {cert.date}
                  {cert.credentialId && (
                    <span className="truncate">| ID: {cert.credentialId}</span>
                  )}
                </div>

                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {cert.description}
                </p>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {cert.skills.map((skill) => (
                    <span
                      key={`${cert.title}-${skill}`}
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                  {cert.verify && (
                    <a
                      href={cert.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:brightness-110"
                      style={{ background: 'var(--accent-color)' }}
                    >
                      <BadgeCheck size={15} /> Verify
                    </a>
                  )}
                  <a
                    href={cert.certificate}
                    target="_blank"
                    rel=