import heroFarmImg from '../assets/976f68972ffc918a2d6d17eacf3084bf.jpg';
import labImg from '../assets/7b4997f5946d184f30015154d38dda6d.jpg';
import industrialImg from '../assets/3591ce72270e8396cd2d2bb21dcc6953.jpg';
import packingImg from '../assets/a36129701f5c857e5c0aca4f0fc49712.jpg';
import { useTranslation } from '../hooks/useTranslation';
import './AboutPage.css';

export default function AboutPage({ onNavigate }) {
  const { t, productsData } = useTranslation();

  const handleNav = (target, page = 'home') => {
    if (onNavigate) {
      onNavigate(page, target);
    } else {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pills = t('about.hero.pills') || [];
  const overviewStats = t('about.overview.stats') || [];
  const coreValues = t('about.values.items') || [];
  const certsList = t('about.certifications.list') || [];
  const facilitiesCards = t('about.facilities.cards') || [];

  // Facility images matching the cards order
  const facilityImages = [industrialImg, packingImg, labImg];

  return (
    <main className="about-page">
      {/* ══ HERO SECTION ═══════════════════════════════════ */}
      <section className="about-hero">
        <div className="about-hero__bg-img" style={{ backgroundImage: `url(${heroFarmImg})` }} />
        <div className="about-hero__overlay" />

        <div className="about-hero__content container">
          <div className="about-hero__badge">
            <span className="about-hero__badge-dot" />
            {t('about.hero.badge')}
          </div>

          <h1 className="about-hero__title">{t('about.hero.title')}</h1>

          <p className="about-hero__subtitle">
            {t('about.hero.subtitle')}
          </p>

          <div className="about-hero__pills">
            {pills.map((pill) => (
              <span key={pill} className="about-hero__pill">{pill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: COMPANY OVERVIEW ═══════════════════ */}
      <section className="about-overview container">
        <div className="about-overview__grid">
          {/* Left Column: Text & Stats */}
          <div className="about-overview__text-col">
            <div className="section-label">{t('about.overview.label')}</div>
            <h2 className="about-overview__heading">
              {t('about.overview.heading')}
            </h2>

            <p className="about-overview__lead">
              {t('about.overview.lead')}
            </p>

            <p className="about-overview__body">
              {t('about.overview.body1')}
            </p>

            <p className="about-overview__body">
              {t('about.overview.body2')}
            </p>

            {/* Quick Stats Grid */}
            <div className="about-stats-grid">
              {overviewStats.map((st) => (
                <div key={st.label} className="about-stat-card">
                  <span className="about-stat-card__number">{st.number}</span>
                  <span className="about-stat-card__label">{st.label}</span>
                </div>
              ))}
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
                  <div className="about-overview__badge-title">{t('about.overview.badgeTitle')}</div>
                  <div className="about-overview__badge-sub">{t('about.overview.badgeSub')}</div>
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
            <div className="section-label">{t('about.purpose.label')}</div>
            <h2 className="about-section-title">{t('about.purpose.title')}</h2>
            <p className="about-section-desc">
              {t('about.purpose.desc')}
            </p>
          </div>

          <div className="about-purpose__grid">
            {/* Vision Card */}
            <div className="about-purpose__card">
              <div className="about-purpose__card-top">
                <div className="about-purpose__icon-circle">
                  <span>🌐</span>
                </div>
                <span className="about-purpose__tag">{t('about.purpose.vision.tag')}</span>
              </div>
              <h3 className="about-purpose__card-title">{t('about.purpose.vision.title')}</h3>
              <p className="about-purpose__card-text">
                {t('about.purpose.vision.text')}
              </p>
              <div className="about-purpose__card-link">
                <span>{t('about.purpose.vision.link')}</span>
                <span className="about-purpose__arrow">→</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="about-purpose__card">
              <div className="about-purpose__card-top">
                <div className="about-purpose__icon-circle">
                  <span>🎯</span>
                </div>
                <span className="about-purpose__tag">{t('about.purpose.mission.tag')}</span>
              </div>
              <h3 className="about-purpose__card-title">{t('about.purpose.mission.title')}</h3>
              <p className="about-purpose__card-text">
                {t('about.purpose.mission.text')}
              </p>
              <div className="about-purpose__card-link">
                <span>{t('about.purpose.mission.link')}</span>
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
            <div className="section-label">{t('about.values.label')}</div>
            <h2 className="about-section-title">{t('about.values.title')}</h2>
            <p className="about-section-desc">
              {t('about.values.desc')}
            </p>
          </div>

          <div className="about-values__grid">
            {coreValues.map((val) => (
              <div key={val.num} className="about-values__card">
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
                  <span>{t('about.certifications.caption')}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Information & 4 Cert Cards */}
            <div className="about-certifications__text-col">
              <div className="section-label">{t('about.certifications.label')}</div>
              <h2 className="about-certifications__heading">
                {t('about.certifications.heading')}
              </h2>
              <p className="about-certifications__lead">
                {t('about.certifications.lead')}
              </p>

              <div className="about-cert-grid">
                {certsList.map((cert) => (
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
              <div className="section-label">{t('about.facilities.label')}</div>
              <h2 className="about-section-title" style={{ textAlign: 'left', marginBottom: '8px' }}>
                {t('about.facilities.title')}
              </h2>
              <p className="about-section-desc" style={{ textAlign: 'left', margin: 0 }}>
                {t('about.facilities.desc')}
              </p>
            </div>
            <button
              onClick={() => handleNav('#contact', 'home')}
              className="about-facilities__link-btn"
            >
              {t('about.facilities.contactBtn')}
            </button>
          </div>

          {/* 3 Image Cards */}
          <div className="about-facilities__img-grid">
            {facilitiesCards.map((fac, idx) => (
              <div key={fac.title} className="about-facility-card">
                <div className="about-facility-card__img-wrap">
                  <img src={facilityImages[idx] || industrialImg} alt={fac.title} className="about-facility-card__img" />
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
            {facilitiesCards.map((fac) => (
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
              <span className="about-cta__tag">{t('about.cta.tag')}</span>
              <h2 className="about-cta__title">
                {t('about.cta.title')}
              </h2>
              <p className="about-cta__desc">
                {t('about.cta.desc')}
              </p>
            </div>
            <div className="about-cta__actions">
              <button
                className="about-cta__btn-white"
                onClick={() => handleNav('#products', 'products')}
              >
                {t('about.cta.viewCatalog')}
              </button>
              <button
                className="about-cta__btn-gold"
                onClick={() => handleNav('#contact', 'home')}
              >
                {t('about.cta.contactDesk')}
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
              <span className="footer__brand-name">{t('nav.companyName')}</span>
            </div>
            <p className="footer__brand-desc">
              {t('footer.brandDesc')}
            </p>
            <div style={{ marginTop: '14px', fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>
              <div>📍 {t('common.addressShort')}</div>
              <div style={{ marginTop: '4px' }}>
                <a href="tel:+201110009980" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>
                  📞 {t('common.callNumber1')}
                </a>
              </div>
              <div style={{ marginTop: '4px' }}>
                <a href="tel:+201156186199" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>
                  📞 {t('common.callNumber2')}
                </a>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <div className="footer__col-title">{t('footer.productsTitle')}</div>
            <div className="footer__col-links">
              {productsData.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleNav(`#${p.id}`, 'products')}
                  className="footer__col-link-btn"
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <div className="footer__col-title">{t('footer.businessTitle')}</div>
            <div className="footer__col-links">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="footer__col-link-btn">
                {t('footer.links.aboutUs')}
              </button>
              <button onClick={() => handleNav('#precision', 'home')} className="footer__col-link-btn">
                {t('footer.links.manufacturing')}
              </button>
              <button onClick={() => handleNav('#industrial', 'home')} className="footer__col-link-btn">
                {t('footer.links.trading')}
              </button>
              <button onClick={() => handleNav('#industrial', 'home')} className="footer__col-link-btn">
                {t('footer.links.exportServices')}
              </button>
              <button onClick={() => handleNav('#supply', 'home')} className="footer__col-link-btn">
                {t('footer.links.globalCustomers')}
              </button>
            </div>
          </div>

          {/* Contact Column */}
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

        <div className="container">
          <div className="footer__bottom">
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
