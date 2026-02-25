/* ============================================================
   components.js — Shared Nav & Footer
   Edit this ONE file to update nav/footer across all pages.
   ============================================================ */

(function () {

  /* ── Determine which page is active ── */
  const path = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(page) {
    if (page === 'index.html' && (path === 'index.html' || path === '')) return 'active';
    if (path === page) return 'active';
    return '';
  }

  /* ── Logo SVG (reused in nav & footer) ── */
  const logoSVG = `
    <svg class="logo-icon" viewBox="0 0 40 36" fill="none">
      <polygon points="20,2 38,18 2,18" fill="FILL_COLOR"/>
      <rect x="6" y="17" width="28" height="17" fill="FILL_COLOR"/>
      <rect x="10" y="20" width="8" height="7" fill="BG_COLOR"/>
      <line x1="14" y1="20" x2="14" y2="27" stroke="FILL_COLOR" stroke-width="1"/>
      <line x1="10" y1="23.5" x2="18" y2="23.5" stroke="FILL_COLOR" stroke-width="1"/>
      <rect x="22" y="20" width="8" height="7" fill="BG_COLOR"/>
      <line x1="26" y1="20" x2="26" y2="27" stroke="FILL_COLOR" stroke-width="1"/>
      <line x1="22" y1="23.5" x2="30" y2="23.5" stroke="FILL_COLOR" stroke-width="1"/>
    </svg>`;

  const darkLogoSVG = logoSVG.replaceAll('FILL_COLOR', '#1e4035').replaceAll('BG_COLOR', '#f5f2eb');
  const lightLogoSVG = logoSVG.replaceAll('FILL_COLOR', 'rgba(255,255,255,0.88)').replaceAll('BG_COLOR', '#1e4035');

  /* ── NAV HTML ── */
  const navHTML = `
    <nav>
      <a href="index.html" class="logo">
        <div class="logo-mark">
          ${darkLogoSVG}
          <span class="logo-wordmark">Streamline</span>
        </div>
        <span class="logo-sub">Home Organizing</span>
      </a>

      <ul class="nav-links">
        <li><a href="index.html"    class="${isActive('index.html')}">Home</a></li>
        <li><a href="services.html" class="${isActive('services.html')}">Services</a></li>
        <li><a href="about.html"    class="${isActive('about.html')}">About</a></li>
        <li><a href="contact.html"  class="${isActive('contact.html')}">Contact</a></li>
      </ul>

      <a href="contact.html" class="btn-green">Get Started</a>

      <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <div class="mobile-menu" id="mobileMenu">
      <ul class="mobile-nav-links">
        <li><a href="index.html"    class="${isActive('index.html')}">Home</a></li>
        <li><a href="services.html" class="${isActive('services.html')}">Services</a></li>
        <li><a href="about.html"    class="${isActive('about.html')}">About</a></li>
        <li><a href="contact.html"  class="${isActive('contact.html')}">Contact</a></li>
      </ul>
      <a href="contact.html" class="btn-green">Get Started</a>
    </div>`;

  /* ── FOOTER HTML ── */
  const footerHTML = `
    <footer>
      <div class="container">
        <div class="footer-grid">

          <div>
            <a href="index.html" class="logo">
              <div class="logo-mark">
                ${lightLogoSVG}
                <span class="logo-wordmark" style="color:white;">Streamline</span>
              </div>
              <span class="logo-sub">Home Organizing</span>
            </a>
          </div>

          <div class="footer-links">
            <h4>Navigation</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>

          <div class="footer-contact-col">
            <h4>Contact</h4>
            <div class="contact-items">
              <div class="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.4 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.33 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                (123) 456-7891
              </div>
              <div class="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                info@stephaniewebsite.com
              </div>
              <div class="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                1234 Bay Area Place
              </div>
            </div>
          </div>

        </div>

        <div class="footer-bottom">
          <p>Stephanie Website 2025. All Rights Reserved.</p>
          <div class="footer-bottom-links">
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>`;

  /* ── Inject into page ── */
  document.getElementById('nav-placeholder').outerHTML  = navHTML;
  document.getElementById('foot-placeholder').outerHTML = footerHTML;

  /* ── Hamburger logic ── */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

})();
