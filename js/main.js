// ===================================
// HEADER SCROLL EFFECT
// ===================================
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ===================================
// HAMBURGER MENU TOGGLE
// ===================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===================================
// MOBILE DROPDOWN FUNCTIONALITY
// ===================================
if (window.innerWidth <= 768) {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');

        link.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });
    });

    const submenuItems = document.querySelectorAll('.dropdown-submenu');

    submenuItems.forEach(submenu => {
        const link = submenu.querySelector('a');

        link.addEventListener('click', (e) => {
            e.preventDefault();
            submenu.classList.toggle('active');
        });
    });
}

// ===================================
// HERO SLIDER
// ===================================
class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.autoplayDelay = 5000; // 5 seconds

        this.init();
    }

    init() {
        // Button events
        this.prevBtn.addEventListener('click', () => this.goToPrevSlide());
        this.nextBtn.addEventListener('click', () => this.goToNextSlide());

        // Dot events
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.goToPrevSlide();
            if (e.key === 'ArrowRight') this.goToNextSlide();
        });

        // Touch events for mobile swipe
        let touchStartX = 0;
        let touchEndX = 0;

        const sliderContainer = document.querySelector('.slider-container');

        sliderContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        sliderContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });

        const handleSwipe = () => {
            if (touchEndX < touchStartX - 50) this.goToNextSlide();
            if (touchEndX > touchStartX + 50) this.goToPrevSlide();
        };

        this.handleSwipe = handleSwipe;

        // Start autoplay
        this.startAutoplay();

        // Pause on hover
        sliderContainer.addEventListener('mouseenter', () => this.stopAutoplay());
        sliderContainer.addEventListener('mouseleave', () => this.startAutoplay());
    }

    goToSlide(index) {
        // Remove active class from current slide and dot
        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');

        // Update current slide
        this.currentSlide = index;

        // Add active class to new slide and dot
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');

        // Reset autoplay
        this.resetAutoplay();
    }

    goToNextSlide() {
        let nextSlide = this.currentSlide + 1;
        if (nextSlide >= this.slides.length) {
            nextSlide = 0;
        }
        this.goToSlide(nextSlide);
    }

    goToPrevSlide() {
        let prevSlide = this.currentSlide - 1;
        if (prevSlide < 0) {
            prevSlide = this.slides.length - 1;
        }
        this.goToSlide(prevSlide);
    }

    startAutoplay() {
        this.slideInterval = setInterval(() => {
            this.goToNextSlide();
        }, this.autoplayDelay);
    }

    stopAutoplay() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
        }
    }

    resetAutoplay() {
        this.stopAutoplay();
        this.startAutoplay();
    }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HeroSlider();
});

// ===================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Ignore if it's just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();

            // Close mobile menu if open
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');

            // Smooth scroll to target
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// NEWSLETTER FORM HANDLER
// ===================================
const newsletterForm = document.getElementById('newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = e.target.querySelector('input[type="email"]').value;

    // Here you would normally send the email to your backend
    // For now, we'll just show an alert
    alert(`¡Gracias por suscribirte! Te enviaremos novedades a: ${email}`);

    // Clear the form
    e.target.reset();
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.product-card, .service-card, .service-item, .certification-item'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===================================
// CERTIFICATIONS CAROUSEL AUTO-SCROLL
// ===================================
// Pause certifications animation on hover
const certificationsContainer = document.querySelector('.certifications-container');

if (certificationsContainer) {
    certificationsContainer.addEventListener('mouseenter', () => {
        certificationsContainer.style.animationPlayState = 'paused';
    });

    certificationsContainer.addEventListener('mouseleave', () => {
        certificationsContainer.style.animationPlayState = 'running';
    });
}

// ===================================
// CLIENTS CAROUSEL PAUSE ON HOVER
// ===================================
const clientsTrack = document.getElementById('clients-track');

if (clientsTrack) {
    clientsTrack.addEventListener('mouseenter', () => {
        clientsTrack.style.animationPlayState = 'paused';
    });

    clientsTrack.addEventListener('mouseleave', () => {
        clientsTrack.style.animationPlayState = 'running';
    });
}

// ===================================
// LAZY LOADING IMAGES
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// SCROLL TO TOP BUTTON (Optional)
// ===================================
// Create scroll to top button
const createScrollToTopBtn = () => {
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.className = 'scroll-to-top';
    btn.setAttribute('aria-label', 'Volver arriba');

    btn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    `;

    document.body.appendChild(btn);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.style.opacity = '1';
            btn.style.visibility = 'visible';
        } else {
            btn.style.opacity = '0';
            btn.style.visibility = 'hidden';
        }
    });

    // Scroll to top on click
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-5px)';
        btn.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0)';
        btn.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    });
};

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', createScrollToTopBtn);

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events if needed
const debouncedScroll = debounce(() => {
    // Any expensive scroll operations can go here
}, 100);

window.addEventListener('scroll', debouncedScroll);

// ===================================
// CONSOLE WELCOME MESSAGE
// ===================================
console.log('%c🔥 Total Protección - Soluciones Integrales en Protección Contra Incendio',
    'color: #c8102e; font-size: 16px; font-weight: bold;');
console.log('%cSocios de Melisam Fire Group',
    'color: #666; font-size: 12px;');
