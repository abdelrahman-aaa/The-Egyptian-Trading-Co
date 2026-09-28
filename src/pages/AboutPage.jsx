import heroFarmImg from '../assets/976f68972ffc918a2d6d17eacf3084bf.jpg';
import labImg from '../assets/7b4997f5946d184f30015154d38dda6d.jpg';
import industrialImg from '../assets/3591ce72270e8396cd2d2bb21dcc6953.jpg';
import supplyImg from '../assets/ChatGPT-Image-Sep-15-2026-09_27_12-AM-780x470.png';
import packingImg from '../assets/a36129701f5c857e5c0aca4f0fc49712.jpg';
import './AboutPage.css';

/* ── Core Values Data ── */
const CORE_VALUES = [
  {
    num: '01',
    icon: '🛡️',
    title: 'Uncompromising Quality',
    desc: 'Rigorous specification compliance and testing ensure every batch of fertilizer meets declared nutrient benchmarks and international criteria.',
  },
  {
    num: '02',
    icon: '🔬',
    title: 'Scientific Innovation',
    desc: 'Leveraging modern agronomic chemistry and advanced formulation methods to enhance soil fertility, crop uptake, and nutrient efficiency.',
  },
  {
    num: '03',
    icon: '🌿',
    title: 'Environmental Stewardship',
    desc: 'Promoting balanced soil conditioning and sustainable mineral nourishment that supports long-term ecological balance and farm yields.',
  },
  {
    num: '04',
    icon: '🤝',
    title: 'Integrity & Transparency',
    desc: 'Maintaining open, straightforward communication in every transaction, from technical documentation to verified shipping schedules.',
  },
  {
    num: '05',
    icon: '🎯',
    title: 'Agronomic Customer Focus',
    desc: 'Tailoring product grades, granule sizing, and packaging solutions to the exact logistical and agricultural demands of our global clients.',
  },
  {
    num: '06',
    icon: '⚡',
    title: 'Operational Excellence',
    desc: 'Seamless supply chain execution, responsive logistics management, and meticulous export handling from factory floor to seaport.',
  },
];

/* ── Certifications Data ── */
const CERTIFICATIONS = [
  {
    code: 'ISO 9001:2015',
    title: 'Certificate of Analysis (COA)',
    desc: 'Independent laboratory verification of nutrient concentrations, chemical purity, and trace elements.',
    icon: '📜',
  },
  {
    code: 'TDS SPEC',
    title: 'Technical Data Sheets (TDS)',
    desc: 'Comprehensive chemical, physical, and solubility specifications available for every commercial grade.',
    icon: '📊',
  },
  {
    code: 'GHS COMPLIANT',
    title: 'Safety Data Sheets (SDS)',
    desc: 'Full international safety, handling, storage, and environmental guidance compliant with GHS standards.',
    icon: '🛡️',
  },
  {
    code: 'GOV CERTIFIED',
    title: 'Certificate of Origin (COO)',
    desc: 'Official trade and customs verification with full batch traceability from Egyptian manufacturing sources.',
    icon: '🏛️',
  },
];

/* ── Facilities Data ── */
const FACILITIES = [
  {
    img: industrialImg,
    badge: 'Granulation Unit',
    title: 'Bulk Production Plants',
    subtitle: 'Chemical blending, granulation, and high-tonnage storage',
    featureIcon: '🏭',
    featureTitle: 'Granulation & Prilling Hubs',
    featureDesc: 'High-throughput machinery ensuring uniform particle size distribution, optimal hardness, and anti-caking properties for bulk storage.',
  },
  {
    img: packingImg,
    badge: 'Logistics Hub',
    title: 'Automated Bagging & Packaging',
    subtitle: '25kg, 50kg, and 1-ton jumbo bag export packaging',
    featureIcon: '📦',
    featureTitle: 'Customized Export Packaging',
    featureDesc: 'Heavy-duty moisture-proof packaging options including palletized shrink-wrapped bags and bulk container liners engineered for sea transit.',
  },
  {
    img: labImg,
    badge: 'Quality Control',
    title: 'Analytical Chemistry Labs',
    subtitle: 'In-house testing for purity, moisture, and particle size',
    featureIcon: '⚓',
    featureTitle: 'Strategic Port Logistics',
    featureDesc: 'Direct connectivity to Alexandria, Damietta, and Port Said seaports for prompt containerized dispatch and bulk vessel chartering worldwide.',
  },
];

