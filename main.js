/* ============================================
   CyberCut Studio - Interactive Features
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all interactive components
    initNavigation();
    initSmoothScroll();
    initServiceTabs();
    initFAQ();
    initContactForm();
    initScrollAnimations();
<<<<<<< HEAD
    init3DTilt();
    initStatCounter();
=======
>>>>>>> 98480c9ea63182180347d8a6a2cc45e16645c0be
});

/**
 * Mobile Navigation Toggle
 */
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu on resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

/**
 * Service Tabs Switching
 */
function initServiceTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    if (!tabButtons.length || !tabPanels.length) return;

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;

            // Update button states
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update panel visibility
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === targetTab) {
                    panel.classList.add('active');
                }
            });
        });
    });
}

/**
 * FAQ Accordion
 */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        if (!question) return;

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all items
            faqItems.forEach(i => i.classList.remove('active'));

            // Toggle clicked item
            if (!isActive) {
                item.classList.add('active');
            }

            // Update aria-expanded
            question.setAttribute('aria-expanded', !isActive);
        });
    });
}

/**
 * Contact Form Validation
 */
function initContactForm() {
    const form = document.getElementById('contactForm');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Basic validation
        const errors = [];

        if (!data.name || data.name.trim().length < 2) {
            errors.push('Kérjük, add meg a neved.');
        }

        if (!data.email || !isValidEmail(data.email)) {
            errors.push('Kérjük, adj meg egy érvényes email címet.');
        }

        if (!data.service) {
            errors.push('Kérjük, válassz szolgáltatást.');
        }

        if (!data.message || data.message.trim().length < 10) {
            errors.push('Kérjük, írd le a projektet legalább 10 karakterben.');
        }

        if (errors.length > 0) {
            showFormMessage(form, errors.join('\n'), 'error');
            return;
        }

        // Success - in production this would send to backend
        showFormMessage(form, 'Köszönjük az üzenetet! 48 órán belül válaszolunk.', 'success');
        form.reset();

        // Log form data for debugging (remove in production)
        console.log('Form submitted:', data);
    });
}

/**
 * Email validation helper
 */
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Show form message
 */
function showFormMessage(form, message, type) {
    // Remove existing messages
    const existingMsg = form.querySelector('.form-message');
    if (existingMsg) existingMsg.remove();

    // Create message element
    const msgEl = document.createElement('div');
    msgEl.className = `form-message form-message--${type}`;
    msgEl.textContent = message;
    msgEl.style.cssText = `
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 8px;
        font-size: 0.9375rem;
        white-space: pre-line;
        ${type === 'error'
            ? 'background: rgba(255, 100, 100, 0.15); color: #ff6b6b; border: 1px solid rgba(255, 100, 100, 0.3);'
            : 'background: rgba(0, 255, 154, 0.15); color: #00FF9A; border: 1px solid rgba(0, 255, 154, 0.3);'
        }
    `;

    // Insert at the beginning of the form
    form.insertBefore(msgEl, form.firstChild);

    // Auto-remove success message after 5 seconds
    if (type === 'success') {
        setTimeout(() => msgEl.remove(), 5000);
    }
}

/**
 * Scroll-triggered Animations
 */
function initScrollAnimations() {
<<<<<<< HEAD
    // Extended list of elements to animate
    const animatedElements = document.querySelectorAll(
        '.glass-card, .stat-card, .pricing-card, .faq-item, .section-header, .service-card, .web-item'
    );

    // Timeline items get special staggered animation
    const timelineItems = document.querySelectorAll('.timeline-item');

    if (!animatedElements.length && !timelineItems.length) return;

    // Add initial hidden state with stronger dynamic feel
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(80px) scale(0.95)';
        el.style.transition = 'opacity 0.9s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1)';
    });

    // Timeline items with stagger delay
    timelineItems.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px) scale(0.9)';
        el.style.transition = `opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.2}s, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.2}s`;
    });

    // Observer for regular elements
=======
    const animatedElements = document.querySelectorAll(
        '.glass-card, .stat-card, .pricing-card, .timeline-item, .faq-item'
    );

    if (!animatedElements.length) return;

    // Add initial hidden state
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Create intersection observer
>>>>>>> 98480c9ea63182180347d8a6a2cc45e16645c0be
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
<<<<<<< HEAD
                entry.target.style.transform = 'translateY(0) scale(1)';
=======
                entry.target.style.transform = 'translateY(0)';
>>>>>>> 98480c9ea63182180347d8a6a2cc45e16645c0be
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

<<<<<<< HEAD
    // Observer for timeline - triggers line and items together
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger the animated line
                const timeline = document.querySelector('.timeline');
                if (timeline) {
                    timeline.classList.add('animate');
                }

                // Animate all timeline items (they stagger via CSS)
                timelineItems.forEach(item => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0) scale(1)';
                });
                timelineObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observe all elements
    animatedElements.forEach(el => observer.observe(el));

    // Observe first timeline item to trigger group
    if (timelineItems.length) {
        timelineObserver.observe(timelineItems[0]);
    }
=======
    // Observe elements
    animatedElements.forEach(el => observer.observe(el));
>>>>>>> 98480c9ea63182180347d8a6a2cc45e16645c0be
}

/**
 * Navbar background on scroll
 */
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    if (window.scrollY > 100) {
<<<<<<< HEAD
        navbar.style.background = 'rgba(11, 14, 20, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(11, 14, 20, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

/**
 * 3D Card Tilt Effect (disabled on touch devices)
 */
function init3DTilt() {
    // Skip on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        return;
    }

    const cards = document.querySelectorAll('.service-card, .pricing-card, .stat-card, .timeline-content');

    cards.forEach(card => {
        card.style.transformStyle = 'preserve-3d';
        card.style.transition = 'transform 0.1s ease-out';

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

/**
 * Stat Counter Animation
 */
function initStatCounter() {
    const statNumbers = document.querySelectorAll('.stat-number-big');

    if (!statNumbers.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endValue = parseInt(target.getAttribute('data-target'));
                const duration = 2000;
                const frameDuration = 1000 / 60;
                const totalFrames = Math.round(duration / frameDuration);
                let frame = 0;

                const counter = setInterval(() => {
                    frame++;
                    const progress = 1 - Math.pow(1 - (frame / totalFrames), 3);
                    const current = Math.round(endValue * progress);

                    if (frame === totalFrames) {
                        target.innerText = endValue;
                        clearInterval(counter);
                    } else {
                        target.innerText = current;
                    }
                }, frameDuration);

                observer.unobserve(target);
            }
        });
    }, {
        threshold: 0.1
    });

    statNumbers.forEach(stat => observer.observe(stat));
}
=======
        navbar.style.background = 'rgba(11, 14, 20, 0.7)'; // Scrolled: semi-transparent
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
        navbar.style.backdropFilter = 'blur(20px)'; // Ensure blur stays
    } else {
        navbar.style.background = 'rgba(11, 14, 20, 0.2)'; // Top: very transparent
        navbar.style.boxShadow = 'none';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});
>>>>>>> 98480c9ea63182180347d8a6a2cc45e16645c0be
