// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Update domain dynamically to the current host
const currentDomain = window.location.hostname || "ruby-star-portfolio.com";
const domainEl = document.getElementById('currentDomain');
if(domainEl) {
    domainEl.textContent = currentDomain;
    domainEl.href = window.location.href;
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // offset for navbar
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission handling (simulated)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;
        const statusDiv = document.getElementById('formStatus');
        
        btn.textContent = 'Sending...';
        btn.disabled = true;

        // In a real app we would fetch('/api/contact', {method: 'POST'})
        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
            statusDiv.innerHTML = '<p style="color: #D4AF37; margin-top: 15px; text-align: center;">Thank you! Your message has been sent successfully.</p>';
            contactForm.reset();
            
            setTimeout(() => {
                statusDiv.innerHTML = '';
            }, 5000);
        }, 1500);
    });
}
