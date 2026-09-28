import ureaBowlImg from '../assets/urea_bowl.jpg';
import sspImg from '../assets/bf8b30819e50db0bdabc998d85a59343.jpg';
import p1Img from '../assets/images (1).jpg';
import p3Img from '../assets/images (2).jpg';
import p2Img from '../assets/images.jpg';
import p4Img from '../assets/images (3).jpg';
import p5Img from '../assets/images (4).jpg';
import p11Img from '../assets/agricultural-lime-powder-500x500.webp';
import p12Img from '../assets/DAP.webp';

import './ProductsPage.css';

/* ── Grid Products Data (9 products, same order as the portfolio table) ── */
const PRODUCTS = [
  {
    id: 'npk',
    badge: 'NPK Compound',
    title: 'NPK Fertilizers',
    desc: 'Multi-nutrient fertilizers supplying nitrogen, phosphorus and potassium according to the required grade.',
    img: p1Img,
    specs: [
      { label: 'Nitrogen (N)', val: 'According to grade' },
      { label: 'Phosphorus (P)', val: 'According to grade' },
      { label: 'Potassium (K)', val: 'According to grade' },
      { label: 'Example Grade', val: '15-15-15 + 4S' },
    ],
    packaging: 'Available in 25kg, 50kg, and Bulk shipment.',
  },
  {
    id: 'urea',
    badge: 'Nitrogen Fertilizer',
    title: 'Urea',
    desc: 'High-nitrogen fertilizer widely used in agricultural applications.',
    img: ureaBowlImg,
    specs: [
      { label: 'Nitrogen (N)', val: '46.0% min' },
      { label: 'Biuret', val: '1.0% max' },
      { label: 'Moisture', val: '0.5% max' },
      { label: 'Particle Size', val: '2-4mm' },
    ],
    packaging: 'Available in 50kg PP bags and 1000kg Jumbo bags.',
  },
  {
    id: 'sulphur',
    badge: 'Soil Conditioner',
    title: 'Granular Sulphur',
    desc: 'Granulated sulphur used in fertilizer programs and soil-management applications.',
    img: p2Img,
    specs: [
      { label: 'Purity (S)', val: '99.5% min' },
      { label: 'Ash Content', val: '0.1% max' },
      { label: 'Moisture', val: '0.5% max' },
      { label: 'Granule Size', val: '2-4mm (90%)' },
    ],
    packaging: 'Dust-free prilling process for safer handling.',
  },
  {
    id: 'mop',
    badge: 'Potassium Source',
    title: 'Potassium Fertilizers',
    desc: 'Potassium-based products used to support plant development and crop quality.',
    img: p3Img,
    specs: [
      { label: 'Potassium (K2O)', val: '60.0% min' },
      { label: 'Chloride (Cl)', val: '47.0% max' },
      { label: 'Moisture', val: '0.5% max' },
      { label: 'Color', val: 'Pink/Red' },
    ],
    packaging: 'Available in 25kg, 50kg, and Bulk shipment.',
  },
  {
    id: 'iron',
    badge: 'Micronutrient',
    title: 'Granular Iron',
    desc: 'Granulated iron product used in agricultural and soil-nutrition applications.',
    img: p4Img, // replace with your own image, e.g. import ironImg from '../assets/granular_iron.jpg'
    specs: [
      { label: 'Iron (Fe)', val: 'Contact for grade' },
      { label: 'Form', val: 'Granular' },
      { label: 'Moisture', val: 'Contact for grade' },
      { label: 'Granule Size', val: 'Contact for grade' },
    ],
    packaging: 'Available in 25kg, 50kg, and Bulk shipment.',
  },
  {
    id: 'manganese',
    badge: 'Micronutrient',
    title: 'Granular Manganese',
    desc: 'Granulated manganese product used to support micronutrient management.',
    img: p5Img, // replace with your own image
    specs: [
      { label: 'Manganese (Mn)', val: 'Contact for grade' },
      { label: 'Form', val: 'Granular' },
      { label: 'Moisture', val: 'Contact for grade' },
      { label: 'Granule Size', val: 'Contact for grade' },
    ],
    packaging: 'Available in 25kg, 50kg, and Bulk shipment.',
  },
  {
    id: 'ssp',
    badge: 'Phosphorus Fertilizer',
    title: 'Superphosphate',
    desc: 'Phosphorus-based fertilizer used to support root development and crop nutrition.',
    img: sspImg,
    specs: [
      { label: 'Effective P2O5', val: '≥ 17.0%' },
      { label: 'Sulphur (S)', val: '≥ 12.0%' },
      { label: 'Form', val: 'Granular / Powder' },
      { label: 'Packaging', val: '25kg / Bulk' },
    ],
    packaging: 'Better Phosphorus • Stronger Roots • Higher Yields',
  },
  {
    id: 'limestone',
    badge: 'Soil Conditioner',
    title: 'Limestone',
    desc: 'Mineral product used in soil conditioning and agricultural applications.',
    img: p11Img, // replace with your own image
    specs: [
      { label: 'CaCO₃', val: 'Contact for grade' },
      { label: 'Form', val: 'Granular / Powder' },
      { label: 'Moisture', val: 'Contact for grade' },
      { label: 'Particle Size', val: 'Contact for grade' },
    ],
    packaging: 'Available in 25kg, 50kg, and Bulk shipment.',
  },
  {
    id: 'dap',
    badge: 'NP Complex',
    title: 'DAP',
    desc: 'Diammonium phosphate fertilizer supplying nitrogen and phosphorus.',
    img: p12Img,
    specs: [
      { label: 'Total Nitrogen', val: '18.0% min' },
      { label: 'Available P2O5', val: '46.0% min' },
      { label: 'Water Soluble P', val: '41.0% min' },
      { label: 'Moisture', val: '1.5% max' },
    ],
    packaging: 'Available in 25kg, 50kg, and Bulk shipment.',
  },
];

