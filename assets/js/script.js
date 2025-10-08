// ===== CONFIGURAÇÕES GLOBAIS =====
const CONFIG = {
    enableAnimations: true,
    animationThreshold: 0.1
};

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

function initializeApp() {
    // Inicializar todos os módulos
    initSmoothScroll();
    initScrollAnimations();
    initNavigationHighlight();

    // Carregar dados dinâmicos
    loadSkillsDivided();
    loadProjects();
    loadExperiences();
    loadEducations();
    loadCertifications();

    console.log('🚀 Portfolio Alvaro - Carregado!');
}

// ===== ANIMAÇÕES DE SCROLL =====
function initScrollAnimations() {
    if (!CONFIG.enableAnimations) return;

    const observerOptions = {
        threshold: CONFIG.animationThreshold,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observar elementos com classe fade-in
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
}

// ===== SCROLL SUAVE MELHORADO =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Método MELHORADO - calcula dinamicamente considerando zoom
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - navbarHeight - 20; // 20px extra de respiro

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== DESTAQUE DA NAVEGAÇÃO MELHORADO =====
function initNavigationHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', function () {
        let current = '';
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const scrollPosition = window.scrollY + navbarHeight + 100; // +100px de buffer

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionBottom = sectionTop + sectionHeight;

            // Ativa a seção se o scroll estiver DENTRO dela
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                current = section.getAttribute('id');
            }
        });

        // Se chegou no final da página, força o "Contato"
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
            current = 'contato';
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== MENU HAMBURGER =====
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuToggle = document.getElementById('menuToggle');

    mobileMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

function closeMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuToggle = document.getElementById('menuToggle');

    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    menuToggle.classList.remove('active');
}

// Adiciona evento ao botão
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    if (typeof loadSkillsDivided === 'function') loadSkillsDivided();
    if (typeof loadProjects === 'function') loadProjects();
    if (typeof loadExperience === 'function') loadExperiences();
    if (typeof loadEducation === 'function') loadEducations();
    if (typeof loadCertifications === 'function') loadCertifications();

    // Fecha menu ao clicar em links
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});