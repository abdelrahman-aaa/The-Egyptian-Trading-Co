import heroFarmImg from '../assets/976f68972ffc918a2d6d17eacf3084bf.jpg';
import labImg from '../assets/7b4997f5946d184f30015154d38dda6d.jpg';
import industrialImg from '../assets/3591ce72270e8396cd2d2bb21dcc6953.jpg';
import supplyImg from '../assets/ChatGPT-Image-Sep-15-2026-09_27_12-AM-780x470.png';
import ureaBowlImg from '../assets/urea_bowl.jpg';
import sspImg from '../assets/bf8b30819e50db0bdabc998d85a59343.jpg';
import p1Img from '../assets/images (1).jpg';
import p3Img from '../assets/images (2).jpg';
import p2Img from '../assets/images.jpg';
import p4Img from '../assets/images (3).jpg';
import p5Img from '../assets/images (4).jpg';
import p11Img from '../assets/agricultural-lime-powder-500x500.webp';
import p12Img from '../assets/DAP.webp';

import './HomePage.css';

/* ── Product Portfolio ── */
const PRODUCTS = [
  {
    id: 1,
    badge: 'Multi-Nutrient',
    name: 'NPK Fertilizers',
    formula: 'Nitrogen · Phosphorus · Potassium',
    spec: 'Custom grades available',
    img: p1Img
  },
  {
    id: 2,
    badge: 'High-Nitrogen',
    name: 'Urea',
    formula: 'High-nitrogen agricultural fertilizer',
    spec: '46-0-0 · Granular & Prilled',
    img: ureaBowlImg,
  },
  {
    id: 3,
    badge: 'Sulphur',
    name: 'Granular Sulphur',
    formula: 'Soil management & fertilizer programs',
    spec: '99%+ Purity · Granulated',
    img: p2Img,
  },
  {
    id: 4,
    badge: 'Potassium',
    name: 'Potassium Fertilizers',
    formula: 'Plant development & crop quality',
    spec: 'MOP / SOP grades',
    img: p3Img,
  },
  {
    id: 5,
    badge: 'Micronutrient',
    name: 'Granular Iron',
    formula: 'Agricultural & soil-nutrition applications',
    spec: 'Granulated · Various grades',
    img: p4Img,
  },
  {
    id: 6,
    badge: 'Micronutrient',
    name: 'Granular Manganese',
    formula: 'Micronutrient management support',
    spec: 'Granulated · Various grades',
    img: p5Img,
  },
  {
    id: 7,
    badge: 'Phosphorus',
    name: 'Superphosphate',
    formula: 'Root development & crop nutrition',
    spec: 'SSP / TSP available',
    img: sspImg,
  },
  {
    id: 8,
    badge: 'Soil Conditioner',
    name: 'Limestone',
    formula: 'Soil conditioning & agricultural use',
    spec: 'Agricultural grade · Various sizes',
    img: p11Img,
  },
  {
    id: 9,
    badge: 'N-P',
    name: 'DAP',
    formula: 'Diammonium phosphate — N & P supply',
    spec: '18-46-0 · Granular',
    img: p12Img,
  },
];

/* ── Business Activities ── */
const ACTIVITIES = [
  {
    icon: '🏭',
    title: 'Manufacturing',
    desc: 'We manufacture selected fertilizer and mineral products according to agreed technical requirements. Our production focuses on product consistency, appropriate granulation and reliable preparation for storage and transport.',
  },
  {
    icon: '🔄',
    title: 'Trading & Sourcing',
    desc: 'We trade and source a broad range of fertilizers and soil-related minerals from reliable supply channels — offering customers product availability, competitive commercial terms and flexible supply solutions.',
  },
  {
    icon: '🚢',
    title: 'Export Services',
    desc: 'We support international customers with export coordination, documentation, packaging and shipment planning — from order confirmation through final dispatch to any global destination.',
  },
];

/* ── Supply Pillars ── */
const SUPPLY_PILLARS = [
  { icon: '📋', title: 'Consistent Specifications', desc: 'Products dispatched to the agreed spec every time.' },
  { icon: '🏭', title: 'Reliable Sourcing & Production', desc: 'Stable production planning and supply channels.' },
  { icon: '📦', title: 'Suitable Packaging', desc: 'Safe handling and packaging for all shipment sizes.' },
  { icon: '📄', title: 'Accurate Documentation', desc: 'Full commercial and export documentation provided.' },
  { icon: '📐', title: 'Flexible Quantities', desc: 'Flexible shipment quantities subject to agreement.' },
  { icon: '💬', title: 'Responsive Communication', desc: 'Clear communication throughout the order cycle.' },
];