export default function AboutPage({ onNavigate }) {
  const handleNav = (target, page = 'home') => {
    if (onNavigate) {
      onNavigate(page, target);
    } else {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="about-page">
      {/* ══ HERO SECTION ═══════════════════════════════════ */}
      <section className="about-hero">
        <div className="about-hero__bg-img" style={{ backgroundImage: `url(${heroFarmImg})` }} />
        <div className="about-hero__overlay" />
        
        <div className="about-hero__content container">
          <div className="about-hero__badge">
            <span className="about-hero__badge-dot" />
            ABOUT THE EGYPTIAN TRADING COMPANY
          </div>

          <h1 className="about-hero__title">About Our Company</h1>
          
          <p className="about-hero__subtitle">
            Dedicated to precision soil nutrition, international trade excellence, and sustainable agricultural vitality across regional and global markets.
          </p>

          <div className="about-hero__pills">
            <span className="about-hero__pill">✓ Premium Mineral Nutrients</span>
            <span className="about-hero__pill">✓ Global Sourcing Network</span>
            <span className="about-hero__pill">✓ Strict QA Protocols</span>
            <span className="about-hero__pill">✓ Dependable Logistics</span>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: COMPANY OVERVIEW ═══════════════════ */}
      <section className="about-overview container">
        <div className="about-overview__grid">
          {/* Left Column: Text & Stats */}
          <div className="about-overview__text-col">
            <div className="section-label">COMPANY OVERVIEW</div>
            <h2 className="about-overview__heading">
              A Quarter Century of Engineering Soil Vitality
            </h2>
            
            <p className="about-overview__lead">
              The Egyptian Trading Company is a specialized company operating in the manufacturing, trading and export of fertilizers and mineral soil-conditioning products. The company serves agricultural, industrial and commercial customers by supplying a diversified product portfolio designed to support crop nutrition, soil improvement and industrial applications.
            </p>

            <p className="about-overview__body">
              Our business is built around product quality, dependable supply, professional service and long-term customer relationships. Through a flexible sourcing and distribution network, we work to meet customer requirements for product specifications, packaging, quantities and delivery schedules.
            </p>

            <p className="about-overview__body">
              The company is committed to developing reliable international trade relationships and serving customers across regional and global markets. Our objective is to provide dependable fertilizer and mineral products that enhance agricultural productivity and meet exacting industrial standards.
            </p>

            {/* Quick Stats Grid */}
            <div className="about-stats-grid">
              <div className="about-stat-card">
                <span className="about-stat-card__number">15+</span>
                <span className="about-stat-card__label">Years Industry Presence</span>
              </div>
              <div className="about-stat-card">
                <span className="about-stat-card__number">9+</span>
                <span className="about-stat-card__label">Core Product Lines</span>
              </div>
              <div className="about-stat-card">
                <span className="about-stat-card__number">5+</span>
                <span className="about-stat-card__label">Global Export Markets</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image with ISO Badge */}
          <div className="about-overview__img-col">
            <div className="about-overview__img-frame">
              <img
                src={industrialImg}
                alt="Automated Fertilizer Production Facility"
                className="about-overview__img"
              />
              <div className="about-overview__badge-card">
                <div className="about-overview__badge-icon">🌿</div>
                <div>
                  <div className="about-overview__badge-title">ISO 9001:2015 Compliant Standards</div>
                  <div className="about-overview__badge-sub">High-Capacity Precision Packaging & Global Dispatch</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: BUILT ON AGRONOMIC PURPOSE ═════════ */}
      <section className="about-purpose">
        <div className="container">
          <div className="about-section-header">
            <div className="section-label">AGRONOMIC PURPOSE</div>
            <h2 className="about-section-title">Built on Agronomic Purpose</h2>
            <p className="about-section-desc">
              Bridging agricultural productivity and mineral science to deliver reliable crop nutrition worldwide.
            </p>
          </div>

          <div className="about-purpose__grid">
            {/* Vision Card */}
            <div className="about-purpose__card">
              <div className="about-purpose__card-top">
                <div className="about-purpose__icon-circle">
                  <span>🌐</span>
                </div>
                <span className="about-purpose__tag">LONG-TERM HORIZON</span>
              </div>
              <h3 className="about-purpose__card-title">Our Vision</h3>
              <p className="about-purpose__card-text">
                To establish The Egyptian Trading Company as a leading and trusted regional and international partner in the fertilizer and mineral-products sector, recognized for consistent product quality, professional integrity, and customer-focused supply solutions.
              </p>
              <div className="about-purpose__card-link">
                <span>🌱 Sustainable Agricultural Future</span>
                <span className="about-purpose__arrow">→</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="about-purpose__card">
              <div className="about-purpose__card-top">
                <div className="about-purpose__icon-circle">
                  <span>🎯</span>
                </div>
                <span className="about-purpose__tag">DAILY EXECUTION</span>
              </div>
              <h3 className="about-purpose__card-title">Our Mission</h3>
              <p className="about-purpose__card-text">
                To deliver reliable, high-grade fertilizer and soil-conditioning products tailored to our customers' precise agricultural and industrial needs, ensuring consistent supply schedules, customized packaging, and proactive international trade support.
              </p>
              <div className="about-purpose__card-link">
                <span>⚡ Commitment to Long-Term Value</span>
                <span className="about-purpose__arrow">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 3: CORE CORPORATE VALUES ══════════════ */}
      <section className="about-values">
        <div className="container">
          <div className="about-section-header">
            <div className="section-label">THE ETHOS OF OUR TRADE</div>
            <h2 className="about-section-title">Core Corporate Values</h2>
            <p className="about-section-desc">
              The fundamental principles that guide our sourcing, production standards, customer service, and international partnerships.
            </p>
          </div>

          <div className="about-values__grid">
            {CORE_VALUES.map((val) => (
              <div key={val.title} className="about-values__card">
                <div className="about-values__card-head">
                  <span className="about-values__card-num">{val.num}</span>
                  <span className="about-values__card-icon">{val.icon}</span>
                </div>
                <h3 className="about-values__card-title">{val.title}</h3>
                <p className="about-values__card-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 4: SCIENTIFIC RIGOR & CERTIFICATIONS ══ */}
      <section className="about-certifications">
        <div className="container">
          <div className="about-certifications__grid">
            {/* Left Column: Laboratory Photo */}
            <div className="about-certifications__img-col">
              <div className="about-certifications__img-frame">
                <img
                  src={labImg}
                  alt="Analytical Chemistry Testing Lab"
                  className="about-certifications__img"
                />
                <div className="about-certifications__caption">
                  <span className="about-certifications__caption-icon">🧪</span>
                  <span>Analytical chemistry lab testing raw materials and finished lots.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Information & 4 Cert Cards */}
            <div className="about-certifications__text-col">
              <div className="section-label">ASSURANCE & COMPLIANCE</div>
              <h2 className="about-certifications__heading">
                Scientific Rigor & International Certification
              </h2>
              <p className="about-certifications__lead">
                Every product supplied by The Egyptian Trading Company is backed by comprehensive technical documentation and strict compliance. From raw mineral extraction to final bagged shipment, our quality assurance protocols ensure total reliability across every chemical metric.
              </p>

              <div className="about-cert-grid">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.title} className="about-cert-card">
                    <div className="about-cert-card__top">
                      <span className="about-cert-card__icon">{cert.icon}</span>
                      <span className="about-cert-card__code">{cert.code}</span>
                    </div>
                    <h4 className="about-cert-card__title">{cert.title}</h4>
                    <p className="about-cert-card__desc">{cert.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 5: MANUFACTURING FACILITIES & INFRASTRUCTURE ══ */}
      <section className="about-facilities">
        <div className="container">
          <div className="about-facilities__top-bar">
            <div>
              <div className="section-label">INFRASTRUCTURE & REACH</div>
              <h2 className="about-section-title" style={{ textAlign: 'left', marginBottom: '8px' }}>
                Manufacturing Facilities & Infrastructure
              </h2>
              <p className="about-section-desc" style={{ textAlign: 'left', margin: 0 }}>
                Integrated production facilities, dedicated quality labs, and sea-freight multimodal logistics network.
              </p>
            </div>
            <button
              onClick={() => handleNav('#contact', 'home')}
              className="about-facilities__link-btn"
            >
              Contact Operations Desk →
            </button>
          </div>

          {/* 3 Image Cards */}
          <div className="about-facilities__img-grid">
            {FACILITIES.map((fac) => (
              <div key={fac.title} className="about-facility-card">
                <div className="about-facility-card__img-wrap">
                  <img src={fac.img} alt={fac.title} className="about-facility-card__img" />
                  <div className="about-facility-card__overlay">
                    <span className="about-facility-card__badge">{fac.badge}</span>
                    <h4 className="about-facility-card__title">{fac.title}</h4>
                    <p className="about-facility-card__sub">{fac.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3 Feature Capability Cards */}
          <div className="about-facilities__feature-grid">
            {FACILITIES.map((fac) => (
              <div key={fac.featureTitle} className="about-feature-item">
                <div className="about-feature-item__icon-wrap">
                  <span className="about-feature-item__icon">{fac.featureIcon}</span>
                </div>
                <div className="about-feature-item__content">
                  <h4 className="about-feature-item__title">{fac.featureTitle}</h4>
                  <p className="about-feature-item__desc">{fac.featureDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 6: CTA BANNER ═════════════════════════ */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta__inner">
            <div className="about-cta__text">
              <span className="about-cta__tag">GLOBAL TRADE & SUPPLY</span>
              <h2 className="about-cta__title">
                Looking to Partner with The Egyptian Trading Company?
              </h2>
              <p className="about-cta__desc">
                Connect with our export and technical team to discuss your fertilizer requirements, custom formulations, bulk tenders, or long-term supply agreements.
              </p>
            </div>
            <div className="about-cta__actions">
              <button
                className="about-cta__btn-white"
                onClick={() => handleNav('#products', 'home')}
              >
                View Product Catalog
              </button>
              <button
                className="about-cta__btn-gold"
                onClick={() => handleNav('#contact', 'home')}
              >
                Contact Our Trade Desk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ═════════════════════════════════════════ */}
      <footer className="footer">
        <div className="footer__main container">
          {/* Brand Column */}
          <div>
            <div className="footer__brand-logo">
              <div className="footer__brand-icon">🌿</div>
              <span className="footer__brand-name">The Egyptian Trading Co.</span>
            </div>
            <p className="footer__brand-desc">
              A specialized company in the manufacturing, trading and export of fertilizers and mineral soil-conditioning products. Committed to dependable supply and long-term customer partnerships.
            </p>
            <div style={{ marginTop: '14px', fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>
              <div>📍 51 Zahraa St, Dokki, Giza, Egypt</div>
              <div style={{ marginTop: '4px' }}>
                <a href="tel:+201110009980" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>
                  📞 +20 111 000 9980
                </a>
              </div>
              <div style={{ marginTop: '4px' }}>
                <a href="tel:+201156186199" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>
                  📞 +20 115 618 6199
                </a>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <div className="footer__col-title">Products</div>
            <div className="footer__col-links">
              {['NPK Fertilizers', 'Urea', 'Granular Sulphur', 'Potassium Fertilizers', 'DAP', 'Superphosphate', 'Limestone', 'Granular Iron', 'Granular Manganese'].map((l) => (
                <button
                  key={l}
                  onClick={() => handleNav('#products', 'home')}
                  className="footer__col-link-btn"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <div className="footer__col-title">Our Business</div>
            <div className="footer__col-links">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="footer__col-link-btn">
                About Us
              </button>
              <button onClick={() => handleNav('#precision', 'home')} className="footer__col-link-btn">
                Manufacturing
              </button>
              <button onClick={() => handleNav('#industrial', 'home')} className="footer__col-link-btn">
                Trading & Sourcing
              </button>
              <button onClick={() => handleNav('#industrial', 'home')} className="footer__col-link-btn">
                Export Services
              </button>
              <button onClick={() => handleNav('#supply', 'home')} className="footer__col-link-btn">
                Global Customers
              </button>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <div className="footer__col-title">Contact</div>
            <div className="footer__col-links">
              <a href="mailto:info@egyptiantrading.com" className="footer__col-link">✉ Send Email</a>
              <a href="tel:+201110009980" className="footer__col-link">📞 +20 111 000 9980</a>
              <a href="tel:+201156186199" className="footer__col-link">📞 +20 115 618 6199</a>
              <span className="footer__col-link" style={{ lineHeight: '1.6' }}>
                📍 51 Zahraa St, Dokki<br />Giza, Egypt
              </span>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="footer__bottom">
            <span>© 2026 The Egyptian Trading Company. All rights reserved.</span>
            <div className="footer__bottom-links">
              <span className="footer__bottom-link">Privacy Policy</span>
              <span className="footer__bottom-link">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
