function loadHTML(elementId, filePath) {
    return fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading HTML:', error);
        });
}

// Detect if in /services/ folder to adjust paths accordingly
const isInServicesFolder = window.location.pathname.includes('/services/');

// Load header and footer dynamically with relative paths
loadHTML('header', isInServicesFolder ? '../header.html' : 'header.html').then(() => {
    setActiveNavLink(); // Run after header is loaded to highlight active nav link
});
loadHTML('footer', isInServicesFolder ? '../footer.html' : 'footer.html');

// Function to add "active" class to current page nav link
function setActiveNavLink() {
    const currentPath = window.location.pathname === '/' ? '/' : window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        let linkPath = link.getAttribute('href');
        if (linkPath === '' || linkPath === '/') {
            linkPath = '/';
        } else {
            linkPath = linkPath.split('/').pop();
        }

        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// function loadHTML(elementId, filePath) {
//     fetch(filePath)
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById(elementId).innerHTML = data;
//         })
//         .catch(error => {
//             console.error('Error loading HTML:', error);
//         });
// }

// // Use relative paths based on current file location
// const isInServicesFolder = window.location.pathname.includes('/services/');

// loadHTML('header', isInServicesFolder ? '../header.html' : 'header.html');
// loadHTML('footer', isInServicesFolder ? '../footer.html' : 'footer.html');

document.addEventListener("DOMContentLoaded", function () {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        console.error("GSAP or ScrollTrigger is not loaded. Make sure the script tags are in your HTML file.");
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".nextgen-contact-enhanced .text-center h2, .nextgen-contact-enhanced .text-center .lead", {
        duration: 1,
        y: -50,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
    });

    gsap.from(".contact-wrapper", {
        duration: 1.2,
        y: 50,
        opacity: 0,
        delay: 0.4,
        ease: "power3.out"
    });

    gsap.from(".contact-info h3, .contact-info > p, .info-item", {
        duration: 0.8,
        x: -30,
        opacity: 0,
        stagger: 0.15,
        delay: 0.8,
        ease: "power3.out"
    });

    gsap.from(".contact-form .form-control, .contact-form .btn", {
        duration: 0.8,
        x: 30,
        opacity: 0,
        stagger: 0.15,
        delay: 1,
        ease: "power3.out"
    });

    gsap.utils.toArray(".contact-card").forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power3.out"
        });
    });
});
