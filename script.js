// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Simple mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if(hamburger) {
    hamburger.addEventListener('click', () => {
        // Just a basic alert for now to show interaction intent
        // In a real app we would toggle a class to show/hide the menu
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(255,255,255,0.95)';
        navLinks.style.padding = '2rem';
        navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        
        // Change link colors for mobile menu
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.style.color = '#000';
            link.style.marginBottom = '1rem';
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // close mobile menu if open
        if(window.innerWidth <= 768 && navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        }

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// Animation on scroll (Simple Reveal)
const cards = document.querySelectorAll('.card');
const aboutText = document.querySelector('.about-text');
const aboutImage = document.querySelector('.about-image');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
        }
    });

    if(aboutText) {
        if(aboutText.getBoundingClientRect().top < triggerBottom) {
            aboutText.style.opacity = '1';
            aboutText.style.transform = 'translateX(0)';
        } else {
            aboutText.style.opacity = '0';
            aboutText.style.transform = 'translateX(-30px)';
        }
    }

    if(aboutImage) {
        if(aboutImage.getBoundingClientRect().top < triggerBottom) {
            aboutImage.style.opacity = '1';
            aboutImage.style.transform = 'translateX(0)';
        } else {
            aboutImage.style.opacity = '0';
            aboutImage.style.transform = 'translateX(30px)';
        }
    }
};

// Initial state for animations
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
});

if(aboutText) {
    aboutText.style.opacity = '0';
    aboutText.style.transform = 'translateX(-30px)';
    aboutText.style.transition = 'all 0.8s ease-out';
}

if(aboutImage) {
    aboutImage.style.opacity = '0';
    aboutImage.style.transform = 'translateX(30px)';
    aboutImage.style.transition = 'all 0.8s ease-out';
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
