import heroFarmImg from '../assets/976f68972ffc918a2d6d17eacf3084bf.jpg';
import labImg from '../assets/7b4997f5946d184f30015154d38dda6d.jpg';
import industrialImg from '../assets/3591ce72270e8396cd2d2bb21dcc6953.jpg';
import supplyImg from '../assets/ChatGPT-Image-Sep-15-2026-09_27_12-AM-780x470.png';
import { useTranslation } from '../hooks/useTranslation';

import './HomePage.css';

export default function HomePage({ onNavigate }) {
  const { t, productsData } = useTranslation();

  const handleNav = (target, page = 'home') => {
    if (onNavigate) {
      onNavigate(page, target);
    } else {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activities = t('home.overview.activities') || [];
  const supplyPillars = t('home.supplyApproach.pillars') || [];
  const customers = t('home.customers.list') || [];
  const whyUsCards = t('home.whyUs.cards') || [];
  const heroStats = t('home.hero.stats') || [];
  const statsBar = t('home.statsBar') || [];

  return (
    <main>
      {/* ══ HERO ══════════════════════════════════════════ */}
      <section id="hero" className="hero">
        <div className="hero__bg">
          <img src={heroFarmImg} alt="Fertilizer farm background" className="hero__bg-img" />
          <div className="hero__bg-overlay" />
        </div>

        <div className="hero__content">
          {/* Left Column */}
          <div className="hero__left">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              {t('home.hero.badge')}
            </div>

            <h1 className="hero__title">
              {t('home.hero.title1')}{' '}
              <span className="hero__title-accent">{t('home.hero.titleAccent')}</span>{' '}
              {t('home.hero.title2')}
            </h1>

            <p className="hero__desc">
              {t('home.hero.desc')}
            </p>

            <div className="hero__actions">
              <button
                className="btn btn-primary"
                id="hero-products-btn"
                onClick={() => handleNav('#products', 'products')}
              >
                {t('home.hero.viewProducts')}
              </button>
              <button
                className="btn btn-outline"
                id="hero-quote-btn"
                onClick={() => handleNav('#contact', 'home')}
              >
                {t('home.hero.requestQuote')}
              </button>
            </div>

            <div className="hero__stats">
              {heroStats.map((s) => (
                <div key={s.val} className="hero__stat">
                  <div className="hero__stat-value">{s.val}</div>
                  <div className="hero__stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="hero__right">
            <div className="hero__img-card">
              <img src={heroFarmImg} alt="Agricultural field" />
              <div className="hero__card-tag">
                <span className="hero__card-tag-icon">🇪🇬</span>
                <div className="hero__card-tag-text">
                  <span className="hero__card-tag-title">{t('home.hero.cardTagTitle')}</span>
                  <span className="hero__card-tag-sub">{t('home.hero.cardTagSub')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS BAR ══════════════════════════════════════ */}
      <div className="stats-bar">
        <div className="stats-bar__inner">
          {statsBar.map((s) => (
            <div key={s.num} className="stats-bar__item">
              <div className="stats-bar__num">{s.num}</div>
              <div className="stats-bar__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ ABOUT / BUSINESS ACTIVITIES ════════════════════ */}
      <section id="precision" className="precision">
        <div className="precision__inner">
          {/* Text */}
          <div className="precision__text">
            <span className="section-label">{t('home.overview.label')}</span>
            <h2 className="precision__title">{t('home.overview.title')}</h2>
            <p className="precision__desc">
              {t('home.overview.desc')}
            </p>

            <div className="precision__checks">
              {activities.map((a) => (
                <div key={a.title} className="precision__check">
                  <div className="precision__check-icon">{a.icon}</div>
                  <div>
                    <strong>{a.title}:</strong> {a.desc}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '12px' }}>
              <button
                className="btn btn-outline-dark"
                id="about-learn-btn"
                onClick={() => handleNav('#about', 'about')}
              >
                {t('home.overview.learnMoreBtn')}
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="precision__img-wrap">
            <img src={labImg} alt="Fertilizer production and quality control" />
            <div className="precision__img-badge">
              <span className="precision__img-badge-icon">🏆</span>
              <div className="precision__img-badge-text">
                <span className="precision__img-badge-title">{t('home.overview.badgeTitle')}</span>
                <span className="precision__img-badge-sub">{t('home.overview.badgeSub')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SUPPLY APPROACH ════════════════════════════════ */}
      <section id="industrial" className="industrial">
        <div className="industrial__inner">
          {/* Image */}
          <div className="industrial__img-wrap">
            <img src={industrialImg} alt="Fertilizer manufacturing and industrial operations" />
          </div>

          {/* Text */}
          <div className="industrial__text">
            <span className="section-label">{t('home.supplyApproach.label')}</span>
            <h2 className="industrial__title">{t('home.supplyApproach.title')}</h2>
            <p className="industrial__desc">
              {t('home.supplyApproach.desc')}
            </p>
            <div className="industrial__features">
              {supplyPillars.map((f) => (
                <div key={f.title} className="industrial__feature">
                  <div className="industrial__feature-icon">{f.icon}</div>
                  <div className="industrial__feature-title">{f.title}</div>
                  <div className="industrial__feature-desc">{f.desc}</div>
                </div>
              ))}
            </div>
            <div>
              <button
                className="btn btn-outline-dark"
                id="supply-docs-btn"
                onClick={() => handleNav('#contact', 'home')}
              >
                {t('home.supplyApproach.requestDocsBtn')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GLOBAL CUSTOMERS ═══════════════════════════════ */}
      <section id="supply" className="supply">
        <div className="supply__header">
          <span className="section-label">{t('home.customers.label')}</span>
          <h2 className="supply__title">{t('home.customers.title')}</h2>
          <p className="supply__desc">
            {t('home.customers.desc')}
          </p>
        </div>

        <div className="supply__inner">
          <div className="supply__img-wrap">
            <img src={supplyImg} alt="Global supply chain and export operations" />
          </div>

          <div className="supply__regions">
            {customers.map((c) => (
              <div key={c.name} className="supply__region">
                <span className="supply__region-flag">{c.flag}</span>
                <div className="supply__region-info">
                  <div className="supply__region-name">{c.name}</div>
                  <div className="supply__region-detail">{c.location}</div>
                </div>
                <span className="supply__region-badge">{c.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══════════════════════════════════ */}
      <section className="why-us">
        <div className="container">
          <div className="why-us__header">
            <span className="section-label">{t('home.whyUs.label')}</span>
            <h2 className="why-us__title">{t('home.whyUs.title')}</h2>
          </div>
          <div className="why-us__grid">
            {whyUsCards.map((item) => (
              <div key={item.title} className="why-us__card">
                <div className="why-us__card-icon">{item.icon}</div>
                <h3 className="why-us__card-title">{item.title}</h3>
                <p className="why-us__card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ═════════════════════════════════════ */}
      <section id="contact" className="cta-banner">
        <div className="cta-banner__inner">
          <h2 className="cta-banner__title">{t('home.ctaBanner.title')}</h2>
          <p className="cta-banner__desc">
            {t('home.ctaBanner.desc')}
          </p>
          <div className="cta-banner__actions">
            <a href="mailto:info@egyptiantrading.com" className="cta-banner__btn-primary" id="cta-email-btn">
              {t('home.ctaBanner.sendEnquiry')}
            </a>
            <a href="tel:+201110009980" className="cta-banner__btn-ghost" id="cta-call-btn">
              {t('home.ctaBanner.call')}
            </a>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ═════════════════════════════════════════ */}
      <footer id="footer" className="footer">
        <div className="footer__main">
          {/* Brand */}
          <div>
            <div className="footer__brand-logo">
              <div className="footer__brand-icon">🌿</div>
              <span className="footer__brand-name">{t('nav.companyName')}</span>
            </div>
            <p className="footer__brand-desc">
              {t('footer.brandDesc')}
            </p>
            <div style={{ marginTop: '12px', fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>
              <div>📍 {t('common.addressShort')}</div>
              <div style={{ marginTop: '4px' }}>
                <a href="tel:+201110009980" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
                  📞 {t('common.callNumber1')}
                </a>
              </div>
              <div style={{ marginTop: '4px' }}>
                <a href="tel:+201156186199" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
                  📞 {t('common.callNumber2')}
                </a>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="footer__col-title">{t('footer.productsTitle')}</div>
            <div className="footer__col-links">
              {productsData.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="footer__col-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(`#${p.id}`, 'products');
                  }}
                >
                  {p.name}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="footer__col-title">{t('footer.businessTitle')}</div>
            <div className="footer__col-links">
              <a
                href="#about"
                className="footer__col-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('#about', 'about');
                }}
              >
                {t('footer.links.aboutUs')}
              </a>
              <a
                href="#precision"
                className="footer__col-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('#precision', 'home');
                }}
              >
                {t('footer.links.manufacturing')}
              </a>
              <a
                href="#precision"
                className="footer__col-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('#precision', 'home');
                }}
              >
                {t('footer.links.trading')}
              </a>
              <a
                href="#precision"
                className="footer__col-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('#precision', 'home');
                }}
              >
                {t('footer.links.exportServices')}
              </a>
              <a
                href="#industrial"
                className="footer__col-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('#industrial', 'home');
                }}
              >
                {t('footer.links.qualityApproach')}
              </a>
              <a
                href="#supply"
                className="footer__col-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('#supply', 'home');
                }}
              >
                {t('footer.links.globalCustomers')}
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="footer__col-title">{t('footer.contactTitle')}</div>
            <div className="footer__col-links">
              <a href="mailto:info@egyptiantrading.com" className="footer__col-link">{t('footer.sendEmail')}</a>
              <a href="tel:+201110009980" className="footer__col-link">📞 {t('common.callNumber1')}</a>
              <a href="tel:+201156186199" className="footer__col-link">📞 {t('common.callNumber2')}</a>
              <span className="footer__col-link" style={{ lineHeight: '1.6' }}>
                📍 {t('common.addressLine1')}<br />{t('common.addressLine2')}
              </span>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <div className="footer__bottom" style={{ maxWidth: '100%' }}>
            <span>{t('common.allRightsReserved')}</span>
            <div className="footer__bottom-links">
              <span className="footer__bottom-link">{t('common.privacyPolicy')}</span>
              <span className="footer__bottom-link">{t('common.termsOfService')}</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
