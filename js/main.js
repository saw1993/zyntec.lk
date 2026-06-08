// ── Sticky Navbar ───────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Active Nav Highlighting ─────────────────────────────────────────
const sections = document.querySelectorAll('main section, header');
const navLinks  = document.querySelectorAll('.nav-links a[href^="#"]');

const observerOptions = {
  root: null,
  rootMargin: '-40% 0px -55% 0px',
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, observerOptions);

sections.forEach(section => { if (section.id) observer.observe(section); });

// ── Form Submission ─────────────────────────────────────────────────
const contactForm = document.getElementById('contact-form');
const submitBtn   = document.getElementById('submit-btn');

if (contactForm && submitBtn) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML    = 'Submitting&hellip;';
    submitBtn.disabled     = true;
    submitBtn.style.opacity = '0.75';

    setTimeout(() => {
      submitBtn.innerHTML         = '&#10003; Inquiry Sent — We&rsquo;ll respond within 2 hours.';
      submitBtn.style.background  = 'linear-gradient(135deg, #10b981, #059669)';
      submitBtn.style.boxShadow   = '0 4px 14px rgba(16, 185, 129, 0.35)';
      submitBtn.style.opacity     = '1';
      contactForm.reset();

      setTimeout(() => {
        submitBtn.innerHTML        = originalHTML;
        submitBtn.style.background = '';
        submitBtn.style.boxShadow  = '';
        submitBtn.disabled         = false;
      }, 4000);
    }, 1500);
  });
}
