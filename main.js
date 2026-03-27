// main.js - Add interactive JS features for PlanKraft Website

document.addEventListener('DOMContentLoaded', function() {
    // Example 1: Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Example 2: Highlight nav on scroll (if nav exists)
    const navLinks = document.querySelectorAll('nav a');
    const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
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

    // Example 3: Animate social icons on hover
    document.querySelectorAll('.social-icons a').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.18)';
            icon.style.transition = 'transform 0.18s';
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = '';
        });
    });
});
