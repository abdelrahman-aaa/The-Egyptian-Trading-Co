import ureaBowlImg from '../assets/urea_bowl.jpg';
import sspImg from '../assets/bf8b30819e50db0bdabc998d85a59343.jpg';
import p1Img from '../assets/images (1).jpg';
import p3Img from '../assets/images (2).jpg';
import p2Img from '../assets/images.jpg';
import p4Img from '../assets/images (3).jpg';
import p5Img from '../assets/images (4).jpg';
import p11Img from '../assets/agricultural-lime-powder-500x500.webp';
import p12Img from '../assets/DAP.webp';
import { useTranslation } from '../hooks/useTranslation';

import './ProductsPage.css';

const PRODUCT_IMAGES = {
  npk: p1Img,
  urea: ureaBowlImg,
  sulphur: p2Img,
  potassium: p3Img,
  iron: p4Img,
  manganese: p5Img,
  superphosphate: sspImg,
  limestone: p11Img,
  dap: p12Img,
};

export default function ProductsPage({ onNavigate }) {
  const { t, productsData } = useTranslation();

  const handleNav = (target, page = 'home') => {
    if (onNavigate) {
      onNavigate(page, target);
    } else {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const destinations = t('productsPage.toolbar.destinations') || [];
  const packagingOptions = t('productsPage.toolbar.packagingOptions') || [];
  const detailedStats = t('productsPage.detailed.stats') || [];
  const detailedTableRows = t('productsPage.detailed.tableRows') || [];
  const qualityCards = t('productsPage.quality.cards') || [];

  return (
    <main className="products-page" id="products">
      {/* ══ HEADER SECTION ═══════════════════════════════════ */}
      <section className="products-header">
        <div className="container">
          <div className="products-header__content">
            <div className="products-header__text">
              <span className="products-header__tag">
                {t('productsPage.header.tag')}
              </span>
              <h1 className="products-header__title">
                {t('productsPage.header.title')}
              </h1>
              <p className="products-header__desc">
                {t('productsPage.header.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FILTER TOOLBAR ═══════════════════════════════════ */}
      <section className="products-toolbar">
        <div className="container">
          <div className="products-toolbar__inner">
            <div className="products-toolbar__filters">
              <button className="products-filter-btn active">
                {t('productsPage.toolbar.allProducts')} ({productsData.length})
              </button>
            </div>
            <div className="products-toolbar__dropdowns">
              <select className="products-select" aria-label="Export Destinations">
                <option>{t('productsPage.toolbar.exportDestinations')}</option>
                {destinations.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
              <select className="products-select" aria-label="Packaging Sizes">
                <option>{t('productsPage.toolbar.packagingAll')}</option>
                {packagingOptions.map((pkg) => (
                  <option key={pkg}>{pkg}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GRID SECTION ═════════════════════════════════════ */}
      <section className="products-grid-sec">
        <div className="container">
          <div className="products-grid-header">
            <div>
              <h2 className="products-grid-title">{t('productsPage.gridHeader.title')}</h2>
              <p className="products-grid-subtitle">{t('productsPage.gridHeader.subtitle')}</p>
            </div>
            <button className="products-download-btn" onClick={() => handleNav('#contact', 'home')}>
              {t('productsPage.gridHeader.downloadAll')} <span style={{ marginLeft: '6px' }}>→</span>
            </button>
          </div>

          <div className="products-grid">
            {productsData.map((prod) => (
              <div key={prod.id} id={prod.id} className="product-card">
                <div className="product-card__img-box">
                  <img
                    src={PRODUCT_IMAGES[prod.id] || p1Img}
                    alt={prod.name}
                    className="product-card__img"
                  />
                  <span className="product-card__badge">{prod.badge}</span>
                </div>
                <div className="product-card__body">
                  <h3 className="product-card__title">{prod.name}</h3>
                  <p className="product-card__desc">{prod.desc}</p>

                  <div className="product-card__specs">
                    {prod.specs.map((spec) => (
                      <div key={spec.label} className="product-card__spec-row">
                        <span className="product-card__spec-label">{spec.label}</span>
                        <span className="product-card__spec-val">{spec.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="product-card__packaging">
                    <span className="product-card__pack-icon">📦</span>
                    {prod.packaging}
                  </div>

                  <button
                    className="product-card__btn"
                    onClick={() => handleNav('#contact', 'home')}
                  >
                    <span style={{ marginRight: '6px' }}>⬇</span> {t('productsPage.card.downloadTDS')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURED PRODUCT (UREA) ══════════════════════════ */}
      <section className="product-detailed">
        <div className="container">
          <div className="product-detailed__header">
            <div className="section-label" style={{ marginBottom: '8px' }}>
              {t('productsPage.detailed.label')}
            </div>
            <h2 className="product-detailed__title">
              {t('productsPage.detailed.title')}
            </h2>
            <p className="product-detailed__desc">
              {t('productsPage.detailed.desc')}
            </p>
          </div>

          <div className="product-detailed__grid">
            {/* Left Image Column */}
            <div className="product-detailed__img-col">
              <div className="product-detailed__img-frame">
                <img src={ureaBowlImg} alt="Urea 46-0-0 Granules" className="product-detailed__main-img" />
                <span className="product-detailed__img-badge">
                  {t('productsPage.detailed.badge')}
                </span>
              </div>
              <div className="product-detailed__stats">
                {detailedStats.map((st) => (
                  <div key={st.label} className="product-detailed__stat">
                    <span className="product-detailed__stat-icon">🌱</span>
                    <span className="product-detailed__stat-val">{st.val}</span>
                    <span className="product-detailed__stat-label">{st.label}</span>
                  </div>
                ))}
              </div>
              <div className="product-detailed__alert">
                <div className="product-detailed__alert-icon">🛡️</div>
                <div>
                  <div className="product-detailed__alert-title">
                    {t('productsPage.detailed.alertTitle')}
                  </div>
                  <div className="product-detailed__alert-text">
                    {t('productsPage.detailed.alertText')}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Data Column */}
            <div className="product-detailed__data-col">
              <div className="product-detailed__data-card">
                <div className="product-detailed__tabs">
                  <div className="product-detailed__tab active">
                    {t('productsPage.detailed.tabTitle')}
                  </div>
                </div>

                <div className="product-detailed__table-wrap">
                  <table className="product-detailed__table">
                    <thead>
                      <tr>
                        <th>{t('productsPage.detailed.tableHeaders.param')}</th>
                        <th>{t('productsPage.detailed.tableHeaders.standard')}</th>
                        <th>{t('productsPage.detailed.tableHeaders.ourGrade')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {detailedTableRows.map((row) => (
                        <tr key={row.param}>
                          <td>{row.param}</td>
                          <td>{row.std}</td>
                          <td className="product-detailed__td-highlight">{row.our}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="product-detailed__info-boxes">
                  <div className="product-detailed__info-box">
                    <div className="product-detailed__info-title">
                      <span className="product-detailed__info-icon">🌿</span>{' '}
                      {t('productsPage.detailed.infoBox1Title')}
                    </div>
                    <p className="product-detailed__info-text">
                      {t('productsPage.detailed.infoBox1Text')}
                    </p>
                  </div>
                  <div className="product-detailed__info-box">
                    <div className="product-detailed__info-title">
                      <span className="product-detailed__info-icon">📦</span>{' '}
                      {t('productsPage.detailed.infoBox2Title')}
                    </div>
                    <p className="product-detailed__info-text">
                      {t('productsPage.detailed.infoBox2Text')}
                    </p>
                  </div>
                </div>

                <div className="product-detailed__actions">
                  <button onClick={() => handleNav('#contact', 'home')} className="product-detailed__btn-primary">
                    <span style={{ marginRight: '8px' }}>✉</span> {t('productsPage.detailed.requestQuote')}
                  </button>
                  <button onClick={() => handleNav('#contact', 'home')} className="product-detailed__btn-outline">
                    <span style={{ marginRight: '8px' }}>⬇</span> {t('productsPage.detailed.downloadSDS')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ QUALITY VERIFICATION SECTION ═════════════════════ */}
      <section className="products-quality">
        <div className="container">
          <div className="about-section-header" style={{ marginBottom: '40px' }}>
            <div className="section-label">{t('productsPage.quality.label')}</div>
            <h2 className="about-section-title">{t('productsPage.quality.title')}</h2>
            <p className="about-section-desc">
              {t('productsPage.quality.desc')}
            </p>
          </div>

          <div className="products-quality__grid">
            {qualityCards.map((card) => (
              <div key={card.title} className="products-quality__card">
                <div className="products-quality__icon">{card.icon}</div>
                <h4 className="products-quality__title">{card.title}</h4>
                <p className="products-quality__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ═════════════════════════════════════ */}
      <section className="products-cta">
        <div className="container">
          <div className="products-cta__inner">
            <div className="products-cta__text">
              <span className="products-cta__tag">{t('productsPage.cta.tag')}</span>
              <h2 className="products-cta__title">
                {t('productsPage.cta.title')}
              </h2>
              <p className="products-cta__desc">
                {t('productsPage.cta.desc')}
              </p>
            </div>
            <div className="products-cta__actions">
              <button
                className="products-cta__btn-white"
                onClick={() => handleNav('#contact', 'home')}
              >
                {t('productsPage.cta.btnRegional')}
              </button>
              <button
                className="products-cta__btn-outline"
                onClick={() => handleNav('#contact', 'home')}
              >
                {t('productsPage.cta.btnRFI')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SHARED FOOTER ═════════════════════════════════════ */}
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
              <button onClick={() => handleNav('#about', 'about')} className="footer__col-link-btn">
                {t('footer.links.aboutUs')}
              </button>
              <button onClick={() => handleNav('#precision', 'home')} className="footer__col-link-btn">
                {t('footer.links.manufacturing')}
              </button>
              <button onClick={() => handleNav('#precision', 'home')} className="footer__col-link-btn">
                {t('footer.links.trading')}
              </button>
              <button onClick={() => handleNav('#precision', 'home')} className="footer__col-link-btn">
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