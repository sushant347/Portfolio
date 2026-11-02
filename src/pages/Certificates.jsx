import React, { useState } from 'react';
import { Award, BadgeCheck, FileText, Calendar, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import generativeAiCertImg from '../components/images/Generative AI Certificate.png';
import aiPractitionerCertImg from '../components/images/AI Practitioner Certificate.png';
import supervisedMlCertImg from '../components/images/Supervised ML Certificate.png';
import azureMlCertImg from '../components/images/Microsoft Azure ML Certificate.png';
import ragAiCertImg from '../components/images/Fundamentals of AI Agents RAG Certificate.png';
import advancedAlgorithmsCertImg from '../components/images/Advanced Learning Algorithms Certificate.png';

/* ─── Certificate Data ─── */
const certificates = [
  {
    title: 'Fundamentals of AI Agents Using RAG and LangChain',
    issuer: 'IBM · Coursera',
    date: 'Sep 2026',
    description:
      'IBM-authorized course on building retrieval-augmented generation systems with LangChain, connecting language models to external knowledge, and designing practical AI agent workflows.',
    skills: ['RAG', 'LangChain', 'AI Agents', 'LLM Applications', 'Information Retrieval'],
    verify: 'https://coursera.org/verify/47HM8XRRY4FK',
    certificate: '/certificates/fundamentals-ai-agents-rag-langchain-ibm-coursera.pdf',
    image: ragAiCertImg,
  },
  {
    title: 'Advanced Learning Algorithms',
    issuer: 'DeepLearning.AI · Stanford Online',
    date: 'Sep 2026',
    description:
      'Advanced machine learning course covering neural networks, practical model training, machine learning best practices, and decision-making techniques for building reliable predictive systems.',
    skills: ['Neural Networks', 'Machine Learning', 'Model Training', 'Decision Trees', 'Best Practices'],
    verify: 'https://coursera.org/verify/YZBDKDV5VOGO',
    certificate: '/certificates/advanced-learning-algorithms-deeplearning-stanford.pdf',
    image: advancedAlgorithmsCertImg,
  },
  {
    title: 'Create Machine Learning Models in Microsoft Azure',
    issuer: 'Microsoft · Coursera',
    date: 'Jul 2026',
    description:
      'Microsoft-authorized course on building and evaluating machine learning models in Azure — exploring and preparing data, training regression, classification, and clustering models, and applying deep learning fundamentals with Azure Machine Learning.',
    skills: ['Microsoft Azure', 'Azure ML', 'Model Training', 'Deep Learning', 'Data Preparation'],
    verify: 'https://coursera.org/verify/TVKJSA0LOQF7',
    certificate: '/certificates/create-ml-models-azure-microsoft-coursera.pdf',
    image: azureMlCertImg,
  },
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
  const [carouselPosition, setCarouselPosition] = useState(2);
  const [isCarouselTransitioning, setIsCarouselTransitioning] = useState(true);
  const loopedCertificates = [
    certificates[certificates.length - 2],
    certificates[certificates.length - 1],
    ...certificates,
    certificates[0],
    certificates[1],
  ];
  const activeCertificate = (carouselPosition - 2 + certificates.length) % certificates.length;

  const moveCarousel = (direction) => {
    setIsCarouselTransitioning(true);
    setCarouselPosition((position) => {
      if (direction > 0 && position >= loopedCertificates.length - 2) {
        return 2;
      }
      if (direction < 0 && position <= 1) {
        return certificates.length + 1;
      }
      return position + direction;
    });
  };

  const jumpToCertificate = (index) => {
    setIsCarouselTransitioning(true);
    setCarouselPosition(index + 2);
  };

  const handleCarouselTransitionEnd = (event) => {
    if (event.target !== event.currentTarget) return;

    if (carouselPosition <= 1) {
      setIsCarouselTransitioning(false);
      setCarouselPosition(certificates.length + 1);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setIsCarouselTransitioning(true));
      });
    } else if (carouselPosition >= loopedCertificates.length - 2) {
      setIsCarouselTransitioning(false);
      setCarouselPosition(2);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setIsCarouselTransitioning(true));
      });
    }
  };

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
            A growing collection of verified credentials in machine learning, generative AI, and modern AI application development. Each credential can be opened and independently verified through its issuing organization.
          </p>
        </header>

        {/* Horizontal certificate carousel */}
        <div className="certificate-carousel-shell relative w-[75vw] max-w-[75vw] mx-auto">
          <button
            type="button"
            aria-label="Previous certificate"
            onClick={() => moveCarousel(-1)}
            className="certificate-carousel-control certificate-carousel-control-left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Next certificate"
            onClick={() => moveCarousel(1)}
            className="certificate-carousel-control certificate-carousel-control-right"
          >
            <ChevronRight size={20} />
          </button>

          <div
            className="certificate-carousel overflow-hidden"
            aria-label="Professional certificates"
          >
            <div
              className="certificate-carousel-track"
              onTransitionEnd={handleCarouselTransitionEnd}
              style={{
                transform: `translateX(calc(-${carouselPosition} * (50% + 12px)))`,
                transition: isCarouselTransitioning ? 'transform 650ms cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
              }}
            >
          {loopedCertificates.map((cert, index) => (
            <article
              key={`${cert.title}-${index}`}
              data-certificate-card
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="certificate-card group relative rounded-2xl border flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--border-color)',
                boxShadow: '0 12px 40px -16px var(--shadow-color)',
              }}
            >
              <div className="absolute top-0 left-0 w-full h-[3px] z-10" style={{ background: 'var(--accent-color)' }} />

              {/* Certificate preview */}
              <div className="certificate-preview relative overflow-hidden shrink-0" style={{ background: '#ffffff' }}>
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    loading="lazy"
                    decoding="async"
                    className="certificate-preview-image w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div
                    className="certificate-preview-fallback flex min-h-[220px] flex-col items-center justify-center px-8 py-10 text-center transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{
                      background:
                        'linear-gradient(135deg, var(--bg-tertiary) 0%, var(--card-bg) 55%, var(--bg-secondary) 100%)',
                    }}
                  >
                    <FileText size={42} style={{ color: 'var(--accent-color)' }} />
                    <span className="mt-4 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Official certificate document
                    </span>
                    <span className="mt-1 text-xs" style={{ color: 'var(--text-secondary)' }}>
                      Open the certificate to view the full credential
                    </span>
                  </div>
                )}
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
              <div className="certificate-card-body p-4 sm:p-5 flex flex-col flex-1">
                <h3 className="text-base sm:text-lg font-bold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                  {cert.title}
                </h3>

                <div
                  className="flex items-center gap-2 text-xs font-medium mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <Calendar size={13} style={{ color: 'var(--accent-color)' }} />
                  Issued {cert.date}
                  {cert.credentialId && (
                    <span className="truncate">| ID: {cert.credentialId}</span>
                  )}
                </div>

                <p className="certificate-description text-sm leading-relaxed flex-1 mb-3" style={{ color: 'var(--text-secondary)' }}>
                  {cert.description}
                </p>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {cert.skills.map((skill) => (
                    <span
                      key={`${cert.title}-${skill}`}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-full"
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
                <div className="flex gap-2 pt-3 border-t" style={{ borderColor: 'var(--border-color)' }}>
                  {cert.verify && (
                    <a
                      href={cert.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 flex-1 inline-flex justify-center items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:brightness-110"
                      style={{ background: 'var(--accent-color)' }}
                    >
                      <BadgeCheck size={15} /> Verify
                    </a>
                  )}
                  <a
                    href={cert.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative z-10 inline-flex justify-center items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-[1.03] ${
                      cert.verify ? 'flex-1' : 'w-full'
                    }`}
                    style={{
                      background: 'var(--bg-tertiary)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <ExternalLink size={15} /> View certificate
                  </a>
                </div>
              </div>
            </article>
          ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2" aria-label="Choose certificate">
            {certificates.map((cert, index) => (
              <button
                key={`${cert.title}-dot`}
                type="button"
                aria-label={`Show certificate ${index + 1}: ${cert.title}`}
                aria-current={activeCertificate === index ? 'true' : undefined}
                onClick={() => jumpToCertificate(index)}
                className={`certificate-carousel-dot ${activeCertificate === index ? 'is-active' : ''}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certificates;
