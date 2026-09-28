import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#hero', page: 'home' },
  { label: 'About Us', href: '#about', page: 'about' },
  {
    label: 'Products',
    href: '#products',
    page: 'products',
    dropdown: [
      { label: 'NPK Fertilizers', href: '#products', page: 'products' },
      { label: 'Urea', href: '#products', page: 'products' },
      { label: 'Granular Sulphur', href: '#products', page: 'products' },
      { label: 'Potassium Fertilizers', href: '#products', page: 'products' },
      { label: 'DAP', href: '#products', page: 'products' },
      { label: 'Superphosphate', href: '#products', page: 'products' },
      { label: 'Limestone', href: '#products', page: 'products' },
      { label: 'Granular Iron', href: '#products', page: 'products' },
      { label: 'Granular Manganese', href: '#products', page: 'products' },

    ],
  },
  {
    label: 'Our Business',
    href: '#precision',
    page: 'home',
  },
  { label: 'Contact', href: '#contact', page: 'home' },
];

export default function Navbar({ currentPage = 'home', onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (page, href) => {
    setMobileOpen(false);
    if (onNavigate) {
      onNavigate(page, href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isLinkActive = (link) => {
    if (link.page === currentPage) return true;
    return false;
  };

  return (
    <header>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar__inner">
          {/* Logo */}
          <a
            className="navbar__logo"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home', '#hero');
            }}
          >
            <div className="navbar__logo-icon">🌿</div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">The Egyptian Trading Co.</span>
              <span className="navbar__logo-tagline">Fertilizer · Trade · Export</span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="navbar__links">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="navbar__dropdown">
                  <a
                    className={`navbar__link${isLinkActive(link) ? ' active' : ''}`}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.page, link.href);
                    }}
                  >
                    {link.label}
                    <span className="navbar__link-arrow">▾</span>
                  </a>
                  <div className="navbar__dropdown-menu">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.label}
                        className="navbar__dropdown-item"
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.page, item.href);
                        }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.label}
                  className={`navbar__link${isLinkActive(link) ? ' active' : ''}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.page, link.href);
                  }}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span
              className="navbar__hamburger-line"
              style={mobileOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}}
            />
            <span
              className="navbar__hamburger-line"
              style={mobileOpen ? { opacity: 0 } : {}}
            />
            <span
              className="navbar__hamburger-line"
              style={mobileOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar__mobile-menu${mobileOpen ? ' open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              className={`navbar__mobile-link${isLinkActive(link) ? ' active' : ''}`}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.page, link.href);
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="navbar__mobile-actions">
            <a href="tel:+201110009980" className="btn btn-outline">📞 Call Us</a>
            <button
              className="btn btn-primary"
              onClick={() => handleNavClick('home', '#contact')}
            >
              Request a Quote
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
