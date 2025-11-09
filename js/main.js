// Mobile Menu Toggle
// const burger = document.getElementById('burger');
// const nav = document.querySelector('.nav-links');

// if (burger && nav) {
//     burger.addEventListener('click', () => {
//         nav.classList.toggle('active');
//     });
// }

// Back to Top Button
// const backToTopButton = document.getElementById('backToTop');

// if (backToTopButton) {
//     window.addEventListener('scroll', () => {
//         if (window.pageYOffset > 300) {
//             backToTopButton.style.display = "block";
//         } else {
//             backToTopButton.style.display = "none";
//         }
//     });

//     backToTopButton.addEventListener('click', () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     });
// }

// Optional: Auto-rotate testimonials (uncomment to enable)
/*
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function rotateTestimonials() {
    testimonials.forEach(t => t.style.display = 'none');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].style.display = 'block';
}

if (testimonials.length > 0) {
    testimonials[0].style.display = 'block';
    setInterval(rotateTestimonials, 5000);
}
*/

// Mobile Menu Toggle
const burger = document.getElementById('burger');
const nav = document.querySelector('.nav-links');

if (burger && nav) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        backToTopButton.style.display = window.pageYOffset > 300 ? "block" : "none";
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============= THEME TOGGLE =============
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const THEME_KEY = 'darkMode';
const ICONS = {
    light: '🌙',
    dark: '☀️'
};

const applyTheme = (isDark) => {
    if (isDark) {
        body.classList.add('dark-mode');
        localStorage.setItem(THEME_KEY, 'enabled');
        if (themeToggle) {
            themeToggle.setAttribute('aria-pressed', 'true');
            const icon = themeToggle.querySelector('.theme-toggle__icon');
            if (icon) {
                icon.dataset.theme = 'light';
                icon.textContent = ICONS.dark;
            }
        }
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem(THEME_KEY, 'disabled');
        if (themeToggle) {
            themeToggle.setAttribute('aria-pressed', 'false');
            const icon = themeToggle.querySelector('.theme-toggle__icon');
            if (icon) {
                icon.dataset.theme = 'dark';
                icon.textContent = ICONS.light;
            }
        }
    }
};

applyTheme(localStorage.getItem(THEME_KEY) === 'enabled');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        applyTheme(!body.classList.contains('dark-mode'));
    });
}