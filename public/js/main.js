// Sticky Navbar Effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Active Navigation Highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Form Submission Simulation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Submitting...';
    btn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
      btn.textContent = 'Inquiry Sent Successfully';
      btn.style.backgroundColor = '#10b981'; // Success green
      btn.style.color = '#fff';
      contactForm.reset();
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = '';
        btn.style.color = '';
        btn.disabled = false;
      }, 3000);
    }, 1500);
  });
}
