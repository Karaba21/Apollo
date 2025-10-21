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

        // Header siempre visible (comentado el hide/show)
        // if (scrollTop > lastScrollTop && scrollTop > 200) {
        //     header.style.transform = 'translateY(-100%)';
        // } else {
        //     header.style.transform = 'translateY(0)';
        // }
        
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
        bottom: 100px;
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
        document.body.style.transform = 'none';
    });

    // Aplicar estilos de preloader
    document.body.style.opacity = '0';
    document.body.style.transform = 'none';
    document.body.style.transition = 'opacity 0.8s ease';
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

// Language Dropdown Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando dropdown de idioma...'); // Debug
    
    // Configuración de idiomas
    const languages = {
        es: {
            code: 'ES',
            name: 'Español',
            flag: '🇪🇸'
        },
        en: {
            code: 'EN',
            name: 'English',
            flag: '🇺🇸'
        }
    };
    
    // Traducciones
    const translations = {
        es: {
            'nav.services': 'Servicios',
            'nav.pricing': 'Planes',
            'nav.contact': 'Contacto',
            'nav.team': 'Equipo',
            'hero.title': 'Soluciones para tu empresa',
            'hero.subtitle': 'Desarrollo de páginas web y sistemas CRM simples y efectivos',
            'hero.contact': 'Contactanos',
            'companies.title': 'Empresas que confían en nosotros',
            'services.title': 'Servicios que brindamos',
            'services.web.title': 'Creación de páginas web',
            'services.web.subtitle': 'Catapulta tu negocio con una página web',
            'services.crm.title': 'CRM adaptado a tus necesidades',
            'services.crm.subtitle': 'Maneja tu negocio de forma sencilla',
            'services.ecommerce.title': 'E-commerce adaptado a tus necesidades',
            'services.ecommerce.subtitle': 'Vende en tu web de forma sencilla y segura',
            'services.database.title': 'Conexión con base de datos Supabase',
            'services.database.subtitle': 'Gestiona datos de forma simple y segura',
            'services.more_info': 'Más info',
            'pricing.title': 'Planes',
            'pricing.landing.title': 'Landing Plan 🖥️',
            'pricing.landing.description': 'Tene tu presencia online en hasta 2 semanas.',
            'pricing.landing.feature1': 'Landing page profesional.',
            'pricing.landing.feature2': 'Configuración de hosting y dominio.',
            'pricing.landing.feature3': 'Diseño responsive y optimizado para conversión.',
            'pricing.landing.feature4': 'Mantenimiento mensual por 40usd (opcional)',
            'pricing.express.title': 'Express ⚡',
            'pricing.express.description': 'Tu página lista en solo 3 días.',
            'pricing.express.feature1': 'Landing page profesional',
            'pricing.express.feature2': 'Configuración de hosting y dominio.',
            'pricing.express.feature3': 'Diseño responsive + entrega exprés.',
            'pricing.express.feature4': 'Mantenimiento mensual por 40usd (opcional)',
            'pricing.business.title': 'Business Plan 🚀',
            'pricing.business.description': 'Tu negocio digital completo en hasta 3 semanas.',
            'pricing.business.feature1': 'Página web completa profesional.',
            'pricing.business.feature2': 'Configuración de hosting y dominio.',
            'pricing.business.feature3': 'Integración y armado de CRM (HubSpot).',
            'pricing.business.feature4': 'Capacitación breve en uso de CRM',
            'pricing.business.feature5': 'Integración de e-commerce y armado de la tienda.',
            'pricing.business.feature6': 'Integración con base de datos Supabase',
            'pricing.business.feature7': 'Mantenimiento mensual por 80usd (opcional)',
            'pricing.request_info': 'Solicitar info',
            'contact.title': 'Conectá con nosotros',
            'contact.description': 'Completá el formulario y te respondemos por WhatsApp con toda la información que necesitás.',
            'contact.name_label': 'Nombre *',
            'contact.name_placeholder': 'Tu nombre completo',
            'contact.business_label': 'Rubro de tu emprendimiento o empresa *',
            'contact.business_placeholder': 'Ej: Restaurante, Tienda de ropa, Consultoría, etc.',
            'contact.service_label': 'Servicio que buscas *',
            'contact.service_placeholder': 'Ej: Landing Page, CRM HubSpot, E-commerce, etc.',
            'contact.time_label': 'Tiempo deseado del servicio *',
            'contact.time_placeholder': 'Ej: Urgente, 1-2 semanas, sin apuro, etc.',
            'contact.whatsapp_button': '💬 Conectar por WhatsApp',
            'team.name': 'Agustín Karabajich',
            'team.description': 'Soy estudiante de Ingeniería en Informática con una gran pasión por el desarrollo web y la innovación tecnológica. Creé Sav Solutions con la idea de ayudar a emprendimientos nuevos y pequeñas empresas a crecer mediante soluciones digitales simples, accesibles y efectivas. Mi objetivo es acompañar a los negocios en sus primeros pasos y brindarles herramientas que les permitan transformarse y destacarse en el mundo digital.',
            'disclaimers.included.title': 'Incluido en el precio',
            'disclaimers.included.description': 'El valor del plan cubre la configuración inicial de hosting y dominio, además del diseño y puesta en línea de tu sitio. El mantenimiento mensual es opcional, pero necesario si querés soporte y cambios continuos.',
            'disclaimers.additional.title': 'Costos adicionales',
            'disclaimers.additional.description': 'El servicio de hosting y el dominio no están incluidos en el precio del plan. Estos costos se pagan directamente al proveedor que elijas. Nosotros nos encargamos de dejar todo configurado y funcionando.',
            'disclaimers.business.title': 'Business Plan',
            'disclaimers.business.description': 'El Business Plan puede incluir todo lo mencionado arriba, en caso de no desear algun servicio el costo sigue siendo el mismo.'
        },
        en: {
            'nav.services': 'Services',
            'nav.pricing': 'Pricing',
            'nav.contact': 'Contact',
            'nav.team': 'Team',
            'hero.title': 'Solutions for your business',
            'hero.subtitle': 'Web page development and simple and effective CRM systems',
            'hero.contact': 'Contact us',
            'companies.title': 'Companies that trust us',
            'services.title': 'Services we provide',
            'services.web.title': 'Web page creation',
            'services.web.subtitle': 'Boost your business with a website',
            'services.crm.title': 'CRM adapted to your needs',
            'services.crm.subtitle': 'Manage your business simply',
            'services.ecommerce.title': 'E-commerce adapted to your needs',
            'services.ecommerce.subtitle': 'Sell on your website simply and securely',
            'services.database.title': 'Supabase database connection',
            'services.database.subtitle': 'Manage data simply and securely',
            'services.more_info': 'More info',
            'pricing.title': 'Plans',
            'pricing.landing.title': 'Landing Plan 🖥️',
            'pricing.landing.description': 'Get your online presence in up to 2 weeks.',
            'pricing.landing.feature1': 'Professional landing page.',
            'pricing.landing.feature2': 'Hosting and domain configuration.',
            'pricing.landing.feature3': 'Responsive design and conversion optimized.',
            'pricing.landing.feature4': 'Monthly maintenance for 40usd (optional)',
            'pricing.express.title': 'Express ⚡',
            'pricing.express.description': 'Your page ready in just 3 days.',
            'pricing.express.feature1': 'Professional landing page',
            'pricing.express.feature2': 'Hosting and domain configuration.',
            'pricing.express.feature3': 'Responsive design + express delivery.',
            'pricing.express.feature4': 'Monthly maintenance for 40usd (optional)',
            'pricing.business.title': 'Business Plan 🚀',
            'pricing.business.description': 'Your complete digital business in up to 3 weeks.',
            'pricing.business.feature1': 'Complete professional website.',
            'pricing.business.feature2': 'Hosting and domain configuration.',
            'pricing.business.feature3': 'CRM integration and setup (HubSpot).',
            'pricing.business.feature4': 'Brief CRM usage training',
            'pricing.business.feature5': 'E-commerce integration and store setup.',
            'pricing.business.feature6': 'Supabase database integration',
            'pricing.business.feature7': 'Monthly maintenance for 80usd (optional)',
            'pricing.request_info': 'Request info',
            'contact.title': 'Connect with us',
            'contact.description': 'Fill out the form and we will respond via WhatsApp with all the information you need.',
            'contact.name_label': 'Name *',
            'contact.name_placeholder': 'Your full name',
            'contact.business_label': 'Your business or company sector *',
            'contact.business_placeholder': 'E.g: Restaurant, Clothing store, Consulting, etc.',
            'contact.service_label': 'Service you are looking for *',
            'contact.service_placeholder': 'E.g: Landing Page, HubSpot CRM, E-commerce, etc.',
            'contact.time_label': 'Desired service time *',
            'contact.time_placeholder': 'E.g: Urgent, 1-2 weeks, no rush, etc.',
            'contact.whatsapp_button': '💬 Connect via WhatsApp',
            'team.name': 'Agustín Karabajich',
            'team.description': 'I am a Computer Engineering student with a great passion for web development and technological innovation. I created Sav Solutions with the idea of helping new startups and small businesses grow through simple, accessible and effective digital solutions. My goal is to accompany businesses in their first steps and provide them with tools that allow them to transform and stand out in the digital world.',
            'disclaimers.included.title': 'Included in the price',
            'disclaimers.included.description': 'The plan value covers the initial setup of hosting and domain, in addition to the design and online launch of your site. Monthly maintenance is optional, but necessary if you want continuous support and changes.',
            'disclaimers.additional.title': 'Additional costs',
            'disclaimers.additional.description': 'The hosting service and domain are not included in the plan price. These costs are paid directly to the provider you choose. We take care of leaving everything configured and working.',
            'disclaimers.business.title': 'Business Plan',
            'disclaimers.business.description': 'The Business Plan can include everything mentioned above; if you do not want a service, the cost remains the same.'
        }
    };
    
    // Función para obtener el idioma actual
    function getCurrentLanguage() {
        return localStorage.getItem('language') || 'es'; // Por defecto español
    }
    
    // Función para guardar el idioma
    function setLanguage(lang) {
        localStorage.setItem('language', lang);
    }
    
    // Función para actualizar la visualización del idioma actual
    function updateLanguageDisplay() {
        const currentLang = getCurrentLanguage();
        const langData = languages[currentLang];
        
        const currentLangSpan = document.getElementById('current-lang');
        const currentLangMobileSpan = document.getElementById('current-lang-mobile');
        
        if (currentLangSpan) {
            currentLangSpan.textContent = langData.code;
        }
        if (currentLangMobileSpan) {
            currentLangMobileSpan.textContent = langData.code;
        }
        
        console.log('Idioma actual actualizado:', currentLang); // Debug
    }
    
    // Variable para evitar traducciones múltiples
    let isTranslating = false;
    
    // Función para traducir la página
    function translatePage(lang) {
        console.log('Traduciendo página a:', lang); // Debug
        
        // Evitar traducciones múltiples simultáneas
        if (isTranslating) {
            console.log('Traducción ya en progreso, saltando...');
            return;
        }
        
        isTranslating = true;
        
        // Verificar que el idioma existe en las traducciones
        if (!translations[lang]) {
            console.error(`Idioma ${lang} no encontrado en las traducciones`);
            isTranslating = false;
            return;
        }
        
        // Obtener todos los elementos con data-lang
        const elementsToTranslate = document.querySelectorAll('[data-lang]');
        
        elementsToTranslate.forEach(element => {
            const translationKey = element.getAttribute('data-lang');
            const translation = translations[lang][translationKey];
            
            if (translation) {
                // Si es un input o textarea, actualizar placeholder
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    // Solo actualizar si el contenido es diferente
                    if (element.textContent !== translation) {
                        element.textContent = translation;
                    }
                }
                console.log(`Traducido: ${translationKey} -> ${translation}`); // Debug
            } else {
                console.warn(`No se encontró traducción para: ${translationKey} en idioma: ${lang}`);
            }
        });
        
        isTranslating = false;
    }
    
    // Función para cambiar idioma
    function changeLanguage(lang) {
        console.log('Cambiando idioma a:', lang); // Debug
        setLanguage(lang);
        updateLanguageDisplay();
        
        // Traducir con una pequeña animación suave
        requestAnimationFrame(() => {
            translatePage(lang);
        });
        
        console.log(`Idioma cambiado a: ${lang}`);
    }
    
    // Función para cerrar dropdowns
    function closeDropdowns() {
        // Cerrar dropdown desktop
        const languageDropdown = document.querySelector('.language-dropdown');
        if (languageDropdown) {
            languageDropdown.classList.remove('active');
        }
        
        // Cerrar dropdown móvil
        const languageDropdownMobile = document.querySelector('.language-dropdown-mobile');
        if (languageDropdownMobile) {
            languageDropdownMobile.classList.remove('active');
        }
    }
    
    // Event listeners para los botones principales
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const dropdown = this.closest('.language-dropdown');
            dropdown.classList.toggle('active');
            console.log('Dropdown desktop toggled'); // Debug
        });
    }
    
    const languageToggleMobile = document.getElementById('language-toggle-mobile');
    if (languageToggleMobile) {
        languageToggleMobile.addEventListener('click', function(e) {
            e.stopPropagation();
            const dropdown = this.closest('.language-dropdown-mobile');
            dropdown.classList.toggle('active');
            console.log('Dropdown móvil toggled'); // Debug
        });
    }
    
    // Event listeners para las opciones de idioma (usando delegación de eventos)
    document.addEventListener('click', function(e) {
        // Verificar si se hizo clic en una opción de idioma
        if (e.target.closest('.language-option')) {
            const option = e.target.closest('.language-option');
            const lang = option.getAttribute('data-lang');
            console.log('Opción de idioma clickeada:', lang); // Debug
            changeLanguage(lang);
            closeDropdowns();
        }
        
        // Cerrar dropdowns al hacer click fuera
        if (!e.target.closest('.language-dropdown') && !e.target.closest('.language-dropdown-mobile')) {
            closeDropdowns();
        }
    });
    
    // Cerrar dropdowns con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeDropdowns();
        }
    });
    
    // Inicializar
    updateLanguageDisplay();
    
    // Solo traducir si no es el idioma por defecto (español)
    const currentLang = getCurrentLanguage();
    if (currentLang !== 'es') {
        // Solo traducir si el idioma guardado no es español
        setTimeout(() => {
            console.log('Inicializando traducción para idioma:', currentLang);
            translatePage(currentLang);
        }, 50);
    }
    
    // Función para obtener el idioma actual (útil para otras funciones)
    window.getCurrentLanguage = getCurrentLanguage;
    
    console.log('Dropdown de idioma inicializado correctamente'); // Debug
});

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones "Más info"
    const moreInfoButtons = document.querySelectorAll('.btn-more-info');
    
    // Obtener todos los modales
    const modals = document.querySelectorAll('.modal');
    
    // Obtener todos los botones de cerrar
    const closeButtons = document.querySelectorAll('.modal-close');
    
    // Función para abrir modal
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevenir scroll del body
        }
    }
    
    // Función para cerrar modal
    function closeModal(modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Restaurar scroll del body
    }
    
    // Event listeners para botones "Más info"
    moreInfoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceType = this.getAttribute('data-service');
            const modalId = `modal-${serviceType}`;
            openModal(modalId);
        });
    });
    
    // Event listeners para botones de cerrar
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });
    
    // Cerrar modal al hacer click fuera del contenido
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this);
            }
        });
    });
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('show')) {
                    closeModal(modal);
                }
            });
        }
    });
    
    // Cerrar modal al hacer click en botones del modal que redirigen al formulario
    const modalButtons = document.querySelectorAll('.btn-modal');
    modalButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Cerrar todos los modales abiertos
            modals.forEach(modal => {
                if (modal.classList.contains('show')) {
                    closeModal(modal);
                }
            });
        });
    });
    
    // Funcionalidad del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    const whatsappBtn = document.getElementById('whatsappBtn');
    
    if (contactForm && whatsappBtn) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los valores del formulario
            const nombre = document.getElementById('nombre').value.trim();
            const rubro = document.getElementById('rubro').value.trim();
            const servicio = document.getElementById('servicio').value;
            const tiempo = document.getElementById('tiempo').value;
            
            // Validar que todos los campos estén completos
            if (!nombre || !rubro || !servicio || !tiempo) {
                alert('Por favor, completá todos los campos del formulario.');
                return;
            }
            
            // Crear el mensaje de WhatsApp
            const mensaje = `Hola Sav Solutions! 👋

Mi nombre es: ${nombre}
Rubro de mi emprendimiento/empresa: ${rubro}
Servicio que busco: ${servicio}
Tiempo deseado: ${tiempo}

Me gustaría recibir más información sobre este servicio. ¡Gracias!`;
            
            // Codificar el mensaje para URL
            const mensajeCodificado = encodeURIComponent(mensaje);
            
            // Crear el enlace de WhatsApp
            const numeroWhatsApp = '59893350714';
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
            
            // Abrir WhatsApp
            window.open(urlWhatsApp, '_blank');
        });
    }
    
    
});