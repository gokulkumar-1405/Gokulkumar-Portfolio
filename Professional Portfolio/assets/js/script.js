// Scroll Progress Bar
const scrollProgress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Floating Navbar Scroll Styling
const navbar = document.querySelector('.navbar');

function closeMobileMenu() {
    if (!hamburger || !navMenu) return;
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('open');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (hamburger && navMenu && !hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        closeMobileMenu();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});

window.addEventListener('pageshow', closeMobileMenu);

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        link.classList.remove('active');
        if (href === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Particle Animation System
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random positioning
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        // Random size
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles will be called after loader exit

// --- 1. SUPERIOR SCROLL REVEAL SYSTEM ---
const revealObserverOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add a slight delay based on horizontal position or index for staggering
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('active-reveal');
            }, delay);
            revealObserver.unobserve(entry.target);
        }
    });
}, revealObserverOptions);

// Select all elements to be revealed
const revealElements = document.querySelectorAll(
    'section, .stat-card, .skill-category-card, .achievement-card, .project-card-premium, .cert-card-premium, .contact-card, .college-card, .hero-content > *, .about-new-grid > *, .info-field, .about-big-stat'
);

revealElements.forEach((el, i) => {
    el.classList.add('reveal-init');
    // Auto-staggering for grids
    if (el.parentElement.classList.contains('skills-modern-grid') || 
        el.parentElement.classList.contains('projects-premium-grid')) {
        el.dataset.delay = (i % 4) * 100;
    }
    revealObserver.observe(el);
});

// Add placeholder image if profile image doesn't exist
const profileImg = document.getElementById('profileImg');
if (profileImg) {
    profileImg.onerror = function() {
        this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%230a0e27" width="200" height="200"/%3E%3Ctext fill="%2300d9ff" font-family="Arial" font-size="80" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EGK%3C/svg%3E';
    };
}

// Scroll Handling for Parallax and Progress Bar
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    
    // Parallax update
    document.body.style.setProperty('--scroll', scrolled * 0.5 + 'px');

    // Progress Bar update
    const scrollProgress = document.querySelector('.scroll-progress');
    if (scrollProgress) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / totalHeight) * 100;
        scrollProgress.style.width = `${progress}%`;
    }
});

// Enhanced Typing Effects
function initTypingEffects() {
    const mainName = document.querySelector('.hero-main-name');
    const roleText = document.querySelector('.typing-text');
    
    // 1. Safe Name Fade
    if (mainName) {
        mainName.style.opacity = "0";
        mainName.style.filter = "blur(10px)";
        mainName.style.transform = "translateY(20px)";
        
        setTimeout(() => {
            mainName.style.transition = "all 1s cubic-bezier(0.23, 1, 0.32, 1)";
            mainName.style.opacity = "1";
            mainName.style.filter = "blur(0)";
            mainName.style.transform = "translateY(0)";
        }, 500);

        setTimeout(startRoleAnimations, 1500);
    }

    function startRoleAnimations() {
        if (!roleText) return;
        
        const roles = [
            "Passionate Web Developer & Cybersecurity Enthusiast | AI Explorer",
            "Full Stack Innovator",
            "Cybersecurity Strategist",
            "AI Integration Expert"
        ];
        
        let roleIndex = 0;
        
        async function runCycle() {
            if (!roleText) return;
            const target = roles[roleIndex];
            await matrixDecrypt(roleText, target);
            await new Promise(r => setTimeout(r, 3000));
            roleIndex = (roleIndex + 1) % roles.length;
            runCycle();
        }

        runCycle();
    }

    async function matrixDecrypt(element, targetText) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*";
        const duration = 1200;
        const frames = 25;
        const stepTime = duration / frames;
        
        for (let i = 0; i <= frames; i++) {
            let result = "";
            const progress = i / frames;
            
            for (let j = 0; j < targetText.length; j++) {
                if (j < progress * targetText.length) {
                    result += targetText[j];
                } else if (targetText[j] === " ") {
                    result += " ";
                } else {
                    result += chars[Math.floor(Math.random() * chars.length)];
                }
            }
            element.textContent = result;
            await new Promise(r => setTimeout(r, stepTime));
        }
        element.textContent = targetText;
    }
}

// Call the effect
initTypingEffects();

// Add hover effect sound (optional - can be enabled if needed)
const allCards = document.querySelectorAll('.stat-card, .skill-card, .achievement-card, .venture-card, .contact-card');
allCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Enhanced navbar background on scroll
// Enhanced navbar background on scroll (Managed by CSS class 'scrolled' now)
/*
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 217, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});
*/

