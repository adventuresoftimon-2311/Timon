/* ============================================
   TIMON HOFFMANN — Portfolio & Resume
   Interactive Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ───────────────────────────────────────────
  // 1. TRANSLATIONS (DE / EN)
  // ───────────────────────────────────────────
  const translations = {
    de: {
      // Nav
      nav_about: 'Über mich',
      nav_experience: 'Erfahrung',
      nav_education: 'Ausbildung',
      nav_skills: 'Skills',
      nav_projects: 'Projekte',
      nav_contact: 'Kontakt',

      // Hero
      hero_badge: 'Verfügbar für neue Projekte',
      hero_title_1: 'Digital Marketing',
      hero_title_2: 'Manager',
      hero_title_3: '& Stratege',
      hero_subtitle: 'Über 5 Jahre Erfahrung in Content, Performance-Marketing und Web. Ich plane und setze Kampagnen von A bis Z um — strategisch, datenbasiert und kreativ.',
      hero_cta_1: '📋 Erfahrung ansehen',
      hero_cta_2: '💬 Kontakt aufnehmen',

      hero_scroll: 'Scroll',

      // About
      about_eyebrow: 'Profil',
      about_title: 'Über mich',
      about_subtitle: 'Digital Marketing Manager mit über fünf Jahren praktischer Erfahrung in Content, Performance-Marketing und Web.',
      about_text: 'Ich plane und setze Kampagnen von A bis Z um: Strategie, Copywriting, Kreativkonzepte, Paid Media (Meta Ads, Google Ads), conversionsorientierte Landingpages und KPI-basierte Optimierung, ausgewertet mit Google Analytics und eigenen SQL-Abfragen. Erfahren in Kundenbetreuung, Anforderungsanalyse und der Koordination mit Vertrieb, Design und Entwicklung. Vertriebsabteilung selbst aufgebaut, eigenes Kleingewerbe neben dem Beruf. Deutsch als Muttersprache, Englisch fließend, Spanisch B2/C1. KI-Tools täglich produktiv im Einsatz. Strukturiert, eigenverantwortlich und schnell in der Umsetzung.',
      about_years: 'Jahre Erfahrung',
      about_companies: 'Unternehmen',
      about_languages: 'Sprachen',
      about_motivation: 'Motivation',
      about_location_label: 'Standort',
      about_phone_label: 'Telefon',
      about_langs_label: 'Sprachen',
      about_langs_value: 'Deutsch · Englisch · Spanisch',
      about_address_label: 'Adresse',

      // Experience
      exp_eyebrow: 'Karriere',
      exp_title: 'Berufserfahrung',
      exp_subtitle: 'Klicke auf eine Station, um Details zu sehen',
      exp1_date: 'seit 04/2026',
      exp1_role: 'Marketing & Social Media Manager',
      exp1_task1: 'Verantwortung für Social Media und Markenkommunikation internationaler Motorsport-Formate (GT Summer Series, Winter Series, Formula Winter Series u. a.)',
      exp1_task2: 'Planung und Umsetzung kanalübergreifender Kampagnen zur Steigerung von Reichweite und Buchungsanfragen',
      exp1_task3: 'Content-Produktion von A bis Z auf Deutsch und Englisch: Reels, Carousels, Event-Ankündigungen, Fahrer-Features, Verkaufspräsentationen',
      exp1_task4: 'Koordination mit Vertrieb, Design, Eventmanagement und externen Partnern über den gesamten Projektverlauf',
      exp1_task5: 'Täglicher Einsatz KI-gestützter Workflows für Recherche, Ideenentwicklung und effiziente Content-Produktion',

      exp2_role: 'Head of Marketing & Product Management',
      exp2_task1: 'Planung digitaler Softwareprojekte und Übersetzung fachlicher Anforderungen in umsetzbare Konzepte inkl. User Stories und QA-orientierter Spezifikationen',
      exp2_task2: 'Mitarbeit an Branding, Marktpositionierung und Content-Strategie für digitale Produkte',
      exp2_task3: 'SQL für strukturierte Datenabfragen, Plausibilitätsprüfungen und Kampagnen-Datenanalysen',
      exp2_task4: 'Qualitätssicherung digitaler Umsetzungen und strukturierte Dokumentation von Anforderungen',

      exp3_role: 'Head of Sales',
      exp3_task1: 'Aufbau der Vertriebsabteilung einer Marketingagentur: Prozesse, Gesprächsleitfäden und systematische Leadbearbeitung',
      exp3_task2: 'Integrierte Marketing- und Sales-Kampagnen zur Leadgenerierung',
      exp3_task3: 'Eigene Kunden- und Verkaufsgespräche, Bedarfsermittlung und abschlussorientierte Kommunikation',

      exp4_role: 'Marketing Manager',
      exp4_task1: 'Kundenbetreuung im medizinischen Praxismarketing von der Anforderungsaufnahme bis zur Umsetzung',
      exp4_task2: 'Konzeption conversionsorientierter Landingpages und digitaler Funnels; Webdesign, Content und Videokonzepte',
      exp4_task3: 'Steuerung und Optimierung von SEA- und Paid-Social-Kampagnen; Auswertung mit SQL und Analyse-Tools',

      exp5_role: 'Marketing Manager Social Recruiting',
      exp5_task1: 'Performanceorientierte Paid-Social-Kampagnen für unterschiedliche Kundenzielgruppen',
      exp5_task2: 'Entwicklung von Videokonzepten, Anzeigenmotiven und zielgruppengerechten Kampagnentexten',
      exp5_task3: 'Laufendes KPI-Reporting (Cost per Lead, CTR, Conversion Rate) und datenbasierte Optimierung',

      exp6_role: 'Marketing Manager',
      exp6_task1: 'Verantwortung für SEO, SEA und die digitale Sichtbarkeit im automobilen Handelsumfeld; Auswertung mit Google Analytics',
      exp6_task2: 'Social-Media-Strategien, redaktionelle Formate und Videokonzepte für Marken- und Eventkommunikation',
      exp6_task3: 'Planung und Begleitung von Promotions, Events und verkaufsunterstützenden Kampagnen',
      exp6_task4: 'Koordination von Inhalten und Kampagnen mit internen Fachbereichen, Standorten und externen Partnern',

      exp7_role: 'Marketing Manager',
      exp7_task1: 'Pflege und gestalterische Weiterentwicklung der Unternehmenswebsite sowie Aufbereitung digitaler Inhalte',
      exp7_task2: 'Betreuung der Social-Media-Aktivitäten und Erstellung relevanter Kommunikationsinhalte',
      exp7_task3: 'Vorbereitung von Messen, Marketingmaterialien und Weiterentwicklung des Produktkatalogs',

      exp8_role: 'Customer Success Manager',
      exp8_task1: 'Kundenbetreuung mit Fokus auf Servicequalität und lösungsorientierte Kommunikation',
      exp8_task2: 'Kommunikation in einem internationalen, schnelllebigen Arbeitsumfeld',

      // Freelance
      freelance_eyebrow: 'Nebenberuflich',
      freelance_title: 'Selbstständigkeit',
      freelance_subtitle: 'Eigenes Kleingewerbe neben dem Hauptberuf — seit 2024',
      freelance_text: 'Seit 2024 nebenberuflich selbstständig in Webdesign, SEA und Social Media Management. Eigene Kunden betreue ich als einziger Ansprechpartner von der Anforderungsaufnahme über Konzept und Umsetzung bis zur Optimierung. Mehrere conversionoptimierte Websites und Landingpages für deutsche Unternehmen verschiedener Branchen.',

      // Education
      edu_eyebrow: 'Werdegang',
      edu_title: 'Ausbildung',
      edu_subtitle: 'Akademischer und schulischer Hintergrund',
      edu1_title: 'Duales Studium Marketing Management (B.A.)',
      edu1_desc: 'Abschluss 2026, Note 2,1 · parallel 30 Std./Woche berufstätig',
      edu2_title: 'Communication Science',
      edu2_desc: 'Pandemiebedingt beendet',
      edu3_title: 'Praxisjahr Gestaltungstechnischer Assistent',
      edu4_title: 'Abitur — Schwerpunkt Gestaltungstechnik',

      // Skills
      skills_eyebrow: 'Kompetenzen',
      skills_title: 'Skills & Tools',
      skills_subtitle: 'Meine wichtigsten Fähigkeiten und Werkzeuge auf einen Blick',
      skill1_title: 'Marketing & Content',
      skill1_1: 'Content-Strategie',
      skill1_2: 'Social Media',
      skill1_3: 'Kampagnenentwicklung',
      skill1_4: 'Copywriting (DE/EN)',
      skill1_5: 'Markenpositionierung',
      skill2_title: 'Performance & Daten',
      skill2_5: 'CRO / Leadgenerierung',
      skill3_title: 'Web & Technik',
      skill3_4: 'JavaScript-Grundlagen',
      skill3_5: 'Conversion-Landingpages',
      skill4_title: 'Kreation',
      skill4_5: 'Videokonzepte',
      skill5_title: 'CRM & Automation',
      skill5_4: 'Excel / Google Sheets',
      skill5_5: 'KPI-Reporting',
      skill6_title: 'Projekt & KI',
      skill6_1: 'Anforderungsanalyse & User Stories',
      skill6_2: 'QA-orientierte Spezifikation',
      skill6_3: 'Stakeholder-Koordination',
      skill6_4: 'Kundenbetreuung / Vertrieb',
      skill6_5: 'KI-Agenten (täglicher Einsatz)',



      // Projects
      projects_eyebrow: 'Portfolio',
      projects_title: 'Referenzen & Projekte',
      projects_subtitle: 'Ausgewählte Projekte aus meiner bisherigen Laufbahn',
      project_view: 'Details ansehen →',
      project1_title: 'GEDLICH Racing — Social Media & Content',
      project1_desc: 'Kanalübergreifende Kampagnen für internationale Motorsport-Formate. Reels, Carousels, Event-Coverage und Fahrer-Features in DE und EN.',
      project2_title: 'SpreadUp — Medizinisches Praxismarketing',
      project2_desc: 'Conversionsorientierte Landingpages und digitale Funnels für medizinische Praxen. SEA- und Paid-Social-Kampagnen mit SQL-basierter Auswertung.',
      project3_title: 'Spotlight — Performance Recruiting Kampagnen',
      project3_desc: 'Paid-Social-Kampagnen für zielgruppenspezifisches Recruiting. Videokonzepte, Anzeigentexte und laufendes KPI-Reporting.',
      project4_category: 'Vertriebsaufbau',
      project4_title: 'Faktor Marketing — Sales-Abteilung von Grund auf',
      project4_desc: 'Kompletter Aufbau einer Vertriebsabteilung: Prozesse, Gesprächsleitfäden, Leadbearbeitung und integrierte Marketing-Sales-Kampagnen.',

      // Contact
      contact_eyebrow: 'Kontakt',
      contact_title: 'Lass uns zusammenarbeiten',
      contact_subtitle: 'Hast du ein spannendes Projekt? Ich freue mich auf deine Nachricht.',
      contact_info_title: 'Timon Hoffmann',
      contact_info_text: 'Digital Marketing Manager mit über 5 Jahren Erfahrung in Content, Performance-Marketing und Web. Offen für neue Herausforderungen und spannende Projekte.',
      contact_phone: 'Telefon',
      contact_location: 'Standort',
      form_name: 'Name',
      form_message: 'Nachricht',
      form_submit: '📤 Nachricht senden',
      form_success: 'Vielen Dank! Deine Nachricht wurde gesendet.',

      // Footer
      footer_rights: 'Alle Rechte vorbehalten.',
      footer_phone: 'Telefon',
    },

    en: {
      nav_about: 'About',
      nav_experience: 'Experience',
      nav_education: 'Education',
      nav_skills: 'Skills',
      nav_projects: 'Projects',
      nav_contact: 'Contact',

      hero_badge: 'Available for new projects',
      hero_title_1: 'Digital Marketing',
      hero_title_2: 'Manager',
      hero_title_3: '& Strategist',
      hero_subtitle: 'Over 5 years of experience in content, performance marketing & web. I plan and execute campaigns from A to Z — strategic, data-driven and creative.',
      hero_cta_1: '📋 View Experience',
      hero_cta_2: '💬 Get in Touch',

      hero_scroll: 'Scroll',

      about_eyebrow: 'Profile',
      about_title: 'About Me',
      about_subtitle: 'Digital Marketing Manager with over five years of hands-on experience in content, performance marketing and web.',
      about_text: 'I plan and execute campaigns from A to Z: Strategy, copywriting, creative concepts, paid media (Meta Ads, Google Ads), conversion-oriented landing pages and KPI-based optimization, evaluated with Google Analytics and custom SQL queries. Experienced in client management, requirements analysis, and coordination with sales, design and development. Built a sales department from scratch, own small business alongside my career. German native speaker, fluent in English, Spanish B2/C1. AI tools used productively every day. Structured, self-responsible and fast in execution.',
      about_years: 'Years Experience',
      about_companies: 'Companies',
      about_languages: 'Languages',
      about_motivation: 'Motivation',
      about_location_label: 'Location',
      about_phone_label: 'Phone',
      about_langs_label: 'Languages',
      about_langs_value: 'German · English · Spanish',
      about_address_label: 'Address',

      exp_eyebrow: 'Career',
      exp_title: 'Work Experience',
      exp_subtitle: 'Click on a station to see details',
      exp1_date: 'since 04/2026',
      exp1_role: 'Marketing & Social Media Manager',
      exp1_task1: 'Responsible for social media and brand communication of international motorsport formats (GT Summer Series, Winter Series, Formula Winter Series, etc.)',
      exp1_task2: 'Planning and executing cross-channel campaigns to increase reach and booking inquiries',
      exp1_task3: 'End-to-end content production in German and English: Reels, Carousels, event announcements, driver features, sales presentations',
      exp1_task4: 'Coordination with sales, design, event management and external partners throughout the project lifecycle',
      exp1_task5: 'Daily use of AI-powered workflows for research, ideation and efficient content production',

      exp2_role: 'Head of Marketing & Product Management',
      exp2_task1: 'Planning digital software projects and translating business requirements into actionable concepts incl. user stories and QA-oriented specifications',
      exp2_task2: 'Contributing to branding, market positioning and content strategy for digital products',
      exp2_task3: 'SQL for structured data queries, plausibility checks and campaign data analysis',
      exp2_task4: 'Quality assurance of digital implementations and structured documentation of requirements',

      exp3_role: 'Head of Sales',
      exp3_task1: 'Building the sales department of a marketing agency: processes, call scripts and systematic lead management',
      exp3_task2: 'Integrated marketing and sales campaigns for lead generation',
      exp3_task3: 'Own client and sales calls, needs assessment and closing-oriented communication',

      exp4_role: 'Marketing Manager',
      exp4_task1: 'Client management in medical practice marketing from requirements gathering to implementation',
      exp4_task2: 'Designing conversion-oriented landing pages and digital funnels; web design, content and video concepts',
      exp4_task3: 'Managing and optimizing SEA and paid social campaigns; analysis with SQL and analytics tools',

      exp5_role: 'Marketing Manager Social Recruiting',
      exp5_task1: 'Performance-oriented paid social campaigns for diverse client target groups',
      exp5_task2: 'Development of video concepts, ad creatives and audience-specific campaign copy',
      exp5_task3: 'Ongoing KPI reporting (Cost per Lead, CTR, Conversion Rate) and data-driven optimization',

      exp6_role: 'Marketing Manager',
      exp6_task1: 'Responsible for SEO, SEA and digital visibility in the automotive retail sector; evaluation with Google Analytics',
      exp6_task2: 'Social media strategies, editorial formats and video concepts for brand and event communication',
      exp6_task3: 'Planning and support of promotions, events and sales-supporting campaigns',
      exp6_task4: 'Coordination of content and campaigns with internal departments, locations and external partners',

      exp7_role: 'Marketing Manager',
      exp7_task1: 'Maintenance and creative development of the corporate website and preparation of digital content',
      exp7_task2: 'Managing social media activities and creating relevant communication content',
      exp7_task3: 'Preparing trade fairs, marketing materials and further development of the product catalog',

      exp8_role: 'Customer Success Manager',
      exp8_task1: 'Customer support with a focus on service quality and solution-oriented communication',
      exp8_task2: 'Communication in an international, fast-paced work environment',

      // Freelance
      freelance_eyebrow: 'Side Business',
      freelance_title: 'Self-Employment',
      freelance_subtitle: 'Own small business alongside my main career — since 2024',
      freelance_text: 'Since 2024, self-employed part-time in web design, SEA and social media management. I manage my own clients as the sole point of contact, from requirements gathering through concept and execution to optimization. Multiple conversion-optimized websites and landing pages for German companies across various industries.',

      // Education
      edu_eyebrow: 'Background',
      edu_title: 'Education',
      edu_subtitle: 'Academic and educational background',
      edu1_title: "Dual Studies Marketing Management (B.A.)",
      edu1_desc: 'Graduation 2026, grade 2.1 (German scale) · worked 30 hrs/week in parallel',
      edu2_title: 'Communication Science',
      edu2_desc: 'Ended due to the pandemic',
      edu3_title: 'Practical Year — Design Technology Assistant',
      edu4_title: 'German Abitur — Design Technology Focus',

      skills_eyebrow: 'Competencies',
      skills_title: 'Skills & Tools',
      skills_subtitle: 'My key skills and tools at a glance',
      skill1_title: 'Marketing & Content',
      skill1_1: 'Content Strategy',
      skill1_2: 'Social Media',
      skill1_3: 'Campaign Development',
      skill1_4: 'Copywriting (DE/EN)',
      skill1_5: 'Brand Positioning',
      skill2_title: 'Performance & Data',
      skill2_5: 'CRO / Lead Generation',
      skill3_title: 'Web & Tech',
      skill3_4: 'JavaScript Basics',
      skill3_5: 'Conversion Landing Pages',
      skill4_title: 'Creative',
      skill4_5: 'Video Concepts',
      skill5_title: 'CRM & Automation',
      skill5_4: 'Excel / Google Sheets',
      skill5_5: 'KPI Reporting',
      skill6_title: 'Project & AI',
      skill6_1: 'Requirements Analysis & User Stories',
      skill6_2: 'QA-Oriented Specification',
      skill6_3: 'Stakeholder Coordination',
      skill6_4: 'Client Management / Sales',
      skill6_5: 'AI Agents (daily use)',



      projects_eyebrow: 'Portfolio',
      projects_title: 'References & Projects',
      projects_subtitle: 'Selected projects from my career so far',
      project_view: 'View Details →',
      project1_title: 'GEDLICH Racing — Social Media & Content',
      project1_desc: 'Cross-channel campaigns for international motorsport formats. Reels, carousels, event coverage and driver features in DE and EN.',
      project2_title: 'SpreadUp — Medical Practice Marketing',
      project2_desc: 'Conversion-oriented landing pages and digital funnels for medical practices. SEA and paid social campaigns with SQL-based analysis.',
      project3_title: 'Spotlight — Performance Recruiting Campaigns',
      project3_desc: 'Paid social campaigns for audience-specific recruiting. Video concepts, ad copy and ongoing KPI reporting.',
      project4_category: 'Sales Building',
      project4_title: 'Faktor Marketing — Sales Department from Scratch',
      project4_desc: 'Complete build-up of a sales department: processes, call scripts, lead management and integrated marketing-sales campaigns.',

      contact_eyebrow: 'Contact',
      contact_title: "Let's Work Together",
      contact_subtitle: "Have an exciting project? I'd love to hear from you.",
      contact_info_title: 'Timon Hoffmann',
      contact_info_text: 'Digital Marketing Manager with over 5 years of experience in content, performance marketing and web. Open to new challenges and exciting projects.',
      contact_phone: 'Phone',
      contact_location: 'Location',
      form_name: 'Name',
      form_message: 'Message',
      form_submit: '📤 Send Message',
      form_success: 'Thank you! Your message has been sent.',

      footer_rights: 'All rights reserved.',
      footer_phone: 'Phone',
    }
  };

  let currentLang = 'de';

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update form placeholders
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const msgInput = document.getElementById('contactMessage');
    if (nameInput) nameInput.placeholder = lang === 'de' ? 'Dein Name' : 'Your Name';
    if (emailInput) emailInput.placeholder = lang === 'de' ? 'deine@email.de' : 'your@email.com';
    if (msgInput) msgInput.placeholder = lang === 'de' ? 'Deine Nachricht...' : 'Your message...';

    // Update active lang button
    document.querySelectorAll('.nav__lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  // Language toggle
  document.querySelectorAll('.nav__lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // ───────────────────────────────────────────
  // 2. NAVIGATION
  // ───────────────────────────────────────────
  const nav = document.getElementById('mainNav');
  const hamburger = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');

  // Scroll-based nav styling
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('.section, .hero');
  const navLinkEls = document.querySelectorAll('.nav__link');

  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinkEls.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', updateActiveNav);

  // ───────────────────────────────────────────
  // 3. TIMELINE — INTERACTIVE ACCORDION
  // ───────────────────────────────────────────
  const timelineItems = document.querySelectorAll('.timeline__item');

  timelineItems.forEach(item => {
    item.addEventListener('click', () => {
      const wasActive = item.classList.contains('active');

      // Close all
      timelineItems.forEach(i => i.classList.remove('active'));

      // Toggle clicked
      if (!wasActive) {
        item.classList.add('active');
      }
    });
  });

  // ───────────────────────────────────────────
  // 4. SCROLL ANIMATIONS (Intersection Observer)
  // ───────────────────────────────────────────
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Animate skill bars inside visible elements
        const skillBars = entry.target.querySelectorAll('.skill-card__item-fill');
        skillBars.forEach(bar => {
          const width = bar.getAttribute('data-width');
          if (width) {
            setTimeout(() => {
              bar.style.width = width + '%';
              bar.classList.add('animated');
            }, 200);
          }
        });

        scrollObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    scrollObserver.observe(el);
  });
  // ───────────────────────────────────────────
  // 5. PROJECT CARDS CLICK NAVIGATION
  // ───────────────────────────────────────────
  document.querySelectorAll('.project-card[data-url]').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      window.location.href = card.dataset.url;
    });
  });


  // ───────────────────────────────────────────
  // 7. CONTACT FORM
  // ───────────────────────────────────────────
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simulate send
      const submitBtn = document.getElementById('formSubmit');
      submitBtn.textContent = currentLang === 'de' ? '⏳ Sende...' : '⏳ Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        formSuccess.classList.add('show');
        contactForm.reset();
        submitBtn.textContent = translations[currentLang].form_submit;
        submitBtn.disabled = false;

        setTimeout(() => {
          formSuccess.classList.remove('show');
        }, 4000);
      }, 1200);
    });
  }

  // ───────────────────────────────────────────
  // 8. COUNT-UP ANIMATION FOR HIGHLIGHT NUMBERS
  // ───────────────────────────────────────────
  function animateCountUp(el, target) {
    let current = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));

    function tick() {
      current += step;
      if (current >= target) {
        el.textContent = target + '+';
        return;
      }
      el.textContent = current + '+';
      requestAnimationFrame(tick);
    }

    tick();
  }

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const count = parseInt(entry.target.dataset.count);
        if (!isNaN(count)) {
          animateCountUp(entry.target, count);
        }
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => {
    countObserver.observe(el);
  });

  // ───────────────────────────────────────────
  // 9. SMOOTH SCROLL
  // ───────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  // ───────────────────────────────────────────
  // 11. LIVE WEBSITE PREVIEW MODAL & GALLERY CAROUSEL
  // ───────────────────────────────────────────
  const liveProjects = [
    { url: 'https://www.auftragshero-mv.de', name: 'AuftragsHero MV' },
    { url: 'https://www.özdemir-projektberatung.de', name: 'Özdemir Projektberatung' },
    { url: 'https://www.fussboeden-gaebel.de/', name: 'Fussböden Gäbel' },
    { url: 'https://www.as-garten-gebäudeservice.com/', name: 'AS Garten- & Gebäudeservice' },
    { url: 'https://krumme.vercel.app/', name: 'Krumme Klänge Landing page' },
    { url: 'https://nick-website-indol.vercel.app/', name: 'Deep Praxis' }

  ];

  let currentProjectIndex = 0;

  const webModal = document.getElementById('webModal');
  const webModalBackdrop = document.getElementById('webModalBackdrop');
  const webModalIframe = document.getElementById('webModalIframe');
  const webModalUrl = document.getElementById('webModalUrl');
  const webModalExternal = document.getElementById('webModalExternal');
  const webModalCloseBtn = document.getElementById('webModalCloseBtn');
  const webModalCloseX = document.getElementById('webModalCloseX');
  const webModalPrev = document.getElementById('webModalPrev');
  const webModalNext = document.getElementById('webModalNext');
  const webModalCounter = document.getElementById('webModalCounter');

  function updateModalProject(index) {
    if (index < 0) index = liveProjects.length - 1;
    if (index >= liveProjects.length) index = 0;
    currentProjectIndex = index;

    const proj = liveProjects[currentProjectIndex];
    if (webModalIframe) webModalIframe.src = proj.url;
    if (webModalUrl) webModalUrl.textContent = proj.url;
    if (webModalExternal) webModalExternal.href = proj.url;
    if (webModalCounter) webModalCounter.textContent = `${currentProjectIndex + 1} / ${liveProjects.length}`;
  }

  function openWebModal(url) {
    if (!webModal) return;
    const foundIndex = liveProjects.findIndex(p => p.url === url || url.includes(p.url.replace('https://', '').replace('http://', '').replace('/', '')));
    if (foundIndex !== -1) {
      currentProjectIndex = foundIndex;
    } else {
      // Add custom URL dynamically if not in preset list
      const existing = liveProjects.find(p => p.url === url);
      if (!existing) {
        liveProjects.push({ url: url, name: url });
        currentProjectIndex = liveProjects.length - 1;
      }
    }

    updateModalProject(currentProjectIndex);
    webModal.classList.add('active');
    webModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeWebModal() {
    if (!webModal) return;
    webModal.classList.remove('active');
    webModal.setAttribute('aria-hidden', 'true');
    webModalIframe.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-preview-url]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      const url = btn.getAttribute('data-preview-url');
      if (url) openWebModal(url);
    });
  });

  if (webModalPrev) webModalPrev.addEventListener('click', () => updateModalProject(currentProjectIndex - 1));
  if (webModalNext) webModalNext.addEventListener('click', () => updateModalProject(currentProjectIndex + 1));
  if (webModalBackdrop) webModalBackdrop.addEventListener('click', closeWebModal);
  if (webModalCloseBtn) webModalCloseBtn.addEventListener('click', closeWebModal);
  if (webModalCloseX) webModalCloseX.addEventListener('click', closeWebModal);

  document.addEventListener('keydown', (e) => {
    if (webModal && webModal.classList.contains('active')) {
      if (e.key === 'Escape') closeWebModal();
      if (e.key === 'ArrowLeft') updateModalProject(currentProjectIndex - 1);
      if (e.key === 'ArrowRight') updateModalProject(currentProjectIndex + 1);
    }
  });

});


