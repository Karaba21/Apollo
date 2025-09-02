// Smooth scrolling para enlaces de navegación
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }

        // Hide/show header on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Intersection Observer para animaciones
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animaciones
    const animatedElements = document.querySelectorAll('.service-card, .company, .team-content, .form-container');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Parallax effect para elementos del hero
    const heroVisuals = document.querySelector('.hero-visuals');
    const backgroundLines = document.querySelector('.background-lines');

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroVisuals) {
            heroVisuals.style.transform = `translate(-50%, -50%) translateY(${rate}px)`;
        }
        
        if (backgroundLines) {
            backgroundLines.style.transform = `translateY(${rate * 0.3}px)`;
        }
    });

    // Hover effects para botones
    const buttons = document.querySelectorAll('.btn-primary, .btn-connect, .btn-contact');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Counter animation para empresas
    const companies = document.querySelectorAll('.company');
    companies.forEach((company, index) => {
        company.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        company.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });

    // Service cards hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
        });
    });

    // Typing effect para el título principal
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Delay para el efecto de typing
        setTimeout(typeWriter, 500);
    }

    // Líneas de fondo animadas
    const lines = document.querySelectorAll('.line');
    lines.forEach((line, index) => {
        line.style.animationDelay = `${index * 2}s`;
    });

    // Formulario HubSpot - asegurar que se cargue correctamente
    const hubspotForm = document.querySelector('.hs-form-frame');
    if (hubspotForm) {
        // Verificar si el formulario se cargó
        const checkForm = setInterval(() => {
            if (hubspotForm.children.length > 0) {
                clearInterval(checkForm);
                hubspotForm.style.opacity = '1';
                hubspotForm.style.transform = 'translateY(0)';
            }
        }, 100);
    }

    // Scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(45deg, #6366f1, #8b5cf6);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
    `;
    
    document.body.appendChild(scrollToTopBtn);

    // Mostrar/ocultar botón scroll to top
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect para scroll to top
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 8px 25px rgba(99, 102, 241, 0.4)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 5px 15px rgba(99, 102, 241, 0.3)';
    });

    // Preloader effect
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
        document.body.style.transform = 'translateY(0)';
    });

    // Aplicar estilos de preloader
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(20px)';
    document.body.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

// Función para manejar el envío del formulario (cuando se implemente)
function handleFormSubmit(event) {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log('Formulario enviado');
}

// Función para abrir modal de contacto
function openContactModal() {
    // Implementar modal de contacto si es necesario
    console.log('Abrir modal de contacto');
}

// Función para scroll suave a secciones
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    const contactBtn = document.querySelector('a[href="#form"]');
  
    if (contactBtn) {
      contactBtn.addEventListener("click", (event) => {
        event.preventDefault(); // evita el salto inmediato
  
        const formSection = document.querySelector("#form");
        if (formSection) {
          formSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    }
  });