// Add transition to navbar
navbar.style.transition = 'all 0.3s ease';

// CGPA cards animation on scroll with counter effect
const cgpaCards = document.querySelectorAll('.cgpa-card');
const cgpaObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
                
                // Animate CGPA number
                const cgpaElement = entry.target.querySelector('.cgpa');
                if (cgpaElement) {
                    const targetValue = parseFloat(cgpaElement.textContent);
                    let currentValue = 0;
                    const increment = targetValue / 50;
                    
                    const counter = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= targetValue) {
                            cgpaElement.textContent = targetValue.toFixed(2);
                            clearInterval(counter);
                        } else {
                            cgpaElement.textContent = currentValue.toFixed(2);
                        }
                    }, 20);
                }
            }, index * 100);
        }
    });
}, { threshold: 0.5 });

cgpaCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.8)';
    card.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    cgpaObserver.observe(card);
});

// Animate overall CGPA
const overallCGPA = document.querySelector('.cgpa-value');
if (overallCGPA) {
    const cgpaValueObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetValue = parseFloat(entry.target.textContent);
                let currentValue = 0;
                const increment = targetValue / 60;
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= targetValue) {
                        entry.target.textContent = targetValue.toFixed(2);
                        clearInterval(counter);
                    } else {
                        entry.target.textContent = currentValue.toFixed(2);
                    }
                }, 25);
            }
        });
    }, { threshold: 0.5 });
    
    cgpaValueObserver.observe(overallCGPA);
}

// Parallax effect disabled to keep hero text stable

// Trigger section and title animations on scroll
const revealSections = document.querySelectorAll('section');
const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            
            // Also reveal the title inside if it exists
            const title = entry.target.querySelector('.section-title');
            if (title) title.classList.add('revealed');
        }
    });
}, {
    threshold: 0.15
});

revealSections.forEach(section => revealOnScroll.observe(section));

// Premium Magnetic Button Effect
const magneticButtons = document.querySelectorAll('.btn, .social-icon, .btn-project-live, .btn-project-github, .contact-card');

magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = `translate(0px, 0px)`;
    });
});

// Enhanced 3D Tilt Effect
const tiltSettings = {
    max: 15,
    perspective: 1500,
    scale: 1.05,
    speed: 500,
    easing: "cubic-bezier(.03,.98,.52,.99)"
};

const tiltCards = document.querySelectorAll('.skill-category-card, .project-card-premium, .cert-card-premium, .achievement-card, .cgpa-card');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * tiltSettings.max;
        const rotateY = ((centerX - x) / centerX) * tiltSettings.max;
        
        card.style.transform = `perspective(${tiltSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${tiltSettings.scale}, ${tiltSettings.scale}, ${tiltSettings.scale})`;
        
        // Dynamic Glow
        const glowX = (x / rect.width) * 100;
        const glowY = (y / rect.height) * 100;
        card.style.setProperty('--glow-x', `${glowX}%`);
        card.style.setProperty('--glow-y', `${glowY}%`);
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(${tiltSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        card.style.transition = `all ${tiltSettings.speed}ms ${tiltSettings.easing}`;
    });

    card.addEventListener('mouseenter', () => {
        card.style.transition = "none";
    });
});

// Animate skill cards on scroll with stagger effect
const skillCards = document.querySelectorAll('.skill-category-card');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px) scale(0.95)';
    card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    skillObserver.observe(card);
});

// Console message
console.log('%c🚀 Portfolio Website', 'color: #F35C24; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with passion and innovation', 'color: #FF6B35; font-size: 14px;');
console.log('%c💼 GokulKumar P — Web Developer & AI Explorer', 'color: #F35C24; font-size: 14px;');


// Custom Cursor Logic
const cursorOuter = document.querySelector(".cursor-outer");
const cursorInner = document.querySelector(".cursor-inner");

if (cursorOuter && cursorInner) {
    document.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        cursorInner.style.transform = `translate(${x}px, ${y}px)`;
        cursorOuter.style.transform = `translate(${x - 17.5}px, ${y - 17.5}px)`;
    });

    const interactiveElements = document.querySelectorAll("a, button, .contact-card, .btn");
    interactiveElements.forEach(el => {
        el.addEventListener("mouseenter", () => {
            document.body.classList.add("cursor-hover");
        });
        el.addEventListener("mouseleave", () => {
            document.body.classList.remove("cursor-hover");
        });
    });
}

