import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import './Navbar.css';

export default function Navbar({ currentPage = 'home', onNavigate }) {
  const { t, language, toggleLanguage, productsData } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  // Track active section on the home page (anchor navigation)
  const [activeHomeSection, setActiveHomeSection] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('contact')) return 'contact';
      if (hash.includes('precision') || hash.includes('industrial') || hash.includes('supply')) {
        return 'ourBusiness';
      }
    }
    return 'home';
  });

  // Track scroll background change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll spy to detect active section when on the Home page
  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScrollSpy = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if near bottom of page (where #contact section is)
      if (scrollY + windowHeight >= documentHeight - 140) {
        setActiveHomeSection('contact');
        return;
      }

      const contactEl = document.querySelector('#contact');
      const precisionEl = document.querySelector('#precision');

      // Top detection threshold offset for 68px navbar
      if (contactEl) {
        const contactRect = contactEl.getBoundingClientRect();
        if (contactRect.top <= 160 && contactRect.bottom > 80) {
          setActiveHomeSection('contact');
          return;
        }
      }

      if (precisionEl) {
        const precisionRect = precisionEl.getBoundingClientRect();
        if (precisionRect.top <= 160) {
          setActiveHomeSection('ourBusiness');
          return;
        }
      }

      // Default to home section when near top
      setActiveHomeSection('home');
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [currentPage]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileOpen]);

  const handleNavClick = useCallback(
    (page, href, sectionId) => {
      setMobileOpen(false);
      setMobileProductsOpen(false);

      if (page === 'home' && sectionId) {
        setActiveHomeSection(sectionId);
      }

      if (onNavigate) {
        onNavigate(page, href);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [onNavigate]
  );

  const navLinks = [
    { id: 'home', label: t('nav.home'), href: '#hero', page: 'home' },
    { id: 'about', label: t('nav.about'), href: '#about', page: 'about' },
    {
      id: 'products',
      label: t('nav.products'),
      href: '#products',
      page: 'products',
      dropdown: productsData.map((p) => ({
        id: p.id,
        label: p.name,
        href: `#${p.id}`,
        page: 'products',
      })),
    },
    {
      id: 'ourBusiness',
      label: t('nav.ourBusiness'),
      href: '#precision',
      page: 'home',
    },
    { id: 'contact', label: t('nav.contact'), href: '#contact', page: 'home' },
  ];

  // Exactly one link is active at any time:
  // - On 'about' page -> only 'about'
  // - On 'products' page -> only 'products'
  // - On 'home' page -> only activeHomeSection ('home' | 'ourBusiness' | 'contact')
  const isLinkActive = (link) => {
    if (currentPage === 'about') {
      return link.id === 'about';
    }
    if (currentPage === 'products') {
      return link.id === 'products';
    }
    // currentPage === 'home'
    return link.id === activeHomeSection;
  };

  return (
    <header className="navbar-wrapper">
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="Main Navigation">
        <div className="navbar__inner">
          {/* Logo */}
          <a
            className="navbar__logo"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home', '#hero', 'home');
            }}
          >
            <div className="navbar__logo-icon">🌿</div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">The Egyptian Trading Co.</span>
              <span className="navbar__logo-tagline">{t('nav.tagline')}</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="navbar__links" aria-label="Desktop Links">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.id} className="navbar__dropdown">
                  <a
                    className={`navbar__link${isLinkActive(link) ? ' active' : ''}`}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.page, link.href, link.id);
                    }}
                  >
                    <span>{link.label}</span>
                    <span className="navbar__link-arrow" aria-hidden="true">▾</span>
                  </a>
                  <div className="navbar__dropdown-menu">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.id}
                        className="navbar__dropdown-item"
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.page, item.href, 'products');
                        }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.id}
                  className={`navbar__link${isLinkActive(link) ? ' active' : ''}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.page, link.href, link.id);
                  }}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Desktop Right Actions: Language Switcher & Quote CTA */}
          <div className="navbar__actions">
            <button
              type="button"
              className="navbar__lang-btn"
              onClick={toggleLanguage}
              aria-label={`Switch language to ${language === 'en' ? 'Français' : 'English'}`}
              title={`Switch language to ${language === 'en' ? 'Français' : 'English'}`}
            >
              <span className="navbar__lang-globe" aria-hidden="true">🌐</span>
              <span className="navbar__lang-name">{language === 'en' ? 'Français' : 'English'}</span>
            </button>

            <button
              type="button"
              className="navbar__btn-cta"
              onClick={() => handleNavClick('home', '#contact', 'contact')}
            >
              {t('nav.requestQuote')}
            </button>
          </div>

          {/* Mobile Header Controls: Quick Language Switcher & Hamburger Toggle */}
          <div className="navbar__mobile-header-controls">
            <button
              type="button"
              className="navbar__lang-btn navbar__lang-btn--compact"
              onClick={toggleLanguage}
              aria-label={`Switch language to ${language === 'en' ? 'Français' : 'English'}`}
            >
              <span className="navbar__lang-globe" aria-hidden="true">🌐</span>
              <span className="navbar__lang-name">{language === 'en' ? 'Français' : 'English'}</span>
            </button>

            <button
              type="button"
              className="navbar__hamburger"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
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
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`navbar__mobile-menu${mobileOpen ? ' open' : ''}`}>
          <div className="navbar__mobile-nav-list">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.id} className="navbar__mobile-dropdown-group">
                  <div className="navbar__mobile-dropdown-header">
                    <a
                      className={`navbar__mobile-link${isLinkActive(link) ? ' active' : ''}`}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.page, link.href, link.id);
                      }}
                    >
                      {link.label}
                    </a>
                    <button
                      type="button"
                      className="navbar__mobile-accordion-toggle"
                      onClick={() => setMobileProductsOpen((prev) => !prev)}
                      aria-label="Toggle products submenu"
                    >
                      <span
                        className="navbar__link-arrow"
                        style={{
                          transform: mobileProductsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          display: 'inline-block',
                          transition: 'transform 0.2s ease',
                        }}
                      >
                        ▾
                      </span>
                    </button>
                  </div>
                  {mobileProductsOpen && (
                    <div className="navbar__mobile-sublinks">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.id}
                          className="navbar__mobile-sublink"
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item.page, item.href, 'products');
                          }}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.id}
                  className={`navbar__mobile-link${isLinkActive(link) ? ' active' : ''}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.page, link.href, link.id);
                  }}
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Mobile Language Switcher Row */}
          <div className="navbar__mobile-lang-row">
            <span className="navbar__mobile-lang-label">
              {language === 'en' ? 'Language:' : 'Langue :'}
            </span>
            <button
              type="button"
              className="navbar__lang-btn navbar__lang-btn--drawer"
              onClick={toggleLanguage}
            >
              <span className="navbar__lang-globe" aria-hidden="true">🌐</span>
              <span>{language === 'en' ? 'Français' : 'English'}</span>
            </button>
          </div>

          {/* Mobile Action Buttons */}
          <div className="navbar__mobile-actions">
            <a href="tel:+201110009980" className="btn btn-outline">
              {t('nav.callUs')}
            </a>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleNavClick('home', '#contact', 'contact')}
            >
              {t('nav.requestQuote')}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