/* ── Key Customers / Destinations ── */
const CUSTOMERS = [
  { flag: '🇮🇳', name: 'TATA Steel Ltd.', location: 'India', type: 'Key Customer' },
  { flag: '🇷🇸', name: 'Green Hills Gate', location: 'Serbia', type: 'Export Partner' },
  { flag: '🇨🇳', name: 'China Uwin Intl Co. Ltd', location: 'China', type: 'Trading Partner' },
  { flag: '🇨🇳', name: 'China Only Intelligeny Co. Ltd', location: 'China', type: 'Trading Partner' },
  { flag: '🇪🇬', name: 'NDS Egypt Co.', location: 'Egypt', type: 'Local Partner' },
];

export default function HomePage({ onNavigate }) {
  return (
    <main>
      {/* ══ HERO ══════════════════════════════════════════ */}
      <section id="hero" className="hero">
        <div className="hero__bg">
          <img src={heroFarmImg} alt="" className="hero__bg-img" />
          <div className="hero__bg-overlay" />
        </div>

        <div className="hero__content">
          {/* Left */}
          <div className="hero__left">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Egypt · Manufacturing · Trade · Export
            </div>

            <h1 className="hero__title">
              Reliable Products.
              <span className="hero__title-accent">Consistent Supply.</span>
              International Partnerships.
            </h1>

            <p className="hero__desc">
              The Egyptian Trading Company specializes in the manufacturing,
              trading and export of fertilizers and mineral soil-conditioning
              products — serving agricultural, industrial and commercial
              customers worldwide.
            </p>

            <div className="hero__actions">
              <button className="btn btn-primary" id="hero-products-btn"
                onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}>
                View Our Products
              </button>
              <button className="btn btn-outline" id="hero-quote-btn"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Request a Quote
              </button>
            </div>

            <div className="hero__stats">
              {[
                { val: '9+', label: 'Product Lines' },
                { val: '5+', label: 'Global Customers' },
                { val: '3', label: 'Business Activities' },
                { val: '🌍', label: 'Based in Giza, Egypt' },
              ].map((s) => (
                <div key={s.val} className="hero__stat">
                  <div className="hero__stat-value">{s.val}</div>
                  <div className="hero__stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="hero__right">
            <div className="hero__img-card">
              <img src={heroFarmImg} alt="Agricultural field" />
              <div className="hero__card-tag">
                <span className="hero__card-tag-icon">🇪🇬</span>
                <div className="hero__card-tag-text">
                  <span className="hero__card-tag-title">Based in Egypt</span>
                  <span className="hero__card-tag-sub">Dokki, Giza — Exporting Globally</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS BAR ══════════════════════════════════════ */}
      <div className="stats-bar">
        <div className="stats-bar__inner">
          {[
            { num: '9+', label: 'Fertilizer & Mineral Products' },
            { num: '5+', label: 'International Customers' },
            { num: '3', label: 'Core Business Activities' },
            { num: '🌐', label: 'Africa · Asia · Europe · Americas' },
          ].map((s) => (
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
            <span className="section-label">Company Overview</span>
            <h2 className="precision__title">Our Three Core Business Activities</h2>
            <p className="precision__desc">
              The Egyptian Trading Company is a specialized company operating in the
              manufacturing, trading and export of fertilizers and mineral
              soil-conditioning products. Our business is built around product quality,
              dependable supply, professional service and long-term customer relationships.
            </p>

            <div className="precision__checks">
              {ACTIVITIES.map((a) => (
                <div key={a.title} className="precision__check">
                  <div className="precision__check-icon">{a.icon}</div>
                  <div>
                    <strong>{a.title}:</strong> {a.desc}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '12px' }}>
              <button className="btn btn-outline-dark" id="about-learn-btn"
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}>
                Learn More About Us →
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="precision__img-wrap">
            <img src={labImg} alt="Fertilizer production and quality control" />
            <div className="precision__img-badge">
              <span className="precision__img-badge-icon">🏆</span>
              <div className="precision__img-badge-text">
                <span className="precision__img-badge-title">Quality First</span>
                <span className="precision__img-badge-sub">Consistent Specifications</span>
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
            <span className="section-label">Quality &amp; Supply</span>
            <h2 className="industrial__title">Product Quality &amp; Supply Approach</h2>
            <p className="industrial__desc">
              Quality and consistency are central to our operating approach. Before
              dispatch, products are prepared according to agreed specifications,
              commercial documentation and packaging requirements. We maintain clear
              communication throughout the order cycle so customers have full visibility.
            </p>
            <div className="industrial__features">
              {SUPPLY_PILLARS.map((f) => (
                <div key={f.title} className="industrial__feature">
                  <div className="industrial__feature-icon">{f.icon}</div>
                  <div className="industrial__feature-title">{f.title}</div>
                  <div className="industrial__feature-desc">{f.desc}</div>
                </div>
              ))}
            </div>
            <div>
              <button className="btn btn-outline-dark" id="supply-docs-btn"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Request Documentation →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GLOBAL CUSTOMERS ═══════════════════════════════ */}
      <section id="supply" className="supply">
        <div className="supply__header">
          <span className="section-label">Export Markets</span>
          <h2 className="supply__title">Our Global Customers &amp; Partners</h2>
          <p className="supply__desc">
            The Egyptian Trading Company has experience supplying international
            customers and exporting fertilizer and mineral products to overseas
            markets across Asia, Europe, Africa and beyond.
          </p>
        </div>

        <div className="supply__inner">
          <div className="supply__img-wrap">
            <img src={supplyImg} alt="Global supply chain and export operations" />
          </div>

          <div className="supply__regions">
            {CUSTOMERS.map((c) => (
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
            <span className="section-label">Why Choose Us</span>
            <h2 className="why-us__title">Why Choose The Egyptian Trading Company</h2>
          </div>
          <div className="why-us__grid">
            {[
              {
                icon: '🌿',
                title: 'Diversified Product Range',
                desc: 'Our portfolio covers primary nutrients, secondary and micronutrient products, soil conditioners and mineral materials — all through one professional trading and export partner.',
              },
              {
                icon: '🌍',
                title: 'International Supply Capability',
                desc: 'We understand the importance of shipment planning, documentation accuracy and coordination between suppliers, customers, ports and logistics providers.',
              },
              {
                icon: '🤝',
                title: 'Customer-Focused Service',
                desc: 'We work to understand each customer\'s technical and commercial requirements before confirming an order — providing support from quotation through final shipment.',
              },
              {
                icon: '📈',
                title: 'Long-Term Partnership',
                desc: 'We seek to build sustainable business relationships based on transparency, reliability and consistent performance — becoming a trusted regional and international partner.',
              },
            ].map((item) => (
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
          <h2 className="cta-banner__title">Looking for Reliable Fertilizer Solutions?</h2>
          <p className="cta-banner__desc">
            For product specifications, quotations, export inquiries and long-term
            supply opportunities, contact The Egyptian Trading Company today.
          </p>
          <div className="cta-banner__actions">
            <a href="mailto:info@egyptiantrading.com" className="cta-banner__btn-primary" id="cta-email-btn">
              ✉ Send an Enquiry
            </a>
            <a href="tel:+201110009980" className="cta-banner__btn-ghost" id="cta-call-btn">
              📞 +20 111 000 9980
            </a>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ═════════════════════════════════════════ */}
      <footer id="about" className="footer">
        <div className="footer__main">
          {/* Brand */}
          <div>
            <div className="footer__brand-logo">
              <div className="footer__brand-icon">🌿</div>
              <span className="footer__brand-name">The Egyptian Trading Co.</span>
            </div>
            <p className="footer__brand-desc">
              A specialized company in the manufacturing, trading and export of
              fertilizers and mineral soil-conditioning products. Committed to
              dependable supply and long-term customer partnerships.
            </p>
            <div style={{ marginTop: '12px', fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>
              <div>📍 51 Zahraa St, Dokki, Giza, Egypt</div>
              <div style={{ marginTop: '4px' }}>
                <a href="tel:+201110009980" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
                  📞 +20 111 000 9980
                </a>
              </div>
              <div style={{ marginTop: '4px' }}>
                <a href="tel:+201156186199" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
                  📞 +20 115 618 6199
                </a>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="footer__col-title">Products</div>
            <div className="footer__col-links">
              {['NPK Fertilizers', 'Urea', 'Granular Sulphur', 'Potassium Fertilizers', 'DAP', 'Superphosphate', 'Limestone', 'Granular Iron', 'Granular Manganese'].map((l) => (
                <a key={l} href="#products" className="footer__col-link">{l}</a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="footer__col-title">Our Business</div>
            <div className="footer__col-links">
              {['About Us', 'Manufacturing', 'Trading & Sourcing', 'Export Services', 'Quality Approach', 'Global Customers'].map((l) => (
                <a
                  key={l}
                  href={l === 'About Us' ? '#about' : '#precision'}
                  className="footer__col-link"
                  onClick={(e) => {
                    if (l === 'About Us' && onNavigate) {
                      e.preventDefault();
                      onNavigate('about');
                    }
                  }}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
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

        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <div className="footer__bottom" style={{ maxWidth: '100%' }}>
            <span>© 2026 The Egyptian Trading Company. All rights reserved.</span>
            <div className="footer__bottom-links">
              <a href="#" className="footer__bottom-link">Privacy Policy</a>
              <a href="#" className="footer__bottom-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