// Back to Top Logic
const backToTopBtn = document.getElementById("backToTop");
if (backToTopBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// Hide Page Loader on Load
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const heroContent = document.querySelector(".hero-content");
    
    if (loader) {
        // Wait for animation to finish before sliding out
        setTimeout(() => {
            loader.classList.add("hidden");
            
            // Start hero staggered animations after loader slides
            setTimeout(() => {
                if (heroContent) {
                    heroContent.classList.add("revealed");
                }
                
                // Initialize hero name typing once content is clear
                if (typeof initTypingEffects === "function") {
                    initTypingEffects();
                }
            }, 600);
        }, 1500);
    }
});


// --- CYBER HACKER TERMINAL LOGIC ---
const terminal = document.getElementById("terminalWidget");
const terminalBody = document.getElementById("terminalBody");
const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");
const terminalHeader = document.getElementById("terminalHeader");

const commands = {
    "help": "Available commands: <span class=\"cmd-text\">ls</span>, <span class=\"cmd-text\">whoami</span>, <span class=\"cmd-text\">skills</span>, <span class=\"cmd-text\">contact</span>, <span class=\"cmd-text\">clear</span>, <span class=\"cmd-text\">exit</span>",
    "ls": "Listing directories...<br><span class=\"cmd-text\">Projects/</span> <span class=\"cmd-text\">Certificates/</span> <span class=\"cmd-text\">Education/</span> <span class=\"cmd-text\">Socials.txt</span>",
    "whoami": "GokulKumar: A Passionate Web Developer & Cybersecurity Enthusiast on a mission to secure the future.",
    "skills": "Primary: React.js, Node.js, Python, Django, MySQL<br>Security: Network Security, Penetration Testing, Ethical Hacking",
    "contact": "E-mail: gokulkumar@example.com<br>LinkedIn: linkedin.com/in/gokulkumar-p",
    "clear": "CLEAR_TERMINAL"
};

if (terminalInput) {
    terminalInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const input = terminalInput.value.trim().toLowerCase();
            const outputLine = document.createElement("div");
            outputLine.innerHTML = `<span class="prompt">gokul@cyber-vault:~$</span> ${input}`;
            terminalOutput.appendChild(outputLine);

            if (input === "clear") {
                terminalOutput.innerHTML = "";
            } else if (input === "exit" || input === "minimize") {
                terminal.classList.add("terminal-minimized");
            } else if (commands[input]) {
                const response = document.createElement("div");
                response.classList.add("res-text");
                response.innerHTML = commands[input];
                terminalOutput.appendChild(response);
            } else if (input !== "") {
                const error = document.createElement("div");
                error.classList.add("res-text");
                error.innerHTML = `Command not found: <span class="cmd-text">${input}</span>. Type <span class="cmd-text">help</span> for commands.`;
                terminalOutput.appendChild(error);
            }

            terminalInput.value = "";
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    });

    // Toggle minimize on header click or buttons
    terminalHeader.addEventListener("dblclick", () => {
        terminal.classList.toggle("terminal-minimized");
    });
}

// Simple Drag Functionality
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

if (terminalHeader) {
    terminalHeader.addEventListener("mousedown", dragStart);
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", dragEnd);
}

function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    if (e.target === terminalHeader || e.target.parentElement === terminalHeader) {
        isDragging = true;
    }
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        xOffset = currentX;
        yOffset = currentY;
        setTranslate(currentX, currentY, terminal);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

function dragEnd() {
    isDragging = false;
}


// Focus input on terminal click
if (terminalBody) {
    terminalBody.addEventListener("click", () => {
        terminalInput.focus();
    });
}

// Control dots actions
const closeBtn = document.querySelector(".control-dot.close");
const minimizeBtn = document.querySelector(".control-dot.minimize");

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        terminal.style.display = "none";
    });
}

if (minimizeBtn) {
    minimizeBtn.addEventListener("click", () => {
        terminal.classList.toggle("terminal-minimized");
    });
}

// Project Image Carousel on Hover
const projectCarousels = document.querySelectorAll('.project-image-carousel');

projectCarousels.forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-image');
    let currentIndex = 0;
    let interval;

    function startCarousel() {
        interval = setInterval(() => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }, 2000); // Change image every 2 seconds
    }

    function stopCarousel() {
        clearInterval(interval);
        // Reset to first image
        images.forEach(img => img.classList.remove('active'));
        currentIndex = 0;
        images[currentIndex].classList.add('active');
    }

    carousel.parentElement.addEventListener('mouseenter', startCarousel);
    carousel.parentElement.addEventListener('mouseleave', stopCarousel);
});
