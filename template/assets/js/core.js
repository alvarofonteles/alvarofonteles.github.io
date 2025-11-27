// ===== MÓDULO CORE COMPARTILHADO =====
const CORE = {
    // Configurações
    config: {
        enableAnimations: true,
        animationThreshold: 0.1
    },

    // ===== ANIMAÇÕES DE SCROLL =====
    initScrollAnimations: function() {
        if (!this.config.enableAnimations) return;
        
        setTimeout(() => {
            document.querySelectorAll('.fade-in').forEach(section => {
                section.classList.add('visible');
            });
        }, 1000);
        
        // ANIMAÇÃO NO SCROLL (opcional e simples)
        window.addEventListener('scroll', () => {
            document.querySelectorAll('.fade-in:not(.visible)').forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.8) {
                    section.classList.add('visible');
                }
            });
        });
    },

    // ===== SCROLL SUAVE =====
    initSmoothScroll: function() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Método MELHORADO - calcula dinamicamente considerando zoom
                    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = targetPosition - navbarHeight - 20;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    },

    // ===== DESTAQUE DA NAVEGAÇÃO =====
    initNavigationHighlight: function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar a');

        window.addEventListener('scroll', () => {
            let current = '';
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            const scrollPosition = window.scrollY + navbarHeight + 100;

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
    },

    // ===== MENU HAMBURGER =====
    toggleMenu: function() {
        const mobileMenu = document.getElementById('mobileMenu');
        const menuOverlay = document.getElementById('menuOverlay');
        const menuToggle = document.getElementById('menuToggle');

        mobileMenu?.classList.toggle('active');
        menuOverlay?.classList.toggle('active');
        menuToggle?.classList.toggle('active');
    },

    closeMenu: function() {
        const mobileMenu = document.getElementById('mobileMenu');
        const menuOverlay = document.getElementById('menuOverlay');
        const menuToggle = document.getElementById('menuToggle');

        mobileMenu?.classList.remove('active');
        menuOverlay?.classList.remove('active');
        menuToggle?.classList.remove('active');
    },

    // ===== INICIALIZAÇÃO CORE =====
    initializeCore: function() {
        // Menu hamburger
        const menuToggle = document.getElementById('menuToggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', this.toggleMenu.bind(this));
        }

        // Fecha menu ao clicar em links
        const mobileLinks = document.querySelectorAll('.mobile-menu a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', this.closeMenu.bind(this));
        });

        // Animações e navegação
        this.initScrollAnimations();
        this.initSmoothScroll();
        this.initNavigationHighlight();
    }
};