export default function ProductsPage({ onNavigate }) {
  const handleNav = (target, page = 'home') => {
    if (onNavigate) {
      onNavigate(page, target);
    } else {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="products-page">
      {/* ══ HEADER SECTION ═══════════════════════════════════ */}
      <section className="products-header">
        <div className="container">
          <div className="products-header__content">
            <div className="products-header__text">
              <span className="products-header__tag">COMPREHENSIVE AGRICULTURAL & INDUSTRIAL PRODUCT PORTFOLIO</span>
              <h1 className="products-header__title">Our Products & Formulations</h1>
              <p className="products-header__desc">
                High-performance fertilizers and mineral formulations developed to optimize crop yields, improve soil structure, and serve demanding industrial applications globally.
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
              <button className="products-filter-btn active">All Products ({PRODUCTS.length})</button>
            </div>
            <div className="products-toolbar__dropdowns">
              <select className="products-select">
                <option>Export Destinations</option>
                <option>Africa</option>
                <option>Europe</option>
                <option>Asia</option>
              </select>
              <select className="products-select">
                <option>Packaging: All Sizes</option>
                <option>25kg Bags</option>
                <option>50kg Bags</option>
                <option>1000kg Jumbo Bulk</option>
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
              <h2 className="products-grid-title">Certified Industrial Formulations</h2>
              <p className="products-grid-subtitle">Consistent chemical grading, superior crop nutrition, and reliable logistics planning.</p>
            </div>
            <button className="products-download-btn">
              Download Full Product Specifications <span style={{ marginLeft: '6px' }}>→</span>
            </button>
          </div>

          <div className="products-grid">
            {PRODUCTS.map((prod) => (
              <div key={prod.id} className="product-card">
                <div className="product-card__img-box">
                  <img src={prod.img} alt={prod.title} className="product-card__img" />
                  <span className="product-card__badge">{prod.badge}</span>
                </div>
                <div className="product-card__body">
                  <h3 className="product-card__title">{prod.title}</h3>
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

                  <button className="product-card__btn">
                    <span style={{ marginRight: '6px' }}>⬇</span> Download Technical Data (TDS)
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
            <div className="section-label" style={{ marginBottom: '8px' }}>FEATURED HIGH-DEMAND PRODUCT</div>
            <h2 className="product-detailed__title">Technical Product Profile & Agronomic Application</h2>
            <p className="product-detailed__desc">Detailed chemical and physical breakdown of our primary export fertilizer. Recognized globally for highest-tier nitrogen concentration and granule consistency.</p>
          </div>

          <div className="product-detailed__grid">
            {/* Left Image Column */}
            <div className="product-detailed__img-col">
              <div className="product-detailed__img-frame">
                <img src={ureaBowlImg} alt="Urea 46-0-0 Granules" className="product-detailed__main-img" />
                <span className="product-detailed__img-badge">UREA 46-0-0</span>
              </div>
              <div className="product-detailed__stats">
                <div className="product-detailed__stat">
                  <span className="product-detailed__stat-icon">🌱</span>
                  <span className="product-detailed__stat-val">46%</span>
                  <span className="product-detailed__stat-label">Total Nitrogen</span>
                </div>
                <div className="product-detailed__stat">
                  <span className="product-detailed__stat-icon">💧</span>
                  <span className="product-detailed__stat-val">0.5%</span>
                  <span className="product-detailed__stat-label">Max Moisture</span>
                </div>
                <div className="product-detailed__stat">
                  <span className="product-detailed__stat-icon">⚪</span>
                  <span className="product-detailed__stat-val">2-4mm</span>
                  <span className="product-detailed__stat-label">Granular Form</span>
                </div>
              </div>
              <div className="product-detailed__alert">
                <div className="product-detailed__alert-icon">🛡️</div>
                <div>
                  <div className="product-detailed__alert-title">EPA & GHS COMPLIANT PRODUCTION</div>
                  <div className="product-detailed__alert-text">Manufactured under strict ISO 9001 quality frameworks, guaranteeing low biuret content and preventing phytotoxicity across sensitive crops during foliar and soil application.</div>
                </div>
              </div>
            </div>

            {/* Right Data Column */}
            <div className="product-detailed__data-col">
              <div className="product-detailed__data-card">
                <div className="product-detailed__tabs">
                  <div className="product-detailed__tab active">CHEMICAL ANALYSIS (TDS)</div>
                </div>
                
                <div className="product-detailed__table-wrap">
                  <table className="product-detailed__table">
                    <thead>
                      <tr>
                        <th>PARAMETER</th>
                        <th>INDUSTRY STANDARD</th>
                        <th>OUR GRADE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Total Nitrogen (N) Content</td>
                        <td>Min 46.0% by weight</td>
                        <td className="product-detailed__td-highlight">46.2% Typical</td>
                      </tr>
                      <tr>
                        <td>Biuret Content</td>
                        <td>Max 1.0% by weight</td>
                        <td className="product-detailed__td-highlight">0.85% Typical</td>
                      </tr>
                      <tr>
                        <td>Moisture Content (H₂O)</td>
                        <td>Max 0.5% by weight</td>
                        <td className="product-detailed__td-highlight">0.3% Typical</td>
                      </tr>
                      <tr>
                        <td>Particle Size (2-4mm)</td>
                        <td>90% - 94% pass</td>
                        <td className="product-detailed__td-highlight">95.5% Typical</td>
                      </tr>
                      <tr>
                        <td>Formaldehyde (HCHO)</td>
                        <td>0.3% - 0.5% by weight</td>
                        <td className="product-detailed__td-highlight">0.45% Typical</td>
                      </tr>
                      <tr>
                        <td>Bulk Density (Tapped)</td>
                        <td>700 - 780 kg/m³</td>
                        <td className="product-detailed__td-highlight">740 kg/m³ Typical</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="product-detailed__info-boxes">
                  <div className="product-detailed__info-box">
                    <div className="product-detailed__info-title">
                      <span className="product-detailed__info-icon">🌿</span> Agronomic Use Case
                    </div>
                    <p className="product-detailed__info-text">
                      Highest concentration solid nitrogen fertilizer. Excellent for top-dressing and basal application across cereals, cotton, and broadacre farming. Formaldehyde conditioning provides anti-caking properties during transit and storage.
                    </p>
                  </div>
                  <div className="product-detailed__info-box">
                    <div className="product-detailed__info-title">
                      <span className="product-detailed__info-icon">📦</span> Storage & Handling Guidelines
                    </div>
                    <p className="product-detailed__info-text">
                      Highly hygroscopic material. Must be stored in dry, well-ventilated warehousing, completely shielded from direct sunlight and moisture. Bagging includes inner PE liner for moisture protection during maritime shipping.
                    </p>
                  </div>
                </div>

                <div className="product-detailed__actions">
                  <button onClick={() => handleNav('#contact', 'home')} className="product-detailed__btn-primary">
                    <span style={{ marginRight: '8px' }}>✉</span> Request Bulk Export Quote
                  </button>
                  <button className="product-detailed__btn-outline">
                    <span style={{ marginRight: '8px' }}>⬇</span> Download SDS Data
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
            <div className="section-label">ASSURANCE & EXPORT COMPLIANCE</div>
            <h2 className="about-section-title">Institutional Quality Verification & Traceability</h2>
            <p className="about-section-desc">
              Every shipment is verified against contractual parameters by independent surveyor authorities, ensuring guaranteed delivery specifications straight to the port of discharge.
            </p>
          </div>

          <div className="products-quality__grid">
            <div className="products-quality__card">
              <div className="products-quality__icon">🏭</div>
              <h4 className="products-quality__title">ISO 9001:2015 Manufacturing Quality</h4>
              <p className="products-quality__desc">Total end-to-end quality control spanning raw material sourcing, chemical processing, granulation, cooling, and automated bagging lines at the factory level.</p>
            </div>
            <div className="products-quality__card">
              <div className="products-quality__icon">📋</div>
              <h4 className="products-quality__title">SGS / Bureau Veritas Pre-Shipment</h4>
              <p className="products-quality__desc">Mandatory independent laboratory testing and draft surveying conducted at the load port. Full certification of quality, quantity, and weight provided with shipping documents.</p>
            </div>
            <div className="products-quality__card">
              <div className="products-quality__icon">🌐</div>
              <h4 className="products-quality__title">REACH & Global Trade Compliant</h4>
              <p className="products-quality__desc">In alignment with international GHS standards and REACH registration guidelines, supporting smooth customs clearance and regulatory compliance across destination markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ═════════════════════════════════════ */}
      <section className="products-cta">
        <div className="container">
          <div className="products-cta__inner">
            <div className="products-cta__text">
              <span className="products-cta__tag">GLOBAL DISTRIBUTION NETWORK</span>
              <h2 className="products-cta__title">
                Need More Information About Our Products or Custom Blends?
              </h2>
              <p className="products-cta__desc">
                Our agronomic and export teams are ready to provide custom formulations, exact shipping schedules, bespoke packaging configurations, and competitive CIF/FOB pricing tailored to your import requirements.
              </p>
            </div>
            <div className="products-cta__actions">
              <button
                className="products-cta__btn-white"
                onClick={() => handleNav('#contact', 'home')}
              >
                Connect With Regional Sales Desk
              </button>
              <button
                className="products-cta__btn-outline"
                onClick={() => handleNav('#contact', 'home')}
              >
                Send Request for Information (RFI)
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
              <button onClick={() => handleNav('#about', 'about')} className="footer__col-link-btn">
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